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
            "intro": "If you are a brand selling to eco-conscious consumers who compost at home, or targeting markets like Australia, UK, or Germany where home composting is common—home compostable packaging lets your customers dispose responsibly in their own backyard.",
            "organic": {
                "title": "Organic Food Brands",
                "desc": "Complete the eco story from product to packaging"
            },
            "tea": {
                "title": "Tea & Herbal Products",
                "desc": "Natural products deserve natural disposal"
            },
            "markets": {
                "title": "AU/UK/EU Sellers",
                "desc": "Meet local composting certifications"
            }
        },
        "certifications": {
            "title": "Home Compostable Certifications",
            "verificationNote": "Verify our certifications: View all our compostable certifications and download official documents at our Certificates Page."
        },
        "scenarios": {
            "title": "Industry Applications",
            "intro": "Home compostable packaging is ideal for brands targeting eco-conscious consumers who compost at home:",
            "teaCoffee": {
                "title": "Specialty Tea & Coffee",
                "item1": "Loose Leaf Tea: Kraft/PLA sachets for premium tea",
                "item2": "Single Origin Coffee: Small batch roasters",
                "item3": "Herbal Blends: Natural products, natural disposal",
                "note": "Perfect for farmers market & specialty retail"
            },
            "organicFood": {
                "title": "Organic Food Brands",
                "item1": "Organic Snacks: Complete the eco-story",
                "item2": "Dried Fruits: Clear window options available",
                "item3": "Seeds & Nuts: Short shelf life products",
                "note": "Appeals to health & eco-conscious consumers"
            },
            "markets": {
                "title": "AU/UK/EU Markets",
                "item1": "Australia: AS 5810 certified for local compliance",
                "item2": "UK: Garden composting culture strong",
                "item3": "Germany: High home composting adoption",
                "note": "Regional certifications available"
            },
            "stories": {
                "title": "Customer Success Stories",
                "auTea": {
                    "label": "Australian Tea Brand",
                    "desc": "Switched to AS 5810 certified pouches. Customer feedback: \"Love that I can compost the bag with my tea leaves!\""
                },
                "ukSnack": {
                    "label": "UK Organic Snacks",
                    "desc": "Launched with OK Home certified bags. 40% of customers mentioned packaging in positive reviews."
                }
            }
        },
        "marketData": {
            "title": "Market & Performance Data",
            "metrics": {
                "ukCompost": "UK Households Compost at Home",
                "auCompost": "Australian Home Composters",
                "decompTime": "Days to Full Decomposition",
                "tempRange": "Ambient Temperature Composting"
            },
            "tableTitle": "Home Compostable Material Options",
            "headers": ["Material", "Decomposition", "Shelf Life", "Certifications"],
            "rows": [
                ["Kraft/PLA", "90-180 days", "3-6 months", "OK Home, AS5810"],
                ["PBAT/PLA Blend", "90-180 days", "6-9 months", "OK Home"],
                ["NatureFlex™", "45-90 days", "6-12 months", "OK Home, TÜV"],
                ["Paper/PLA", "60-120 days", "3-6 months", "OK Home, AS5810"]
            ],
            "impactTitle": "Environmental Impact: Home vs Landfill",
            "impact": {
                "microplastics": "Microplastics after composting",
                "nutrients": "Returns nutrients to soil",
                "co2": "CO₂ vs plastic in landfill"
            }
        },
        "comparison": {
            "title": "Material Comparison",
            "intro": "Understanding home vs industrial compostable helps you make the right choice:",
            "tableTitle": "Home Compostable vs Industrial Compostable",
            "headers": ["Feature", "🏡 Home Compostable", "🏭 Industrial Compostable"],
            "rows": [
                ["Temperature Required", "✓ 20-30°C (ambient)", "58°C+ (controlled)"],
                ["Where to Compost", "✓ Backyard bin", "Commercial facility"],
                ["Consumer Accessibility", "✓ Easy - home garden", "△ Requires facility access"],
                ["Barrier Properties", "△ Low-Medium", "✓ Medium-High"],
                ["Shelf Life", "3-9 months", "9-12+ months"],
                ["Cost", "△ Higher premium", "✓ More economical"]
            ],
            "decisionGuideTitle": "Quick Decision Guide",
            "chooseHome": "Choose Home Compostable if:",
            "homePoints": [
                "Your customers have gardens/compost bins",
                "Selling in AU/UK/EU markets",
                "Products with 3-6 month shelf life",
                "Premium eco-story is key differentiator"
            ],
            "chooseIndustrial": "Choose Industrial Compostable if:",
            "industrialPoints": [
                "Need longer shelf life (9-12+ months)",
                "Higher barrier required",
                "Commercial composting accessible to customers",
                "Learn more →"
            ]
        },
        "aiSearch": {
            "title": "Finding Home Compostable Packaging",
            "intro": "If you're using AI search (Gemini, ChatGPT), try asking:",
            "questions": [
                "\"What's the difference between home and industrial compostable packaging?\"",
                "\"Best OK Compost HOME certified pouch supplier?\"",
                "\"Can home compostable bags handle coffee with degassing valve?\"",
                "\"AS 5810 certified packaging for Australian market\""
            ]
        },
        "riskHedging": {
            "title": "Is Home Compostable Right for You?",
            "bestFit": {
                "title": "✅ Best Fit For...",
                "points": [
                    "Products with short shelf life (3-6 months)",
                    "Markets with active home composting culture",
                    "Consumers who garden or compost at home",
                    "Premium products where eco-value justifies cost"
                ]
            },
            "alsoWorks": {
                "title": "⚠️ Also Works For...",
                "points": [
                    "Brands with educational consumer base",
                    "Products not needing high barrier",
                    "Regional launches in eco-conscious areas"
                ]
            },
            "notRecommended": {
                "title": "❌ Not Recommended If...",
                "points": [
                    "You need 12+ month shelf life",
                    "High barrier is required",
                    "Consider industrial compostable →"
                ]
            }
        },
        "decisionCta": {
            "title": "Ready to Go Home Compostable?",
            "call": {
                "title": "Ready to Move Fast?",
                "desc": "Book a call to discuss certifications",
                "btn": "Book a Call"
            },
            "samples": {
                "title": "Want to Test First?",
                "desc": "Order home compostable samples",
                "btn": "Get Samples"
            },
            "explore": {
                "title": "Still Exploring?",
                "desc": "Compare home vs industrial options",
                "btn": "Compare Options"
            }
        }
    }
}

