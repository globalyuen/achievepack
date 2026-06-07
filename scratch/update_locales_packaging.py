import os
import re
import json
import subprocess

def get_git_diff_u0(commit_range, filepath):
    cmd = ["git", "diff", "-U0", commit_range, "--", filepath]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return result.stdout

def parse_diff_u0(diff_content):
    chunks = []
    current_chunk = []
    
    # Split into lines
    lines = diff_content.splitlines()
    for line in lines:
        if line.startswith("@@"):
            if current_chunk:
                chunks.append(current_chunk)
            current_chunk = []
        elif line.startswith("-") and not line.startswith("---"):
            current_chunk.append(("minus", line[1:]))
        elif line.startswith("+") and not line.startswith("+++"):
            current_chunk.append(("plus", line[1:]))
            
    if current_chunk:
        chunks.append(current_chunk)
    return chunks

def align_lines(minus_line, plus_line):
    m = minus_line.strip()
    p = plus_line.strip()
    
    # Longest common prefix
    prefix = ""
    for i in range(min(len(m), len(p))):
        if m[i] == p[i]:
            prefix += m[i]
        else:
            break
            
    # Longest common suffix
    suffix = ""
    m_rev = m[::-1]
    p_rev = p[::-1]
    for i in range(min(len(m_rev), len(p_rev))):
        if m_rev[i] == p_rev[i]:
            suffix = m_rev[i] + suffix
        else:
            break
            
    m_val = m[len(prefix):]
    if suffix:
        m_val = m_val[:-len(suffix)]
        
    return m_val.strip(" '\"{},")

def evaluate_js_array(js_str):
    if not js_str:
        return None
    # Evaluate JS array using node.js
    cmd = ["node", "-e", "console.log(JSON.stringify(eval('(' + process.argv[1] + ')')))", js_str]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        return json.loads(res.stdout.strip())
    else:
        print(f"Warning: node evaluation failed for: {js_str[:50]}... Error: {res.stderr.strip()}")
        return None

def extract_balanced_array(content, var_name):
    # Find the start of the array: var_name = [
    start_match = re.search(r'\b' + re.escape(var_name) + r'\b\s*[:=]\s*\[', content)
    if not start_match:
        return None
    start_idx = start_match.end() - 1 # position of '['
    bracket_count = 0
    for idx in range(start_idx, len(content)):
        char = content[idx]
        if char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
            if bracket_count == 0:
                return content[start_idx : idx + 1]
    return None

def extract_all_keywords_arrays(content):
    arrays = []
    # Find all occurrences of keywords={[ or keywords: [
    matches = re.finditer(r'keywords\s*[:=]\s*\{?\s*\[', content)
    for match in matches:
        start_idx = match.end() - 1 # position of '['
        bracket_count = 0
        arr_str = None
        for idx in range(start_idx, len(content)):
            char = content[idx]
            if char == '[':
                bracket_count += 1
            elif char == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    arr_str = content[start_idx : idx + 1]
                    break
        if arr_str:
            evaluated = evaluate_js_array(arr_str)
            if evaluated:
                arrays.append(evaluated)
    return arrays

def get_original_file_content(filename):
    if filename in ["CustomBoxesPage.tsx", "VacuumPouchesPage.tsx"]:
        # Uncommitted refactored files -> original is in HEAD
        cmd = ["git", "show", f"HEAD:src/pages/packaging/{filename}"]
    else:
        # Committed refactored files -> original is at a8e4d1dd~1
        cmd = ["git", f"show", f"a8e4d1dd~1:src/pages/packaging/{filename}"]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return res.stdout

