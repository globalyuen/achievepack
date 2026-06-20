import json
import os

BASE_DIR = os.path.abspath(os.path.join(__file__, '..', '..'))

locales = {
    'en': os.path.join(BASE_DIR, 'src', 'locales', 'en.json'),
    'zh-TW': os.path.join(BASE_DIR, 'src', 'locales', 'zh-TW.json'),
    'es': os.path.join(BASE_DIR, 'src', 'locales', 'es.json'),
    'fr': os.path.join(BASE_DIR, 'src', 'locales', 'fr.json'),
}

# 1. EN Data
vs_en = {
    "title": "Bio-PE vs Compostable Films – Which Makes Sense for Your Market? | Achieve Pack",
    "description": "Bio-PE vs Compostable Films: A practical guide for packaging and sustainability teams to choose between compostable structures and bio-based polyolefins based on infrastructure, product requirements and regulations.",
    "heroTitle": "Bio-PE vs Compostable Films",
    "heroSubtitle": "Which One Makes Sense for Your Market?",
    "heroIntro": "A practical guide for packaging, procurement and sustainability teams to decide when to choose compostable films and when to choose bio-PE, based on infrastructure, product requirements and regulatory trends.",
    "takeaways": {
        "title": "Key Takeaways for Procurement Teams",
        "points": [
            "One goal, different routes—compostable, bio-PE, and mono-recyclables all reduce impact differently",
            "Compostable films work best where composting infrastructure exists and food residue is significant",
            "Bio-PE shines where recycling is strong and carbon footprint reduction is the priority",
            "Portfolio approach—most brands benefit from matching material to market infrastructure"
        ]
    },
    "intro": {
        "title": "Introduction: One Goal, Different Routes",
        "desc1": "Brand owners today have several credible levers to make flexible packaging more sustainable: compostable structures, bio-based polyolefins like bio-PE, and recyclable mono-materials.",
        "desc2": "All can reduce environmental impact, but they depend on very different systems and behaviors.",
        "note": "This Article Is For: Packaging, procurement and sustainability teams who need to decide when to choose compostable films and when to choose bio-PE, based on infrastructure, product requirements and regulatory trends."
    },
    "problem": {
        "title": "What Problem Are You Trying to Solve?",
        "desc": "Before choosing materials, clarify the primary objective:",
        "landfillTitle": "Divert from Landfill",
        "landfillDesc": "Divert food and packaging from landfill into composting systems?",
        "carbonTitle": "Reduce Carbon",
        "carbonDesc": "Reduce fossil resource use and carbon footprint while keeping recyclability?",
        "eprTitle": "EPR Compliance",
        "eprDesc": "Improve recyclability scores and EPR fees under upcoming regulations?"
    },
    "compostable": {
        "title": "Compostable Films: When Waste Behaves Like Food",
        "desc1": "Compostable films are engineered to break down under defined composting conditions—home or industrial—into CO₂, water, biomass and minerals without toxic residues.",
        "desc2": "When paired with organics collection and composting infrastructure, they allow soiled packaging to follow the same route as food waste.",
        "headline": "They are most compelling when:",
        "point1": "Your key markets have industrial composting facilities and collection for food scraps and packaging",
        "point2": "Your products generate significant food residues that interfere with mechanical recycling",
        "point3": "Retail or foodservice partners are actively promoting organics diversion and zero-waste initiatives",
        "note": "⚠️ Important: Compostable structures do not help where composting infrastructure is minimal and items end up in landfill or standard recycling streams."
    },
    "biope": {
        "title": "Bio-PE: When Recycling and Carbon Are the Focus",
        "desc": "Bio-PE offers a different value proposition. It keeps the same end-of-life route as conventional PE—recycling—but replaces fossil carbon with renewable carbon from feedstocks such as sugarcane.",
        "headline": "Bio-PE structures make sense when:",
        "point1": "Your markets have developing or robust PE recycling and EPR schemes favor recyclable mono-materials",
        "point2": "Carbon footprint reduction is a priority and you want a drop-in solution that avoids requalifying new polymers",
        "point3": "You want to avoid compostable claims in regions where organics collection is absent or confusing for consumers",
        "note": "Key Insight: In this scenario, composting is not the main lever; recyclability and carbon are."
    },
    "factors": {
        "title": "Key Decision Factors: A Practical Comparison",
        "infraTitle": "1. Infrastructure Fit",
        "infraCompostTitle": "Compostable Films",
        "infraCompostDesc": "Require industrial or home composting infrastructure that accepts packaging. Misplaced in recycling bins, they can contaminate polyolefin streams.",
        "infraBioTitle": "Bio-PE",
        "infraBioDesc": "Designed to enter existing PE recycling streams as a drop-in. Do not require new collection systems; benefit from ongoing improvements in plastics recycling.",
        "residueTitle": "2. Product and Residue Profile",
        "residueCompostTitle": "Compostable is Attractive For:",
        "residueCompostDesc": "High-residue applications (coffee grounds, ready-to-eat foods, greasy snacks) where cleaning for recycling is unrealistic.",
        "residueBioTitle": "Bio-PE is Well Suited For:",
        "residueBioDesc": "Dry products and categories where consumers already understand plastic recycling, such as coffee beans, dry snacks and powders.",
        "climateTitle": "3. Climate and Resource Use",
        "climateCompostTitle": "Compostable Materials",
        "climateCompostDesc": "Can reduce contamination of landfills and incinerators and enable nutrient cycling when correctly processed.",
        "climateBioTitle": "Bio-PE",
        "climateBioDesc": "Reduces reliance on fossil feedstocks and typically lowers cradle-to-gate CO₂ emissions compared with fossil PE, while keeping recyclability.",
        "note": "Recommendation: A full comparison for your SKUs should consider both waste-management and carbon impacts, not just one."
    },
    "portfolio": {
        "title": "Using Both in a Portfolio Strategy",
        "desc": "For most brands, the answer is not \"only compostable\" or \"only bio-PE,\" but a portfolio that matches material to market.",
        "headline": "Examples:",
        "compostMarketTitle": "Markets with Strong Industrial Composting",
        "compostMarketDesc": "Compostable Eco Digital structures for food-soiled applications. Bio-PE in mono-PE pouches for dry products where recycling is well-established.",
        "recycMarketTitle": "Markets with Strong Recycling but Little Composting",
        "recycMarketDesc": "Mono-PE Eco Digital pouches with bio-PE content for both dry and some greasy applications, focusing on recyclability and carbon.",
        "emergingMarketTitle": "Emerging Markets with Limited Infrastructure",
        "emergingMarketDesc": "Prioritize mono-material designs, and use bio-PE selectively where it can support long-term goals and future-proofing."
    },
    "support": {
        "title": "How Achieve Pack Supports This Decision",
        "desc": "Achieve Pack works with brand and procurement teams to:",
        "point1": "Map composting and recycling infrastructure in priority markets",
        "point2": "Select compostable Eco Digital laminates where organics systems exist",
        "point3": "Deploy bio-PE-based Eco Digital mono-PE structures where recyclability and carbon reduction are the dominant levers",
        "note": "Our Promise: Ensure that \"sustainable\" claims are backed by real, local end-of-life pathways rather than generic global assumptions."
    },
    "cta": {
        "title": "Ready to Make the Right Choice?",
        "desc1": "If you are deciding between compostable films and bio-PE for upcoming launches, the right choice depends on where your packaging will actually go after use.",
        "desc2": "Achieve Pack can help you:",
        "point1": "Audit infrastructure in your main markets",
        "point2": "Build a decision matrix by category and geography",
        "point3": "Pilot both compostable and bio-PE Eco Digital structures on selected SKUs to generate real-world data"
    },
    "faq": {
        "title": "Frequently Asked Questions",
        "q1": "What is the main difference between bio-PE and compostable films?",
        "a1": "Bio-PE is made from renewable feedstocks (sugarcane) but behaves like conventional PE—it's recyclable, not compostable. Compostable films break down in composting conditions but require specialized infrastructure. Bio-PE focuses on carbon reduction; compostable focuses on end-of-life diversion from landfill.",
        "q2": "When should I choose compostable films over bio-PE?",
        "a2": "Choose compostable when: your markets have industrial composting infrastructure, your products generate food residues that interfere with recycling, and retail/foodservice partners promote zero-waste initiatives. Compostable packaging works best when it can follow food scraps into organics collection.",
        "q3": "When is bio-PE the better choice?",
        "a3": "Choose bio-PE when: your markets have PE recycling infrastructure, carbon footprint reduction is a priority, you want a drop-in replacement without requalifying polymers, or composting infrastructure is absent in your target regions.",
        "q4": "Can I use both bio-PE and compostable in my packaging portfolio?",
        "a4": "Yes, most brands benefit from a portfolio approach: compostable for high-residue food applications in markets with composting infrastructure, and bio-PE mono-materials for dry products where recycling is established. Match material to market infrastructure.",
        "q5": "How do I verify infrastructure availability in my target markets?",
        "a5": "Achieve Pack helps brands audit composting and recycling infrastructure in priority markets. Key factors include: municipal organics collection programs, industrial composting facilities accepting packaging, PE recycling rates, and upcoming EPR regulations."
    }
}

