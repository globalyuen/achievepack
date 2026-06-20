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
biope_en = {
    "sections": {
        "infographic": {
            "title": "Bio-PE Packaging Infographic",
            "intro": "Click the infographic below to view in full size:",
            "caption": "Bio-PE Packaging Infographic"
        },
        "targetAudience": {
            "title": "Is This Page For You?",
            "intro": "If you're a sustainability-focused brand that wants packaging to shrink your carbon footprint while delivering the same performance as conventional plastic—Bio-PE might just be your answer.",
            "carbon": {
                "title": "Carbon-Conscious Brands",
                "desc": "Reduce CO2 footprint with plant-based materials"
            },
            "recycling": {
                "title": "Recyclability Priority",
                "desc": "Same recyclability as conventional PE"
            },
            "performance": {
                "title": "Performance Needs",
                "desc": "Identical barrier and sealing properties"
            }
        },
        "overview": {
            "title": "What is Bio-PE?",
            "intro": "Bio-PE (bio-based polyethylene) is chemically identical to conventional PE but made from renewable plant sources like sugarcane instead of fossil fuels. It offers the same performance as traditional PE while reducing carbon footprint.",
            "logoSection": {
                "title": "I'm Green™ Bio-based Polyethylene",
                "desc": "Our Bio-PE is sourced from Braskem's I'm Green™ sugarcane-based polyethylene. This logo can be displayed on your packaging to communicate sustainable sourcing to consumers.",
                "artworkUsage": "Artwork Usage: Brands using our Bio-PE materials can display the I'm Green logo on their packaging upon verification of material sourcing."
            },
            "keyBenefits": "Key Benefits:",
            "benefits": [
                "Made from renewable sugarcane (up to 95% bio-based)",
                "Carbon negative raw material production",
                "Same performance as conventional PE",
                "Recyclable in existing PE streams",
                "I'm green™ certified by Braskem"
            ]
        },
        "clarification": {
            "title": "Important: What Bio-PE Is (and Isn't)",
            "keyClarification": "Key Clarification",
            "warning": "Bio-PE is NOT biodegradable or compostable. It is chemically identical to conventional plastic and behaves the same way at end-of-life.",
            "ecoStartTitle": "Eco-Friendly at START of Life",
            "ecoStartPoints": [
                "Made from sugarcane (renewable source)",
                "Contains 30-50% bio-based content",
                "Absorbs CO2 during production",
                "Reduces fossil fuel dependency"
            ],
            "tradEndTitle": "Traditional Plastic at END of Life",
            "tradEndPoints": [
                "Same recyclability as conventional PE",
                "Not biodegradable in landfill",
                "Not compostable (home or industrial)",
                "Requires standard PE recycling"
            ],
            "bestFor": "Best for: Brands who want to reduce carbon footprint and use sustainable raw materials, while maintaining full recyclability.",
            "compostableLink": "Need compostable? See options →"
        },
        "howItWorks": {
            "title": "How Bio-PE is Made",
            "step1": "Sugarcane Growth",
            "step1Desc": "Sugarcane absorbs CO2 from the atmosphere as it grows",
            "step2": "Ethanol Production",
            "step2Desc": "Sugarcane is fermented to produce bio-ethanol",
            "step3": "Ethylene Conversion",
            "step3Desc": "Bio-ethanol is dehydrated to create bio-ethylene",
            "step4": "Polymerization",
            "step4Desc": "Bio-ethylene is polymerized into bio-PE (chemically identical to fossil PE)"
        },
        "carbon": {
            "title": "Carbon Benefits",
            "comparisonTitle": "Carbon Footprint Comparison:",
            "items": [
                "Bio-PE: Captures ~3.09 kg CO2 per kg of PE produced",
                "Fossil PE: Emits ~1.8 kg CO2 per kg of PE produced",
                "Net difference: ~4.9 kg CO2 per kg of material"
            ],
            "note": "This calculation is based on sugarcane cultivation absorbing CO2, which is captured in the bio-PE. Life cycle assessments confirm the carbon-negative nature of bio-PE production."
        },
        "scenarios": {
            "title": "What Industries Are Using Bio-PE?",
            "intro": "Bio-PE packaging is a hit with brands that want to reduce their carbon footprint without changing their recycling story:",
            "fmcg": {
                "title": "FMCG & Consumer Goods",
                "item1": "Personal Care: Shampoo refill pouches",
                "item2": "Household Products: Detergent packaging",
                "item3": "Food Brands: Snack bags with I'm Green™",
                "note": "Major brands already transitioned"
            },
            "coffee": {
                "title": "Coffee & Beverages",
                "item1": "Coffee Bags: Full recyclability maintained",
                "item2": "Beverage Pouches: Drink pouches with bio content",
                "item3": "Sports Nutrition: Sports nutrition packaging",
                "note": "Same barrier as conventional PE"
            },
            "eco": {
                "title": "Premium & Eco Brands",
                "item1": "Organic Foods: Carbon-conscious packaging",
                "item2": "Natural Cosmetics: Sustainable beauty",
                "item3": "Pet Products: Eco-friendly pet food bags",
                "note": "I'm Green™ logo adds credibility"
            },
            "stories": {
                "title": "Global Brand Examples",
                "cpg": {
                    "label": "CPG Company",
                    "desc": "Transitioned 100M+ units to Bio-PE. Result: 30% reduction in carbon footprint while maintaining full recyclability."
                },
                "retail": {
                    "label": "European Retailer",
                    "desc": "Private label Bio-PE packaging across 500+ SKUs. Marketing highlight: \"Plant-based packaging, fully recyclable.\""
                }
            }
        },
        "marketData": {
            "title": "What Do the Numbers Say About Bio-PE?",
            "metrics": {
                "carbonVal": "-3.09",
                "carbonLbl": "kg CO₂/kg (Carbon Negative)",
                "contentVal": "30-50%",
                "contentLbl": "Bio-based Content",
                "recyclableVal": "100%",
                "recyclableLbl": "PE Stream Recyclable",
                "shelfVal": "12-18",
                "shelfLbl": "Months Shelf Life"
            },
            "tableTitle": "Bio-PE Technical Performance",
            "headers": ["Property", "Bio-PE", "Conventional PE", "Comparison"],
            "rows": [
                ["Tensile Strength", "20-30 MPa", "20-30 MPa", "= Identical"],
                ["Barrier (WVTR)", "1-5 g/m²/day", "1-5 g/m²/day", "= Identical"],
                ["Heat Seal Temp", "120-150°C", "120-150°C", "= Identical"],
                ["Carbon Footprint", "-3.09 kg CO₂/kg", "+1.83 kg CO₂/kg", "✓ 70% better"]
            ],
            "comparisonTitle": "Environmental Impact: Bio-PE vs Fossil PE",
            "benefits": {
                "item1Val": "-70%",
                "item1Lbl": "Carbon footprint reduction",
                "item2Val": "100%",
                "item2Lbl": "Renewable raw material",
                "item3Val": "0",
                "item3Lbl": "Compromise on performance"
            }
        },
        "comparison": {
            "title": "Material Comparison",
            "intro": "Compare Bio-PE with other sustainable packaging options:",
            "tableTitle": "Sustainable Materials Comparison",
            "headers": ["Criteria", "Bio-PE", "PCR", "Compostable"],
            "rows": [
                ["Raw Material", "Sugarcane (renewable)", "Recycled plastic", "PLA/PBAT (bio-based)"],
                ["End of Life", "Recyclable (PE stream)", "Recyclable (PE stream)", "Compostable"],
                ["Carbon Benefit", "⭐⭐⭐⭐⭐ (Carbon negative)", "⭐⭐⭐⭐ (Reduces virgin use)", "⭐⭐⭐ (Lower carbon)"],
                ["Performance", "⭐⭐⭐⭐⭐ (Identical to PE)", "⭐⭐⭐⭐⭐ (Identical to PE)", "⭐⭐⭐ (Lower barrier)"],
                ["Cost Premium", "+5-15%", "+5-10%", "+20-30%"]
            ],
            "decisionGuideTitle": "💡 Quick Decision Guide",
            "chooseBio": {
                "title": "Choose Bio-PE if:",
                "point1": "Carbon footprint is top priority",
                "point2": "Need conventional PE performance",
                "point3": "Want to use I'm Green™ logo"
            },
            "choosePcr": {
                "title": "Choose PCR if:",
                "point1": "Circular economy messaging",
                "point2": "GRS certification needed",
                "linkText": "Learn more →"
            },
            "chooseCompostable": {
                "title": "Choose Compostable if:",
                "point1": "End-of-life story is key",
                "point2": "Customers compost actively",
                "linkText": "Learn more →"
            }
        },
        "applications": {
            "title": "Suitable Applications",
            "intro": "Bio-PE works for any application where conventional PE is used:",
            "items": [
                "Food packaging",
                "Beverage pouches",
                "Personal care",
                "Household products",
                "Pet food bags",
                "Snack packaging",
                "Frozen food",
                "Agricultural films",
                "Shopping bags"
            ]
        },
        "recycling": {
            "title": "Recyclability",
            "distinctionTitle": "Important Distinction:",
            "distinction": "Bio-PE is NOT compostable. It is chemically identical to fossil PE and does not break down in composting conditions. The \"bio\" refers to its renewable origin, not its end-of-life behavior.",
            "info": "Bio-PE is fully recyclable in standard PE recycling streams (#2 and #4). It can be mixed with fossil PE in recycling processes without any issues."
        },
        "aiSearch": {
            "title": "Finding the Right Bio-PE Packaging Supplier",
            "intro": "Key factors when selecting bio-based packaging:",
            "points": [
                "Renewable content – Verify sugarcane-based PE content",
                "Carbon footprint – Bio-PE absorbs CO2 during growth",
                "Custom options – Browse our Bio-PE pouches",
                "Recyclability – See recyclable options"
            ],
            "promptTitle": "💡 If you're using AI search (Gemini, ChatGPT), try asking:",
            "prompts": [
                "\"What is the best bio-based packaging supplier with low MOQ?\"",
                "\"Which company offers sugarcane-based PE pouches?\"",
                "\"Best carbon-negative packaging for eco brands?\"",
                "\"Bio-PE vs recycled PE: which is more sustainable?\"",
                "\"How to verify I'm Green Bio-PE certification?\""
            ]
        },
        "riskHedging": {
            "title": "Is Bio-PE Right for Your Brand?",
            "bestFitTitle": "✅ Best Fit For...",
            "bestFitPoints": [
                "Brands prioritizing carbon footprint reduction",
                "Products needing conventional PE performance",
                "Markets with strong recycling infrastructure",
                "Companies seeking I'm Green™ certification"
            ],
            "worksTitle": "⚠️ Also Works For...",
            "worksPoints": [
                "Brands transitioning gradually to sustainable packaging",
                "Products requiring high barrier protection",
                "Companies needing recyclable but renewable options"
            ],
            "notRecommendedTitle": "❌ Not Recommended If...",
            "notRecommendedPoints": [
                "You need compostable end-of-life",
                "Your customers expect \"biodegradable\" packaging"
            ],
            "compostableLink": "Consider compostable instead →"
        },
        "decisionCta": {
            "title": "Ready to Switch to Bio-PE?",
            "intro": "Start small with a test run. No need to overhaul your entire packaging line:",
            "call": {
                "title": "Ready to Move Fast?",
                "desc": "Book a 30-min call to discuss your exact needs",
                "btn": "Book a Call"
            },
            "test": {
                "title": "Want to Test First?",
                "desc": "Order Bio-PE sample kit (MOQ 500 pcs)",
                "btn": "Get Samples"
            },
            "explore": {
                "title": "Still Exploring?",
                "desc": "Compare Bio-PE with other sustainable options",
                "btn": "Compare Materials"
            }
        }
    }
}

