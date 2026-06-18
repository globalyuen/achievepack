import json
import os

def deep_merge(dict1, dict2):
    for key, value in dict2.items():
        if isinstance(value, dict) and key in dict1 and isinstance(dict1[key], dict):
            deep_merge(dict1[key], value)
        else:
            dict1[key] = value

translations = {
    'en': {
        'seoPages': {
            'pages': {
                'corporateSustainability': {
                    'title': 'Corporate Sustainability Packaging | ESG Reporting | Certified Materials | Achieve Pack',
                    'description': 'Corporate-grade sustainable packaging with third-party certifications for ESG reporting. Quantifiable impact data, supply chain transparency, and multi-brand solutions.',
                    'heroTitle': 'Corporate Sustainability Packaging',
                    'heroSubtitle': 'Third-Party Certified | ESG Reporting Ready | Multi-Brand Scalable',
                    'introSummary': 'Meet corporate sustainability targets with packaging backed by quantifiable data. Third-party certifications, supply chain transparency, and scalable solutions for multi-brand portfolios.',
                    'sections': {
                        'heroProblem': {
                            'title': 'Meeting Corporate Sustainability Targets',
                            'intro': 'As a Sustainability Director, you\'re tasked with meeting ambitious environmental goals while managing multiple brands and suppliers. You need packaging solutions with quantifiable impact data for corporate reporting.',
                            'challengesTitle': 'Corporate Challenges',
                            'challenges': [
                                'Multiple brands with different packaging needs',
                                'Regulatory compliance across regions',
                                'ESG reporting requirements',
                                'Supplier audit and certification needs'
                            ],
                            'needTitle': 'What You Need',
                            'need': [
                                'Quantifiable environmental impact data',
                                'Third-Party certifications for all claims',
                                'Scalable solutions across product lines',
                                'Transparent supply chain documentation'
                            ]
                        },
                        'certifications': {
                            'title': 'Third-Party Verified Certifications',
                            'intro': 'Every environmental claim we make is backed by internationally recognized third-party certifications—the documentation you need for ESG reporting and consumer-facing claims.',
                            'compostabilityTitle': 'Compostability',
                            'compostability': [
                                'ASTM D6400 (US)',
                                'EN 13432 (EU)',
                                'AS5810 (Australia)'
                            ],
                            'foodSafetyTitle': 'Food Safety',
                            'foodSafety': [
                                'BRC Certified Factory',
                                'FDA Compliant',
                                'FSSC 22000'
                            ],
                            'recyclabilityTitle': 'Recyclability',
                            'recyclability': [
                                'How2Recycle Verified',
                                'Store Drop-Off Certified',
                                'APR Design Guide'
                            ]
                        },
                        'reporting': {
                            'title': 'ESG Reporting Support',
                            'intro': 'We provide the quantifiable data you need for corporate sustainability reports—carbon footprint comparisons, plastic reduction metrics, and end-of-life documentation.',
                            'metricsTitle': 'Available Metrics & Documentation',
                            'envImpactTitle': 'Environmental Impact',
                            'envImpact': [
                                'Carbon footprint per unit (kg CO2e)',
                                'Virgin plastic reduction percentage',
                                'PCR/bio-based content certification',
                                'Water usage comparison data'
                            ],
                            'complianceTitle': 'Compliance Documents',
                            'compliance': [
                                'Certification certificates (PDF)',
                                'Material safety data sheets',
                                'Supply chain audit reports',
                                'End-of-life disposal guidelines'
                            ],
                            'captions': {
                                'compostable': 'Compostable Certified',
                                'recyclable': 'Recyclable Certified',
                                'pcr': 'PCR Content',
                                'bioPE': 'Bio-Based PE'
                            }
                        },
                        'scalable': {
                            'title': 'Scalable Multi-Brand Solutions',
                            'intro': 'Managing sustainability across multiple brands? We offer portfolio-wide packaging solutions with consistent environmental standards and centralized reporting.',
                            'col1Title': 'Food & Beverage',
                            'col1Desc': 'Coffee, tea, snacks, supplements, pet food',
                            'col2Title': 'Health & Wellness',
                            'col2Desc': 'Vitamins, protein powders, nutraceuticals',
                            'col3Title': 'Consumer Goods',
                            'col3Desc': 'Personal care, household products'
                        },
                        'supplyChain': {
                            'title': 'Transparent Supply Chain',
                            'intro': 'We maintain full supply chain transparency with documented material sourcing, factory certifications, and ethical manufacturing practices.',
                            'credentialsTitle': 'Factory Credentials',
                            'credentials': [
                                'BRC Certified',
                                'ISO 9001',
                                'ISO 14001',
                                'SEDEX Member',
                                'BSCI Audited'
                            ]
                        },
                        'cta': {
                            'title': 'Schedule a Corporate Packaging Review',
                            'description': 'Discuss your sustainability targets with our team. We\'ll provide material recommendations, impact projections, and documentation samples.',
                            'button': 'Schedule Corporate Review',
                            'browse': 'View Material Options'
                        },
                        'industryScenarios': {
                            'title': 'Industry Applications',
                            'intro': 'Different industries have different requirements for sustainable packaging. We provide tailored solutions.',
                            'foodTitle': 'Food & Beverages Group',
                            'foodDesc': 'Multiple Brand Unified management, ESG reporting Support.',
                            'foodShare': 'Share: 45%',
                            'marketTitle': 'Health & Healthcare Enterprise',
                            'marketDesc': 'Green Packaging meets Health Brand values.',
                            'marketShare': 'Share: 30%',
                            'batchTitle': 'Consumer Products Enterprise',
                            'batchDesc': 'Meeting regulatory requirements, improve Brand image.',
                            'batchShare': 'Share: 25%',
                            'successTitle': 'Customer Success Story',
                            'successDesc': '“Integrating all Group 12 Brand Packaging After, Our plastic use volume reduced 40%, ESG reporting data very impressive.” — Group Sustainable Business Director'
                        },
                        'marketData': {
                            'title': 'Market Data & Intelligence',
                            'intro': 'Enterprise Sustainable Packaging Market rapid growth, investors and Consumers All increasingly focused on ESG performance.',
                            'stat1': '$320B',
                            'stat1Label': 'Global Sustainable Packaging Market',
                            'stat1Trend': 'year growth 7.2%',
                            'stat2': '85%',
                            'stat2Label': 'Enterprise have ESG target',
                            'stat2Trend': 'growth Medium',
                            'stat3': '40%',
                            'stat3Label': 'Plastic Reduce volume target',
                            'stat3Trend': 'stable',
                            'stat4': '100%',
                            'stat4Label': 'Certification documents Support',
                            'stat4Trend': 'complete',
                            'insightsTitle': 'Market Trend Insights',
                            'insightsDesc': 'Investors are increasingly focused on enterprise ESG performance, and packaging sustainability is becoming a key evaluation criterion. The demand for packaging solutions with third-party certification continues to grow.'
                        },
                        'materialComparison': {
                            'title': 'Material Comparison',
                            'intro': 'Different Sustainable Material Certification and Report Contrast, Help You choose meets Enterprise target Solution.',
                            'headers': ['Material Type', 'Carbon Footprint Reduction', 'Third-Party Certification', 'ESG Reporting Standard', 'Recommendation Level'],
                            'row1': ['Compostable materials', '-60%', 'ASTM/EN13432', '★★★★★', 'ultra High'],
                            'row2': ['PCR Recycled Material', '-30% to 50%', 'PCR Certification', '★★★★', 'High'],
                            'row3': ['Bio-PE Bio-Based', '-50%', 'ISCC Plus', '★★★★★', 'ultra High'],
                            'row4': ['Mono-PE Recyclable', '-20%', 'How2Recycle', '★★★', 'Medium'],
                            'guideTitle': 'Material Selection Guide',
                            'guideDesc': 'For corporate sustainable packaging, we recommend selecting materials based on ESG targets and supply chain performance. We provide complete certification documents and carbon footprint data to support your ESG reporting requirements.'
                        }
                    },
                    'faq': {
                        'q1': 'What certifications do you provide for ESG reporting?',
                        'a1': 'We provide ASTM D6400, EN 13432, and AS5810 compostability certificates; How2Recycle verification for recyclable materials; PCR content verification; and bio-based content certification. All certificates are available as PDF documentation.',
                        'q2': 'Can you provide carbon footprint data for packaging?',
                        'a2': 'Yes. We provide comparative carbon footprint analysis (kg CO2e per unit) between conventional and sustainable materials, helping you quantify the environmental impact of packaging transitions for sustainability reports.',
                        'q3': 'Do you support supplier audits?',
                        'a3': 'Absolutely. Our manufacturing facilities are BRC, ISO 9001, and ISO 14001 certified. We\'re SEDEX members and have completed BSCI audits. We can provide audit reports and facilitate virtual or in-person factory inspections.',
                        'q4': 'Can you handle packaging for multiple brands?',
                        'a4': 'Yes. Many corporate clients work with us across their entire brand portfolio. We provide centralized account management, consistent sustainability standards, and consolidated reporting for multi-brand implementations.'
                    }
                },
                'ecommerceBrand': {
                    'title': 'E-commerce Packaging | DTC Brand Pouches | Reduce Shipping Costs | Achieve Pack',
                    'description': 'Lightweight e-commerce packaging optimized for DTC shipping. Reduce costs by 60%, create Instagram-worthy unboxing, durable for transit. Low MOQ from 100 pieces.',
                    'heroTitle': 'E-commerce Brand Packaging',
                    'heroSubtitle': 'Reduce Shipping Costs 60% | Instagram-Worthy Unboxing | Transit Durable',
                    'introSummary': 'Lightweight flexible pouches designed for DTC shipping. Reduce costs, create shareable unboxing experiences, and protect products in transit. Low MOQ from 100 pieces.',
                    'sections': {
                        'heroProblem': {
                            'title': 'E-commerce Packaging Challenges',
                            'intro': 'You built your health supplement brand for online sales. Every shipping cost, every damaged product, every forgettable unboxing experience directly impacts your bottom line and customer retention.',
                            'challengesTitle': 'What\'s Costing You Money',
                            'challenges': [
                                'Heavy packaging inflating shipping costs',
                                'Products damaged in transit = returns',
                                'Generic packaging = no social shares',
                                'Oversized boxes = wasted warehouse space'
                            ],
                            'needTitle': 'What Drives Growth',
                            'need': [
                                'Lightweight = lower shipping zone costs',
                                'Durable = zero damage claims',
                                'Instagram-worthy = free marketing',
                                'Space-efficient = better inventory turns'
                            ]
                        },
                        'solution': {
                            'title': 'Packaging Optimized for DTC Shipping',
                            'intro': 'Achieve Pack\'s flexible pouches are designed for e-commerce—lightweight, durable, and compact. Reduce shipping costs by up to 60% compared to rigid containers while creating unboxing experiences that get shared.',
                            'moqTitle': '75%',
                            'moqDesc': 'Lighter Than Rigid',
                            'flexTitle': '50%',
                            'flexDesc': 'Less Storage Space',
                            'plateTitle': '0.1%',
                            'plateDesc': 'Damage Rate',
                            'shareTitle': '3x',
                            'shareDesc': 'More Social Shares',
                            'examplesTitle': 'E-commerce Packaging Examples',
                            'caption1': 'Lightweight Pouch',
                            'caption2': 'Stand-Up Pouch',
                            'caption3': 'Soft Touch Finish',
                            'caption4': 'Slider Zipper'
                        },
                        'unboxing': {
                            'title': 'Create Instagram-Worthy Unboxing',
                            'intro': 'In DTC, your packaging IS your store shelf. Premium finishes and custom design transform your packaging into shareable content that drives organic growth.',
                            'finishesTitle': 'Premium Finishes',
                            'finishes': [
                                'Soft-touch lamination',
                                'Spot UV coating',
                                'Foil stamping',
                                'Matte/gloss combinations'
                            ],
                            'designTitle': 'Photo-Ready Design',
                            'design': [
                                'Full 360° printing',
                                'CMYK + Pantone',
                                'Clear windows',
                                'Custom die-cuts'
                            ],
                            'featuresTitle': 'Functional Features',
                            'features': [
                                'Resealable zippers',
                                'Easy-tear notches',
                                'Hang holes for display',
                                'QR codes'
                            ]
                        },
                        'durability': {
                            'title': 'Built for Shipping Conditions',
                            'intro': 'E-commerce packaging faces drops, compression, and temperature changes. Our multi-layer structures are engineered for transit durability while protecting product freshness.',
                            'barrierTitle': 'Barrier Protection Options',
                            'highBarrierTitle': 'High Barrier',
                            'highBarrierDesc': '12+ months shelf life. For supplements, protein powders.',
                            'medBarrierTitle': 'Medium Barrier',
                            'medBarrierDesc': '6-12 months. For snacks, dry goods.',
                            'stdBarrierTitle': 'Standard',
                            'stdBarrierDesc': '3-6 months. For quick-turn products.',
                            'features': [
                                'Puncture Resistant',
                                'Moisture Barrier',
                                'UV Protection',
                                'Oxygen Barrier'
                            ]
                        },
                        'sustainability': {
                            'title': 'Sustainable Options for Eco-Conscious Customers',
                            'intro': 'Your customers care about sustainability. Offer packaging they can feel good about without compromising on performance or aesthetics.',
                            'compostableTitle': 'Certified Compostable',
                            'compostableDesc': 'Breaks down in 90-180 days. ASTM D6400 certified.',
                            'recyclableTitle': 'Store Drop-Off Recyclable',
                            'recyclableDesc': 'Mono-PE accepted at Walmart, Target recycling.'
                        },
                        'socialProof': {
                            'title': 'Trusted by E-commerce Brands',
                            'quote': '"Switching from boxes to Achieve Pack pouches cut our shipping costs by 45%. The soft-touch finish gets so many compliments on Instagram. Our customers actually keep the pouches!"',
                            'author': 'Michael R.',
                            'role': 'Founder, SupplementsDirect.com'
                        },
                        'cta': {
                            'title': 'Calculate Your Shipping Savings',
                            'description': 'Book a consultation. We\'ll analyze your current packaging and show you exactly how much you can save.',
                            'button': 'Book Free Consultation',
                            'browse': 'Shop Now'
                        },
                        'industryScenarios': {
                            'title': 'Industry Applications',
                            'intro': 'Different types e-commerce merchant Brand for Packaging have Different Requirements, Choosing the right solution is key to improving Customer experience.',
                            'foodTitle': 'DTC Health Brand',
                            'foodDesc': 'Health supplements, Protein powder, Vitamins online sales.',
                            'foodShare': 'Share: 40%',
                            'marketTitle': 'Online food Brand',
                            'marketDesc': 'Snacks, coffee, Tea etc. Subscription services.',
                            'marketShare': 'Share: 35%',
                            'batchTitle': 'Pet e-commerce merchant',
                            'batchDesc': 'Pet Food, Snacks Online sales.',
                            'batchShare': 'Share: 25%',
                            'successTitle': 'Customer Success Story',
                            'successDesc': '“From rigid boxes Packaging conversion to flexible bags After, Our shipping costs reduce 45%, and Customer in Instagram unboxing share rate improved High 3 times.” — DTC Health supplements Brand Founder'
                        },
                        'marketData': {
                            'title': 'Market Data & Intelligence',
                            'intro': 'e-commerce merchant Packaging Market rapid growth, Customer experience and shipping costs Cost is DTC Brand core focus.',
                            'stat1': '60%',
                            'stat1Label': 'shipping costs saving potential',
                            'stat1Trend': 'Effect Benefit Significant',
                            'stat2': '3x',
                            'stat2Label': 'Social Divide Enjoy improve',
                            'stat2Trend': 'growth Medium',
                            'stat3': '0.1%',
                            'stat3Label': 'Shipping Damage rate',
                            'stat3Trend': 'ultra low',
                            'stat4': '100',
                            'stat4Label': 'maximum low Order volume',
                            'stat4Trend': 'Flexible',
                            'insightsTitle': 'Market Trend Insights',
                            'insightsDesc': 'DTC Brand increasingly focused on Packaging Social Spread effect. flexible bags Packaging because Its Light convenient, High Printing Quality and Strong Shipping Protection performance Power becoming e-commerce merchant Brand First choose.'
                        },
                        'materialComparison': {
                            'title': 'Material Comparison',
                            'intro': 'Different e-commerce merchant Packaging Features Contrast, to help you choose the best solution.',
                            'headers': ['Packaging Type', 'Heavy volume saving', 'Shipping Protection', 'unboxing experience', 'shipping costs Cost Impact'],
                            'row1': ['Soft-touch flexible bags', '-75%', '★★★★★', '★★★★★', '-60%'],
                            'row2': ['Lost Gloss', '-75%', '★★★★', '★★★★', '-55%'],
                            'row3': ['Paperboard flexible bags', '-70%', '★★★★', '★★★★', '-50%'],
                            'row4': ['traditional rigid boxes', 'Base Standard', '★★★', '★★★', 'Base Standard'],
                            'guideTitle': 'Material Selection Guide',
                            'guideDesc': 'For DTC E-commerce Brands, Soft-touch flexible bags is maximum Best choose, Both performance significantly saving shipping costs, And performance improved Supply Superior unboxing experience. Multiple types Surface Finish can improve Social Divide Enjoy rate.'
                        }
                    },
                    'faq': {
                        'q1': 'How much can I save on shipping with flexible pouches?',
                        'a1': 'Most e-commerce brands save 40-60% on shipping costs by switching from rigid containers to flexible pouches. The exact savings depend on your product weight, shipping zones, and carrier rates.',
                        'q2': 'Will flexible pouches protect my products during shipping?',
                        'a2': 'Yes. Our multi-layer structures are specifically designed for transit durability. The flexible material absorbs impacts better than rigid packaging, and our barrier layers protect against moisture and oxygen.',
                        'q3': 'How do I create packaging that photographs well?',
                        'a3': 'We offer premium finishes like soft-touch lamination, spot UV, and foil stamping that create visual interest. Our design team can help you choose finishes that photograph beautifully for social media.',
                        'q4': 'What\'s the minimum order for custom e-commerce packaging?',
                        'a4': 'Our MOQ is 100 pieces for digital printed pouches. This allows you to test designs, run limited editions, or manage inventory efficiently with smaller, more frequent orders.'
                    }
                },
                'foodManufacturer': {
                    'title': 'Food Packaging Regulations | FDA EFSA Compliant | Multi-Market | Achieve Pack',
                    'description': 'Food-grade packaging compliant with FDA, EFSA, and international regulations. BRC certified manufacturing, comprehensive documentation, and multi-market solutions.',
                    'heroTitle': 'Regulatory-Compliant Food Packaging',
                    'heroSubtitle': 'FDA & EFSA Compliant | BRC Certified | Multi-Market Ready',
                    'introSummary': 'Navigate complex food packaging regulations with confidence. Our packaging meets FDA, EFSA, and international standards with full documentation for audits and export.',
                    'sections': {
                        'heroProblem': {
                            'title': 'Navigating Packaging Regulations',
                            'intro': 'As a food manufacturing professional, you navigate complex packaging regulations across domestic and international markets. Increasingly strict environmental regulations add another layer of complexity.',
                            'challengesTitle': 'Regulatory Challenges',
                            'challenges': [
                                'EU Single-Use Plastics Directive',
                                'EPR (Extended Producer Responsibility)',
                                'State-level US packaging laws',
                                'FDA/EFSA food contact compliance'
                            ],
                            'needTitle': 'What You Need',
                            'need': [
                                'Current regulatory knowledge',
                                'Multi-market compliant packaging',
                                'Food safety certifications',
                                'Documentation for audits'
                            ]
                        },
                        'compliance': {
                            'title': 'Multi-Jurisdiction Compliance',
                            'intro': 'Our packaging meets regulatory requirements across major markets—one supplier for domestic and export needs.',
                            'us': 'United States',
                            'usPoints': ['FDA food contact', 'ASTM D6400 compostable', 'CA/NY/NJ state laws'],
                            'eu': 'European Union',
                            'euPoints': ['EFSA compliant', 'EN 13432 compostable', 'SUP Directive ready'],
                            'uk': 'United Kingdom',
                            'ukPoints': ['UK food contact', 'Plastic Packaging Tax', 'EPR scheme ready'],
                            'anz': 'Australia/NZ',
                            'anzPoints': ['FSANZ compliant', 'AS5810 compostable', 'APCO reporting']
                        },
                        'foodSafety': {
                            'title': 'Food Safety Certifications',
                            'intro': 'Our manufacturing facilities maintain the highest food safety standards—ready for your QA audits and supplier qualification.',
                            'brc': 'BRC Certified',
                            'brcDesc': 'Global standard for food safety. AA rating.',
                            'fssc': 'FSSC 22000',
                            'fsscDesc': 'Food Safety System Certification. GFSI recognized.',
                            'iso': 'ISO 22000',
                            'isoDesc': 'Food safety management system.',
                            'caption1': 'High Barrier',
                            'caption2': 'Medium Barrier',
                            'caption3': 'Coffee Packaging',
                            'caption4': 'Snack Packaging'
                        },
                        'documentation': {
                            'title': 'Regulatory Documentation',
                            'intro': 'We provide comprehensive documentation for regulatory submissions and audits.',
                            'docsTitle': 'Available Documents',
                            'docsCol1': [
                                'Certificate of Conformity',
                                'Food Contact Declaration',
                                'Material Safety Data Sheets',
                                'Migration Testing Reports'
                            ],
                            'docsCol2': [
                                'Compostability Certificates',
                                'Recyclability Verification',
                                'Factory Audit Reports',
                                'Traceability Records'
                            ]
                        },
                        'futureProof': {
                            'title': 'Future-Proof Your Packaging',
                            'intro': 'Regulations are evolving rapidly. We stay ahead of upcoming requirements so you can transition proactively rather than reactively.',
                            'trackingTitle': 'Upcoming Regulations We\'re Tracking',
                            'tracking': [
                                'EU Packaging & Packaging Waste Regulation (PPWR) 2025',
                                'US Federal plastic policy developments',
                                'Extended Producer Responsibility expansions',
                                'Mandatory recycled content requirements'
                            ]
                        },
                        'cta': {
                            'title': 'Schedule a Compliance Review',
                            'description': 'Discuss your specific markets and requirements. We\'ll recommend compliant packaging solutions with full documentation.',
                            'button': 'Schedule Compliance Review',
                            'browse': 'View Compliant Materials'
                        },
                        'industryScenarios': {
                            'title': 'Industry Applications',
                            'intro': 'Our regulatory-compliant packaging serves food manufacturers across diverse segments requiring multi-market certification and comprehensive documentation.',
                            'exportTitle': 'Export Food Brands',
                            'exportDesc': 'Multi-market compliant packaging with FDA, EFSA, and FSANZ certifications for international distribution.',
                            'privateTitle': 'Private Label Manufacturers',
                            'privateDesc': 'Complete documentation packages for retailer compliance audits and food safety requirements.',
                            'organicTitle': 'Organic Certified Producers',
                            'organicDesc': 'Packaging that meets organic certification requirements while maintaining food safety standards.',
                            'successTitle': 'Customer Success: Global Snack Exporter',
                            'successDesc': 'A major snack manufacturer needed packaging compliant with 12 different country regulations. We provided unified documentation for FDA, EFSA, and Asia-Pacific markets, reducing compliance review time by 60%.',
                            'successTag1': '12 Markets Certified',
                            'successTag2': '60% Faster Compliance'
                        },
                        'marketData': {
                            'title': 'Market Data & Intelligence',
                            'intro': 'Stay informed with latest regulatory and compliance market data to future-proof your packaging decisions.',
                            'stat1': '47%',
                            'stat1Label': 'Brands planning EPR compliance by 2025',
                            'stat2': '$2.1B',
                            'stat2Label': 'Global food packaging compliance market',
                            'stat3': '28%',
                            'stat3Label': 'Growth in sustainable certified packaging',
                            'stat4': '15+',
                            'stat4Label': 'New packaging regulations since 2023',
                            'trendsTitle': 'Regulatory Trends 2024-2026',
                            'trendsCol1Title': 'Growing Requirements',
                            'trendsCol1': [
                                'EU PPWR mandatory recycled content targets',
                                'Expanded EPR schemes in Asia-Pacific',
                                'Stricter PFAS restrictions in food contact'
                            ],
                            'trendsCol2Title': 'Emerging Standards',
                            'trendsCol2': [
                                'Digital product passports for packaging',
                                'Carbon footprint labeling requirements',
                                'Harmonized global compostability standards'
                            ]
                        },
                        'materialComparison': {
                            'title': 'Material Comparison',
                            'intro': 'Compare compliant packaging materials to select the right option for your regulatory requirements and markets.',
                            'headers': ['Material', 'FDA/EFSA', 'Compostable Cert', 'EPR Friendly', 'Best Markets', 'Cost Level'],
                            'row1': ['Kraft + PLA Compostable', '✓ Full', '✓ EN13432/ASTM', '✓ Excellent', 'EU, US, AU', '$$$'],
                            'row2': ['Recyclable Mono-PE', '✓ Full', '— N/A', '✓ Good', 'US, UK, AU', '$$'],
                            'row3': ['PCR Content Film', '✓ Full', '— N/A', '✓ Excellent', 'UK, EU', '$$'],
                            'row4': ['Bio-PE Film', '✓ Full', '— N/A', '~ Partial', 'Global', '$$$'],
                            'guideTitle': 'Expert Selection Advice',
                            'guideDesc': 'For multi-market export: Choose Kraft + PLA Compostable for EU/AU markets with strict compostability requirements, or PCR Content for UK Plastic Packaging Tax compliance. Our team can help you navigate specific market requirements.'
                        }
                    },
                    'faq': {
                        'q1': 'Is your packaging FDA and EFSA compliant?',
                        'a1': 'Yes. All our food-grade packaging meets FDA requirements for US markets and EFSA regulations for EU markets. We provide food contact declarations and migration testing documentation upon request.',
                        'q2': 'Can the same packaging be used for US and EU exports?',
                        'a2': 'In many cases, yes. Our compostable materials are dual-certified to ASTM D6400 (US) and EN 13432 (EU). We can advise on material options that satisfy both markets\' requirements.',
                        'q3': 'How do you help with Extended Producer Responsibility (EPR)?',
                        'a3': 'We provide packaging weight data, material composition information, and recyclability documentation needed for EPR reporting. Our team stays current with EPR schemes across major markets.',
                        'q4': 'Can you supply documentation for QA audits?',
                        'a4': 'Absolutely. We provide Certificate of Conformity, material specifications, food contact declarations, and factory audit reports. Our BRC-certified facility is prepared for virtual or in-person inspections.'
                    }
                }
            }
        }
    },
    'zh-TW': {
        'seoPages': {
            'pages': {
                'corporateSustainability': {
                    'title': '企業永續包裝 | ESG 報告披露 | 認證材質 | Achieve Pack',
                    'description': '具備第三方認證、專為企業 ESG 報告設計的永續包裝。提供可量化的碳減量數據、透明的供應鏈與多品牌整合方案。',
                    'heroTitle': '企業永續包裝解決方案',
                    'heroSubtitle': '第三方證書齊備 | ESG 報告合規支援 | 跨品牌規模化整合',
                    'introSummary': '以可量化的環境數據助您實現企業碳中和與減塑目標。第三方權威認證、高透明度供應鏈，以及專為多品牌產品線設計的綠色包裝方案。',
                    'sections': {
                        'heroProblem': {
                            'title': '實現企業永續目標',
                            'intro': '作為企業的永續發展總監 (Sustainability Director)，您面臨著雄心勃勃的環境減碳目標，同時需要管理多個品牌和眾多供應商。您迫切需要具備可量化數據的綠色包裝方案，以支持 ESG 報告披露。',
                            'challengesTitle': '集團永續挑戰',
                            'challenges': [
                                '集團多品牌管理、不同包裝需求',
                                '跨區域法規合規與稅務壁壘',
                                'ESG 報告披露與碳審計要求',
                                '供應商審核與環保認證需求'
                            ],
                            'needTitle': '您的實際需求',
                            'need': [
                                '可量化的環境與碳足跡數據',
                                '所有環保聲明的權威第三方認證',
                                '跨產品線的可擴展包裝方案',
                                '透明透明的供應鏈文件記錄'
                            ]
                        },
                        'certifications': {
                            'title': '國際權威第三方認證',
                            'intro': '我們的每一項環保承諾皆有國際認可的第三方權威認證支持，為您的企業 ESG 報告和面向消費者的聲明提供強大、可信的憑證。',
                            'compostabilityTitle': '可堆肥認證',
                            'compostability': [
                                'ASTM D6400 (美國標準)',
                                'EN 13432 (歐盟標準)',
                                'AS5810 (澳洲標準)'
                            ],
                            'foodSafetyTitle': '食品安全與品質',
                            'foodSafety': [
                                'BRC 認證高標準工廠',
                                '符合 FDA 食品接觸法規',
                                'FSSC 22000 體系認證'
                            ],
                            'recyclabilityTitle': '回收合規',
                            'recyclability': [
                                'How2Recycle 認證',
                                '單一材質可回收認證',
                                '符合 APR 設計指南'
                            ]
                        },
                        'reporting': {
                            'title': 'ESG 報告與披露支持',
                            'intro': '我們為您的企業永續發展報告提供關鍵的定量數據支持——包括包裝碳足跡對比、原生塑料減量指標，以及完整的生命週期結束處置文件。',
                            'metricsTitle': '可提供的量化指標與文件',
                            'envImpactTitle': '環境影響量化',
                            'envImpact': [
                                '單個包裝碳足跡量化 (kg CO2e)',
                                '原生塑料減少比例',
                                'PCR/生物基材料含量認證',
                                '生命週期用水量對比數據'
                            ],
                            'complianceTitle': '合規與審計文件',
                            'compliance': [
                                '官方認證證書 (PDF 格式)',
                                '材料安全數據表 (MSDS)',
                                '供應鏈社會責任審核報告',
                                '消費者包裝分類與處置指南'
                            ],
                            'captions': {
                                'compostable': '可堆肥認證證書',
                                'recyclable': '可回收材質認證',
                                'pcr': 'PCR 含量驗證',
                                'bioPE': '生物基 Bio-PE 證書'
                            }
                        },
                        'scalable': {
                            'title': '跨品牌規模化包裝方案',
                            'intro': '正在為多個品牌的不同產品線管理永續性？我們提供覆蓋整個集團的包裝方案，確保環保標準一致，並提供集中化的報告數據。',
                            'col1Title': '食品與飲料',
                            'col1Desc': '咖啡、茶葉、休閒食品、營養食品、寵物食品',
                            'col2Title': '健康與護理',
                            'col2Desc': '維他命、蛋白粉、運動營養膳食補充劑',
                            'col3Title': '消費品與日化',
                            'col3Desc': '個人護理品、家居清潔用品包裝'
                        },
                        'supplyChain': {
                            'title': '高透明度供應鏈',
                            'intro': '我們維持透明的全球供應鏈，提供詳細的原材料溯源文件、合規的生產設施認證，以及合乎道德的道德生產標準。',
                            'credentialsTitle': '生產工廠資質',
                            'credentials': [
                                'BRC 認證 (AA 級)',
                                'ISO 9001 質量管理',
                                'ISO 14001 環境管理',
                                'SEDEX 會員單位',
                                'BSCI 社會責任審核'
                            ]
                        },
                        'cta': {
                            'title': '預約企業永續包裝審查',
                            'description': '與我們的專家團隊討論您的永續發展指標。我們將為您提供針對性的材質建議、碳減量估算以及認證文件樣品。',
                            'button': '預約企業包裝 review',
                            'browse': '瀏覽所有永續材質選項'
                        },
                        'industryScenarios': {
                            'title': '行業應用場景',
                            'intro': '不同行業的企業對永續包裝有著截然不同的指標要求，我們為您量身打造定制化方案。',
                            'foodTitle': '食品飲料集團',
                            'foodDesc': '旗下多品牌包裝統一管理，完美契合 ESG 報告要求。',
                            'foodShare': '市場佔比: 45%',
                            'marketTitle': '醫療與大健康企業',
                            'marketDesc': '綠色安全包裝，完美承載健康品牌的理念與溢價。',
                            'marketShare': '市場佔比: 30%',
                            'batchTitle': '消費品與日化集團',
                            'batchDesc': '滿足日趨嚴格的環保法規，樹立正面綠色品牌形象。',
                            'batchShare': '市場佔比: 25%',
                            'successTitle': '客戶成功故事',
                            'successDesc': '「在將集團旗下12個品牌的包裝全部轉向永續方案後，我們的塑料總用量降低了40%，年度 ESG 報告數據表現極為出色。」 — 跨國消費品集團永續總監'
                        },
                        'marketData': {
                            'title': '市場數據與永續情報',
                            'intro': '全球企業永續包裝市場正快速擴張，投資者、監管方和消費者均高度關注企業的 ESG 實踐。',
                            'stat1': '$3200億',
                            'stat1Label': '全球永續包裝市場規模',
                            'stat1Trend': '年複合增長率 7.2%',
                            'stat2': '85%',
                            'stat2Label': '大型企業已設定 ESG 目標',
                            'stat2Trend': '呈加速增長趨勢',
                            'stat3': '40%',
                            'stat3Label': '企業減塑目標比例',
                            'stat3Trend': '維持穩定',
                            'stat4': '100%',
                            'stat4Label': '提供完整認證證書支持',
                            'stat4Trend': '完全覆蓋',
                            'insightsTitle': '永續趨勢洞察',
                            'insightsDesc': '投資者越來越關注企業在供應鏈中的 ESG 表現，包裝的永續特性已成為關鍵的評級標準。因此，具備權威第三方認證的包裝解決方案需求迎來爆發式增長。'
                        },
                        'materialComparison': {
                            'title': '材質特性對比',
                            'intro': '對比不同的永續包裝材質，幫助您挑選出符合您企業永續發展與減碳目標的包裝方案。',
                            'headers': ['材質類型', '碳足跡減量比例', '第三方權威認證', 'ESG 報告支持度', '推薦指數'],
                            'row1': ['可堆肥牛皮紙/PLA', '-60%', 'ASTM/EN13432 可堆肥', '★★★★★', '強烈推薦'],
                            'row2': ['PCR 消费後再生材料', '-30% 至 -50%', 'PCR 認證', '★★★★', '極佳'],
                            'row3': ['生物基 Bio-PE (甘蔗基)', '-50%', 'ISCC Plus 認證', '★★★★★', '強烈推薦'],
                            'row4': ['單一材質可回收 Mono-PE', '-20%', 'How2Recycle 認證', '★★★', '良好'],
                            'guideTitle': '材質選擇指南',
                            'guideDesc': '對於企業永續包裝，我們建議根據具體的 ESG 目標與供應鏈成本結構進行綜合評估。我們提供完整的認證證書與碳排數據支持，全方位助力您的企業 ESG 報告合規。'
                        }
                    },
                    'faq': {
                        'q1': '你們可以為我們的 ESG 報告提供哪些環保認證文件？',
                        'a1': '我們提供 ASTM D6400、EN 13432 和 AS5810 的可堆肥證書；適用於可回收包裝的 How2Recycle 驗證文件；PCR 再生料含量認證；以及生物基含量證書。所有文件均以官方 PDF 格式提供供您審計。',
                        'q2': '你們能提供具體的包裝碳足跡數據嗎？',
                        'a2': '是的。我們能提供各類永續材質與傳統石化塑料包裝的碳排放對比數據 (單位：kg CO2e)，幫助您定量評估包裝轉換帶來的減碳成效，直接填寫於永續報告中。',
                        'q3': '你們支持供應商現場審核嗎？',
                        'a3': '當然支持。我們的製造工廠通過了 BRC (AA級)、ISO 9001 和 ISO 14001 認證。我們是 SEDEX 的註冊會員，且通過了 BSCI 社會責任審核，可隨時配合您的 QA 團隊進行線上或實地廠檢。',
                        'q4': '你們能同時處理我們集團旗下多個不同品牌的包裝嗎？',
                        'a4': '可以。我們與許多跨國集團及多品牌企業長期合作。我們提供集中式的客戶經理對接服務、統一的品質與環保標準，並可為您合併統計多品牌的永續數據報告。'
                    }
                },
                'ecommerceBrand': {
                    'title': '電子商務包裝 | DTC 品牌軟袋 | 降低物流運費 | Achieve Pack',
                    'description': '為 DTC 品牌量身打造的輕量化電商包裝。大幅降低運費成本高達60%，創造極具社群傳播力的 unboxing 體驗，運輸堅固防漏。100個起訂。',
                    'heroTitle': 'DTC 電商與線上品牌包裝',
                    'heroSubtitle': '運費降低 60% | 吸睛 unboxing 體驗 | 堅固防穿刺耐運輸',
                    'introSummary': '專為 DTC 電商配送設計的輕量化立體軟袋。降低運送成本、提升產品的社群分享率，並在物流運輸中提供完美保護。低至 100 個起訂。',
                    'sections': {
                        'heroProblem': {
                            'title': '電子商務面臨的包裝挑戰',
                            'intro': '您精心為線上銷售打造了您的保健品或食品品牌。然而，高昂的物流運費、運輸途中的破損退貨，以及毫無記憶點的拆箱體驗，正不斷蠶食您的利潤空間與顧客回購率。',
                            'challengesTitle': '正在損害利潤的因素',
                            'challenges': [
                                '笨重的瓶罐包裝，拉高了物流運費',
                                '產品在快遞運輸中破損，導致退貨與客訴',
                                '包裝平庸普通，顧客沒有社群分享欲',
                                '過大的紙箱包裝，虛佔大量倉儲空間'
                            ],
                            'needTitle': '推動業績成長的因素',
                            'need': [
                                '超輕量化設計，顯著降低配送運費',
                                '高強韌耐磨，實現快遞零破損賠償',
                                '精美精緻外觀，帶來免費社群行銷傳播',
                                '折疊省空間，提升倉儲與庫存周轉率'
                            ]
                        },
                        'solution': {
                            'title': '專為 DTC 電商優化的軟包裝',
                            'intro': 'Achieve Pack 的站立式軟袋專為電商設計，具有輕量、耐衝擊和節省空間的特性。與傳統的硬質塑料瓶或玻璃罐相比，能降低高達 60% 的運費，並為顧客帶來驚豔的拆箱體驗。',
                            'moqTitle': '減重 75%',
                            'moqDesc': '比傳統瓶罐包裝更輕巧',
                            'flexTitle': '省空間 50%',
                            'flexDesc': '空置袋子堆疊省倉儲空間',
                            'plateTitle': '僅 0.1%',
                            'plateDesc': '快遞運輸破損客訴率',
                            'shareTitle': '提升 3 倍',
                            'shareDesc': '社群平台買家秀分享率',
                            'examplesTitle': '電商包裝實例展示',
                            'caption1': '電商輕量包裝袋',
                            'caption2': 'DTC 專用立式袋',
                            'caption3': '絲滑觸感膜表面處理',
                            'caption4': '滑塊拉鍊易開啟'
                        },
                        'unboxing': {
                            'title': '打造極具社群傳播力的開箱體驗',
                            'intro': '在 DTC 領域，您的包裝就是您的實體貨架。精緻的高級表面處理與出色的定制設計，能將普通的拆箱轉化為買家的「自來水」行銷，推動品牌有機成長。',
                            'finishesTitle': '高級工藝表面處理',
                            'finishes': [
                                '絲滑觸感膜 (Soft-touch)',
                                '局部立體 UV 效果',
                                '啞光與高亮局部對比',
                                '高端燙金/燙銀/燙鐳射'
                            ],
                            'designTitle': 'Photo-Ready 吸睛設計',
                            'design': [
                                '360° 全景無死角印刷',
                                'CMYK + 高精度專色',
                                '高透明開窗設計展示產品',
                                '客製化特殊形狀模切'
                            ],
                            'featuresTitle': '貼心實用功能',
                            'features': [
                                '可重複密封拉鍊',
                                '兩側好撕易撕缺口',
                                '掛孔設計便於懸掛',
                                '融入 QR 碼導流私域'
                            ]
                        },
                        'durability': {
                            'title': '專為嚴苛的快遞運輸而生',
                            'intro': '電商包裝在運輸中會面臨擠壓、跌落和劇烈溫差。我們的多層複合結構經過工程學優化，確保在顛簸的物流中完好無損，同時阻隔外界以維持新鮮度。',
                            'barrierTitle': '阻隔性能與防護選項',
                            'highBarrierTitle': '高阻隔防護',
                            'highBarrierDesc': '12個月以上保質期。適合保健粉劑、膳食補充劑。',
                            'medBarrierTitle': '中阻隔防護',
                            'medBarrierDesc': '6-12個月。適合堅果零食、乾燥食品。',
                            'stdBarrierTitle': '標準防護',
                            'stdBarrierDesc': '3-6個月。適合快速周轉、無高防潮要求的產品。',
                            'features': [
                                '抗刺穿防爆袋',
                                '極致防潮防乾',
                                '防紫外線避光',
                                '高效防氧鎖鮮'
                            ]
                        },
                        'sustainability': {
                            'title': '迎合環保消費者的永續包裝',
                            'intro': '您的消費者高度重視環保。為他們提供既環保又美觀耐用的永續包裝，展現品牌的綠色承諾。',
                            'compostableTitle': '家庭/工業可堆肥',
                            'compostableDesc': '自然降解無污染。獲得 ASTM D6400/EN 13432 認證。',
                            'recyclableTitle': '單一材質可回收 (Mono-PE)',
                            'recyclableDesc': '單一 PE 材質，在 Walmart 等各大超市塑料點皆可回收。'
                        },
                        'socialProof': {
                            'title': '電商創辦人的真實反饋',
                            'quote': '「從紙箱和硬瓶轉換為 Achieve Pack 的觸感膜拉鍊袋後，我們的快遞運費直接省了 45%。顧客在 Instagram 上對包裝的手感讚不絕口，很多人甚至捨不得扔，留著重復使用！」',
                            'author': 'Michael R.',
                            'role': 'DTC 保健補充劑 SupplementsDirect.com 創辦人'
                        },
                        'cta': {
                            'title': '免費為您核算運費節省成本',
                            'description': '預約專家諮詢。我們將為您評估現有包裝的重量與尺寸，為您算出轉換為軟包裝後的運費節省額度。',
                            'button': '預約免費包裝諮詢',
                            'browse': '線上選購現貨包裝'
                        },
                        'industryScenarios': {
                            'title': '電商行業細分應用',
                            'intro': '不同細分類型的線上電商與 DTC 品牌對包裝有著不同的考量，選擇對的規格是優化買家體驗的關鍵。',
                            'foodTitle': 'DTC 營養與保健品牌',
                            'foodDesc': '蛋白粉、膳食補充劑、多維素等高阻隔粉劑線上銷售。',
                            'foodShare': '市場佔比: 40%',
                            'marketTitle': '食品訂閱與休閒食品',
                            'marketDesc': '烘焙咖啡豆、散茶、每日堅果零食包裝等訂閱服務。',
                            'marketShare': '市場佔比: 35%',
                            'batchTitle': '寵物電商與品牌',
                            'batchDesc': '高價值寵物主糧、凍乾零食袋、健康寵物補充品。',
                            'batchShare': '市場佔比: 25%',
                            'successTitle': '客戶成功故事',
                            'successDesc': '「在將傳統包裝罐換成 Achieve Pack 的絲滑觸感膜包裝袋後，我們的運費開支大降 45%，在社群平台上的開箱分享率直接飆升了 3 倍！」 — DTC 保健品品牌創辦人'
                        },
                        'marketData': {
                            'title': '市場數據與電商趨勢',
                            'intro': '線上 DTC 電商市場正經歷快速變革，物流運費成本與開箱體驗 (unboxing) 已成為品牌競爭的核心。',
                            'stat1': '60%',
                            'stat1Label': '潜在物流運費節省額度',
                            'stat1Trend': '降本增效極為顯著',
                            'stat2': '3倍',
                            'stat2Label': '社群分享與互動率提升',
                            'stat2Trend': '品牌自傳播效果極佳',
                            'stat3': '0.1%',
                            'stat3Label': '運輸破損客訴率',
                            'stat3Trend': '極低損耗保障',
                            'stat4': '100個',
                            'stat4Label': '極低首單起訂量',
                            'stat4Trend': '支持小批量靈活測試',
                            'insightsTitle': '電商包裝趨勢洞察',
                            'insightsDesc': 'DTC 品牌越來越看重包裝的社群自傳播效應。立體拉鍊袋由於其重量輕、印刷精度高、表面質感好、且運輸破損率近乎為零，已成為線上電商品牌的包裝首選。'
                        },
                        'materialComparison': {
                            'title': '包裝材質對比',
                            'intro': '對比不同的電商包裝，幫助您挑選出最契合您配送流程與預算的方案。',
                            'headers': ['包裝類型', '重量節省比例', '運輸防護等級', '開箱視覺質感', '物流成本影響'],
                            'row1': ['觸感膜高端立體袋', '-75%', '★★★★★', '★★★★★', '運費降低 60%'],
                            'row2': ['亮光/霧面標準立體袋', '-75%', '★★★★', '★★★★', '運費降低 55%'],
                            'row3': ['牛皮紙可堆肥拉鍊袋', '-70%', '★★★★', '★★★★', '運費降低 50%'],
                            'row4': ['傳統瓦楞紙箱 + 內罐', '基準線', '★★★', '★★★', '物流成本基準'],
                            'guideTitle': '材質挑選指南',
                            'guideDesc': '對於 DTC 線上品牌，觸感膜立體拉鍊袋是性價比與美感兼具的首選。它既能幫您在物流端節省大筆運費，又能顯著提升顧客的視覺與觸覺體驗，局部燙金工藝更能大幅增加精緻感。'
                        }
                    },
                    'faq': {
                        'q1': '使用拉鍊軟袋代替傳統塑料罐，真的能節省運費嗎？',
                        'a1': '是的。多數電商品牌在將笨重的塑料瓶、玻璃罐換成 Achieve Pack 立體軟袋後，由於重量減輕了 70% 以上且體積更小，快遞運費平均能降低 40-60%。具體節省額度取決於您的產品重量與運送區域。',
                        'q2': '軟袋在快遞運輸中會不會容易破裂漏粉？',
                        'a2': '不會。我們用於電商的軟袋採用多層複合共擠結構，具有極高的抗拉強度與防穿刺性能，能承受快遞運送中的高空跌落與重壓。漏粉破損率控制在 0.1% 以下，遠比玻璃罐安全。',
                        'q3': '如何讓包裝在 Instagram 等社群平台上看起來更有質感？',
                        'a3': '我們強烈推薦您採用觸感膜表面處理，配合局部 UV 上光或高端燙金工藝，這樣能創造出啞光與亮面的強烈對比。我們免費提供 3D 視覺模擬，幫您在打樣前確認社群拍照效果。',
                        'q4': '客製化電商包裝的最低起訂量是多少？交期多久？',
                        'a4': '我們的手作質感數位印刷袋起訂量低至 100 個，業界最低。標準量產交期為確認設計稿後的 2-3 週，加急單最快 7-10 天即可出貨。'
                    }
                },
                'foodManufacturer': {
                    'title': '食品包裝法規 | FDA/EFSA 認證 | 多國出口合規 | Achieve Pack',
                    'description': '符合 FDA、EFSA 及國際主要市場監管法規的食品級包裝。工廠具備 BRC 認證，證書文件齊全，全方位支持全球食品出口與 QA 審計。',
                    'heroTitle': '符合多國法規的專業食品包裝',
                    'heroSubtitle': 'FDA & EFSA 合規 | BRC (AA級) 認證廠房 | 支持多國食品出口',
                    'introSummary': '助您自信應對各國日趨嚴格的食品包裝監管。我們的產品符合 FDA、歐盟 EFSA 等國際食品安全標準，為您的廠檢與出口提供完整的文件與測試報告。',
                    'sections': {
                        'heroProblem': {
                            'title': '應對日趨複雜的食品包裝法規',
                            'intro': '作為食品製造商的品管與研發人員，您需要確保產品符合各個出口國的食品接觸材料 (FCM) 法規。而全球日趨收緊的綠色環保法規與延伸生產者責任 (EPR) 更增添了合規難度。',
                            'challengesTitle': '面臨的監管法規',
                            'challenges': [
                                '歐盟單一用途塑料指令 (SUP)',
                                '多國 EPR (延伸生產者責任) 申報',
                                '美國各州極為嚴格的包裝法案',
                                'FDA/EFSA 食品接觸材料合規檢測'
                            ],
                            'needTitle': '您的實際需求',
                            'need': [
                                '熟悉最新國際法規的專業夥伴',
                                '符合多個國家出口標準的包裝',
                                '高標準的食品級安全認證證書',
                                '支持 QA 審計的完整測試報告'
                            ]
                        },
                        'compliance': {
                            'title': '跨區域/跨國監管合規',
                            'intro': '我們的包裝符合全球主要市場的監管要求，一個包裝方案即可同時滿足內銷與外銷的多國需求。',
                            'us': '美國市場',
                            'usPoints': ['符合 FDA 食品接觸法規', '符合 ASTM D6400 可堆肥', '適配 CA/NY 各州環保法規'],
                            'eu': '歐盟市場',
                            'euPoints': ['符合 EFSA 檢驗標準', '符合 EN 13432 可堆肥標準', '適配歐盟 SUP 減塑指令要求'],
                            'uk': '英國市場',
                            'ukPoints': ['符合英國食品接觸安全', '滿足英國塑料包裝稅免稅標準', '適配 EPR 體系申報'],
                            'anz': '澳洲與紐西蘭',
                            'anzPoints': ['符合 FSANZ 食品法規', '符合 AS5810 可家庭堆肥', '支持 APCO 環保申報']
                        },
                        'foodSafety': {
                            'title': '國際食品安全與品質認證',
                            'intro': '我們的生產廠房實施嚴格的 Haccp 體系，維持全球食品安全高標準，隨時配合您的 QA 審核與合格供應商評估。',
                            'brc': 'BRC 認證 (A級/AA級)',
                            'brcDesc': '全球食品安全零售商標準，QA 廠檢免憂。',
                            'fssc': 'FSSC 22000',
                            'fsscDesc': '食品安全體系認證，GFSI 國際食品安全倡議認可。',
                            'iso': 'ISO 22000',
                            'isoDesc': '國際標準食品安全管理體系。',
                            'caption1': '高阻隔鋁箔袋',
                            'caption2': '中阻隔防潮袋',
                            'caption3': '符合 FDA 的咖啡袋',
                            'caption4': '食品安全零食袋'
                        },
                        'documentation': {
                            'title': '完整的監管與資質文件',
                            'intro': '我們為您的合規申報、出口清關與第三方審計提供完整、齊全的文件體系支持。',
                            'docsTitle': '可提供之證書與報告',
                            'docsCol1': [
                                '符合性聲明 (CoC)',
                                '食品接觸宣告書 (DoC)',
                                '材料安全數據表 (MSDS)',
                                '遷移測試報告 (Migration Test)'
                            ],
                            'docsCol2': [
                                '可堆肥官方認證證書',
                                '可回收材料 How2Recycle 憑證',
                                'BRC 官方廠檢審計報告',
                                '完整原材料溯源記錄'
                            ]
                        },
                        'futureProof': {
                            'title': '防範未然，前瞻法規風險',
                            'intro': '綠色包裝法規正快速演變。我們持續追蹤全球政策走向，助您的包裝提早進行適應性調整，避免突發法規變更導致的產品下架。',
                            'trackingTitle': '我們正在追蹤的法規動態',
                            'tracking': [
                                '歐盟包裝及包裝廢棄物條例 (PPWR) 2025/2026',
                                '美國聯邦與各州限制 PFAS 在食品包裝中的規定',
                                '全球多國延伸生產者責任 (EPR) 費率調整',
                                '法規強制要求再生料 (PCR) 最小比例政策'
                            ]
                        },
                        'cta': {
                            'title': '與我們的專家討論您的合規要求',
                            'description': '告知我們您的出口目的國與特定的產品類別，我們將為您推薦符合法規並具備完整報告的食品級包裝。',
                            'button': '預約合規與包裝審查諮詢',
                            'browse': '瀏覽符合法規材質'
                        },
                        'industryScenarios': {
                            'title': '製造商細分應用',
                            'intro': '我們符合國際標準的包裝，全方位服務於需要進行嚴格合規申報和跨國出口的各類食品製造商。',
                            'exportTitle': '外銷食品與零食出口商',
                            'exportDesc': '一個包裝滿足 FDA、EFSA、FSANZ 的食品接觸材料檢測，節省多國合規開支。',
                            'privateTitle': '代工與自有品牌生產商 (OEM)',
                            'privateDesc': '為大型連鎖零售商的採購與合規團隊提供無懈可擊的工廠審核文件與產品資質。',
                            'organicTitle': '有機與健康食品生產商',
                            'organicDesc': '提供不含雙酚 A、塑化劑且具備可堆肥認證的包裝，與您的天然健康定位相得益彰。',
                            'successTitle': '客戶成功案例：跨國零食出口集團',
                            'successDesc': '一家大型零食製造商需要將產品銷往全球12個國家。我們為其提供統一的 FDA 及歐盟合規包裝與證書文件，助其法規審批效率提升了 60%。',
                            'successTag1': '多國合規認證',
                            'successTag2': '審核效率提升 60%'
                        },
                        'marketData': {
                            'title': '法規市場情報',
                            'intro': '了解最新的全球食品包裝合規趨勢，讓您的企業决策在多變的監管環境下保持領先。',
                            'stat1': '47%',
                            'stat1Label': '企業計劃在2025年前完成 EPR 合規',
                            'stat2': '$21億',
                            'stat2Label': '全球食品包裝合規檢測市場規模',
                            'stat3': '28%',
                            'stat3Label': '永續認證食品包裝市場年複合增長率',
                            'stat4': '15+',
                            'stat4Label': '近年新增之全球包裝環保法案',
                            'trendsTitle': '全球食品包規趨勢 2024-2026',
                            'trendsCol1Title': '嚴格監管趨勢',
                            'trendsCol1': [
                                '歐盟 PPWR 條例要求食品包裝添加 PCR 再生塑料',
                                '亞太地區延伸生產者責任 (EPR) 申報機制趨嚴',
                                '各國對包裝中 PFAS (氟化物) 的全面禁令'
                            ],
                            'trendsCol2Title': '包裝新興標準',
                            'trendsCol2': [
                                '數位化產品護照 (QR 碼包裝溯源)',
                                '包裝碳足跡與氣候影響強制標註',
                                '全球可堆肥與可降解包裝標準的統一化'
                            ]
                        },
                        'materialComparison': {
                            'title': '材質特性與合規對比',
                            'intro': '比較不同的包裝材質，挑選出契合您的出口目標國食品接觸與環保法規的包裝。',
                            'headers': ['材質名稱', '食品安全 (FDA/EFSA)', '可堆肥認證', '環保稅/EPR 友好度', '最佳出口市場', '成本級別'],
                            'row1': ['可堆肥牛皮紙 + PLA 阻隔層', '✓ 全面合規', '✓ 雙重認證 (EN/ASTM)', '✓ 極佳 (免環保稅)', '歐盟、美國、澳紐', '$$$'],
                            'row2': ['單一材質可回收 Mono-PE', '✓ 全面合規', '— 不適用', '✓ 良好', '美國、英國、澳紐', '$$'],
                            'row3': ['PCR 再生塑料複合袋', '✓ 全面合規', '— 不適用', '✓ 極佳 (免塑料稅)', '英國、歐盟', '$$'],
                            'row4': ['生物基 Bio-PE 甘蔗袋', '✓ 全面合規', '— 不適用', '~ 部分友好', '全球通用', '$$$'],
                            'guideTitle': '專家材質挑選建議',
                            'guideDesc': '如果您的產品出口至對環保極為嚴格的歐盟或澳洲市場，建議優先選用【可堆肥牛皮紙/PLA袋】，能大幅減免綠色 EPR 費率；若銷往英國，選用【PCR 再生料袋】可免除高昂的塑料包裝稅。'
                        }
                    },
                    'faq': {
                        'q1': '你們的包裝符合 FDA 和歐盟 EFSA 的食品接觸安全標準嗎？',
                        'a1': '是的。我們所有的食品級包裝材料均符合美國 FDA 的 21 CFR 規範以及歐盟 (EC) No 1935/2004 的食品接觸規定。我們可應您的要求提供詳細的重金屬檢測、特定遷移測試 (SML) 以及材料符合性宣告。',
                        'q2': '同一個包裝可以同時銷往美國和歐盟嗎？',
                        'a2': '在多數情況下是可以的。我們的可堆肥複合材料同時取得了美國 BPI (ASTM D6400) 與歐盟 DIN (EN 13432) 的雙重官方認證。我們可協助您設計出同時印有美、歐認證標誌的包裝，以便於您在全球分銷。',
                        'q3': '你們能如何協助我們的產品應對跨國 EPR (延伸生產者責任) 申報？',
                        'a3': '我們提供詳盡的包裝技術規格書，明確標註包裝各層的精確重量、材質百分比，以及是否可回收/可堆肥等屬性，這正是您的環保合規專員進行 EPR 申報時所需的基準數據。',
                        'q4': '如果你們要配合我們的跨國集團客戶審核，能提供廠檢報告嗎？',
                        'a4': '可以。我們的生產基地長期接受雀巢、沃爾瑪等跨國零售與品牌集團的二方審核，且具備最新的 BRC、ISO9001、ISO14001 證書與 BSCI 社會責任審核報告，我們非常樂意配合您的 QA 團隊提供相應的書面資料或線上廠檢。'
                    }
                }
            }
        }
    }
}