new_data_zhtw = {
    "title": "家庭可堆肥包裝袋 | OK Home 認證環保袋",
    "heroTitle": "可以在後院分解的環保包裝袋",
    "heroSubtitle": "無需依賴工業回收設施。只需將其投入花園堆肥箱，即可看著它化為土壤。最純粹的環保選擇。",
    "introSummary": "通過 OK Compost HOME 和 AS 5810 認證的環保袋，可在常溫後院堆肥環境中分解。在 6-12 個月內，包裝將化為花園土壤，無需特殊處理設施。",
    "ctaTitle": "尋找真正的家庭可堆肥包裝？",
    "ctaDescription": "採用您的顧客能親自在後院進行堆肥處置的認證包裝，拒絕綠色洗腦，只提供真實的環保成效。",
    "ctaButtonText": "免費獲取樣品",
    "sections": {
        "targetAudience": {
            "title": "本頁面是否適合您？",
            "intro": "如果您是向注重環保且會在家進行堆肥的消費者銷售產品的品牌，或目標市場為澳洲、英國、德國等家庭堆肥盛行的地區，家庭可堆肥包裝能讓您的顧客在自家後院進行負責任的包裝處置。",
            "organic": {
                "title": "有機食品品牌",
                "desc": "實現從產品到包裝的完整環保故事"
            },
            "tea": {
                "title": "茶葉與草本產品",
                "desc": "天然的產品，理應配以自然的處置方式"
            },
            "markets": {
                "title": "澳/英/歐賣家",
                "desc": "滿足當地家庭堆肥認證與法規"
            }
        },
        "certifications": {
            "title": "家庭可堆肥認證",
            "verificationNote": "驗證我們的認證：歡迎在我們的「證書頁面」查看所有可堆肥證書並下載官方文件。"
        },
        "scenarios": {
            "title": "行業應用案例",
            "intro": "家庭可堆肥包裝非常適合以自家進行堆肥的環保消費者為目標的品牌：",
            "teaCoffee": {
                "title": "精品茶與咖啡",
                "item1": "散裝茶葉：採用牛皮紙/PLA袋包裝精品茶葉",
                "item2": "單一產區咖啡：適用於小批量烘焙商",
                "item3": "草本調配茶：天然的產品，自然的處置方式",
                "note": "非常適合農夫市集及精品零售渠道"
            },
            "organicFood": {
                "title": "有機食品品牌",
                "item1": "有機零食：實現完整的環保故事",
                "item2": "透明窗口：提供帶有透明窗口的可堆肥袋選擇",
                "item3": "堅果與種子：適用於保質期較短的產品",
                "note": "深受健康和環保意識消費者的青睞"
            },
            "markets": {
                "title": "澳/英/歐市場",
                "item1": "澳洲：通過 AS 5810 認證，符合當地合規要求",
                "item2": "英國：庭院堆肥文化十分盛行",
                "item3": "德國：家庭堆肥普及率非常高",
                "note": "可提供符合特定地區要求的認證"
            },
            "stories": {
                "title": "客戶成功案例",
                "auTea": {
                    "label": "澳洲茶葉品牌",
                    "desc": "改用通過 AS 5810 認證的可堆肥袋。客戶反饋說：「超愛這包裝！茶葉泡完可以跟袋子一起直接丟進堆肥箱！」"
                },
                "ukSnack": {
                    "label": "英國有機零食",
                    "desc": "採用 OK Home 認證的環保袋推出產品。在正面評價中，有高達 40% 的顧客特別提及了環保包裝。"
                }
            }
        },
        "marketData": {
            "title": "市場與性能數據",
            "metrics": {
                "ukCompost": "英國家庭進行後院堆肥比例",
                "auCompost": "澳洲家庭進行後院堆肥比例",
                "decompTime": "完全分解所需天數",
                "tempRange": "常溫環境堆肥要求"
            },
            "tableTitle": "家庭可堆肥材料選擇",
            "headers": ["材料結構", "分解時間", "保質期", "相關認證"],
            "rows": [
                ["牛皮紙/PLA", "90-180 天", "3-6 個月", "OK Home, AS5810"],
                ["PBAT/PLA 共混物", "90-180 天", "6-9 個月", "OK Home"],
                ["NatureFlex™ 纖維素膜", "45-90 天", "6-12 個月", "OK Home, TÜV"],
                ["紙質單材質", "60-120 天", "3-6 個月", "OK Home, AS5810"]
            ],
            "impactTitle": "環境影響：家庭堆肥 vs 垃圾填埋",
            "impact": {
                "microplastics": "堆肥完成後微塑料殘留量",
                "nutrients": "完全轉化為土壤養分",
                "co2": "相比填埋常規塑料減少 CO₂ 排放"
            }
        },
        "comparison": {
            "title": "材料性能對比",
            "intro": "了解家庭堆肥與工業堆肥的差別，有助於您做出最合適的選擇：",
            "tableTitle": "家庭可堆肥 vs 工業可堆肥",
            "headers": ["性能指標", "🏡 家庭可堆肥 (Home)", "🏭 工業可堆肥 (Industrial)"],
            "rows": [
                ["所需溫度", "✓ 20-30°C (常溫環境)", "58°C+ (高溫控制環境)"],
                ["堆肥場所", "✓ 自家後院堆肥箱", "商業/市政堆肥設施"],
                ["顧客處置便利性", "✓ 極簡 - 自家花園處理", "△ 需送往專門回收設施"],
                ["阻隔性能", "△ 較低至中等", "✓ 中等至優異"],
                ["產品保質期", "3-9 個月", "9-12+ 個月"],
                ["成本溢價", "△ 溢價較高", "✓ 相比家庭堆肥更經濟"]
            ],
            "decisionGuideTitle": "快速決策指南",
            "chooseHome": "符合以下情況時，請選擇家庭可堆肥：",
            "homePoints": [
                "您的目標顧客擁有花園或家庭堆肥箱",
                "產品銷往澳洲、英國或歐盟等環保市場",
                "產品保質期需求在 3-6 個月以內",
                "極致的環保故事是您品牌的核心競爭力"
            ],
            "chooseIndustrial": "符合以下情況時，請選擇工業可堆肥：",
            "industrialPoints": [
                "產品需要更長的保質期 (9-12+ 個月)",
                "對防潮防氧氣阻隔性能要求較高",
                "您的目標消費群體能方便地接觸到商業堆肥設施",
                "了解更多詳情 →"
            ]
        },
        "aiSearch": {
            "title": "尋找家庭可堆肥包裝袋",
            "intro": "如果您使用 AI 搜尋（如 Gemini、ChatGPT），可以嘗試提問：",
            "questions": [
                "「家庭可堆肥與工業可堆肥包裝有什麼具體區別？」",
                "「推薦獲得 OK Compost HOME 認證的環保袋供應商」",
                "「家庭可堆肥袋可以配帶單向排氣閥的咖啡包裝嗎？」",
                "「適合澳洲市場的 AS 5810 認證可堆肥包裝袋」"
            ]
        },
        "riskHedging": {
            "title": "家庭可堆肥包裝是否適合您？",
            "bestFit": {
                "title": "✅ 最適合的場景...",
                "points": [
                    "產品保質期較短 (3-6 個月)",
                    "目標市場具有成熟的家庭堆肥文化",
                    "消費者會主動在庭院進行堆肥處置",
                    "高端定位且其環保溢價能帶來溢價回報"
                ]
            },
            "alsoWorks": {
                "title": "⚠️ 同樣適用於...",
                "points": [
                    "願意配合進行環保引導宣傳的品牌",
                    "對阻隔性能要求不高的乾貨產品",
                    "在環保意識極高地區進行的區域性發售"
                ]
            },
            "notRecommended": {
                "title": "❌ 不推薦用於...",
                "points": [
                    "需要 12 個月以上長保質期的產品",
                    "對阻隔、防潮防氧要求極高的產品",
                    "考慮改用工業可堆肥方案 →"
                ]
            }
        },
        "decisionCta": {
            "title": "準備好採用家庭可堆肥包裝了嗎？",
            "call": {
                "title": "想快速推進項目？",
                "desc": "立即預約諮詢，討論您的認證要求",
                "btn": "預約通話"
            },
            "samples": {
                "title": "想先測試樣品？",
                "desc": "立即訂購家庭可堆肥樣品包",
                "btn": "獲取樣品"
            },
            "explore": {
                "title": "仍在對比評估？",
                "desc": "對比家庭可堆肥與工業可堆肥方案",
                "btn": "對比方案"
            }
        }
    }
}

