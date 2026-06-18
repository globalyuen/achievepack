import os
import re

BASE_DIR = os.path.abspath(os.path.join(__file__, '..', '..'))
PAGES_DIR = os.path.join(BASE_DIR, 'src', 'pages')

# Regex to find tags containing raw English letters at the start of text
# e.g., <h2>What is...</h2> or <p>Mono-PE...
tag_pattern = re.compile(r'<(h[1-6]|p|span|div|li|td|th|button)[^>]*>\s*([A-Za-z][A-Za-z0-9\s\.,!\?\'\"\-\(\)]+)', re.IGNORECASE)

# Regex to find typical SEO layout props containing raw English text strings
# e.g., title="Recyclable Mono-PE" or heroTitle="Something"
prop_pattern = re.compile(r'\b(title|description|heroTitle|heroSubtitle|introSummary|ctaTitle|ctaDescription|ctaButtonText)="\s*([A-Za-z][A-Za-z0-9\s\.,!\?\'\"\-\(\)]+)"')

def scan_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Skip files that already look fully dynamic or are just administrative / utils
    if 'useTranslation' not in content and 't(' not in content:
        # If it doesn't even use i18n, it might be purely hardcoded or static pages.
        # But if it has raw text, we want to know.
        pass

    tags_found = tag_pattern.findall(content)
    props_found = prop_pattern.findall(content)
    
    return tags_found, props_found

def main():
    print(f"Scanning {PAGES_DIR} for hardcoded JSX strings...")
    suspicious_files = []
    
    for root, dirs, files in os.walk(PAGES_DIR):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                rel_path = os.path.relpath(filepath, BASE_DIR)
                
                # Exclude backup files, test files, admin pages (usually don't need translations unless user asked)
                if 'Admin' in file or 'bak' in file or 'Test' in file or 'Callback' in file:
                    continue
                    
                tags, props = scan_file(filepath)
                
                # Filter tags to ignore small code-like items or icons
                filtered_tags = [t for t in tags if len(t[1].strip()) > 8]
                filtered_props = [p for p in props if len(p[1].strip()) > 8]
                
                if filtered_tags or filtered_props:
                    suspicious_files.append((rel_path, len(filtered_tags), len(filtered_props), filtered_tags[:3], filtered_props[:3]))

    print(f"\nFound {len(suspicious_files)} files with potential hardcoded strings:\n")
    # Sort by number of hardcoded elements
    suspicious_files.sort(key=lambda x: (x[1] + x[2]), reverse=True)
    
    for path, t_count, p_count, sample_tags, sample_props in suspicious_files:
        print(f"📄 {path}")
        print(f"   Hardcoded Tags: {t_count}, Props: {p_count}")
        if sample_tags:
            print(f"   Sample Tags: {[t[1].strip() for t in sample_tags]}")
        if sample_props:
            print(f"   Sample Props: {[p[1].strip() for p in sample_props]}")
        print("-" * 50)

if __name__ == '__main__':
    main()