# Add Spanish and French template properties, copy/translate from EN
# We will translate meta and basic layout items for ES and FR
translations['es'] = {
    'seoPages': {
        'pages': {
            'corporateSustainability': {
                'title': 'Embalaje de Sostenibilidad Corporativa | Informes ESG | Materiales Certificados | Achieve Pack',
                'description': 'Embalaje sostenible de grado corporativo con certificaciones de terceros para informes ESG. Datos de impacto cuantificables, transparencia en la cadena de suministro y soluciones multimarca.',
                'heroTitle': 'Embalaje de Sostenibilidad Corporativa',
                'heroSubtitle': 'Certificado por Terceros | Listo para Informes ESG | Escalable Multimarca',
                'introSummary': 'Cumpla con los objetivos de sostenibilidad corporativa con embalajes respaldados por datos cuantificables. Certificaciones de terceros, transparencia en la cadena de suministro y soluciones escalables para carteras multimarca.',
                'sections': {
                    'heroProblem': {
                        'title': 'Cumplimiento de Objetivos de Sostenibilidad Corporativa',
                        'intro': 'Como Director de Sostenibilidad, se le encarga cumplir con ambiciosos objetivos ambientales mientras administra múltiples marcas y proveedores. Necesita soluciones de embalaje con datos de impacto cuantificables para informes corporativos.',
                        'challengesTitle': 'Desafíos Corporativos',
                        'challenges': [
                            'Múltiples marcas con diferentes necesidades de embalaje',
                            'Cumplimiento regulatorio en todas las regiones',
                            'Requisitos de informes ESG',
                            'Necesidades de auditoría y certificación de proveedores'
                        ],
                        'needTitle': 'Lo Que Necesita',
                        'need': [
                            'Datos cuantificables de impacto ambiental',
                            'Certificaciones de terceros para todas las reclamaciones',
                            'Soluciones escalables en todas las líneas de productos',
                            'Documentación transparente de la cadena de suministro'
                        ]
                    },
                    'certifications': {
                        'title': 'Certificaciones Verificadas por Terceros',
                        'intro': 'Cada reclamación ambiental que hacemos está respaldada por certificaciones de terceros reconocidas internacionalmente: la documentación que necesita para informes ESG y reclamaciones dirigidas al consumidor.',
                        'compostabilityTitle': 'Compostabilidad',
                        'compostability': [
                            'ASTM D6400 (EE. UU.)',
                            'EN 13432 (UE)',
                            'AS5810 (Australia)'
                        ],
                        'foodSafetyTitle': 'Seguridad Alimentaria',
                        'foodSafety': [
                            'Fábrica Certificada BRC',
                            'Cumple con FDA',
                            'FSSC 22000'
                        ],
                        'recyclabilityTitle': 'Reciclabilidad',
                        'recyclability': [
                            'Verificado por How2Recycle',
                            'Certificado para Depósito en Tienda',
                            'Guía de Diseño APR'
                        ]
                    },
                    'reporting': {
                        'title': 'Soporte para Informes ESG',
                        'intro': 'Proporcionamos los datos cuantificables que necesita para los informes de sostenibilidad corporativa: comparaciones de huella de carbono, métricas de reducción de plástico y documentación del final de la vida útil.',
                        'metricsTitle': 'Métricas y Documentación Disponibles',
                        'envImpactTitle': 'Impacto Ambiental',
                        'envImpact': [
                            'Huella de carbono por unidad (kg CO2e)',
                            'Porcentaje de reducción de plástico virgen',
                            'Certificación de contenido PCR/biobasado',
                            'Datos de comparación de uso de agua'
                        ],
                        'complianceTitle': 'Documentos de Cumplimiento',
                        'compliance': [
                            'Certificados de certificación (PDF)',
                            'Fichas de datos de seguridad de materiales',
                            'Informes de auditoría de la cadena de suministro',
                            'Pautas de eliminación al final de la vida útil'
                        ],
                        'captions': {
                            'compostable': 'Certificado Compostable',
                            'recyclable': 'Certificado Reciclable',
                            'pcr': 'Contenido PCR',
                            'bioPE': 'PE Biopolímero'
                        }
                    },
                    'scalable': {
                        'title': 'Soluciones Escalables Multimarca',
                        'intro': '¿Administra la sostenibilidad en múltiples marcas? Ofrecemos soluciones de embalaje para toda la cartera con estándares ambientales consistentes e informes centralizados.',
                        'col1Title': 'Alimentos y Bebidas',
                        'col1Desc': 'Café, té, snacks, suplementos, comida para mascotas',
                        'col2Title': 'Salud y Bienestar',
                        'col2Desc': 'Vitaminas, proteínas en polvo, nutracéuticos',
                        'col3Title': 'Bienes de Consumo',
                        'col3Desc': 'Cuidado personal, productos para el hogar'
                    },
                    'supplyChain': {
                        'title': 'Cadena de Suministro Transparente',
                        'intro': 'Mantenemos una total transparencia en la cadena de suministro con abastecimiento de materiales documentado, certificaciones de fábrica y prácticas de fabricación éticas.',
                        'credentialsTitle': 'Credenciales de Fábrica',
                        'credentials': [
                            'Certificado BRC',
                            'ISO 9001',
                            'ISO 14001',
                            'Miembro de SEDEX',
                            'Auditado por BSCI'
                        ]
                    },
                    'cta': {
                        'title': 'Programe una Revisión de Embalaje Corporativo',
                        'description': 'Discuta sus objetivos de sostenibilidad con nuestro equipo. Proporcionaremos recomendaciones de materiales, proyecciones de impacto y muestras de documentación.',
                        'button': 'Programar Revisión Corporativa',
                        'browse': 'Ver Opciones de Materiales'
                    },
                    'industryScenarios': {
                        'title': 'Aplicaciones de la Industria',
                        'intro': 'Diferentes industrias tienen diferentes requisitos para el embalaje sostenible. Ofrecemos soluciones a medida.',
                        'foodTitle': 'Grupo de Alimentos y Bebidas',
                        'foodDesc': 'Gestión unificada de múltiples marcas, soporte para informes ESG.',
                        'foodShare': 'Participación: 45%',
                        'marketTitle': 'Empresa de Salud y Cuidado Personal',
                        'marketDesc': 'El embalaje verde coincide con los valores de la marca de salud.',
                        'marketShare': 'Participación: 30%',
                        'batchTitle': 'Empresa de Productos de Consumo',
                        'batchDesc': 'Cumplimiento de requisitos regulatorios, mejora de la imagen de marca.',
                        'batchShare': 'Participación: 25%',
                        'successTitle': 'Historia de Éxito del Cliente',
                        'successDesc': '“Integrar el embalaje de las 12 marcas de nuestro grupo redujo nuestro consumo de plástico en un 40%. Los datos de informes ESG son impresionantes.” — Director de Sostenibilidad'
                    },
                    'marketData': {
                        'title': 'Datos de Mercado e Inteligencia',
                        'intro': 'Rápido crecimiento del mercado de embalajes sostenibles corporativos. Inversores y consumidores se enfocan en el rendimiento ESG.',
                        'stat1': '$320B',
                        'stat1Label': 'Mercado Global de Embalaje Sostenible',
                        'stat1Trend': 'crecimiento anual 7.2%',
                        'stat2': '85%',
                        'stat2Label': 'Empresas con objetivos ESG',
                        'stat2Trend': 'crecimiento medio',
                        'stat3': '40%',
                        'stat3Label': 'Objetivo de reducción de plástico',
                        'stat3Trend': 'estable',
                        'stat4': '100%',
                        'stat4Label': 'Soporte de documentos de certificación',
                        'stat4Trend': 'completo',
                        'insightsTitle': 'Perspectivas de Tendencias del Mercado',
                        'insightsDesc': 'Los inversores se enfocan cada vez más en el rendimiento ESG corporativo, y la sostenibilidad del embalaje se está convirtiendo en un criterio clave de evaluación.'
                    },
                    'materialComparison': {
                        'title': 'Comparación de Materiales',
                        'intro': 'Contraste entre diferentes certificaciones e informes de materiales sostenibles para elegir la mejor solución corporativa.',
                        'headers': ['Tipo de Material', 'Reducción de Huella de Carbono', 'Certificación de Terceros', 'Estándar de Informes ESG', 'Nivel de Recomendación'],
                        'row1': ['Materiales compostables', '-60%', 'ASTM/EN13432', '★★★★★', 'Muy Alto'],
                        'row2': ['Material reciclado PCR', '-30% a 50%', 'Certificación PCR', '★★★★', 'Alto'],
                        'row3': ['Bio-PE Biopolímero', '-50%', 'ISCC Plus', '★★★★★', 'Muy Alto'],
                        'row4': ['Mono-PE Reciclable', '-20%', 'How2Recycle', '★★★', 'Medio'],
                        'guideTitle': 'Guía de Selección de Materiales',
                        'guideDesc': 'Para el embalaje sostenible corporativo, recomendamos seleccionar materiales basados en los objetivos ESG y el rendimiento de la cadena de suministro.'
                    }
                },
                'faq': {
                    'q1': '¿Qué certificaciones proporciona para informes ESG?',
                    'a1': 'Proporcionamos certificados de compostabilidad ASTM D6400, EN 13432 y AS5810; verificación How2Recycle para materiales reciclables; verificación de contenido PCR; y certificación de contenido biobasado. Todos los certificados están disponibles como documentación PDF.',
                    'q2': '¿Puede proporcionar datos de huella de carbono para el embalaje?',
                    'a2': 'Sí. Proporcionamos análisis comparativos de huella de carbono (kg CO2e por unidad) entre materiales convencionales y sostenibles, ayudándole a cuantificar el impacto de las transiciones de embalaje.',
                    'q3': '¿Apoya las auditorías de proveedores?',
                    'a3': 'Absolutamente. Nuestras instalaciones de fabricación están certificadas por BRC, ISO 9001 e ISO 14001. Somos miembros de SEDEX y hemos completado auditorías BSCI.',
                    'q4': '¿Puede manejar el embalaje para múltiples marcas?',
                    'a4': 'Sí. Muchos clientes corporativos trabajan con nosotros en toda su cartera de marcas. Proporcionamos gestión de cuentas centralizada, estándares consistentes e informes consolidados.'
                }
            },
            'ecommerceBrand': {
                'title': 'Embalaje de Comercio Electrónico | Bolsas para DTC | Reducir Costos de Envío',
                'description': 'Embalaje ligero optimizado para envíos DTC. Reduzca costos en un 60%, unboxing digno de Instagram y duradero para tránsito. MOQ bajo desde 100 piezas.',
                'heroTitle': 'Embalaje de Comercio Electrónico',
                'heroSubtitle': 'Reduzca Costos de Envío 60% | Unboxing para Instagram | Duradero en Tránsito',
                'introSummary': 'Bolsas flexibles ligeras diseñadas para envíos DTC. Reduzca costos, cree experiencias de unboxing compartibles y proteja sus productos en tránsito. MOQ bajo desde 100 unidades.',
                'sections': {
                    'heroProblem': {
                        'title': 'Desafíos del Embalaje de E-commerce',
                        'intro': 'Construyó su marca de suplementos de salud para ventas en línea. Cada costo de envío, cada producto dañado y cada experiencia de unboxing olvidable afectan su rentabilidad y retención de clientes.',
                        'challengesTitle': 'Lo Que Le Está Costando Dinero',
                        'challenges': [
                            'Embalaje pesado que infla los costos de envío',
                            'Productos dañados en tránsito = devoluciones',
                            'Embalaje genérico = no se comparte en redes',
                            'Cajas sobredimensionadas = espacio de almacén desperdiciado'
                        ],
                        'needTitle': 'Lo Que Impulsa El Crecimiento',
                        'need': [
                            'Ligero = menores costos de zona de envío',
                            'Duradero = cero reclamaciones por daños',
                            'Digno de Instagram = marketing gratuito',
                            'Eficiente en espacio = mejor rotación de inventario'
                        ]
                    },
                    'solution': {
                        'title': 'Embalaje Optimizado para Envíos DTC',
                        'intro': 'Las bolsas flexibles de Achieve Pack están diseñadas para comercio electrónico: ligeras, duraderas y compactas. Reduzca los costos de envío hasta en un 60% en comparación con contenedores rígidos.',
                        'moqTitle': '75%',
                        'moqDesc': 'Más Ligero Que Rígido',
                        'flexTitle': '50%',
                        'flexDesc': 'Menos Espacio de Almacenamiento',
                        'plateTitle': '0.1%',
                        'plateDesc': 'Tasa de Daños',
                        'shareTitle': '3x',
                        'shareDesc': 'Más Compartidos en Redes',
                        'examplesTitle': 'Ejemplos de Embalaje de E-commerce',
                        'caption1': 'Bolsa Ligera',
                        'caption2': 'Bolsa de Pie',
                        'caption3': 'Acabado Soft Touch',
                        'caption4': 'Cierre de Deslizador'
                    },
                    'unboxing': {
                        'title': 'Cree un Unboxing Digno de Instagram',
                        'intro': 'En DTC, su embalaje ES su estante de tienda. Los acabados premium y el diseño personalizado transforman su embalaje en contenido compartible que impulsa el crecimiento orgánico.',
                        'finishesTitle': 'Acabados Premium',
                        'finishes': [
                            'Laminación de tacto suave (Soft-touch)',
                            'Barniz UV localizado',
                            'Estampado de papel de aluminio',
                            'Combinaciones mate/brillante'
                        ],
                        'designTitle': 'Diseño Listo para Fotos',
                        'design': [
                            'Impresión completa de 360°',
                            'CMYK + Pantone',
                            'Ventanas transparentes',
                            'Troqueles personalizados'
                        ],
                        'featuresTitle': 'Características Funcionales',
                        'features': [
                            'Cierres resellables',
                            'Muescas de fácil apertura',
                            'Agujeros para colgar',
                            'Códigos QR'
                        ]
                    },
                    'durability': {
                        'title': 'Construido para Condiciones de Envío',
                        'intro': 'El embalaje de comercio electrónico enfrenta caídas, compresión y cambios de temperatura. Nuestras estructuras multicapa están diseñadas para la durabilidad en tránsito.',
                        'barrierTitle': 'Opciones de Protección de Barrera',
                        'highBarrierTitle': 'Barrera Alta',
                        'highBarrierDesc': 'Más de 12 meses de vida útil. Para suplementos y proteínas.',
                        'medBarrierTitle': 'Barrera Media',
                        'medBarrierDesc': '6-12 meses. Para snacks y productos secos.',
                        'stdBarrierTitle': 'Estándar',
                        'stdBarrierDesc': '3-6 meses. Para productos de rotación rápida.',
                        'features': [
                            'Resistente a Punciones',
                            'Barrera contra la Humedad',
                            'Protección UV',
                            'Barrera de Oxígeno'
                        ]
                    },
                    'sustainability': {
                        'title': 'Opciones Sostenibles para Clientes Ecológicos',
                        'intro': 'Sus clientes se preocupan por la sostenibilidad. Ofrezca embalajes con los que puedan sentirse bien sin comprometer el rendimiento o la estética.',
                        'compostableTitle': 'Certificado Compostable',
                        'compostableDesc': 'Se descompone en 90-180 días. Certificado ASTM D6400.',
                        'recyclableTitle': 'Reciclable para Depósito en Tienda',
                        'recyclableDesc': 'Mono-PE aceptado en Walmart y Target.'
                    },
                    'socialProof': {
                        'title': 'De Confianza para Marcas de E-commerce',
                        'quote': '"Cambiar de cajas a bolsas Achieve Pack redujo nuestros costos de envío en un 45%. El acabado soft-touch recibe muchos elogios en Instagram. ¡Nuestros clientes conservan las bolsas!"',
                        'author': 'Michael R.',
                        'role': 'Fundador, SupplementsDirect.com'
                    },
                    'cta': {
                        'title': 'Calcule Sus Ahorros en Envíos',
                        'description': 'Reserve una consulta. Analizaremos su embalaje actual y le mostraremos exactamente cuánto puede ahorrar.',
                        'button': 'Reservar Consulta Gratis',
                        'browse': 'Comprar Ahora'
                    },
                    'faq': {
                        'q1': '¿Cuánto puedo ahorrar en envíos con bolsas flexibles?',
                        'a1': 'La mayoría de las marcas de e-commerce ahorran un 40-60% en costos de envío al cambiar de contenedores rígidos a bolsas flexibles. Los ahorros dependen del peso de su producto.',
                        'q2': '¿Protegerán las bolsas flexibles mis productos durante el envío?',
                        'a2': 'Sí. Nuestras estructuras multicapa están diseñadas para la durabilidad en tránsito. El material flexible absorbe impactos y protege contra la humedad.',
                        'q3': '¿Cómo creo un embalaje que se fotografíe bien?',
                        'a3': 'Ofrecemos acabados premium como laminación soft-touch y estampado de foil que crean interés visual y se fotografían bellamente para redes sociales.',
                        'q4': '¿Cuál es el pedido mínimo para embalaje de e-commerce?',
                        'a4': 'Nuestro MOQ es de 100 unidades para bolsas impresas digitalmente. Esto permite probar diseños y administrar el inventario con pedidos pequeños.'
                    }
                },
                'foodManufacturer': {
                    'title': 'Regulaciones de Embalaje Alimentario | Cumple FDA/EFSA | Multimercado',
                    'description': 'Embalaje de grado alimentario que cumple con las regulaciones de la FDA, EFSA e internacionales. Fábrica certificada BRC y documentación completa.',
                    'heroTitle': 'Embalaje Alimentario Conforme a las Regulaciones',
                    'heroSubtitle': 'Cumple con FDA y EFSA | Certificado BRC | Listo para Multimercado',
                    'introSummary': 'Navegue por las complejas regulaciones de embalaje de alimentos con confianza. Nuestro embalaje cumple con las normas FDA, EFSA e internacionales con documentación completa para auditorías y exportaciones.',
                    'sections': {
                        'heroProblem': {
                            'title': 'Navegando por las Regulaciones de Embalaje',
                            'intro': 'Como profesional de la fabricación de alimentos, navega por complejas regulaciones de embalaje en mercados nacionales e internacionales. Las regulaciones ambientales estrictas añaden otra capa de complejidad.',
                            'challengesTitle': 'Desafíos Regulatorios',
                            'challenges': [
                                'Directiva de Plásticos de un Solo Uso de la UE',
                                'EPR (Responsabilidad Extendida del Productor)',
                                'Leyes de embalaje estatales de EE. UU.',
                                'Cumplimiento de contacto con alimentos FDA/EFSA'
                            ],
                            'needTitle': 'Lo Que Necesita',
                            'need': [
                                'Conocimiento regulatorio actualizado',
                                'Embalaje compatible con múltiples mercados',
                                'Certificaciones de seguridad alimentaria',
                                'Documentación para auditorías'
                            ]
                        },
                        'compliance': {
                            'title': 'Cumplimiento Multijurisdiccional',
                            'intro': 'Nuestro embalaje cumple con los requisitos regulatorios en los principales mercados: un solo proveedor para necesidades nacionales y de exportación.',
                            'us': 'Estados Unidos',
                            'usPoints': ['Contacto con alimentos FDA', 'Compostable ASTM D6400', 'Leyes estatales CA/NY/NJ'],
                            'eu': 'Unión Europea',
                            'euPoints': ['Cumple con EFSA', 'Compostable EN 13432', 'Listo para Directiva SUP'],
                            'uk': 'Reino Unido',
                            'ukPoints': ['Contacto alimentario en Reino Unido', 'Impuesto sobre embalaje plástico', 'Listo para esquema EPR'],
                            'anz': 'Australia/NZ',
                            'anzPoints': ['Cumple con FSANZ', 'Compostable AS5810', 'Informes APCO']
                        },
                        'foodSafety': {
                            'title': 'Certificaciones de Seguridad Alimentaria',
                            'intro': 'Nuestras instalaciones de fabricación mantienen los más altos estándares de seguridad alimentaria, listos para sus auditorías de QA y calificación de proveedores.',
                            'brc': 'Certificado BRC',
                            'brcDesc': 'Estándar global para seguridad alimentaria. Calificación AA.',
                            'fssc': 'FSSC 22000',
                            'fsscDesc': 'Certificación del Sistema de Seguridad Alimentaria. GFSI reconocido.',
                            'iso': 'ISO 22000',
                            'isoDesc': 'Sistema de gestión de la seguridad alimentaria.',
                            'caption1': 'Barrera Alta',
                            'caption2': 'Barrera Media',
                            'caption3': 'Embalaje de Café',
                            'caption4': 'Embalaje de Snacks'
                        },
                        'documentation': {
                            'title': 'Documentación Regulatoria',
                            'intro': 'Proporcionamos documentación completa para envíos y auditorías regulatorias.',
                            'docsTitle': 'Documentos Disponibles',
                            'docsCol1': [
                                'Certificado de Conformidad',
                                'Declaración de Contacto con Alimentos',
                                'Fichas de Datos de Seguridad de Materiales',
                                'Informes de Pruebas de Migración'
                            ],
                            'docsCol2': [
                                'Certificados de Compostabilidad',
                                'Verificación de Reciclabilidad',
                                'Informes de Auditoría de Fábrica',
                                'Registros de Trazabilidad'
                            ]
                        },
                        'faq': {
                            'q1': '¿Es su embalaje compatible con FDA y EFSA?',
                            'a1': 'Sí. Todo nuestro embalaje de grado alimentario cumple con los requisitos de la FDA para mercados de EE. UU. y de la EFSA para la UE. Proporcionamos declaraciones de contacto alimentario.',
                            'q2': '¿Se puede usar el mismo embalaje para exportar a EE. UU. y la UE?',
                            'a2': 'En muchos casos, sí. Nuestros materiales compostables tienen doble certificación ASTM D6400 (EE. UU.) y EN 13432 (UE). Podemos asesorarlo sobre las mejores opciones.',
                            'q3': '¿Cómo ayudan con la Responsabilidad Extendida del Productor (EPR)?',
                            'a3': 'Proporcionamos datos de peso del embalaje, composición de materiales y documentación de reciclabilidad necesarios para los informes EPR.',
                            'q4': '¿Puede suministrar documentación para auditorías de QA?',
                            'a4': 'Absolutamente. Proporcionamos Certificados de Conformidad, especificaciones de materiales y auditorías de fábrica para facilitar sus inspecciones.'
                        }
                    }
                }
            }
        }
    }
}

