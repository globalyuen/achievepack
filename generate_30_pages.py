import os
import json

topics = [
    "Matcha Sachet", "Cacao Stand Up", "Spices Moisture Proof", "Premium Tea", "Cocktail Spout", 
    "Candy UV", "Crisps Shaped", "Dried Fruits Tear Notch", "Cheese Pocket Zipper", "Euro Hole Hang", 
    "Pet Food Quad Seal", "Pharma Velcro", "Detergent Spout", "Electronics Anti Static", "Apparel Zipper", 
    "Hologram Hot Stamping", "Granola Soft Touch", "Collagen High Barrier", "PLA Rice", "Rice Paper Artisanal", 
    "DDP Packaging", "Fast Air Freight", "FDA BRC Certified", "ISO Sustainable", "Urgent Orders", 
    "Frozen Vacuum", "EVOH Retort", "Beef Jerky Barrier", "Valve Coffee Bags", "Home vs Industrial Compostable"
]

def to_camel_case(text):
    return ''.join(word.title() for word in text.split())

def to_kebab_case(text):
    return '-'.join(word.lower() for word in text.split())

def to_snake_case(text):
    return '_'.join(word.lower() for word in text.split())

def load_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(filepath, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

en_json_path = 'src/locales/en.json'
zhtw_json_path = 'src/locales/zh-TW.json'

en_data = load_json(en_json_path)
zhtw_data = load_json(zhtw_json_path)

if 'seo_topics' not in en_data:
    en_data['seo_topics'] = {}
if 'seo_topics' not in zhtw_data:
    zhtw_data['seo_topics'] = {}

def process_topic(topic):
    camel_name = to_camel_case(topic)
    kebab_name = to_kebab_case(topic)
    snake_name = to_snake_case(topic)
    
    en_content = {
        "title": f"Custom {topic} Packaging Solutions",
        "description": f"Discover premium {topic.lower()} packaging with advanced barrier protection, custom printing, and sustainable options.",
        "aeoSummary": f"Achieve Pack offers high-quality {topic.lower()} solutions designed to maximize freshness, enhance shelf appeal, and meet industry standards.",
        "eeatDetails": f"With over a decade of packaging expertise and FDA/BRC certifications, Achieve Pack ensures top-tier quality and reliability for all {topic.lower()} packaging needs.",
        "faqs": [
            {"question": f"What materials are used for {topic.lower()}?", "answer": "We use food-grade, high-barrier materials customized to your specific product requirements."},
            {"question": f"What is the minimum order quantity for {topic.lower()}?", "answer": "Our MOQ typically starts at 5,000 units, but we offer flexible options depending on the exact specifications."},
            {"question": f"Can I get custom printing for {topic.lower()}?", "answer": "Yes, we offer advanced digital and rotogravure printing to make your brand stand out."}
        ]
    }
    
    zhtw_content = {
        "title": f"客製化 {topic} 包裝解決方案",
        "description": f"探索優質的 {topic.lower()} 包裝，具備高阻隔保護、客製化印刷及環保選項。",
        "aeoSummary": f"Achieve Pack 提供高品質的 {topic.lower()} 解決方案，旨在保持產品新鮮度、提升貨架吸引力並符合行業標準。",
        "eeatDetails": f"憑藉十多年的包裝專業知識以及 FDA/BRC 認證，Achieve Pack 確保您的 {topic.lower()} 包裝擁有最高品質與可靠性。",
        "faqs": [
            {"question": f"{topic.lower()} 使用什麼材質？", "answer": "我們使用食品級高阻隔材質，並可根據您的產品需求進行客製化。"},
            {"question": f"{topic.lower()} 的最低訂購量是多少？", "answer": "我們的 MOQ 通常為 5,000 個，但也可根據您的具體規格提供靈活的選項。"},
            {"question": f"我可以為 {topic.lower()} 進行客製化印刷嗎？", "answer": "可以，我們提供先進的數位及凹版印刷技術，讓您的品牌脫穎而出。"}
        ]
    }

    # Save to translations
    topic_key = snake_name
    en_data['seo_topics'][topic_key] = en_content
    zhtw_data['seo_topics'][topic_key] = zhtw_content
    
    # Generate TSX
    tsx_content = f"""import React from 'react';
import {{ SEOPageLayout }} from '../../components/SEOPageLayout';
import {{ useTranslation }} from 'react-i18next';
// Note: Ensure the hero image exists or replace with a generic placeholder
// import heroImage from '../../assets/topics/{kebab_name}.webp';

export default function {camel_name}() {{
  const {{ t }} = useTranslation();
  const tKey = 'seo_topics.{topic_key}';

  return (
    <SEOPageLayout
      title={{t(`${{tKey}}.title`)}}
      description={{t(`${{tKey}}.description`)}}
      // heroImage={{heroImage}} // Un-comment when image is generated
      aeoSummary={{t(`${{tKey}}.aeoSummary`)}}
      eeatDetails={{t(`${{tKey}}.eeatDetails`)}}
      faqs={{t(`${{tKey}}.faqs`, {{ returnObjects: true }})}}
    />
  );
}}
"""
    os.makedirs('src/pages/topics', exist_ok=True)
    with open(f'src/pages/topics/{camel_name}.tsx', 'w', encoding='utf-8') as f:
        f.write(tsx_content)
        
    return {"topic": topic, "kebab": kebab_name, "camel": camel_name, "snake": snake_name}

results = []
for topic in topics:
    res = process_topic(topic)
    results.append(res)

save_json(en_json_path, en_data)
save_json(zhtw_json_path, zhtw_data)

print("Done generating scaffold pages and JSON.")
with open('generated_topics.json', 'w') as f:
    json.dump(results, f, indent=2)
