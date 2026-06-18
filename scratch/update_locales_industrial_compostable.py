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
        "targetAudience": {
            "title": "Is This Page For You?",
            "intro": "If you are a US specialty coffee roaster, EU food brand, or organic snack company looking for certified compostable packaging with better barrier protection than home compostable options—industrial compostable is your solution.",
            "coffee": {
                "title": "Coffee & Tea Brands",
                "desc": "Higher barrier for freshness + BPI/EN13432 certified"
            },
            "organic": {
                "title": "Organic Food Companies",
                "desc": "Meet sustainability claims with real certifications"
            },
            "markets": {
                "title": "EU Market Sellers",
                "desc": "EN 13432 required for many EU countries"
            }
        },
        "scenarios": {
            "title": "Industry Applications",
            "intro": "Industrial compostable packaging is the standard for brands needing certified compostability with better barrier performance:",
            "coffee": {
                "title": "Coffee Industry",
                "item1": "Specialty Roasters: BPI certified bags with degassing valves",
                "item2": "Third Wave Cafes: Premium kraft/PLA structures",
                "item3": "Subscription Services: EN 13432 for EU markets",
                "note": "9-12 month shelf life achievable"
            },
            "organicFood": {
                "title": "Organic & Natural Foods",
                "item1": "Organic Snacks: Certified compostable packaging",
                "item2": "Dried Foods: Medium-high barrier options",
                "item3": "Health Foods: Premium market positioning",
                "note": "Aligns with organic certification values"
            },
            "markets": {
                "title": "EU & US Markets",
                "item1": "EU: EN 13432 required for many retailers",
                "item2": "US: BPI certification for commercial facilities",
                "item3": "California: Strong composting infrastructure",
                "note": "Meets regional compliance requirements"
            },
            "stories": {
                "title": "Customer Success Stories",
                "usCoffee": {
                    "label": "US Coffee Roaster",
                    "desc": "Switched 50,000 units/month to BPI certified bags. \"Our cafe partners love the sustainability story - it's a key selling point.\""
                },
                "euOrganic": {
                    "label": "EU Organic Brand",
                    "desc": "EN 13432 certified pouches enabled entry into Whole Foods EU. 25% premium retail placement increase."
                }
            }
        },
        "marketData": {
            "title": "Market & Performance Data",
            "metrics": {
                "marketSize": "Global Market Size 2024",
                "cagr": "CAGR 2024-2030",
                "decompTime": "Days to Decompose",
                "tempRange": "Composting Temperature"
            },
            "tableTitle": "Industrial Compostable Material Performance",
            "headers": ["Material", "Barrier Level", "Shelf Life", "Certifications"],
            "rows": [
                ["PLA Film", "Low-Medium", "6-9 months", "EN 13432, ASTM D6400"],
                ["PLA + PBAT Blend", "Medium", "9-12 months", "EN 13432, BPI"],
                ["Kraft + PLA Barrier", "Medium", "9-12 months", "EN 13432, BPI"],
                ["Bio-PBS", "Medium-High", "12+ months", "EN 13432"]
            ],
            "impactTitle": "Environmental Impact Metrics",
            "impact": {
                "co2": "CO₂ vs conventional plastic",
                "microplastics": "Microplastics after composting",
                "biomass": "Biodegrades to biomass"
            }
        },
        "comparison": {
            "title": "Material Comparison",
            "intro": "Compare industrial compostable with other eco-friendly options:",
            "tableTitle": "Eco-Friendly Materials Comparison",
            "headers": ["Criteria", "Industrial Compostable", "Home Compostable", "Recyclable Mono-PE"],
            "rows": [
                ["End of Life", "Commercial facility", "Backyard bin", "Recycling stream"],
                ["Barrier Level", "⭐⭐⭐⭐", "⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Shelf Life", "9-12+ months", "3-6 months", "12-18 months"],
                ["Consumer Appeal", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                ["Cost Premium", "+15-25%", "+25-35%", "+5-10%"]
            ],
            "decisionGuideTitle": "Quick Decision Guide",
            "chooseIndustrial": "Choose Industrial Compostable if:",
            "industrialPoints": [
                "Need 9-12+ month shelf life",
                "Customers have composting access",
                "BPI/EN 13432 required"
            ],
            "chooseHome": "Choose Home Compostable if:",
            "homePoints": [
                "Customers compost at home",
                "AU/UK markets",
                "Learn more →"
            ],
            "chooseRecyclable": "Choose Recyclable if:",
            "recyclablePoints": [
                "Maximum barrier needed",
                "Recycling more accessible",
                "Learn more →"
            ]
        },
        "aiSearch": {
            "title": "Finding Industrial Compostable Packaging",
            "intro": "If you're using AI search (Gemini, ChatGPT), try asking:",
            "questions": [
                "\"EN 13432 vs ASTM D6400: which certification do I need?\"",
                "\"Best BPI certified compostable pouch supplier for coffee?\"",
                "\"Industrial compostable packaging with high barrier for snacks\"",
                "\"How long does industrial compostable packaging take to break down?\""
            ]
        },
        "riskHedging": {
            "title": "Is Industrial Compostable Right for You?",
            "bestFit": {
                "title": "✅ Best Fit For...",
                "points": [
                    "Products needing 9-12+ month shelf life",
                    "Coffee, tea, snacks requiring good barrier",
                    "Markets with commercial composting (CA, WA, EU)",
                    "B2B products where buyers have facility access"
                ]
            },
            "alsoWorks": {
                "title": "⚠️ Also Works For...",
                "points": [
                    "Brands educating consumers on composting",
                    "Products with moderate barrier needs",
                    "Companies building sustainability credentials"
                ]
            },
            "notRecommended": {
                "title": "❌ Not Recommended If...",
                "points": [
                    "Customers lack composting access",
                    "You need ultra-high barrier (18+ months)",
                    "Consider home compostable for direct consumers →"
                ]
            }
        },
        "decisionCta": {
            "title": "Ready to Go Industrial Compostable?",
            "call": {
                "title": "Ready to Move Fast?",
                "desc": "Book a call to discuss your certification needs",
                "btn": "Book a Call"
            },
            "samples": {
                "title": "Want to Test First?",
                "desc": "Order industrial compostable samples",
                "btn": "Get Samples"
            },
            "explore": {
                "title": "Still Exploring?",
                "desc": "Compare with home compostable or recyclable",
                "btn": "Compare Options"
            }
        }
    }
}