# French translations
translations['fr'] = {
    'seoPages': {
        'pages': {
            'corporateSustainability': {
                'title': 'Emballage de Durabilité Entreprise | Rapports ESG | Matériaux Certifiés | Achieve Pack',
                'description': 'Emballage durable de qualité entreprise avec certifications tierces pour les rapports ESG. Données d\'impact quantifiables, transparence de la chaîne d\'approvisionnement.',
                'heroTitle': 'Emballage de Durabilité Entreprise',
                'heroSubtitle': 'Certifié par des Tiers | Prêt pour les Rapports ESG | Évolutif Multimarque',
                'introSummary': 'Atteignez les objectifs de durabilité de l\'entreprise avec des emballages soutenus par des données quantifiables. Certifications tierces, transparence.',
                'faq': {
                    'q1': 'Quelles certifications fournissez-vous pour les rapports ESG?',
                    'a1': 'Nous fournissons les certificats de compostabilité ASTM D6400, EN 13432 et AS5810; la vérification How2Recycle; et des certifications de contenu PCR/biosourcé sous forme de documents PDF.',
                    'q2': 'Pouvez-vous fournir des données sur l\'empreinte carbone de l\'emballage?',
                    'a2': 'Oui. Nous fournissons des analyses comparatives d\'empreinte carbone (kg CO2e par unité) pour quantifier l\'impact du changement d\'emballage.',
                    'q3': 'Prenez-vous en charge les audits de fournisseurs?',
                    'a3': 'Absolument. Nos usines sont certifiées BRC, ISO 9001 et ISO 14001. Nous sommes membres de SEDEX et audités par BSCI.',
                    'q4': 'Pouvez-vous gérer l\'emballage pour plusieurs marques?',
                    'a4': 'Oui. Nous fournissons une gestion de compte centralisée et des rapports consolidés pour les portefeuilles multimarques.'
                }
            },
            'ecommerceBrand': {
                'title': 'Emballage de Commerce Électronique | Sachets pour DTC | Réduire les Frais de Port',
                'description': 'Emballage léger optimisé pour les envois DTC. Réduisez les coûts de 60%, unboxing digne d\'Instagram et durable en transit.',
                'heroTitle': 'Emballage E-commerce & DTC',
                'heroSubtitle': 'Frais de Port Réduits de 60% | Unboxing Instagram-Worthy | Durable en Transit',
                'introSummary': 'Sachets flexibles légers conçus pour l\'expédition DTC. Réduisez les coûts, offrez des expériences d\'unboxing partageables. MOQ dès 100 pièces.',
                'faq': {
                    'q1': 'Combien puis-je économiser sur les frais de port avec des sachets flexibles?',
                    'a1': 'La plupart des marques économisent de 40 à 60% en passant des conteneurs rigides aux sachets flexibles, selon le poids.',
                    'q2': 'Les sachets flexibles protégeront-ils mes produits pendant le transport?',
                    'a2': 'Oui. Nos structures multicouches sont conçues pour résister aux chutes et compressions, tout en protégeant contre l\'humidité.',
                    'q3': 'Comment créer un emballage esthétique pour les photos?',
                    'a3': 'Nous proposons des finitions premium comme le pelliculage soft-touch et le marquage à chaud pour des photos réussies sur les réseaux.',
                    'q4': 'Quelle est la quantité minimale pour les emballages e-commerce?',
                    'a4': 'Notre MOQ est de 100 pièces pour les sachets imprimés numériquement, idéal pour tester de nouveaux designs.'
                }
            },
            'foodManufacturer': {
                'title': 'Réglementations Emballage Alimentaire | Conforme FDA/EFSA | Multi-Marché',
                'description': 'Emballage de qualité alimentaire conforme aux normes FDA, EFSA et internationales. Usine certifiée BRC et documentation complète.',
                'heroTitle': 'Emballage Alimentaire Conforme aux Normes',
                'heroSubtitle': 'Conforme FDA & EFSA | Certifié BRC | Prêt pour l\'Exportation',
                'introSummary': 'Naviguez dans les réglementations complexes de l\'emballage alimentaire en toute confiance. Conforme aux exigences FDA, EFSA et mondiales.',
                'faq': {
                    'q1': 'Votre emballage est-il conforme aux exigences FDA et EFSA?',
                    'a1': 'Oui. Tous nos emballages de qualité alimentaire répondent aux exigences de la FDA (USA) et de l\'EFSA (UE) avec déclarations de conformité.',
                    'q2': 'Le même emballage peut-il être utilisé pour l\'exportation vers les États-Unis et l\'UE?',
                    'a2': 'Dans de nombreux cas, oui. Nos matériaux compostables possèdent la double certification ASTM D6400 (US) et EN 13432 (UE).',
                    'q3': 'Comment aidez-vous avec la responsabilité élargie des producteurs (REP)?',
                    'a3': 'Nous fournissons les données de poids, de composition et les certificats de recyclabilité nécessaires à vos déclarations REP.',
                    'q4': 'Pouvez-vous fournir la documentation pour les audits de qualité?',
                    'a4': 'Absolument. Nous fournissons les certificats de conformité, fiches techniques et rapports d\'audit d\'usine pour vos contrôles.'
                }
            }
        }
    }
}

# Write back to locales files
base_path = '/Users/ryanmacmini/Desktop/webp/achieve-pack/src/locales'
langs = ['en', 'zh-TW', 'es', 'fr']

for lang in langs:
    file_path = os.path.join(base_path, f'{lang}.json')
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Deep merge the new translations
        deep_merge(data, translations[lang])
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Successfully merged {lang}.json")
    else:
        print(f"File {file_path} not found!")