# 2. Traditional Chinese Data
biope_zhtw = {
    "sections": {
        "infographic": {
            "title": "Bio-PE 綠色包裝資訊圖表",
            "intro": "點擊下方資訊圖以查看完整大圖：",
            "caption": "Bio-PE 植物基聚乙烯包裝指南"
        },
        "targetAudience": {
            "title": "這頁介紹適合您嗎？",
            "intro": "如果您是一家注重環保與永續的品牌，希望包裝能減少碳足跡，同時具備常規塑料的卓越包裝性能——Bio-PE 將是您的完美解答。",
            "carbon": {
                "title": "關注碳排品牌",
                "desc": "利用植物基材料減少產品包裝的 CO2 排放"
            },
            "recycling": {
                "title": "高回收優先",
                "desc": "與傳統 PE 具備完全相同的可回收性能"
            },
            "performance": {
                "title": "高性能需求",
                "desc": "具備與常規 PE 完全一致的阻隔與熱封性"
            }
        },
        "overview": {
            "title": "什麼是 Bio-PE？",
            "intro": "Bio-PE (生物基聚乙烯) 在化學結構上與傳統 PE 完全一致，但它使用可再生的甘蔗乙醇代替化石石油作為原料。在降低碳足跡的同時，提供了與常規 PE 相同的包裝強度和防護性能。",
            "logoSection": {
                "title": "I'm Green™ 甘蔗基聚乙烯認證",
                "desc": "我們所採用的 Bio-PE 均採購自 Braskem 生產的 I'm Green™ 甘蔗基聚乙烯。此標誌可印製在您的包裝袋上，向消費者傳遞明確的綠色永續理念。",
                "artworkUsage": "圖案使用規範：使用我們 Bio-PE 材料的品牌，在通過物料來源核實後，即可獲授權在包裝上印製 I'm Green 標誌。"
            },
            "keyBenefits": "核心優勢：",
            "benefits": [
                "由可再生甘蔗製成 (生物基含量高達 95%)",
                "原料生產階段具備負碳排效應 (Carbon Negative)",
                "提供與常規 PE 完全一致的物性與阻隔表現",
                "完全融入現有的 PE 塑料回收體系",
                "通過 Braskem 官方 I'm green™ 認證"
            ]
        },
        "clarification": {
            "title": "重要聲明：什麼是 Bio-PE (以及它不是什麼)",
            "keyClarification": "關鍵辨析",
            "warning": "Bio-PE 不具備生物可降解或可堆肥性。它在化學分子結構上與常規塑料完全相同，其廢棄後的自然降解行為也與傳統塑料一致。",
            "ecoStartTitle": "生命週期 起點 環保",
            "ecoStartPoints": [
                "甘蔗提取 (可再生來源)",
                "含有 30-50% 以上生物基含量",
                "甘蔗生長過程中吸收大量 CO2",
                "減少對化石石油資源的依賴"
            ],
            "tradEndTitle": "生命週期 終點 傳統塑料",
            "tradEndPoints": [
                "與傳統 PE 進入相同的回收流",
                "在垃圾填埋場中不會自然降解",
                "不可進行家庭或工業堆肥",
                "需要投放至常規 PE 回收體系"
            ],
            "bestFor": "最適合：既想大幅度降低碳足跡並使用可再生材料，同時又希望包裝具備 100% 可回收性的品牌。",
            "compostableLink": "需要可堆肥材料？查看堆肥包裝選項 →"
        },
        "howItWorks": {
            "title": "Bio-PE 是如何製造的",
            "step1": "甘蔗種植",
            "step1Desc": "甘蔗在生長過程中通過光合作用大量吸收大氣中的 CO2",
            "step2": "乙醇發酵",
            "step2Desc": "甘蔗經過榨汁與發酵，轉化為生物乙醇",
            "step3": "乙烯轉化",
            "step3Desc": "生物乙醇經脫水處理，轉化為綠色乙烯 (Bio-Ethylene)",
            "step4": "聚合反應",
            "step4Desc": "綠色乙烯聚合為綠色聚乙烯 (Bio-PE)，分子式與化石 PE 完全相同"
        },
        "carbon": {
            "title": "碳排放優勢",
            "comparisonTitle": "碳足跡對比：",
            "items": [
                "Bio-PE：每生產 1 kg 的 Bio-PE，可淨吸收並鎖定約 3.09 kg CO2",
                "傳統石油基 PE：每生產 1 kg，會釋放約 1.8 kg CO2",
                "淨差異：每公斤材料可為地球減少約 4.9 kg 碳排放"
            ],
            "note": "此項數據基於甘蔗在種植生長階段對二氧化碳的吸收和儲存。多項權威的生命週期評估 (LCA) 均證實了 Bio-PE 原料生產的負碳屬性。"
        },
        "scenarios": {
            "title": "哪些行業正在採用 Bio-PE？",
            "intro": "Bio-PE 包裝非常受到希望在不改變回收渠道的前提下降低碳排的品牌青睞：",
            "fmcg": {
                "title": "快速消費品與日化",
                "item1": "個人護理：洗髮精/沐浴乳補充袋",
                "item2": "家庭清潔：洗潔精/洗衣液補充軟包",
                "item3": "食品品牌：帶有 I'm Green™ 標誌的零食袋",
                "note": "眾多國際一線日化品牌已完成過渡"
            },
            "coffee": {
                "title": "咖啡與飲品",
                "item1": "咖啡包裝：保持 100% 的單一材質可回收性",
                "item2": "飲品吸嘴袋：含有環保植物基成分的吸嘴包裝",
                "item3": "運動營養：高密封性蛋白粉包裝袋",
                "note": "阻隔防護力與傳統 PE 完全一致"
            },
            "eco": {
                "title": "高端有機環保品牌",
                "item1": "有機食品：突出低碳環保定位的零食包裝",
                "item2": "天然彩妝：綠色美妝與護膚品包裝",
                "item3": "寵物食品：環保甘蔗基寵物飼料袋",
                "note": "I'm Green™ 綠色標誌可大幅提升品牌公信力"
            },
            "stories": {
                "title": "全球品牌應用實例",
                "cpg": {
                    "label": "國際 CPG 消費品集團",
                    "desc": "將超過 1 億個包裝袋轉換為 Bio-PE。成果：包裝碳足跡減少了 30%，同時保持了完全的可回收性。"
                },
                "retail": {
                    "label": "歐洲大型零售連鎖",
                    "desc": "在 500 多個自有品牌 SKU 中採用 Bio-PE。營銷亮點：「植物基包裝，100% 可循環回收。」"
                }
            }
        },
        "marketData": {
            "title": "Bio-PE 核心數據解讀",
            "metrics": {
                "carbonVal": "-3.09",
                "carbonLbl": "kg CO₂/kg (負碳排生產)",
                "contentVal": "30-50%",
                "contentLbl": "生物基含量比例",
                "recyclableVal": "100%",
                "recyclableLbl": "PE 回收渠道相容",
                "shelfVal": "12-18",
                "shelfLbl": "個月建議保質期"
            },
            "tableTitle": "Bio-PE 與常規 PE 技術參數對比",
            "headers": ["物理性能", "Bio-PE (甘蔗基)", "傳統 PE (石油基)", "性能對比"],
            "rows": [
                ["抗張強度 (Tensile)", "20-30 MPa", "20-30 MPa", "= 完全一致"],
                ["水汽阻隔 (WVTR)", "1-5 g/m²/day", "1-5 g/m²/day", "= 完全一致"],
                ["熱封溫度區間", "120-150°C", "120-150°C", "= 完全一致"],
                ["碳足跡 (原料階段)", "-3.09 kg CO₂/kg", "+1.83 kg CO₂/kg", "✓ 降低 70% 以上"]
            ],
            "comparisonTitle": "環境效益：甘蔗基 PE vs 石油基 PE",
            "benefits": {
                "item1Val": "-70%",
                "item1Lbl": "碳足跡大幅度降低",
                "item2Val": "100%",
                "item2Lbl": "源自可再生甘蔗作物",
                "item3Val": "0",
                "item3Lbl": "包裝物理性能零妥協"
            }
        },
        "comparison": {
            "title": "綠色包裝材料橫向對比",
            "intro": "對比 Bio-PE 與其他主流綠色環保包裝方案：",
            "tableTitle": "常見永續包裝材料對比",
            "headers": ["評估維度", "Bio-PE (甘蔗基)", "PCR (再生塑料)", "Compostable (可堆肥)"],
            "rows": [
                ["原材料來源", "可再生甘蔗作物", "消費後回收再造塑料", "生物基 PLA/PBAT 聚合物"],
                ["廢棄處置途徑", "標準 PE 塑料回收", "標準 PE 塑料回收", "工業或家庭堆肥系統"],
                ["碳減排貢獻", "⭐⭐⭐⭐⭐ (負碳排原材料)", "⭐⭐⭐⭐ (減少新塑料生產)", "⭐⭐⭐ (相比傳統塑料低碳)"],
                ["物理防護性能", "⭐⭐⭐⭐⭐ (與普通 PE 相同)", "⭐⭐⭐⭐⭐ (與普通 PE 相同)", "⭐⭐⭐ (阻隔性與強度偏低)"],
                ["材料溢價區間", "+5-15%", "+5-10%", "+20-30%"]
            ],
            "decisionGuideTitle": "💡 快速選材指南",
            "chooseBio": {
                "title": "如果符合以下情況，請選 Bio-PE：",
                "point1": "極為看重降低產品碳足跡",
                "point2": "需要常規 PE 的高品質阻隔與封口物性",
                "point3": "希望在包裝上印製 I'm Green™ 甘蔗環保標誌"
            },
            "choosePcr": {
                "title": "如果符合以下情況，請選 PCR：",
                "point1": "倡導循環經濟與塑料再生利用",
                "point2": "需要 GRS 認證的環保合規追溯",
                "linkText": "了解更多詳情 →"
            },
            "chooseCompostable": {
                "title": "如果符合以下情況，請選可堆肥：",
                "point1": "視「自然降解、回歸土地」為品牌核心價值",
                "point2": "目標市場具備成熟的廚餘與堆肥收運基礎設施",
                "linkText": "了解更多詳情 →"
            }
        },
        "applications": {
            "title": "推薦適用領域",
            "intro": "任何使用常規聚乙烯 (PE) 的場合，均可完美無縫替換為 Bio-PE：",
            "items": [
                "食品零食包裝",
                "液體與飲料吸嘴袋",
                "個人護理與美妝軟包",
                "家庭洗滌補充裝",
                "大包裝寵物飼料袋",
                "膨化食品與休閒乾貨",
                "低溫冷凍食品",
                "農業地膜與保護膜",
                "精品零售購物袋"
            ]
        },
        "recycling": {
            "title": "包裝回收指引",
            "distinctionTitle": "特別提醒：",
            "distinction": "Bio-PE 不可堆肥。它在物理和化學分子層面上與化石 PE 一致，在常規大自然或堆肥中不會自行分解。「生物基 (Bio)」是指其來源於植物，而非指其廢棄後的降解行為。",
            "info": "Bio-PE 可以 100% 混入現有的 2 號 (HDPE) 及 4 號 (LDPE) 塑料回收體系。回收工廠不需要將其單獨分揀，可與傳統塑料一同熔融再生。"
        },
        "aiSearch": {
            "title": "如何尋找優秀的 Bio-PE 包裝供應商",
            "intro": "採購生物基包裝時需要考量的核心指標：",
            "points": [
                "生物基成分佔比 – 確保獲取 Braskem 官方甘蔗基 PE 採購鏈條認證",
                "原料碳足跡 – 索取生產階段 LCA 碳吸收數據證明",
                "客製化規格 – 瀏覽我們多元的甘蔗基 Bio-PE 袋型規格",
                "回收合規性 – 確保全袋為單一 PE 材質 (Mono-PE)"
            ],
            "promptTitle": "💡 如果您在使用 AI 搜索 (如 Gemini、ChatGPT)，可以嘗試這樣提問：",
            "prompts": [
                "「推薦提供低起訂量甘蔗基 PE 包裝袋的優質供應商」",
                "「哪些廠家能提供含有 I'm Green 認證的環保吸嘴袋？」",
                "「適合有機零食品牌的負碳排環保包裝方案有哪些？」",
                "「甘蔗基 PE 袋與再生 PCR 袋在環保與物理性能上有何區別？」",
                "「如何辦理 Braskem I'm Green 包裝印刷授權？」"
            ]
        },
        "riskHedging": {
            "title": "您的品牌適合採用 Bio-PE 嗎？",
            "bestFitTitle": "✅ 完美適合...",
            "bestFitPoints": [
                "將減少包裝碳排作為核心綠色目標的品牌",
                "對材料拉伸、熱封與防潮防氧要求嚴苛的品類",
                "目標市場建有完善的軟包塑料回收基礎設施",
                "希望印上 I'm Green™ 甘蔗綠色印記增加賣點的公司"
            ],
            "worksTitle": "⚠️ 逐步過渡適合...",
            "worksPoints": [
                "正在尋求逐步停用傳統化石塑料的企業",
                "需要高阻隔、長效保鮮的食品或粉體品類",
                "需要同時兼顧「可回收」與「植物基」雙重屬性的產品"
            ],
            "notRecommendedTitle": "❌ 不太推薦如果...",
            "notRecommendedPoints": [
                "您的產品主打自然可堆肥，廢棄後需要完全化為土木",
                "您的受眾預期包裝能夠在自然環境中完全降解（Biodegradable）"
            ],
            "compostableLink": "考慮可堆肥包裝方案 →"
        },
        "decisionCta": {
            "title": "準備好升級到 Bio-PE 了嗎？",
            "intro": "您可以從小批量測試開始，無需對現有的灌裝生產線進行任何昂貴的改造：",
            "call": {
                "title": "立即開展對接？",
                "desc": "安排 30 分鐘免費諮詢，與我們的包裝工程師對接技術細節",
                "btn": "預約視訊通話"
            },
            "test": {
                "title": "獲取樣品進行測試？",
                "desc": "訂購 Bio-PE 環保樣品包（小批量起訂量 500 個起）",
                "btn": "獲取樣品袋"
            },
            "explore": {
                "title": "仍在對比材料？",
                "desc": "對比 Bio-PE 與可堆肥、紙質等其他永續材料方案",
                "btn": "對比包裝材質"
            }
        }
    }
}

