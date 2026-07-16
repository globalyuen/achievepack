import json
import os
import re
import asyncio
import aiohttp
import time

AP_DIR = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"
EP_DIR = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/pouch-eco-website"

GALLERY_JSON = os.path.join(AP_DIR, "src/data/image-gallery.json")
SEO_MAP_JSON = os.path.join(AP_DIR, "src/data/image-seo-map.json")
MAIN_TSX = os.path.join(AP_DIR, "src/main.tsx")

API_KEY = "YOUR_API_KEY_HERE"

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def to_pascal_case(text):
    res = ''.join(word.capitalize() for word in re.split(r'[^a-zA-Z0-9]', text) if word)
    if not res: return ""
    if res[0].isdigit():
        res = "Page" + res
    return res

async def generate_content(session, title):
    prompt = f"""
    You are an expert SEO packaging copywriter. Create content for a packaging page titled "{title}".
    Provide a JSON object with this exact structure (no markdown fences, just raw JSON):
    {{
      "en": {{
        "title": "{title.title()}",
        "description": "Premium sustainable packaging solution.",
        "hook": "We know the sinking feeling of opening a shipping box only to find your premium product crushed...",
        "pain_points": [
          {{"num": "01", "problem": "Seal Failures", "solution": "We use a 15mm reinforced seal..."}},
          {{"num": "02", "problem": "Color Fading", "solution": "UV resistant matte varnish..."}},
          {{"num": "03", "problem": "High MOQ", "solution": "Digital printing enables 500 unit runs..."}},
          {{"num": "04", "problem": "Slow Lead Times", "solution": "Produced in 7 days..."}},
          {{"num": "05", "problem": "Eco Compliance", "solution": "Certified ASTM D6400..."}}
        ],
        "engineering_notebook": "In my 14 years in packaging design, I've seen... - Ryan Wong, Co-Founder",
        "schema_faq": [
          {{"q": "Is it recyclable?", "a": "Yes..."}}
        ]
      }},
      "es": {{ "title": "...", "description": "...", "hook": "...", "pain_points": [...], "engineering_notebook": "...", "schema_faq": [...] }},
      "fr": {{ "title": "...", "description": "...", "hook": "...", "pain_points": [...], "engineering_notebook": "...", "schema_faq": [...] }},
      "zh-tw": {{ "title": "...", "description": "...", "hook": "...", "pain_points": [...], "engineering_notebook": "...", "schema_faq": [...] }}
    }}
    Important constraints:
    - Never include the characters `<` or `>` or literal newline characters inside strings.
    - Do NOT include `< 0.1` or any variation. Instead, write "less than 0.1".
    - Output ONLY pure JSON. No markdown, no backticks, no explanations.
    """
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    data = {
        "model": "grok-beta",
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.2
    }
    
    for i in range(3):
        try:
            async with session.post("https://api.x.ai/v1/chat/completions", json=data, headers=headers) as resp:
                res_json = await resp.json()
                text = res_json['choices'][0]['message']['content']
                text = text.replace('```json', '').replace('```', '').strip()
                return json.loads(text)
        except Exception as e:
            print(f"Error on {title}: {e}")
            await asyncio.sleep(2)
            
    # Fallback
    return {
      "en": {
        "title": f"{title.title()}",
        "description": "Premium sustainable packaging solution.",
        "hook": "We know the sinking feeling...",
        "pain_points": [{"num": "01", "problem": "Seal Failures", "solution": "We use a 15mm reinforced seal..."}],
        "engineering_notebook": "In my 14 years in packaging design, I've seen... - Ryan Wong, Co-Founder",
        "schema_faq": [{"q": "Is it recyclable?", "a": "Yes..."}]
      },
      "es": { "title": f"{title.title()} (ES)", "description": "Premium sustainable packaging solution.", "hook": "Sabemos...", "pain_points": [], "engineering_notebook": "...", "schema_faq": [] },
      "fr": { "title": f"{title.title()} (FR)", "description": "Premium sustainable packaging solution.", "hook": "Nous savons...", "pain_points": [], "engineering_notebook": "...", "schema_faq": [] },
      "zh-tw": { "title": f"{title.title()} (TW)", "description": "Premium sustainable packaging solution.", "hook": "我們知道...", "pain_points": [], "engineering_notebook": "...", "schema_faq": [] }
    }

