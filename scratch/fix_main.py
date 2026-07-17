import re
import sys

main_file = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx'

with open(main_file, 'r', encoding='utf-8') as f:
    main = f.read()

# Remove broken comment line 48
main = re.sub(r'\/\/ Custom MultilingualRoutes\\nconst Topic550370b477134f3289cb48e0a6ba2fe3[^\n]+\n', '', main)

# Remove lowercase Topic import
main = re.sub(r'const Topic550370b477134f3289cb48e0a6ba2fe3 = lazyWithRetry\(\(\) => import\(\'\.\/pages\/topics\/Topic550370b477134f3289cb48e0a6ba2fe3\'\)\);\n', '', main)

# Remove other Topic imports
main = re.sub(r'const Topic[a-zA-Z0-9]+ = lazyWithRetry\(\(\) => import\(\'\.\/pages\/topics\/Topic[a-zA-Z0-9]+\'\)\);\n', '', main)

# Remove route definitions for Topic components
main = re.sub(r'<Route path="[^"]+" element=\{<Topic[a-zA-Z0-9]+ \/>\} \/>\n\s*', '', main)

# Also remove `topic-550370b4` paths
main = re.sub(r'<Route path="\/topics\/topic-[0-9a-f\-]+" element=\{<[^>]+>\} \/>\n\s*', '', main)

# Fix any `<Topic550370b477134f3289cb48e0a6ba2fe3 />` in other routes
main = re.sub(r'element=\{<Topic550370b477134f3289cb48e0a6ba2fe3 \/>\}', r'element={<IllustratedPouchDesignVariation />}', main)

with open(main_file, 'w', encoding='utf-8') as f:
    f.write(main)

print('Fixed main.tsx via Python')
