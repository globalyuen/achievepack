import glob
import os
import re

files = glob.glob('src/pages/**/*.tsx', recursive=True)
files.extend(glob.glob('../pouch-eco-website/src/app/**/*.tsx', recursive=True))

for fpath in files:
    with open(fpath, 'r') as f:
        content = f.read()
    
    original = content
    
    # 1. Fix SEOPageLayout import
    # Find depth
    # e.g. src/pages/packaging/CustomBoxesPage.tsx -> 2 slashes after src/pages
    parts = fpath.split('/')
    if 'pages' in parts:
        depth = len(parts) - parts.index('pages') - 1
        prefix = '../' * depth
        content = re.sub(r"import SEOPageLayout from '.*?/components/seo/SEOPageLayout';", f"import SEOPageLayout from '{prefix}components/SEOPageLayout';", content)
    
    # 2. Fix PouchLayout import
    # If in src/pages/pouch/packaging/PouchCustomBoxesPage.tsx
    content = content.replace("import PouchLayout from '../PouchLayout';", "import PouchLayout from '../../pouch/PouchLayout';")
    
    # If in src/pages/solutions/PackagingLineAutomationPage.tsx
    content = content.replace("import PouchLayout from '../pouch/PouchLayout';", "import PouchLayout from '../../components/pouch/PouchLayout';")
    
    # 3. Fix domain import
    content = content.replace("import { isPouch } from '../../utils/domainHelper';", "import { isPouch } from '../../utils/domain';")

    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        print('Patched', fpath)