new_data_es = {
    "title": "Envases Compostables Domésticos | Bolsas Certificadas OK Home",
    "heroTitle": "Bolsas que desaparecen en su propio jardín",
    "heroSubtitle": "Sin necesidad de instalaciones industriales. Simplemente tírelas en el compost de su jardín y observe cómo se convierten en tierra.",
    "introSummary": "Bolsas certificadas OK Compost HOME y AS 5810 que se descomponen a temperatura ambiente en el jardín. En 6-12 meses, su envase se convierte en tierra fértil.",
    "ctaTitle": "¿Listo para el verdadero compostaje doméstico?",
    "ctaDescription": "Obtenga envases certificados que sus clientes realmente puedan compostar en sus hogares. Sin lavado de imagen ecológico, solo resultados.",
    "ctaButtonText": "Obtener muestras gratis",
    "sections": {
        "targetAudience": {
            "title": "¿Es esta página para usted?",
            "intro": "Si es una marca que vende a consumidores conscientes del medio ambiente que compostan en casa, o si se dirige a mercados como Australia, el Reino Unido o Alemania, donde el compostaje doméstico es común, los envases compostables domésticos permiten a sus clientes desechar de manera responsable en su propio patio trasero.",
            "organic": {
                "title": "Marcas de alimentos orgánicos",
                "desc": "Complete la historia ecológica desde el producto hasta el envase"
            },
            "tea": {
                "title": "Productos de té y hierbas",
                "desc": "Los productos naturales merecen una eliminación natural"
            },
            "markets": {
                "title": "Vendedores de AU/UK/UE",
                "desc": "Cumpla con las certificaciones locales de compostaje"
            }
        },
        "certifications": {
            "title": "Certificaciones de compostaje doméstico",
            "verificationNote": "Verifique nuestras certificaciones: Vea todas nuestras certificaciones de compostaje y descargue documentos oficiales en nuestra página de certificados."
        },
        "scenarios": {
            "title": "Aplicaciones de la industria",
            "intro": "El envase compostable doméstico es ideal para marcas que se dirigen a consumidores que compostan en casa:",
            "teaCoffee": {
                "title": "Té y café de especialidad",
                "item1": "Té de hoja suelta: sobres de Kraft/PLA para té premium",
                "item2": "Café de origen único: tostadores de lotes pequeños",
                "item3": "Mezclas de hierbas: productos naturales, eliminación natural",
                "note": "Perfecto para mercados de agricultores y venta minorista especializada"
            },
            "organicFood": {
                "title": "Marcas de alimentos orgánicos",
                "item1": "Snacks orgánicos: complete la historia ecológica",
                "item2": "Frutas deshidratadas: opciones de ventana transparente disponibles",
                "item3": "Semillas y frutos secos: productos de corta vida útil",
                "note": "Atrae a consumidores conscientes de la salud y la ecología"
            },
            "markets": {
                "title": "Mercados de AU/UK/UE",
                "item1": "Australia: certificado AS 5810 para el cumplimiento local",
                "item2": "Reino Unido: fuerte cultura de compostaje en el jardín",
                "item3": "Alemania: alta adopción del compostaje doméstico",
                "note": "Certificaciones regionales disponibles"
            },
            "stories": {
                "title": "Casos de éxito de clientes",
                "auTea": {
                    "label": "Marca de té australiana",
                    "desc": "Cambió a bolsas certificadas AS 5810. Comentarios de los clientes: \"¡Me encanta poder compostar la bolsa con las hojas de té!\""
                },
                "ukSnack": {
                    "label": "Snacks orgánicos del Reino Unido",
                    "desc": "Lanzado con bolsas certificadas OK Home. El 40% de los clientes mencionaron el envase en reseñas positivas."
                }
            }
        },
        "marketData": {
            "title": "Datos de mercado y rendimiento",
            "metrics": {
                "ukCompost": "Hogares del Reino Unido que compostan en casa",
                "auCompost": "Compostadores domésticos australianos",
                "decompTime": "Días para la descomposición completa",
                "tempRange": "Compostaje a temperatura ambiente"
            },
            "tableTitle": "Opciones de materiales compostables domésticos",
            "headers": ["Material", "Descomposición", "Vida útil", "Certificaciones"],
            "rows": [
                ["Kraft/PLA", "90-180 días", "3-6 meses", "OK Home, AS5810"],
                ["Mezcla PBAT/PLA", "90-180 días", "6-9 meses", "OK Home"],
                ["NatureFlex™", "45-90 días", "6-12 meses", "OK Home, TÜV"],
                ["Monomaterial de papel", "60-120 días", "3-6 meses", "OK Home, AS5810"]
            ],
            "impactTitle": "Impacto ambiental: hogar frente a vertedero",
            "impact": {
                "microplastics": "Microplásticos después del compostaje",
                "nutrients": "Devuelve nutrientes al suelo",
                "co2": "CO₂ en comparación con el plástico en el vertedero"
            }
        },
        "comparison": {
            "title": "Comparación de materiales",
            "intro": "Comprender la diferencia entre el compostable doméstico y el industrial le ayuda a tomar la decisión correcta:",
            "tableTitle": "Compostable doméstico frente a industrial",
            "headers": ["Característica", "🏡 Compostable doméstico", "🏭 Compostable industrial"],
            "rows": [
                ["Temperatura requerida", "✓ 20-30°C (ambiente)", "58°C+ (controlada)"],
                ["Dónde compostar", "✓ Contenedor de jardín", "Instalación comercial"],
                ["Accesibilidad del consumidor", "✓ Fácil - jardín de casa", "△ Requiere acceso a instalación"],
                ["Propiedades de barrera", "△ Baja-Media", "✓ Media-Alta"],
                ["Vida útil", "3-9 meses", "9-12+ meses"],
                ["Costo", "△ Mayor prima", "✓ Más económico"]
            ],
            "decisionGuideTitle": "Guía de decisión rápida",
            "chooseHome": "Elija compostable doméstico si:",
            "homePoints": [
                "Sus clientes tienen jardines/contenedores de compost",
                "Vende en mercados de AU/UK/UE",
                "Productos con vida útil de 3-6 meses",
                "La historia ecológica premium es el diferenciador clave"
            ],
            "chooseIndustrial": "Elija compostable industrial si:",
            "industrialPoints": [
                "Necesita una vida útil más larga (9-12+ meses)",
                "Se requiere una barrera más alta",
                "Compostaje comercial accesible para los clientes",
                "Saber más →"
            ]
        },
        "aiSearch": {
            "title": "Búsqueda de envases compostables domésticos",
            "intro": "Si está utilizando la búsqueda de IA (Gemini, ChatGPT), intente preguntar:",
            "questions": [
                "\"¿Cuál es la diferencia entre envases compostables domésticos e industriales?\"",
                "\"¿Cuál es el mejor proveedor de bolsas certificadas OK Compost HOME?\"",
                "\"¿Pueden las bolsas compostables domésticas manejar café con válvula desgasificadora?\"",
                "\"Envases certificados AS 5810 para el mercado australiano\""
            ]
        },
        "riskHedging": {
            "title": "¿Es el compostable doméstico adecuado para usted?",
            "bestFit": {
                "title": "✅ Ideal para...",
                "points": [
                    "Productos con vida útil corta (3-6 meses)",
                    "Mercados con cultura activa de compostaje doméstico",
                    "Consumidores que tienen jardín o compostan en casa",
                    "Productos premium donde el valor ecológico justifica el costo"
                ]
            },
            "alsoWorks": {
                "title": "⚠️ Funciona también para...",
                "points": [
                    "Marcas con base de consumidores educativa",
                    "Productos que no necesitan alta barrera",
                    "Lanzamientos regionales en zonas ecológicamente conscientes"
                ]
            },
            "notRecommended": {
                "title": "❌ No recomendado si...",
                "points": [
                    "Necesita una vida útil de más de 12 meses",
                    "Se requiere alta barrera contra la humedad/oxígeno",
                    "Considere el compostable industrial en su lugar →"
                ]
            }
        },
        "decisionCta": {
            "title": "¿Listo para pasar al compostable doméstico?",
            "call": {
                "title": "¿Listo para avanzar rápido?",
                "desc": "Reserve una llamada para discutir las especificaciones",
                "btn": "Reservar una llamada"
            },
            "samples": {
                "title": "¿Quiere probar primero?",
                "desc": "Ordene muestras compostables domésticas",
                "btn": "Obtener muestras"
            },
            "explore": {
                "title": "¿Aún explorando?",
                "desc": "Compare opciones domésticas frente a industriales",
                "btn": "Compare opciones"
            }
        }
    }
}