def extract_key_and_value(minus_lines, plus_lines, page_key):
    results = {}
    t_pattern = re.compile(r"t\((['\"`])(.*?)\1(?:,\s*\{.*?\})?\)")
    
    # Collect all matches of t() in plus_lines
    t_calls = []
    for p_type, p_line in plus_lines:
        for match in t_pattern.finditer(p_line):
            raw_key = match.group(2)
            key = raw_key.replace("${p}", f"seoPages.pages.{page_key}")
            if not key.startswith("seoPages.pages"):
                key = f"seoPages.pages.{page_key}.{key}"
            t_calls.append((key, p_line))
            
    if not t_calls:
        return results
        
    for key, p_line in t_calls:
        # Ignore structured properties that we will extract directly from original file
        if any(suffix in key for suffix in ["faqs", "tables", "relatedLinks", "keywords", "metaKeywords"]):
            continue
            
        # Extract items/listItems from the diff (bullet points or inline arrays)
        if key.endswith("items") or key.endswith("listItems"):
            items = []
            for m_type, m_line in minus_lines:
                # 1. Try matching <li> tag
                m = re.search(r"<li>[•✓\s]*(.*?)</li>", m_line)
                if m:
                    items.append(m.group(1).strip())
            # 2. Try matching quoted strings if no <li> found
            if not items:
                for m_type, m_line in minus_lines:
                    stripped = m_line.strip()
                    m = re.match(r"^(['\"])(.*?)\1,?$", stripped)
                    if m:
                        items.append(m.group(2).strip())
            if items:
                results[key] = items
                continue
                
        # Standard strings (single line/direct alignment)
        if len(minus_lines) == len(plus_lines):
            try:
                idx = [pl for pt, pl in plus_lines].index(p_line)
                m_line = minus_lines[idx][1]
                val = align_lines(m_line, p_line)
                if val:
                    results[key] = val
                    continue
            except ValueError:
                pass
                
        # Fallback to scanning all minus lines for a match
        for m_type, m_line in minus_lines:
            val = align_lines(m_line, p_line)
            if val and not (val.startswith("<") or val.endswith(">")):
                results[key] = val
                break
                
    return results

def merge_flat_keys_to_nested_dict(nested_dict, flat_dict):
    for key, value in flat_dict.items():
        parts = key.split('.')
        d = nested_dict
        for part in parts[:-1]:
            d = d.setdefault(part, {})
        d[parts[-1]] = value

