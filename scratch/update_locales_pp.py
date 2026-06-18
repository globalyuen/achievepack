import json
import os

BASE_DIR = os.path.abspath(os.path.join(__file__, '..', '..'))

locales = {
    'en': os.path.join(BASE_DIR, 'src', 'locales', 'en.json'),
    'zh-TW': os.path.join(BASE_DIR, 'src', 'locales', 'zh-TW.json'),
    'es': os.path.join(BASE_DIR, 'src', 'locales', 'es.json'),
    'fr': os.path.join(BASE_DIR, 'src', 'locales', 'fr.json'),
}

new_data_en = {
    "sections": {
        "glance": {
            "title": "Recyclable Mono-PP Infographic",
            "clickToEnlarge": "Click the infographic below to view in full size:",
            "alt": "Recyclable Materials Infographic - Complete guide to recyclable packaging",
            "caption": "Recyclable Materials Infographic"
        },
        "targetAudience": {
            "title": "Is This Page For You?",
            "intro": "If you need packaging that can withstand hot-fill processes, microwave reheating, or require higher heat resistance than PE—mono-PP recyclable pouches are your solution.",
            "hotFill": {
                "title": "Hot-Fill Products",
                "desc": "Soups, sauces, ready meals"
            },
            "microwave": {
                "title": "Microwaveable Foods",
                "desc": "Convenience meals, frozen products"
            },
            "clarity": {
                "title": "High-Clarity Needs",
                "desc": "PP offers better transparency than PE"
            }
        },
        "scenarios": {
            "title": "Industry Applications",
            "intro": "Mono-PP recyclable packaging excels where heat resistance and clarity are essential:",
            "hotFill": {
                "title": "Hot-Fill Foods",
                "item1": "Soups & Sauces: Withstands 85°C+ fill temps",
                "item2": "Ready Meals: Hot-pack convenience foods",
                "item3": "Condiments: Ketchup, mayo, dressings",
                "note": "No distortion at high temperatures"
            },
            "microwave": {
                "title": "Microwave Foods",
                "item1": "Frozen Meals: Microwave-safe packaging",
                "item2": "Rice & Grains: Steam-in-pouch solutions",
                "item3": "Convenience: Heat-and-eat products",
                "note": "Microwave safe at 130°C"
            },
            "clarity": {
                "title": "High-Clarity Needs",
                "item1": "Premium Snacks: Clear window visibility",
                "item2": "Dried Fruits: Product showcase",
                "item3": "Confectionery: High-gloss presentation",
                "note": "Superior optical clarity vs PE"
            },
            "stories": {
                "title": "Customer Success Stories",
                "euSoup": {
                    "label": "EU Soup Brand",
                    "desc": "Switched hot-fill line to mono-PP pouches. Maintained product quality while achieving \"Widely Recyclable\" label for retail."
                },
                "usFrozen": {
                    "label": "US Frozen Foods",
                    "desc": "Launched microwave-safe recyclable pouches. Customer surveys showed 30% preference increase vs non-recyclable competitors."
                }
            }
        },
        "marketData": {
            "title": "Market & Performance Data",
            "metrics": {
                "heatLimit": "Max Heat Resistance",
                "shelfLife": "Months Shelf Life",
                "resinCode": "Resin Code (PP)",
                "clarity": "PP Clarity vs PE"
            },
            "tableTitle": "Mono-PP vs Mono-PE Performance",
            "headers": ["Property", "Mono-PP", "Mono-PE", "Better For"],
            "rows": [
                ["Heat Resistance", "130°C ✓", "80°C", "PP for hot-fill"],
                ["Optical Clarity", "Excellent ✓", "Good", "PP for clear windows"],
                ["Flexibility", "Stiffer", "More flexible ✓", "PE for soft pouches"],
                ["Recycling Access", "Variable", "Wider access ✓", "PE in most markets"],
                ["Cost", "+10-15%", "+5-10% ✓", "PE for budget"]
            ],
            "impactTitle": "Mono-PP Technical Advantages",
            "impact": {
                "heatLimit": "Higher heat tolerance vs PE",
                "clarity": "Light transmission (clarity)",
                "stiffness": "Stiffness vs PE"
            }
        },
        "comparison": {
            "title": "Material Comparison",
            "intro": "Compare mono-PP with other recyclable and sustainable options:",
            "tableTitle": "Heat-Resistant Materials Comparison",
            "headers": ["Criteria", "Mono-PP", "Mono-PE", "Traditional Laminate"],
            "rows": [
                ["Hot-Fill Capable", "✓ Yes (130°C)", "△ Limited (80°C)", "✓ Yes"],
                ["Microwave Safe", "✓ Yes", "✗ No", "△ Some"],
                ["Recyclability", "✓ PP stream", "✓ PE stream", "✗ Landfill"],
                ["Clarity", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Cost Premium", "+10-15%", "+5-10%", "Baseline"]
            ],
            "decisionGuideTitle": "Quick Decision Guide",
            "choosePP": "Choose Mono-PP if:",
            "ppPoints": ["Super clear window needed", "Higher moisture barrier required", "Hot-fill or microwave capability"],
            "choosePE": "Choose Mono-PE if:",
            "pePoints": ["Recycling is most accessible", "Need flexible/soft feel", "Learn more →"],
            "chooseCompostable": "Choose Compostable if:",
            "compostablePoints": ["Composting access for customers", "Eco-story is key differentiator", "Learn more →"]
        },
        "aiSearch": {
            "title": "Finding Mono-PP Recyclable Packaging",
            "intro": "If you're using AI search (Gemini, ChatGPT), try asking:",
            "questions": [
                "\"Mono-PP vs Mono-PE: which should I choose for hot-fill?\"",
                "\"Best recyclable pouch for microwave-safe food packaging?\"",
                "\"PP recyclable flexible packaging supplier with low MOQ?\"",
                "\"What temperature can mono-PP pouches withstand?\""
            ]
        },
        "riskHedging": {
            "title": "Is Mono-PP Right for You?",
            "bestFit": {
                "title": "✅ Best Fit For...",
                "points": ["Hot-fill applications (85°C+)", "Microwave-safe packaging needs", "Products requiring high clarity", "Markets with PP recycling streams"]
            },
            "alsoWorks": {
                "title": "⚠️ Also Works For...",
                "points": ["Products with grease/oil content", "Premium applications needing stiffness", "Retort-adjacent applications"]
            },
            "notRecommended": {
                "title": "❌ Not Recommended If...",
                "points": ["PE recycling is more accessible in your market", "Lower cost is the priority", "Consider Mono-PE instead →"]
            }
        },
        "decisionCta": {
            "title": "Ready to Go Mono-PP Recyclable?",
            "call": {
                "title": "Ready to Move Fast?",
                "desc": "Book a call to discuss hot-fill specs",
                "btn": "Book a Call"
            },
            "samples": {
                "title": "Want to Test First?",
                "desc": "Order mono-PP samples for testing",
                "btn": "Get Samples"
            },
            "explore": {
                "title": "Still Exploring?",
                "desc": "Compare PP vs PE recyclable options",
                "btn": "Compare Materials"
            }
        },
        "b2c": {
            "title": "Recyclable Mono-PP Pouches Guide: High-Clarity DTC Packaging | POUCH.ECO",
            "description": "Ultra-clear, stiff, and highly recyclable Mono-PP pouches designed for DTC food startups. Certified curbside recyclable with low MOQs starting from 500 units.",
            "heroBadge1": "🔥 Hot-Fill & Microwave Ready",
            "heroBadge2": "🔄 View Recyclability Guide →",
            "heroTitleLine1": "Recyclable Mono-PP",
            "heroTitleLine2": "Pouches & Films",
            "heroTitleLine3": "DTC Startup Guide",
            "heroSubtitle": "Revolutionary single-material packaging designed specifically for startups selling hot-fill liquids, ready-to-heat foods, or premium dry goods. Maximum stiffness, crystal clarity, and low MOQs.",
            "ctaTitle": "Scale Your Brand with Recyclable Packaging",
            "ctaDescription": "Book a free 30-minute consultation. Let's design custom hot-fill or high-clarity mono-PP pouches tailored to your startup's needs and scaling goals.",
            "achievePackText": "Looking for high-volume B2B hot-fill film rolls or industrial packaging specifications?",
            "sections": {
                "hotFill": {
                    "title": "Hot-Fill & Microwave Ready: The Superpower of Mono-PP for Food Startups",
                    "intro": "If you're a food startup launching hot-fill sauces, gourmet soups, purees, or microwaveable convenience meals, conventional plastic pouches present a massive hurdle. They either melt, warp, or leach chemicals when exposed to heat. Traditional multi-layer laminates can handle the heat, but they are impossible to recycle—ending up straight in a landfill.",
                    "cardTitle": "🔥 Built to Take the Heat",
                    "cardDesc": "Our revolutionary Single-Material Polypropylene (Mono-PP) pouches comfortably withstand hot-fill temperatures up to 130°C and are completely microwave-safe. Because they are made from a single material (100% PP), they are accepted in standard #5 PP recycling streams. Now you can hot-pack your gourmet sauce, maintain total shelf freshness, and keep your brand 100% circular.",
                    "bulletsTitle": "Mono-PP Performance Advantages:",
                    "bullet1": "Hot-Fill Safe (Up to 130°C): Fill directly with hot soups, purees, or sauces without container warping or chemical migration.",
                    "bullet2": "Microwaveable Convenience: Perfect for ready-to-heat grains, rice, and frozen meals. True steam-in-the-bag potential.",
                    "bullet3": "100% PP Recyclable: Fits perfectly in curbside #5 recycling programs, avoiding the landfill destination of multi-layer plastics."
                },
                "clarity": {
                    "title": "Glass-Like Clarity Windows & Bulletproof Moisture Barriers",
                    "intro": "DTC customers buy with their eyes. If you're selling premium ingredients, colorful superfoods, custom spices, or organic pet treats, you want your product to shine. Conventional PE packaging is naturally hazy and dulls the vibrant colors of your food.",
                    "cardTitle": "Crystal-Clear Window & Crisp Presentation",
                    "cardDesc": "Mono-PP offers exceptional high-gloss, glass-like optical clarity. It gives your packaging a premium look while providing a highly rigid structure. This stiffness ensures your stand-up pouches stand perfectly straight on shelves and inside shipping boxes, refusing to crumple or fold.",
                    "bulletsTitle": "The Technical Details Simplified:",
                    "bullet1": "Excellent Moisture & Gas Barrier: Maintains an airtight seal that extends shelf-life from 12 to 18 months, keeping moisture out and freshness in.",
                    "bullet2": "Resistant to Oils & Fats: Perfect for oily snacks, pet treats, keto mixes, or fatty foods that normally degrade weak plastic films.",
                    "bullet3": "High Stiffness: Looks premium and stands tall, providing a superior shelf presence compared to standard flimsier PE bags."
                },
                "lowMoq": {
                    "title": "DTC Launch Agility: Custom Printing from 500 Bags",
                    "intro": "Many industrial B2B suppliers force brands into huge minimum orders of 10,000+ bags per design. If you are launching a startup or testing three different flavors, that means risking thousands of dollars of cash flow on unverified packaging.",
                    "cardTitle": "No Plate Fees · Split Your Designs",
                    "cardDesc": "At Pouch.eco, we specialize in helping startup brands scale dynamically. We print custom Mono-PP pouches starting at just 500 units. By leveraging advanced digital printing, we eliminate the need for expensive copper plate setup fees. You can easily split your order across multiple product varieties or test seasonal runs with minimal financial exposure.",
                    "adviceTitle": "💡 Pouch.eco Startup Advice:",
                    "adviceDesc": "\"When you are launch-testing, buy a small batch of digitally printed custom Mono-PP stand-up bags to verify your market-fit. If you want to keep costs even lower, buy unprinted bags in bulk and use DIY custom rubber stamps to customize your packaging on the fly.\""
                },
                "personalization": {
                    "title": "Brutalism meets Eco: Scent Lines & Custom Labels",
                    "intro": "Are you designing a retro-brutalist brand or a minimalistic wellness product? Mono-PP provides the perfect canvas. Its highly rigid structure and premium gloss surface are ideal for holding vibrant, modern digital prints or minimal white-ink underprints.",
                    "card1Title": "🌸 Scent & Variant Lines",
                    "card1Desc": "Selling bath salts, cleaning refills, or botanical teas? Distinguish your scents with clean, bold typography bands. The rigidity of Mono-PP keeps the layout perfectly flat and readable.",
                    "card2Title": "🏷️ Custom Labels & Stickers",
                    "card2Desc": "You can also order unprinted stock pouches and apply custom plant-based compostable labels. It is the ultimate low-cost, ultra-flexible packaging setup for experimental DTC startups."
                }
            }
        }
    }
}

new_data_zhtw = {
    "sections": {
        "glance": {
            "title": "單材質 PP 可回收資訊圖表",
            "clickToEnlarge": "點擊下方資訊圖表查看完整大小：",
            "alt": "可回收材料資訊圖表 - 可回收包裝完整指南",
            "caption": "可回收材料資訊圖表"
        },
        "targetAudience": {
            "title": "本頁面是否適合您？",
            "intro": "如果您需要能夠承受高溫灌裝、微波加熱，或者需要比 PE 更好耐熱性的包裝——單材質 PP 可回收袋就是您的最佳解決方案。",
            "hotFill": {
                "title": "高溫灌裝產品",
                "desc": "湯品、醬汁、即食餐"
            },
            "microwave": {
                "title": "微波食品",
                "desc": "方便即食餐、冷凍食品"
            },
            "clarity": {
                "title": "高透明度需求",
                "desc": "PP 比 PE 提供更好的透明度與光澤"
            }
        },
        "scenarios": {
            "title": "行業應用",
            "intro": "單材質 PP 可回收包裝在需要耐熱性和高透明度的應用中表現出色：",
            "hotFill": {
                "title": "高溫灌裝食品",
                "item1": "湯品與醬汁：可承受 85°C+ 的灌裝高溫",
                "item2": "方便即食餐：高溫灌裝方便食品",
                "item3": "調味品：番茄醬、蛋黃醬、沙拉醬",
                "note": "高溫下無包裝變形"
            },
            "microwave": {
                "title": "微波食品",
                "item1": "冷凍食品：微波安全包裝",
                "item2": "米飯與穀物：袋內蒸汽加熱解決方案",
                "item3": "便利性：即熱即食產品",
                "note": "130°C 高溫微波安全"
            },
            "clarity": {
                "title": "高透明度需求",
                "item1": "高端零食：清晰的展示窗口",
                "item2": "乾果：完美呈現內部產品",
                "item3": "糖果：高光澤的包裝外觀",
                "note": "優於 PE 的光學透明度"
            },
            "stories": {
                "title": "客戶成功案例",
                "euSoup": {
                    "label": "歐洲湯品品牌",
                    "desc": "將其高溫灌裝生產線切換為單材質 PP 袋。在保持產品質量的同時，獲得了零售所需的「廣泛可回收」標籤。"
                },
                "usFrozen": {
                    "label": "美國冷凍食品",
                    "desc": "推出了微波安全的可回收袋。客戶調查顯示，與非可回收競爭對手相比，消費者購買意向提高了 30%。"
                }
            }
        },
        "marketData": {
            "title": "市場與性能數據",
            "metrics": {
                "heatLimit": "最高耐熱溫度",
                "shelfLife": "個月保質期",
                "resinCode": "樹脂編碼 (PP)",
                "clarity": "PP 透明度優於 PE"
            },
            "tableTitle": "單材質 PP 與單材質 PE 性能對比",
            "headers": ["性能指標", "單材質 PP", "單材質 PE", "最適合"],
            "rows": [
                ["耐熱性能", "130°C ✓", "80°C", "PP 最適合高溫灌裝"],
                ["光學透明度", "極佳 ✓", "良好", "PP 最適合透明展示窗口"],
                ["柔軟度/柔韌性", "較硬", "更柔韌 ✓", "PE 最適合柔軟手感的袋子"],
                ["回收便利度", "因地區而異", "更廣泛接受 ✓", "PE 在多數市場更普及"],
                ["成本", "+10-15%", "+5-10% ✓", "PE 適合預算敏感型項目"]
            ],
            "impactTitle": "單材質 PP 技術優勢",
            "impact": {
                "heatLimit": "耐熱溫度高於 PE",
                "clarity": "極高透光率 (高透明度)",
                "stiffness": "剛性與挺拔度優於 PE"
            }
        },
        "comparison": {
            "title": "材料對比",
            "intro": "將單材質 PP 與其他可回收和可持續的包裝選項進行比較：",
            "tableTitle": "耐高溫包裝材料對比",
            "headers": ["評估標準", "單材質 PP", "單材質 PE", "傳統複合膜"],
            "rows": [
                ["可否高溫灌裝", "✓ 可以 (130°C)", "△ 限制 (80°C)", "✓ 可以"],
                ["微波安全", "✓ 安全", "✗ 否", "△ 部份安全"],
                ["可回收性", "✓ PP 塑料回收流", "✓ PE 塑料回收流", "✗ 填埋垃圾"],
                ["透明度", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["成本溢價", "+10-15%", "+5-10%", "基準線"]
            ],
            "decisionGuideTitle": "快速決策指南",
            "choosePP": "在以下情況選擇單材質 PP：",
            "ppPoints": ["需要超清晰展示窗口", "需要極佳的防潮阻隔", "需要高溫灌裝或微波加熱功能"],
            "choosePE": "在以下情況選擇單材質 PE：",
            "pePoints": ["回收便利度為首要考量", "需要柔軟和高彈性手感", "了解更多 →"],
            "chooseCompostable": "在以下情況選擇可堆肥：",
            "compostablePoints": ["消費者便於接觸堆肥設施", "環保品牌故事是主要差異化賣點", "了解更多 →"]
        },
        "aiSearch": {
            "title": "尋找單材質 PP 可回收包裝",
            "intro": "如果您使用 AI 搜尋（Gemini、ChatGPT），可以嘗試詢問：",
            "questions": [
                "「單材質 PP 對比單材質 PE：高溫灌裝應該選哪種？」",
                "「微波安全食品包裝的最佳可回收袋供應商？」",
                "「低起訂量 PP 可回收軟包裝生產廠家？」",
                "「單材質 PP 包裝袋能承受多少度的高溫？」"
            ]
        },
        "riskHedging": {
            "title": "單材質 PP 是否適合您？",
            "bestFit": {
                "title": "✅ 最適合...",
                "points": ["高溫灌裝應用 (85°C+)", "微波安全加熱包裝", "需要極高透明度的產品展示", "擁有良好 PP 回收網絡的市場"]
            },
            "alsoWorks": {
                "title": "⚠️ 也適用於...",
                "points": ["含油或含脂肪的產品", "需要挺拔站立感的高端包裝", "有耐高溫蒸煮需求的包裝"]
            },
            "notRecommended": {
                "title": "❌ 不推薦用於...",
                "points": ["當地更普及 PE 回收的市場", "成本為唯一首要考量的項目", "考慮使用單材質 PE 代替 →"]
            }
        },
        "decisionCta": {
            "title": "準備好轉用單材質 PP 可回收包裝了嗎？",
            "call": {
                "title": "想快速推進項目？",
                "desc": "預約專業諮詢，討論高溫灌裝規格",
                "btn": "預約通話"
            },
            "samples": {
                "title": "想要先進行測試？",
                "desc": "訂購單材質 PP 樣品進行包裝測試",
                "btn": "獲取樣品"
            },
            "explore": {
                "title": "仍在探索階段？",
                "desc": "對比 PP 與 PE 可回收材料的優缺點",
                "btn": "對比材料"
            }
        },
        "b2c": {
            "title": "單材質 PP 可回收袋指南：高端高清晰度 DTC 包裝 | POUCH.ECO",
            "description": "為 DTC 食品初創品牌設計的超清晰、挺拔且高度可回收的單材質 PP 袋。低起訂量 500 個起，符合 #5 PP 回收標準。",
            "heroBadge1": "🔥 耐高溫灌裝與微波加熱",
            "heroBadge2": "🔄 查看可回收性指南 →",
            "heroTitleLine1": "可回收單材質 PP",
            "heroTitleLine2": "包裝袋與薄膜",
            "heroTitleLine3": "DTC 初創品牌指南",
            "heroSubtitle": "為銷售高溫灌裝液體、即熱食品或高端乾貨的初創品牌量身定制的革命性單一材料包裝。具備極高硬度、玻璃般透明度及低起訂量。",
            "ctaTitle": "用可回收包裝升級您的品牌",
            "ctaDescription": "預約 30 分鐘免費諮詢。讓我們為您量身定制符合您初創業務需求和擴張目標的客製化高溫灌裝或高清晰度單材質 PP 袋。",
            "achievePackText": "正在尋找大批量 B2B 高溫灌裝卷膜或工業級包裝規格？",
            "sections": {
                "hotFill": {
                    "title": "耐高溫灌裝與微波加熱：單材質 PP 對食品初創品牌的超強優勢",
                    "intro": "如果您是推出高溫灌裝醬汁、高檔湯品、果泥或微波即食餐的食品初創品牌，傳統塑料袋會是個巨大障礙。暴露於高溫時，它們易於熔化、變形或釋放化學物質。傳統多層複合膜雖耐高溫，但完全無法回收——最終只能直接進入垃圾填埋場。",
                    "cardTitle": "🔥 專為承受高溫而生",
                    "cardDesc": "我們革命性的單一材質聚丙烯（Mono-PP）袋子可以輕鬆承受高達 130°C 的高溫灌裝，並且完全適用於微波爐。由於它們由單一材料（100% PP）製成，因此可直接進入標準的 #5 PP 回收流。現在您可以熱灌裝您的高檔醬料，維持產品完美的新鮮度，同時讓您的品牌實現 100% 循環。",
                    "bulletsTitle": "單材質 PP 性能優勢：",
                    "bullet1": "高溫灌裝安全 (最高 130°C)：可直接灌裝高溫湯品、果泥或醬汁，無包裝變形或化學物質遷移風險。",
                    "bullet2": "微波加熱便利性：非常適合即熱穀物、米飯和冷凍餐食，具備真正的袋內蒸汽加熱潛力。",
                    "bullet3": "100% 可回收：完美契合 #5 塑料回收計劃，避免多層塑料進入填埋場的命運。"
                },
                "clarity": {
                    "title": "玻璃般清晰的展示窗口與強大防潮阻隔",
                    "intro": "消費者通常用眼睛購物。如果您銷售高端食材、色彩豐富的超級食品、客製化香料或有機寵物食品，您一定希望您的產品能完美展示。傳統的 PE 包裝袋天然帶有些許霧感，容易使食品的鮮豔色彩顯得暗淡。",
                    "cardTitle": "水晶般清晰的展示窗口與挺拔外觀",
                    "cardDesc": "單材質 PP 提供優異的高光澤度和玻璃般的光學透明度。它賦予您的包裝高端質感，同時提供高度剛性的結構。這種硬度能確保您的立式袋在貨架和運輸箱中保持挺立，不易起皺或軟塌。",
                    "bulletsTitle": "技術細節簡介：",
                    "bullet1": "優異的防潮與防氣體阻隔：保持高密封性，保質期可達 12 至 18 個月，有效阻隔濕氣以維持新鮮度。",
                    "bullet2": "耐油與耐脂肪：非常適合油性零食、寵物食品、生酮烘焙粉或容易使普通薄膜老化的多脂食品。",
                    "bullet3": "高度剛性：外觀更顯高端且立體，比一般軟塌的 PE 袋具備更出色的貨架陳列效果。"
                },
                "lowMoq": {
                    "title": "DTC 品牌的靈活性：客製化印刷 500 個起訂",
                    "intro": "許多工業包裝供應商強制品牌起訂 10,000 個以上的袋子。如果您正在測試新業務，或者研發了三種口味，這意味著要冒著極大的資金風險在一款未經市場驗證的包裝上。",
                    "cardTitle": "無需版費 · 靈活拼版多款設計",
                    "cardDesc": "在 Pouch.eco，我們專注於協助初創品牌靈活起步。我們印刷客製化單材質 PP 袋僅需 500 個起。通過先進的數位印刷，我們完全免除了昂貴的銅版版費。您可以輕鬆地在多個產品口味之間分配起訂量，或以極低的資金風險測試季節性限定款。",
                    "adviceTitle": "💡 Pouch.eco 初創品牌建議：",
                    "adviceDesc": "「當您進行市場測試時，可以先訂購一小批數位印刷的客製化單材質 PP 立式袋以驗證市場契合度。如果您想將起步成本控制得更低，可以大批量採購無印刷空白袋，然後使用手工植物性印章在袋上自行蓋印。」"
                },
                "personalization": {
                    "title": "極簡與環保的融合：氣味區分與自定義標籤",
                    "intro": "不論您正在設計一個極簡復古的品牌，還是包裝健康天然的保養品，單材質 PP 都是完美選擇。它高度剛性的結構和高亮表面，非常適合呈現現代大膽的數位印刷，或極簡的白墨打底印刷。",
                    "card1Title": "🌸 氣味與系列區分",
                    "card1Desc": "銷售沐浴鹽、清潔補充包或天然花草茶？使用簡潔、大膽的排版色帶區分不同气味。單材質 PP 的挺度能使圖案和文字保持完美平整且易於閱讀。",
                    "card2Title": "🏷️ 客製化標籤與貼紙貼附",
                    "card2Desc": "您也可以採購無印刷的現貨袋，並貼上客製化的植物基可堆肥標籤。這是實驗性 DTC 初創品牌極低成本、且最靈活的包裝解決方案。"
                }
            }
        }
    }
}

new_data_es = {
    "sections": {
        "glance": {
            "title": "Infografía de Mono-PP reciclable",
            "clickToEnlarge": "Haga clic en la infografía a continuación para verla en tamaño completo:",
            "alt": "Infografía de materiales reciclables: guía completa de envases reciclables",
            "caption": "Infografía de materiales reciclables"
        },
        "targetAudience": {
            "title": "¿Es esta página para usted?",
            "intro": "Si necesita un envase que pueda soportar procesos de llenado en caliente, recalentamiento en microondas o requiere una mayor resistencia al calor que el PE, las bolsas reciclables de mono-PP son su solución.",
            "hotFill": {
                "title": "Productos de llenado en caliente",
                "desc": "Sopas, salsas, platos preparados"
            },
            "microwave": {
                "title": "Alimentos para microondas",
                "desc": "Platos preparados de conveniencia, productos congelados"
            },
            "clarity": {
                "title": "Necesidades de alta claridad",
                "desc": "El PP ofrece una mejor transparencia que el PE"
            }
        },
        "scenarios": {
            "title": "Aplicaciones de la industria",
            "intro": "Los envases reciclables de mono-PP destacan donde la resistencia al calor y la claridad son esenciales:",
            "hotFill": {
                "title": "Alimentos de llenado en caliente",
                "item1": "Sopas y salsas: soporta temperaturas de llenado de más de 85 °C",
                "item2": "Platos preparados: alimentos de conveniencia envasados en caliente",
                "item3": "Condimentos: kétchup, mayonesa, aderezos",
                "note": "Sin distorsión a altas temperaturas"
            },
            "microwave": {
                "title": "Alimentos para microondas",
                "item1": "Alimentos congelados: envase apto para microondas",
                "item2": "Arroz y cereales: soluciones de cocción al vapor en la bolsa",
                "item3": "Conveniencia: productos para calentar y comer",
                "note": "Apto para microondas a 130 °C"
            },
            "clarity": {
                "title": "Necesidades de alta claridad",
                "item1": "Snacks premium: visibilidad de ventana clara",
                "item2": "Frutas deshidratadas: escaparate de productos",
                "item3": "Confitería: presentación de alto brillo",
                "note": "Claridad óptica superior frente al PE"
            },
            "stories": {
                "title": "Casos de éxito de clientes",
                "euSoup": {
                    "label": "Marca de sopa de la UE",
                    "desc": "Cambió la línea de llenado en caliente a bolsas de mono-PP. Mantuvo la calidad del producto mientras lograba la etiqueta \"Ampliamente reciclable\" para la venta al por menor."
                },
                "usFrozen": {
                    "label": "Alimentos congelados de EE. UU.",
                    "desc": "Lanzó bolsas reciclables aptas para microondas. Las encuestas a los clientes mostraron un aumento del 30% en la preferencia frente a los competidores no reciclables."
                }
            }
        },
        "marketData": {
            "title": "Datos de mercado y rendimiento",
            "metrics": {
                "heatLimit": "Resistencia máxima al calor",
                "shelfLife": "Meses de vida útil",
                "resinCode": "Código de resina (PP)",
                "clarity": "Claridad de PP frente a PE"
            },
            "tableTitle": "Rendimiento de Mono-PP frente a Mono-PE",
            "headers": ["Propiedad", "Mono-PP", "Mono-PE", "Ideal para"],
            "rows": [
                ["Resistencia al calor", "130°C ✓", "80°C", "PP para llenado en caliente"],
                ["Claridad óptica", "Excelente ✓", "Bueno", "PP para ventanas claras"],
                ["Flexibilidad", "Más rígido", "Más flexible ✓", "PE para bolsas blandas"],
                ["Acceso al reciclaje", "Variable", "Acceso más amplio ✓", "PE en la mayoría de los mercados"],
                ["Costo", "+10-15%", "+5-10% ✓", "PE para presupuesto"]
            ],
            "impactTitle": "Ventajas técnicas de Mono-PP",
            "impact": {
                "heatLimit": "Mayor tolerancia al calor frente al PE",
                "clarity": "Transmisión de luz (claridad)",
                "stiffness": "Rigidez frente al PE"
            }
        },
        "comparison": {
            "title": "Comparación de materiales",
            "intro": "Compare el mono-PP con otras opciones reciclables y sostenibles:",
            "tableTitle": "Comparación de materiales resistentes al calor",
            "headers": ["Criterio", "Mono-PP", "Mono-PE", "Laminado tradicional"],
            "rows": [
                ["Apto para llenado en caliente", "✓ Sí (130°C)", "△ Limitado (80°C)", "✓ Sí"],
                ["Apto para microondas", "✓ Sí", "✗ No", "△ Algunos"],
                ["Reciclabilidad", "✓ Flujo de PP", "✓ Flujo de PE", "✗ Vertedero"],
                ["Claridad", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Costo premium", "+10-15%", "+5-10%", "Línea base"]
            ],
            "decisionGuideTitle": "Guía de decisión rápida",
            "choosePP": "Elija Mono-PP si:",
            "ppPoints": ["Se necesita una ventana súper clara", "Se requiere una mayor barrera contra la humedad", "Capacidad de llenado en caliente o microondas"],
            "choosePE": "Elija Mono-PE si:",
            "pePoints": ["El reciclaje es más accesible", "Necesita un tacto flexible y suave", "Más información →"],
            "chooseCompostable": "Elija Compostable si:",
            "compostablePoints": ["Acceso a compostaje para los clientes", "La historia ecológica es el diferenciador clave", "Más información →"]
        },
        "aiSearch": {
            "title": "Búsqueda de envases reciclables de Mono-PP",
            "intro": "Si está utilizando la búsqueda de IA (Gemini, ChatGPT), intente preguntar:",
            "questions": [
                "\"Mono-PP frente a Mono-PE: ¿cuál debo elegir para el llenado en caliente?\"",
                "\"¿La mejor bolsa reciclable para envases de alimentos aptos para microondas?\"",
                "\"¿Proveedor de envases flexibles reciclables de PP con bajo MOQ?\"",
                "\"¿Qué temperatura pueden soportar las bolsas de mono-PP?\""
            ]
        },
        "riskHedging": {
            "title": "¿Es el Mono-PP adecuado para usted?",
            "bestFit": {
                "title": "✅ Ideal para...",
                "points": ["Aplicaciones de llenado en caliente (85 °C+)", "Necesidades de envasado apto para microondas", "Productos que requieren alta claridad", "Mercados con flujos de reciclaje de PP"]
            },
            "alsoWorks": {
                "title": "⚠️ También funciona para...",
                "points": ["Productos con contenido de grasa/aceite", "Aplicaciones premium que necesitan rigidez", "Aplicaciones adyacentes a la esterilización en autoclave"]
            },
            "notRecommended": {
                "title": "❌ No recomendado si...",
                "points": ["El reciclaje de PE es más accesible en su mercado", "El menor costo es la prioridad", "Considere Mono-PE en su lugar →"]
            }
        },
        "decisionCta": {
            "title": "¿Listo para pasar al Mono-PP reciclable?",
            "call": {
                "title": "¿Listo para avanzar rápido?",
                "desc": "Reserve una llamada para analizar las especificaciones de llenado en caliente",
                "btn": "Reservar una llamada"
            },
            "samples": {
                "title": "¿Quiere probar primero?",
                "desc": "Solicite muestras de mono-PP para realizar pruebas",
                "btn": "Obtener muestras"
            },
            "explore": {
                "title": "¿Sigue explorando?",
                "desc": "Compare las opciones reciclables de PP frente a PE",
                "btn": "Comparar materiales"
            }
        },
        "b2c": {
            "title": "Guía de bolsas de Mono-PP reciclables: envases de alta claridad para DTC | POUCH.ECO",
            "description": "Bolsas de Mono-PP ultra claras, rígidas y altamente reciclables diseñadas para empresas emergentes de alimentos DTC. Certificado como reciclable en la acera con MOQs bajos desde 500 unidades.",
            "heroBadge1": "🔥 Listo para llenado en caliente y microondas",
            "heroBadge2": "🔄 Ver guía de reciclabilidad →",
            "heroTitleLine1": "Mono-PP reciclable",
            "heroTitleLine2": "Bolsas y películas",
            "heroTitleLine3": "Guía para empresas emergentes DTC",
            "heroSubtitle": "Envase revolucionario de un solo material diseñado específicamente para empresas emergentes que venden líquidos de llenado en caliente, alimentos listos para calentar o productos secos premium. Máxima rigidez, claridad cristalina y MOQs bajos.",
            "ctaTitle": "Haga crecer su marca con envases reciclables",
            "ctaDescription": "Reserve una consulta gratuita de 30 minutos. Diseñemos bolsas personalizadas de mono-PP de alta claridad o llenado en caliente adaptadas a las necesidades y objetivos de crecimiento de su empresa emergente.",
            "achievePackText": "¿Busca rollos de película de llenado en caliente B2B de gran volumen o especificaciones de envasado industrial?",
            "sections": {
                "hotFill": {
                    "title": "Listo para llenado en caliente y microondas: el superpoder del Mono-PP para empresas emergentes de alimentos",
                    "intro": "Si es una empresa emergente de alimentos que lanza salsas de llenado en caliente, sopas gourmet, purés o comidas de conveniencia aptas para microondas, las bolsas de plástico convencionales presentan un gran obstáculo. Se derriten, se deforman o liberan sustancias químicas cuando se exponen al calor. Los laminados multicapa tradicionales pueden soportar el calor, pero son imposibles de reciclar, terminando directamente en un vertedero.",
                    "cardTitle": "🔥 Diseñado para soportar el calor",
                    "cardDesc": "Nuestras revolucionarias bolsas de polipropileno de un solo material (Mono-PP) soportan cómodamente temperaturas de llenado en caliente de hasta 130 °C y son completamente aptas para microondas. Debido a que están hechas de un solo material (100% PP), se aceptan en los flujos de reciclaje de PP #5 estándar. Ahora puede envasar en caliente su salsa gourmet, mantener la frescura total en el estante y mantener su marca 100% circular.",
                    "bulletsTitle": "Ventajas de rendimiento de Mono-PP:",
                    "bullet1": "Seguro para llenado en caliente (hasta 130 °C): llene directamente con sopas, purés o salsas calientes sin deformación del envase ni migración química.",
                    "bullet2": "Conveniencia para microondas: perfecto para cereales listos para calentar, arroz y comidas congeladas. Verdadero potencial de cocción al vapor en la bolsa.",
                    "bullet3": "100% PP reciclable: se adapta perfectamente a los programas de reciclaje #5 en la acera, evitando el destino de vertedero de los plásticos multicapa."
                },
                "clarity": {
                    "title": "Ventanas de claridad similar al vidrio y barreras contra la humedad a prueba de balas",
                    "intro": "Los clientes de DTC compran con los ojos. Si vende ingredientes premium, superalimentos coloridos, especias personalizadas o golosinas orgánicas para mascotas, quiere que su producto brille. El envase de PE convencional es naturalmente brumoso y opaca los colores vibrantes de sus alimentos.",
                    "cardTitle": "Ventana cristalina y presentación nítida",
                    "cardDesc": "El Mono-PP ofrece una claridad óptica excepcional similar al vidrio y de alto brillo. Le da a su envase un aspecto premium al tiempo que proporciona una estructura muy rígida. Esta rigidez garantiza que sus bolsas stand-up se mantengan perfectamente erguidas en los estantes y dentro de las cajas de envío, evitando arrugarse o doblarse.",
                    "bulletsTitle": "Los detalles técnicos simplificados:",
                    "bullet1": "Excelente barrera contra la humedad y los gases: mantiene un sello hermético que extiende la vida útil de 12 a 18 meses, manteniendo la humedad fuera y la frescura dentro.",
                    "bullet2": "Resistente a aceites y grasas: perfecto para snacks aceitosos, golosinas para mascotas, mezclas cetogénicas o alimentos grasos que normalmente degradan las películas plásticas débiles.",
                    "bullet3": "Alta rigidez: se ve premium y se mantiene firme, proporcionando una presencia superior en el estante en comparación con las bolsas de PE estándar más endebles."
                },
                "lowMoq": {
                    "title": "Agilidad de lanzamiento de DTC: impresión personalizada desde 500 bolsas",
                    "intro": "Muchos proveedores industriales de B2B obligan a las marcas a realizar pedidos mínimos enormes de más de 10.000 bolsas por diseño. Si está lanzando una empresa emergente o probando tres sabores diferentes, eso significa arriesgar miles de dólares de flujo de caja en envases no verificados.",
                    "cardTitle": "Sin tarifas de planchas · Divida sus diseños",
                    "cardDesc": "En Pouch.eco, nos especializamos en ayudar a las marcas emergentes a escalar dinámicamente. Imprimimos bolsas de Mono-PP personalizadas a partir de solo 500 unidades. Al aprovechar la impresión digital avanzada, eliminamos la necesidad de costosas tarifas de configuración de planchas de cobre. Puede dividir fácilmente su pedido entre varias variedades de productos o probar tiradas estacionales con una exposición financiera mínima.",
                    "adviceTitle": "💡 Consejo para empresas emergentes de Pouch.eco:",
                    "adviceDesc": "\"Cuando realice pruebas de lanzamiento, compre un lote pequeño de bolsas stand-up de Mono-PP impresas digitalmente para verificar su adecuación al mercado. Si desea mantener los costos aún más bajos, compre bolsas sin imprimir a granel y use sellos de goma personalizados para personalizar sus envases sobre la marcha.\""
                },
                "personalization": {
                    "title": "El brutalismo se une a lo ecológico: líneas de aromas y etiquetas personalizadas",
                    "intro": "¿Está diseñando una marca retro-brutalista o un producto de bienestar minimalista? El Mono-PP proporciona el lienzo perfecto. Su estructura muy rígida y su superficie brillante premium son ideales para albergar impresiones digitales modernas y vibrantes o impresiones de base de tinta blanca minimalistas.",
                    "card1Title": "🌸 Líneas de aromas y variantes",
                    "card1Desc": "¿Vende sales de baño, recambios de limpieza o tés botánicos? Distinga sus aromas con bandas tipográficas limpias y atrevidas. La rigidez del Mono-PP mantiene el diseño perfectamente plano y legible.",
                    "card2Title": "🏷️ Etiquetas y pegatinas personalizadas",
                    "card2Desc": "También puede solicitar bolsas de stock sin imprimir y aplicar etiquetas compostables personalizadas de origen vegetal. Es la configuración de envasado definitiva de bajo costo y ultra flexible para empresas emergentes experimentales de DTC."
                }
            }
        }
    }
}

new_data_fr = {
    "sections": {
        "glance": {
            "title": "Infographie du Mono-PP recyclable",
            "clickToEnlarge": "Cliquez sur l'infographie ci-dessous pour l'afficher en taille réelle :",
            "alt": "Infographie des matériaux recyclables - Guide complet des emballages recyclables",
            "caption": "Infographie des matériaux recyclables"
        },
        "targetAudience": {
            "title": "Cette page est-elle pour vous ?",
            "intro": "Si vous avez besoin d'un emballage capable de résister aux processus de remplissage à chaud, au réchauffage au micro-ondes ou nécessitant une résistance à la chaleur supérieure à celle du PE, les sachets recyclables en mono-PP sont votre solution.",
            "hotFill": {
                "title": "Produits de remplissage à chaud",
                "desc": "Soupes, sauces, plats cuisinés"
            },
            "microwave": {
                "title": "Plats pour micro-ondes",
                "desc": "Plats cuisinés de commodité, produits surgelés"
            },
            "clarity": {
                "title": "Besoins de haute clarté",
                "desc": "Le PP offre une meilleure transparence que le PE"
            }
        },
        "scenarios": {
            "title": "Applications de l'industrie",
            "intro": "Les emballages recyclables en mono-PP excellent là où la résistance à la chaleur et la clarté sont essentielles :",
            "hotFill": {
                "title": "Aliments de remplissage à chaud",
                "item1": "Soupes & Sauces : résiste à des températures de remplissage de plus de 85 °C",
                "item2": "Plats cuisinés : aliments de commodité emballés à chaud",
                "item3": "Condiments : ketchup, mayonnaise, vinaigrettes",
                "note": "Aucune distorsion à haute température"
            },
            "microwave": {
                "title": "Aliments pour micro-ondes",
                "item1": "Aliments surgelés : emballage adapté au micro-ondes",
                "item2": "Riz et céréales : solutions de cuisson à la vapeur dans le sachet",
                "item3": "Praticité : produits prêts à chauffer et à consommer",
                "note": "Adapté au micro-ondes à 130 °C"
            },
            "clarity": {
                "title": "Besoins de haute clarté",
                "item1": "Snacks premium : visibilité de fenêtre transparente",
                "item2": "Fruits secs : présentation des produits",
                "item3": "Confiserie : présentation haute brillance",
                "note": "Clarté optique supérieure par rapport au PE"
            },
            "stories": {
                "title": "Témoignages de réussite de clients",
                "euSoup": {
                    "label": "Marque de soupe de l'UE",
                    "desc": "Passage de la ligne de remplissage à chaud à des sachets en mono-PP. Maintien de la qualité du produit tout en obtenant l'étiquette « Largement recyclable » pour la vente au détail."
                },
                "usFrozen": {
                    "label": "Aliments surgelés aux États-Unis",
                    "desc": "Lancement de sachets recyclables adaptés au micro-ondes. Les enquêtes auprès des clients ont montré une augmentation de 30 % des préférences par rapport aux concurrents non recyclables."
                }
            }
        },
        "marketData": {
            "title": "Données de marché et de performance",
            "metrics": {
                "heatLimit": "Résistance maximale à la chaleur",
                "shelfLife": "Mois de conservation",
                "resinCode": "Code de résine (PP)",
                "clarity": "Clarté du PP vs PE"
            },
            "tableTitle": "Performance du Mono-PP par rapport au Mono-PE",
            "headers": ["Propriété", "Mono-PP", "Mono-PE", "Idéal pour"],
            "rows": [
                ["Résistance à la chaleur", "130°C ✓", "80°C", "PP pour le remplissage à chaud"],
                ["Clarté optique", "Excellente ✓", "Bon", "PP pour les fenêtres transparentes"],
                ["Flexibilité", "Plus rigide", "Plus flexible ✓", "PE pour les sachets souples"],
                ["Accès au recyclage", "Variable", "Accès plus large ✓", "PE sur la plupart des marchés"],
                ["Coût", "+10-15%", "+5-10% ✓", "PE pour budget"]
            ],
            "impactTitle": "Avantages techniques du Mono-PP",
            "impact": {
                "heatLimit": "Tolérance à la chaleur plus élevée que le PE",
                "clarity": "Transmission de la lumière (clarté)",
                "stiffness": "Rigidité par rapport au PE"
            }
        },
        "comparison": {
            "title": "Comparaison des matériaux",
            "intro": "Comparez le mono-PP avec d'autres options recyclables et durables :",
            "tableTitle": "Comparaison des matériaux résistants à la chaleur",
            "headers": ["Critères", "Mono-PP", "Mono-PE", "Stratifié traditionnel"],
            "rows": [
                ["Adapté au remplissage à chaud", "✓ Oui (130°C)", "△ Limité (80°C)", "✓ Oui"],
                ["Adapté au micro-ondes", "✓ Oui", "✗ Non", "△ Certains"],
                ["Recyclabilité", "✓ Filière PP", "✓ Filière PE", "✗ Mise en décharge"],
                ["Clarté", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Surcoût", "+10-15%", "+5-10%", "Ligne de base"]
            ],
            "decisionGuideTitle": "Guide de décision rapide",
            "choosePP": "Choisissez le Mono-PP si :",
            "ppPoints": ["Une fenêtre super transparente est nécessaire", "Une barrière à l'humidité plus élevée est requise", "Capacité de remplissage à chaud ou micro-ondes"],
            "choosePE": "Choisissez le Mono-PE si :",
            "pePoints": ["Le recyclage est le plus accessible", "Besoin d'un toucher flexible/doux", "En savoir plus →"],
            "chooseCompostable": "Choisissez le Compostable si :",
            "compostablePoints": ["Accès au compostage pour les clients", "L'histoire écologique est le principal facteur de différenciation", "En savoir plus →"]
        },
        "aiSearch": {
            "title": "Trouver des emballages recyclables en Mono-PP",
            "intro": "Si vous utilisez la recherche IA (Gemini, ChatGPT), essayez de demander :",
            "questions": [
                "\"Mono-PP vs Mono-PE : lequel choisir pour le remplissage à chaud ?\"",
                "\"Le meilleur sachet recyclable pour les emballages alimentaires adaptés au micro-ondes ?\"",
                "\"Fournisseur d'emballages flexibles recyclables en PP avec un faible MOQ ?\"",
                "\"Quelle température les sachets en mono-PP peuvent-ils supporter ?\""
            ]
        },
        "riskHedging": {
            "title": "Le Mono-PP est-il fait pour vous ?",
            "bestFit": {
                "title": "✅ Idéal pour...",
                "points": ["Applications de remplissage à chaud (85 °C+)", "Besoins d'emballage adaptés au micro-ondes", "Produits nécessitant une grande clarté", "Marchés avec des filières de recyclage du PP"]
            },
            "alsoWorks": {
                "title": "⚠️ Fonctionne aussi pour...",
                "points": ["Produits contenant des graisses/huiles", "Applications premium nécessitant de la rigidité", "Applications adjacentes à l'autoclavage"]
            },
            "notRecommended": {
                "title": "❌ Non recommandé si...",
                "points": ["Le recyclage du PE est plus accessible sur votre marché", "Le coût le plus bas est la priorité", "Considérez le Mono-PE à la place →"]
            }
        },
        "decisionCta": {
            "title": "Prêt à passer au Mono-PP recyclable ?",
            "call": {
                "title": "Prêt à avancer rapidement ?",
                "desc": "Réservez un appel pour discuter des spécifications de remplissage à chaud",
                "btn": "Réserver un appel"
            },
            "samples": {
                "title": "Vous voulez tester en premier ?",
                "desc": "Commandez des échantillons de mono-PP pour des tests",
                "btn": "Obtenir des échantillons"
            },
            "explore": {
                "title": "Vous explorez toujours ?",
                "desc": "Comparez les options recyclables en PP vs PE",
                "btn": "Comparer les matériaux"
            }
        },
        "b2c": {
            "title": "Guide des sachets recyclables en Mono-PP : emballages haute clarté pour le DTC | POUCH.ECO",
            "description": "Sachets en Mono-PP ultra transparents, rigides et hautement recyclables conçus pour les start-ups alimentaires DTC. Certifié recyclable en bord de rue avec des MOQ bas à partir de 500 unités.",
            "heroBadge1": "🔥 Prêt pour le remplissage à chaud et le micro-ondes",
            "heroBadge2": "🔄 Voir le guide de recyclabilité →",
            "heroTitleLine1": "Mono-PP recyclable",
            "heroTitleLine2": "Sachets et films",
            "heroTitleLine3": "Guide pour les start-ups DTC",
            "heroSubtitle": "Emballage révolutionnaire composé d'un seul matériau, conçu spécifiquement pour les start-ups vendant des liquides à remplissage à chaud, des aliments prêts à réchauffer ou des produits secs de qualité supérieure. Rigidité maximale, clarté cristalline et MOQ bas.",
            "ctaTitle": "Développez votre marque avec des emballages recyclables",
            "ctaDescription": "Réservez une consultation gratuite de 30 minutes. Concevons des sachets personnalisés en mono-PP haute clarté ou à remplissage à chaud adaptés aux besoins et aux objectifs de croissance de votre start-up.",
            "achievePackText": "Vous recherchez des rouleaux de film de remplissage à chaud B2B à grand volume ou des spécifications d'emballage industriel ?",
            "sections": {
                "hotFill": {
                    "title": "Prêt pour le remplissage à chaud et le micro-ondes : le super-pouvoir du Mono-PP pour les start-ups alimentaires",
                    "intro": "Si vous êtes une start-up alimentaire qui lance des sauces à remplissage à chaud, des soupes gourmandes, des purées ou des repas prêts à consommer adaptés au micro-ondes, les sachets en plastique conventionnels constituent un obstacle majeur. Ils fondent, se déforment ou libèrent des produits chimiques lorsqu'ils sont exposés à la chaleur. Les stratifiés multicouches traditionnels peuvent résister à la chaleur, mais ils sont impossibles à recycler, finissant directement dans une décharge.",
                    "cardTitle": "🔥 Conçu pour résister à la chaleur",
                    "cardDesc": "Nos sachets révolutionnaires en polypropylène mono-matériau (Mono-PP) supportent confortablement des températures de remplissage à chaud allant jusqu'à 130 °C et sont entièrement adaptés au micro-ondes. Comme ils sont fabriqués à partir d'un seul matériau (100 % PP), ils sont acceptés dans les filières de recyclage de PP #5 standard. Vous pouvez désormais emballer à chaud votre sauce gourmande, conserver une fraîcheur totale en rayon et maintenir votre marque 100 % circulaire.",
                    "bulletsTitle": "Avantages de performance du Mono-PP :",
                    "bullet1": "Sans danger pour le remplissage à chaud (jusqu'à 130 °C) : remplissez directement avec des soupes, des purées ou des sauces chaudes sans déformation du sachet ni migration chimique.",
                    "bullet2": "Praticité pour le micro-ondes : parfait pour les céréales prêtes à chauffer, le riz et les repas surgelés. Véritable potentiel de cuisson à la vapeur dans le sachet.",
                    "bullet3": "100 % PP recyclable : s'adapte parfaitement aux programmes de recyclage #5 en bord de rue, évitant la mise en décharge des plastiques multicouches."
                },
                "clarity": {
                    "title": "Des fenêtres transparentes comme du verre et des barrières contre l'humidité blindées",
                    "intro": "Les clients DTC achètent avec les yeux. Si vous vendez des ingrédients de qualité supérieure, des super-aliments colorés, des épices personnalisées ou des friandises biologiques pour animaux de compagnie, vous voulez que votre produit brille. L'emballage PE conventionnel est naturellement trouble et ternit les couleurs éclatantes de vos aliments.",
                    "cardTitle": "Fenêtre transparente et présentation nette",
                    "cardDesc": "Le Mono-PP offre une clarté optique exceptionnelle, brillante et semblable à du verre. Il donne à votre emballage un aspect haut de gamme tout en offrant une structure très rigide. Cette rigidité garantit que vos sachets stand-up se tiennent parfaitement droits sur les étagères et dans les boîtes d'expédition, sans se froisser ni se plier.",
                    "bulletsTitle": "Les détails techniques simplifiés :",
                    "bullet1": "Excellente barrière contre l'humidité et les gaz : maintient un scellement hermétique qui prolonge la durée de conservation de 12 à 18 mois, gardant l'humidité à l'extérieur et la fraîcheur à l'intérieur.",
                    "bullet2": "Résistant aux huiles et aux graisses : parfait pour les snacks gras, les friandises pour animaux de compagnie, les mélanges céto ou les aliments gras qui dégradent normalement les films plastiques fragiles.",
                    "bullet3": "Rigidité élevée : offre un aspect haut de gamme et se tient droit, offrant une présence supérieure en rayon par rapport aux sachets en PE standards plus fragiles."
                },
                "lowMoq": {
                    "title": "Agilité de lancement DTC : impression personnalisée à partir de 500 sachets",
                    "intro": "De nombreux fournisseurs industriels B2B imposent aux marques des commandes minimales énormes de plus de 10 000 sachets par modèle. Si vous lancez une start-up ou testez trois saveurs différentes, cela signifie risquer des milliers d'euros de trésorerie sur un emballage non vérifié.",
                    "cardTitle": "Pas de frais de clichés · Divisez vos visuels",
                    "cardDesc": "Chez Pouch.eco, nous sommes spécialisés dans l'aide aux marques émergentes pour se développer de manière dynamique. Nous imprimons des sachets personnalisés en Mono-PP à partir de seulement 500 unités. En tirant parti de l'impression numérique avancée, nous éliminons le besoin de frais de configuration de clichés en cuivre coûteux. Vous pouvez facilement diviser votre commande entre plusieurs variétés de produits ou tester des séries saisonnières avec une exposition financière minimale.",
                    "adviceTitle": "💡 Conseil pour start-up Pouch.eco :",
                    "adviceDesc": "\"Lorsque vous effectuez des tests de lancement, achetez un petit lot de sachets stand-up Mono-PP personnalisés imprimés numériquement pour vérifier l'adéquation au marché. Si vous souhaitez maintenir des coûts encore plus bas, achetez des sachets non imprimés en vrac et utilisez des tampons en caoutchouc personnalisés pour personnaliser vos emballages à la volée.\""
                },
                "personalization": {
                    "title": "Le brutalisme rencontre l'éco : lignes de parfums et étiquettes personnalisées",
                    "intro": "Vous concevez une marque rétro-brutaliste ou un produit de bien-être minimaliste ? Le Mono-PP offre la toile parfaite. Sa structure très rigide et sa surface brillante de qualité supérieure sont idéales pour accueillir des impressions numériques modernes et éclatantes ou des sous-impressions d'encre blanche minimalistes.",
                    "card1Title": "🌸 Lignes de parfums et variantes",
                    "card1Desc": "Vous vendez des sels de bain, des recharges de nettoyage ou des thés botaniques ? Distinguez vos parfums avec des bandes typographiques épurées et audacieuses. La rigidité du Mono-PP maintient la mise en page parfaitement plate et lisible.",
                    "card2Title": "🏷️ Étiquettes et autocollants personnalisés",
                    "card2Desc": "Vous pouvez également commander des sachets de stock non imprimés et appliquer des étiquettes compostables personnalisées d'origine végétale. C'est la configuration d'emballage ultime à faible coût et ultra-flexible pour les start-ups DTC expérimentales."
                }
            }
        }
    }
}

def update_json(lang, new_data):
    path = locales[lang]
    print(f"Updating {lang} JSON at {path}...")
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Ensure nested keys exist
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'recyclableMonoPP' not in data['seoPages']['pages']:
        data['seoPages']['pages']['recyclableMonoPP'] = {}
        
    pe_section = data['seoPages']['pages']['recyclableMonoPP']
    
    # Merge new_data into recyclableMonoPP
    for k, v in new_data.items():
        if isinstance(v, dict) and k in pe_section and isinstance(pe_section[k], dict):
            # Shallow merge for sections
            for sub_k, sub_v in v.items():
                pe_section[k][sub_k] = sub_v
        else:
            pe_section[k] = v
        
    # Write back
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"  Successfully updated {lang} JSON!")

if __name__ == '__main__':
    update_json('en', new_data_en)
    update_json('zh-TW', new_data_zhtw)
    update_json('es', new_data_es)
    update_json('fr', new_data_fr)
    print("Done all updates!")
