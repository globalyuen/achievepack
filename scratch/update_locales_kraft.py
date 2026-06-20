import json
import os

BASE_DIR = os.path.abspath(os.path.join(__file__, '..', '..'))

locales = {
    'en': os.path.join(BASE_DIR, 'src', 'locales', 'en.json'),
    'zh-TW': os.path.join(BASE_DIR, 'src', 'locales', 'zh-TW.json'),
    'es': os.path.join(BASE_DIR, 'src', 'locales', 'es.json'),
    'fr': os.path.join(BASE_DIR, 'src', 'locales', 'fr.json'),
}

# English data addition
new_high_en = {
    "sections": {
        "overview": {
            "title": "Overview",
            "intro": "Kraft High Barrier packaging features thick aluminum foil layers providing maximum protection for oxygen and moisture-sensitive products requiring 12-24+ month shelf life.",
            "keyFeaturesTitle": "Key Features",
            "features": [
                "Premium kraft exterior with aluminum foil barrier",
                "Maximum oxygen and moisture protection (12-24+ months)",
                "Ideal for long shelf life requirements",
                "Superior light barrier properties",
                "Excellent aroma retention"
            ],
            "summary": "Perfect for premium coffee, freeze-dried foods, pharmaceuticals, probiotics, high-value supplements, aged cheeses, and any product requiring extended shelf life and maximum freshness protection."
        },
        "specifications": {
            "title": "Technical Specifications",
            "intro": "Our kraft high barrier structure provides industry-leading protection for the most demanding applications.",
            "structure": {
                "title": "Material Structure",
                "desc": "Kraft / Aluminum Foil / PE",
                "points": [
                    "100-140g premium kraft paper",
                    "25-40µm aluminum foil barrier",
                    "Multi-layer PE sealant (60-80µm)"
                ]
            },
            "properties": {
                "title": "Barrier Properties",
                "desc": "Maximum barrier performance",
                "points": [
                    "MVTR: < 0.5 g/m²/day",
                    "OTR: < 1.0 cc/m²/day",
                    "Shelf life: 12-24+ months"
                ]
            },
            "formats": {
                "title": "Available Formats",
                "points": [
                    "Stand-up pouches",
                    "Flat bottom bags",
                    "Quad seal bags",
                    "Brick pouches"
                ]
            },
            "premium": {
                "title": "Premium Features",
                "points": [
                    "Degassing valves",
                    "Child-resistant zippers",
                    "Laser scoring for easy open",
                    "Embossing & debossing"
                ]
            }
        },
        "applications": {
            "title": "Ideal Applications",
            "intro": "Kraft high barrier packaging is engineered for products requiring the highest level of protection and longest possible shelf life.",
            "items": [
                "Premium specialty coffee",
                "Single-origin coffee beans",
                "Pharmaceutical products",
                "Probiotics & enzymes",
                "Freeze-dried foods",
                "Emergency food rations",
                "High-value supplements",
                "Organic baby formula",
                "Aged cheese",
                "Medical cannabis",
                "Laboratory reagents",
                "Military MREs"
            ]
        },
        "advantages": {
            "title": "Advantages & Limitations",
            "bestForTitle": "Best For",
            "bestForPoints": [
                "Maximum shelf life (12-24+ months)",
                "Highly sensitive products",
                "Premium positioning",
                "Export markets requiring long transit",
                "Products requiring light barrier",
                "Pharmaceutical-grade protection"
            ],
            "considerationsTitle": "Considerations",
            "considerationsPoints": [
                "Higher material cost",
                "Aluminum layer not recyclable in standard streams",
                "Heavier weight increases shipping costs",
                "Higher MOQ typically required",
                "Longer lead times for production"
            ]
        },
        "scenarios": {
            "title": "Industry Applications",
            "intro": "Kraft high barrier packaging is the choice for products requiring maximum protection and longest shelf life:",
            "coffee": {
                "title": "Premium Coffee",
                "item1": "Single Origin: Preserve complex flavor profiles",
                "item2": "Aged/Reserve: 18-24 month storage",
                "item3": "Export: Long transit time protection",
                "note": "With degassing valve for freshly roasted"
            },
            "nutra": {
                "title": "Nutraceuticals",
                "item1": "Probiotics: Maximum moisture barrier",
                "item2": "Supplements: Preserve potency 24+ months",
                "item3": "Medical Cannabis: Child-resistant options",
                "note": "Pharmaceutical-grade protection"
            },
            "specialty": {
                "title": "Specialty Foods",
                "item1": "Freeze-Dried: Emergency food, camping",
                "item2": "Aged Cheese: Long maturation storage",
                "item3": "MREs: Military-grade shelf life",
                "note": "12-24+ month protection"
            },
            "stories": {
                "title": "Customer Success Stories",
                "roaster": {
                    "label": "Japanese Import Roaster",
                    "desc": "Uses kraft high barrier for 6-month ocean shipping. Zero quality degradation reported after 18 months of shelf life testing."
                },
                "probiotic": {
                    "label": "US Probiotic Brand",
                    "desc": "Switched to kraft/aluminum pouches. Lab tests confirmed 95% CFU viability at 24 months vs 70% in previous packaging."
                }
            }
        },
        "marketData": {
            "title": "Market & Performance Data",
            "metrics": {
                "mvtr": "MVTR (g/m²/day)",
                "otr": "OTR (cc/m²/day)",
                "shelfLife": "Months Shelf Life",
                "aluThickness": "μm Aluminum Foil"
            },
            "tableTitle": "Kraft Barrier Level Comparison",
            "headers": ["Property", "High Barrier", "Medium Barrier", "Low Barrier"],
            "rows": [
                ["Barrier Layer", "Aluminum Foil (25-40μm)", "Metallized Film", "PE Coating Only"],
                ["MVTR", "<0.5 g/m²/day ✓", "1-3 g/m²/day", "5-10 g/m²/day"],
                ["OTR", "<1 cc/m²/day ✓", "5-20 cc/m²/day", "100-200 cc/m²/day"],
                ["Shelf Life", "12-24+ months ✓", "6-12 months", "3-6 months"],
                ["Cost", "$$$", "$$", "$"]
            ],
            "impactTitle": "Maximum Protection Benefits",
            "impact": {
                "light": "Light barrier (opaque)",
                "aroma": "Aroma retention",
                "duration": "Months protection"
            }
        },
        "comparison": {
            "title": "Material Comparison",
            "intro": "Compare kraft high barrier with other kraft options and eco-alternatives:",
            "tableTitle": "Kraft Options Comparison",
            "headers": ["Criteria", "High Barrier", "Medium Barrier", "Low Barrier"],
            "rows": [
                ["Best For", "Max shelf life needs", "Coffee, nuts, snacks", "Bakery, dry goods"],
                ["Protection Level", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐"],
                ["Sustainability", "△ Aluminum not recyclable", "△ Limited recyclability", "✓ More recyclable"],
                ["Cost", "+30-50%", "+15-25%", "Baseline"]
            ],
            "decisionGuideTitle": "Quick Decision Guide",
            "chooseHigh": "Choose High Barrier if:",
            "highPoints": [
                "Need 12-24+ month shelf life",
                "Highly sensitive products",
                "Premium positioning justified"
            ],
            "chooseMedium": "Choose Medium Barrier if:",
            "mediumPoints": [
                "6-12 month shelf life sufficient",
                "Coffee, nuts, dried goods",
                "Learn more →"
            ],
            "chooseLow": "Choose Low Barrier if:",
            "lowPoints": [
                "3-6 month shelf life OK",
                "Sustainability priority",
                "Learn more →"
            ]
        },
        "quality": {
            "title": "Quality & Certifications",
            "intro": "Our kraft high barrier packaging meets the highest industry standards for food safety and quality."
        }
    }
}

new_medium_en = {
    "sections": {
        "overview": {
            "title": "Overview",
            "intro": "Kraft Medium Barrier packaging offers enhanced protection with metallized or aluminum layers, extending shelf life to 6-12 months for moderately sensitive products.",
            "keyFeaturesTitle": "Key Features",
            "features": [
                "Natural kraft exterior with enhanced barrier layers",
                "Medium oxygen and moisture protection (6-12 month shelf life)",
                "Ideal for coffee, nuts, dried fruits, and supplements",
                "Metallized or aluminum foil barrier options",
                "Premium aesthetic with functional performance"
            ],
            "summary": "Perfect for roasted coffee, premium snacks, dried fruits, protein powders, vitamins, organic nuts, and specialty teas requiring extended freshness."
        },
        "specifications": {
            "title": "Technical Specifications",
            "intro": "Our kraft medium barrier structure provides balanced protection for moderate shelf life requirements.",
            "structure": {
                "title": "Material Structure",
                "desc": "Kraft Paper / Metallized Layer / PE",
                "points": [
                    "80-120g kraft paper base",
                    "12-15µm metallized film or aluminum foil",
                    "Food-grade PE sealant layer"
                ]
            },
            "properties": {
                "title": "Barrier Properties",
                "desc": "Medium-high oxygen and moisture barrier",
                "points": [
                    "MVTR: 1-3 g/m²/day",
                    "OTR: 5-20 cc/m²/day",
                    "Shelf life: 6-12 months"
                ]
            },
            "formats": {
                "title": "Available Formats",
                "points": [
                    "Stand-up pouches with valve",
                    "Flat bottom bags",
                    "Side gusset bags",
                    "Quad seal bags"
                ]
            },
            "premium": {
                "title": "Special Features",
                "points": [
                    "Degassing valves for coffee",
                    "Resealable zippers",
                    "Tear notches",
                    "Spot UV printing"
                ]
            }
        },
        "applications": {
            "title": "Ideal Applications",
            "intro": "Kraft medium barrier is the sweet spot for products requiring moderate protection without the cost of high barrier materials.",
            "items": [
                "Roasted coffee beans",
                "Specialty ground coffee",
                "Premium loose leaf tea",
                "Roasted nuts & seeds",
                "Dried fruits",
                "Protein powders",
                "Superfood powders",
                "Nutritional supplements",
                "Energy bars",
                "Chocolate & cocoa",
                "Spice blends",
                "Artisan granola"
            ]
        },
        "advantages": {
            "title": "Advantages & Limitations",
            "bestForTitle": "Best For",
            "bestForPoints": [
                "Coffee and tea products",
                "6-12 month shelf life needs",
                "Moderately sensitive to oxygen/moisture",
                "Premium brand positioning",
                "Natural aesthetic with protection"
            ],
            "considerationsTitle": "Considerations",
            "considerationsPoints": [
                "Higher cost than low barrier",
                "Not suitable for very long shelf life (18+ months)",
                "Metallized layer reduces recyclability",
                "Requires proper storage conditions"
            ]
        },
        "scenarios": {
            "title": "Industry Applications",
            "intro": "Kraft medium barrier is the most popular choice for coffee roasters and premium food brands:",
            "coffee": {
                "title": "Coffee Roasters",
                "item1": "Specialty Coffee: 9-12 month freshness with valve",
                "item2": "Ground Coffee: Excellent aroma retention",
                "item3": "Third Wave: Premium craft aesthetic",
                "note": "Most popular choice for roasters"
            },
            "snacks": {
                "title": "Premium Snacks",
                "item1": "Roasted Nuts: Maintain crunch & freshness",
                "item2": "Dried Fruits: Preserve natural moisture",
                "item3": "Granola: Keep clusters crispy",
                "note": "Natural look + protection"
            },
            "wellness": {
                "title": "Health & Wellness",
                "item1": "Protein Powders: Keep dry & fresh",
                "item2": "Superfood Blends: Preserve nutrients",
                "item3": "Tea Blends: Aroma protection",
                "note": "Natural positioning for health brands"
            },
            "stories": {
                "title": "Customer Success Stories",
                "roaster": {
                    "label": "US Specialty Roaster",
                    "desc": "Kraft medium barrier with valve is our sweet spot - 9 month shelf life, beautiful craft look, and customers love the natural aesthetic."
                },
                "organic": {
                    "label": "EU Organic Snack Brand",
                    "desc": "Switched from plastic to kraft medium barrier. Sales up 20% - customers associate kraft with natural and organic."
                }
            }
        },
        "marketData": {
            "title": "Market & Performance Data",
            "metrics": {
                "mvtr": "MVTR (g/m²/day)",
                "otr": "OTR (cc/m²/day)",
                "shelfLife": "Months Shelf Life",
                "renewable": "Renewable Content"
            },
            "tableTitle": "Medium Barrier Structure Options",
            "headers": ["Structure", "Barrier Layer", "Shelf Life", "Best For"],
            "rows": [
                ["Kraft/MET PET/PE", "Metallized PET", "9-12 months", "Coffee, premium snacks"],
                ["Kraft/ALU/PE", "Thin Aluminum", "12 months", "Supplements, tea"],
                ["Kraft/VMPET/PE", "Vacuum Metallized", "6-9 months", "Nuts, dried fruits"]
            ],
            "impactTitle": "Why Brands Choose Medium Barrier",
            "impact": {
                "value": "Protection vs cost balance",
                "renewable": "Renewable kraft content",
                "roasterChoice": "Choice for coffee roasters"
            }
        },
        "comparison": {
            "title": "Material Comparison",
            "intro": "Compare kraft medium barrier with other options:",
            "tableTitle": "Kraft Barrier Options",
            "headers": ["Criteria", "Medium Barrier", "High Barrier", "Low Barrier"],
            "rows": [
                ["Ideal Products", "Coffee, nuts, snacks", "Pharma, freeze-dried", "Bakery, dry goods"],
                ["Shelf Life", "6-12 months", "12-24+ months", "3-6 months"],
                ["Value Rating", "⭐⭐⭐⭐⭐ Best", "⭐⭐⭐ Premium", "⭐⭐⭐⭐ Budget"],
                ["Sustainability", "⭐⭐⭐ (metallized)", "⭐⭐ (aluminum)", "⭐⭐⭐⭐⭐ (recyclable)"]
            ],
            "decisionGuideTitle": "💡 Quick Decision Guide",
            "chooseMedium": "Choose Medium Barrier if:",
            "mediumPoints": [
                "Coffee, nuts, or snacks",
                "6-12 month shelf life works",
                "Best value-protection balance"
            ],
            "chooseHigh": "Choose High Barrier if:",
            "highPoints": [
                "Need 12-24+ month shelf life",
                "Very sensitive products",
                "Learn more →"
            ],
            "chooseLow": "Choose Low Barrier if:",
                "lowPoints": [
                "3-6 month shelf life OK",
                "Sustainability priority",
                "Learn more →"
            ]
        },
        "sustainability": {
            "title": "Sustainability",
            "intro": "While medium barrier packaging includes barrier layers, it still maintains a lower environmental impact than traditional plastic packaging.",
            "renewable": {
                "title": "Renewable Content",
                "desc": "60-70% renewable kraft paper content from sustainable forests."
            },
            "reduced": {
                "title": "Reduced Plastic",
                "desc": "50% less plastic compared to all-plastic pouches."
            },
            "emissions": {
                "title": "Lower Emissions",
                "desc": "40-50% reduction in carbon footprint vs. plastic packaging."
            }
        }
    }
}

# Traditional Chinese data addition
new_high_zhtw = {
    "title": "高阻隔牛皮紙包裝袋 | 金屬鋁箔長效保鮮袋",
    "heroTitle": "極致牛皮質感，極佳避光防護",
    "heroSubtitle": "天然牛皮紙外觀，搭配高厚度鋁箔阻隔層。保質期高達 12-24 個月以上，專為精品咖啡、藥品和脫水食品設計。",
    "introSummary": "顧客喜愛的天然牛皮紙感，內部搭配醫藥級的高阻隔保護。為需要長效保鮮的精品產品提供兩全其美的包裝方案。",
    "faq": {
        "q1": "高阻隔牛皮紙袋能保鮮多久？",
        "a1": "根據產品類型與存儲環境，通常能維持 12-24 個月以上的保質期。其厚鋁箔層能實現對氧氣、水分和光線的極致阻隔，阻斷一切氧化可能。",
        "q2": "高阻隔牛皮紙袋是否值得更高的成本？",
        "a2": "對於精品高值產品、需長途外銷的海運產品或對保質期要求極高的品類，這無疑是最佳選擇。長效保鮮能降低庫存損耗、擴大分銷範圍並顯著提升品牌檔次。",
        "q3": "這款包裝可以用於醫藥產品嗎？",
        "a3": "可以。我們的高阻隔牛皮紙袋完全符合醫藥級包裝要求。我們可以為受監管產品提供所有必要的合規證書和技術文件。",
        "q4": "高阻隔牛皮紙袋最適合哪種印刷方式？",
        "a4": "由於這類高阻隔材料的起訂量通常較高 (5,000-10,000 個起)，銅版印刷是最經濟高效的解決方案。我們也為小批量測試提供高端數位印刷服務。"
    },
    "cta": {
        "title": "討論您的高阻隔包裝需求",
        "description": "讓我們為您的高價值產品量身打造具備極佳防護力的精品牛皮紙袋。",
        "button": "獲取報價"
    },
    "sections": {
        "overview": {
            "title": "材料概述",
            "intro": "高阻隔牛皮紙包裝採用高厚度的金屬鋁箔層，為對氧氣和水分極為敏感、且需要 12-24 個月以上保質期的產品提供最頂級的避光密封保護。",
            "keyFeaturesTitle": "核心優勢",
            "features": [
                "精品級天然牛皮紙外觀，搭配金屬鋁箔阻隔",
                "極佳的防潮防氧氣阻隔效能 (12-24+ 個月保質期)",
                "專為超長貨架期和外銷出口產品設計",
                "100% 避光性，有效防止油脂氧化變質",
                "極佳的香氣留存性能，鎖住複雜風味"
            ],
            "summary": "非常適合精品咖啡、冷凍乾燥食品、藥品、益生菌、高值保健品、成熟乾酪以及任何需要最頂級密封新鮮保護的產品。"
        },
        "specifications": {
            "title": "技術規格參數",
            "intro": "我們的高阻隔牛皮紙結構為最嚴苛的包裝應用提供行業領先的保護。",
            "structure": {
                "title": "複合材料結構",
                "desc": "牛皮紙 / 鋁箔 / PE 密封層",
                "points": [
                    "100-140g 進口精品牛皮紙",
                    "25-40µm 厚度純鋁箔阻隔層",
                    "食品級多層 PE 熱封層 (60-80µm)"
                ]
            },
            "properties": {
                "title": "阻隔效能指標",
                "desc": "極致防潮防氧性能",
                "points": [
                    "水汽透過率 (MVTR): < 0.5 g/m²/天",
                    "氧氣透過率 (OTR): < 1.0 cc/m²/天",
                    "保質期效應: 12-24 個月以上"
                ]
            },
            "formats": {
                "title": "推薦袋型款式",
                "points": [
                    "立式拉鏈袋 (Stand-up Pouch)",
                    "平底八邊封袋 (Flat Bottom Bag)",
                    "風琴袋 (Quad Seal Bag)",
                    "真空方底袋"
                ]
            },
            "premium": {
                "title": "客製化附加功能",
                "points": [
                    "單向排氣閥 (帶過濾網)",
                    "防童拉鏈/安全鎖",
                    "激光易撕線",
                    "局部打凸與燙金工藝"
                ]
            }
        },
        "applications": {
            "title": "理想應用場景",
            "intro": "高阻隔牛皮紙包裝專為對新鮮度要求極高、且保質期在一年以上的產品而研發。",
            "items": [
                "精品產區單一源咖啡豆",
                "掛耳咖啡與咖啡粉外包裝",
                "醫藥級沖劑與片劑",
                "高活益生菌與酶製劑",
                "冷凍乾燥戶外/應急食品",
                "高值膳食補充劑與蛋白粉",
                "嬰幼兒有機配方奶粉",
                "熟成奶酪與乳製品",
                "藥用植物與草本配方",
                "精密實驗室診斷試劑",
                "特種野戰單兵口糧"
            ]
        },
        "advantages": {
            "title": "優勢與局限性",
            "bestForTitle": "最適合應用",
            "bestForPoints": [
                "需要 12-24 個月以上極長貨架期的產品",
                "對光、水分、氧氣極度敏感的產品",
                "走高端精品路線的品牌定位",
                "遠途國際海運出口貿易",
                "需要 100% 避光的油脂類食品",
                "醫藥級別的安全衛生防護"
            ],
            "considerationsTitle": "注意事項",
            "considerationsPoints": [
                "材料成本高於中低阻隔方案",
                "金屬鋁箔層無法在常規塑料流中回收",
                "包裝克重較大，微幅增加運輸成本",
                "通常起訂量較高 (MOQ 較大)",
                "生產加工工藝較為複雜，交期略長"
            ]
        },
        "scenarios": {
            "title": "行業應用案例",
            "intro": "對於需要極佳防護和超長保質期的精品品牌，高阻隔牛皮紙是公認的最高標準：",
            "coffee": {
                "title": "精品咖啡",
                "item1": "單一產區：完整鎖住複雜迷人的風味層次",
                "item2": "熟成/限量：支持 18 至 24 個月長效儲藏",
                "item3": "外銷外貿：為長時間海運物流保駕護航",
                "note": "可配置單向氣閥釋放 freshly roasted 氣體"
            },
            "nutra": {
                "title": "保健與膳食補充劑",
                "item1": "益生菌：防潮要求極高以確保菌群活性",
                "item2": "補充劑：保證活性成分 24 個月不降解",
                "item3": "特殊藥用：可選防童安全拉鏈配置",
                "note": "提供醫藥級的無菌防潮保護"
            },
            "specialty": {
                "title": "特種食品",
                "item1": "凍乾食品：應急救援與野外露營餐",
                "item2": "熟成乾酪：長效成熟存儲",
                "item3": "單兵口糧：軍工級別超長貨架壽命",
                "note": "提供 12 至 24 個月以上的極致密封"
            },
            "stories": {
                "title": "客戶成功案例",
                "roaster": {
                    "label": "日本精品進口烘焙商",
                    "desc": "採用高阻隔牛皮紙袋應對長達 6 個月的跨洋海運。經 18 個月貨架測試，咖啡品質依然完美如初，零變質反饋。"
                },
                "probiotic": {
                    "label": "美國高值益生菌品牌",
                    "desc": "改用牛皮紙/純鋁箔複合袋。實驗室檢測證實，在 24 個月時菌群活性依舊保持在 95% 以上，顯著高於前包裝的 70%。"
                }
            }
        },
        "marketData": {
            "title": "市場與性能數據",
            "metrics": {
                "mvtr": "水汽透過率 (g/m²/day)",
                "otr": "氧氣透過率 (cc/m²/day)",
                "shelfLife": "最長保質期表現",
                "aluThickness": "阻隔層鋁箔厚度"
            },
            "tableTitle": "牛皮紙袋阻隔級別性能對比",
            "headers": ["性能指標", "高阻隔 (High)", "中阻隔 (Medium)", "低阻隔 (Low)"],
            "rows": [
                ["阻隔材料", "純鋁箔層 (25-40μm)", "鍍鋁薄膜 (VMPET)", "純 PE 淋膜保護"],
                ["水汽透過率 (MVTR)", "<0.5 g/m²/day ✓", "1-3 g/m²/day", "5-10 g/m²/day"],
                ["氧氣透過率 (OTR)", "<1 cc/m²/day ✓", "5-20 cc/m²/day", "100-200 cc/m²/day"],
                ["建議保質期", "12-24 個月以上 ✓", "6-12 個月", "3-6 個月"],
                ["成本區間", "高 ($$$)", "中 ($$)", "低 ($)"]
            ],
            "impactTitle": "極致防護效能優勢",
            "impact": {
                "light": "100% 遮光率 (不透光)",
                "aroma": "風味香氣留存率高達 99%",
                "duration": "兩年以上的超長效防護"
            }
        },
        "comparison": {
            "title": "材料性能對比",
            "intro": "對比高阻隔牛皮紙與其他牛皮紙規格及綠色包裝方案：",
            "tableTitle": "牛皮紙包裝規格對比",
            "headers": ["評估維度", "高阻隔 (High)", "中阻隔 (Medium)", "低阻隔 (Low)"],
            "rows": [
                ["最佳適用", "超長貨架期與高敏感產品", "精品咖啡、堅果、零食乾貨", "烘焙麵包、即食食品"],
                ["防護級別", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐"],
                ["環保回收性", "△ 純鋁箔層不便直接回收", "△ 鍍鋁層回收受限", "✓ 淋膜紙回收性較佳"],
                ["成本溢價", "+30-50%", "+15-25%", "基準基準"]
            ],
            "decisionGuideTitle": "快速決策指南",
            "chooseHigh": "符合以下情況時，請選擇高阻隔：",
            "highPoints": [
                "產品需要 12-24 個月以上的超長保質期",
                "對氧氣、水分、光照極度敏感的產品",
                "精品高端定位，能夠承擔對應的包裝成本"
            ],
            "chooseMedium": "符合以下情況時，請選擇中阻隔：",
            "mediumPoints": [
                "保質期需求在 6-12 個月以內",
                "包裝精品咖啡、堅果、果乾等常見食品",
                "了解更多詳情 →"
            ],
            "chooseLow": "符合以下情況時，請選擇低阻隔：",
            "lowPoints": [
                "保質期需求在 3-6 個月以內",
                "將綠色環保與可回收性置於首位",
                "了解更多詳情 →"
            ]
        },
        "quality": {
            "title": "質量標準與認證",
            "intro": "我們的高阻隔牛皮紙包裝完全符合食品包裝安全及各項國際質量管理認證。"
        }
    }
}

new_medium_zhtw = {
    "title": "中阻隔牛皮紙包裝袋 | 精品咖啡茶葉專用複合袋",
    "heroTitle": "精品咖啡與食品的黃金搭檔",
    "heroSubtitle": "天然牛皮紙質感外觀，內嵌高品質鍍鋁防護層。為咖啡、堅果及手作食品提供 6-12 個月的極佳保鮮期。",
    "introSummary": "咖啡烘焙商最喜愛的牛皮紙包裝選擇。外觀呈現天然手作質感，內部具備出色的防潮防氧氣阻隔性能。可配置單向排氣閥。",
    "faq": {
        "q1": "中阻隔與高阻隔牛皮紙袋有什麼具體差別？",
        "a1": "中阻隔採用厚度較薄的鍍鋁薄膜（VMPET/MET-PET，約 12-15µm）作為阻隔層，提供 6-12 個月的保質期；高阻隔則採用較厚的純鋁箔層（25-40µm），能為敏感產品提供 12-24 個月以上的極致避光防護。",
        "q2": "中阻隔牛皮紙袋適合包裝咖啡豆嗎？",
        "a2": "非常適合！對於目標保質期在 6-9 個月左右的烘焙咖啡豆，這是性價比最高的選擇。我們可以加裝高品質的單向排氣閥，在阻隔外界氧氣進入的同時，順暢釋放咖啡豆自身產生的二氧化碳。",
        "q3": "鍍鋁複合層可以回收嗎？",
        "a3": "牛皮紙部分是可以再生的，但鍍鋁阻隔層在某些地區可能需要送往專門的軟包裝回收設施。我們建議根據當地的廢物分類標準進行投放引導。",
        "q4": "有哪些印刷工藝可選？",
        "a4": "我們提供數位印刷（MOQ 低至 500 個起）與銅版印刷（MOQ 5,000 個起）兩種方式。牛皮紙表面吸墨性佳，非常適合呈現復古、極簡或高質感的圖案。"
    },
    "cta": {
        "title": "啟動您的精品包裝項目",
        "description": "讓我們為您的產品定製兼具手作質感與專業保護的精品牛皮紙複合袋。",
        "button": "獲取報價"
    },
    "sections": {
        "overview": {
            "title": "材料概述",
            "intro": "中阻隔牛皮紙包裝採用內嵌鍍鋁阻隔層結構，有效阻隔氧氣、濕氣與光線，能為中等敏感度產品提供 6-12 個月的新鮮保鮮期。",
            "keyFeaturesTitle": "核心優勢",
            "features": [
                "天然牛皮紙外觀，帶有高質感的藝術氣質",
                "中等防潮防氧效能 (6-12 個月保質期)",
                "非常適合精品咖啡、堅果、果乾和各類粉劑",
                "可選配高效鍍鋁薄膜或超薄鋁箔阻隔",
                "在保持高性價比的同時，具備高端包裝質感"
            ],
            "summary": "完美適用於烘焙咖啡豆、精品零食、精緻果乾、蛋白粉、複合維生素、有機堅果及各類需要長效保香的茶品。"
        },
        "specifications": {
            "title": "技術規格參數",
            "intro": "我們的中阻隔牛皮紙複合結構，在成本與保鮮性能之間達到了極佳的平衡。",
            "structure": {
                "title": "複合材料結構",
                "desc": "牛皮紙 / 鍍鋁薄膜 / 食品級 PE 內膜",
                "points": [
                    "80-120g 高強度牛皮紙基材",
                    "12-15µm 鍍鋁聚酯薄膜 (VMPET / MET PET)",
                    "食品級安全 PE 內密封層"
                ]
            },
            "properties": {
                "title": "阻隔效能指標",
                "desc": "優異的防潮防氧性能",
                "points": [
                    "水汽透過率 (MVTR): 1-3 g/m²/天",
                    "氧氣透過率 (OTR): 5-20 cc/m²/天",
                    "保質期效應: 6-12 個月"
                ]
            },
            "formats": {
                "title": "推薦袋型款式",
                "points": [
                    "立式袋 (自立拉鏈袋 - Stand-up Pouches)",
                    "平底方底袋 (八邊封袋 - Flat Bottom)",
                    "側風琴摺邊袋 (Side Gusset)",
                    "四邊封袋 (Quad Seal)"
                ]
            },
            "premium": {
                "title": "客製化加工工藝",
                "points": [
                    "Wipf 或 AP 自主高效單向排氣閥",
                    "易撕拉鏈 / 可復合拉鏈",
                    "U型易撕口",
                    "局部亮光 Spot UV / 特殊油墨印刷"
                ]
            }
        },
        "applications": {
            "title": "理想應用場景",
            "intro": "中阻隔牛皮紙非常適合需要良好保護、且預算可控的各類中等保質期包裝應用。",
            "items": [
                "熟咖啡豆與掛耳咖啡",
                "精品現磨咖啡粉",
                "散裝精品綠茶與紅茶葉",
                "烤堅果、開心果及瓜子",
                "無添加自然脫水烘乾果乾",
                "乳清蛋白粉及代餐粉",
                "有機超級食物與薑黃粉",
                "維生素及膳食營養片劑",
                "能量棒與燕麥穀物棒",
                "手工巧克力與可可粉",
                "複合香料與調味鹽",
                "手作燕麥片與麥片圈"
            ]
        },
        "advantages": {
            "title": "優勢與局限性",
            "bestForTitle": "最適合應用",
            "bestForPoints": [
                "咖啡、茶葉及各類乾貨休閒食品",
                "保質期要求在 6-12 個月以內的產品",
                "對水分及氧氣中度敏感的品類",
                "突出天然、環保、有機的品牌調性",
                "追求高性價比的高端包裝展示"
            ],
            "considerationsTitle": "注意事項",
            "considerationsPoints": [
                "成本略高於無阻隔的純 PE 淋膜紙袋",
                "不適合保質期在 18 個月以上的極敏感產品",
                "內嵌鍍鋁阻隔層限制了直接紙張再生",
                "在潮濕環境中需注意合適的倉儲保管"
            ]
        },
        "scenarios": {
            "title": "行業應用案例",
            "intro": "中阻隔牛皮紙包裝是全球精品咖啡烘焙商和天然零食品牌的首選解決方案：",
            "coffee": {
                "title": "咖啡烘焙商",
                "item1": "精品豆：搭配單向氣閥，提供 9-12 個月的絕佳風味",
                "item2": "咖啡粉：出色的防潮性能與香氣鎖定能力",
                "item3": "第三波咖啡：傳遞自然、質樸、專業的職人手感",
                "note": "烘焙商使用率最高的最暢銷款式"
            },
            "snacks": {
                "title": "精品零食乾貨",
                "item1": "香脆堅果：防止油脂接觸空氣後哈喇變質",
                "item2": "精緻果乾：鎖住自然糖分與適度水分",
                "item3": "燕麥穀物：保持穀物乾爽鬆脆",
                "note": "天然牛皮質感外觀與防護的完美結合"
            },
            "wellness": {
                "title": "健康與輕食保健",
                "item1": "蛋白粉：防止粉劑受潮結塊變質",
                "item2": "超級食物：有效保護抗氧化劑與營養素",
                "item3": "草本花茶：極佳的草本香氣阻隔",
                "note": "為大健康與天然護理品牌量身定製"
            },
            "stories": {
                "title": "客戶成功案例",
                "roaster": {
                    "label": "美國精品咖啡烘焙商",
                    "desc": "「帶排氣閥的中阻隔牛皮紙袋完全是我們的救星 - 9 個月的保鮮期，極美的手作質感，客人都覺得這款包裝非常環保且高端。」"
                },
                "organic": {
                    "label": "歐盟有機零食品牌",
                    "desc": "將傳統塑料袋換為中阻隔牛皮紙袋。銷量提升了 20% - 數據表明，消費者本能地會將牛皮紙與『健康、有機、無添加』聯繫在一起。"
                }
            }
        },
        "marketData": {
            "title": "市場與性能數據",
            "metrics": {
                "mvtr": "水汽透過率 (g/m²/day)",
                "otr": "氧氣透過率 (cc/m²/day)",
                "shelfLife": "最長保質期表現",
                "renewable": "生物基可再生材質比例"
            },
            "tableTitle": "中阻隔牛皮紙包裝材質選型",
            "headers": ["材料複合結構", "阻隔夾層", "建議保質期", "最佳包裝品類"],
            "rows": [
                ["牛皮紙/MET PET/PE", "鍍鋁聚酯薄膜", "9-12 個月", "烘焙咖啡豆、精品零食"],
                ["牛皮紙/ALU/PE", "超薄金屬鋁箔", "12 個月", "營養膳食片劑、精品茶包"],
                ["牛皮紙/VMPET/PE", "真空真空噴鋁膜", "6-9 個月", "風味腰果、脫水果乾"]
            ],
            "impactTitle": "為什麼品牌首選中阻隔包裝",
            "impact": {
                "value": "性能與成本的完美平衡點",
                "renewable": "60-70% 的天然纖維素比例",
                "roasterChoice": "全球精品烘焙商的一致選擇"
            }
        },
        "comparison": {
            "title": "材料性能對比",
            "intro": "將中阻隔牛皮紙與其他牛皮紙包裝規格進行對比：",
            "tableTitle": "牛皮紙袋規格對比",
            "headers": ["評估維度", "中阻隔 (Medium)", "高阻隔 (High)", "低阻隔 (Low)"],
            "rows": [
                ["理想適用產品", "咖啡豆、堅果、休閒零食", "醫藥製劑、脫水凍乾食品", "即食烘焙、茶餅麵包"],
                ["保質期防護", "6-12 個月", "12-24 個月以上", "3-6 個月"],
                ["性價比評級", "⭐⭐⭐⭐⭐ 最佳平衡", "⭐⭐⭐ 精品高端", "⭐⭐⭐⭐ 經濟實用"],
                ["環保評估", "⭐⭐⭐ (鍍鋁複合)", "⭐⭐ (鋁箔複合)", "⭐⭐⭐⭐⭐ (無阻隔易降解)"]
            ],
            "decisionGuideTitle": "快速決策指南",
            "chooseMedium": "符合以下情況時，請選擇中阻隔：",
            "mediumPoints": [
                "主要包裝咖啡、堅果或日常乾貨食品",
                "產品保質期要求在 6-12 個月以內",
                "在有限包裝預算內追求最佳的質美雙全"
            ],
            "chooseHigh": "符合以下情況時，請選擇高阻隔：",
            "highPoints": [
                "需要 12-24 個月以上的超長保質期",
                "對水分和氧氣極度敏感的產品",
                "了解更多詳情 →"
            ],
            "chooseLow": "符合以下情況時，請選擇低阻隔：",
            "lowPoints": [
                "保質期僅需 3-6 個月以內",
                "綠色環保、無塑或高降解可回收是核心",
                "了解更多詳情 →"
            ]
        },
        "sustainability": {
            "title": "環境永續發展",
            "intro": "雖然中阻隔包裝含有阻隔薄膜，但由於天然紙漿比例高，其整體碳排放與環境足跡仍顯著低於傳統全塑料袋。",
            "renewable": {
                "title": "可再生材料",
                "desc": "含有 60-70% 來自永續森林認證 (FSC) 的天然牛皮紙。"
            },
            "reduced": {
                "title": "減少塑料用量",
                "desc": "相比傳統全塑料自立袋，化石塑料用量減少了 50% 以上。"
            },
            "emissions": {
                "title": "低碳足跡排放",
                "desc": "相比常規石化全塑包裝，其碳足跡減少了 40-50% 左右。"
            }
        }
    }
}

# Merge spanish and french dictionaries by deep merge
# To keep this script clean and avoid massive size, we can load the existing es.json and fr.json,
# translate using our structured data (similarly structured to zhtw/en), and run the merge.
# We will define es and fr translations for High and Medium here.

new_high_es = {
    "title": "Envases de Papel Kraft de Alta Barrera | Bolsas Premium de Larga Duración",
    "heroTitle": "Aspecto Kraft, Máxima Protección",
    "heroSubtitle": "Estética kraft premium con barrera de aluminio. Vida útil de 12-24 meses para café de especialidad, pharma y alimentos premium.",
    "introSummary": "El aspecto kraft natural que encanta a los clientes, con protección de grado farmacéutico debajo. Lo mejor de ambos mundos para productos premium que necesitan una vida útil prolongada.",
    "faq": {
        "q1": "¿Cuánto tiempo se pueden mantener frescos los productos en envases kraft de alta barrera?",
        "a1": "Los productos pueden mantener su frescura durante 12-24+ meses dependiendo del tipo de producto y las condiciones de almacenamiento. La barrera de papel de aluminio proporciona la máxima protección.",
        "q2": "¿Vale la pena el costo adicional del envase kraft de alta barrera?",
        "a2": "Para productos premium, requisitos de larga vida útil o mercados de exportación, absolutamente. La vida útil extendida reduce el desperdicio y aumenta el valor percibido.",
        "q3": "¿Se puede utilizar este envase para productos farmacéuticos?",
        "a3": "Sí, nuestros envases kraft de alta barrera cumplen con los requisitos de grado farmacéutico. Podemos proporcionar todas las certificaciones y documentación necesarias.",
        "q4": "¿Qué opciones de impresión funcionan mejor en kraft de alta barrera?",
        "a4": "La impresión con planchas proporciona la solución más rentable para grandes tiradas debido a los MOQs típicos (5.000-10.000 unidades). La impresión digital está disponible para tiradas más cortas."
    },
    "cta": {
        "title": "Hable de sus necesidades de envase de alta barrera",
        "description": "Creemos envases kraft premium con la máxima protección para sus productos de alto valor.",
        "button": "Solicitar una cotización"
    },
    "sections": {
        "overview": {
            "title": "Descripción general",
            "intro": "El envase de Papel Kraft de Alta Barrera cuenta con capas gruesas de papel de aluminio que brindan la máxima protección para productos sensibles al oxígeno y la humedad que requieren una vida útil de 12-24+ meses.",
            "keyFeaturesTitle": "Características clave",
            "features": [
                "Exterior de kraft premium con barrera de papel de aluminio",
                "Máxima protección contra el oxígeno y la humedad (12-24+ meses)",
                "Ideal para requisitos de larga vida útil",
                "Propiedades superiores de barrera a la luz",
                "Excelente retención de aroma"
            ],
            "summary": "Perfecto para café premium, alimentos liofilizados, productos farmacéuticos, probióticos, suplementos de alto valor, quesos curados y cualquier producto que requiera una vida útil prolongada y la máxima protección de la frescura."
        },
        "specifications": {
            "title": "Especificaciones técnicas",
            "intro": "Nuestra estructura kraft de alta barrera proporciona una protección líder en la industria para las aplicaciones más exigentes.",
            "structure": {
                "title": "Estructura del material",
                "desc": "Kraft / Papel de Aluminio / PE",
                "points": [
                    "Papel kraft premium de 100-140g",
                    "Barrera de papel de aluminio de 25-40µm",
                    "Sellador de PE multicapa (60-80µm)"
                ]
            },
            "properties": {
                "title": "Propiedades de barrera",
                "desc": "Máximo rendimiento de barrera",
                "points": [
                    "MVTR: < 0.5 g/m²/día",
                    "OTR: < 1.0 cc/m²/día",
                    "Vida útil: 12-24+ meses"
                ]
            },
            "formats": {
                "title": "Formatos disponibles",
                "points": [
                    "Bolsas stand-up",
                    "Bolsas de fondo plano",
                    "Bolsas de sellado cuádruple",
                    "Bolsas de ladrillo"
                ]
            },
            "premium": {
                "title": "Características premium",
                "points": [
                    "Válvulas desgasificadoras",
                    "Cremalleras resistentes a los niños",
                    "Marcado láser para apertura fácil",
                    "Relieve y bajorrelieve"
                ]
            }
        },
        "applications": {
            "title": "Aplicaciones ideales",
            "intro": "El envase kraft de alta barrera está diseñado para productos que requieren el más alto nivel de protección y la vida útil más larga posible.",
            "items": [
                "Café de especialidad premium",
                "Granos de café de origen único",
                "Productos farmacéuticos",
                "Probióticos y enzimas",
                "Alimentos liofilizados",
                "Raciones de alimentos de emergencia",
                "Suplementos de alto valor",
                "Fórmula orgánica para bebés",
                "Queso curado",
                "Cannabis medicinal",
                "Reactivos de laboratorio",
                "MRE militares"
            ]
        },
        "advantages": {
            "title": "Ventajas y limitaciones",
            "bestForTitle": "Ideal para",
            "bestForPoints": [
                "Máxima vida útil (12-24+ meses)",
                "Productos altamente sensibles",
                "Posicionamiento premium",
                "Mercados de exportación que requieren tránsitos largos",
                "Productos que requieren barrera a la luz",
                "Protección de grado farmacéutico"
            ],
            "considerationsTitle": "Consideraciones",
            "considerationsPoints": [
                "Mayor costo de material",
                "La capa de aluminio no es reciclable en flujos estándar",
                "El peso más pesado aumenta los costos de envío",
                "Típicamente se requiere un MOQ más alto",
                "Tiempos de entrega más largos para la producción"
            ]
        },
        "scenarios": {
            "title": "Aplicaciones de la industria",
            "intro": "El envase kraft de alta barrera es la elección para productos que requieren la máxima protección y la vida útil más larga:",
            "coffee": {
                "title": "Café Premium",
                "item1": "Origen único: preserve perfiles de sabor complejos",
                "item2": "Envejecido/Reserva: almacenamiento de 18-24 meses",
                "item3": "Exportación: protección para largos tiempos de tránsito",
                "note": "Con válvula desgasificadora para recién tostado"
            },
            "nutra": {
                "title": "Nutracéuticos",
                "item1": "Probióticos: máxima barrera contra la humedad",
                "item2": "Suplementos: preserve la potencia durante más de 24 meses",
                "item3": "Cannabis medicinal: opciones a prueba de niños",
                "note": "Protección de grado farmacéutico"
            },
            "specialty": {
                "title": "Alimentos de especialidad",
                "item1": "Liofilizados: alimentos de emergencia, camping",
                "item2": "Queso curado: almacenamiento de maduración prolongada",
                "item3": "MRE: vida útil de grado militar",
                "note": "Protección de 12-24+ meses"
            },
            "stories": {
                "title": "Casos de éxito de clientes",
                "roaster": {
                    "label": "Tostador de importación de Japón",
                    "desc": "Utiliza kraft de alta barrera para envío marítimo de 6 meses. Cero degradación de calidad reportada después de 18 meses de pruebas."
                },
                "probiotic": {
                    "label": "Marca de probióticos de EE. UU.",
                    "desc": "Cambió a bolsas de kraft/aluminio. Pruebas confirmaron 95% de viabilidad de UFC a los 24 meses frente al 70% del envase anterior."
                }
            }
        },
        "marketData": {
            "title": "Datos de mercado y rendimiento",
            "metrics": {
                "mvtr": "MVTR (g/m²/día)",
                "otr": "OTR (cc/m²/día)",
                "shelfLife": "Vida útil en meses",
                "aluThickness": "μm Papel de aluminio"
            },
            "tableTitle": "Comparación del nivel de barrera Kraft",
            "headers": ["Propiedad", "Alta barrera", "Media barrera", "Baja barrera"],
            "rows": [
                ["Capa de barrera", "Papel de aluminio (25-40μm)", "Película metalizada", "Solo revestimiento de PE"],
                ["MVTR", "<0.5 g/m²/día ✓", "1-3 g/m²/day", "5-10 g/m²/day"],
                ["OTR", "<1 cc/m²/día ✓", "5-20 cc/m²/day", "100-200 cc/m²/day"],
                ["Vida útil", "12-24+ meses ✓", "6-12 meses", "3-6 meses"],
                ["Costo", "$$$", "$$", "$"]
            ],
            "impactTitle": "Beneficios de máxima protección",
            "impact": {
                "light": "Barrera a la luz (opaca)",
                "aroma": "Retención de aroma",
                "duration": "Meses de protección"
            }
        },
        "comparison": {
            "title": "Comparación de materiales",
            "intro": "Compare kraft de alta barrera con otras opciones kraft y alternativas ecológicas:",
            "tableTitle": "Comparación de opciones Kraft",
            "headers": ["Criterio", "Alta barrera", "Media barrera", "Baja barrera"],
            "rows": [
                ["Ideal para", "Necesidades de vida útil máxima", "Café, frutos secos, snacks", "Panadería, productos secos"],
                ["Nivel de protección", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐"],
                ["Sostenibilidad", "△ Aluminio no reciclable", "△ Reciclabilidad limitada", "✓ Más reciclable"],
                ["Costo", "+30-50%", "+15-25%", "Línea base"]
            ],
            "decisionGuideTitle": "Guía de decisión rápida",
            "chooseHigh": "Elija alta barrera si:",
            "highPoints": [
                "Necesita una vida útil de 12-24+ meses",
                "Productos altamente sensibles",
                "Posicionamiento premium justificado"
            ],
            "chooseMedium": "Elija media barrera si:",
            "mediumPoints": [
                "Vida útil de 6-12 meses suficiente",
                "Café, frutos secos, alimentos deshidratados",
                "Saber más →"
            ],
            "chooseLow": "Elija baja barrera si:",
            "lowPoints": [
                "Vida útil de 3-6 meses suficiente",
                "Prioridad de sostenibilidad",
                "Saber más →"
            ]
        },
        "quality": {
            "title": "Calidad y Certificaciones",
            "intro": "Nuestros envases kraft de alta barrera cumplen con los más altos estándares para la seguridad alimentaria y calidad."
        }
    }
}

new_medium_es = {
    "title": "Envases Kraft de Media Barrera | Bolsas de Café y Alimentos Premium",
    "heroTitle": "El mejor amigo del café artesanal",
    "heroSubtitle": "Exterior kraft, protección metalizada en el interior. Vida útil de 6-12 meses para café, frutos secos y alimentos artesanales.",
    "introSummary": "La opción kraft más popular para tostadores de café. Aspecto artesanal natural por fuera, protección de barrera real por dentro. Funciona con válvulas desgasificadoras.",
    "faq": {
        "q1": "¿Cuál es la diferencia entre envases kraft de media y alta barrera?",
        "a1": "La media barrera utiliza capas metalizadas más delgadas (12-15µm) que ofrecen una vida útil de 6-12 meses, mientras que la alta barrera utiliza aluminio grueso (25-40µm) para más de 12-24 meses.",
        "q2": "¿Puedo utilizar kraft de media barrera para envasar café?",
        "a2": "¡Sí! Es ideal para café con objetivos de vida útil de 6-9 meses. Podemos agregar válvulas desgasificadoras para liberar el CO2.",
        "q3": "¿Es reciclable la capa metalizada?",
        "a3": "El papel kraft se puede reciclar, pero las capas metalizadas pueden requerir instalaciones de reciclaje especializadas. Recomendamos verificar localmente.",
        "q4": "¿Qué opciones de impresión están disponibles?",
        "a4": "Tanto la impresión digital (MOQ de 500+) como la de planchas (MOQ de 5.000+) están disponibles. El papel kraft proporciona una excelente adhesión de tinta."
    },
    "cta": {
        "title": "Comience su proyecto de envase de café",
        "description": "Creemos envases kraft premium que protejan sus productos y muestren los valores de su marca.",
        "button": "Solicitar una cotización"
    },
    "sections": {
        "overview": {
            "title": "Descripción general",
            "intro": "El envase de Papel Kraft de Media Barrera ofrece una protección mejorada con capas metalizadas, extendiendo la vida útil a 6-12 meses para productos moderadamente sensibles.",
            "keyFeaturesTitle": "Características clave",
            "features": [
                "Exterior kraft natural con capas de barrera mejoradas",
                "Protección media contra el oxígeno y la humedad (6-12 meses de vida útil)",
                "Ideal para café, frutos secos, frutas deshidratadas y suplementos",
                "Opciones de barrera metalizada o papel de aluminio",
                "Estética premium con rendimiento funcional"
            ],
            "summary": "Perfecto para café tostado, snacks premium, frutas deshidratadas, proteínas en polvo, vitaminas, frutos secos orgánicos y tés de especialidad que requieren frescura extendida."
        },
        "specifications": {
            "title": "Especificaciones técnicas",
            "intro": "Nuestra estructura kraft de media barrera proporciona una protección equilibrada para requisitos de vida útil moderada.",
            "structure": {
                "title": "Estructura del material",
                "desc": "Papel Kraft / Capa Metalizada / PE",
                "points": [
                    "Base de papel kraft de 80-120g",
                    "Película metalizada o papel de aluminio de 12-15µm",
                    "Capa de sellado de PE de grado alimentario"
                ]
            },
            "properties": {
                "title": "Propiedades de barrera",
                "desc": "Barrera media-alta contra el oxígeno y la humedad",
                "points": [
                    "MVTR: 1-3 g/m²/día",
                    "OTR: 5-20 cc/m²/día",
                    "Vida útil: 6-12 meses"
                ]
            },
            "formats": {
                "title": "Formatos disponibles",
                "points": [
                    "Bolsas stand-up con válvula",
                    "Bolsas de fondo plano",
                    "Bolsas de fuelle lateral",
                    "Bolsas de sellado cuádruple"
                ]
            },
            "premium": {
                "title": "Características especiales",
                "points": [
                    "Válvulas desgasificadoras para café",
                    "Cremalleras resellables",
                    "Muescas de desgarro",
                    "Impresión UV localizada"
                ]
            }
        },
        "applications": {
            "title": "Aplicaciones ideales",
            "intro": "La media barrera kraft es el punto óptimo para productos que requieren protección moderada sin el costo de los materiales de alta barrera.",
            "items": [
                "Granos de café tostados",
                "Café molido de especialidad",
                "Té premium de hoja suelta",
                "Frutos secos y semillas tostados",
                "Frutas deshidratadas",
                "Proteínas en polvo",
                "Superalimentos en polvo",
                "Suplementos nutricionales",
                "Barras de energía",
                "Chocolate y cacao",
                "Mezclas de especias",
                "Granola artesanal"
            ]
        },
        "advantages": {
            "title": "Ventajas y limitaciones",
            "bestForTitle": "Ideal para",
            "bestForPoints": [
                "Productos de café y té",
                "Necesidades de vida útil de 6-12 meses",
                "Moderadamente sensibles al oxígeno/humedad",
                "Posicionamiento premium de marca",
                "Estética natural con protección"
            ],
            "considerationsTitle": "Consideraciones",
            "considerationsPoints": [
                "Costo más alto que la baja barrera",
                "No apto para vida útil muy larga (más de 18 meses)",
                "La capa metalizada reduce la reciclabilidad",
                "Requiere condiciones adecuadas de almacenamiento"
            ]
        },
        "scenarios": {
            "title": "Aplicaciones de la industria",
            "intro": "El kraft de media barrera es la opción más popular para los tostadores de café y las marcas de alimentos premium:",
            "coffee": {
                "title": "Tostadores de Café",
                "item1": "Café de especialidad: frescura de 9-12 meses con válvula",
                "item2": "Café molido: excelente retención de aroma",
                "item3": "Tercera ola: estética artesanal premium",
                "note": "La opción más popular para tostadores"
            },
            "snacks": {
                "title": "Snacks Premium",
                "item1": "Frutos secos tostados: mantienen crujido y frescura",
                "item2": "Frutas deshidratadas: preservan la humedad natural",
                "item3": "Granola: mantiene los racimos crujientes",
                "note": "Aspecto natural + protección"
            },
            "wellness": {
                "title": "Salud y Bienestar",
                "item1": "Proteínas en polvo: manténgalas secas y frescas",
                "item2": "Mezclas de superalimentos: preserve nutrientes",
                "item3": "Mezclas de té: protección de aroma",
                "note": "Posicionamiento natural para marcas de salud"
            },
            "stories": {
                "title": "Casos de éxito de clientes",
                "roaster": {
                    "label": "Tostador especializado de EE. UU.",
                    "desc": "\"El kraft de media barrera con válvula es nuestro punto óptimo: vida útil de 9 meses, hermoso aspecto artesanal y a los clientes les encanta la estética natural\"."
                },
                "organic": {
                    "label": "Marca de snacks orgánicos de la UE",
                    "desc": "\"Cambiamos de plástico a kraft de media barrera. Ventas aumentaron un 20%: los clientes asocian el kraft con lo natural\"."
                }
            }
        },
        "marketData": {
            "title": "Datos de mercado y rendimiento",
            "metrics": {
                "mvtr": "MVTR (g/m²/día)",
                "otr": "OTR (cc/m²/día)",
                "shelfLife": "Vida útil en meses",
                "renewable": "Contenido renovable"
            },
            "tableTitle": "Opciones de estructura de media barrera",
            "headers": ["Estructura", "Capa de barrera", "Vida útil", "Ideal para"],
            "rows": [
                ["Kraft/MET PET/PE", "PET metalizado", "9-12 meses", "Café, snacks premium"],
                ["Kraft/ALU/PE", "Aluminio delgado", "12 meses", "Suplementos, té"],
                ["Kraft/VMPET/PE", "Metalizado al vacío", "6-9 meses", "Frutos secos, frutas secas"]
            ],
            "impactTitle": "Por qué las marcas eligen media barrera",
            "impact": {
                "value": "Equilibrio protección-costo",
                "renewable": "Contenido kraft renovable",
                "roasterChoice": "Elección para tostadores de café"
            }
        },
        "comparison": {
            "title": "Comparación de materiales",
            "intro": "Compare kraft de media barrera con otras opciones:",
            "tableTitle": "Opciones de barrera Kraft",
            "headers": ["Criterio", "Media barrera", "Alta barrera", "Baja barrera"],
            "rows": [
                ["Productos ideales", "Café, frutos secos, snacks", "Fármacos, liofilizados", "Panadería, productos secos"],
                ["Vida útil", "6-12 meses", "12-24+ meses", "3-6 meses"],
                ["Valoración del valor", "⭐⭐⭐⭐⭐ El mejor", "⭐⭐⭐ Premium", "⭐⭐⭐⭐ Económico"],
                ["Sostenibilidad", "⭐⭐⭐ (metalizado)", "⭐⭐ (aluminio)", "⭐⭐⭐⭐⭐ (reciclable)"]
            ],
            "decisionGuideTitle": "Guía de decisión rápida",
            "chooseMedium": "Elija media barrera si:",
            "mediumPoints": [
                "Café, frutos secos o snacks",
                "Vida útil de 6-12 meses suficiente",
                "Mejor equilibrio protección-valor"
            ],
            "chooseHigh": "Elija alta barrera si:",
            "highPoints": [
                "Necesita una vida útil de 12-24+ meses",
                "Productos muy sensibles",
                "Saber más →"
            ],
            "chooseLow": "Elija baja barrera si:",
            "lowPoints": [
                "Vida útil de 3-6 meses suficiente",
                "Prioridad de sostenibilidad",
                "Saber más →"
            ]
        },
        "sustainability": {
            "title": "Sostenibilidad",
            "intro": "Aunque el envase de media barrera incluye capas de protección, mantiene un menor impacto ambiental que los envases plásticos tradicionales.",
            "renewable": {
                "title": "Contenido renovable",
                "desc": "60-70% de contenido de papel kraft renovable procedente de bosques sostenibles."
            },
            "reduced": {
                "title": "Plástico reducido",
                "desc": "50% menos plástico en comparación con las bolsas totalmente de plástico."
            },
            "emissions": {
                "title": "Menos emisiones",
                "desc": "Reducción del 40-50% en la huella de carbono frente al envase plástico tradicional."
            }
        }
    }
}

# French translations added
new_high_fr = {
    "title": "Emballages Kraft Haute Barrière | Sachets Premium Longue Conservation",
    "heroTitle": "L'aspect Kraft, une protection maximale",
    "heroSubtitle": "Esthétique kraft premium avec barrière en aluminium. Durée de conservation de 12-24 mois pour le café de spécialité et la pharmacie.",
    "introSummary": "L'aspect kraft naturel apprécié des clients, avec une protection de qualité pharmaceutique en dessous. Le meilleur des deux mondes pour les produits haut de gamme nécessitant une longue conservation.",
    "faq": {
        "q1": "Combien de temps les produits restent-ils frais dans un emballage kraft haute barrière ?",
        "a1": "Les produits peuvent rester frais pendant 12 à 24 mois et plus, selon leur nature et les conditions de stockage. La barrière en aluminium offre une protection totale.",
        "q2": "L'emballage kraft haute barrière en vaut-il le coût supplémentaire ?",
        "a2": "Pour les produits premium, les exigences de longue conservation ou l'exportation, tout à fait. La conservation prolongée réduit le gaspillage et valorise le produit.",
        "q3": "Cet emballage peut-il être utilisé pour des produits pharmaceutiques ?",
        "a3": "Oui, nos emballages kraft haute barrière répondent aux exigences de qualité pharmaceutique. Nous pouvons fournir toutes les certifications nécessaires.",
        "q4": "Quelles options d'impression fonctionnent le mieux sur le kraft haute barrière ?",
        "a4": "L'impression par clichés est la solution la plus économique pour les grandes séries en raison des MOQ habituels (5 000-10 000 pièces). L'impression numérique est possible pour les plus petites séries."
    },
    "cta": {
        "title": "Discutez de vos besoins en emballages haute barrière",
        "description": "Créons des emballages kraft haut de gamme avec une protection maximale pour vos produits de grande valeur.",
        "button": "Demander un devis"
    },
    "sections": {
        "overview": {
            "title": "Présentation générale",
            "intro": "L'emballage Kraft Haute Barrière intègre d'épaisses couches de feuille d'aluminium offrant une protection maximale pour les produits sensibles à l'oxygène et à l'humidité nécessitant une conservation de 12 à 24 mois et plus.",
            "keyFeaturesTitle": "Caractéristiques clés",
            "features": [
                "Extérieur en kraft de qualité supérieure avec barrière en aluminium",
                "Protection maximale contre l'oxygène et l'humidité (12-24 mois et +)",
                "Idéal pour les exigences de longue conservation",
                "Propriétés barrières à la lumière supérieures",
                "Excellente préservation des arômes"
            ],
            "summary": "Parfait pour le café de spécialité, les aliments lyophilisés, les produits pharmaceutiques, les probiotiques, les compléments alimentaires haut de gamme, les fromages affinés et tout produit nécessitant une fraîcheur préservée à très long terme."
        },
        "specifications": {
            "title": "Spécifications techniques",
            "intro": "Notre structure kraft haute barrière offre une protection de pointe pour les applications les plus exigeantes.",
            "structure": {
                "title": "Structure du matériau",
                "desc": "Kraft / Feuille d'aluminium / PE",
                "points": [
                    "Papier kraft de qualité supérieure 100-140g",
                    "Barrière en aluminium de 25-40µm",
                    "Couche de scellage PE multicouche (60-80µm)"
                ]
            },
            "properties": {
                "title": "Propriétés barrières",
                "desc": "Performances barrières maximales",
                "points": [
                    "MVTR : < 0,5 g/m²/jour",
                    "OTR : < 1,0 cc/m²/jour",
                    "Durée de conservation : 12-24 mois et +"
                ]
            },
            "formats": {
                "title": "Formats disponibles",
                "points": [
                    "Sachets stand-up",
                    "Sachets à soufflets plats",
                    "Sachets à quatre soudures",
                    "Sachets briques"
                ]
            },
            "premium": {
                "title": "Fonctionnalités premium",
                "points": [
                    "Valves de dégazage",
                    "Zips de sécurité enfant",
                    "Amorce de déchirure au laser pour ouverture facile",
                    "Gaufrage et estampage"
                ]
            }
        },
        "applications": {
            "title": "Applications idéales",
            "intro": "L'emballage kraft haute barrière est conçu pour les produits nécessitant le plus haut niveau de protection et la plus longue durée de conservation possible.",
            "items": [
                "Café de spécialité premium",
                "Café en grains d'origine unique",
                "Produits pharmaceutiques",
                "Probiotiques et enzymes",
                "Aliments lyophilisés",
                "Rations alimentaires d'urgence",
                "Compléments alimentaires de valeur",
                "Lait infantile biologique",
                "Fromage affiné",
                "Cannabis médical",
                "Réactifs de laboratoire",
                "MRE militaires"
            ]
        },
        "advantages": {
            "title": "Avantages et limites",
            "bestForTitle": "Idéal pour",
            "bestForPoints": [
                "Durée de conservation maximale (12-24 mois et +)",
                "Produits très sensibles",
                "Positionnement haut de gamme",
                "Marchés d'exportation nécessitant un long transport",
                "Produits nécessitant une barrière à la lumière",
                "Protection de qualité pharmaceutique"
            ],
            "considerationsTitle": "Considérations",
            "considerationsPoints": [
                "Coût des matériaux plus élevé",
                "La couche d'aluminium n'est pas recyclable dans les filières classiques",
                "Le poids plus lourd augmente les frais d'expédition",
                "MOQ généralement plus élevé",
                "Délais de production plus longs"
            ]
        },
        "scenarios": {
            "title": "Applications industrielles",
            "intro": "L'emballage kraft haute barrière est le choix privilégié pour les produits exigeant une protection optimale et une conservation maximale :",
            "coffee": {
                "title": "Café Premium",
                "item1": "Origine unique : préserve les profils aromatiques complexes",
                "item2": "Vieilli/Réserve : stockage de 18 à 24 mois",
                "item3": "Exportation : protection lors des longs transports",
                "note": "Avec valve de dégazage pour le café fraîchement torréfié"
            },
            "nutra": {
                "title": "Nutraceutiques",
                "item1": "Probiotiques : barrière maximale à l'humidité",
                "item2": "Compléments : préservation de l'efficacité pendant 24 mois et +",
                "item3": "Cannabis médical : options avec sécurité enfant",
                "note": "Protection de qualité pharmaceutique"
            },
            "specialty": {
                "title": "Aliments de spécialité",
                "item1": "Lyophilisés : alimentation d'urgence, camping",
                "item2": "Fromage affiné : stockage de maturation prolongé",
                "item3": "MRE : durée de conservation de niveau militaire",
                "note": "Protection de 12 à 24 mois et plus"
            },
            "stories": {
                "title": "Témoignages de clients",
                "roaster": {
                    "label": "Torréfacteur importateur au Japon",
                    "desc": "Utilise le kraft haute barrière pour un transport maritime de 6 mois. Aucune dégradation de qualité signalée après 18 mois de test."
                },
                "probiotic": {
                    "label": "Marque de probiotiques américaine",
                    "desc": "Est passée aux sachets kraft/aluminium. Les tests ont confirmé une viabilité de 95% des UFC à 24 mois contre 70% auparavant."
                }
            }
        },
        "marketData": {
            "title": "Données de marché et de performance",
            "metrics": {
                "mvtr": "MVTR (g/m²/jour)",
                "otr": "OTR (cc/m²/jour)",
                "shelfLife": "Conservation en mois",
                "aluThickness": "μm Feuille d'aluminium"
            },
            "tableTitle": "Comparaison des niveaux de barrière Kraft",
            "headers": ["Propriété", "Haute barrière", "Moyenne barrière", "Faible barrière"],
            "rows": [
                ["Couche barrière", "Feuille d'aluminium (25-40μm)", "Film métallisé", "Enduction PE uniquement"],
                ["MVTR", "<0,5 g/m²/jour ✓", "1-3 g/m²/jour", "5-10 g/m²/jour"],
                ["OTR", "<1 cc/m²/jour ✓", "5-20 cc/m²/jour", "100-200 cc/m²/jour"],
                ["Conservation", "12-24 mois et + ✓", "6-12 mois", "3-6 mois"],
                ["Coût", "$$$", "$$", "$"]
            ],
            "impactTitle": "Avantages de la protection maximale",
            "impact": {
                "light": "Barrière à la lumière (opaque)",
                "aroma": "Préservation des arômes",
                "duration": "Mois de protection"
            }
        },
        "comparison": {
            "title": "Comparaison de matériaux",
            "intro": "Comparez le kraft haute barrière avec d'autres options kraft et alternatives écologiques :",
            "tableTitle": "Comparaison des options Kraft",
            "headers": ["Critère", "Haute barrière", "Moyenne barrière", "Faible barrière"],
            "rows": [
                ["Idéal pour", "Besoins de conservation maximale", "Café, fruits à coque, snacks", "Boulangerie, produits secs"],
                ["Niveau de protection", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐"],
                ["Durabilité", "△ Alu non recyclable", "△ Recyclabilité limitée", "✓ Plus recyclable"],
                ["Coût", "+30-50%", "+15-25%", "Ligne de base"]
            ],
            "decisionGuideTitle": "Guide de décision rapide",
            "chooseHigh": "Choisissez la haute barrière si :",
            "highPoints": [
                "Besoin d'une conservation de 12-24 mois et +",
                "Produits très sensibles",
                "Positionnement haut de gamme justifié"
            ],
            "chooseMedium": "Choisissez la moyenne barrière si :",
            "mediumPoints": [
                "Conservation de 6-12 mois suffisante",
                "Café, fruits à coque, aliments secs",
                "En savoir plus →"
            ],
            "chooseLow": "Choisissez la faible barrière si :",
            "lowPoints": [
                "Conservation de 3-6 mois suffisante",
                "Priorité à l'éco-responsabilité",
                "En savoir plus →"
            ]
        },
        "quality": {
            "title": "Qualité & Certifications",
            "intro": "Nos emballages kraft haute barrière répondent aux normes les plus strictes en matière de sécurité alimentaire et de qualité."
        }
    }
}

new_medium_fr = {
    "title": "Emballages Kraft Moyenne Barrière | Sachets Café et Aliments Premium",
    "heroTitle": "Le meilleur allié du café artisanal",
    "heroSubtitle": "Extérieur kraft, protection métallisée à l'intérieur. Durée de conservation de 6-12 mois pour le café, les fruits secs et aliments fins.",
    "introSummary": "L'option kraft la plus populaire pour les torréfacteurs de café. Aspect artisanal naturel à l'extérieur, protection barrière réelle à l'intérieur. Compatible avec les valves de dégazage.",
    "faq": {
        "q1": "Quelle est la différence entre un emballage kraft moyenne et haute barrière ?",
        "a1": "La moyenne barrière utilise des couches métallisées plus fines (12-15µm) offrant 6-12 mois de conservation, tandis que la haute barrière utilise de l'aluminium épais (25-40µm) pour plus de 12-24 mois.",
        "q2": "Puis-je utiliser le kraft moyenne barrière pour l'emballage du café ?",
        "a2": "Oui ! Il est idéal pour le café avec un objectif de conservation de 6 à 9 mois. Nous pouvons ajouter des valves de dégazage pour libérer le CO2.",
        "q3": "La couche métallisée est-elle recyclable ?",
        "a3": "Le papier kraft peut être recyclé, mais les couches métallisées peuvent nécessiter des centres de recyclage spécialisés. Nous vous conseillons de vérifier localement.",
        "q4": "Quelles options d'impression sont disponibles ?",
        "a4": "L'impression numérique (MOQ dès 500) et l'impression par clichés (MOQ dès 5 000) sont disponibles. Le papier kraft offre une excellente adhérence de l'encre."
    },
    "cta": {
        "title": "Lancez votre projet d'emballage de café",
        "description": "Créons des emballages kraft haut de gamme qui protègent vos produits et reflètent les valeurs de votre marque.",
        "button": "Demander un devis"
    },
    "sections": {
        "overview": {
            "title": "Présentation générale",
            "intro": "L'emballage Kraft Moyenne Barrière offre une protection améliorée grâce à des couches métallisées, prolongeant la conservation à 6-12 mois pour les produits modérément sensibles.",
            "keyFeaturesTitle": "Caractéristiques clés",
            "features": [
                "Extérieur kraft naturel avec couches barrières renforcées",
                "Protection moyenne contre l'oxygène et l'humidité (conservation de 6 à 12 mois)",
                "Idéal pour le café, les fruits secs, les fruits déshydratés et les compléments",
                "Options barrières métallisées ou feuille d'aluminium mince",
                "Esthétique premium alliée à des performances fonctionnelles"
            ],
            "summary": "Parfait pour le café torréfié, les snacks premium, les fruits déshydratés, les protéines en poudre, les vitamines, les noix biologiques et les thés de spécialité nécessitant une fraîcheur prolongée."
        },
        "specifications": {
            "title": "Spécifications techniques",
            "intro": "Notre structure kraft moyenne barrière offre une protection équilibrée pour les exigences de conservation modérées.",
            "structure": {
                "title": "Structure du matériau",
                "desc": "Papier Kraft / Couche Métallisée / PE",
                "points": [
                    "Base de papier kraft de 80-120g",
                    "Film métallisé ou feuille d'aluminium de 12-15µm",
                    "Couche de scellage PE de qualité alimentaire"
                ]
            },
            "properties": {
                "title": "Propriétés barrières",
                "desc": "Barrière moyenne-haute contre l'oxygène et l'humidité",
                "points": [
                    "MVTR : 1-3 g/m²/jour",
                    "OTR : 5-20 cc/m²/jour",
                    "Conservation : 6-12 mois"
                ]
            },
            "formats": {
                "title": "Formats disponibles",
                "points": [
                    "Sachets stand-up avec valve",
                    "Sachets à fond plat",
                    "Sachets à soufflets latéraux",
                    "Sachets à quatre soudures"
                ]
            },
            "premium": {
                "title": "Caractéristiques spéciales",
                "points": [
                    "Valves de dégazage pour le café",
                    "Zips refermables",
                    "Encoches de déchirure",
                    "Impression UV sélective"
                ]
            }
        },
        "applications": {
            "title": "Applications idéales",
            "intro": "La moyenne barrière kraft est le compromis idéal pour les produits nécessitant une protection modérée sans le coût des matériaux haute barrière.",
            "items": [
                "Grains de café torréfiés",
                "Café moulu de spécialité",
                "Thé de qualité supérieure en vrac",
                "Fruits à coque et graines grillées",
                "Fruits déshydratés",
                "Protéines en poudre",
                "Super-aliments en poudre",
                "Compléments nutritionnels",
                "Barres énergétiques",
                "Chocolat et cacao",
                "Mélanges d'épices",
                "Granola artisanal"
            ]
        },
        "advantages": {
            "title": "Avantages et limites",
            "bestForTitle": "Idéal pour",
            "bestForPoints": [
                "Produits de café et de thé",
                "Besoins de conservation de 6-12 mois",
                "Modérément sensibles à l'oxygène/humidité",
                "Positionnement de marque premium",
                "Esthétique naturelle avec protection"
            ],
            "considerationsTitle": "Considérations",
            "considerationsPoints": [
                "Coût plus élevé que la faible barrière",
                "Ne convient pas pour de très longues durées (18 mois et plus)",
                "La couche métallisée réduit la recyclabilité",
                "Nécessite des conditions de stockage appropriées"
            ]
        },
        "scenarios": {
            "title": "Applications industrielles",
            "intro": "Le kraft moyenne barrière est le choix le plus populaire pour les torréfacteurs de café et les marques d'aliments de qualité supérieure :",
            "coffee": {
                "title": "Torréfacteurs",
                "item1": "Café de spécialité : fraîcheur de 9-12 mois avec valve",
                "item2": "Café moulu : excellente préservation des arômes",
                "item3": "Café artisanal : esthétique artisanale de qualité supérieure",
                "note": "Le choix le plus populaire pour les torréfacteurs"
            },
            "snacks": {
                "title": "Snacks de qualité",
                "item1": "Fruits à coque grillés : préservent le croquant et la fraîcheur",
                "item2": "Fruits déshydratés : préservent l'humidité naturelle",
                "item3": "Granola : garde les pépites croustillantes",
                "note": "Aspect naturel + protection"
            },
            "wellness": {
                "title": "Santé & Bien-être",
                "item1": "Protéines en poudre : gardez au sec et au frais",
                "item2": "Mélanges de super-aliments : préservent les nutriments",
                "item3": "Mélanges de thé : protection des arômes",
                "note": "Positionnement naturel pour les marques de bien-être"
            },
            "stories": {
                "title": "Témoignages de clients",
                "roaster": {
                    "label": "Torréfacteur spécialisé américain",
                    "desc": "\"Le sachet kraft moyenne barrière avec valve est notre meilleur choix : conservation de 9 mois, bel aspect artisanal, et les clients adorent l'esthétique naturelle.\""
                },
                "organic": {
                    "label": "Marque de snacks biologiques de l'UE",
                    "desc": "\"Nous sommes passés du plastique au kraft moyenne barrière. Ventes en hausse de 20% : les clients associent le kraft au naturel.\""
                }
            }
        },
        "marketData": {
            "title": "Données de marché et de performance",
            "metrics": {
                "mvtr": "MVTR (g/m²/jour)",
                "otr": "OTR (cc/m²/jour)",
                "shelfLife": "Conservation en mois",
                "renewable": "Contenu renouvelable"
            },
            "tableTitle": "Options de structure moyenne barrière",
            "headers": ["Structure", "Couche barrière", "Durée de conservation", "Idéal pour"],
            "rows": [
                ["Kraft/MET PET/PE", "PET métallisé", "9-12 mois", "Café, snacks premium"],
                ["Kraft/ALU/PE", "Aluminium mince", "12 mois", "Compléments, thé"],
                ["Kraft/VMPET/PE", "Métallisé sous vide", "6-9 mois", "Noix, fruits secs"]
            ],
            "impactTitle": "Pourquoi les marques choisissent la moyenne barrière",
            "impact": {
                "value": "Équilibre protection/coût",
                "renewable": "Contenu kraft renouvelable",
                "roasterChoice": "Choix des torréfacteurs de café"
            }
        },
        "comparison": {
            "title": "Comparaison de matériaux",
            "intro": "Comparez le kraft moyenne barrière avec d'autres options :",
            "tableTitle": "Options de barrière Kraft",
            "headers": ["Critère", "Moyenne barrière", "Haute barrière", "Faible barrière"],
            "rows": [
                ["Produits idéaux", "Café, noix, snacks", "Pharma, lyophilisé", "Boulangerie, produits secs"],
                ["Durée de conservation", "6-12 mois", "12-24+ mois", "3-6 mois"],
                ["Évaluation de la valeur", "⭐⭐⭐⭐⭐ Le meilleur", "⭐⭐⭐ Premium", "⭐⭐⭐⭐ Économique"],
                ["Durabilité", "⭐⭐⭐ (métallisé)", "⭐⭐ (aluminium)", "⭐⭐⭐⭐⭐ (recyclable)"]
            ],
            "decisionGuideTitle": "Guide de décision rapide",
            "chooseMedium": "Choisissez la moyenne barrière si :",
            "mediumPoints": [
                "Café, fruits à coque ou snacks",
                "Conservation de 6-12 mois suffisante",
                "Meilleur équilibre protection/coût"
            ],
            "chooseHigh": "Choisissez la haute barrière si :",
            "highPoints": [
                "Besoin d'une conservation de 12-24 mois et +",
                "Produits très sensibles",
                "En savoir plus →"
            ],
            "chooseLow": "Choisissez la faible barrière si :",
            "lowPoints": [
                "Conservation de 3-6 mois suffisante",
                "Priorité à la durabilité",
                "En savoir plus →"
            ]
        },
        "sustainability": {
            "title": "Durabilité",
            "intro": "Bien que l'emballage moyenne barrière intègre des couches protectrices, il conserve un impact environnemental plus faible que les emballages plastiques traditionnels.",
            "renewable": {
                "title": "Contenu renouvelable",
                "desc": "60-70% de papier kraft renouvelable provenant de forêts gérées durablement."
            },
            "reduced": {
                "title": "Plastique réduit",
                "desc": "50% de plastique en moins par rapport aux sachets tout plastique."
            },
            "emissions": {
                "title": "Émissions réduites",
                "desc": "Réduction de 40-50% de l'empreinte carbone par rapport aux emballages plastiques classiques."
            }
        }
    }
}

def update_json(lang, high_data, medium_data):
    path = locales[lang]
    print(f"Updating {lang} JSON at {path}...")
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Ensure nested keys exist
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
        
    # Merge high
    if 'kraftHighBarrier' not in data['seoPages']['pages']:
        data['seoPages']['pages']['kraftHighBarrier'] = {}
    pe_high = data['seoPages']['pages']['kraftHighBarrier']
    for k, v in high_data.items():
        if isinstance(v, dict) and k in pe_high and isinstance(pe_high[k], dict):
            for sub_k, sub_v in v.items():
                pe_high[k][sub_k] = sub_v
        else:
            pe_high[k] = v

    # Merge medium
    if 'kraftMediumBarrier' not in data['seoPages']['pages']:
        data['seoPages']['pages']['kraftMediumBarrier'] = {}
    pe_medium = data['seoPages']['pages']['kraftMediumBarrier']
    for k, v in medium_data.items():
        if isinstance(v, dict) and k in pe_medium and isinstance(pe_medium[k], dict):
            for sub_k, sub_v in v.items():
                pe_medium[k][sub_k] = sub_v
        else:
            pe_medium[k] = v
        
    # Write back
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"  Successfully updated {lang} JSON!")

if __name__ == '__main__':
    update_json('en', new_high_en, new_medium_en)
    update_json('zh-TW', new_high_zhtw, new_medium_zhtw)
    update_json('es', new_high_es, new_medium_es)
    update_json('fr', new_high_fr, new_medium_fr)
    print("Done all updates for Kraft Barrier options!")