# 3. Spanish and French translations placeholder / auto translations (pre-translated professionally)
biope_es = {
    "sections": {
        "infographic": {
            "title": "Infografía de Embalaje Bio-PE",
            "intro": "Haga clic en la infografía a continuación para verla en tamaño completo:",
            "caption": "Guía de embalaje de polietileno de origen vegetal Bio-PE"
        },
        "targetAudience": {
            "title": "¿Es esta página para usted?",
            "intro": "Si es una marca centrada en la sostenibilidad que desea reducir su huella de carbono manteniendo el mismo rendimiento que el plástico convencional, el Bio-PE podría ser su respuesta.",
            "carbon": {
                "title": "Marcas conscientes del carbono",
                "desc": "Reduzca la huella de CO2 con materiales de origen vegetal"
            },
            "recycling": {
                "title": "Prioridad de reciclabilidad",
                "desc": "Misma reciclabilidad que el PE convencional"
            },
            "performance": {
                "title": "Necesidades de rendimiento",
                "desc": "Propiedades de barrera y sellado idénticas"
            }
        },
        "overview": {
            "title": "¿Qué es el Bio-PE?",
            "intro": "El Bio-PE (polietileno de base bio) es químicamente idéntico al PE convencional pero fabricado a partir de caña de azúcar renovable en lugar de combustibles fósiles. Ofrece el mismo rendimiento que el PE tradicional al tiempo que reduce la huella de carbono.",
            "logoSection": {
                "title": "Polietileno de base bio I'm Green™",
                "desc": "Nuestro Bio-PE proviene del polietileno de caña de azúcar I'm Green™ de Braskem. Este logotipo se puede mostrar en su embalaje para comunicar el abastecimiento sostenible a los consumidores.",
                "artworkUsage": "Uso del diseño: Las marcas que utilizan nuestros materiales de Bio-PE pueden mostrar el logotipo I'm Green en sus embalajes tras la verificación del origen del material."
            },
            "keyBenefits": "Beneficios clave:",
            "benefits": [
                "Hecho de caña de azúcar renovable (hasta 95% de origen vegetal)",
                "Producción de materia prima con huella de carbono negativa",
                "Mismo rendimiento que el PE convencional",
                "Reciclable en las corrientes de PE existentes",
                "Certificado I'm green™ por Braskem"
            ]
        },
        "clarification": {
            "title": "Importante: Lo que el Bio-PE es (y no es)",
            "keyClarification": "Aclaración clave",
            "warning": "El Bio-PE NO es biodegradable ni compostable. Es químicamente idéntico al plástico convencional y se comporta igual al final de su vida útil.",
            "ecoStartTitle": "Respetuoso con el medio ambiente al INICIO de la vida útil",
            "ecoStartPoints": [
                "Hecho de caña de azúcar (fuente renovable)",
                "Contiene entre 30% y 50% de contenido biobasado",
                "Absorbe CO2 durante la producción",
                "Reduce la dependencia de los combustibles fósiles"
            ],
            "tradEndTitle": "Plástico tradicional al FINAL de la vida útil",
            "tradEndPoints": [
                "Misma reciclabilidad que el PE convencional",
                "No biodegradable en vertederos",
                "No compostable (doméstico o industrial)",
                "Requiere reciclaje de PE estándar"
            ],
            "bestFor": "Ideal para: Marcas que desean reducir la huella de carbono y utilizar materias primas sostenibles, manteniendo la reciclabilidad total.",
            "compostableLink": "¿Necesita compostable? Ver opciones →"
        },
        "howItWorks": {
            "title": "Cómo se fabrica el Bio-PE",
            "step1": "Cultivo de caña de azúcar",
            "step1Desc": "La caña de azúcar absorbe CO2 de la atmósfera mientras crece",
            "step2": "Producción de etanol",
            "step2Desc": "La caña de azúcar se fermenta para producir bioetanol",
            "step3": "Conversión a etileno",
            "step3Desc": "El bioetanol se deshidrata para crear bioetileno",
            "step4": "Polimerización",
            "step4Desc": "El bioetileno se polimeriza en bio-PE (químicamente idéntico al PE fósil)"
        },
        "carbon": {
            "title": "Beneficios del Carbono",
            "comparisonTitle": "Comparación de la huella de carbono:",
            "items": [
                "Bio-PE: Captura ~3.09 kg de CO2 por kg de PE producido",
                "PE fósil: Emite ~1.8 kg de CO2 por kg de PE producido",
                "Diferencia neta: ~4.9 kg de CO2 por kg de material"
            ],
            "note": "Este cálculo se basa en que el cultivo de caña de azúcar absorbe CO2, que queda capturado en el bio-PE. Las evaluaciones de ciclo de vida confirman la naturaleza carbono negativa del Bio-PE."
        },
        "scenarios": {
            "title": "¿Qué industrias utilizan Bio-PE?",
            "intro": "El embalaje de Bio-PE es un éxito entre las marcas que desean reducir su huella de carbono sin cambiar su historia de reciclaje:",
            "fmcg": {
                "title": "FMCG y bienes de consumo",
                "item1": "Cuidado personal: Bolsas de recarga de champú",
                "item2": "Productos para el hogar: Embalaje de detergente",
                "item3": "Marcas de alimentos: Bolsas de snacks con I'm Green™",
                "note": "Grandes marcas ya han hecho la transición"
            },
            "coffee": {
                "title": "Café y Bebidas",
                "item1": "Bolsas de café: Reciclabilidad total mantenida",
                "item2": "Bolsas de bebidas: Bolsas para bebidas con contenido orgánico",
                "item3": "Nutrición deportiva: Embalaje de nutrición deportiva",
                "note": "Misma barrera que el PE convencional"
            },
            "eco": {
                "title": "Marcas premium y ecológicas",
                "item1": "Alimentos orgánicos: Embalaje consciente del carbono",
                "item2": "Cosméticos naturales: Belleza sostenible",
                "item3": "Productos para mascotas: Bolsas ecológicas para alimentos de mascotas",
                "note": "El logotipo I'm Green™ añade credibilidad"
            },
            "stories": {
                "title": "Ejemplos de marcas globales",
                "cpg": {
                    "label": "Empresa de CPG",
                    "desc": "Hizo la transición de más de 100 millones de unidades a Bio-PE. Resultado: reducción del 30% en la huella de carbono manteniendo la reciclabilidad."
                },
                "retail": {
                    "label": "Minorista europeo",
                    "desc": "Embalaje de Bio-PE de marca propia en más de 500 SKU. Destacado de marketing: \"Embalaje a base de plantas, 100% reciclable\""
                }
            }
        },
        "marketData": {
            "title": "¿Qué dicen los números sobre el Bio-PE?",
            "metrics": {
                "carbonVal": "-3.09",
                "carbonLbl": "kg CO₂/kg (Carbono Negativo)",
                "contentVal": "30-50%",
                "contentLbl": "Contenido biobasado",
                "recyclableVal": "100%",
                "recyclableLbl": "Reciclable en la corriente de PE",
                "shelfVal": "12-18",
                "shelfLbl": "Meses de vida útil"
            },
            "tableTitle": "Rendimiento técnico de Bio-PE",
            "headers": ["Propiedad", "Bio-PE", "PE Convencional", "Comparación"],
            "rows": [
                ["Resistencia a la tracción", "20-30 MPa", "20-30 MPa", "= Idéntico"],
                ["Barrera (WVTR)", "1-5 g/m²/día", "1-5 g/m²/day", "= Idéntico"],
                ["Temp de sellado térmico", "120-150°C", "120-150°C", "= Idéntico"],
                ["Huella de carbono", "-3.09 kg CO₂/kg", "+1.83 kg CO₂/kg", "✓ 70% mejor"]
            ],
            "comparisonTitle": "Impacto ambiental: Bio-PE vs PE Fósil",
            "benefits": {
                "item1Val": "-70%",
                "item1Lbl": "Reducción de huella de carbono",
                "item2Val": "100%",
                "item2Lbl": "Materia prima renovable",
                "item3Val": "0",
                "item3Lbl": "Sin comprometer el rendimiento"
            }
        },
        "comparison": {
            "title": "Comparación de materiales",
            "intro": "Compare el Bio-PE con otras opciones de embalaje sostenible:",
            "tableTitle": "Comparación de materiales sostenibles",
            "headers": ["Criterio", "Bio-PE", "PCR", "Compostable"],
            "rows": [
                ["Materia prima", "Caña de azúcar (renovable)", "Plástico reciclado", "PLA/PBAT (base bio)"],
                ["Fin de vida", "Reciclable (corriente de PE)", "Reciclable (corriente de PE)", "Compostable"],
                ["Beneficio de carbono", "⭐⭐⭐⭐⭐ (Carbono negativo)", "⭐⭐⭐⭐ (Reduce uso virgen)", "⭐⭐⭐ (Menor carbono)"],
                ["Rendimiento", "⭐⭐⭐⭐⭐ (Idéntico al PE)", "⭐⭐⭐⭐⭐ (Idéntico al PE)", "⭐⭐⭐ (Menor barrera)"],
                ["Sobreprecio de costo", "+5-15%", "+5-10%", "+20-30%"]
            ],
            "decisionGuideTitle": "💡 Guía de decisión rápida",
            "chooseBio": {
                "title": "Elija Bio-PE si:",
                "point1": "La huella de carbono es la máxima prioridad",
                "point2": "Necesita rendimiento de PE convencional",
                "point3": "Quiere utilizar el logotipo I'm Green™"
            },
            "choosePcr": {
                "title": "Elija PCR si:",
                "point1": "Mensaje de economía circular",
                "point2": "Se necesita certificación GRS",
                "linkText": "Más información →"
            },
            "chooseCompostable": {
                "title": "Elija compostable si:",
                "point1": "La historia del fin de vida es clave",
                "point2": "Los clientes compostan activamente",
                "linkText": "Más información →"
            }
        },
        "applications": {
            "title": "Aplicaciones adecuadas",
            "intro": "El Bio-PE funciona para cualquier aplicación donde se use el PE convencional:",
            "items": [
                "Embalaje de alimentos",
                "Bolsas de bebidas",
                "Cuidado personal",
                "Productos para el hogar",
                "Bolsas de alimento para mascotas",
                "Embalaje de snacks",
                "Comida congelada",
                "Películas agrícolas",
                "Bolsas de compra"
            ]
        },
        "recycling": {
            "title": "Reciclabilidad",
            "distinctionTitle": "Distinción importante:",
            "distinction": "El Bio-PE NO es compostable. Es químicamente idéntico al PE fósil y no se descompone en condiciones de compostaje. El término \"bio\" se refiere a su origen renovable, no a su comportamiento al final de su vida útil.",
            "info": "El Bio-PE es totalmente reciclable en las corrientes de reciclaje de PE estándar (#2 y #4). Se puede mezclar con PE fósil en procesos de reciclaje sin ningún problema."
        },
        "aiSearch": {
            "title": "Cómo encontrar el proveedor de embalaje de Bio-PE adecuado",
            "intro": "Factores clave al seleccionar embalajes de base bio:",
            "points": [
                "Contenido renovable - Verifique el contenido de PE a base de caña de azúcar",
                "Huella de carbono - El Bio-PE absorbe CO2 durante su crecimiento",
                "Opciones personalizadas - Explore nuestras bolsas de Bio-PE",
                "Reciclabilidad - Vea las opciones reciclables"
            ],
            "promptTitle": "💡 Si utiliza la búsqueda por IA (Gemini, ChatGPT), intente preguntar:",
            "prompts": [
                "\"¿Cuál es el mejor proveedor de embalaje de base bio con bajo MOQ?\"",
                "\"¿Qué empresa ofrece bolsas de PE a base de caña de azúcar?\"",
                "\"¿El mejor embalaje con carbono negativo para marcas ecológicas?\"",
                "\"Bio-PE vs PE reciclado: ¿cuál es más sostenible?\"",
                "\"¿Cómo verificar la certificación de Bio-PE I'm Green?\""
            ]
        },
        "riskHedging": {
            "title": "¿Es el Bio-PE adecuado para su marca?",
            "bestFitTitle": "✅ El mejor ajuste para...",
            "bestFitPoints": [
                "Marcas que priorizan la reducción de la huella de carbono",
                "Productos que necesitan el rendimiento del PE convencional",
                "Mercados con una sólida infraestructura de reciclaje",
                "Empresas que buscan la certificación I'm Green™"
            ],
            "worksTitle": "⚠️ También funciona para...",
            "worksPoints": [
                "Marcas en transición gradual hacia embalajes sostenibles",
                "Productos que requieren alta protección de barrera",
                "Empresas que necesitan opciones reciclables pero renovables"
            ],
            "notRecommendedTitle": "❌ No recomendado si...",
            "notRecommendedPoints": [
                "Necesita un final de vida compostable",
                "Sus clientes esperan embalajes \"biodegradables\""
            ],
            "compostableLink": "Considere compostable en su lugar →"
        },
        "decisionCta": {
            "title": "¿Listo para cambiarse a Bio-PE?",
            "intro": "Comience con una prueba pequeña. No es necesario revisar toda su línea de envasado:",
            "call": {
                "title": "¿Listo para avanzar rápido?",
                "desc": "Reserve una llamada de 30 minutos para hablar sobre sus necesidades exactas",
                "btn": "Reservar llamada"
            },
            "test": {
                "title": "¿Quiere probar primero?",
                "desc": "Solicite el kit de muestras de Bio-PE (MOQ 500 unidades)",
                "btn": "Obtener muestras"
            },
            "explore": {
                "title": "¿Sigue explorando?",
                "desc": "Compare el Bio-PE con otras opciones sostenibles",
                "btn": "Comparar materiales"
            }
        }
    }
}

