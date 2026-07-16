import os

EP_ROOT = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/pouch-eco-website'

pages = [
    {
        "slug": "sustainable-flexible-packaging-for-powders",
        "name": "SustainableFlexiblePackagingForPowders",
        "title": "Sustainable Flexible Packaging For Powders",
        "image": "/imgs/blog/heros/sustainable-flexible-packaging-for-powders-hero.png",
        "hook": "Powder packaging demands absolute moisture barriers and zero leakage. Our sustainable pouches ensure your dry mixes stay free-flowing and fresh while reducing environmental impact."
    },
    {
        "slug": "custom-printed-kraft-paper-sachets-for-herbs",
        "name": "CustomPrintedKraftPaperSachetsForHerbs",
        "title": "Custom Printed Kraft Paper Sachets For Herbs",
        "image": "/imgs/blog/heros/custom-printed-kraft-paper-sachets-for-herbs-hero.png",
        "hook": "Herbs require delicate aromatic preservation. Our high-barrier Kraft paper sachets blend a natural, organic look with robust functional layers to lock in terpenes and flavors."
    },
    {
        "slug": "freezer-safe-vacuum-packaging",
        "name": "FreezerSafeVacuumPackaging",
        "title": "Freezer Safe Vacuum Packaging",
        "image": "/imgs/seo/freezer_safe_vacuum_packaging_infographic_5.png",
        "hook": "Frozen environments easily compromise standard plastics. Our specialized freezer-safe vacuum packaging resists cracking, freezer burn, and maintains integrity down to extreme sub-zero temperatures."
    },
    {
        "slug": "sustainable-pouch-sizes-for-coffee-beans",
        "name": "SustainablePouchSizesForCoffeeBeans",
        "title": "Sustainable Pouch Sizes For Coffee Beans",
        "image": "/imgs/blog/heros/sustainable-pouch-sizes-for-coffee-beans-hero.png",
        "hook": "Choosing the correct size for your coffee roasts is critical for shelf presence and CO2 degassing. We offer tailored sustainable pouch sizes equipped with eco-friendly valves for every roast volume."
    },
    {
        "slug": "digital-print-flexible-packaging-for-pharmaceuticals",
        "name": "DigitalPrintFlexiblePackagingForPharmaceuticals",
        "title": "Digital Print Flexible Packaging For Pharmaceuticals",
        "image": "/imgs/blog/heros/digital-print-flexible-packaging-for-pharmaceuticals-hero.png",
        "hook": "Medical packaging requires ultra-high precision, low MOQs for specific SKUs, and strict regulatory compliance. Digital printing delivers flawless micro-text readability with no plate costs."
    }
]

template = """import { Metadata } from 'next';
import React from 'react';
import { ShieldCheck, Leaf } from 'lucide-react';
import ClickableImage from '@/components/ClickableImage';

export const metadata: Metadata = {
  title: "{title} | Pouch.eco",
  description: "Premium {title} solutions designed for maximum performance and sustainability.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the benefits of {title}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It provides superior protection, extends shelf life, and ensures sustainable end-of-life disposal while maintaining premium brand aesthetics."
        }
      }
    ]
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 py-16 text-neutral-800">
      <div className="mb-12">
        <ClickableImage 
          src="{image}" 
          alt="{title}" 
          className="w-full max-w-4xl rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black mx-auto mb-10 object-cover"
        />
        <p className="text-xl leading-relaxed max-w-3xl mx-auto text-neutral-600 font-bold">
          {hook}
        </p>
      </div>

      <div className="bg-[#00FFFF] border-4 border-black rounded-2xl p-8 mb-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-8">Technical Engineering Breakdown</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white border-2 border-black text-black rounded-xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Maximum Barrier Protection</h3>
              <p className="text-neutral-700 font-medium">Engineered multilayer structures guarantee oxygen, moisture, and UV light resistance to extend product shelf life.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white border-2 border-black text-black rounded-xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Sustainable Materials</h3>
              <p className="text-neutral-700 font-medium">Available in fully compostable, mono-material recyclable, or PCR (post-consumer recycled) variants.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-black uppercase mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border-4 border-black rounded-xl p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-bold text-lg mb-2">What are the benefits of {title}?</h4>
            <p className="text-neutral-600 font-medium">It provides superior protection, extends shelf life, and ensures sustainable end-of-life disposal while maintaining premium brand aesthetics.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-mono">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="border-4 border-black rounded-2xl bg-[#D4FF00] p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-3xl">
            {hook}
          </p>
        </div>
        {content}
      </div>
    </div>
  );
}
"""

def generate():
    for p in pages:
        out_dir = os.path.join(EP_ROOT, f"src/app/topics/{p['slug']}")
        os.makedirs(out_dir, exist_ok=True)
        
        code = template.replace("{title}", p['title']).replace("{hook}", p['hook']).replace("{image}", p['image'])
        filepath = os.path.join(out_dir, "page.tsx")
        with open(filepath, 'w') as f:
            f.write(code)
            
    print(f"Generated Next.js pages for EP")

generate()
