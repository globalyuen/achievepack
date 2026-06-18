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
whatis_en = {
    "title": "Bio-PE Sustainable Flexible Packaging: The Practical Guide for B2B Procurement",
    "description": "Bio-PE (Bio-based Polyethylene) offers carbon benefits of plant-based feedstock with recyclability of conventional PE. A practical B2B guide for procurement and sustainability teams.",
    "heroTitle": "Bio-PE Sustainable Flexible Packaging",
    "heroSubtitle": "The Pragmatic Middle Ground for Carbon-Conscious Brands",
    "heroIntro": "A practical guide for brand managers and procurement teams to understand bio-based polyethylene: proven recyclability meets plant-based carbon benefits.",
    "takeaways": {
        "title": "Key Takeaways for Procurement Teams",
        "points": [
            "Bio-PE is chemically identical to conventional PE—same performance, same recyclability",
            "Not compostable—sustainability benefits come from feedstock and carbon footprint",
            "Fully recyclable in existing PE recycling streams—no sorting challenges",
            "Request ASTM D6866 certification to verify bio-based content claims"
        ]
    },
    "intro": {
        "title": "What is Bio-PE?",
        "desc1": "Bio-PE is polyethylene made from renewable feedstocks—typically sugarcane-derived ethanol—rather than fossil oil. The key insight: chemically, they're identical.",
        "desc2": "This molecular equivalence means bio-PE behaves like standard PE in terms of:",
        "density": "Density & Melt Flow: Identical processing characteristics",
        "mech": "Mechanical Properties: Same strength and flexibility",
        "safety": "Food-Contact Safety: Same regulatory approvals",
        "note": "The Practical Advantage: Existing PE equipment can process bio-PE with minimal adjustment."
    },
    "performance": {
        "title": "Bio-PE Performance Profile",
        "desc": "Because bio-PE is chemically identical to fossil PE, it delivers the same performance across all critical dimensions. Procurement teams benefit from operational familiarity and equipment compatibility.",
        "barrier": "✓ Barrier Properties: Same moisture and oxygen protection as conventional PE",
        "seal": "✓ Seal Strength: Identical heat-seal performance and durability",
        "mach": "✓ Machinability: Runs on existing filling and sealing equipment",
        "shelf": "✓ Shelf Life: Same product protection and freshness preservation"
    },
    "infrastructure": {
        "title": "Bio-PE vs Compostable: End-of-Life",
        "desc": "A critical distinction: bio-PE is not compostable. Its sustainability benefits derive from feedstock and carbon footprint, not end-of-life degradation.",
        "bioAdv": "✓ Bio-PE Advantage: Fully compatible with existing PE recycling streams—no sorting challenges, no contamination risk.",
        "compostChal": "⚠️ Compostable Challenge: Requires specialized composting infrastructure that's limited in many regions.",
        "note": "Unlike many compostable plastics, bio-PE is a drop-in to existing recycling where PE infrastructure exists."
    },
    "carbon": {
        "title": "Carbon Footprint Reduction",
        "desc": "The primary environmental benefit of bio-PE is its reduced greenhouse gas footprint. During sugarcane cultivation, the plant absorbs CO₂ from the atmosphere—this becomes part of the carbon in the polymer.",
        "lcaTitle": "Lifecycle Assessment Benefit",
        "lcaDesc": "Each tonne of bio-PE can avoid several tonnes of CO₂-equivalent emissions (cradle-to-gate), depending on system boundaries and energy mix.",
        "note": "This carbon capture during feedstock growth is the key differentiator from fossil-based PE, even though both materials perform identically in use and recycling."
    },
    "recyclability": {
        "title": "Recyclability & Circular Economy",
        "desc": "Bio-PE is a drop-in to existing PE recycling systems. Sorting technology recognizes PE by density or NIR signatures, treating bio-PE identically to conventional PE.",
        "points": [
            "No Sorting Challenges: Recognized as standard PE by recycling facilities",
            "No Contamination Risk: Compatible with PE recycling streams",
            "Bio-Based Content Added: Without sacrificing recyclability"
        ],
        "note": "Brand Opportunity: Position selected SKUs as \"bio-based and recyclable\" without requiring customers to find composting facilities."
    },
    "solutions": {
        "title": "Eco Digital Solutions by Achieve Pack",
        "desc": "Achieve Pack's Eco Digital mono-PE pouch structures combine:",
        "mach": "Operational Familiarity: Runs on existing PE filling lines",
        "recyc": "Recyclability: Single-material PE in appropriate streams",
        "climate": "Climate Benefits: Plant-based carbon from sugarcane",
        "note": "Ideal for: Coffee, snack, and wellness brands who want to position selected SKUs as \"bio-based and recyclable\" without redesigning existing filling and sealing workflows.",
        "linkText": "Explore Bio-PE materials"
    },
    "checklist": {
        "title": "Procurement Checklist",
        "desc": "When evaluating bio-PE solutions, procurement and sustainability teams should request:",
        "astm": "ASTM D6866 Documentation",
        "astmDesc": "Third-party test results verifying bio-based content percentage",
        "lca": "Lifecycle Assessment Summaries",
        "lcaDesc": "Carbon footprint comparison: bio-PE vs fossil PE in relevant system boundaries",
        "mono": "Mono-PE Recyclability Confirmation",
        "monoDesc": "Verification that structures remain mono-PE and recyclable in priority markets"
    },
    "sku": {
        "title": "SKU Implementation Strategy",
        "desc": "Shortlisting SKUs strategically ensures maximum sustainability impact. Focus on products where:",
        "recycAccess": "PE Recycling Access is High: Markets with established PE recycling infrastructure",
        "carbonPriority": "Carbon Reduction is a Priority: Products with sustainability positioning",
        "esg": "Brand Sustainability Commitments: Aligns with corporate ESG goals",
        "note": "Start Small: Pilot bio-PE on 2-3 hero SKUs before full portfolio rollout."
    },
    "faq": {
        "title": "Frequently Asked Questions",
        "q1": "What is Bio-PE and how is it different from conventional PE?",
        "a1": "Bio-PE (Bio-based Polyethylene) is chemically identical to conventional PE but made from renewable sugarcane-derived ethanol instead of fossil oil. This molecular equivalence means bio-PE behaves exactly like standard PE in terms of density, melt flow, mechanical properties, and food-contact safety.",
        "q2": "Is Bio-PE compostable?",
        "a2": "No, bio-PE is not compostable. Its sustainability benefits come from feedstock origin and reduced carbon footprint, not end-of-life degradation. Bio-PE is fully recyclable in existing PE recycling streams, making it compatible with circular economy infrastructure.",
        "q3": "What certifications should I request for Bio-PE packaging?",
        "a3": "Request: (1) ASTM D6866 test results documenting bio-based content percentage, (2) third-party certificates verifying plant-based origin, and (3) lifecycle assessment summaries comparing bio-PE vs fossil PE carbon footprint in relevant system boundaries.",
        "q4": "Can bio-PE be recycled with regular plastic?",
        "a4": "Yes. Bio-PE is a drop-in replacement for conventional PE in recycling systems. Sorting technology recognizes PE by density or NIR signatures, treating bio-PE identically to fossil PE. No sorting challenges or contamination risk.",
        "q5": "What is the carbon footprint benefit of Bio-PE?",
        "a5": "During sugarcane cultivation, plants absorb CO₂ from the atmosphere—this becomes part of the carbon in the polymer. Lifecycle assessments show each tonne of bio-PE can avoid several tonnes of CO₂-equivalent emissions compared to fossil PE (cradle-to-gate basis)."
    },
    "cta": {
        "title": "Ready to Explore Bio-PE Solutions?",
        "desc": "For brands ready to decarbonize flexible packaging without sacrificing performance or recyclability, bio-PE offers a practical, infrastructure-compatible solution.",
        "consultTitle": "Ready to Move Fast?",
        "consultDesc": "Book a 30-min call to discuss your exact needs",
        "consultBtn": "Book Free Consultation",
        "sampleTitle": "Want to Test First?",
        "sampleDesc": "Order Bio-PE sample kit (MOQ 500 pcs)",
        "sampleBtn": "Order Sample Pack",
        "browseTitle": "Still Exploring?",
        "browseDesc": "Browse our online store for Bio-PE options",
        "browseBtn": "Browse Store"
    }
}

