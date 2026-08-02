import os
import re

solutions_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/solutions"

def get_slug(filename):
    file_base = filename.replace('Page.tsx', '')
    slug = re.sub(r'(?<!^)(?=[A-Z])', '-', file_base).lower()
    return slug

files = [f for f in os.listdir(solutions_dir) if f.endswith('.tsx')]
print(f"Updating image references across {len(files)} solution pages...")

updated_count = 0

for file in files:
    filepath = os.path.join(solutions_dir, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()

    slug = get_slug(file)

    hero_img_path = f"/imgs/solutions/{slug}-hero.jpg"
    c1_img_path = f"/imgs/solutions/{slug}-content-1.jpg"
    c2_img_path = f"/imgs/solutions/{slug}-content-2.jpg"
    c3_img_path = f"/imgs/solutions/{slug}-content-3.jpg"

    showcase_section = f"""
        {{/* 1 Hero + 3 Content Images Visual Showcase Section */}}
        <section className="my-12 p-8 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-emerald-400" />
            Visual Packaging & Technical Diagram Showcase
          </h2>
          <p className="text-neutral-400 mb-8 text-sm">
            Inspect our precision engineered 3D renders, multi-layer lamination cross-section, one-way valve closure details, and automated filling line compatibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <ClickableImage
                src="{c1_img_path}"
                alt="Multi-Layer Lamination Diagram"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">1. Multi-Layer Lamination Structure</h3>
              <p className="text-xs text-neutral-400">Reverse-printed outer film, EVOH oxygen barrier, and high-tack inner sealant layer.</p>
            </div>
            <div className="space-y-3">
              <ClickableImage
                src="{c2_img_path}"
                alt="Degassing Valve & Closure Detail"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">2. Calibrated One-Way Degassing Valve</h3>
              <p className="text-xs text-neutral-400">Vents CO2 pressure at 3.0 mbar while blocking external O2 and moisture ingress.</p>
            </div>
            <div className="space-y-3">
              <ClickableImage
                src="{c3_img_path}"
                alt="Automated Filling Line & Retail Display"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">3. VFFS Line & Retail Shelf Display</h3>
              <p className="text-xs text-neutral-400">Up to 80 bags/min filling line speed with 100% upright retail shelf presence.</p>
            </div>
          </div>
        </section>
"""

    if "Visual Packaging & Technical Diagram Showcase" not in code:
        if "{/* FAQ Section */}" in code:
            code = code.replace("{/* FAQ Section */}", showcase_section + "\n        {/* FAQ Section */}")
        elif "Frequently Asked Questions" in code:
            code = re.sub(r'(<h2[^>]*>.*?Frequently Asked Questions.*)', showcase_section + r'\n\1', code, flags=re.DOTALL)
        else:
            code = code + "\n" + showcase_section

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(code)

    updated_count += 1

print(f"Successfully updated image showcases for all {updated_count} solution pages!")