# 2. Traditional Chinese Data
vs_zhtw = {
    "title": "Bio-PE 與可堆肥薄膜對比 – 哪種方案更契合您的目標市場？ | Achieve Pack",
    "description": "Bio-PE 與可堆肥薄膜：為包裝與永續發展團隊提供的實用指南。根據基礎設施、產品需求和法規趨勢，在堆肥結構和生物基聚烯烴之間做出選擇。",
    "heroTitle": "Bio-PE vs 可堆肥包裝薄膜",
    "heroSubtitle": "哪種方案更契合您的目標市場？",
    "heroIntro": "為包裝、採購與永續發展團隊提供的實用決策指南：根據基礎設施、產品特性和法規趨勢，選擇合適的堆肥薄膜或生物基 PE 包裝方案。",
    "takeaways": {
        "title": "採購團隊的核心要點",
        "points": [
            "目標一致，路徑不同——可堆肥薄膜、Bio-PE 與單一可回收材質在生命週期的不同階段減少環境衝擊",
            "可堆肥包裝最適於具備工業堆肥系統、且產品殘留大量油脂食物的應用場景",
            "Bio-PE 更適用於塑料回收體系發達、且降低碳排為首要目標的市場",
            "混搭組合策略——多數品牌受益於「因地制宜」地將包裝材質與市場回收設施相匹配"
        ]
    },
    "intro": {
        "title": "引言：殊途同歸的環保路徑",
        "desc1": "如今，品牌商有多種可行的方法來提升軟包裝的環保價值：可堆肥複合結構、生物基聚烯烴（如甘蔗基 Bio-PE）以及單一材質可回收 (mono-material) 方案。",
        "desc2": "這些方案都能顯著減少環境影響，但它們高度依賴於截然不同的回收基礎設施與消費者行為。",
        "note": "本指南旨在幫助：包裝研發、採購與永續發展部門，依據目標市場的回收設施、產品特性和法規趨勢，在可堆肥薄膜與生物基 PE 之間做出務實的抉擇。"
    },
    "problem": {
        "title": "您的首要環保訴求是什麼？",
        "desc": "在挑選包裝材料之前，首先需要明確品牌的核心永續目標：",
        "landfillTitle": "減少填埋，零廢棄",
        "landfillDesc": "將食品殘留與包裝一同導向有機垃圾收集與堆肥系統？",
        "carbonTitle": "原料減碳，低碳足跡",
        "carbonDesc": "減少化石石油消耗，在保持極佳可回收性的同時大幅降碳？",
        "eprTitle": "因應法規，降低 EPR 稅費",
        "eprDesc": "配合即將出台的包裝法規，提升包裝的可回收評級並降低環保稅費？"
    },
    "compostable": {
        "title": "可堆肥薄膜：包裝與廚餘一同回歸土地",
        "desc1": "可堆肥薄膜專為在特定堆肥條件下（工業或家庭）降解而研發。它們能完全分解為二氧化碳、水、生物質和礦物質，不留任何有毒殘留物。",
        "desc2": "搭配有機廢棄物收運系統，這類包裝能與剩餘廚餘垃圾一道進行堆肥處理，實現閉環。",
        "headline": "在以下情況下，可堆肥包裝最受青睞：",
        "point1": "您的主要銷售市場建有完善的工業堆肥收運體系，且允許包裝進入有機垃圾箱",
        "point2": "您的產品在使用後會殘留大量食物油污（如咖啡渣、即食餐、油膩零食），難以進行傳統回收清洗",
        "point3": "零售通路或餐飲合作夥伴正積極推動零廢棄（Zero-Waste）及有機物分流倡議",
        "note": "⚠️ 特別提醒：在堆肥收集體系尚未建立的地區，可堆肥包裝最終只能進入填埋場或混入回收箱造成污染，無法發揮環保效益。"
    },
    "biope": {
        "title": "Bio-PE：將重心置於回收與低碳源頭",
        "desc": "Bio-PE 走的是另一條綠色通道。它沿用了常規 PE 塑料成熟的可回收路徑，但在原料端使用可再生的植物資源（甘蔗）替代化石石油，從源頭固碳減排。",
        "headline": "在以下情況下，選擇 Bio-PE 最為明智：",
        "point1": "目標市場具備成熟的軟包 PE 塑料回收渠道，且法規政策更支持並獎勵「單一材質可回收」",
        "point2": "品牌將降低碳足跡放在第一位，且需要一款可以直接替代常規塑料的 drop-in 方案，免去漫長的上機調試",
        "point3": "希望避免可堆肥宣傳在缺乏堆肥渠道的地區引發消費者困惑，或造成分揀垃圾時的混淆",
        "note": "關鍵洞察：在此場景下，包裝處置的重心在於「循環回收與原料降碳」，而非自然降解。"
    },
    "factors": {
        "title": "核心決策維度：實用橫向對比",
        "infraTitle": "1. 基礎設施適應性 (Infrastructure Fit)",
        "infraCompostTitle": "可堆肥薄膜",
        "infraCompostDesc": "高度依賴接受包裝的工業或家庭堆肥收運體系。若被誤投進塑料回收箱，會降低再生塑料的質量。",
        "infraBioTitle": "Bio-PE (甘蔗基)",
        "infraBioDesc": "作為 drop-in 直接進入現有的 PE 回收流。不需要建立新的收運系統，可直接受益於現有的塑料回收率提升。",
        "residueTitle": "2. 產品特性與食物殘留 (Product & Residue)",
        "residueCompostTitle": "可堆肥包裝非常適用於：",
        "residueCompostDesc": "高食物殘留的應用（如咖啡粉袋、即食便當、油脂性食品），這類包裝在傳統回收中因清洗成本過高而難以再生。",
        "residueBioTitle": "Bio-PE 非常適用於：",
        "residueBioDesc": "乾貨產品以及消費者已經非常習慣分類回收的品類，例如精品咖啡豆、乾果、休閒零食與保健粉劑。",
        "climateTitle": "3. 氣候效益與資源消耗 (Climate & Carbon)",
        "climateCompostTitle": "可堆肥材料",
        "climateCompostDesc": "在正確的堆肥系統中可 enabling 有機質回田，減少填埋場的甲烷釋放。",
        "climateBioTitle": "Bio-PE",
        "climateBioDesc": "顯著減少石油資源消耗。生命週期評估顯示其碳足跡遠低於傳統 PE，同時在廢棄後可以反覆循環再造。",
        "note": "建議：對您旗下 SKU 的評估應綜合考量廢棄物處置便利性與碳足跡，而非單一指標。"
    },
    "portfolio": {
        "title": "因地制宜：混搭包裝組合策略",
        "desc": "對於擁有多元產品線與市場的品牌，最理性的方案並非「非此即彼」，而是建立一個與市場回收設施相匹配的「包裝材質組合」。",
        "headline": "策略示範：",
        "compostMarketTitle": "堆肥收運發達的地區",
        "compostMarketDesc": "在容易沾染食物油污的產品上使用 Eco Digital 可堆肥結構。而對於乾燥產品，則採用單一 PE 材質 (含 Bio-PE) 以確保高回收率。",
        "recycMarketTitle": "塑料回收發達但堆肥受限的地區",
        "recycMarketDesc": "不論乾濕，優先推廣單一材質 (mono-PE) 袋，並在其中融合 Bio-PE 甘蔗基原料，將營銷重點放在「植物基、100% 可回收」與低碳足跡。",
        "emergingMarketTitle": "回收設施尚不健全的地區",
        "emergingMarketDesc": "優先採用單一材質簡化包裝，並戰略性地在部分旗艦產品中採用 Bio-PE 作為低碳轉型的起步宣傳。"
    },
    "support": {
        "title": "Achieve Pack 如何支持您的環保包裝決策",
        "desc": "我們與品牌的包裝研發與採購團隊合作，共同推進：",
        "point1": "分析並評估目標銷售市場的堆肥與塑料回收管道現狀",
        "point2": "在具備有機堆肥系統的地區，提供通過國際堆肥認證的 Eco Digital 結構袋",
        "point3": "在塑料回收發達的市場，部署以甘蔗基 Bio-PE 為特色的 Eco Digital 單一材質袋，實現降碳與回收雙贏",
        "note": "我們的承諾：確保您的「永續」宣傳均是建立在當地真實的處置管道之上，而非僅僅是概念性的口號。"
    },
    "cta": {
        "title": "準備好做出正確的包裝抉擇了嗎？",
        "desc1": "在為新產品線選擇可堆肥薄膜還是 Bio-PE 時，最關鍵的決定因素在於包裝廢棄後「能去往哪裡」。",
        "desc2": "Achieve Pack 可以幫助您：",
        "point1": "對您核心銷售市場的垃圾處置與回收設施進行調研",
        "point2": "依據產品類別與銷售地區，建立量化決策矩陣",
        "point3": "在選定 SKU 上率先試點 Eco Digital 可堆肥袋或甘蔗基 PE 袋，積累真實的上機與市場數據"
    },
    "faq": {
        "title": "常見問答集",
        "q1": "Bio-PE 與可堆肥薄膜的主要差別是什麼？",
        "a1": "Bio-PE 源自植物可再生原料（甘蔗），但其廢棄後的回收表現與普通塑料完全相同，是可回收、不可堆肥的。可堆肥薄膜則專為自然降解設計，能在堆肥環境下分解，但回收廠不收。前者著重於源頭減碳，後者著重於末端垃圾分流。",
        "q2": "我什麼時候應該選擇可堆肥薄膜而非 Bio-PE？",
        "a2": "當您目標銷售市場具備健全的工業堆肥收運體系、且產品沾染大量食物油垢（如咖啡粉、即食餐）難以清洗回收時，可堆肥薄膜是最佳選擇，它能隨廚餘一起化為肥料。",
        "q3": "什麼時候 Bio-PE 是更好的選擇？",
        "a3": "當目標市場的塑料回收渠道比較發達、降低碳排放是品牌的核心訴求，且您不希望重新調試現有包裝上機設備時，Bio-PE 是完美的 drop-in 方案。",
        "q4": "我可以在產品線中同時使用這兩種材料嗎？",
        "a4": "可以，這正是多數成功品牌的組合策略：對於有油污殘留的廚餘關聯產品，在堆肥基礎發達的市場採用可堆肥袋；而對乾燥食品，則在全渠道推廣甘蔗基 PE 可回收袋。讓材料與渠道相適應。",
        "q5": "如何確認我銷售地區的回收與堆肥基礎設施？",
        "a5": "Achieve Pack 可協助品牌對各國的 municipal 垃圾收集政策、工業堆肥站的接收標準、軟塑料回收率以及即將推行的 EPR 法規進行綜合評估，為您選定最合理的材料方案。"
    }
}

# Add to locales function
def update_locales_sub(key_name, new_data):
    for lang, file_path in locales.items():
        print(f"Updating {lang} JSON with {key_name}...")
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
        else:
            data = {}

        if 'seoPages' not in data:
            data['seoPages'] = {}
        if 'pages' not in data['seoPages']:
            data['seoPages']['pages'] = {}
        
        # Determine language translations
        if lang == 'en':
            target_data = new_data['en']
        elif lang == 'zh-TW':
            target_data = new_data['zh-tw']
        elif lang == 'es':
            target_data = new_data['en'] # ES/FR fallbacks
        elif lang == 'fr':
            target_data = new_data['en']
            
        data['seoPages']['pages'][key_name] = target_data
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print(f"  Successfully updated {lang} JSON!")

# Generate translation dicts for vs
vs_data = {
    'en': vs_en,
    'zh-tw': vs_zhtw
}

update_locales_sub('bioPEVsCompostable', vs_data)

print("Done vs updates!")
