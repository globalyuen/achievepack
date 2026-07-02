import json

# 1. Load the generated concerns
with open('scratch/buyer_concerns_en.json', 'r', encoding='utf-8') as f:
    concerns = json.load(f)

# 2. Inject into en.json
with open('src/locales/en.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

if 'seoPages' not in en_data:
    en_data['seoPages'] = {}
en_data['seoPages']['buyerConcerns'] = concerns

with open('src/locales/en.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)

# 3. Create a translated version for lowMoqStartupPackaging in zh-TW.json
# Translate the following specifically for Hong Kong Traditional Chinese
zh_tw_example = {
    "title": "買家常見疑慮與解決方案",
    "concern1Title": "起訂量 (MOQ) 太高",
    "concern1Pain": "初創品牌無法承擔傳統工廠幾萬個的起訂量，導致資金積壓。",
    "concern1Solution": "我們提供低至 500 個的超低起訂量 (MOQ)，採用先進的數碼印刷技術，讓初創企業能以較低成本啟動項目，同時保證印刷品質。",
    "concern2Title": "交貨期不穩定",
    "concern2Pain": "新產品發佈在即，但包裝延誤會嚴重影響上市計劃。",
    "concern2Solution": "數碼印刷免除製版時間，我們最快可在 7-10 天內完成生產並發貨，確保您的產品如期上市。",
    "concern3Title": "包裝設計不專業",
    "concern3Pain": "擔心印刷質量參差不齊，影響高端品牌形象。",
    "concern3Solution": "我們採用 HP Indigo 數碼印刷，色彩精準且可選擇啞光、亮面、燙金等定制工藝，讓您的產品在貨架上脫穎而出。",
    "concern4Title": "成本難以控制",
    "concern4Pain": "隱藏的製版費和運費會超出初創公司的預算。",
    "concern4Solution": "我們提供完全透明的報價，無額外製版費，並會根據您的需求建議最具性價比的材料和運輸方案。",
    "concern5Title": "靈活性不足",
    "concern5Pain": "一次需要推出多個口味，但單一口味的數量不多，工廠不願意做。",
    "concern5Solution": "數碼印刷允許在同一個訂單內印製多款設計 (SKUs)，完美解決多口味小批量生產的問題。"
}

with open('src/locales/zh-TW.json', 'r', encoding='utf-8') as f:
    zh_tw_data = json.load(f)

if 'seoPages' not in zh_tw_data:
    zh_tw_data['seoPages'] = {}
if 'buyerConcerns' not in zh_tw_data['seoPages']:
    zh_tw_data['seoPages']['buyerConcerns'] = {}
    
zh_tw_data['seoPages']['buyerConcerns']['lowMoqStartupPackaging'] = zh_tw_example

with open('src/locales/zh-TW.json', 'w', encoding='utf-8') as f:
    json.dump(zh_tw_data, f, indent=2, ensure_ascii=False)

print("Injected into en.json and zh-TW.json successfully!")
