import os
import re
import json
from pathlib import Path

VAULT_ROOT = Path("/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/ob vault - ap ctr follow up")
OUTPUT_JSON = Path("/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/data/calendly_inquiries.json")

def parse_md(path: Path) -> dict | None:
    try:
        text = path.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return None

    # --- YAML frontmatter ---
    title_match = re.search(r'title:\s*"?New Event:\s*(.+?)"?\s*\n', text)
    if not title_match:
        title_match = re.search(r'title:\s*"?(.+?)"?\s*\n', text)
        
    date_match  = re.search(r'date:\s*(.+)', text)
    name        = title_match.group(1).strip() if title_match else path.stem
    raw_date    = date_match.group(1).strip()  if date_match  else ""

    # Clean name of any prefixes/suffixes
    name = re.sub(r'^(?:Re:\s*|Fwd:\s*|RE:\s*|FWD:\s*|Re-New-Event-|New-Event-)+', '', name)
    name = re.sub(r'---.*', '', name).strip()
    name = name.replace('-', ' ')

    # --- Extract key fields from body ---
    invitee_email = ""
    meeting_time  = ""
    timezone      = ""
    phone         = ""
    inquiry       = ""

    em = re.search(r'\[.*?mailto:(.*?)\]', text)
    if em:
        invitee_email = em.group(1).strip().lower()
    else:
        # Fallback email extraction
        em_fallback = re.search(r'[\w\.-]+@[\w\.-]+\.\w+', text)
        if em_fallback:
            invitee_email = em_fallback.group(0).strip().lower()

    mt = re.search(r'\*\*Event Date/Time:\*\*\s*(.+?)(?:\((.+?)\))?(?:\n|$)', text)
    if mt:
        meeting_time = mt.group(1).strip()
        timezone     = mt.group(2).strip() if mt.group(2) else ""
    else:
        mt_fallback = re.search(r'Date/Time:\s*([^\n]+)', text)
        if mt_fallback:
            meeting_time = mt_fallback.group(1).strip()

    # Clean meeting time
    meeting_time = meeting_time.replace('**', '').replace('(China, Singapore, Perth)', '').strip()

    ph = re.search(r'\*\*Phone Number[^*]*\*\*\s*\n+([^\n*]+)', text)
    if ph:
        phone = ph.group(1).strip()
    else:
        ph_fallback = re.search(r'Phone Number:\s*([^\n]+)', text)
        if ph_fallback:
            phone = ph_fallback.group(1).strip()

    phone = phone.replace('**', '').replace('Please share anything...', '').strip()

    # The invitee's message is after "Please share anything..."
    inq = re.search(
        r'Please share anything.*?\n([\s\S]+?)(?:\[View event|\-{3}|\Z)',
        text, re.DOTALL
    )
    if inq:
        inquiry = inq.group(1).strip()
    else:
        inq_fallback = re.search(r'prepare for our meeting\.\*\*\s*\n+([\s\S]+?)(?:\[View event|\-{3}|\Z)', text)
        if inq_fallback:
            inquiry = inq_fallback.group(1).strip()

    inquiry = inquiry.replace('**', '').replace('\n', ' ').strip()
    # Clean up multiple spaces
    inquiry = re.sub(r'\s{2,}', ' ', inquiry)

    # Try to extract the meeting duration
    dur_match = re.search(r'(\d+)\s*Minute Meeting', text)
    duration  = f"{dur_match.group(1)} min" if dur_match else "15 min"

    return {
        "id":            path.name.replace('.md', ''),
        "name":          name,
        "email":         invitee_email,
        "meeting_time":  meeting_time,
        "duration":      duration,
        "phone":         phone,
        "inquiry":       inquiry[:500],
        "raw_date":      raw_date,
        "source_file":   path.name
    }

def main():
    if not VAULT_ROOT.exists():
        print(f"Directory {VAULT_ROOT} does not exist.")
        return

    meetings = {}
    # Use rglob to recursively search the entire vault!
    for md in VAULT_ROOT.rglob("*.md"):
        md_name = md.name.lower()
        if "new-event" in md_name or "new event" in md_name or "event-date" in md_name:
            parsed = parse_md(md)
            if parsed and parsed["name"]:
                # Use email + meeting_time as deduplication key
                key = (parsed["email"], parsed["meeting_time"])
                if key not in meetings:
                    meetings[key] = parsed
                else:
                    # Prefer the entry with longer inquiry
                    if len(parsed["inquiry"]) > len(meetings[key]["inquiry"]):
                        meetings[key] = parsed

    unique_list = list(meetings.values())
    # Sort by raw_date descending
    unique_list.sort(key=lambda x: x["raw_date"], reverse=True)

    # Ensure output directory exists
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON.write_text(json.dumps(unique_list, indent=2, ensure_ascii=False))
    print(f"Successfully wrote {len(unique_list)} unique Calendly inquiries to {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