async def process_batch():
    with open(GALLERY_JSON, 'r') as f:
        gallery = json.load(f)
    with open(SEO_MAP_JSON, 'r') as f:
        seo_map = json.load(f)
        
    unmapped = []
    keywords = ['pouch', 'bag', 'sachet', 'box', 'compostable', 'sustainable', 'kraft', 'coffee', 'stand']
    
    for item in gallery:
        src = item['src']
        title = item.get('title', '')
        if src not in seo_map or not seo_map[src]:
            unmapped.append(item)
                
    if len(unmapped) <= 401:
        print(f"Warning: Only {len(unmapped)} unmapped images found.")
        unmapped_slice = unmapped[-50:] if len(unmapped) >= 50 else unmapped
    else:
        unmapped_slice = unmapped[401:451]
        
    print(f"Found {len(unmapped)} total unmapped, processing {len(unmapped_slice)}")
    
    async with aiohttp.ClientSession() as session:
        tasks = []
        for img in unmapped_slice:
            tasks.append(generate_content(session, img['title']))
        results = await asyncio.gather(*tasks)
        
    routes_imports = []
    routes_components = []
    
    for i, img in enumerate(unmapped_slice):
        content = results[i]
        slug = slugify(img['title'])
        if not slug:
            slug = f"page-{int(time.time())}-{i}"
        comp_name = to_pascal_case(img['title'])
        if not comp_name:
            comp_name = f"Page{int(time.time())}{i}"
            
        ap_code = f"""import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import {{ Helmet }} from 'react-helmet-async';
import {{ getDomain }} from '../../utils/domain';

const localTranslations = {json.dumps(content, ensure_ascii=False, indent=2)};

export default function {comp_name}() {{
  const isPouchDomain = getDomain() === 'pouch';
  const lang = 'en';
  const t = localTranslations[lang] || localTranslations['en'];
  
  return (
    <SEOPageLayout>
      <Helmet>
        <title>{{t.title}}</title>
        <meta name="description" content={{t.description}} />
        <script type="application/ld+json">
          {{JSON.stringify({{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": (t.schema_faq || []).map((faq: any) => ({{
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {{
                "@type": "Answer",
                "text": faq.a
              }}
            }}))
          }})}}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">{{t.title}}</h1>
        <img src="{img['src']}" alt={{t.title}} className="w-full max-w-lg mx-auto mb-8 rounded-xl shadow-lg" />
        <p className="text-lg mb-8">{{t.hook}}</p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5 Pain Points & Solutions</h2>
          <div className="grid gap-4">
            {{(t.pain_points || []).map((p: any, idx: number) => (
              <div key={{idx}} className="bg-neutral-900 text-white p-6 rounded-xl">
                <span className="text-emerald-500 font-bold mr-2">{{p.num}}</span>
                <span className="font-semibold">{{p.problem}}</span>
                <p className="mt-2 text-gray-300">✅ Solution: {{p.solution}}</p>
              </div>
            ))}}
          </div>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-12">
          <h4 className="font-bold text-amber-900 mb-2">🔬 From Ryan Wong's Engineering Notebook</h4>
          <p className="italic text-amber-800">"{{t.engineering_notebook}}"</p>
        </div>
      </div>
    </SEOPageLayout>
  );
}}
"""
        # Save AP component
        ap_file_path = os.path.join(AP_DIR, f"src/pages/topics/{comp_name}.tsx")
        with open(ap_file_path, "w", encoding="utf-8") as f:
            f.write(ap_code)
            
        # EP component
        ep_dir = os.path.join(EP_DIR, f"src/app/topics/{slug}")
        os.makedirs(ep_dir, exist_ok=True)
        ep_code = f"""import React from 'react';
import Image from 'next/image';

const content = {json.dumps(content['en'], ensure_ascii=False, indent=2)};

export default function Page() {{
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": (content.schema_faq || []).map((faq: any) => ({{
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {{
                "@type": "Answer",
                "text": faq.a
              }}
            }}))
          }})
        }}}}
      />
      <h1 className="text-4xl font-bold mb-6">{{content.title}}</h1>
      <p className="text-lg mb-8">{{content.hook}}</p>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5 Pain Points & Solutions</h2>
        <div className="grid gap-4">
          {{(content.pain_points || []).map((p: any, idx: number) => (
            <div key={{idx}} className="bg-neutral-900 text-white p-6 rounded-xl">
              <span className="text-lime-400 font-bold mr-2">{{p.num}}</span>
              <span className="font-semibold">{{p.problem}}</span>
              <p className="mt-2 text-gray-300">✅ Solution: {{p.solution}}</p>
            </div>
          ))}}
        </div>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-12">
        <h4 className="font-bold text-amber-900 mb-2">🔬 From Ryan Wong's Engineering Notebook</h4>
        <p className="italic text-amber-800">"{{content.engineering_notebook}}"</p>
      </div>
    </main>
  );
}}
"""
        ep_file_path = os.path.join(ep_dir, "page.tsx")
        with open(ep_file_path, "w", encoding="utf-8") as f:
            f.write(ep_code)
            
        routes_imports.append(f"const {comp_name} = lazyWithRetry(() => import('./pages/topics/{comp_name}'))")
        routes_components.append(f'<Route path="/topics/{slug}" element={{<{comp_name} />}} />')
        
        # update seo map
        seo_map[img['src']] = [{"title": content['en']['title'], "url": f"/topics/{slug}"}]

    # Update main.tsx
    with open(MAIN_TSX, 'r', encoding="utf-8") as f:
        main_content = f.read()
        
    last_import_idx = main_content.rfind('lazyWithRetry')
    if last_import_idx != -1:
        end_of_line = main_content.find('\n', last_import_idx)
        imports_str = "\n" + "\n".join(routes_imports) + "\n"
        main_content = main_content[:end_of_line] + imports_str + main_content[end_of_line:]
    
    routes_str = "\n              ".join(routes_components)
    main_content = main_content.replace("<Routes>", f"<Routes>\n              {routes_str}", 1)
    
    with open(MAIN_TSX, 'w', encoding="utf-8") as f:
        f.write(main_content)
        
    with open(SEO_MAP_JSON, 'w', encoding="utf-8") as f:
        json.dump(seo_map, f, indent=2)

    print("Finished generation and updates.")

if __name__ == "__main__":
    asyncio.run(process_batch())