new_data_zhtw = {
    "title": "工業可堆肥包裝袋 | EN 13432 & ASTM D6400 認證袋",
    "heroTitle": "高阻隔性能，且完全可堆肥",
    "heroSubtitle": "當家庭可堆肥無法滿足您的保質期要求時，這款通過 EN 13432 及 ASTM D6400 認證的環保袋能在商業設施中於 90-180 天內完全分解。",
    "introSummary": "需要比家庭可堆肥更出色的阻隔性能？工業可堆肥包裝在提供中高阻隔保護的同時，仍能在商業堆肥設施中完全分解，不留微塑料殘留。",
    "ctaTitle": "需要更高的阻隔性能？",
    "ctaDescription": "獲取既能有效保護產品，又能實現完全可堆肥的環保包裝方案。",
    "ctaButtonText": "免費獲取樣品",
    "sections": {
        "targetAudience": {
            "title": "本頁面是否適合您？",
            "intro": "如果您是尋求具備比家庭可堆肥更佳防護性能，同時擁有 BPI / EN 13432 認證可堆肥包裝的美國精品咖啡烘焙商、歐盟食品品牌或有機零食公司，工業可堆肥是您的理想解決方案。",
            "coffee": {
                "title": "咖啡與茶葉品牌",
                "desc": "高阻隔保鮮性能 + BPI/EN13432 權威認證"
            },
            "organic": {
                "title": "有機食品公司",
                "desc": "採用真實的國際認證滿足您的環保承諾"
            },
            "markets": {
                "title": "歐盟市場賣家",
                "desc": "銷往眾多歐盟國家的必備 EN 13432 標準"
            }
        },
        "scenarios": {
            "title": "行業應用案例",
            "intro": "對於需要權威認證且對防潮防氧氣要求較高的品牌，工業可堆肥包裝是主流的行業標準：",
            "coffee": {
                "title": "咖啡行業",
                "item1": "精品烘焙商：帶有排氣閥的 BPI 認證咖啡袋",
                "item2": "精品咖啡館：高端牛皮紙/PLA 包裝結構",
                "item3": "訂閱制服務：適合歐盟市場的 EN 13432 規格",
                "note": "保質期可達 9 至 12 個月"
            },
            "organicFood": {
                "title": "有機與天然食品",
                "item1": "有機零食：獲得認證的環保可堆肥包裝",
                "item2": "脫水食品：中高阻隔的複合結構選擇",
                "item3": "健康食品：彰顯高端品牌環保定位",
                "note": "完美契合有機認證的綠色價值觀"
            },
            "markets": {
                "title": "歐盟及美國市場",
                "item1": "歐盟：許多零售商要求必須符合 EN 13432 標準",
                "item2": "美國：滿足商業堆肥設施要求的 BPI 認證",
                "item3": "加州：具備完善的廚餘與商業堆肥收集網絡",
                "note": "符合各地區的環保合規監管"
            },
            "stories": {
                "title": "客戶成功案例",
                "usCoffee": {
                    "label": "美國咖啡烘焙商",
                    "desc": "將每月 50,000 個包裝袋改為 BPI 認證袋。Roaster 表示：「我們的咖啡館合作夥伴非常喜歡這個環保故事，成為了我們核心的賣點。」"
                },
                "euOrganic": {
                    "label": "歐盟有機品牌",
                    "desc": "憑藉 EN 13432 認證可堆肥袋，成功進駐 Whole Foods 歐盟門店。高端零售渠道上架率提升了 25%。"
                }
            }
        },
        "marketData": {
            "title": "市場與性能數據",
            "metrics": {
                "marketSize": "2024 年全球市場規模",
                "cagr": "2024-2030 年複合年增長率",
                "decompTime": "完全分解所需天數",
                "tempRange": "商業堆肥設施要求溫度"
            },
            "tableTitle": "工業可堆肥材料性能指標",
            "headers": ["材料結構", "阻隔級別", "產品保質期", "相關認證"],
            "rows": [
                ["PLA 薄膜", "較低至中等", "6-9 個月", "EN 13432, ASTM D6400"],
                ["PLA + PBAT 共混", "中等", "9-12 個月", "EN 13432, BPI"],
                ["牛皮紙 + PLA 阻隔", "中等", "9-12 個月", "EN 13432, BPI"],
                ["Bio-PBS 生物基材料", "中等至優異", "12 個月以上", "EN 13432"]
            ],
            "impactTitle": "環境影響指標",
            "impact": {
                "co2": "相比常規塑料減少 CO₂ 排放",
                "microplastics": "堆肥處置後微塑料殘留量",
                "biomass": "完全降解轉化為生物質"
            }
        },
        "comparison": {
            "title": "材料性能對比",
            "intro": "將工業可堆肥包裝與其他環保方案進行對比：",
            "tableTitle": "環保材料性能多維度對比",
            "headers": ["評估維度", "工業可堆肥 (Industrial)", "家庭可堆肥 (Home)", "可回收單材質 PE"],
            "rows": [
                ["處置終點", "商業/市政堆肥設施", "自家後院堆肥箱", "塑料回收流/垃圾箱"],
                ["阻隔級別", "⭐⭐⭐⭐", "⭐⭐", "⭐⭐⭐⭐⭐"],
                ["保質期", "9-12+ 個月", "3-6 個月", "12-18 個月"],
                ["消費者吸引力", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                ["成本溢價", "+15-25%", "+25-35%", "+5-10%"]
            ],
            "decisionGuideTitle": "快速決策指南",
            "chooseIndustrial": "符合以下情況時，請選擇工業可堆肥：",
            "industrialPoints": [
                "產品需要 9 至 12 個月以上的較長保質期",
                "目標消費市場具備完善的商業/綠色垃圾桶收集設施",
                "需要 BPI 或 EN 13432 認證以滿足零售商合規要求"
            ],
            "chooseHome": "符合以下情況時，請選擇家庭可堆肥：",
            "homePoints": [
                "顧客普遍會自主在家庭庭院進行堆肥",
                "主要針對澳、英等後院堆肥普及市場",
                "了解更多詳情 →"
            ],
            "chooseRecyclable": "符合以下情況時，請選擇可回收包裝：",
            "recyclablePoints": [
                "產品對阻隔及防潮有極致要求",
                "當地塑料瓶/軟塑料回收網絡更為普及",
                "了解更多詳情 →"
            ]
        },
        "aiSearch": {
            "title": "尋找工業可堆肥包裝袋",
            "intro": "如果您使用 AI 搜尋（如 Gemini、ChatGPT），可以嘗試提問：",
            "questions": [
                "「EN 13432 與 ASTM D6400 認證標準有什麼具體區別？」",
                "「推薦獲得 BPI 認證的精品咖啡可堆肥袋供應商」",
                "「適合有機零食的高阻隔商業可堆肥軟包裝」",
                "「工業可堆肥袋在商業設施中分解需要多久？」"
            ]
        },
        "riskHedging": {
            "title": "工業可堆肥包裝是否適合您？",
            "bestFit": {
                "title": "✅ 最適合的場景...",
                "points": [
                    "產品保質期需在 9-12 個月以上",
                    "咖啡、茶葉、零食等需要良好氧氣與水汽阻隔的產品",
                    "銷往設有有機垃圾路邊收集機制的區域（如美西、西歐）",
                    "買家具備商業堆肥處置渠道的 B2B 行業交易"
                ]
            },
            "alsoWorks": {
                "title": "⚠️ 同樣適用於...",
                "points": [
                    "願意引導顧客進行分類投放的品牌",
                    "對阻隔有中等要求的乾貨食品",
                    "致力於提升企業 ESG 指標與環保形象的公司"
                ]
            },
            "notRecommended": {
                "title": "❌ 不推薦用於...",
                "points": [
                    "目標市場完全缺乏商業堆肥及有機垃圾收集設施",
                    "保質期要求長達 18 個月以上的極致密封產品",
                    "考慮為終端消費者改用家庭可堆肥方案 →"
                ]
            }
        },
        "decisionCta": {
            "title": "準備好採用工業可堆肥包裝了嗎？",
            "call": {
                "title": "想快速推進項目？",
                "desc": "預約諮詢以評估您的合規與認證規格",
                "btn": "預約通話"
            },
            "samples": {
                "title": "想先測試樣品？",
                "desc": "立即訂購工業可堆肥樣品包進行測試",
                "btn": "獲取樣品"
            },
            "explore": {
                "title": "仍在評估階段？",
                "desc": "對比工業可堆肥與家庭可堆肥或可回收包裝",
                "btn": "對比方案"
            }
        }
    }
}

new_data_es = {
    "title": "Envases Compostables Industriales | Bolsas Certificadas EN 13432",
    "heroTitle": "Alto rendimiento, totalmente compostable",
    "heroSubtitle": "Cuando el compostable doméstico no es suficiente. Bolsas certificadas EN 13432 y ASTM D6400 que se descomponen en plantas comerciales en 90-180 días.",
    "introSummary": "¿Necesita mejor barrera que la que ofrece el compostable doméstico? El compostable industrial proporciona una barrera media-alta mientras se descompone por completo.",
    "ctaTitle": "¿Necesita más barrera?",
    "ctaDescription": "Obtenga envases compostables que realmente puedan proteger su producto.",
    "ctaButtonText": "Obtener muestras gratis",
    "sections": {
        "targetAudience": {
            "title": "¿Es esta página para usted?",
            "intro": "Si es un tostador de café de especialidad de EE. UU., una marca de alimentos de la UE o una empresa de snacks orgánicos que busca envases compostables certificados con mejor protección de barrera que las opciones compostables domésticas, el compostable industrial es su solución.",
            "coffee": {
                "title": "Marcas de café y té",
                "desc": "Mayor barrera para la frescura + certificación BPI/EN13432"
            },
            "organic": {
                "title": "Empresas de alimentos orgánicos",
                "desc": "Cumpla con las afirmaciones de sostenibilidad con certificaciones reales"
            },
            "markets": {
                "title": "Vendedores del mercado de la UE",
                "desc": "Se requiere EN 13432 para muchos países de la UE"
            }
        },
        "scenarios": {
            "title": "Aplicaciones de la industria",
            "intro": "El envase compostable industrial es el estándar para marcas que necesitan compostabilidad certificada con mejor rendimiento de barrera:",
            "coffee": {
                "title": "Industria del café",
                "item1": "Tostadores especializados: bolsas certificadas por BPI con válvulas desgasificadoras",
                "item2": "Cafeterías de tercera ola: estructuras de Kraft/PLA premium",
                "item3": "Servicios de suscripción: EN 13432 para mercados de la UE",
                "note": "Vida útil de 9-12 meses alcanzable"
            },
            "organicFood": {
                "title": "Alimentos orgánicos y naturales",
                "item1": "Snacks orgánicos: envases compostables certificados",
                "item2": "Alimentos deshidratados: opciones de barrera media-alta",
                "item3": "Alimentos saludables: posicionamiento premium en el mercado",
                "note": "Se alinea con los valores de la certificación orgánica"
            },
            "markets": {
                "title": "Mercados de EE. UU. y la UE",
                "item1": "UE: se requiere EN 13432 para muchos minoristas",
                "item2": "EE. UU.: certificación BPI para instalaciones comerciales",
                "item3": "California: sólida infraestructura de compostaje",
                "note": "Cumple con los requisitos de cumplimiento regional"
            },
            "stories": {
                "title": "Casos de éxito de clientes",
                "usCoffee": {
                    "label": "Tostador de café de EE. UU.",
                    "desc": "Cambió 50.000 unidades/mes a bolsas certificadas por BPI. \"A nuestros socios de cafeterías les encanta la historia de sostenibilidad: es un punto de venta clave\"."
                },
                "euOrganic": {
                    "label": "Marca orgánica de la UE",
                    "desc": "Las bolsas certificadas EN 13432 permitieron la entrada a Whole Foods UE. Aumento del 25% en la colocación en estantes minoristas premium."
                }
            }
        },
        "marketData": {
            "title": "Datos de mercado y rendimiento",
            "metrics": {
                "marketSize": "Tamaño del mercado global 2024",
                "cagr": "CAGR 2024-2030",
                "decompTime": "Días para descomponerse",
                "tempRange": "Temperatura de compostaje"
            },
            "tableTitle": "Rendimiento de materiales compostables industriales",
            "headers": ["Material", "Nivel de barrera", "Vida útil", "Certificaciones"],
            "rows": [
                ["Película PLA", "Bajo-Medio", "6-9 meses", "EN 13432, ASTM D6400"],
                ["Mezcla PLA + PBAT", "Medio", "9-12 meses", "EN 13432, BPI"],
                ["Barrera Kraft + PLA", "Medio", "9-12 meses", "EN 13432, BPI"],
                ["Bio-PBS", "Medio-Alto", "12+ meses", "EN 13432"]
            ],
            "impactTitle": "Métricas de impacto ambiental",
            "impact": {
                "co2": "CO₂ en comparación con el plástico convencional",
                "microplastics": "Microplásticos después del compostaje",
                "biomass": "Se biodegrada a biomasa"
            }
        },
        "comparison": {
            "title": "Comparación de materiales",
            "intro": "Compare el compostable industrial con otras opciones ecológicas:",
            "tableTitle": "Comparación de materiales respetuosos con el medio ambiente",
            "headers": ["Criterio", "Compostable industrial", "Compostable doméstico", "Mono-PE reciclable"],
            "rows": [
                ["Fin de vida", "Instalación comercial", "Contenedor de jardín", "Flujo de reciclaje"],
                ["Nivel de barrera", "⭐⭐⭐⭐", "⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Vida útil", "9-12+ meses", "3-6 meses", "12-18 meses"],
                ["Atractivo para el consumidor", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                ["Costo adicional", "+15-25%", "+25-35%", "+5-10%"]
            ],
            "decisionGuideTitle": "Guía de decisión rápida",
            "chooseIndustrial": "Elija compostable industrial si:",
            "industrialPoints": [
                "Necesita una vida útil de 9-12+ meses",
                "Los clientes tienen acceso al compostaje",
                "Se requiere BPI/EN 13432"
            ],
            "chooseHome": "Elija compostable doméstico si:",
            "homePoints": [
                "Los clientes compostan en casa",
                "Mercados de AU/UK",
                "Saber más →"
            ],
            "chooseRecyclable": "Elija reciclable si:",
            "recyclablePoints": [
                "Se necesita la máxima barrera",
                "Reciclaje más accesible",
                "Saber más →"
            ]
        },
        "aiSearch": {
            "title": "Búsqueda de envases compostables industriales",
            "intro": "Si está utilizando la búsqueda de IA (Gemini, ChatGPT), intente preguntar:",
            "questions": [
                "\"EN 13432 frente a ASTM D6400: ¿qué certificación necesito?\"",
                "\"¿Cuál es el mejor proveedor de bolsas compostables con certificación BPI para café?\"",
                "\"Envases compostables industriales con alta barrera para snacks\"",
                "\"¿Cuánto tardan los envases compostables industriales en descomponerse?\""
            ]
        },
        "riskHedging": {
            "title": "¿Es el compostable industrial adecuado para usted?",
            "bestFit": {
                "title": "✅ Ideal para...",
                "points": [
                    "Productos que necesitan una vida útil de 9-12+ meses",
                    "Café, té, snacks que requieren buena barrera",
                    "Mercados con compostaje comercial (CA, WA, UE)",
                    "Productos B2B donde los compradores tienen acceso a instalaciones"
                ]
            },
            "alsoWorks": {
                "title": "⚠️ Funciona también para...",
                "points": [
                    "Marcas que educan a los consumidores sobre el compostaje",
                    "Productos con necesidades de barrera moderada",
                    "Empresas que crean credenciales de sostenibilidad"
                ]
            },
            "notRecommended": {
                "title": "❌ No recomendado si...",
                "points": [
                    "Los clientes carecen de acceso al compostaje",
                    "Necesita una barrera ultra alta (más de 18 meses)",
                    "Considere el compostable doméstico para consumidores directos →"
                ]
            }
        },
        "decisionCta": {
            "title": "¿Listo para pasar al compostable industrial?",
            "call": {
                "title": "¿Listo para avanzar rápido?",
                "desc": "Reserve una llamada para discutir sus necesidades de certificación",
                "btn": "Reservar una llamada"
            },
            "samples": {
                "title": "¿Quiere probar primero?",
                "desc": "Ordene muestras compostables industriales",
                "btn": "Obtener muestras"
            },
            "explore": {
                "title": "¿Aún explorando?",
                "desc": "Compare con compostable doméstico o reciclable",
                "btn": "Compare opciones"
            }
        }
    }
}

new_data_fr = {
    "title": "Emballages Compostables Industriels | Sachets Certifiés EN 13432",
    "heroTitle": "Haute performance, totalement compostable",
    "heroSubtitle": "Quand le compostage à domicile n'est pas suffisant. Sachets certifiés EN 13432 et ASTM D6400 qui se décomposent dans des centres commerciaux en 90-180 jours.",
    "introSummary": "Besoin d'une meilleure barrière que celle du compostable à domicile ? Le compostable industriel offre une barrière moyenne-haute tout en se décomposant complètement.",
    "ctaTitle": "Besoin de plus de barrière ?",
    "ctaDescription": "Obtenez des emballages compostables qui peuvent réellement protéger votre produit.",
    "ctaButtonText": "Obtenir des échantillons gratuits",
    "sections": {
        "targetAudience": {
            "title": "Cette page est-elle pour vous ?",
            "intro": "Si vous êtes un torréfacteur de café de spécialité américain, une marque alimentaire de l'UE ou une entreprise de snacks bio à la recherche d'emballages certifiés compostables avec une meilleure protection barrière que le compostable à domicile, le compostable industriel est votre solution.",
            "coffee": {
                "title": "Marques de café et de thé",
                "desc": "Barrière plus élevée pour la fraîcheur + certifié BPI/EN13432"
            },
            "organic": {
                "title": "Marques d'aliments biologiques",
                "desc": "Respectez les allégations de durabilité avec de vraies certifications"
            },
            "markets": {
                "title": "Vendeurs du marché européen",
                "desc": "EN 13432 requis pour de nombreux pays de l'UE"
            }
        },
        "scenarios": {
            "title": "Applications industrielles",
            "intro": "L'emballage compostable industriel est la norme pour les marques ayant besoin d'une compostabilité certifiée avec de meilleures performances barrières :",
            "coffee": {
                "title": "Industrie du café",
                "item1": "Torréfacteurs : sachets certifiés BPI avec valves de dégazage",
                "item2": "Cafés spécialisés : structures Kraft/PLA haut de gamme",
                "item3": "Services d'abonnement : EN 13432 pour les marchés de l'UE",
                "note": "Durée de conservation de 9-12 mois atteignable"
            },
            "organicFood": {
                "title": "Aliments bio et naturels",
                "item1": "Snacks bio : emballages compostables certifiés",
                "item2": "Aliments déshydratés : options barrières moyennes-hautes",
                "item3": "Aliments santé : positionnement haut de gamme sur le marché",
                "note": "S'aligne avec les valeurs de la certification bio"
            },
            "markets": {
                "title": "Marchés américains et européens",
                "item1": "UE : EN 13432 requise pour de nombreux détaillants",
                "item2": "États-Unis : certification BPI pour les installations commerciales",
                "item3": "Californie : solide infrastructure de compostage",
                "note": "Conforme aux exigences régionales"
            },
            "stories": {
                "title": "Témoignages de clients",
                "usCoffee": {
                    "label": "Torréfacteur américain",
                    "desc": "Est passé à 50 000 unités/mois de sachets certifiés BPI. \"Nos partenaires de cafés adorent l'histoire éco-responsable, c'est un point de vente clé\"."
                },
                "euOrganic": {
                    "label": "Marque bio européenne",
                    "desc": "Les sachets certifiés EN 13432 ont permis d'entrer chez Whole Foods UE. Augmentation de 25% du placement dans les rayons haut de gamme."
                }
            }
        },
        "marketData": {
            "title": "Données de marché et de performance",
            "metrics": {
                "marketSize": "Taille du marché mondial 2024",
                "cagr": "TCAC 2024-2030",
                "decompTime": "Jours pour se décomposer",
                "tempRange": "Température de compostage"
            },
            "tableTitle": "Performance des matériaux compostables industriels",
            "headers": ["Matériau", "Niveau barrière", "Durée de conservation", "Certifications"],
            "rows": [
                ["Film PLA", "Faible-Moyen", "6-9 mois", "EN 13432, ASTM D6400"],
                ["Mélange PLA + PBAT", "Moyen", "9-12 months", "EN 13432, BPI"],
                ["Barrière Kraft + PLA", "Moyen", "9-12 months", "EN 13432, BPI"],
                ["Bio-PBS", "Moyen-Élevé", "12+ mois", "EN 13432"]
            ],
            "impactTitle": "Métriques d'impact environnemental",
            "impact": {
                "co2": "CO₂ par rapport au plastique conventionnel",
                "microplastics": "Microplastiques après compostage",
                "biomass": "Se biodégrade en biomasse"
            }
        },
        "comparison": {
            "title": "Comparaison de matériaux",
            "intro": "Comparez le compostable industriel avec d'autres options écologiques :",
            "tableTitle": "Comparaison des emballages éco-responsables",
            "headers": ["Critère", "Compostable industriel", "Compostable à domicile", "Mono-PE recyclable"],
            "rows": [
                ["Fin de vie", "Centre commercial", "Bac de jardin", "Filière de recyclage"],
                ["Niveau barrière", "⭐⭐⭐⭐", "⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Durée de conservation", "9-12+ mois", "3-6 mois", "12-18 mois"],
                ["Attrait du consommateur", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                ["Surcoût", "+15-25%", "+25-35%", "+5-10%"]
            ],
            "decisionGuideTitle": "Guide de décision rapide",
            "chooseIndustrial": "Choisissez le compostable industriel si :",
            "industrialPoints": [
                "Besoin d'une durée de conservation de 9-12+ mois",
                "Les clients ont accès au compostage commercial",
                "BPI/EN 13432 requis"
            ],
            "chooseHome": "Choisissez le compostable à domicile si :",
            "homePoints": [
                "Les clients compostent chez eux",
                "Marchés AU/UK",
                "En savoir plus →"
            ],
            "chooseRecyclable": "Choisissez le recyclable si :",
            "recyclablePoints": [
                "Barrière maximale requise",
                "Recyclage plus accessible",
                "En savoir plus →"
            ]
        },
        "aiSearch": {
            "title": "Recherche d'emballages compostables industriels",
            "intro": "Si vous utilisez la recherche IA (Gemini, ChatGPT), essayez de demander :",
            "questions": [
                "\"EN 13432 vs ASTM D6400 : de quelle certification ai-je besoin ?\"",
                "\"Quel est le meilleur fournisseur de sachets compostables certifiés BPI pour le café ?\"",
                "\"Emballage compostable industriel avec haute barrière pour snacks\"",
                "\"Combien de temps l'emballage compostable industriel met-il à se décomposer ?\""
            ]
        },
        "riskHedging": {
            "title": "Le compostable industriel est-il fait pour vous ?",
            "bestFit": {
                "title": "✅ Idéal pour...",
                "points": [
                    "Produits ayant besoin d'une durée de conservation de 9-12+ mois",
                    "Café, thé, snacks nécessitant une bonne barrière",
                    "Marchés avec collecte sélective (CA, WA, UE)",
                    "Produits B2B où les acheteurs ont accès à un centre de traitement"
                ]
            },
            "alsoWorks": {
                "title": "⚠️ Fonctionne aussi pour...",
                "points": [
                    "Marques sensibilisant les consommateurs sur le compostage",
                    "Produits ayant des besoins barrières modérés",
                    "Entreprises renforçant leur démarche RSE"
                ]
            },
            "notRecommended": {
                "title": "❌ Non recommandé si...",
                "points": [
                    "Les clients n'ont pas accès au compostage commercial",
                    "Vous avez besoin d'une barrière ultra-haute (18 mois et plus)",
                    "Considérez le compostable à domicile pour la vente directe →"
                ]
            }
        },
        "decisionCta": {
            "title": "Prêt à passer au compostable industriel ?",
            "call": {
                "title": "Prêt à avancer rapidement ?",
                "desc": "Réservez un appel pour discuter de vos certifications",
                "btn": "Réserver un appel"
            },
            "samples": {
                "title": "Vous voulez tester en premier ?",
                "desc": "Commandez des échantillons compostables industriels",
                "btn": "Obtenir des échantillons"
            },
            "explore": {
                "title": "Encore en train d'explorer ?",
                "desc": "Comparez avec le compostable à domicile ou recyclable",
                "btn": "Comparez les options"
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
    if 'industrialCompostable' not in data['seoPages']['pages']:
        data['seoPages']['pages']['industrialCompostable'] = {}
        
    pe_section = data['seoPages']['pages']['industrialCompostable']
    
    # Merge new_data into industrialCompostable
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
    print("Done all updates for Industrial Compostable!")
