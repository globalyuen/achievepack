import json

data = {
    "en": {
        "achievePackHome": {
            "nav": {
                "materials": "Materials",
                "compostable": "Compostable",
                "homeCompostable": "Home Compostable",
                "recyclableMonoPE": "Recyclable Mono-PE",
                "bioPE": "Bio-PE",
                "packagingShapes": "Packaging Shapes",
                "pouchShapes": "Pouch Shapes",
                "standUpPouch": "Stand-Up Pouch",
                "boxBottomPouch": "Box Bottom Pouch",
                "sideGussetPouch": "Side Gusset Pouch",
                "threeSideSeal": "3-Side Seal",
                "industries": "Industries",
                "coffeeTea": "Coffee & Tea",
                "snacksFood": "Snacks & Food",
                "supplements": "Supplements",
                "petFood": "Pet Food",
                "babyFood": "Baby Food",
                "frozenFood": "Frozen Food",
                "citrusOil": "Citrus Oil Packaging",
                "shopAll": "Shop All",
                "standUpPouches": "Stand-Up Pouches",
                "flatBottomBags": "Flat Bottom Bags",
                "spoutPouches": "Spout Pouches",
                "sideGussetBags": "Side Gusset Bags",
                "learnCenter": "Learn Center",
                "viewAllLearn": "View All Learn Pages →",
                "blog": "📝 Blog",
                "allArticles": "All Articles",
                "packagingTips": "Packaging Tips",
                "sustainability": "Sustainability",
                "industryNews": "Industry News",
                "unprintedSamples": "📦 Unprinted Samples",
                "customPrintedSample": "✨ Custom Printed Sample",
                "customerCenter": "Customer Center",
                "language": "Language"
            },
            "hero": {
                "transformText": "Transform your business with certified",
                "solutionsFrom": "packaging solutions. From ",
                "coffeeBags": "coffee bags with degassing valves",
                "to": " to ",
                "customPouches": "custom printed food pouches",
                "reduceImpact": ", reduce your environmental impact while delivering exceptional business value.",
                "shopNow": "Shop Now"
            },
            "shop": {
                "title": "Shop Compostable & Recyclable Packaging",
                "compostable": "Compostable",
                "recyclable": "Recyclable",
                "en13432": "EN13432 certified compostable pouches",
                "comma": ", ",
                "coffeeBags": "coffee bags",
                "and": ", and ",
                "customBoxes": "custom boxes",
                "with": " with ",
                "lowMoq": "low MOQ from 100pcs",
                "browseAll": "Browse all eco-friendly packaging options"
            },
            "apps": {
                "tag": "Interactive Engineering Suite",
                "title": "Professional Packaging Apps",
                "desc": "Skip the guesswork. Design, size, and engineer your brand's sustainable packaging in seconds with our bespoke interactive web applications.",
                "sizingTool": "Sizing Tool",
                "sizingTitle": "Pouch Sizing Finder App",
                "sizingDesc": "Calculate exact stand-up pouch dimensions and gusset volume based on your target weight, product type, and substance density. Matches dimensions instantly across 100+ standard sizing grids.",
                "sizingL1": "Product-specific density presets (Coffee, Tea, Powders, Snacks)",
                "sizingL2": "Accurate volume calculations (Fluid Ounces, Grams, Milliliters)",
                "sizingL3": "Interactive size charts and standard MoQ requirements",
                "launchSizing": "Launch Sizing Finder",
                "materialTool": "Material Tool",
                "materialTitle": "Material Spec Finder App",
                "materialDesc": "Search, filter, and compare precise mechanical and barrier properties (Oxygen Transmission OTR & Water Vapor WVTR) across our full catalog of certified eco-friendly laminates.",
                "materialL1": "15+ sustainable duplex and triplex lamination options",
                "materialL2": "Live barrier level filtering (High, Medium, Light barrier specs)",
                "materialL3": "Full specification sheets with thickness and MOQs list",
                "launchMaterial": "Launch Spec Finder"
            },
            "clients": {
                "tag": "Trusted by Industry Leaders",
                "title": "Why 500+ Global Brands Choose Achieve Pack"
            },
            "seoBlock": {
                "title": "What is Compostable Packaging?",
                "desc1": "Compostable packaging is certified material that fully biodegrades into natural elements within 180 days under industrial composting conditions. Unlike regular plastics, compostable pouches break down into water, CO₂, and biomass, leaving no ",
                "microplastics": "microplastics",
                "desc2": ". Achieve Pack's compostable bags are certified to ",
                "desc3": " and ",
                "desc4": " standards, ensuring genuine environmental credentials.",
                "plasticFreeTitle": "Conventional Plastic-Free",
                "plasticFreeDesc": "Our compostable pouches contain zero petroleum-based plastics. Made from plant-based PLA and PBAT biopolymers, they return to nature—not persist as microplastics in oceans and soil.",
                "plasticFreeLink": "Learn about plastic-free vs compostable"
            },
            "table": {
                "feature": "Feature",
                "compostable": "Compostable",
                "recyclable": "Recyclable Mono-PE",
                "traditional": "Traditional Plastic",
                "decomposition": "Decomposition",
                "180days": "180 days in composting",
                "reqRecycling": "Requires recycling facility",
                "hundredsYears": "Hundreds of years",
                "materialSource": "Material Source",
                "plantBased": "Plant-based (corn, sugarcane)",
                "singlePolymer": "Single polymer (PE/PP)",
                "petroleum": "Petroleum-based",
                "certs": "Certifications",
                "enastm": "EN13432, ASTM D6400",
                "iso15270": "ISO 15270",
                "none": "None",
                "bestFor": "Best For",
                "coffeeSnacks": "Coffee, snacks, dry goods",
                "dryProducts": "All dry products",
                "generalUse": "General use",
                "moq": "MOQ at Achieve Pack",
                "100pcs": "100 pieces",
                "5000pcs": "5,000+ typical",
                "learnBiodegradable": "Learn more about compostable vs biodegradable packaging"
            },
            "products": {
                "shopAll": "Shop All",
                "exploreFullShop": "Explore Full Shop"
            },
            "learnMore": "Learn more",
            "team": {
                "trustSignal": "Our team has supported over 500+ brands in US, EU, NZ and Asia since 2011, across coffee, snacks, pet treats and supplements categories."
            },
            "freeServices": {
                "badge": "100% Free • No Obligation",
                "title": "Free Services for Your Brand",
                "desc": "Expert help at absolutely no cost—design consultation, 3D mockups, website design, and customer portal.",
                "designTitle": "Design Consultation",
                "designDesc": "Expert packaging design advice with custom dielines",
                "mockupTitle": "3D Mockup",
                "mockupDesc": "Photorealistic renders of your packaging design",
                "webTitle": "Website Design",
                "webDesc": "Modern landing page for your brand",
                "portalTitle": "Customer Center",
                "portalDesc": "Dashboard to track orders and manage quotes",
                "exploreAll": "Explore All Free Services"
            },
            "faq": {
                "scrollMore": "Scroll for more FAQs"
            },
            "contact": {
                "successTitle": "Message Sent Successfully!",
                "successDesc": "Thank you for contacting us. We'll respond within 24 hours.",
                "sendAnother": "Send another message",
                "sending": "Sending..."
            },
            "footer": {
                "customBoxes": "Custom Boxes",
                "labelsStickers": "Labels & Stickers",
                "labBags": "Lab Bags",
                "lowBarrier": "Low Barrier",
                "mediumBarrier": "Medium Barrier",
                "highBarrier": "High Barrier"
            }
        }
    },
    "es": {
        "achievePackHome": {
            "nav": {
                "materials": "Materiales",
                "compostable": "Compostable",
                "homeCompostable": "Compostable en Casa",
                "recyclableMonoPE": "Reciclable Mono-PE",
                "bioPE": "Bio-PE",
                "packagingShapes": "Formatos de Envases",
                "pouchShapes": "Formatos de Bolsas",
                "standUpPouch": "Bolsa Stand-Up",
                "boxBottomPouch": "Bolsa de Fondo Plano",
                "sideGussetPouch": "Bolsa con Fuelle Lateral",
                "threeSideSeal": "Sello de 3 Lados",
                "industries": "Industrias",
                "coffeeTea": "Café y Té",
                "snacksFood": "Snacks y Alimentos",
                "supplements": "Suplementos",
                "petFood": "Alimentos para Mascotas",
                "babyFood": "Alimentos para Bebés",
                "frozenFood": "Alimentos Congelados",
                "citrusOil": "Envases de Aceite Cítrico",
                "shopAll": "Ver Todo",
                "standUpPouches": "Bolsas Stand-Up",
                "flatBottomBags": "Bolsas de Fondo Plano",
                "spoutPouches": "Bolsas con Boquilla",
                "sideGussetBags": "Bolsas con Fuelle Lateral",
                "learnCenter": "Centro de Aprendizaje",
                "viewAllLearn": "Ver todas las páginas de aprendizaje →",
                "blog": "📝 Blog",
                "allArticles": "Todos los Artículos",
                "packagingTips": "Consejos de Envasado",
                "sustainability": "Sostenibilidad",
                "industryNews": "Noticias de la Industria",
                "unprintedSamples": "📦 Muestras sin Imprimir",
                "customPrintedSample": "✨ Muestra Impresa Personalizada",
                "customerCenter": "Centro de Clientes",
                "language": "Idioma"
            },
            "hero": {
                "transformText": "Transforme su negocio con soluciones de",
                "solutionsFrom": "envasado certificadas. Desde ",
                "coffeeBags": "bolsas de café con válvula desgasificadora",
                "to": " hasta ",
                "customPouches": "bolsas de alimentos impresas personalizadas",
                "reduceImpact": ", reduzca su impacto ambiental mientras ofrece un valor comercial excepcional.",
                "shopNow": "Comprar Ahora"
            },
            "shop": {
                "title": "Comprar Envases Compostables y Reciclables",
                "compostable": "Compostable",
                "recyclable": "Reciclable",
                "en13432": "Bolsas compostables certificadas EN13432",
                "comma": ", ",
                "coffeeBags": "bolsas de café",
                "and": ", y ",
                "customBoxes": "cajas personalizadas",
                "with": " con ",
                "lowMoq": "bajo MOQ desde 100 uds",
                "browseAll": "Explorar todas las opciones de envases ecológicos"
            },
            "apps": {
                "tag": "Suite de Ingeniería Interactiva",
                "title": "Aplicaciones Profesionales de Envasado",
                "desc": "Evite conjeturas. Diseñe, dimensione e ingenie los envases sostenibles de su marca en segundos con nuestras aplicaciones web interactivas a medida.",
                "sizingTool": "Herramienta de Dimensionado",
                "sizingTitle": "App Buscador de Tamaños de Bolsas",
                "sizingDesc": "Calcule dimensiones exactas de bolsas stand-up y volumen de fuelle basado en el peso objetivo, tipo de producto y densidad. Coincide instantáneamente con más de 100 cuadrículas estándar.",
                "sizingL1": "Presets de densidad específicos de producto (Café, Té, Polvos, Snacks)",
                "sizingL2": "Cálculos de volumen precisos (Onzas Líquidas, Gramos, Mililitros)",
                "sizingL3": "Tablas de tamaños interactivas y requisitos de MOQ estándar",
                "launchSizing": "Iniciar Buscador de Tamaño",
                "materialTool": "Herramienta de Materiales",
                "materialTitle": "App Buscador de Especificaciones de Material",
                "materialDesc": "Busque, filtre y compare propiedades mecánicas y barrera precisas (Transmisión de Oxígeno OTR y Vapor de Agua WVTR) en todo nuestro catálogo de laminados ecológicos certificados.",
                "materialL1": "Más de 15 opciones de laminación sostenible dúplex y triplex",
                "materialL2": "Filtro de nivel de barrera en vivo (Alta, Media, Ligera)",
                "materialL3": "Fichas técnicas completas con grosores y lista de MOQ",
                "launchMaterial": "Iniciar Buscador de Especificaciones"
            },
            "clients": {
                "tag": "Confiado por Líderes de la Industria",
                "title": "Por qué más de 500 Marcas Globales Eligen Achieve Pack"
            },
            "seoBlock": {
                "title": "¿Qué son los Envases Compostables?",
                "desc1": "El envase compostable es un material certificado que se biodegrada completamente en elementos naturales en 180 días bajo condiciones de compostaje industrial. A diferencia de los plásticos normales, las bolsas compostables se descomponen en agua, CO₂ y biomasa, sin dejar ",
                "microplastics": "microplásticos",
                "desc2": ". Las bolsas compostables de Achieve Pack están certificadas bajo los estándares ",
                "desc3": " y ",
                "desc4": ", garantizando credenciales ambientales genuinas.",
                "plasticFreeTitle": "Libre de Plástico Convencional",
                "plasticFreeDesc": "Nuestras bolsas compostables no contienen plásticos a base de petróleo. Hechas de biopolímeros PLA y PBAT a base de plantas, vuelven a la naturaleza—no persisten como microplásticos en océanos y suelo.",
                "plasticFreeLink": "Aprenda sobre libre de plástico vs compostable"
            },
            "table": {
                "feature": "Característica",
                "compostable": "Compostable",
                "recyclable": "Reciclable Mono-PE",
                "traditional": "Plástico Tradicional",
                "decomposition": "Descomposición",
                "180days": "180 días en compostaje",
                "reqRecycling": "Requiere instalación de reciclaje",
                "hundredsYears": "Cientos de años",
                "materialSource": "Fuente de Material",
                "plantBased": "A base de plantas (maíz, caña de azúcar)",
                "singlePolymer": "Polímero único (PE/PP)",
                "petroleum": "A base de petróleo",
                "certs": "Certificaciones",
                "enastm": "EN13432, ASTM D6400",
                "iso15270": "ISO 15270",
                "none": "Ninguna",
                "bestFor": "Ideal Para",
                "coffeeSnacks": "Café, snacks, productos secos",
                "dryProducts": "Todos los productos secos",
                "generalUse": "Uso general",
                "moq": "MOQ en Achieve Pack",
                "100pcs": "100 piezas",
                "5000pcs": "5,000+ típico",
                "learnBiodegradable": "Aprenda más sobre envases compostables vs biodegradables"
            },
            "products": {
                "shopAll": "Ver Todo",
                "exploreFullShop": "Explorar Toda la Tienda"
            },
            "learnMore": "Saber más",
            "team": {
                "trustSignal": "Nuestro equipo ha apoyado a más de 500 marcas en EE. UU., UE, NZ y Asia desde 2011, en las categorías de café, snacks, golosinas para mascotas y suplementos."
            },
            "freeServices": {
                "badge": "100% Gratis • Sin Compromiso",
                "title": "Servicios Gratuitos para su Marca",
                "desc": "Ayuda experta sin costo alguno—consultoría de diseño, maquetas 3D, diseño de páginas web y portal de clientes.",
                "designTitle": "Consultoría de Diseño",
                "designDesc": "Asesoramiento experto en diseño de envases con dielines personalizados",
                "mockupTitle": "Maqueta 3D",
                "mockupDesc": "Renders fotorrealistas de su diseño de envase",
                "webTitle": "Diseño Web",
                "webDesc": "Landing page moderna para su marca",
                "portalTitle": "Centro de Clientes",
                "portalDesc": "Panel para rastrear pedidos y gestionar presupuestos",
                "exploreAll": "Explorar Todos los Servicios Gratuitos"
            },
            "faq": {
                "scrollMore": "Desplácese para más preguntas frecuentes"
            },
            "contact": {
                "successTitle": "¡Mensaje Enviado con Éxito!",
                "successDesc": "Gracias por contactarnos. Responderemos dentro de 24 horas.",
                "sendAnother": "Enviar otro mensaje",
                "sending": "Enviando..."
            },
            "footer": {
                "customBoxes": "Cajas Personalizadas",
                "labelsStickers": "Etiquetas y Pegatinas",
                "labBags": "Bolsas de Laboratorio",
                "lowBarrier": "Barrera Baja",
                "mediumBarrier": "Barrera Media",
                "highBarrier": "Barrera Alta"
            }
        }
    },
    "fr": {
        "achievePackHome": {
            "nav": {
                "materials": "Matériaux",
                "compostable": "Compostable",
                "homeCompostable": "Compostable à Domicile",
                "recyclableMonoPE": "Recyclable Mono-PE",
                "bioPE": "Bio-PE",
                "packagingShapes": "Formats d'Emballage",
                "pouchShapes": "Formats de Sachets",
                "standUpPouch": "Sachet Tient Debout",
                "boxBottomPouch": "Sachet à Fond Plat",
                "sideGussetPouch": "Sachet à Soufflets Latéraux",
                "threeSideSeal": "Soudure 3 Côtés",
                "industries": "Industries",
                "coffeeTea": "Café et Thé",
                "snacksFood": "Snacks et Nourriture",
                "supplements": "Compléments Alimentaires",
                "petFood": "Aliments pour Animaux",
                "babyFood": "Aliments pour Bébés",
                "frozenFood": "Aliments Surgelés",
                "citrusOil": "Emballages pour Huiles d'Agrumes",
                "shopAll": "Tout Voir",
                "standUpPouches": "Sachets Tiennent Debout",
                "flatBottomBags": "Sachets à Fond Plat",
                "spoutPouches": "Sachets avec Bouchon",
                "sideGussetBags": "Sachets à Soufflets Latéraux",
                "learnCenter": "Centre d'Apprentissage",
                "viewAllLearn": "Voir toutes les pages d'apprentissage →",
                "blog": "📝 Blog",
                "allArticles": "Tous les Articles",
                "packagingTips": "Conseils d'Emballage",
                "sustainability": "Durabilité",
                "industryNews": "Actualités de l'Industrie",
                "unprintedSamples": "📦 Échantillons non Imprimés",
                "customPrintedSample": "✨ Échantillon Imprimé Personnalisé",
                "customerCenter": "Espace Client",
                "language": "Langue"
            },
            "hero": {
                "transformText": "Transformez votre entreprise avec des solutions",
                "solutionsFrom": "d'emballage certifiées. Des ",
                "coffeeBags": "sachets de café avec valves de dégazage",
                "to": " aux ",
                "customPouches": "sachets alimentaires imprimés personnalisés",
                "reduceImpact": ", réduisez votre impact environnemental tout en offrant une valeur commerciale exceptionnelle.",
                "shopNow": "Acheter Maintenant"
            },
            "shop": {
                "title": "Acheter des Emballages Compostables & Recyclables",
                "compostable": "Compostable",
                "recyclable": "Recyclable",
                "en13432": "Sachets compostables certifiés EN13432",
                "comma": ", ",
                "coffeeBags": "sachets de café",
                "and": ", et ",
                "customBoxes": "boîtes personnalisées",
                "with": " avec ",
                "lowMoq": "faible MOQ à partir de 100 pièces",
                "browseAll": "Parcourir toutes les options d'emballage écologiques"
            },
            "apps": {
                "tag": "Suite d'Ingénierie Interactive",
                "title": "Applications Professionnelles d'Emballage",
                "desc": "Fini les devinettes. Concevez, dimensionnez et concevez les emballages durables de votre marque en quelques secondes grâce à nos applications web interactives sur mesure.",
                "sizingTool": "Outil de Dimensionnement",
                "sizingTitle": "Application de Calcul de Taille",
                "sizingDesc": "Calculez les dimensions exactes des sachets tient-debout et le volume du soufflet en fonction de votre poids cible, du type de produit et de la densité. Correspond instantanément à plus de 100 grilles standards.",
                "sizingL1": "Préréglages de densité spécifiques aux produits (Café, Thé, Poudres, Snacks)",
                "sizingL2": "Calculs de volume précis (Onces Liquides, Grammes, Millilitres)",
                "sizingL3": "Tableaux de tailles interactifs et exigences MOQ standards",
                "launchSizing": "Lancer le Calcul de Taille"
            },
            "clients": {
                "tag": "Reconnu par les Leaders de l'Industrie",
                "title": "Pourquoi plus de 500 Marques Mondiales Choisissent Achieve Pack"
            },
            "seoBlock": {
                "title": "Qu'est-ce que l'Emballage Compostable?",
                "desc1": "L'emballage compostable est un matériau certifié qui se biodégrade entièrement en éléments naturels en 180 jours dans des conditions de compostage industriel. Contrairement aux plastiques ordinaires, les sachets compostables se décomposent en eau, CO₂ et biomasse, sans laisser de ",
                "microplastics": "microplastiques",
                "desc2": ". Les sachets compostables d'Achieve Pack sont certifiés selon les normes ",
                "desc3": " et ",
                "desc4": ", garantissant de véritables références environnementales.",
                "plasticFreeTitle": "Sans Plastique Conventionnel",
                "plasticFreeDesc": "Nos sachets compostables ne contiennent aucun plastique à base de pétrole. Fabriqués à partir de biopolymères végétaux PLA et PBAT, ils retournent à la nature sans persister sous forme de microplastiques dans les océans et les sols.",
                "plasticFreeLink": "En savoir plus sur sans plastique vs compostable"
            },
            "table": {
                "feature": "Caractéristique",
                "compostable": "Compostable",
                "recyclable": "Recyclable Mono-PE",
                "traditional": "Plastique Traditionnel",
                "decomposition": "Décomposition",
                "180days": "180 jours en compostage",
                "reqRecycling": "Nécessite une installation de recyclage",
                "hundredsYears": "Des centaines d'années",
                "materialSource": "Source du Matériau",
                "plantBased": "D'origine végétale (maïs, canne à sucre)",
                "singlePolymer": "Polymère unique (PE/PP)",
                "petroleum": "À base de pétrole",
                "certs": "Certifications",
                "enastm": "EN13432, ASTM D6400",
                "iso15270": "ISO 15270",
                "none": "Aucune",
                "bestFor": "Idéal Pour",
                "coffeeSnacks": "Café, snacks, produits secs",
                "dryProducts": "Tous les produits secs",
                "generalUse": "Usage général",
                "moq": "MOQ chez Achieve Pack",
                "100pcs": "100 pièces",
                "5000pcs": "Plus de 5000 typiquement",
                "learnBiodegradable": "En savoir plus sur les emballages compostables vs biodégradables"
            },
            "products": {
                "shopAll": "Tout Voir",
                "exploreFullShop": "Explorer Toute la Boutique"
            },
            "learnMore": "En savoir plus",
            "team": {
                "trustSignal": "Notre équipe accompagne plus de 500 marques aux États-Unis, dans l'UE, en Nouvelle-Zélande et en Asie depuis 2011, dans les secteurs du café, des snacks, des friandises pour animaux et des compléments."
            },
            "freeServices": {
                "badge": "100% Gratuit • Sans Engagement",
                "title": "Services Gratuits pour Votre Marque",
                "desc": "Aide d'experts sans aucun frais — consultation de design, maquettes 3D, conception de site web et portail client.",
                "designTitle": "Consultation de Design",
                "designDesc": "Conseils d'experts en design d'emballage avec tracés sur mesure",
                "mockupTitle": "Maquette 3D",
                "mockupDesc": "Rendus photoréalistes du design de votre emballage",
                "webTitle": "Conception Web",
                "webDesc": "Page de renvoi moderne pour votre marque",
                "portalTitle": "Espace Client",
                "portalDesc": "Tableau de bord pour suivre les commandes et gérer les devis",
                "exploreAll": "Explorer Tous les Services Gratuits"
            },
            "faq": {
                "scrollMore": "Faites défiler pour plus de FAQ"
            },
            "contact": {
                "successTitle": "Message Envoyé avec Succès!",
                "successDesc": "Merci de nous avoir contactés. Nous vous répondrons sous 24 heures.",
                "sendAnother": "Envoyer un autre message",
                "sending": "Envoi..."
            },
            "footer": {
                "customBoxes": "Boîtes Personnalisées",
                "labelsStickers": "Étiquettes et Autocollants",
                "labBags": "Sacs de Laboratoire",
                "lowBarrier": "Basse Barrière",
                "mediumBarrier": "Moyenne Barrière",
                "highBarrier": "Haute Barrière"
            }
        }
    },
    "zh-TW": {
        "achievePackHome": {
            "nav": {
                "materials": "包裝材質",
                "compostable": "全降解材質",
                "homeCompostable": "家庭堆肥降解",
                "recyclableMonoPE": "100%可回收單一PE",
                "bioPE": "生物基PE",
                "packagingShapes": "包裝袋型",
                "pouchShapes": "袋型選擇",
                "standUpPouch": "自立袋",
                "boxBottomPouch": "八邊封平底袋",
                "sideGussetPouch": "側折袋",
                "threeSideSeal": "三邊封袋",
                "industries": "應用行業",
                "coffeeTea": "咖啡與茶葉",
                "snacksFood": "零食與食品",
                "supplements": "保健食品",
                "petFood": "寵物食品",
                "babyFood": "嬰幼兒食品",
                "frozenFood": "冷凍食品",
                "citrusOil": "柑橘精油包裝",
                "shopAll": "瀏覽全部商品",
                "standUpPouches": "自立袋系列",
                "flatBottomBags": "平底袋系列",
                "spoutPouches": "吸嘴袋系列",
                "sideGussetBags": "側折袋系列",
                "learnCenter": "知識中心",
                "viewAllLearn": "查看所有學習頁面 →",
                "blog": "📝 部落格",
                "allArticles": "所有文章",
                "packagingTips": "包裝技巧",
                "sustainability": "永續發展",
                "industryNews": "業界新聞",
                "unprintedSamples": "📦 空白樣品",
                "customPrintedSample": "✨ 客製化印刷樣品",
                "customerCenter": "客戶中心",
                "language": "語言"
            },
            "hero": {
                "transformText": "使用經過認證的環保包裝解決方案，為您的品牌轉型。",
                "solutionsFrom": "從 ",
                "coffeeBags": "帶排氣閥的咖啡袋",
                "to": " 到 ",
                "customPouches": "客製化印刷軟包裝",
                "reduceImpact": "，在減少環境影響的同時，創造卓越的商業價值。",
                "shopNow": "立即選購"
            },
            "shop": {
                "title": "選購全降解與可回收包裝",
                "compostable": "全降解",
                "recyclable": "可回收",
                "en13432": "符合EN13432認證的全降解自立袋",
                "comma": "、",
                "coffeeBags": "咖啡袋",
                "and": "，以及",
                "customBoxes": "客製化紙盒",
                "with": "，",
                "lowMoq": "最低訂購量僅需100個",
                "browseAll": "瀏覽所有環保包裝選項"
            },
            "apps": {
                "tag": "互動式工程套件",
                "title": "專業包裝計算工具",
                "desc": "告別猜測。使用我們專屬的互動式網頁應用程式，只需幾秒鐘即可設計、計算並規劃您品牌的永續包裝。",
                "sizingTool": "尺寸計算工具",
                "sizingTitle": "包裝袋尺寸計算器",
                "sizingDesc": "根據目標重量、產品類型和密度，精確計算自立袋的尺寸和底部折邊體積。即時比對100多種標準尺寸規格。",
                "sizingL1": "內建特定產品的密度預設值（咖啡、茶葉、粉末、零食）",
                "sizingL2": "準確的體積計算（液體盎司、公克、毫升）",
                "sizingL3": "互動式尺寸表與標準最低起訂量（MOQ）",
                "launchSizing": "啟動尺寸計算器",
                "materialTool": "材質挑選工具",
                "materialTitle": "包裝材質規格尋找器",
                "materialDesc": "在我們完整的認證環保積層材質目錄中，搜尋、篩選和比較精確的機械和阻隔性能（氧氣透過率OTR與水蒸氣透過率WVTR）。",
                "materialL1": "15種以上的永續雙層和三層複合選項",
                "materialL2": "即時阻隔等級篩選（高、中、低阻隔規格）",
                "materialL3": "包含厚度與起訂量的完整規格表",
                "launchMaterial": "啟動規格尋找器"
            },
            "clients": {
                "tag": "深受業界領導品牌信賴",
                "title": "為何超過500個全球品牌選擇Achieve Pack"
            },
            "seoBlock": {
                "title": "什麼是全降解包裝（Compostable Packaging）？",
                "desc1": "全降解包裝是一種經過認證的材質，在工業堆肥條件下，180天內即可完全生物降解為自然元素。與一般塑膠不同，全降解袋會分解成水、二氧化碳和生物質，完全不留",
                "microplastics": "微塑膠",
                "desc2": "。Achieve Pack的全降解袋已獲得",
                "desc3": "與",
                "desc4": "標準認證，確保具有真正的環保資歷。",
                "plasticFreeTitle": "無傳統塑膠成分",
                "plasticFreeDesc": "我們的全降解袋不含任何石油基塑膠。採用植物基PLA和PBAT生物聚合物製成，能回歸自然，不會作為微塑膠殘留在海洋或土壤中。",
                "plasticFreeLink": "了解無塑膠與全降解的差異"
            },
            "table": {
                "feature": "特性",
                "compostable": "全降解 (Compostable)",
                "recyclable": "可回收單一PE (Recyclable)",
                "traditional": "傳統塑膠袋",
                "decomposition": "分解時間",
                "180days": "堆肥環境下180天",
                "reqRecycling": "需回收處理設施",
                "hundredsYears": "數百年",
                "materialSource": "材質來源",
                "plantBased": "植物基 (玉米、甘蔗)",
                "singlePolymer": "單一聚合物 (PE/PP)",
                "petroleum": "石油基",
                "certs": "國際認證",
                "enastm": "EN13432, ASTM D6400",
                "iso15270": "ISO 15270",
                "none": "無",
                "bestFor": "適用產品",
                "coffeeSnacks": "咖啡、零食、乾燥食品",
                "dryProducts": "所有乾燥產品",
                "generalUse": "一般用途",
                "moq": "Achieve Pack 起訂量",
                "100pcs": "100 個",
                "5000pcs": "通常需要 5,000+",
                "learnBiodegradable": "了解更多關於全降解與生物降解包裝的差異"
            },
            "products": {
                "shopAll": "瀏覽全部",
                "exploreFullShop": "探索完整商店"
            },
            "learnMore": "了解更多",
            "team": {
                "trustSignal": "自2011年以來，我們的團隊已支援美國、歐盟、紐西蘭和亞洲超過500多個品牌，涵蓋咖啡、零食、寵物零食及保健食品領域。"
            },
            "freeServices": {
                "badge": "100%免費 • 無義務",
                "title": "為您的品牌提供的免費服務",
                "desc": "完全免費的專家協助——包裝設計諮詢、3D模型、網頁設計及客戶管理中心。",
                "designTitle": "包裝設計諮詢",
                "designDesc": "專業的包裝設計建議及客製化刀模圖",
                "mockupTitle": "3D包裝模型",
                "mockupDesc": "您包裝設計的超逼真渲染圖",
                "webTitle": "網頁設計服務",
                "webDesc": "為您的品牌打造現代化著陸頁",
                "portalTitle": "客戶管理中心",
                "portalDesc": "專屬儀表板，輕鬆追蹤訂單與管理報價",
                "exploreAll": "探索所有免費服務"
            },
            "faq": {
                "scrollMore": "向下滑動查看更多常見問題"
            },
            "contact": {
                "successTitle": "訊息發送成功！",
                "successDesc": "感謝您的聯繫，我們將在24小時內回覆您。",
                "sendAnother": "發送其他訊息",
                "sending": "傳送中..."
            },
            "footer": {
                "customBoxes": "客製化紙盒",
                "labelsStickers": "標籤與貼紙",
                "labBags": "實驗室採樣袋",
                "lowBarrier": "低阻隔選項",
                "mediumBarrier": "中阻隔選項",
                "highBarrier": "高阻隔選項"
            }
        }
    }
}

files = {
    "en": "src/locales/en.json",
    "es": "src/locales/es.json",
    "fr": "src/locales/fr.json",
    "zh-TW": "src/locales/zh-TW.json"
}

for lang, filepath in files.items():
    with open(filepath, 'r') as f:
        content = json.load(f)
    
    # Merge
    if lang in data:
        content["achievePackHome"] = data[lang]["achievePackHome"]
    
    with open(filepath, 'w') as f:
        json.dump(content, f, indent=2, ensure_ascii=False)

print("Locales updated.")
