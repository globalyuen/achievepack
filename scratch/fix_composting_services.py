import re
import os

def main():
    file_path = "src/pages/pouch/composting/PouchCompostingServicesPage.tsx"
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found")
        return

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the COMPOST_SERVICES block
    start_match = re.search(r'const COMPOST_SERVICES: CompostService\[\] = \[', content)
    if not start_match:
        print("Error: COMPOST_SERVICES definition not found")
        return

    start_idx = start_match.start()

    # Find the end of the block (which is followed by const STATES = )
    end_pattern = r'\]\s*const STATES = \[\.\.\.new Set\(COMPOST_SERVICES\.map\(s => s\.state\)\)\]\.sort\(\)'
    end_match = re.search(end_pattern, content)
    if not end_match:
        print("Error: End of COMPOST_SERVICES / STATES not found")
        return

    end_idx = end_match.end()

    services_block = content[start_idx:end_idx]
    
    # We want to extract the array elements part
    array_content_match = re.search(r'=\s*\[(.*?)\]\s*const STATES =', services_block, re.DOTALL)
    if not array_content_match:
        print("Error: Could not extract array content")
        return
        
    array_content = array_content_match.group(1).strip()

    # Now remove the block from the content
    new_content = content[:start_idx] + content[end_idx:]

    # Now find the component function start and insert COMPOST_SERVICES and STATES inside it
    comp_match = re.search(r'export default function PouchCompostingServicesPage\(\) \{(\s*const \{ t \} = useTranslation\(\))', new_content)
    if not comp_match:
        print("Error: Component start not found in new content")
        return

    insert_pos = comp_match.end()

    component_insertion = f"""
  const COMPOST_SERVICES: CompostService[] = useMemo(() => [
    {array_content}
  ], [t])

  const STATES = useMemo(() => [...new Set(COMPOST_SERVICES.map(s => s.state))].sort(), [COMPOST_SERVICES])
"""

    new_content = new_content[:insert_pos] + component_insertion + new_content[insert_pos:]

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print("Successfully moved COMPOST_SERVICES and STATES inside the component using useMemo.")

if __name__ == "__main__":
    main()
