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
                'artisanProducer': {
                    'title': 'Artisan Producer Packaging | Small Batch | Low MOQ | Achieve Pack',
                    'description': 'Packaging for artisan food makers. Low MOQ from 100 pieces, craft aesthetics, farmers market durable, sustainable options. Perfect for small-batch gourmet products.',
                    'heroTitle': 'Packaging for Artisan Makers',
                    'heroSubtitle': '100 Piece MOQ | Craft Aesthetics | Market Durable',
                    'introSummary': 'Package your handcrafted products with the care they deserve. Low minimum orders, natural craft finishes, and sustainable materials that tell your story.',
                    'sections': {
                        'heroProblem': {
                            'title': 'Packaging for Artisan Makers',
                            'intro': 'You create small-batch gourmet products with care—handcrafted granolas, artisan chocolates, specialty preserves. Your packaging should tell that story, but high MOQs and generic options don\'t match your craft.',
                            'challengesTitle': 'Artisan Challenges',
                            'challenges': [
                                'Small batches, irregular production',
                                'Generic packaging doesn\'t convey craft',
                                'Farmers market conditions (sun, heat)',
                                'Limited budget for packaging'
                            ],
                            'needTitle': 'What You Need',
                            'need': [
                                'Low MOQ for small runs',
                                'Packaging that tells your story',
                                'Durable for outdoor markets',
                                'Eco-friendly to match values'
                            ]
                        },
                        'smallBatch': {
                            'title': 'Made for Small-Batch Production',
                            'intro': 'We understand artisan economics. Order as few as 100 pouches—perfect for seasonal products, new recipes, or limited editions.',
                            'moqTitle': 'Piece Minimum',
                            'moqDesc': 'No overstock waste',
                            'flexTitle': 'Flexibility',
                            'flexDesc': 'Holiday/harvest editions',
                            'plateTitle': 'No Plate Costs',
                            'plateDesc': 'Change designs freely'
                        },
                        'craftAesthetic': {
                            'title': 'Packaging That Tells Your Story',
                            'intro': 'Artisan products deserve artisan packaging. Natural textures and finishes that communicate handcrafted quality and connect with conscious consumers.',
                            'aestheticsTitle': 'Craft Aesthetics',
                            'aesthetics': [
                                'Natural kraft paper look',
                                'Clear windows for product visibility',
                                'Matte finishes for organic feel',
                                'Earth-tone printing'
                            ],
                            'optionsTitle': 'Custom Options',
                            'options': [
                                'Your logo and brand story',
                                'Ingredient lists and certifications',
                                'Batch numbers and dates',
                                'Seasonal/limited edition labels'
                            ]
                        },
                        'markets': {
                            'title': 'Built for Farmers Markets',
                            'intro': 'Farmers market conditions are tough—direct sun, temperature swings, handling by customers. Our pouches are designed for real-world durability while maintaining product freshness.',
                            'readyTitle': 'Market-Ready Features',
                            'readyCol1': [
                                'UV-resistant printing',
                                'Puncture-resistant materials',
                                'Stand-up design for display'
                            ],
                            'readyCol2': [
                                'Resealable for sampling',
                                'Moisture barrier protection',
                                'Easy hang hole option'
                            ]
                        },
                        'sustainable': {
                            'title': 'Sustainability That Matches Your Values',
                            'intro': 'Your customers care about the planet—so do you. Choose packaging that aligns with artisan values and tells your sustainability story.',
                            'compostableTitle': 'Home/Industrial Compostable',
                            'compostableDesc': 'Kraft paper with PLA. Breaks down naturally. Perfect for eco-conscious markets.',
                            'recyclableTitle': 'Recyclable Options',
                            'recyclableDesc': 'Store drop-off recyclable. Communicate recycling instructions to customers.'
                        },
                        'cta': {
                            'title': 'Package Your Craft With Care',
                            'description': 'Tell us about your artisan products. We\'ll recommend packaging that matches your brand and send samples for evaluation.',
                            'button': 'Book Free Consultation',
                            'browse': 'Browse Options'
                        },
                        'industryScenarios': {
                            'title': 'Industry Applications',
                            'intro': 'Different types of artisan products have different packaging requirements. Choosing the right packaging is key to your brand\'s success.',
                            'foodTitle': 'Artisan Food Producers',
                            'foodDesc': 'Chocolate, jam, baked goods, and other artisan specialty products.',
                            'foodShare': 'Share: 45%',
                            'marketTitle': 'Farmers Market Vendors',
                            'marketDesc': 'Farmers market products, organic food, and local specialty goods.',
                            'marketShare': 'Share: 35%',
                            'batchTitle': 'Small-Batch Brands',
                            'batchDesc': 'Limited editions, seasonal products, and new product tests.',
                            'batchShare': 'Share: 20%',
                            'successTitle': 'Customer Success Story',
                            'successDesc': '“Ordering from 100 units lets me test different products and designs without inventory pressure. Now my artisan jams are very popular at farmers markets.” — Artisan Jam Brand Founder'
                        },
                        'marketData': {
                            'title': 'Market Data & Intelligence',
                            'intro': 'The artisan food market continues to grow as consumer demand for handcrafted specialty products rises.',
                            'stat1': '$28B',
                            'stat1Label': 'Artisan Food Market Size',
                            'stat1Trend': 'Yearly growth 8.5%',
                            'stat2': '67%',
                            'stat2Label': 'Consumers Prefer Artisan',
                            'stat2Trend': 'Growing medium',
                            'stat3': '45%',
                            'stat3Label': 'Willing to Pay Premium',
                            'stat3Trend': 'Stable',
                            'stat4': '100',
                            'stat4Label': 'Minimum Order Quantity',
                            'stat4Trend': 'Flexible',
                            'insightsTitle': 'Market Trend Insights',
                            'insightsDesc': 'The artisan food market is expanding rapidly, with consumers increasingly focusing on authentic brand stories. Eco-friendly packaging is highly welcomed in farmers markets and similar channels.'
                        },
                        'materialComparison': {
                            'title': 'Material Comparison',
                            'intro': 'Compare different packaging material features to help you choose the most suitable solution for your artisan products.',
                            'headers': ['Packaging Type', 'Minimum Order', 'Eco Rating', 'Best Scenario', 'Cost'],
                            'row1': ['Compostable Paperboard', '100 units', 'Farmers Markets, Organic Stores', '$$'],
                            'row2': ['Recyclable Transparent', '100 units', 'Specialty Stores, Retail', '$'],
                            'row3': ['Paperboard with Window', '100 units', 'Product Display, Shelf Block', '$$'],
                            'guideTitle': 'Material Selection Guide',
                            'guideDesc': 'For artisan food producers, we recommend priority consideration for paperboard packaging. It conveys a natural, handcrafted brand image. Adding a window allows product visibility and boosts purchase intent.'
                        }
                    },
                    'faq': {
                        'q1': 'What\'s the minimum order for artisan products?',
                        'a1': 'Just 100 pieces. This allows you to package small batches, test new products, or create limited seasonal editions without overcommitting to large inventory.',
                        'q2': 'Can I order different sizes in one order?',
                        'a2': 'Yes. Many artisan producers order mixed sizes—small pouches for samples, larger ones for full products. We can accommodate mixed size orders with the same artwork.',
                        'q3': 'Do you offer packaging for farmers markets?',
                        'a3': 'Absolutely. Our stand-up pouches are designed for display, with UV-resistant printing and durable materials that withstand outdoor market conditions.',
                        'q4': 'Can I customize for seasonal products?',
                        'a4': 'Yes! Digital printing means no plate costs—you can create holiday editions, harvest specials, or any seasonal variations without paying extra setup fees.'
                    }
                },
                'citrusOilPackaging': {
                    'title': 'Citrus Oil Packaging Solutions: Foil Capsule vs. Spout Pouches | Achieve Pack',
                    'description': 'Compare premium sustainable packaging directions for liquid citrus oils: high-barrier bottle sachets, foil capsules, recyclable mono-PE, and Bio-PE pouches. Shield volatile acidic terpenes from oxidation and leakage.',
                    'heroTitle': 'Citrus Oil & Terpene Packaging Solutions',
                    'heroSubtitle': 'High-Barrier Sachets | Recyclable Spout Pouches | Premium Foil Capsules & Gift Cartons',
                    'introSummary': 'Startup-level demand testing demands packaging that balances active chemical protection, leak-resistance, and carbon-reduction goals. Compare our five engineered packaging options for citrus extracts, skincare oils, and organic refills.',
                    'sections': {
                        'challenge': {
                            'title': 'The Citrus Oil Challenge: Terpene Degradation & Material Selection',
                            'intro': 'Citrus-derived oils, rich in active organic compounds like d-limonene and other acidic terpenes, are highly volatile and chemically aggressive. Unlike ordinary water-based cosmetics, citrus oils act as mild organic solvents that can swell, stress-crack, or permeate standard low-barrier plastics over time.',
                            'risksTitle': 'Key Material Risks',
                            'risks': [
                                'Terpene Permeation: Aromas leak through low-density PE within days, causing product oxidation.',
                                'Stress-Cracking: Acidic components weaken heat-sealed joints, risking transport leaks.',
                                'Aroma Scavenging: High-terpene liquids degrade plastic flavor profiles, turning premium oils rancid.'
                            ],
                            'reqsTitle': 'Engineering Requirements',
                            'reqs': [
                                'Metallized Terpene Barrier: A solid foil core (aluminum or high-density EVOH coating).',
                                'Acid-Resistant Sealants: Co-polymer laminates tested against direct fruit extracts.',
                                'FSC Solid display boxes: Protective outer cartons for delicate capsules or glass-alternative pouches.'
                            ]
                        },
                        'options': {
                            'title': '5 Packaging Options Compared: Low-Cost MVP to Sustainable Premium',
                            'intro': 'We provide a complete spectrum of certified packaging solutions for direct-to-consumer launches, small-batch demand testing, and massive wholesale production.',
                            'opt1': {
                                'label': 'Option 1',
                                'tag': 'Low Cost MVP',
                                'title': 'Bottle-Shaped Foil Sachet',
                                'desc': 'An eye-catching, specialty aluminum sachet shape designed for single-use trial packs or travel-sized launches. Extremely cost-effective with absolute light and air protection.',
                                'points': [
                                    'High-Barrier Matte Aluminum',
                                    'Ideal for trial doses (5-30g)',
                                    'Tear-notch for smooth opening'
                                ],
                                'action': 'Order Sachets (From US$0.06)'
                            },
                            'opt2': {
                                'label': 'Option 2',
                                'tag': 'Premium & Distinct',
                                'title': 'Plastic-Free Foil Capsule',
                                'desc': 'Compact 40ml MVP capsules made of aluminum foil with heat-sealed tops. Zero plastics and bold luxury unboxing appeal—perfect for gifting and premium sampling.',
                                'points': [
                                    'Pure metallic barrier layer',
                                    'Matte high-end retail aesthetic',
                                    'Minimal initial machinery startup cost'
                                ],
                                'action': 'Request Custom Capsule RFQ'
                            },
                            'opt3': {
                                'label': 'Option 3',
                                'tag': 'Eco Refill Style',
                                'title': 'Recyclable Spout Pouch',
                                'desc': 'A high-clarity mono-material PE stand-up pouch that is fully recyclable in standard plastic streams. Perfect for D2C refills with high branding visibility.',
                                'points': [
                                    'Mono-material EVOH/PE structure',
                                    'Golden product color completely visible',
                                    'Lower carbon footprint than bottles'
                                ],
                                'action': 'Buy Recyclable Pouches'
                            },
                            'opt4': {
                                'label': 'Option 4',
                                'tag': 'Sugarcane-based PE',
                                'title': 'Bio-PE Sugarcane Spout Pouch',
                                'desc': 'Sugarcane-derived organic polyethylene paired with advanced metallized barrier layers. The gold standard for ultimate long-term stability and transport seal integrity.',
                                'points': [
                                    'Bio-based polymer structure',
                                    'Highest chemical defense against d-limonene',
                                    'Puncture resistant during logistics'
                                ],
                                'action': 'Shop Spouted Foil Pouches'
                            },
                            'opt5': {
                                'label': 'Option 5',
                                'tag': 'Luxury Retail Gift',
                                'title': 'FSC Capsule Display Box',
                                'desc': 'Add matching premium FSC retail display boxes to your foil capsule line. Pairs custom die-cut inner trays and gold foil accents to create a complete luxury ecosystem.',
                                'points': [
                                    'FSC Recycled Solid Grayboard',
                                    'Premium gold foil & matte finishes',
                                    'Ships flat to save storage space'
                                ],
                                'action': 'Design Custom Display Box'
                            }
                        },
                        'showcase': {
                            'title': 'Premium Visual Mockups & Product Showcase',
                            'intro': 'Click to inspect high-resolution product prototypes. Developed under active sugarcane material testing guidelines and sustainable FSC paper printing standards.',
                            'img1Title': '40ml Trial Foil Capsule',
                            'img1Desc': 'Plastic-free metallic seal, luxury matte skincare look.',
                            'img2Title': 'FSC Custom Gift Carton',
                            'img2Desc': 'Die-cut inserts, organic gold details, premium retail kit.',
                            'img3Title': 'Recyclable Spout Pouch',
                            'img3Desc': 'Mono-material design with visible liquid core.',
                            'img4Title': 'Bio-PE Spout Pouch',
                            'img4Desc': 'Sugarcane-based material, multi-layer high barrier protection.',
                            'solutionTag': 'Highlight Launch Solution',
                            'solutionTitle': 'Featured Low-Cost Solution: Bottle-Shaped Specialty Sachet',
                            'solutionDesc': 'Want to stand out without spending a fortune? The Bottle-Shaped Specialty Foil Sachet mimics standard liquid bottles at a fraction of the weight, volume, and tooling costs. Ideal for shipping travel-sized formulas or organic cosmetics samples directly in small cardboard mailers.',
                            'action1': 'Buy Stock Sachets (MOQ 100)',
                            'action2': 'Order Clear PLA Sealing Stickers'
                        },
                        'checklist': {
                            'title': 'Active Compliance & Testing Protocol Checklist',
                            'intro': 'To ensure zero structural degradation and absolute chemical compatibility, we recommend following the Achieve Pack lab-testing framework prior to full mass production:',
                            'phase1Title': '🧪 Phase 1: Material Verification',
                            'phase1': [
                                'Confirm if formula has high terpene ratios (e.g., >1.5% d-limonene).',
                                'Check water/oil emulsion stability under different temperatures.',
                                'Assess active solvents (alcohol or organic surfactants) present in formula.'
                            ],
                            'phase2Title': '⚖ Phase 2: Integrity Testing',
                            'phase2': [
                                'Run a 30-day continuous stress test at 40°C in simulated retail environments.',
                                'Conduct standard drop and vacuum puncture leak tests under shipping loads.',
                                'Verify seal strength consistency across both heat-sealed capsules and pouch caps.'
                            ]
                        }
                    },
                    'faq': {
                        'q1': 'Are active citrus terpenes compatible with standard polyethylene (PE)?',
                        'a1': 'Standard low-density polyethylene (LDPE) is highly porous to volatile terpenes, leading to rapid aroma transmission, flavor loss, and bottle/capsule deflation. However, high-density mono-PE (copolymer structures) containing specialty EVOH barrier layers block up to 99.8% of terpenes, enabling a sustainable monomaterial recycling claim without degradation.',
                        'q2': 'How do I prevent oxidation and aroma loss in citrus oils?',
                        'a2': 'Citrus oils degrade rapidly when exposed to oxygen, UV rays, and moisture. To preserve active terpene concentrations and prevent structural oxidation, we recommend using solid aluminum metallized foils or sugarcane-based multi-layer Bio-PE high-barrier pouch formats.',
                        'q3': 'What is the primary benefit of the Bottle-Shaped Specialty Foil Sachet?',
                        'a3': 'The specialty bottle sachet is the perfect low-cost retail option. It is extremely eye-catching, holds from 5g to 35g of material, requires zero rigid packaging tooling costs, and provides an excellent chemical and terpene barrier via its multi-layer foil structure.',
                        'q4': 'Can I print custom logos in low minimum quantities?',
                        'a4': 'Yes! While standard high-capacity packaging suppliers require 20,000+ units, Achieve Pack offers custom printed spout pouches, custom tuck gift boxes, and specialty foil sachets starting from low MOQs (from 500 units) to fit startup launch campaigns.'
                    },
                    'tables': {
                        'title': 'Technical Comparison: Citrus Packaging Options',
                        'headers': ['Format', 'Oxygen Barrier (OTR)', 'Water Vapor (WVTR)', 'Acid/Terpene Resistance', 'MOQ', 'Relative Cost'],
                        'rows': [
                            ['Bottle Foil Sachet', '0.01 ml/m²/day', '0.02 g/m²/day', '★★★★★ (Foil Core)', '100 pcs', 'Low ($)'],
                            ['Foil Capsule MVP', '0.02 ml/m²/day', '0.03 g/m²/day', '★★★★☆ (Protected Alum)', '500 pcs', 'Medium ($$)'],
                            ['Clear Mono-PE Pouch', '0.45 ml/m²/day', '0.35 g/m²/day', '★★★☆☆ (Co-PE EVOH)', '500 pcs', 'Medium ($$)'],
                            ['Sugarcane Bio-PE Pouch', '0.05 ml/m²/day', '0.08 g/m²/day', '★★★★★ (Sugarcane Foil)', '500 pcs', 'High ($$$)'],
                            ['FSC Custom Display Box', 'N/A (Outer Protection)', 'N/A', 'N/A', '200 pcs', 'Premium ($$$$)']
                        ]
                    },
                    'relatedLinks': {
                        'link1': {
                            'title': 'Spouted Foil Stand Up Pouches',
                            'description': 'Buy high-barrier center-spouted aluminum pouches designed for chemical and liquid formulations.'
                        },
                        'link2': {
                            'title': 'Eco Stand Up Pouches',
                            'description': 'Organic sustainable stand-up pouch catalog supporting eco-friendly recycling streams.'
                        },
                        'link3': {
                            'title': 'Bottle-Shaped Specialty Sachet Pouch',
                            'description': 'Order eye-catching high-barrier foil sachets in gorgeous matte pastel finishes.'
                        },
                        'link4': {
                            'title': 'Premium PLA Sealing Stickers',
                            'description': 'Biodegradable heat-stable transparent labels for sealing capsules or folding pouches.'
                        }
                    }
                },
                'coffeeRoaster': {
                    'title': 'Coffee Roaster Packaging | Degassing Valve Bags | Sustainable | Achieve Pack',
                    'description': 'Sustainable coffee packaging for specialty roasters. Degassing valve compatible, high barrier for freshness, compostable and recyclable options. Premium retail presence.',
                    'heroTitle': 'Coffee Roaster Packaging',
                    'heroSubtitle': 'Degassing Valve Compatible | High Barrier | Sustainable Options',
                    'introSummary': 'Transition to sustainable coffee packaging without compromising freshness. Degassing valve compatible, 12+ month shelf life, premium retail presence—in compostable or recyclable materials.',
                    'sections': {
                        'heroProblem': {
                            'title': 'The Coffee Packaging Challenge',
                            'intro': 'As an established specialty coffee roaster, you\'ve perfected your craft. Now customers and regulations are pushing you to reduce plastic waste—without compromising the freshness and shelf presence that drive sales.',
                            'concernsTitle': 'Current Concerns',
                            'concerns': [
                                'Traditional bags use multi-layer plastics',
                                'Customer demand for sustainable options',
                                'Fear of compromising freshness/shelf life',
                                'Premium appearance drives retail sales'
                            ],
                            'needTitle': 'What You Need',
                            'need': [
                                'Degassing valve compatibility',
                                'Proven freshness performance',
                                'Premium retail shelf appeal',
                                'Sustainable credentials'
                            ]
                        },
                        'degassing': {
                            'title': 'Degassing Valves & Freshness',
                            'intro': 'Freshly roasted coffee releases CO2 for days. Our pouches include one-way degassing valves that let gas escape while preventing oxygen ingress—maintaining peak freshness.',
                            'valveTitle': 'One-Way Valve',
                            'valveDesc': 'CO2 out, oxygen blocked',
                            'barrierTitle': 'High Barrier',
                            'barrierDesc': '12+ month shelf life',
                            'sameDayTitle': 'Same-Day Pack',
                            'sameDayDesc': 'No degassing wait',
                            'optionsTitle': 'Coffee Packaging Options',
                            'pouch': 'Coffee Pouch',
                            'flat': 'Flat Bottom',
                            'gusset': 'Side Gusset',
                            'tin': 'Tin Tie'
                        },
                        'sustainable': {
                            'title': 'Sustainable Alternatives',
                            'intro': 'Move away from conventional plastic without sacrificing performance. Choose from proven sustainable materials that work with your existing equipment.',
                            'compostableTitle': 'Certified Compostable',
                            'compostableDesc': 'Kraft paper + PLA barrier. Breaks down in industrial composting. ASTM D6400 certified.',
                            'recyclableTitle': 'Store Drop-Off Recyclable',
                            'recyclableDesc': 'Mono-PE structure accepted at PE recycling points. High barrier, lower cost.',
                            'valveTitle': 'Valve Compatibility',
                            'valveDesc': 'All our sustainable materials are compatible with standard one-way degassing valves. No equipment changes needed.',
                            'learnMore': 'Learn more →'
                        },
                        'retail': {
                            'title': 'Premium Retail Presence',
                            'intro': 'Shelf appeal drives impulse purchases. Our premium finishes create standout packaging that commands attention in crowded retail environments.',
                            'stylesTitle': 'Pouch Styles',
                            'styles': [
                                'Flat bottom (box pouch)',
                                'Stand-up pouch',
                                'Side gusset',
                                'Quad seal'
                            ],
                            'finishesTitle': 'Premium Finishes',
                            'finishes': [
                                'Matte/soft-touch',
                                'Spot UV gloss',
                                'Foil stamping',
                                'Embossing'
                            ],
                            'closureTitle': 'Closure Options',
                            'closure': [
                                'Press-to-close zipper',
                                'Tin tie + zipper',
                                'Slider zipper',
                                'Heat seal'
                            ]
                        },
                        'supply': {
                            'title': 'Reliable Supply Chain',
                            'intro': 'Production runs can\'t wait for packaging delays. We maintain consistent supply with reliable lead times and inventory management options.',
                            'time': '2-3 weeks',
                            'timeDesc': 'Standard production',
                            'blanket': 'Blanket orders',
                            'blanketDesc': 'Scheduled releases',
                            'priority': 'Priority',
                            'priorityDesc': 'Repeat customer status'
                        },
                        'cta': {
                            'title': 'Upgrade Your Coffee Packaging',
                            'description': 'Request Coffee Packaging Samples',
                            'desc2': 'See and feel sustainable coffee bags before committing. We\'ll send samples with your preferred valve and closure options.',
                            'button': 'Book Consultation',
                            'browse': 'View Coffee Bags'
                        },
                        'industryScenarios': {
                            'title': 'Industry Applications',
                            'intro': 'Different size coffee roasters have different packaging requirements. Choosing the right solution is key to your brand\'s success.',
                            'roasterTitle': 'Specialty Coffee Roasters',
                            'roasterDesc': 'Single origin coffee, specialty blends coffee, and premium quality requirements.',
                            'roasterShare': 'Share: 40%',
                            'organicTitle': 'Organic Coffee Brands',
                            'organicDesc': 'Certified Organic, Fair Trade, and Rainforest Alliance.',
                            'organicShare': 'Share: 35%',
                            'ecommerceTitle': 'E-commerce Coffee Brands',
                            'ecommerceDesc': 'Online sales, subscription models, and DTC brands.',
                            'ecommerceShare': 'Share: 25%',
                            'successTitle': 'Customer Success Story',
                            'successDesc': '“After converting to compostable packaging, our coffee subscription customer base grew by 30%. Many customers stated this was their key reason for choosing us.” — Specialty Coffee Roasting Factory Founder'
                        },
                        'marketData': {
                            'title': 'Market Data & Intelligence',
                            'intro': 'The coffee packaging market continues to grow as consumer demand for sustainable packaging options rises.',
                            'stat1': '$65B',
                            'stat1Label': 'Global Coffee Market Size',
                            'stat1Trend': 'Yearly growth 5.5%',
                            'stat2': '72%',
                            'stat2Label': 'Prefer Eco-Friendly',
                            'stat2Trend': 'Growing medium',
                            'stat3': '12+',
                            'stat3Label': 'Month Shelf Life',
                            'stat3Trend': 'Freshness',
                            'stat4': '500',
                            'stat4Label': 'Minimum Order Quantity',
                            'stat4Trend': 'Flexible',
                            'insightsTitle': 'Market Trend Insights',
                            'insightsDesc': 'The specialty coffee market continues to expand, with consumers increasingly focusing on coffee freshness and eco-friendly packaging. Compostable and recyclable packaging are becoming market favorites.'
                        },
                        'materialComparison': {
                            'title': 'Material Comparison',
                            'intro': 'Compare different coffee packaging material features to help you choose the best solution.',
                            'headers': ['Packaging Type', 'Shelf Life', 'Degassing Valve', 'Eco Certification', 'Cost'],
                            'row1': ['Compostable Paperboard', '6-9 months', '✓ Compatible', 'ASTM D6400', '$$'],
                            'row2': ['Recyclable Mono-PE', '12+ months', '✓ Compatible', 'How2Recycle', '$'],
                            'row3': ['High Barrier Paperboard', '12+ months', '✓ Compatible', 'Recyclable', '$$'],
                            'guideTitle': 'Material Selection Guide',
                            'guideDesc': 'For coffee roasters, we recommend selecting according to product positioning and target customers. High premium specialty coffee is suitable for compostable paperboard, while volume sales choose recyclable options for better cost efficiency.'
                        }
                    },
                    'faq': {
                        'q1': 'Do compostable bags work with degassing valves?',
                        'a1': 'Yes. Our compostable coffee bags are fully compatible with one-way degassing valves. The valves are applied after pouch fabrication using standard heat-seal equipment—no changes to your packing process.',
                        'q2': 'What\'s the shelf life of compostable coffee bags?',
                        'a2': 'With high-barrier compostable materials and a degassing valve, expect 6-9 months shelf life for roasted whole bean coffee. For 12+ months, we recommend our recyclable mono-PE option.',
                        'q3': 'Can I get the same premium look with sustainable materials?',
                        'a3': 'Absolutely. Our kraft paper compostable bags have a natural, premium appearance. We also offer matte finishes, spot UV, and foil stamping on sustainable materials for maximum shelf presence.',
                        'q4': 'What minimum orders do you require for coffee bags?',
                        'a4': 'MOQ is 500 pieces for standard coffee bag sizes with degassing valve. For market testing or new blends, we can accommodate smaller runs of 100-200 pieces through our digital print line.'
                    }
                }
            }
        }
    },
    'zh-TW': {
        'seoPages': {
            'pages': {
                'artisanProducer': {
                    'title': '手工食品包裝 | 小批量生產 | 低起訂量 | Achieve Pack',
                    'description': '為手工食品製造商量身打造的包裝。起訂量低至100個，展現手作質感與農夫市集耐用度，並提供永續材質選擇。非常適合小批量美食產品。',
                    'heroTitle': '手作工匠與小批量包裝解決方案',
                    'heroSubtitle': '100個起訂 | 手作質感 | 市集耐用防潮',
                    'introSummary': '為您的手作產品提供應有的細緻呵護。超低起訂量、自然的牛皮紙質感以及能傳遞品牌故事的環保材質。',
                    'sections': {
                        'heroProblem': {
                            'title': '手作工匠包裝',
                            'intro': '您用心製作小批量美味——手作燕麥片、手工巧克力、特色果醬。您的包裝應當訴說這份匠心，但傳統的高起訂量和規格化包裝卻無法契合您的手作精神。',
                            'challengesTitle': '工匠面臨的挑戰',
                            'challenges': [
                                '小批量生產，產量不固定',
                                '一般包裝無法傳達手作質感',
                                '農夫市集環境挑戰（陽光、熱度）',
                                '包裝預算有限'
                            ],
                            'needTitle': '您的實際需求',
                            'need': [
                                '超低起訂量，適合小規模測試',
                                '能訴說品牌故事的包裝',
                                '適合戶外市集的耐用材質',
                                '符合環保價值的材質選擇'
                            ]
                        },
                        'smallBatch': {
                            'title': '專為小批量生產而生',
                            'intro': '我們深知手作工坊的成本考量。支援低至100個袋子的訂購——非常適合季節性商品、新配方測試或限量版產品。',
                            'moqTitle': '起訂量限制',
                            'moqDesc': '避免庫存積壓浪費',
                            'flexTitle': '生產靈活性',
                            'flexDesc': '輕鬆推出節日與收穫限量版',
                            'plateTitle': '免版費印刷',
                            'plateDesc': '自由更換設計，無多餘版費負擔'
                        },
                        'craftAesthetic': {
                            'title': '會說故事的包裝',
                            'intro': '手作產品值得同樣溫暖的包裝。自然的紋理與表面處理，向講究環保的消費者傳達手作的溫度。',
                            'aestheticsTitle': '手作質感設計',
                            'aesthetics': [
                                '天然牛皮紙質感',
                                '透明視窗設計展示內容物',
                                '霧面質感呈現有機視覺',
                                '大地色系環保印刷'
                            ],
                            'optionsTitle': '客製化選項',
                            'options': [
                                '融入您的商標與品牌故事',
                                '完整呈現成分表與認證標章',
                                '印製批號與有效日期',
                                '季節限定與限量版標籤'
                            ]
                        },
                        'markets': {
                            'title': '農夫市集的堅實後盾',
                            'intro': '戶外市集的條件往往十分嚴苛——陽光直射、溫差起伏、顧客頻繁觸摸。我們的包裝袋專為這些真實場景設計，防潮防漏，同時鎖住極致新鮮。',
                            'readyTitle': '市集防護特色',
                            'readyCol1': [
                                '防紫外線環保印刷',
                                '防刺穿耐磨材質',
                                '好站立、便於陳列的立體設計'
                            ],
                            'readyCol2': [
                                '可重複密封的拉鍊，方便試吃',
                                '優異的高阻隔防潮防氧性能',
                                '提供掛孔選項，方便懸掛展示'
                            ]
                        },
                        'sustainable': {
                            'title': '與您的環保理念契合',
                            'intro': '您的顧客在乎地球，您也一樣。選擇符合手工精神的永續包裝，展現您的環保主張。',
                            'compostableTitle': '家庭/工業可堆肥',
                            'compostableDesc': '天然牛皮紙結合可堆肥PLA阻隔層。可在自然中分解，非常適合有機與綠色市集。',
                            'recyclableTitle': '單一材質可回收',
                            'recyclableDesc': '符合軟質塑料回收標準。便於教育顧客進行分類回收。'
                        },
                        'cta': {
                            'title': '用心包裝您的手藝',
                            'description': '告訴我們您的手作產品需求。我們將為您推薦最合適的材質，並寄送免費樣品供您測試。',
                            'button': '預約免費包裝諮詢',
                            'browse': '瀏覽所有包裝選項'
                        },
                        'industryScenarios': {
                            'title': '行業應用',
                            'intro': '不同類型的手作產品有不同的包裝要求。選擇合適的包裝是品牌成功的關鍵。',
                            'foodTitle': '手工食品製造商',
                            'foodDesc': '手工巧克力、果醬、烘焙點心等精緻手作美食。',
                            'foodShare': '市場佔比: 45%',
                            'marketTitle': '農夫市集攤商',
                            'marketDesc': '市集農產品、有機食品與地方特色商品。',
                            'marketShare': '市場佔比: 35%',
                            'batchTitle': '小批量獨立品牌',
                            'batchDesc': '限量版產品、季節性商品及新品上市測試。',
                            'marketShare': '市場佔比: 20%',
                            'successTitle': '客戶成功故事',
                            'successDesc': '「起訂量只有100個，讓我可以隨意測試不同口味和包裝設計，完全沒有庫存壓力。現在我們的手工果醬在農夫市集非常暢銷！」 — 手工果醬品牌創辦人'
                        },
                        'marketData': {
                            'title': '市場數據與情報',
                            'intro': '手工美食市場持續成長，消費者對富含手作溫度的特色產品需求日益增加。',
                            'stat1': '$280億',
                            'stat1Label': '手工食品市場規模',
                            'stat1Trend': '年成長率 8.5%',
                            'stat2': '67%',
                            'stat2Label': '消費者偏好手作產品',
                            'stat2Trend': '穩步上升中',
                            'stat3': '45%',
                            'stat3Label': '願意支付溢價購買',
                            'stat3Trend': '維持穩定',
                            'stat4': '100',
                            'stat4Label': '超低起訂量門檻',
                            'stat4Trend': '極具靈活性',
                            'insightsTitle': '市場趨勢洞察',
                            'insightsDesc': '手作食品市場正快速擴張，消費者越來越看重真實的品牌故事。在農夫市集等渠道，環保永續的包裝尤為受到消費者的熱烈歡迎。'
                        },
                        'materialComparison': {
                            'title': '材質特性比較',
                            'intro': '比較不同的包裝材質，幫助您挑選出最適合您手作產品的包裝方案。',
                            'headers': ['包裝類型', '最低起訂量', '環保評級', '最佳適用場景', '成本費用'],
                            'row1': ['可堆肥牛皮紙袋', '100個', '★★★★★', '農夫市集、有機商店', '$$'],
                            'row2': ['可回收高透明袋', '100個', '★★★★', '特色商店、零售通路', '$'],
                            'row3': ['開窗牛皮紙袋', '100個', '★★★★', '展示產品外觀、陳列架', '$$'],
                            'guideTitle': '材質選擇指南',
                            'guideDesc': '對於手工食品製造商，我們強烈建議優先考慮牛皮紙包裝，因為它最能呈現天然、質樸的手工品牌形象。加入開窗設計能展示精美的產品外觀，有效提升購買欲。'
                        }
                    },
                    'faq': {
                        'q1': '手工產品的最低起訂量是多少？',
                        'a1': '最低僅需100個。這讓您可以輕鬆包裝小批量產品、測試新品，或推出限量的季節性商品，無需承擔龐大的庫存壓力。',
                        'q2': '同一個訂單可以訂購不同的尺寸嗎？',
                        'a2': '可以。許多手工製造商會同時訂購多種尺寸——小袋子用於寄送樣品，大袋子用於正式銷售。只要使用相同的印件，我們可以為您安排混合尺寸生產。',
                        'q3': '你們有提供適合農夫市集的包裝嗎？',
                        'a3': '當然有。我們的立體袋非常適合擺攤陳列，並使用防紫外線的環保印刷及防潮耐磨的結構，能完美應對戶外市集環境。',
                        'q4': '我可以為季節性產品進行客製化印刷嗎？',
                        'a4': '可以！我們的數位印刷不需要任何版費，這意味著您可以隨意推出節日限定版、收穫季特別版，無需支付額外的製版費用。'
                    }
                },
                'citrusOilPackaging': {
                    'title': '柑橘精油包裝方案：鋁箔膠囊與吸嘴袋比較 | Achieve Pack',
                    'description': '比較液態柑橘精油的頂級環保包裝：高阻隔特殊造型瓶狀袋、鋁箔封口膠囊、可回收單一材質PE袋與Bio-PE甘蔗吸嘴袋。有效阻隔酸性松烯成分，防止氧化漏液。',
                    'heroTitle': '柑橘精油與酸性揮發物包裝解決方案',
                    'heroSubtitle': '造型高阻隔鋁箔袋 | 可回收吸嘴立體袋 | 奢華鋁箔膠囊與禮盒',
                    'introSummary': '新品上市與小批量市場測試需要兼顧強效化學防護、防漏與減碳環保的包裝。比較我們專為柑橘萃取物、保養油及補充包設計的五款專業材質。',
                    'sections': {
                        'challenge': {
                            'title': '柑橘油的挑戰：松烯降解與包裝材質的嚴苛選擇',
                            'intro': '柑橘類精油富含活性有機化合物（如 d-limonene 檸檬烯）和酸性松烯，具有高度揮發性與化學侵蝕性。與一般水性化妝品不同，柑橘油是一種溫和的有機溶劑，隨著時間推移，會使普通低阻隔塑料溶脹、應力開裂或滲透。',
                            'risksTitle': '關鍵材質風險',
                            'risks': [
                                '松烯滲透：香氣會在數天內穿透普通低密度PE，導致產品接觸空氣氧化。',
                                '應力開裂：酸性成分會弱化熱封邊緣，增加運輸途中漏液的風險。',
                                '香味流失：高濃度松烯會侵蝕並降解塑料，導致昂貴的精油變質酸敗。'
                            ],
                            'reqsTitle': '材料工程要求',
                            'reqs': [
                                '鋁箔防滲透層：採用實心鋁箔阻隔層或高密度EVOH特殊塗層。',
                                '耐酸性封口料：通過直接接觸柑橘果實萃取物測試的共聚複合層。',
                                'FSC認證硬質禮盒：為易碎膠囊或玻璃瓶替代袋提供穩固的外層防護。'
                            ]
                        },
                        'options': {
                            'title': '五種包裝選項比較：從超值小樣到永續輕奢',
                            'intro': '我們為您的電商新品發布、小批量需求測試和大型批發提供全方位的包裝解決方案。',
                            'opt1': {
                                'label': '選項 1',
                                'tag': '超值新品測試',
                                'title': '特殊瓶狀鋁箔袋',
                                'desc': '吸睛度極高的特殊瓶子造型鋁箔袋，專為單次體驗裝、旅行裝量身打造。成本低廉，並提供對光線與空氣的絕對物理阻隔。',
                                'points': [
                                    '高阻隔霧面鋁箔結構',
                                    '適合小容量試用裝 (5-30g)',
                                    '配備易撕口，便於平滑撕開'
                                ],
                                'action': '立即訂購造型袋 (每個低至 US$0.06)'
                            },
                            'opt2': {
                                'label': '選項 2',
                                'tag': '輕奢與獨特視覺',
                                'title': '無塑鋁箔封口膠囊',
                                'desc': '40ml 輕巧封口鋁箔杯形膠囊。無塑料殘留，並提供極具奢華儀式感的拆箱體驗——非常適合作為禮品與精美樣品。',
                                'points': [
                                    '純金屬高阻隔封底',
                                    '高檔霧面金屬零售美學',
                                    '超低的前期包裝設備啟動成本'
                                ],
                                'action': '索取客製化膠囊報價 (RFQ)'
                            },
                            'opt3': {
                                'label': '選項 3',
                                'tag': '綠色補充包首選',
                                'title': '可回收單一材質吸嘴袋',
                                'desc': '高透明單一材質 PE 立體袋，可直接進入塑料回收流。是品牌推出 D2C 補充裝、同時展現晶瑩液體外觀的極佳選擇。',
                                'points': [
                                    '單一材質結合 EVOH 塗層與 PE 結構',
                                    '精油的天然金黃色澤清晰可見',
                                    '碳足跡遠低於傳統玻璃或塑料瓶'
                                ],
                                'action': '購買可回收吸嘴袋'
                            },
                            'opt4': {
                                'label': '選項 4',
                                'tag': '綠色甘蔗 Bio-PE',
                                'title': '甘蔗基 Bio-PE 吸嘴袋',
                                'desc': '源自天然甘蔗提取的有機聚乙烯，配以高阻隔內襯複合。是精油長期穩定保存與高強度物流抗跌落的業界標竿。',
                                'points': [
                                    '植物基生物聚合物結構',
                                    '對檸檬烯等成分提供極高的化學防護力',
                                    '物流過程中具有極佳的防穿刺性能'
                                ],
                                'action': '選購甘蔗吸嘴鋁箔袋'
                            },
                            'opt5': {
                                'label': '選項 5',
                                'tag': '輕奢零售禮盒',
                                'title': 'FSC認證零售陳列禮盒',
                                'desc': '為您的鋁箔膠囊系列搭配高端 FSC 紙質零售展示盒。結合客製化刀模內托與燙金工藝，打造完美的輕奢包裝生態。',
                                'points': [
                                    'FSC認證可回收高強度灰卡紙',
                                    '高端燙金與柔霧表面處理',
                                    '平板運輸，為您節省大量庫存空間'
                                ],
                                'action': '設計專屬 FSC 零售盒'
                            }
                        },
                        'showcase': {
                            'title': '樣品展示與高解析度視覺效果',
                            'intro': '點擊放大查看我們的柑橘油包裝實物原型。遵循生物甘蔗材質測試指南與 FSC 環保紙張印刷規範。',
                            'img1Title': '40ml 體驗裝鋁箔膠囊',
                            'img1Desc': '純鋁防滲透，霧面護膚品奢華外觀。',
                            'img2Title': 'FSC 客製化零售禮盒',
                            'img2Desc': '刀模卡槽內托，精緻燙金，打造高檔禮盒套裝。',
                            'img3Title': '單一材質回收吸嘴袋',
                            'img3Desc': '單一材質 PE 結構，透明視窗呈現精油色澤。',
                            'img4Title': '甘蔗基 Bio-PE 吸嘴袋',
                            'img4Desc': '植物有機 PE，多層高阻隔保護精油活性。',
                            'solutionTag': '超值首發包裝推薦',
                            'solutionTitle': '主打超值方案：瓶子造型特殊鋁箔袋',
                            'solutionDesc': '希望以低成本在眾多產品中脫穎而出？Bottle-Shaped 特殊造型鋁箔袋能完美模擬瓶裝液體的外觀，重量卻只有瓶裝的十分之一，且無需昂貴的開模費用。非常適合通過平郵信封寄送樣品或旅行裝。',
                            'action1': '購買現貨造型袋 (100個起訂)',
                            'action2': '購買透明可降解 PLA 封口貼紙'
                        },
                        'checklist': {
                            'title': '活性化學防護與實驗室相容性測試流程',
                            'intro': '為確保包裝袋在柑橘油侵蝕下無任何結構退化，我們強烈建議在批量生產前執行以下 Achieve Pack 實驗室相容性測試流程：',
                            'phase1Title': '🧪 階段 1：材質與成分驗證',
                            'phase1': [
                                '確認產品配方中松烯 (d-limonene) 濃度是否大於 1.5%。',
                                '測試水油乳化液在不同極端溫度下的物理與化學穩定性。',
                                '評估配方中是否含有高濃度酒精或侵蝕性有機表面活性劑。',
                            ],
                            'phase2Title': '⚖ 階段 2：完整性防漏測試',
                            'phase2': [
                                '在 40°C 高溫模擬環境中進行 30 天的加速老化與滲透測試。',
                                '執行標準的跌落與真空封口防漏測試，模擬極端物流狀態。',
                                '驗證封口在高濃度精油浸染下的剝離強度，避免運輸滲漏。'
                            ]
                        }
                    },
                    'faq': {
                        'q1': '活性柑橘松烯與普通聚乙烯 (PE) 相容嗎？',
                        'a1': '普通的低密度聚乙烯 (LDPE) 會輕易滲透揮發性松烯，導致精油香氣流失、包裝乾癟。然而，我們配備高密度 EVOH 阻隔層的單一 PE 複合材質可以阻隔高達 99.8% 的松烯滲透，既保證了極致防護，又符合綠色單一材質的可回收標準。',
                        'q2': '如何防止柑橘精油香氣流失和產品氧化？',
                        'a2': '柑橘油極易在光照、氧氣和潮濕環境下變質。為鎖住活性松烯並防止氧化，我們強烈建議採用純鋁箔（特殊高阻隔）或甘蔗基多層 Bio-PE 高阻隔吸嘴袋包裝。',
                        'q3': '特殊瓶狀造型鋁箔袋的主要優勢是什麼？',
                        'a3': '特殊造型鋁箔袋是新品上市或小樣派發的最佳低成本選擇。它外觀吸睛，容積為 5g-35g，無需任何剛性瓶子的昂貴模具費，且多層鋁箔能提供出色的阻隔性能。',
                        'q4': '你們支持低起訂量的客製化印刷嗎？',
                        'a4': '支持！常規包裝廠通常需要至少 20,000 個起訂量，而 Achieve Pack 提供低至 500 個起訂量的客製化數位印刷吸嘴袋、彩盒及造型袋，完美匹配創業初期新品發布。'
                    },
                    'tables': {
                        'title': '技術規格對比：柑橘油包裝材質特性',
                        'headers': ['包裝格式', '氧氣阻隔率 (OTR)', '水汽阻隔率 (WVTR)', '耐酸與耐松烯等級', '最低起訂量', '相對成本'],
                        'rows': [
                            ['造型瓶裝鋁箔袋', '0.01 ml/m²/day', '0.02 g/m²/day', '★★★★★ (實心鋁箔核)', '100 個', '經濟 ($)'],
                            ['鋁箔封口膠囊', '0.02 ml/m²/day', '0.03 g/m²/day', '★★★★☆ (抗酸保護層)', '500 個', '中等 ($$)'],
                            ['可回收單一PE袋', '0.45 ml/m²/day', '0.35 g/m²/day', '★★★☆☆ (複合EVOH-PE)', '500 個', '中等 ($$)'],
                            ['甘蔗基Bio-PE袋', '0.05 ml/m²/day', '0.08 g/m²/day', '★★★★★ (甘蔗有機防護)', '500 個', '高 ($$$)'],
                            ['FSC客製化零售盒', '無阻隔要求 (外包裝)', '無要求', '無要求', '200 個', '輕奢 ($$$$)']
                        ]
                    },
                    'relatedLinks': {
                        'link1': {
                            'title': '高阻隔吸嘴鋁箔立體袋',
                            'description': '購買專為化妝品及液體設計的高阻隔中間吸嘴鋁複合袋。'
                        },
                        'link2': {
                            'title': '綠色環保立體袋目錄',
                            'description': '瀏覽我們的高阻隔單一可回收立體袋與可降解材質包裝袋。'
                        },
                        'link3': {
                            'title': '特殊瓶子造型鋁箔封口袋',
                            'description': '訂購吸睛度十足的特殊造型小樣包裝袋，柔霧粉彩質感外觀。'
                        },
                        'link4': {
                            'title': '高端 PLA 透明封口貼紙',
                            'description': '高溫穩定、可降解的透明環保貼紙，用於禮盒或封口密封。'
                        }
                    }
                },
                'coffeeRoaster': {
                    'title': '咖啡烘焙商包裝 | 單向排氣閥袋 | 永續材質 | Achieve Pack',
                    'description': '為專業咖啡烘焙商量身打造的永續包裝。配備專用單向排氣閥，提供極致的高阻隔防潮性能。提供可堆肥與可回收材質選擇，展現高端零售質感。',
                    'heroTitle': '咖啡烘焙大師與零售商包裝方案',
                    'heroSubtitle': '單向排氣閥兼容 | 極致高阻隔防潮 | 環保永續材質選擇',
                    'introSummary': '在轉型至環保包裝的同時，完美鎖住咖啡豆的新鮮香氣。完全相容單向排氣閥，提供 12 個月以上的保質防護，在可堆肥或可回收材質上展現卓越的貨架質感。',
                    'sections': {
                        'heroProblem': {
                            'title': '咖啡包裝的嚴苛挑戰',
                            'intro': '作為一家專業的精品咖啡烘焙商，您已經將烘焙手藝磨練得完美無瑕。現在，顧客與日益嚴格的環保法規都在推動您減少塑料垃圾——同時您絕不能犧牲決定咖啡豆生死的新鮮度與上架質感。',
                            'concernsTitle': '常見的痛點',
                            'concerns': [
                                '傳統咖啡袋使用無法回收的多層複合塑料',
                                '顧客對綠色環保包裝的強烈要求',
                                '擔心環保袋會影響保質期與排氣閥封合度',
                                '零售包裝的質感直接影響高端定位與銷售'
                            ],
                            'needTitle': '您的實際需求',
                            'need': [
                                '與單向排氣閥完美熱封相容',
                                '經實驗證實的保鮮與阻隔性能',
                                '在貨架上極具吸引力的精緻外觀',
                                '可驗證的綠色環保認證標章'
                            ]
                        },
                        'degassing': {
                            'title': '單向排氣閥與保鮮機制',
                            'intro': '新鮮烘焙的咖啡豆會在數天內持續釋放大量二氧化碳。我們的包裝袋配備單向排氣閥，能讓袋內二氧化碳逸出，同時阻絕外界氧氣進入，牢牢鎖住咖啡豆的巔峰香氣。',
                            'valveTitle': '單向排氣閥',
                            'valveDesc': '只排氣、不進氧，延長新鮮度',
                            'barrierTitle': '高阻隔外膜',
                            'barrierDesc': '提供 12 個月以上的極致防潮保質',
                            'sameDayTitle': '烘焙當天包裝',
                            'sameDayDesc': '無需等待養豆排氣，即烘即包'
                        },
                        'sustainable': {
                            'title': '永續環保材質選擇',
                            'intro': '告別傳統塑料，包裝性能不打折。我們提供經過驗證的環保包裝材質，能完美契合您現有的包裝設備。',
                            'compostableTitle': '國際認證可堆肥',
                            'compostableDesc': '天然牛皮紙結合可降解內膜。可在工業堆肥環境下完全分解。通過 ASTM D6400 國際認證。',
                            'recyclableTitle': '單一材質可回收 (PE)',
                            'recyclableDesc': '單一 PE 複合結構，可直接送往軟質塑料回收點。具備優異阻隔性且性價比極高。',
                            'valveTitle': '排氣閥相容性',
                            'valveDesc': '我們的可堆肥和可回收材質均能與標準單向排氣閥完美熱封。無需調整您現有的包裝封口設備。',
                            'learnMore': '了解更多材質資訊 →'
                        },
                        'retail': {
                            'title': '高端貨架零售美學',
                            'intro': '精緻的包裝能瞬間激發購買欲。我們的高端表面處理工藝讓您的咖啡包裝在貨架上脫穎而出，樹立高端品牌形象。',
                            'stylesTitle': '經典袋型選擇',
                            'styles': [
                                '平底袋 (八邊封盒包裝袋)',
                                '立體拉鍊袋 (Doypack)',
                                '側風琴袋 (傳統咖啡袋)',
                                '四邊封包裝袋'
                            ],
                            'finishesTitle': '工藝表面處理',
                            'finishes': [
                                '柔霧啞光 / 觸感膜',
                                '局部 UV 亮光效果',
                                '高端燙金 / 燙銀',
                                '凹凸壓紋'
                            ],
                            'closureTitle': '封口密封選項',
                            'closure': [
                                '可重複密封拉鍊',
                                '鐵絲夾 (Tin-tie) + 拉鍊',
                                '滑塊拉鍊',
                                '直接熱封封口'
                            ]
                        },
                        'supply': {
                            'title': '穩定可靠的供應鏈',
                            'intro': '您的烘焙排程容不得包裝交期延誤。我們提供穩定的交期和靈活的庫存管理方案，確保您的包裝庫存無虞。',
                            'time': '2-3 週',
                            'timeDesc': '業界最快的數位與柔印生產交期',
                            'blanket': '靈活預約出貨',
                            'blanketDesc': '依合約定期分批配送，節省倉儲空間',
                            'priority': 'VIP 優先排單',
                            'priorityDesc': '老客戶特快重訂與排單處理'
                        },
                        'cta': {
                            'title': '升級您的咖啡包裝',
                            'description': '索取咖啡包裝樣品',
                            'desc2': '在訂購前親自體驗材質的厚度與質感。我們將為您寄送裝有單向排氣閥與拉鍊的實物樣品供您測試。',
                            'button': '預約包裝工程諮詢',
                            'browse': '瀏覽所有咖啡包裝袋'
                        },
                        'industryScenarios': {
                            'title': '行業應用',
                            'intro': '不同規模的咖啡烘焙商對包裝的要求各有不同。選擇正確的方案是品牌取得成功的基石。',
                            'roasterTitle': '精品咖啡烘焙商',
                            'roasterDesc': '單一產區咖啡豆、精品配方豆、對新鮮度與風味要求極高。',
                            'roasterShare': '市場佔比: 40%',
                            'organicTitle': '有機咖啡品牌',
                            'organicDesc': '有機認證、公平貿易、雨林聯盟等注重生態的產品線。',
                            'organicShare': '市場佔比: 35%',
                            'ecommerceTitle': '咖啡電商與訂閱品牌',
                            'ecommerceDesc': '線上直營零售 (DTC)、咖啡訂閱制、物流投遞專用輕量袋。',
                            'ecommerceShare': '市場佔比: 25%',
                            'successTitle': '客戶成功故事',
                            'successDesc': '「自從換成可堆肥牛皮紙袋後，我們的月度咖啡訂閱用戶數成長了 30%。許多老顧客在回饋中提到，環保包裝是他們選擇我們的決定性原因。」 — 精品咖啡烘焙工坊創辦人'
                        },
                        'marketData': {
                            'title': '市場數據與情報',
                            'intro': '全球咖啡市場持續強勁成長，消費者對永續咖啡包裝的呼聲達到了前所未有的高度。',
                            'stat1': '$650億',
                            'stat1Label': '全球咖啡市場規模',
                            'stat1Trend': '年複合成長率 5.5%',
                            'stat2': '72%',
                            'stat2Label': '消費者偏好綠色包裝',
                            'stat2Trend': '穩步增長中',
                            'stat3': '12+月',
                            'stat3Label': '高阻隔鎖鮮期',
                            'stat3Trend': '維持香氣不流失',
                            'stat4': '500個',
                            'stat4Label': '起訂量門檻',
                            'stat4Trend': '完美匹配數位打樣',
                            'insightsTitle': '市場趨勢洞察',
                            'insightsDesc': '精品咖啡市場的競爭日益激烈，消費者在關注咖啡新鮮度的同時，也更加看重包裝的環保標籤。可堆肥袋與可回收 PE 袋已成為精品市場的首選。'
                        },
                        'materialComparison': {
                            'title': '材質特性對比',
                            'intro': '比較不同的咖啡包裝材質特性，挑選最適合您品牌定位的方案。',
                            'headers': ['包裝類型', '保質阻隔期', '單向排氣閥熱封', '環保認證標章', '相對成本'],
                            'row1': ['可堆肥牛皮紙袋', '6-9 個月', '✓ 完美相容', 'ASTM D6400', '$$'],
                            'row2': ['可回收單一 PE 袋', '12+ 個月', '✓ 完美相容', 'How2Recycle', '$'],
                            'row3': ['高阻隔牛皮紙鋁箔袋', '12+ 個月', '✓ 完美相容', '可回收', '$$'],
                            'guideTitle': '材質選擇指南',
                            'guideDesc': '對於咖啡烘焙商，我們建議根據您的產品定位和分銷渠道來選擇。超高溢價的單一產區手沖豆非常適合採用可堆肥紙袋，而大流通的商業配方豆則建議選用可回收單一 PE 袋以控制包裝成本。'
                        }
                    },
                    'faq': {
                        'q1': '可堆肥咖啡袋可以熱封單向排氣閥嗎？',
                        'a1': '可以。我們的可堆肥咖啡袋與排氣閥完美相容。排氣閥是在製袋過程中通過熱封設備精準壓合上去的，您在裝豆和封口時無需更換任何現有設備。',
                        'q2': '可堆肥咖啡袋的保質期大概是多久？',
                        'a2': '在配備高阻隔材料和排氣閥的情況下，熟咖啡豆的保鮮期通常在 6-9 個月。如果您需要 12 個月以上的超長保質期，建議選用我們的可回收單一 PE 咖啡袋。',
                        'q3': '環保包裝能做出和傳統塑料袋一樣的精緻工藝嗎？',
                        'a3': '完全可以。我們的可堆肥牛皮紙袋具備非常質樸、高端的天然紙張觸感。我們同樣提供局部 UV 光澤、燙金和柔霧等裝飾工藝，確保您的包裝極具視覺衝擊力。',
                        'q4': '你們的排氣閥咖啡袋起訂量是多少？',
                        'a4': '常規尺寸排氣閥咖啡袋的起訂量為 500 個。對於新品測試或限量版單一產區豆，我們可以通過數位印刷生產線為您安排低至 100-200 個的微量定做。'
                    }
                }
            }
        }
    },
    'es': {
        'seoPages': {
            'pages': {
                'artisanProducer': {
                    'title': 'Embalaje para Productores Artesanales | Lotes Pequeños | MOQ Bajo | Achieve Pack',
                    'description': 'Embalaje a medida para productores artesanales de alimentos. MOQ bajo desde 100 unidades, estética craft y durabilidad para mercados. Opciones sostenibles. Perfecto para productos gourmet.',
                    'heroTitle': 'Embalaje para Creadores Artesanales',
                    'heroSubtitle': 'MOQ de 100 Piezas | Estética Craft | Durabilidad para Mercados',
                    'introSummary': 'Empaque sus productos hechos a mano con el cuidado que merecen. Pedidos mínimos bajos, acabados kraft naturales y materiales sostenibles que cuentan su historia.',
                    'sections': {
                        'heroProblem': {
                            'title': 'Embalaje para Creadores Artesanales',
                            'intro': 'Usted crea productos gourmet en lotes pequeños con cuidado—granolas artesanales, chocolates hechos a mano, conservas especiales. Su embalaje debería contar esa historia, pero los altos MOQ y las opciones genéricas no coinciden con su oficio.',
                            'challengesTitle': 'Desafíos Artesanales',
                            'challenges': [
                                'Lotes pequeños, producción irregular',
                                'El embalaje genérico no transmite el oficio',
                                'Condiciones del mercado de agricultores (sol, calor)',
                                'Presupuesto limitado para embalaje'
                            ],
                            'needTitle': 'Lo Que Necesita',
                            'need': [
                                'MOQ bajo para tiradas pequeñas',
                                'Embalaje que cuente su historia',
                                'Duradero para mercados al aire libre',
                                'Ecológico para coincidir con sus valores'
                            ]
                        },
                        'smallBatch': {
                            'title': 'Hecho para Producción en Lotes Pequeños',
                            'intro': 'Entendemos la economía artesanal. Ordene desde solo 100 bolsas—perfecto para productos de temporada, nuevas recetas o ediciones limitadas.',
                            'moqTitle': 'Mínimo de Piezas',
                            'moqDesc': 'Sin desperdicio por exceso de stock',
                            'flexTitle': 'Flexibilidad',
                            'flexDesc': 'Ediciones de vacaciones/cosecha',
                            'plateTitle': 'Sin Costos de Placas',
                            'plateDesc': 'Cambie diseños libremente'
                        },
                        'craftAesthetic': {
                            'title': 'Embalaje que Cuenta su Historia',
                            'intro': 'Los productos artesanales merecen un embalaje artesanal. Texturas y acabados naturales que comunican calidad hecha a mano y conectan con consumidores conscientes.',
                            'aestheticsTitle': 'Estética Craft',
                            'aesthetics': [
                                'Aspecto de papel kraft natural',
                                'Ventanas transparentes para visibilidad del producto',
                                'Acabados mates para una sensación orgánica',
                                'Impresión en tonos tierra'
                            ],
                            'optionsTitle': 'Opciones Personalizadas',
                            'options': [
                                'Su logotipo e historia de marca',
                                'Listas de ingredientes y certificaciones',
                                'Números de lote y fechas',
                                'Etiquetas de edición limitada/temporada'
                            ]
                        },
                        'markets': {
                            'title': 'Construido para Mercados de Agricultores',
                            'intro': 'Las condiciones de los mercados de agricultores son duras—sol directo, cambios de temperatura, manipulación por parte de los clientes. Nuestras bolsas están diseñadas para la durabilidad en el mundo real mientras mantienen la frescura del producto.',
                            'readyTitle': 'Características Listas para el Mercado',
                            'readyCol1': [
                                'Impresión resistente a los rayos UV',
                                'Materiales resistentes a pinchazos',
                                'Diseño stand-up para exhibición'
                            ],
                            'readyCol2': [
                                'Resellable para degustación',
                                'Protección de barrera contra la humedad',
                                'Opción de agujero para colgar fácil'
                            ]
                        },
                        'sustainable': {
                            'title': 'Sostenibilidad que Coincide con sus Valores',
                            'intro': 'A sus clientes les importa el planeta, y a usted también. Elija un embalaje que se alinee con los valores artesanales y cuente su historia de sostenibilidad.',
                            'compostableTitle': 'Compostable Doméstico/Industrial',
                            'compostableDesc': 'Papel kraft con PLA. Se descompone naturalmente. Perfecto para mercados ecológicos.',
                            'recyclableTitle': 'Opciones Reciclables',
                            'recyclableDesc': 'Reciclable en puntos de entrega. Comunique las instrucciones de reciclaje a los clientes.'
                        },
                        'cta': {
                            'title': 'Empaque su Oficio con Cuidado',
                            'description': 'Cuéntenos sobre sus productos artesanales. Le recomendaremos el embalaje que coincida con su marca y le enviaremos muestras para su evaluación.',
                            'button': 'Reservar Consulta Gratuita',
                            'browse': 'Ver Opciones'
                        },
                        'industryScenarios': {
                            'title': 'Aplicaciones de la Industria',
                            'intro': 'Los diferentes tipos de productos artesanales tienen diferentes requisitos de embalaje. Elegir el embalaje adecuado es clave para el éxito de su marca.',
                            'foodTitle': 'Productores de Alimentos Artesanales',
                            'foodDesc': 'Chocolate, mermelada, productos horneados y otros productos de especialidad artesanal.',
                            'foodShare': 'Participación: 45%',
                            'marketTitle': 'Vendedores de Mercados de Agricultores',
                            'marketDesc': 'Productos del mercado de agricultores, alimentos orgánicos y productos de especialidad local.',
                            'marketShare': 'Participación: 35%',
                            'batchTitle': 'Marcas de Lotes Pequeños',
                            'batchDesc': 'Ediciones limitadas, productos de temporada y pruebas de nuevos productos.',
                            'batchShare': 'Participación: 20%',
                            'successTitle': 'Historia de Éxito del Cliente',
                            'successDesc': '“Ordenar desde 100 unidades me permite probar diferentes productos y diseños sin presión de inventario. Ahora mis mermeladas artesanales son muy populares en los mercados de agricultores.” — Fundadora de marca de mermelada artesanal'
                        },
                        'marketData': {
                            'title': 'Datos de Mercado e Inteligencia',
                            'intro': 'El mercado de alimentos artesanales continúa creciendo a medida que aumenta la demanda de los consumidores de productos de especialidad hechos a mano.',
                            'stat1': '$28 mil millones',
                            'stat1Label': 'Tamaño del Mercado Artesanal',
                            'stat1Trend': 'Crecimiento anual 8.5%',
                            'stat2': '67%',
                            'stat2Label': 'Consumidores Prefieren Artesanal',
                            'stat2Trend': 'Crecimiento medio',
                            'stat3': '45%',
                            'stat3Label': 'Dispuestos a Pagar Premium',
                            'stat3Trend': 'Estable',
                            'stat4': '100',
                            'stat4Label': 'Cantidad Mínima de Pedido',
                            'stat4Trend': 'Flexible',
                            'insightsTitle': 'Perspectivas de Tendencias del Mercado',
                            'insightsDesc': 'El mercado de alimentos artesanales se está expandiendo rápidamente, y los consumidores se centran cada vez más en historias de marca auténticas. El embalaje ecológico es muy bien recibido en los mercados de agricultores y canales similares.'
                        },
                        'materialComparison': {
                            'title': 'Comparación de Materiales',
                            'intro': 'Compare las diferentes características de los materiales de embalaje para ayudarle a elegir la solución más adecuada para sus productos artesanales.',
                            'headers': ['Tipo de Embalaje', 'Pedido Mínimo', 'Calificación Eco', 'Mejor Escenario', 'Costo'],
                            'row1': ['Cartón Compostable', '100 unidades', 'Mercados de Agricultores, Tiendas Orgánicas', '$$'],
                            'row2': ['Transparente Reciclable', '100 unidades', 'Tiendas Especializadas, Venta al por Menor', '$'],
                            'row3': ['Cartón con Ventana', '100 unidades', 'Exhibición de Productos, Bloque de Estante', '$$'],
                            'guideTitle': 'Guía de Selección de Materiales',
                            'guideDesc': 'Para productores de alimentos artesanales, recomendamos considerar prioritariamente el embalaje de cartón. Transmite una imagen de marca natural y hecha a mano. Agregar una ventana permite la visibilidad del producto y aumenta la intención de compra.'
                        }
                    },
                    'faq': {
                        'q1': '¿Cuál es el pedido mínimo para productos artesanales?',
                        'a1': 'Solo 100 piezas. Esto le permite envasar lotes pequeños, probar nuevos productos o crear ediciones limitadas de temporada sin comprometerse con un gran inventario.',
                        'q2': '¿Puedo ordenar diferentes tamaños en un solo pedido?',
                        'a2': 'Sí. Muchos productores artesanales ordenan tamaños mixtos—bolsas pequeñas para muestras, más grandes para productos completos. Podemos acomodar pedidos de tamaños mixtos con el mismo diseño.',
                        'q3': '¿Ofrecen embalaje para mercados de agricultores?',
                        'a3': 'Absolutamente. Nuestras bolsas stand-up están diseñadas para la exhibición, con impresión resistente a los rayos UV y materiales duraderos que soportan las condiciones de los mercados al aire libre.',
                        'q4': '¿Puedo personalizar para productos de temporada?',
                        'a4': '¡Sí! La impresión digital significa que no hay costos de placas—puede crear ediciones de vacaciones, especiales de cosecha o cualquier variación de temporada sin pagar tarifas de configuración adicionales.'
                    }
                },
                'citrusOilPackaging': {
                    'title': 'Soluciones de Embalaje para Aceite de Cítricos: Sachet vs. Bolsas con Boquilla | Achieve Pack',
                    'description': 'Compare opciones de embalaje sostenible para aceites cítricos: sachets de alta barrera, cápsulas de aluminio, bolsas de PE reciclables y bolsas de Bio-PE de caña de azúcar. Proteja los terpenos cítricos contra la oxidación y fugas.',
                    'heroTitle': 'Soluciones de Embalaje para Aceite de Cítricos y Terpenos',
                    'heroSubtitle': 'Sachets de Alta Barrera | Bolsas con Boquilla Reciclables | Cápsulas de Aluminio y Estuches de Lujo',
                    'introSummary': 'Las pruebas de demanda a nivel de startup requieren un embalaje que equilibre la protección química activa, la resistencia a las fugas y los objetivos de reducción de carbono. Compare nuestras opciones.',
                    'sections': {
                        'challenge': {
                            'title': 'El Desafío del Aceite de Cítricos: Degradación de Terpenos y Selección de Materiales',
                            'intro': 'Los aceites derivados de cítricos, ricos en compuestos orgánicos activos como el d-limoneno y otros terpenos ácidos, son altamente volátiles y químicamente agresivos. A diferencia de los cosméticos a base de agua comunes, los aceites cítricos actúan como solventes orgánicos suaves que pueden hinchar, agrietar o penetrar los plásticos estándar de baja barrera con el tiempo.',
                            'risksTitle': 'Riesgos Clave del Material',
                            'risks': [
                                'Permeación de Terpenos: Los aromas se filtran a través del PE de baja densidad en pocos días, provocando la oxidación del producto.',
                                'Agrietamiento por Estrés: Los componentes ácidos debilitan las juntas termoselladas, arriesgando fugas durante el transporte.',
                                'Absorción de Aroma: Los terpenos degradan los perfiles del sabor del plástico, volviendo rancio el aceite cítrico premium.'
                            ],
                            'reqsTitle': 'Requisitos de Ingeniería',
                            'reqs': [
                                'Barrera contra Terpenos de Aluminio: Un núcleo de aluminio sólido o revestimiento EVOH de alta densidad.',
                                'Selladores Resistentes a los Ácidos: Laminados de copolímero probados contra extractos directos de frutas.',
                                'Estuches de Cartón FSC: Cajas protectoras exteriores para cápsulas delicadas o bolsas que reemplazan al vidrio.'
                            ]
                        },
                        'options': {
                            'title': '5 Opciones de Embalaje Comparadas: Desde MVP Económico hasta Premium Sostenible',
                            'intro': 'Ofrecemos una gama completa de soluciones de embalaje certificadas para lanzamientos directos al consumidor, pruebas de demanda en lotes pequeños y producción masiva.',
                            'opt1': {
                                'label': 'Opción 1',
                                'tag': 'Prueba de Nuevo Producto',
                                'title': 'Sachet de Aluminio en Forma de Botella',
                                'desc': 'Un sachet de aluminio con una forma de botella llamativa, diseñado para muestras de un solo uso o tamaños de viaje. Extremadamente rentable con protección absoluta contra la luz y el aire.',
                                'points': [
                                    'Estructura de aluminio mate de alta barrera',
                                    'Ideal para dosis de prueba (5-30g)',
                                    'Muesca de desgarro para abrir fácilmente'
                                ],
                                'action': 'Ordenar Sachets (Desde US$0.06)'
                            },
                            'opt2': {
                                'label': 'Opción 2',
                                'tag': 'Premium y Exclusivo',
                                'title': 'Cápsula de Aluminio sin Plástico',
                                'desc': 'Cápsulas compactas de 40ml de papel de aluminio con tapas selladas. Cero plásticos y una experiencia de desempaque de lujo—perfecto para regalos y muestras de alta gama.',
                                'points': [
                                    'Capa de barrera metálica pura',
                                    'Estética minorista de metal mate premium',
                                    'Costo inicial mínimo de equipo de envasado'
                                ],
                                'action': 'Solicitar RFQ de Cápsula Personalizada'
                            },
                            'opt3': {
                                'label': 'Opción 3',
                                'tag': 'Estilo de Recarga Ecológico',
                                'title': 'Bolsa con Boquilla Reciclable',
                                'desc': 'Una bolsa stand-up de PE monomaterial de alta claridad que es totalmente reciclable. Perfecto para recargas D2C con alta visibilidad de la marca y del producto.',
                                'points': [
                                    'Monomaterial con revestimiento EVOH y estructura PE',
                                    'Color dorado natural del aceite claramente visible',
                                    'Menor huella de carbono que las botellas de vidrio o plástico'
                                ],
                                'action': 'Comprar Bolsas Reciclables'
                            },
                            'opt4': {
                                'label': 'Opción 4',
                                'tag': 'PE de Caña de Azúcar Sostenible',
                                'title': 'Bolsa con Boquilla de Bio-PE',
                                'desc': 'Polietileno orgánico derivado de la caña de azúcar natural emparejado con capas de barrera avanzadas. El estándar de oro para la estabilidad a largo plazo y la integridad del sello.',
                                'points': [
                                    'Estructura de polímero bio-basado',
                                    'Máxima defensa química contra el d-limoneno',
                                    'Excelente resistencia al pinchazo durante la logística'
                                ],
                                'action': 'Comprar Bolsas de Bio-PE'
                            },
                            'opt5': {
                                'label': 'Opción 5',
                                'tag': 'Regalo Minorista de Lujo',
                                'title': 'Caja de Exhibición FSC Personalizada',
                                'desc': 'Añada cajas de cartón FSC premium a su línea de cápsulas de aluminio. Combina bandejas interiores troqueladas y detalles en dorado para crear un ecosistema de lujo completo.',
                                'points': [
                                    'Cartón gris sólido reciclado certificado FSC',
                                    'Detalles dorados premium y acabados mate',
                                    'Envío plano para ahorrar espacio en el almacén'
                                ],
                                'action': 'Diseñar Caja FSC Personalizada'
                            }
                        },
                        'showcase': {
                            'title': 'Muestrario de Productos y Diseños',
                            'intro': 'Haga clic para ampliar los prototipos de embalaje. Desarrollados bajo directrices de prueba de caña de azúcar y estándares de cartón FSC.',
                            'img1Title': 'Cápsula de Muestra de 40ml',
                            'img1Desc': 'Sellado metálico sin plástico, aspecto de lujo mate.',
                            'img2Title': 'Estuche de Regalo FSC',
                            'img2Desc': 'Inserciones troqueladas, detalles dorados orgánicos, kit premium.',
                            'img3Title': 'Bolsa con Boquilla Reciclable',
                            'img3Desc': 'Monomaterial PE, ventana transparente para ver el aceite.',
                            'img4Title': 'Bolsa con Boquilla de Bio-PE',
                            'img4Desc': 'PE orgánico vegetal, alta barrera multicapa.',
                            'solutionTag': 'Recomendación de Embalaje Económico',
                            'solutionTitle': 'Solución de Bajo Costo Destacada: Sachet con Forma de Botella',
                            'solutionDesc': '¿Quiere destacar con un presupuesto bajo? El sachet de aluminio con forma de botella imita el aspecto de los envases rígidos pero pesa solo una décima parte y no requiere costosos moldes. Perfecto para enviar muestras por correo.',
                            'action1': 'Comprar Sachets en Stock (MOQ 100)',
                            'action2': 'Pedir Adhesivos de Sellado PLA Transparentes'
                        },
                        'checklist': {
                            'title': 'Protocolo de Pruebas de Compatibilidad y Conformidad',
                            'intro': 'Para asegurar que la bolsa no se degrade por el aceite de cítricos, recomendamos seguir este protocolo de pruebas de Achieve Pack:',
                            'phase1Title': '🧪 Fase 1: Verificación de Material y Fórmula',
                            'phase1': [
                                'Confirmar si la fórmula tiene una alta concentración de terpenos (>1.5% d-limoneno).',
                                'Probar la estabilidad de la emulsión agua/aceite a temperaturas extremas.',
                                'Evaluar disolventes activos (alcohol o surfactantes orgánicos agresivos) en la fórmula.'
                            ],
                            'phase2Title': '⚖ Fase 2: Pruebas de Estanqueidad e Integridad',
                            'phase2': [
                                'Realizar una prueba de envejecimiento acelerado a 40°C durante 30 días.',
                                'Efectuar pruebas estándar de caída y vacío para evitar fugas en el transporte.',
                                'Verificar la resistencia del sellado para prevenir fugas.'
                            ]
                        }
                    },
                    'faq': {
                        'q1': '¿Son compatibles los terpenos cítricos con el polietileno (PE) estándar?',
                        'a1': 'El polietileno de baja densidad (LDPE) común es muy poroso a los terpenos, perdiendo aroma y desinflando la bolsa. Sin embargo, nuestro PE monomaterial con barrera EVOH bloquea el 99.8% de los terpenos, siendo reciclable y de alta protección.',
                        'q2': '¿Cómo evito la oxidación y pérdida de aroma en aceites cítricos?',
                        'a2': 'El aceite cítrico se oxida fácilmente con la luz y el aire. Para protegerlo, recomendamos bolsas de aluminio puro o bolsas de Bio-PE multicapa de alta barrera.',
                        'q3': '¿Cuál es la principal ventaja del sachet con forma de botella?',
                        'a3': 'El sachet con forma de botella destaca en el estante y es ideal para muestras de 5g-35g. No requiere moldes costosos y ofrece una excelente barrera gracias a su aluminio multicapa.',
                        'q4': '¿Ofrecen impresión personalizada en cantidades bajas?',
                        'a4': '¡Sí! Mientras que otras fábricas exigen 20,000 unidades, Achieve Pack ofrece sachets, cajas y bolsas personalizadas desde solo 500 unidades para lanzamientos de startups.'
                    },
                    'tables': {
                        'title': 'Comparativa Técnica: Materiales de Embalaje para Aceite Cítrico',
                        'headers': ['Formato', 'Barrera de Oxígeno (OTR)', 'Barrera de Vapor (WVTR)', 'Resistencia a Ácidos y Terpenos', 'MOQ', 'Costo Relativo'],
                        'rows': [
                            ['Sachet en Forma de Botella', '0.01 ml/m²/día', '0.02 g/m²/day', '★★★★★ (Núcleo de Aluminio)', '100 pcs', 'Bajo ($)'],
                            ['Cápsula de Aluminio', '0.02 ml/m²/día', '0.03 g/m²/day', '★★★★☆ (Capa de Protección)', '500 pcs', 'Medio ($$)'],
                            ['Bolsa de PE Reciclable', '0.45 ml/m²/día', '0.35 g/m²/day', '★★★☆☆ (EVOH-PE)', '500 pcs', 'Medio ($$)'],
                            ['Bolsa de Bio-PE de Caña', '0.05 ml/m²/día', '0.08 g/m²/day', '★★★★★ (Protección Bio)', '500 pcs', 'Alto ($$$)'],
                            ['Caja FSC Personalizada', 'N/A (Embalaje Exterior)', 'N/A', 'N/A', '200 pcs', 'Premium ($$$$)']
                        ]
                    },
                    'relatedLinks': {
                        'link1': {
                            'title': 'Bolsa Stand Up con Boquilla de Alta Barrera',
                            'description': 'Comprar bolsas de aluminio con boquilla central para cosméticos y líquidos.'
                        },
                        'link2': {
                            'title': 'Catálogo de Bolsas Stand Up Ecológicas',
                            'description': 'Ver bolsas de PE reciclables y materiales compostables de alta barrera.'
                        },
                        'link3': {
                            'title': 'Bolsa de Aluminio con Forma de Botella',
                            'description': 'Pedir sachets con forma de botella de acabado mate para muestras.'
                        },
                        'link4': {
                            'title': 'Adhesivos de Sellado PLA Premium',
                            'description': 'Etiquetas compostables transparentes y estables al calor para cajas.'
                        }
                    }
                },
                'coffeeRoaster': {
                    'title': 'Envasado para Tostadores de Café | Bolsas con Válvula | Sostenible | Achieve Pack',
                    'description': 'Envasado de café sostenible para tostadores especializados. Compatible con válvula de desgasificación, alta barrera para frescura, opciones compostables y reciclables. Presencia minorista premium.',
                    'heroTitle': 'Envasado para Tostadores de Café',
                    'heroSubtitle': 'Compatible con Válvula Desgasificadora | Alta Barrera | Sostenible',
                    'introSummary': 'Transición al envasado de café sostenible sin comprometer la frescura. Válvula desgasificadora compatible, vida útil de 12+ meses, presencia en estantería premium—en compostables o reciclables.',
                    'sections': {
                        'heroProblem': {
                            'title': 'El Desafío del Envasado de Café',
                            'intro': 'Como tostador de café de especialidad, ha perfeccionado su oficio. Ahora, los clientes y las regulaciones lo presionan para reducir el desperdicio de plástico, sin comprometer la frescura y la presencia en el estante que impulsan las ventas.',
                            'concernsTitle': 'Preocupaciones Actuales',
                            'concerns': [
                                'Las bolsas tradicionales utilizan plásticos multicapa no reciclables',
                                'Demanda de los clientes de opciones sostenibles',
                                'Temor a comprometer la frescura y la vida útil',
                                'La apariencia premium impulsa las ventas retail'
                            ],
                            'needTitle': 'Lo Que Necesita',
                            'need': [
                                'Compatibilidad con válvula de desgasificación',
                                'Rendimiento de frescura comprobado',
                                'Atractivo premium en el estante minorista',
                                'Credenciales sostenibles verificables'
                            ]
                        },
                        'degassing': {
                            'title': 'Válvulas de Desgasificación y Frescura',
                            'intro': 'El café recién tostado libera CO2 durante días. Nuestras bolsas incluyen válvulas de desgasificación unidireccionales que permiten que el gas escape y evitan la entrada de oxígeno, manteniendo la máxima frescura.',
                            'valveTitle': 'Válvula Unidireccional',
                            'valveDesc': 'CO2 fuera, oxígeno bloqueado',
                            'barrierTitle': 'Alta Barrera',
                            'barrierDesc': '12+ meses de vida útil',
                            'sameDayTitle': 'Envasado el Mismo Día',
                            'sameDayDesc': 'Sin esperas para desgasificar antes de envasar'
                        },
                        'sustainable': {
                            'title': 'Alternativas Sostenibles',
                            'intro': 'Aléjese del plástico convencional sin sacrificar el rendimiento. Elija entre materiales sostenibles probados que funcionan con su equipo actual.',
                            'compostableTitle': 'Compostable Certificado',
                            'compostableDesc': 'Papel kraft + barrera PLA. Se descompone en compostaje industrial. Certificación ASTM D6400.',
                            'recyclableTitle': 'Reciclable en Tiendas',
                            'recyclableDesc': 'Estructura mono-PE aceptada en puntos de reciclaje. Alta barrera, menor costo.',
                            'valveTitle': 'Compatibilidad de Válvula',
                            'valveDesc': 'Todos nuestros materiales sostenibles son compatibles con válvulas desgasificadoras estándar. Sin cambios de maquinaria.',
                            'learnMore': 'Saber más →'
                        },
                        'retail': {
                            'title': 'Presencia Minorista Premium',
                            'intro': 'El atractivo en el estante impulsa las compras impulsivas. Nuestros acabados premium crean un embalaje destacado en retail.',
                            'stylesTitle': 'Estilos de Bolsa',
                            'styles': [
                                'Fondo plano (box pouch)',
                                'Bolsa stand-up',
                                'Fuelle lateral',
                                'Sellado cuádruple'
                            ],
                            'finishesTitle': 'Acabados Premium',
                            'finishes': [
                                'Mate / tacto suave',
                                'Barniz UV localizado',
                                'Estampado metálico',
                                'Relieve'
                            ],
                            'closureTitle': 'Opciones de Cierre',
                            'closure': [
                                'Cremallera resellable',
                                'Tin-tie + cremallera',
                                'Cremallera deslizante',
                                'Sellado térmico directo'
                            ]
                        },
                        'supply': {
                            'title': 'Cadena de Suministro Confiable',
                            'intro': 'Las tiradas de producción no pueden esperar por retrasos en el envasado. Mantenemos un suministro constante con plazos confiables.',
                            'time': '2-3 semanas',
                            'timeDesc': 'Entrega rápida digital o flexográfica',
                            'blanket': 'Pedidos abiertos',
                            'blanketDesc': 'Envíos programados para ahorrar almacenamiento',
                            'priority': 'Prioridad',
                            'priorityDesc': 'Tratamiento prioritario para pedidos repetidos'
                        },
                        'cta': {
                            'title': 'Actualice su Envasado de Café',
                            'description': 'Solicitar Muestras de Envasado de Café',
                            'desc2': 'Vea y sienta las bolsas de café sostenible antes de comprometerse. Le enviaremos muestras con la válvula y el cierre que elija.',
                            'button': 'Reservar Consulta',
                            'browse': 'Ver Bolsas de Café'
                        },
                        'industryScenarios': {
                            'title': 'Aplicaciones de la Industria',
                            'intro': 'Los tostadores de café de diferentes tamaños tienen diferentes requisitos. Elegir la solución correcta es clave para el éxito de su marca.',
                            'roasterTitle': 'Tostadores de Especialidad',
                            'roasterDesc': 'Café de origen único, mezclas especiales y altos requisitos de calidad y frescura.',
                            'roasterShare': 'Participación: 40%',
                            'organicTitle': 'Marcas de Café Orgánico',
                            'organicDesc': 'Certificación orgánica, comercio justo y Rainforest Alliance.',
                            'organicShare': 'Participación: 35%',
                            'ecommerceTitle': 'Suscripciones y E-commerce',
                            'ecommerceDesc': 'Ventas en línea, modelos de suscripción y marcas directas al consumidor.',
                            'ecommerceShare': 'Participación: 25%',
                            'successTitle': 'Historia de Éxito del Cliente',
                            'successDesc': '“Tras cambiar al envasado compostable, nuestra base de suscriptores creció un 30%. Muchos clientes señalaron que el embalaje ecológico fue la razón principal para elegirnos.” — Fundador de fábrica de tostado de café'
                        },
                        'marketData': {
                            'title': 'Datos de Mercado e Inteligencia',
                            'intro': 'El mercado de envasado de café continúa creciendo a medida que los consumidores demandan opciones sostenibles.',
                            'stat1': '$65 mil millones',
                            'stat1Label': 'Mercado Global del Café',
                            'stat1Trend': 'Crecimiento anual 5.5%',
                            'stat2': '72%',
                            'stat2Label': 'Prefieren Envases Ecológicos',
                            'stat2Trend': 'Crecimiento medio',
                            'stat3': '12+ meses',
                            'stat3Label': 'Vida Útil de Alta Barrera',
                            'stat3Trend': 'Conserva el aroma',
                            'stat4': '500',
                            'stat4Label': 'Cantidad Mínima de Pedido',
                            'stat4Trend': 'Perfecto para tiradas cortas',
                            'insightsTitle': 'Perspectivas del Mercado',
                            'insightsDesc': 'El mercado de café de especialidad sigue creciendo, enfocándose en la frescura y la sostenibilidad. Las bolsas compostables y reciclables son las favoritas de este mercado.'
                        },
                        'materialComparison': {
                            'title': 'Comparación de Materiales',
                            'intro': 'Compare las características de los diferentes materiales para elegir el más adecuado.',
                            'headers': ['Tipo de Embalaje', 'Vida Útil', 'Válvula de Desgasificación', 'Certificación Ecológica', 'Costo'],
                            'row1': ['Papel Compostable', '6-9 meses', '✓ Compatible', 'ASTM D6400', '$$'],
                            'row2': ['Mono-PE Reciclable', '12+ meses', '✓ Compatible', 'How2Recycle', '$'],
                            'row3': ['Papel con Aluminio', '12+ meses', '✓ Compatible', 'Reciclable', '$$'],
                            'guideTitle': 'Guía de Selección de Materiales',
                            'guideDesc': 'Para tostadores de café, recomendamos elegir según el posicionamiento del producto. El café premium de especialidad es adecuado para papel compostable, mientras que el café de gran volumen prefiere opciones de PE reciclable para un mejor costo.'
                        }
                    },
                    'faq': {
                        'q1': '¿Funcionan las bolsas compostables con válvulas desgasificadoras?',
                        'a1': 'Sí. Nuestras bolsas de café compostables son totalmente compatibles con válvulas desgasificadoras unidireccionales, que se aplican con sellado térmico estándar en la製袋.',
                        'q2': '¿Cuál es la vida útil de las bolsas de café compostables?',
                        'a2': 'Con materiales compostables de alta barrera y válvula, espere 6-9 meses para café en grano. Para 12+ meses, recomendamos mono-PE reciclable.',
                        'q3': '¿Puedo obtener acabados premium con materiales sostenibles?',
                        'a3': 'Por supuesto. Nuestras bolsas compostables de papel kraft tienen un aspecto natural y premium. También ofrecemos acabados mate, barniz UV localizado y estampado metálico.',
                        'q4': '¿Cuál es el pedido mínimo para las bolsas de café?',
                        'a4': 'El MOQ es de 500 piezas para bolsas de tamaño estándar con válvula. Para pruebas o lotes pequeños, podemos hacer tiradas de 100-200 piezas con nuestra prensa digital.'
                    }
                }
            }
        }
    },
    'fr': {
        'seoPages': {
            'pages': {
                'artisanProducer': {
                    'title': 'Emballage pour Producteurs Artisans | Petits Lots | MOQ Faible | Achieve Pack',
                    'description': 'Emballage sur mesure pour les artisans de l\'agroalimentaire. MOQ faible dès 100 pièces, esthétique craft, robuste pour les marchés. Options écologiques. Parfait pour les produits gourmet.',
                    'heroTitle': 'Emballage pour Producteurs Artisans',
                    'heroSubtitle': 'MOQ de 100 Pièces | Esthétique Craft | Robuste pour les Marchés',
                    'introSummary': 'Emballez vos produits artisanaux avec le soin qu\'ils méritent. Faibles minimums de commande, finitions kraft naturelles et matériaux durables qui racontent votre histoire.',
                    'sections': {
                        'heroProblem': {
                            'title': 'Emballage pour Producteurs Artisans',
                            'intro': 'Vous créez des produits gastronomiques en petits lots avec soin—granolas artisanaux, chocolats faits main, confitures de spécialité. Votre emballage doit raconter cette histoire, mais les MOQ élevés et les options génériques ne correspondent pas à votre artisanat.',
                            'challengesTitle': 'Défis Artisanaux',
                            'challenges': [
                                'Petits lots, production irrégulière',
                                'L\'emballage générique ne transmet pas l\'artisanat',
                                'Conditions du marché de producteurs (soleil, chaleur)',
                                'Budget limité pour l\'emballage'
                            ],
                            'needTitle': 'Ce Dont Vous Avez Besoin',
                            'need': [
                                'MOQ faible pour les petites séries',
                                'Emballage qui raconte votre histoire',
                                'Durable pour les marchés en plein air',
                                'Écologique pour correspondre à vos valeurs'
                            ]
                        },
                        'smallBatch': {
                            'title': 'Conçu pour la Production en Petits Lots',
                            'intro': 'Nous comprenons l\'économie artisanale. Commandez seulement 100 sachets—parfait pour les produits de saison, les nouvelles recettes ou les éditions limitées.',
                            'moqTitle': 'Minimum de Sachets',
                            'moqDesc': 'Pas de gaspillage de surstock',
                            'flexTitle': 'Flexibilité',
                            'flexDesc': 'Éditions de fêtes/récoltes',
                            'plateTitle': 'Sans Frais de Clichés',
                            'plateDesc': 'Changez de design librement'
                        },
                        'craftAesthetic': {
                            'title': 'Un Emballage qui Raconte Votre Histoire',
                            'intro': 'Les produits artisanaux méritent un emballage artisanal. Des textures et des finitions naturelles qui communiquent la qualité du fait main et connectent avec les consommateurs conscients.',
                            'aestheticsTitle': 'Esthétique Craft',
                            'aesthetics': [
                                'Aspect papier kraft naturel',
                                'Fenêtres transparentes pour la visibilité du produit',
                                'Finitions mates pour une sensation organique',
                                'Impression aux tons de la terre'
                            ],
                            'optionsTitle': 'Options Personnalisées',
                            'options': [
                                'Votre logo et histoire de marque',
                                'Listes d\'ingrédients et certifications',
                                'Numéros de lot et dates',
                                'Étiquettes d\'édition limitée/saisonnière'
                            ]
                        },
                        'markets': {
                            'title': 'Conçu pour les Marchés de Producteurs',
                            'intro': 'Les conditions des marchés de producteurs sont rudes—soleil direct, variations de température, manipulation par les clients. Nos sachets sont conçus pour une durabilité réelle tout en maintenant la fraîcheur du produit.',
                            'readyTitle': 'Caractéristiques Prêtes pour le Marché',
                            'readyCol1': [
                                'Impression résistante aux UV',
                                'Matériaux résistants aux perforations',
                                'Design stand-up pour l\'affichage'
                            ],
                            'readyCol2': [
                                'Refermable pour la dégustation',
                                'Protection barrière contre l\'humidité',
                                'Option de trou de suspension facile'
                            ]
                        },
                        'sustainable': {
                            'title': 'Durabilité qui Correspond à Vos Valeurs',
                            'intro': 'Vos clients se soucient de la planète—vous aussi. Choisissez un emballage qui s\'aligne sur les valeurs artisanales et raconte votre histoire de durabilité.',
                            'compostableTitle': 'Compostable Domestique/Industriel',
                            'compostableDesc': 'Papier kraft avec PLA. Se décompose naturellement. Parfait pour les marchés écologiques.',
                            'recyclableTitle': 'Options Recyclables',
                            'recyclableDesc': 'Recyclable en point de collecte. Communiquez les instructions de recyclage aux clients.'
                        },
                        'cta': {
                            'title': 'Emballez Votre Art avec Soin',
                            'description': 'Parlez-nous de vos produits artisanaux. Nous vous recommanderons l\'emballage qui correspond à votre marque et vous enverrons des échantillons pour évaluation.',
                            'button': 'Réserver une Consultation Gratuite',
                            'browse': 'Voir les Options'
                        },
                        'industryScenarios': {
                            'title': 'Applications Sectorielles',
                            'intro': 'Les différents types de produits artisanaux ont des exigences d\'emballage différentes. Choisir le bon emballage est la clé du succès de votre marque.',
                            'foodTitle': 'Producteurs d\'Aliments Artisanaux',
                            'foodDesc': 'Chocolat, confiture, pâtisseries et autres produits de spécialité artisanale.',
                            'foodShare': 'Part : 45%',
                            'marketTitle': 'Vendeurs de Marchés de Producteurs',
                            'marketDesc': 'Produits du marché de producteurs, aliments biologiques et produits de spécialité locale.',
                            'marketShare': 'Part : 35%',
                            'batchTitle': 'Marques en Petits Lots',
                            'batchDesc': 'Éditions limitées, produits saisonniers et tests de nouveaux produits.',
                            'batchShare': 'Part : 20%',
                            'successTitle': 'Histoire de Réussite Client',
                            'successDesc': '« Commander à partir de 100 unités me permet de tester différents produits et designs sans pression d\'inventaire. Maintenant, mes confitures artisanales sont très populaires sur les marchés de producteurs. » — Fondatrice d\'une marque de confiture artisanale'
                        },
                        'marketData': {
                            'title': 'Données de Marché et Intelligence',
                            'intro': 'Le marché des aliments artisanaux continue de croître à mesure que la demande des consommateurs pour des produits de spécialité faits main augmente.',
                            'stat1': '28 Mds $',
                            'stat1Label': 'Taille du Marché Artisanal',
                            'stat1Trend': 'Croissance annuelle 8.5%',
                            'stat2': '67%',
                            'stat2Label': 'Consommateurs Préfèrent l\'Artisanal',
                            'stat2Trend': 'Croissance moyenne',
                            'stat3': '45%',
                            'stat3Label': 'Prêts à Payer un Premium',
                            'stat3Trend': 'Stable',
                            'stat4': '100',
                            'stat4Label': 'Quantité Minimale de Commande',
                            'stat4Trend': 'Flexible',
                            'insightsTitle': 'Tendances du Marché',
                            'insightsDesc': 'Le marché des aliments artisanaux se développe rapidement, les consommateurs se concentrant de plus en plus sur des histoires de marque authentiques. L\'emballage écologique est très bien accueilli sur les marchés de producteurs et les canaux similaires.'
                        },
                        'materialComparison': {
                            'title': 'Comparaison des Matériaux',
                            'intro': 'Comparez les caractéristiques des différents matériaux d\'emballage pour vous aider à choisir la solution la plus adaptée à vos produits artisanaux.',
                            'headers': ['Type d\'Emballage', 'Commande Minimale', 'Calification Éco', 'Meilleur Scénario', 'Coût'],
                            'row1': ['Carton Compostable', '100 unités', 'Marchés de Producteurs, Magasins Bios', '$$'],
                            'row2': ['Transparent Recyclable', '100 unités', 'Magasins Spécialisés, Vente au Détail', '$'],
                            'row3': ['Carton avec Fenêtre', '100 unités', 'Exposition de Produits, Bloc d\'Étagère', '$$'],
                            'guideTitle': 'Guide de Sélection des Matériaux',
                            'guideDesc': 'Pour les producteurs d\'aliments artisanaux, nous recommandons de considérer en priorité l\'emballage en carton. Il transmet une image de marque naturelle et faite main. Ajouter une fenêtre permet la visibilité du produit et augmente l\'intention d\'achat.'
                        }
                    },
                    'faq': {
                        'q1': 'Quel est le minimum de commande pour les produits artisanaux ?',
                        'a1': 'Seulement 100 pièces. Cela vous permet d\'emballer des petits lots, de tester de nouveaux produits ou de créer des éditions limitées saisonnières sans vous engager sur un stock important.',
                        'q2': 'Puis-je commander différentes tailles dans une seule commande ?',
                        'a2': 'Oui. Beaucoup de producteurs artisanaux commandent des tailles mixtes—des sachets petits pour les échantillons, des plus grands pour les produits complets. Nous pouvons adapter des commandes de tailles mixtes avec le même design.',
                        'q3': 'Proposez-vous des emballages pour les marchés de producteurs ?',
                        'a3': 'Absolument. Nos sachets stand-up sont conçus pour l\'affichage, avec une impression résistante aux UV et des matériaux durables qui supportent les conditions des marchés en plein air.',
                        'q4': 'Puis-je personnaliser pour des produits saisonniers ?',
                        'a4': 'Oui ! L\'impression numérique signifie qu\'il n\'y a pas de frais de clichés—vous pouvez créer des éditions de fêtes, des spéciales de récoltes ou toute variation saisonnière sans payer de frais de configuration supplémentaires.'
                    }
                },
                'citrusOilPackaging': {
                    'title': 'Solutions d\'Emballage pour Huile d\'Agrumes: Sachet vs. Sachets à Bec | Achieve Pack',
                    'description': 'Comparez les options d\'emballage durable pour les huiles d\'agrumes: sachets haute barrière, capsules d\'aluminium, sachets de PE recyclables et sachets de Bio-PE de canne à sucre. Protégez les terpènes contre l\'oxydation et les fuites.',
                    'heroTitle': 'Solutions d\'Emballage pour Huiles d\'Agrumes et Terpènes',
                    'heroSubtitle': 'Sachets Haute Barrière | Sachets à Bec Recyclables | Capsules d\'Aluminium et Étuis de Luxe',
                    'introSummary': 'Les tests de demande au niveau des startups nécessitent un emballage qui équilibre la protection chimique active, la résistance aux fuites et les objectifs de réduction de carbone. Comparez nos options.',
                    'sections': {
                        'challenge': {
                            'title': 'Le Défi de l\'Huile d\'Agrumes: Dégradation des Terpènes et Sélection des Matériaux',
                            'intro': 'Les huiles dérivées d\'agrumes, riches en composés organiques actifs comme le d-limonène et d\'autres terpènes acides, sont très volatiles et chimiquement agressives. Contrairement aux cosmétiques à base d\'eau ordinaires, les huiles d\'agrumes agissent comme des solvants organiques doux qui peuvent gonfler, fissurer ou pénétrer les plastiques standards basse barrière au fil du temps.',
                            'risksTitle': 'Risques Majeurs pour les Matériaux',
                            'risks': [
                                'Perméation des Terpènes: Les arômes s\'échappent à travers le PE basse densité en quelques jours, provoquant l\'oxydation du produit.',
                                'Fissuration sous Contrainte: Les composants acides affaiblissent les joints thermosellés, risquant des fuites pendant le transport.',
                                'Perte d\'Arôme: Les terpènes dégradent les profils de saveur du plastique, rendant rance l\'huile d\'agrumes premium.'
                            ],
                            'reqsTitle': 'Exigences d\'Ingénierie',
                            'reqs': [
                                'Barrière Terpène en Aluminium: Un noyau en aluminium solide ou un revêtement EVOH haute densité.',
                                'Scellants Résistants aux Acides: Laminés de copolymère testés contre les extraits directs de fruits.',
                                'Étuis en Carton FSC: Boîtes de protection extérieures pour les capsules délicates ou les sachets remplaçant le verre.'
                            ]
                        },
                        'options': {
                            'title': '5 Options d\'Emballage Comparées: Du MVP Économique au Premium Durable',
                            'intro': 'Nous offrons une gamme complète de solutions d\'emballage certifiées pour les lancements directs aux consommateurs, les tests de demande en petits lots et la production de masse.',
                            'opt1': {
                                'label': 'Option 1',
                                'tag': 'Test de Nouveau Produit',
                                'title': 'Sachet en Forme de Bouteille',
                                'desc': 'Un sachet en aluminium en forme de bouteille accrocheur, conçu pour des échantillons à usage unique ou des tailles de voyage. Très rentable avec une protection absolue contre la lumière et l\'air.',
                                'points': [
                                    'Structure en aluminium mat haute barrière',
                                    'Idéal pour des doses d\'essai (5-30g)',
                                    'Encoche de déchirure pour ouvrir facilement'
                                ],
                                'action': 'Commander des Sachets (Dès 0,06 US$)'
                            },
                            'opt2': {
                                'label': 'Option 2',
                                'tag': 'Premium et Exclusif',
                                'title': 'Capsule d\'Aluminium sans Plastique',
                                'desc': 'Capsules compactes de 40ml en aluminium avec couvercles thermosellés. Zéro plastique et une expérience de déballage de luxe—parfait pour les cadeaux et les échantillons haut de gamme.',
                                'points': [
                                    'Pure couche barrière métallique',
                                    'Esthétique de détail en métal mat premium',
                                    'Coût initial minimal d\'équipement de conditionnement'
                                ],
                                'action': 'Demander un devis de capsule'
                            },
                            'opt3': {
                                'label': 'Option 3',
                                'tag': 'Style Recharge Écologique',
                                'title': 'Sachet à Bec Recyclable',
                                'desc': 'Un sachet stand-up en PE monomatériau haute clarté entièrement recyclable. Parfait pour les recharges D2C avec une grande visibilité de la marque et du produit.',
                                'points': [
                                    'Monomatériau avec revêtement EVOH et structure PE',
                                    'Couleur dorée naturelle de l\'huile clairement visible',
                                    'Empreinte carbone inférieure aux bouteilles en verre ou plastique'
                                ],
                                'action': 'Acheter des Sachets Recyclables'
                            },
                            'opt4': {
                                'label': 'Option 4',
                                'tag': 'PE de Canne à Sucre Durable',
                                'title': 'Sachet à Bec en Bio-PE',
                                'desc': 'Polyéthylène biologique dérivé de canne à sucre naturelle associé à des couches barrières avancées. Le standard d\'or pour la stabilité à long terme et l\'intégrité du scellage.',
                                'points': [
                                    'Structure de polymère bio-sourcé',
                                    'Protection chimique maximale contre le d-limonène',
                                    'Excellente résistance à la perforation pendant la logistique'
                                ],
                                'action': 'Acheter des Sachets en Bio-PE'
                            },
                            'opt5': {
                                'label': 'Option 5',
                                'tag': 'Cadeau de Luxe pour le Détail',
                                'title': 'Boîte d\'Exposition FSC Personnalisée',
                                'desc': 'Ajoutez des boîtes en carton FSC premium à votre ligne de capsules d\'aluminium. Combine des inserts découpés et des détails dorés pour créer un écosystème de luxe complet.',
                                'points': [
                                    'Carton gris recyclé certifié FSC',
                                    'Détails dorés premium et finitions mates',
                                    'Expédition à plat pour économiser de l\'espace'
                                ],
                                'action': 'Concevoir une Boîte FSC Personnalisée'
                            }
                        },
                        'showcase': {
                            'title': 'Présentation des Produits et Designs',
                            'intro': 'Cliquez pour agrandir les prototypes d\'emballage. Développés selon les directives de test de canne à sucre et les normes de carton FSC.',
                            'img1Title': 'Capsule d\'Échantillon de 40ml',
                            'img1Desc': 'Scellage métallique sans plastique, aspect luxe mat.',
                            'img2Title': 'Étui Cadeau FSC',
                            'img2Desc': 'Inserts découpés, détails dorés organiques, kit premium.',
                            'img3Title': 'Sachet à Bec Recyclable',
                            'img3Desc': 'Monomatériau PE, fenêtre transparente pour voir l\'huile.',
                            'img4Title': 'Sachet à Bec en Bio-PE',
                            'img4Desc': 'PE organique végétal, haute barrière multicouche.',
                            'solutionTag': 'Recommandation d\'Emballage Économique',
                            'solutionTitle': 'Solution Bas Coût Vedette: Sachet en Forme de Bouteille',
                            'solutionDesc': 'Vous voulez vous démarquer avec un petit budget? Le sachet en aluminium en forme de bouteille imite l\'aspect des bouteilles rigides mais pèse dix fois moins et ne nécessite pas de moules coûteux. Parfait pour envoyer des échantillons.',
                            'action1': 'Acheter des Sachets en Stock (MOQ 100)',
                            'action2': 'Commander des Autocollants de Scellage PLA Transparents'
                        },
                        'checklist': {
                            'title': 'Protocole de Tests de Compatibilité et Conformité',
                            'intro': 'Pour s\'assurer que le sachet ne se dégrade pas sous l\'effet de l\'huile d\'agrumes, nous recommandons de suivre ce protocole de tests d\'Achieve Pack:',
                            'phase1Title': '🧪 Phase 1: Vérification du Matériau et Formule',
                            'phase1': [
                                'Confirmer si la formule a une concentration élevée de terpènes (>1,5% d-limonène).',
                                'Tester la stabilité de l\'émulsion eau/huile à des températures extrêmes.',
                                'Évaluer les solvants actifs (alcool ou surfactants organiques agressifs) dans la formule.'
                            ],
                            'phase2Title': '⚖ Phase 2: Tests d\'Étanchéité et d\'Intégrité',
                            'phase2': [
                                'Réaliser un test de vieillissement accéléré à 40°C pendant 30 jours.',
                                'Effectuer des tests standards de chute et de vide pour éviter les fuites pendant le transport.',
                                'Vérifier la résistance du scellage pour prévenir les fuites.'
                            ]
                        }
                    },
                    'faq': {
                        'q1': 'Les terpènes d\'agrumes sont-ils compatibles avec le polyéthylène (PE) standard?',
                        'a1': 'Le polyéthylène basse densité (LDPE) classique est très poreux aux terpènes, ce qui entraîne une perte d\'arôme et le dégonflement du sachet. Cependant, notre PE monomatériau avec barrière EVOH bloque 99,8% des terpènes, étant recyclable et hautement protecteur.',
                        'q2': 'Comment éviter l\'oxydation et la perte d\'arôme dans les huiles d\'agrumes?',
                        'a2': 'L\'huile d\'agrumes s\'oxyde facilement avec la lumière et l\'air. Pour la protéger, nous recommandons des sachets en aluminium pur ou des sachets en Bio-PE multicouche de haute barrière.',
                        'q3': 'Quel est le principal avantage du sachet en forme de bouteille?',
                        'a3': 'Le sachet en forme de bouteille se distingue sur l\'étagère et est idéal pour les échantillons de 5g-35g. Il ne nécessite pas de moules coûteux et offre une excellente barrière grâce à son aluminium multicouche.',
                        'q4': 'Proposez-vous l\'impression personnalisée en petites quantités?',
                        'a4': 'Oui ! Alors que d\'autres usines exigent 20 000 unités, Achieve Pack propose des sachets, boîtes et sachets personnalisés dès 500 unités pour les lancements de startups.'
                    },
                    'tables': {
                        'title': 'Comparaison Technique: Matériaux d\'Emballage pour Huile d\'Agrumes',
                        'headers': ['Format', 'Barrière d\'Oxygène (OTR)', 'Barrière de Vapeur (WVTR)', 'Résistance aux Acides et Terpènes', 'MOQ', 'Coût Relatif'],
                        'rows': [
                            ['Sachet Bouteille', '0.01 ml/m²/jour', '0.02 g/m²/jour', '★★★★★ (Noyau d\'Aluminium)', '100 pcs', 'Bas ($)'],
                            ['Capsule d\'Aluminium', '0.02 ml/m²/jour', '0.03 g/m²/jour', '★★★★☆ (Couche de Protection)', '500 pcs', 'Moyen ($$)'],
                            ['Sachet PE Recyclable', '0.45 ml/m²/jour', '0.35 g/m²/jour', '★★★☆☆ (EVOH-PE)', '500 pcs', 'Moyen ($$)'],
                            ['Sachet de Bio-PE de Canne', '0.05 ml/m²/jour', '0.08 g/m²/jour', '★★★★★ (Protection Bio)', '500 pcs', 'Haut ($$$)'],
                            ['Boîte FSC Personnalisée', 'N/A (Emballage Extérieur)', 'N/A', 'N/A', '200 pcs', 'Premium ($$$$)']
                        ]
                    },
                    'relatedLinks': {
                        'link1': {
                            'title': 'Sachet Stand Up à Bec de Haute Barrière',
                            'description': 'Acheter des sachets en aluminium avec bec central pour cosmétiques et liquides.'
                        },
                        'link2': {
                            'title': 'Catalogue de Sachets Stand Up Écologiques',
                            'description': 'Voir les sachets en PE recyclables et matériaux compostables de haute barrière.'
                        },
                        'link3': {
                            'title': 'Sachet en Aluminium en Forme de Bouteille',
                            'description': 'Commander des sachets en forme de bouteille au fini mat pour échantillons.'
                        },
                        'link4': {
                            'title': 'Autocollants de Scellage PLA Premium',
                            'description': 'Étiquettes compostables transparentes et stables à la chaleur pour boîtes.'
                        }
                    }
                },
                'coffeeRoaster': {
                    'title': 'Emballage pour Torréfacteurs de Café | Sachets avec Valve | Durable | Achieve Pack',
                    'description': 'Emballage de café durable pour les torréfacteurs spécialisés. Compatible avec la valve de dégazage, haute barrière pour la fraîcheur, options compostables et recyclables. Présence premium en magasin.',
                    'heroTitle': 'Emballage pour Torréfacteurs de Café',
                    'heroSubtitle': 'Compatible avec la Valve de Dégazage | Haute Barrière | Durable',
                    'introSummary': 'Transition vers l\'emballage de café durable sans compromettre la fraîcheur. Compatible avec la valve de dégazage, durée de conservation de 12+ mois, présence en rayon premium—en matériaux compostables ou recyclables.',
                    'sections': {
                        'heroProblem': {
                            'title': 'Le Défi de l\'Emballage de Café',
                            'intro': 'En tant que torréfacteur de café de spécialité, vous avez perfectionné votre art. Maintenant, les clients et les réglementations vous poussent à réduire le gaspillage de plastique, sans compromettre la fraîcheur et la présence en rayon qui stimulent les ventes.',
                            'concernsTitle': 'Préoccupations Actuelles',
                            'concerns': [
                                'Les sachets traditionnels utilisent des plastiques multicouches non recyclables',
                                'Demande des clients pour des options durables',
                                'Crainte de compromettre la fraîcheur et la durée de conservation',
                                'L\'apparence premium stimule les ventes au détail'
                            ],
                            'needTitle': 'Ce Dont Vous Avez Besoin',
                            'need': [
                                'Compatibilité avec la valve de dégazage',
                                'Performances de fraîcheur prouvées',
                                'Attrait premium en rayon pour le commerce de détail',
                                'Informations de durabilité vérifiables'
                            ]
                        },
                        'degassing': {
                            'title': 'Valves de Dégazage et Fraîcheur',
                            'intro': 'Le café fraîchement torréfié libère du CO2 pendant des jours. Nos sachets incluent des valves de dégazage unidirectionnelles qui permettent au gaz de s\'échapper tout en empêchant l\'oxygène d\'entrer, maintenant une fraîcheur maximale.',
                            'valveTitle': 'Valve Unidirectionnelle',
                            'valveDesc': 'CO2 évacué, oxygène bloqué',
                            'barrierTitle': 'Haute Barrière',
                            'barrierDesc': '12+ mois de durée de conservation',
                            'sameDayTitle': 'Emballage le Jour Même',
                            'sameDayDesc': 'Pas besoin d\'attendre pour dégazage avant d\'emballer'
                        },
                        'sustainable': {
                            'title': 'Alternatives Durables',
                            'intro': 'Éloignez-vous du plastique conventionnel sans sacrifier la performance. Choisissez parmi des matériaux durables éprouvés qui fonctionnent avec votre équipement actuel.',
                            'compostableTitle': 'Compostable Certifié',
                            'compostableDesc': 'Papier kraft + barrière PLA. Se décompose en compostage industriel. Certifié ASTM D6400.',
                            'recyclableTitle': 'Recyclable en Magasin',
                            'recyclableDesc': 'Structure mono-PE acceptée dans les points de recyclage. Haute barrière, coût inférieur.',
                            'valveTitle': 'Compatibilité de la Valve',
                            'valveDesc': 'Tous nos matériaux durables sont compatibles avec les valves de dégazage standard. Aucun changement de machine.',
                            'learnMore': 'En savoir plus →'
                        },
                        'retail': {
                            'title': 'Présence Premium en Magasin',
                            'intro': 'L\'attrait en rayon stimule les achats impulsifs. Nos finitions premium créent un emballage remarquable en magasin.',
                            'stylesTitle': 'Styles de Sachet',
                            'styles': [
                                'Fond plat (box pouch)',
                                'Sachet stand-up',
                                'Soufflet latéral',
                                'Quadruple soudure'
                            ],
                            'finishesTitle': 'Finitions Premium',
                            'finishes': [
                                'Mat / toucher doux',
                                'Vernis UV sélectif',
                                'Marquage à chaud métallisé',
                                'Gaufrage'
                            ],
                            'closureTitle': 'Options de Fermeture',
                            'closure': [
                                'Fermeture zip refermable',
                                'Tin-tie + fermeture zip',
                                'Fermeture à curseur',
                                'Thermoscellage direct'
                            ]
                        },
                        'supply': {
                            'title': 'Chaîne d\'Approvisionnement Fiable',
                            'intro': 'Les cycles de production ne peuvent pas attendre les retards d\'emballage. Nous maintenons un approvisionnement constant avec des délais fiables.',
                            'time': '2-3 semaines',
                            'timeDesc': 'Livraison rapide en numérique ou flexo',
                            'blanket': 'Commandes ouvertes',
                            'blanketDesc': 'Livraisons programmées pour économiser l\'espace',
                            'priority': 'Priorité',
                            'priorityDesc': 'Traitement prioritaire pour les commandes répétées'
                        },
                        'cta': {
                            'title': 'Mettez à Jour Votre Emballage de Café',
                            'description': 'Demander des Échantillons d\'Emballage de Café',
                            'desc2': 'Voyez et sentez nos sachets de café durable avant de vous engager. Nous vous enverrons des échantillons avec la valve et la fermeture de votre choix.',
                            'button': 'Réserver une Consultation',
                            'browse': 'Voir les Sachets de Café'
                        },
                        'industryScenarios': {
                            'title': 'Applications Sectorielles',
                            'intro': 'Les torréfacteurs de café de tailles différentes ont des exigences différentes. Choisir la bonne solution est la clé du succès de votre marque.',
                            'roasterTitle': 'Torréfacteurs Spécialisés',
                            'roasterDesc': 'Café d\'origine unique, mélanges spéciaux et exigences élevées en matière de qualité et de fraîcheur.',
                            'roasterShare': 'Part : 40%',
                            'organicTitle': 'Marques de Café Bio',
                            'organicDesc': 'Certification bio, commerce équitable et Rainforest Alliance.',
                            'organicShare': 'Part : 35%',
                            'ecommerceTitle': 'Abonnements et E-commerce',
                            'ecommerceDesc': 'Ventes en ligne, modèles d\'abonnement et marques directes aux consommateurs.',
                            'ecommerceShare': 'Part : 25%',
                            'successTitle': 'Histoire de Réussite Client',
                            'successDesc': '« Après avoir opté pour l\'emballage compostable, notre base d\'abonnés a augmenté de 30 %. Beaucoup de clients ont souligné que l\'emballage écologique était la principale raison de leur choix. » — Torréfacteur de Café de Spécialité'
                        },
                        'marketData': {
                            'title': 'Données de Marché et Intelligence',
                            'intro': 'Le marché de l\'emballage de café continue de croître à mesure que les consommateurs réclament des options durables.',
                            'stat1': '65 Mds $',
                            'stat1Label': 'Marché Global du Café',
                            'stat1Trend': 'Croissance annuelle 5.5%',
                            'stat2': '72%',
                            'stat2Label': 'Préfèrent les Emballages Éco',
                            'stat2Trend': 'Croissance moyenne',
                            'stat3': '12+ mois',
                            'stat3Label': 'Durée de Conservation Haute Barrière',
                            'stat3Trend': 'Conserve l\'arôme',
                            'stat4': '500',
                            'stat4Label': 'Quantité Minimale de Commande',
                            'stat4Trend': 'Parfait pour les petites séries',
                            'insightsTitle': 'Perspectives du Marché',
                            'insightsDesc': 'Le marché du café de spécialité continue de se développer, en se concentrant sur la fraîcheur et la durabilité. Les sachets compostables et recyclables sont les préférés de ce marché.'
                        },
                        'materialComparison': {
                            'title': 'Comparaison des Matériaux',
                            'intro': 'Comparez les caractéristiques des différents matériaux pour choisir le plus adapté.',
                            'headers': ['Type d\'Emballage', 'Durée de Conservation', 'Valve de Dégazage', 'Certification Écologique', 'Coût'],
                            'row1': ['Papier Compostable', '6-9 mois', '✓ Compatible', 'ASTM D6400', '$$'],
                            'row2': ['Mono-PE Recyclable', '12+ mois', '✓ Compatible', 'How2Recycle', '$'],
                            'row3': ['Papel avec Aluminium', '12+ mois', '✓ Compatible', 'Recyclable', '$$'],
                            'guideTitle': 'Guide de Sélection des Matériaux',
                            'guideDesc': 'Pour les torréfacteurs de café, nous recommandons de choisir selon le positionnement du produit. Le café de spécialité premium est adapté au papier compostable, tandis que le café à grand volume préfère les options de PE recyclable pour un meilleur coût.'
                        }
                    },
                    'faq': {
                        'q1': 'Les sachets compostables fonctionnent-ils avec les valves de dégazage?',
                        'a1': 'Oui. Nos sachets de café compostables sont totalement compatibles avec les valves de dégazage unidirectionnelles, qui sont appliquées avec scellage thermique standard lors de la fabrication.',
                        'q2': 'Quelle est la durée de conservation des sachets de café compostables?',
                        'a2': 'Avec des matériaux compostables haute barrière et une valve, attendez-vous à 6-9 mois pour le café en grains. Pour 12+ mois, nous recommandons le mono-PE recyclable.',
                        'q3': 'Puis-je obtenir des finitions premium avec des matériaux durables?',
                        'a3': 'Absolument. Nos sachets compostables en papier kraft ont un aspect naturel et premium. Nous proposons également des finitions mates, du vernis UV sélectif et du marquage à chaud.',
                        'q4': 'Quel est le minimum de commande pour les sachets de café?',
                        'a4': 'Le MOQ est de 500 pièces pour les sachets de taille standard avec valve. Pour des tests ou des petites séries, nous pouvons faire des séries de 100-200 pièces avec notre presse numérique.'
                    }
                }
            }
        }
    }
}

for lang in ['en', 'zh-TW', 'es', 'fr']:
    file_path = f'src/locales/{lang}.json'
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        deep_merge(data, translations[lang])
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Successfully updated {file_path}")
    else:
        print(f"File not found: {file_path}")