new_data_fr = {
    "title": "Emballages Compostables à Domicile | Sachets Certifiés OK Home",
    "heroTitle": "Des sachets qui disparaissent dans votre jardin",
    "heroSubtitle": "Pas besoin d'installations industrielles. Jetez-les simplement dans le compost de votre jardin et regardez-les se transformer en terre.",
    "introSummary": "Sachets certifiés OK Compost HOME et AS 5810 qui se décomposent à température ambiante. En 6 à 12 mois, votre emballage devient du compost fertile.",
    "ctaTitle": "Prêt pour le vrai compostage domestique ?",
    "ctaDescription": "Obtenez des emballages certifiés que vos clients peuvent réellement composter chez eux. Pas de greenwashing, juste des résultats.",
    "ctaButtonText": "Obtenir des échantillons gratuits",
    "sections": {
        "targetAudience": {
            "title": "Cette page est-elle pour vous ?",
            "intro": "Si vous êtes une marque qui vend à des consommateurs éco-responsables qui compostent à domicile, ou si vous ciblez des marchés comme l'Australie, le Royaume-Uni ou l'Allemagne où le compostage domestique est courant, les emballages compostables à domicile permettent à vos clients de les éliminer de manière responsable dans leur propre jardin.",
            "organic": {
                "title": "Marques d'aliments biologiques",
                "desc": "Complétez l'histoire écologique du produit jusqu'à l'emballage"
            },
            "tea": {
                "title": "Produits de thé et d'herbes",
                "desc": "Les produits naturels méritent une élimination naturelle"
            },
            "markets": {
                "title": "Vendeurs AU/UK/UE",
                "desc": "Respectez les certifications de compostage locales"
            }
        },
        "certifications": {
            "title": "Certifications de compostage domestique",
            "verificationNote": "Vérifiez nos certifications : Retrouvez toutes nos certifications compostables et téléchargez les documents officiels sur notre page Certificats."
        },
        "scenarios": {
            "title": "Applications industrielles",
            "intro": "L'emballage compostable à domicile est idéal pour les marques ciblant les consommateurs qui compostent chez eux :",
            "teaCoffee": {
                "title": "Thé et café de spécialité",
                "item1": "Thé en feuilles : sachets en Kraft/PLA pour thé de qualité supérieure",
                "item2": "Café d'origine unique : torréfacteurs artisanaux",
                "item3": "Mélanges d'herbes : produits naturels, élimination naturelle",
                "note": "Parfait pour les marchés de producteurs et les boutiques spécialisées"
            },
            "organicFood": {
                "title": "Marques d'aliments biologiques",
                "item1": "Snacks bio : complétez l'histoire éco-responsable",
                "item2": "Fruits secs : options de fenêtre transparente disponibles",
                "item3": "Graines et noix : produits à courte durée de conservation",
                "note": "Attire les consommateurs soucieux de leur santé et de l'environnement"
            },
            "markets": {
                "title": "Marchés AU/UK/UE",
                "item1": "Australie : certifié AS 5810 pour la conformité locale",
                "item2": "Royaume-Uni : forte culture de compostage dans le jardin",
                "item3": "Allemagne : adoption élevée du compostage domestique",
                "note": "Certifications régionales disponibles"
            },
            "stories": {
                "title": "Témoignages de clients",
                "auTea": {
                    "label": "Marque de thé australienne",
                    "desc": "Est passée aux sachets certifiés AS 5810. Retour client : \"J'adore pouvoir composter le sachet avec mes feuilles de thé !\""
                },
                "ukSnack": {
                    "label": "Snacks bio au Royaume-Uni",
                    "desc": "Lancés avec des sachets certifiés OK Home. 40% des clients ont mentionné l'emballage dans des avis positifs."
                }
            }
        },
        "marketData": {
            "title": "Données de marché et de performance",
            "metrics": {
                "ukCompost": "Foyers britanniques qui compostent à domicile",
                "auCompost": "Composteurs domestiques australiens",
                "decompTime": "Jours pour une décomposition complète",
                "tempRange": "Compostage à température ambiante"
            },
            "tableTitle": "Options de matériaux compostables à domicile",
            "headers": ["Matériau", "Décomposition", "Durée de conservation", "Certifications"],
            "rows": [
                ["Kraft/PLA", "90-180 jours", "3-6 mois", "OK Home, AS5810"],
                ["Mélange PBAT/PLA", "90-180 jours", "6-9 mois", "OK Home"],
                ["NatureFlex™", "45-90 jours", "6-12 mois", "OK Home, TÜV"],
                ["Papier mono-matériau", "60-120 jours", "3-6 mois", "OK Home, AS5810"]
            ],
            "impactTitle": "Impact environnemental : maison vs décharge",
            "impact": {
                "microplastics": "Microplastiques après compostage",
                "nutrients": "Retourne les nutriments au sol",
                "co2": "CO₂ par rapport au plastique en décharge"
            }
        },
        "comparison": {
            "title": "Comparaison de matériaux",
            "intro": "Comprendre la différence entre le compostable à domicile et l'industriel vous aide à faire le bon choix :",
            "tableTitle": "Compostable à domicile vs industriel",
            "headers": ["Caractéristique", "🏡 Compostable à domicile", "🏭 Compostable industriel"],
            "rows": [
                ["Température requise", "✓ 20-30°C (ambiante)", "58°C+ (contrôlée)"],
                ["Où composter", "✓ Bac de jardin", "Installation commerciale"],
                ["Accessibilité du consommateur", "✓ Facile - jardin de la maison", "△ Requiert un accès à l'installation"],
                ["Propriétés barrières", "△ Faible-Moyenne", "✓ Moyenne-Élevée"],
                ["Durée de conservation", "3-9 mois", "9-12+ mois"],
                ["Coût", "△ Prime plus élevée", "✓ Plus économique"]
            ],
            "decisionGuideTitle": "Guide de décision rapide",
            "chooseHome": "Choisissez le compostable à domicile si :",
            "homePoints": [
                "Vos clients ont des jardins/bacs de compostage",
                "Vendez sur les marchés AU/UK/UE",
                "Produits avec une durée de conservation de 3-6 mois",
                "L'histoire écologique de qualité supérieure est le principal facteur de différenciation"
            ],
            "chooseIndustrial": "Choisissez le compostable industriel si :",
            "industrialPoints": [
                "Besoin d'une durée de conservation plus longue (9-12+ mois)",
                "Barrière plus élevée requise",
                "Compostage commercial accessible pour les clients",
                "En savoir plus →"
            ]
        },
        "aiSearch": {
            "title": "Recherche d'emballages compostables à domicile",
            "intro": "Si vous utilisez la recherche IA (Gemini, ChatGPT), essayez de demander :",
            "questions": [
                "\"Quelle est la différence entre les emballages compostables à domicile et industriels ?\"",
                "\"Quel est le meilleur fournisseur de sachets certifiés OK Compost HOME ?\"",
                "\"Les sachets compostables à domicile peuvent-ils contenir du café avec valve de dégazage ?\"",
                "\"Emballages certifiés AS 5810 pour le marché australien\""
            ]
        },
        "riskHedging": {
            "title": "Le compostable à domicile est-il fait pour vous ?",
            "bestFit": {
                "title": "✅ Idéal pour...",
                "points": [
                    "Produits à courte durée de conservation (3-6 mois)",
                    "Marchés avec une culture active de compostage domestique",
                    "Consommateurs qui ont un jardin ou compostent chez eux",
                    "Produits haut de gamme où la valeur écologique justifie le coût"
                ]
            },
            "alsoWorks": {
                "title": "⚠️ Fonctionne aussi pour...",
                "points": [
                    "Marques avec une base de consommateurs à sensibiliser",
                    "Produits ne nécessitant pas de haute barrière",
                    "Lancements régionaux dans des zones éco-responsables"
                ]
            },
            "notRecommended": {
                "title": "❌ Non recommandé si...",
                "points": [
                    "Vous avez besoin d'une durée de conservation de 12 mois et plus",
                    "Une barrière élevée contre l'humidité/oxygène est requise",
                    "Considérez le compostable industriel à la place →"
                ]
            }
        },
        "decisionCta": {
            "title": "Prêt à passer au compostable à domicile ?",
            "call": {
                "title": "Prêt à avancer rapidement ?",
                "desc": "Réservez un appel pour discuter des certifications",
                "btn": "Réserver un appel"
            },
            "samples": {
                "title": "Vous voulez tester en premier ?",
                "desc": "Commandez des échantillons compostables à domicile",
                "btn": "Obtenir des échantillons"
            },
            "explore": {
                "title": "Encore en train d'explorer ?",
                "desc": "Comparez les options domestiques vs industrielles",
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
    if 'homeCompostable' not in data['seoPages']['pages']:
        data['seoPages']['pages']['homeCompostable'] = {}
        
    pe_section = data['seoPages']['pages']['homeCompostable']
    
    # Merge new_data into homeCompostable
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
    print("Done all updates for Home Compostable!")