def main():
    pages = {
        "FlatBottomBagsPage.tsx": ("a8e4d1dd~1..a8e4d1dd", "flatBottomBags"),
        "FlatPouchesPage.tsx": ("a8e4d1dd~1..a8e4d1dd", "flatPouches"),
        "SideGussetBagsPage.tsx": ("a8e4d1dd~1..a8e4d1dd", "sideGussetBags"),
        "SpoutPouchesPage.tsx": ("a8e4d1dd~1..a8e4d1dd", "spoutPouches"),
        "StandUpPouchesPage.tsx": ("a8e4d1dd~1..a8e4d1dd", "standUpPouches"),
        "CustomBoxesPage.tsx": ("HEAD", "customBoxes"),
        "VacuumPouchesPage.tsx": ("HEAD", "vacuumPouches")
    }
    
    extracted_translations = {}
    
    # Step 1: Extract standard strings and items lists from the diffs
    for filename, (commit_range, page_key) in pages.items():
        filepath = f"src/pages/packaging/{filename}"
        print(f"Extracting diff translations for {filename}...")
        diff = get_git_diff_u0(commit_range, filepath)
        chunks = parse_diff_u0(diff)
        
        for chunk in chunks:
            minus_lines = [item for item in chunk if item[0] == "minus"]
            plus_lines = [item for item in chunk if item[0] == "plus"]
            
            chunk_results = extract_key_and_value(minus_lines, plus_lines, page_key)
            extracted_translations.update(chunk_results)
            
    # Step 2: Extract structured variables directly from the original file versions
    for filename, (commit_range, page_key) in pages.items():
        print(f"Extracting structured data from original version of {filename}...")
        original_content = get_original_file_content(filename)
        
        # 1. faqs
        if page_key == "standUpPouches":
            # StandUpPouches has b2cFaqs and (b2b) faqs
            b2c_faqs = evaluate_js_array(extract_balanced_array(original_content, "b2cFaqs"))
            b2b_faqs = evaluate_js_array(extract_balanced_array(original_content, "faqs"))
            if b2c_faqs:
                extracted_translations["seoPages.pages.standUpPouches.b2c.faqs"] = b2c_faqs
            if b2b_faqs:
                extracted_translations["seoPages.pages.standUpPouches.b2b.faqs"] = b2b_faqs
        else:
            faqs = evaluate_js_array(extract_balanced_array(original_content, "faqs"))
            if faqs:
                extracted_translations[f"seoPages.pages.{page_key}.faqs"] = faqs
                
        # 2. tables
        if page_key == "customBoxes":
            tables = evaluate_js_array(extract_balanced_array(original_content, "tables"))
            if tables and len(tables) > 0:
                extracted_translations["seoPages.pages.customBoxes.tables.0.title"] = tables[0].get("title", "")
                extracted_translations["seoPages.pages.customBoxes.tables.0.data.headers"] = tables[0].get("data", {}).get("headers", [])
                extracted_translations["seoPages.pages.customBoxes.tables.0.data.rows"] = tables[0].get("data", {}).get("rows", [])
        elif page_key == "standUpPouches":
            tables = evaluate_js_array(extract_balanced_array(original_content, "tables"))
            if tables:
                extracted_translations["seoPages.pages.standUpPouches.b2b.tables"] = tables
        elif page_key == "vacuumPouches":
            pass # No tables in VacuumPouches
        else:
            tables = evaluate_js_array(extract_balanced_array(original_content, "tables"))
            if tables:
                extracted_translations[f"seoPages.pages.{page_key}.tables"] = tables
                
        # 3. relatedLinks
        if page_key == "standUpPouches":
            links = evaluate_js_array(extract_balanced_array(original_content, "relatedLinks"))
            if links:
                extracted_translations["seoPages.pages.standUpPouches.b2b.relatedLinks"] = links
        else:
            links = evaluate_js_array(extract_balanced_array(original_content, "relatedLinks"))
            if links:
                extracted_translations[f"seoPages.pages.{page_key}.relatedLinks"] = links
                
        # 4. keywords/metaKeywords
        kw_arrays = extract_all_keywords_arrays(original_content)
        if kw_arrays:
            if page_key == "standUpPouches" and len(kw_arrays) >= 2:
                extracted_translations["seoPages.pages.standUpPouches.b2c.metaKeywords"] = kw_arrays[0]
                extracted_translations["seoPages.pages.standUpPouches.b2b.metaKeywords"] = kw_arrays[1]
            elif page_key in ["customBoxes", "vacuumPouches"]:
                extracted_translations[f"seoPages.pages.{page_key}.seo.keywords"] = kw_arrays[0]
            else:
                extracted_translations[f"seoPages.pages.{page_key}.metaKeywords"] = kw_arrays[0]
                
    # Manual fallbacks for tricky lines
    manual_fallbacks = {
        "seoPages.pages.standUpPouches.b2c.hero.titlePart1": "STAND-UP",
        "seoPages.pages.standUpPouches.b2c.hero.titlePart2": "POUCHES",
        "seoPages.pages.standUpPouches.b2b.sections.applications.card1Badge": "12-Month Roasted Freshness",
        "seoPages.pages.standUpPouches.b2b.sections.applications.card2Badge": "TÜV Home Compostable",
        "seoPages.pages.standUpPouches.b2b.sections.applications.card3Badge": "Diagonal Gusset Stability",
    }
    for k, v in manual_fallbacks.items():
        if k not in extracted_translations:
            extracted_translations[k] = v
            
    print(f"Total extracted {len(extracted_translations)} keys.")
    
    # Save a check output to verify structure
    with open("scratch/check_extracted.json", "w", encoding="utf-8") as f:
        json.dump(extracted_translations, f, indent=2, ensure_ascii=False)
        
    print("Saved extracted keys to scratch/check_extracted.json.")

    # Load, merge, and save src/locales/en.json
    locale_path = "src/locales/en.json"
    if os.path.exists(locale_path):
        print(f"Loading {locale_path}...")
        with open(locale_path, "r", encoding="utf-8") as f:
            locales = json.load(f)
            
        print("Merging extracted translations into locales...")
        merge_flat_keys_to_nested_dict(locales, extracted_translations)
        
        print(f"Saving merged locales back to {locale_path}...")
        with open(locale_path, "w", encoding="utf-8") as f:
            json.dump(locales, f, indent=4, ensure_ascii=False)
            # Add a trailing newline to match standard editors
            f.write("\n")
        print("Locale merge completed successfully.")
    else:
        print(f"Error: {locale_path} not found!")

if __name__ == "__main__":
    main()