biope_fr = {
    "sections": {
        "infographic": {
            "title": "Infographie d'emballage Bio-PE",
            "intro": "Cliquez sur l'infographie ci-dessous pour l'afficher en taille réelle :",
            "caption": "Guide d'emballage en polyéthylène biosourcé Bio-PE"
        },
        "targetAudience": {
            "title": "Cette page est-elle pour vous?",
            "intro": "Si vous êtes une marque axée sur la durabilité qui souhaite réduire son empreinte carbone tout en conservant les mêmes performances que le plastique conventionnel, le Bio-PE pourrait être votre réponse.",
            "carbon": {
                "title": "Marques soucieuses du carbone",
                "desc": "Réduire l'empreinte CO2 grâce à des matériaux biosourcés"
            },
            "recycling": {
                "title": "Priorité à la recyclabilité",
                "desc": "Même recyclabilité que le PE conventionnel"
            },
            "performance": {
                "title": "Besoins de performance",
                "desc": "Propriétés de barrière et de scellage identiques"
            }
        },
        "overview": {
            "title": "Qu'est-ce que le Bio-PE?",
            "intro": "Le Bio-PE (polyéthylène biosourcé) est chimiquement identique au PE conventionnel mais fabriqué à partir de canne à sucre renouvelable plutôt que de combustibles fossiles. Il offre les mêmes performances que le PE traditionnel tout en réduisant l'empreinte carbone.",
            "logoSection": {
                "title": "Polyéthylène biosourcé I'm Green™",
                "desc": "Notre Bio-PE est issu du polyéthylène de canne à sucre I'm Green™ de Braskem. Ce logo peut être affiché sur votre emballage pour communiquer l'approvisionnement durable aux consommateurs.",
                "artworkUsage": "Utilisation du graphisme : Les marques utilisant nos matériaux Bio-PE peuvent afficher le logo I'm Green sur leurs emballages après vérification de l'origine du matériel."
            },
            "keyBenefits": "Principaux avantages :",
            "benefits": [
                "Fabriqué à partir de canne à sucre renouvelable (jusqu'à 95% biosourcé)",
                "Production de matières premières à empreinte carbone négative",
                "Mêmes performances que le PE conventionnel",
                "Recyclable dans les filières de PE existantes",
                "Certifié I'm green™ par Braskem"
            ]
        },
        "clarification": {
            "title": "Important : Ce que le Bio-PE est (et n'est pas)",
            "keyClarification": "Clarification clé",
            "warning": "Le Bio-PE N'EST PAS biodégradable ni compostable. Il est chimiquement identique au plastique conventionnel et se comporte de la même manière en fin de vie.",
            "ecoStartTitle": "Respectueux de l'environnement au DÉBUT de la vie",
            "ecoStartPoints": [
                "Fabriqué à partir de canne à sucre (source renouvelable)",
                "Contient 30 à 50% de contenu biosourcé",
                "Absorbe le CO2 pendant la production",
                "Réduit la dépendance aux combustibles fossiles"
            ],
            "tradEndTitle": "Plastique traditionnel à la FIN de la vie",
            "tradEndPoints": [
                "Même recyclabilité que le PE conventionnel",
                "Non biodégradable en décharge",
                "Non compostable (domestique ou industriel)",
                "Nécessite le recyclage standard du PE"
            ],
            "bestFor": "Idéal pour : Les marques qui souhaitent réduire l'empreinte carbone et utiliser des matières premières durables, tout en maintenant une recyclabilité totale.",
            "compostableLink": "Besoin de compostable? Voir les options →"
        },
        "howItWorks": {
            "title": "Comment le Bio-PE est fabriqué",
            "step1": "Culture de la canne à sucre",
            "step1Desc": "La canne à sucre absorbe le CO2 de l'atmosphère pendant sa croissance",
            "step2": "Production d'éthanol",
            "step2Desc": "La canne à sucre est fermentée pour produire du bioéthanol",
            "step3": "Conversion en éthylène",
            "step3Desc": "Le bioéthanol est déshydraté pour créer du bioéthylène",
            "step4": "Polymérisation",
            "step4Desc": "Le bioéthylène est polymérisé en bio-PE (chimiquement identique au PE fossile)"
        },
        "carbon": {
            "title": "Avantages du Carbone",
            "comparisonTitle": "Comparaison de l'empreinte carbone :",
            "items": [
                "Bio-PE: Capture ~3.09 kg de CO2 par kg de PE produit",
                "PE fossile: Émet ~1.8 kg de CO2 par kg de PE produit",
                "Différence nette: ~4.9 kg de CO2 par kg de matériau"
            ],
            "note": "Ce calcul est basé sur le fait que la culture de la canne à sucre absorbe le CO2, qui est capturé dans le bio-PE. Les analyses de cycle de vie confirment la nature carbone négative du Bio-PE."
        },
        "scenarios": {
            "title": "Quelles industries utilisent le Bio-PE?",
            "intro": "L'emballage en Bio-PE est un succès auprès des marques qui souhaitent réduire leur empreinte carbone sans modifier leur circuit de recyclage :",
            "fmcg": {
                "title": "FMCG et biens de consommation",
                "item1": "Soins personnels: Sachets de recharge de shampoing",
                "item2": "Produits ménagers: Emballage de détergent",
                "item3": "Marques alimentaires: Sachets de snacks avec I'm Green™",
                "note": "Les grandes marques ont déjà fait la transition"
            },
            "coffee": {
                "title": "Café et Boissons",
                "item1": "Sachets de café: Recyclabilité totale maintenue",
                "item2": "Sachets de boissons: Sachets pour boissons avec contenu biologique",
                "item3": "Nutrition sportive: Emballage de nutrition sportive",
                "note": "Même barrière que le PE conventionnel"
            },
            "eco": {
                "title": "Marques premium et écologiques",
                "item1": "Aliments biologiques: Emballage soucieux du carbone",
                "item2": "Cosmétiques naturels: Beauté durable",
                "item3": "Produits pour animaux: Sachets écologiques pour aliments pour animaux",
                "note": "Le logo I'm Green™ ajoute de la crédibilité"
            },
            "stories": {
                "title": "Exemples de marques mondiales",
                "cpg": {
                    "label": "Entreprise de CPG",
                    "desc": "A fait la transition de plus de 100 millions d'unités vers le Bio-PE. Résultat: réduction de 30% de l'empreinte carbone tout en conservant la recyclabilité."
                },
                "retail": {
                    "label": "Détaillant européen",
                    "desc": "Emballage Bio-PE de marque propre sur plus de 500 SKU. Point fort marketing: \"Emballage à base de plantes, 100% recyclable\""
                }
            }
        },
        "marketData": {
            "title": "Que disent les chiffres sur le Bio-PE?",
            "metrics": {
                "carbonVal": "-3.09",
                "carbonLbl": "kg CO₂/kg (Carbone Négatif)",
                "contentVal": "30-50%",
                "contentLbl": "Contenu biosourcé",
                "recyclableVal": "100%",
                "recyclableLbl": "Recyclable dans la filière PE",
                "shelfVal": "12-18",
                "shelfLbl": "Mois de conservation"
            },
            "tableTitle": "Performance technique du Bio-PE",
            "headers": ["Propriété", "Bio-PE", "PE Conventionnel", "Comparaison"],
            "rows": [
                ["Résistance à la traction", "20-30 MPa", "20-30 MPa", "= Identique"],
                ["Barrière (WVTR)", "1-5 g/m²/jour", "1-5 g/m²/day", "= Identique"],
                ["Temp de thermoscellage", "120-150°C", "120-150°C", "= Identique"],
                ["Empreinte carbone", "-3.09 kg CO₂/kg", "+1.83 kg CO₂/kg", "✓ 70% meilleur"]
            ],
            "comparisonTitle": "Impact environnemental: Bio-PE vs PE Fossile",
            "benefits": {
                "item1Val": "-70%",
                "item1Lbl": "Réduction de l'empreinte carbone",
                "item2Val": "100%",
                "item2Lbl": "Matière première renouvelable",
                "item3Val": "0",
                "item3Lbl": "Sans compromis sur les performances"
            }
        },
        "comparison": {
            "title": "Comparaison des matériaux",
            "intro": "Comparez le Bio-PE avec d'autres options d'emballage durable :",
            "tableTitle": "Comparaison des matériaux durables",
            "headers": ["Critère", "Bio-PE", "PCR", "Compostable"],
            "rows": [
                ["Matière première", "Canne à sucre (renouvelable)", "Plastique recyclé", "PLA/PBAT (base bio)"],
                ["Fin de vie", "Recyclable (filière PE)", "Recyclable (filière PE)", "Compostable"],
                ["Bénéfice carbone", "⭐⭐⭐⭐⭐ (Carbone négatif)", "⭐⭐⭐⭐ (Réduit l'usage vierge)", "⭐⭐⭐ (Moins de carbone)"],
                ["Performance", "⭐⭐⭐⭐⭐ (Identique au PE)", "⭐⭐⭐⭐⭐ (Identique au PE)", "⭐⭐⭐ (Moins de barrière)"],
                ["Surcoût", "+5-15%", "+5-10%", "+20-30%"]
            ],
            "decisionGuideTitle": "💡 Guide de décision rapide",
            "chooseBio": {
                "title": "Choisissez le Bio-PE si :",
                "point1": "L'empreinte carbone est la priorité absolue",
                "point2": "Besoin des performances du PE conventionnel",
                "point3": "Souhaitez utiliser le logo I'm Green™"
            },
            "choosePcr": {
                "title": "Choisissez le PCR si :",
                "point1": "Message d'économie circulaire",
                "point2": "Certification GRS nécessaire",
                "linkText": "En savoir plus →"
            },
            "chooseCompostable": {
                "title": "Choisissez le compostable si :",
                "point1": "L'histoire de la fin de vie est clé",
                "point2": "Les clients compostent activement",
                "linkText": "En savoir plus →"
            }
        },
        "applications": {
            "title": "Applications adaptées",
            "intro": "Le Bio-PE fonctionne pour n'importe quelle application où le PE conventionnel est utilisé :",
            "items": [
                "Emballage alimentaire",
                "Sachets de boissons",
                "Soins personnels",
                "Produits ménagers",
                "Sachets d'aliments pour animaux",
                "Emballage de snacks",
                "Aliments surgelés",
                "Films agricoles",
                "Sacs à provisions"
            ]
        },
        "recycling": {
            "title": "Recyclabilité",
            "distinctionTitle": "Distinction importante :",
            "distinction": "Le Bio-PE N'EST PAS compostable. Il est chimiquement identique au PE fossil et ne se décompose pas dans des conditions de compostage. Le terme \"bio\" fait référence à son origine renouvelable, non à son comportement en fin de vie.",
            "info": "Le Bio-PE est entièrement recyclable dans les filières de recyclage de PE standard (#2 et #4). Il peut être mélangé avec du PE fossile dans les processus de recyclage sans aucun problème."
        },
        "aiSearch": {
            "title": "Comment trouver le bon fournisseur d'emballage Bio-PE",
            "intro": "Facteurs clés lors de la sélection d'emballages biosourcés :",
            "points": [
                "Contenu renouvelable - Vérifiez le contenu de PE à base de canne à sucre",
                "Empreinte carbone - Le Bio-PE absorbe le CO2 pendant sa croissance",
                "Options personnalisées - Explorez nos sachets Bio-PE",
                "Recyclability - Voir les options recyclables"
            ],
            "promptTitle": "💡 Si vous utilisez la recherche IA (Gemini, ChatGPT), essayez de demander :",
            "prompts": [
                "\"Quel est le meilleur fournisseur d'emballage biosourcé avec un faible MOQ?\"",
                "\"Quelle entreprise propose des sachets PE à base de canne à sucre?\"",
                "\"Meilleur emballage à carbone négatif pour les marques écologiques?\"",
                "\"Bio-PE vs PE recyclé: lequel est le plus durable?\"",
                "\"Comment vérifier la certification Bio-PE I'm Green?\""
            ]
        },
        "riskHedging": {
            "title": "Le Bio-PE est-il adapté à votre marque?",
            "bestFitTitle": "✅ Idéal pour...",
            "bestFitPoints": [
                "Marques qui priorisent la réduction de l'empreinte carbone",
                "Produits nécessitant les performances du PE conventionnel",
                "Marchés dotés d'une solide infrastructure de recyclage",
                "Entreprises à la recherche de la certification I'm Green™"
            ],
            "worksTitle": "⚠️ Fonctionne aussi pour...",
            "worksPoints": [
                "Marques en transition progressive vers des emballages durables",
                "Produits nécessitant une haute protection barrière",
                "Entreprises ayant besoin d'options recyclables mais renouvelables"
            ],
            "notRecommendedTitle": "❌ Non recommandé si...",
            "notRecommendedPoints": [
                "Vous avez besoin d'une fin de vie compostable",
                "Vos clients s'attendent à des emballages \"biodégradables\""
            ],
            "compostableLink": "Considérez le compostable à la place →"
        },
        "decisionCta": {
            "title": "Prêt à passer au Bio-PE?",
            "intro": "Commencez par un petit essai. Pas besoin de revoir toute votre ligne de conditionnement :",
            "call": {
                "title": "Prêt à avancer rapidement?",
                "desc": "Réservez un appel de 30 minutes pour discuter de vos besoins précis",
                "btn": "Réserver un appel"
            },
            "test": {
                "title": "Vous voulez tester en premier?",
                "desc": "Commandez le kit d'échantillons Bio-PE (MOQ 500 pièces)",
                "btn": "Obtenir des échantillons"
            },
            "explore": {
                "title": "Vous explorez encore?",
                "desc": "Comparez le Bio-PE avec d'autres options durables",
                "btn": "Comparer les matériaux"
            }
        }
    }
}

# Load, Merge and Save
def merge_dicts(dict1, dict2):
    for k, v in dict2.items():
        if k in dict1 and isinstance(dict1[k], dict) and isinstance(v, dict):
            merge_dicts(dict1[k], v)
        else:
            dict1[k] = v

def update_locale(lang, new_data):
    file_path = locales[lang]
    print(f"Updating {lang} JSON at {file_path}...")
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    else:
        data = {}

    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    
    if 'bioPE' not in data['seoPages']['pages']:
        data['seoPages']['pages']['bioPE'] = {}
        
    merge_dicts(data['seoPages']['pages']['bioPE'], new_data)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
    print(f"  Successfully updated {lang} JSON!")

update_locale('en', biope_en)
update_locale('zh-TW', biope_zhtw)
update_locale('es', biope_es)
update_locale('fr', biope_fr)

print("Done updates for BioPE pages!")