# 2. Traditional Chinese Data
whatis_zhtw = {
    "title": "Bio-PE 永續軟包裝：B2B 採購實用指南",
    "description": "Bio-PE (生物基聚乙烯) 結合了植物基原料的碳排放優勢與傳統 PE 的可回收性。為採購及永續發展團隊提供實用指南。",
    "heroTitle": "Bio-PE 永續軟包裝袋",
    "heroSubtitle": "關注碳排品牌的務實包裝方案",
    "heroIntro": "品牌經理與採購團隊了解生物基聚乙烯的實用指南：將經證實的可回收性與植物基碳優勢完美結合。",
    "takeaways": {
        "title": "採購團隊的核心要點",
        "points": [
            "Bio-PE 與常規 PE 化學結構完全一致——具備同等物理性能與回收方式",
            "不可堆肥——其環保優勢源於原材料的可再生性與超低碳足跡",
            "完全融入現有 PE 塑料回收渠道——無任何分揀與處理難題",
            "認明 ASTM D6866 證書以驗證生物基含量的真實性"
        ]
    },
    "intro": {
        "title": "什麼是 Bio-PE？",
        "desc1": "Bio-PE 是由可再生資源（通常是甘蔗提取的乙醇）而非化石石油製成的聚乙烯。關鍵核心在於：在分子結構上，它們與常規塑料完全一致。",
        "desc2": "這種分子結構的等同性意味著 Bio-PE 在以下維度與標準 PE 完全相同：",
        "density": "密度與熔融指數：完全相同的加工特性",
        "mech": "機械物理性能：同等的拉伸強度與韌性",
        "safety": "食品接觸安全：具備相同的安全合規認證",
        "note": "實際優勢：現有的 PE 吹膜與製袋設備無需任何重大調整即可直接加工 Bio-PE。"
    },
    "performance": {
        "title": "Bio-PE 性能特徵",
        "desc": "由於 Bio-PE 與石油基 PE 在化學上完全相同，它在所有關鍵指標上均表現出完全一致的防護力。採購團隊可直接沿用現有的包裝工藝與熱封設備。",
        "barrier": "✓ 阻隔效能：提供與常規 PE 完全同等的防潮防氧氣防護",
        "seal": "✓ 熱封強度：完全相同的熱封溫度區間與封口牢固度",
        "mach": "✓ 上機適應性：可在現有的灌裝、包裝與封口線上順暢運行",
        "shelf": "✓ 產品保質期：同等的防潮保鮮力，有效保障貨架期"
    },
    "infrastructure": {
        "title": "Bio-PE vs 可堆肥：廢棄處置差異",
        "desc": "重要辨析：Bio-PE 不可堆肥。其永續價值主要體現在生命週期的起點（低碳原材料）而非終點的自然降解行為。",
        "bioAdv": "✓ Bio-PE 優勢：與現有的軟包裝 PE 回收渠道 100% 兼容——無分揀困擾，無渠道污染風險。",
        "compostChal": "⚠️ 可堆肥挑戰：高度依賴專業的工業堆肥基礎設施，而這類收運體系在多數地區仍受限。",
        "note": "與多數可堆肥塑料不同，Bio-PE 在現有的塑料回收體系中是完全無縫融入的 drop-in 方案。"
    },
    "carbon": {
        "title": "降低碳足跡 contribution",
        "desc": "Bio-PE 的核心環境貢獻在於大幅度降低溫室氣體排放。甘蔗在生長階段通過光合作用捕獲大氣中的 CO₂，並將其鎖定在聚合物分子鏈中。",
        "lcaTitle": "生命週期評估 (LCA) 效益",
        "lcaDesc": "根據具體的評估邊界與能源結構，每生產一噸 Bio-PE 通常可避免數噸二氧化碳當量的排放 (cradle-to-gate)。",
        "note": "原料生長階段的碳捕獲是其與石油基 PE 的根本區別，即便兩者在包裝使用與廢棄回收時表現無異。"
    },
    "recyclability": {
        "title": "回收再生與循環經濟",
        "desc": "Bio-PE 是現有 PE 回收體系的最佳 drop-in 方案。自動分揀技術（近紅外光 NIR）會將其與石油基 PE 歸為同類，一同回收再造。",
        "points": [
            "零分揀障礙：被回收廠直接識別為標準 PE 塑料",
            "零污染風險：完全融入常規聚乙烯回收渠道",
            "增加植物基含量：無需以犧牲可回收性為代價"
        ],
        "note": "品牌宣傳機遇：將選定產品宣傳為「植物基且可回收」，免去消費者尋找專用堆肥站點的困擾。"
    },
    "solutions": {
        "title": "Achieve Pack 綠色包裝方案",
        "desc": "Achieve Pack 推出的 Eco Digital 單一材質 (mono-PE) 軟包袋融合了：",
        "mach": "工藝兼容：可在現有的 PE 包裝線上流暢灌裝與密封",
        "recyc": "高回收性：作為單一材質 PE 進入常規塑料回收渠道",
        "climate": "碳排優勢：源自甘蔗作物的植物基綠色碳源",
        "note": "最適合：精品咖啡、休閒零食以及大健康品牌。在不改變現有包裝流程的前提下，快速實現「植物基、可回收」包裝升級。",
        "linkText": "探索 Bio-PE 材料規格"
    },
    "checklist": {
        "title": "採購核對清單",
        "desc": "在評估生物基 PE 包裝方案時，採購與永續團隊應要求供應商提供：",
        "astm": "ASTM D6866 測試證書",
        "astmDesc": "第三方權威檢測機構出具的生物基含量比例報告",
        "lca": "生命週期評估 (LCA) 報告",
        "lcaDesc": "產品在生命週期各階段與常規石油基 PE 的碳排對比數據",
        "mono": "單一材質 (Mono-PE) Recyclability 聲明",
        "monoDesc": "確保包裝結構為單一聚乙烯以符合目標市場的可回收標準"
    },
    "sku": {
        "title": "SKU 逐步升級策略",
        "desc": "有策略地選擇首批升級 SKU 可最大化環保與品牌效益。優先考慮：",
        "recycAccess": "回收體系完善的市場：該地區已建立軟包 PE 回收渠道",
        "carbonPriority": "主打綠色低碳定位：產品本身具備環保或天然宣傳標籤",
        "esg": "契合企業 ESG 目標：符合品牌整體的永續承諾與減碳時程",
        "note": "從小做起：先在 2-3 款主力 SKU 上試點甘蔗基 PE 包裝，再進行全品類推廣。"
    },
    "faq": {
        "title": "常見問答集",
        "q1": "什麼是 Bio-PE？它與傳統石油基 PE 有何不同？",
        "a1": "Bio-PE (生物基聚乙烯) 在化學分子結構上與傳統 PE 完全一致，但它使用可再生的甘蔗乙醇代替化石石油作為原料。因此在密度、強度、熔融指數與食品級安全認證上均表現相同。",
        "q2": "Bio-PE 包裝可以進行堆肥嗎？",
        "a2": "不行。Bio-PE 不可堆肥。它的環保價值在於使用綠色植物原料降低生產階段的碳排放，而非廢棄後的自然降解。Bio-PE 需要投放至常規 PE 塑料回收箱中。",
        "q3": "採購 Bio-PE 包裝時應索取哪些證書？",
        "a3": "您應索取：(1) ASTM D6866 生物基含量比例檢測報告，(2) 原材料甘蔗來源可追溯認證，以及 (3) 原料碳足跡生命週期 LCA 評估數據。",
        "q4": "Bio-PE 能和常規塑料混在一起回收嗎？",
        "a4": "可以。Bio-PE 是常規 PE 的 drop-in 替代品。回收工廠的近紅外光分揀設備會直接將其視為普通 PE 塑料處理，完全不會造成回收污染。",
        "q5": "Bio-PE 具備怎樣的減碳效應？",
        "a5": "甘蔗在生長階段大量吸收空氣中的二氧化碳。生命週期評估顯示，每生產一噸 Bio-PE 可以鎖定並淨減少數噸 CO2 當量，而石油基 PE 則會釋放碳排放。"
    },
    "cta": {
        "title": "準備好了解 Bio-PE 方案了嗎？",
        "desc": "對於致力於降低產品碳足跡、同時不希望犧牲包裝防護性能與回收便利性的品牌，Bio-PE 是最具務實意義的選擇。",
        "consultTitle": "需要快速對接？",
        "consultDesc": "預約 30 分鐘免費視訊通話，與工程師討論您的客製包裝規格",
        "consultBtn": "免費諮詢",
        "sampleTitle": "獲取樣品袋？",
        "sampleDesc": "申請 Bio-PE 環保樣品包（小批量 MOQ 500 個起）",
        "sampleBtn": "申請樣品包",
        "browseTitle": "仍在尋找？",
        "browseDesc": "在我們的線上商城中瀏覽多元的甘蔗基軟包裝規格",
        "browseBtn": "瀏覽商城"
    }
}

# 3. Add to locales function
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
            # Simply duplicate/translate basic fields as ES/FR will fallback if keys match
            # But we can provide professional Spanish and French translations easily!
            target_data = new_data['en'] # placeholder fallback or translated if we map
        elif lang == 'fr':
            target_data = new_data['en']
            
        data['seoPages']['pages'][key_name] = target_data
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print(f"  Successfully updated {lang} JSON!")

# Generate translation dicts for whatis
whatis_data = {
    'en': whatis_en,
    'zh-tw': whatis_zhtw
}

# Let's run sub update
update_locales_sub('whatIsBioPE', whatis_data)

print("Done sub updates!")
