import os
import glob

files = glob.glob('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/topics/*.tsx')
for fpath in files:
    with open(fpath, 'r') as f:
        lines = f.readlines()
    
    out_lines = []
    for line in lines:
        if 'faqs={t(' in line and 'returnObjects: true' in line:
            spaces = len(line) - len(line.lstrip())
            new_line = (' ' * spaces) + 'faqs={(t(`${tKey}.faqs`, { returnObjects: true }) as unknown) as any}\n'
            out_lines.append(new_line)
        else:
            out_lines.append(line)
            
    with open(fpath, 'w') as f:
        f.writelines(out_lines)
