const fs = require('fs');

const pageKey = 'ryanWong';
const basePath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales';

const enTexts = {
  seoTitle: "Ryan Wong - Packaging Development Specialist | Achieve Pack",
  seoDescription: "Ryan Wong, Packaging Development Specialist at Achieve Pack. 14+ years helping DTC coffee, chocolate & tea brands with compostable packaging. Hong Kong Polytechnic University Honor Degree. Expert across 8 countries.",
  seoKeywords: "Ryan Wong, packaging development specialist, compostable packaging expert, DTC packaging, coffee packaging, Hong Kong Polytechnic University, supply chain architect",
  backToHome: "Back to Home",
  hero: {
    title: "Ryan Wong",
    subtitle: "Packaging Development Specialist",
    description: "14+ years experience | 8 countries | Fortune 500 & DTC startups",
    badge1: "🎓 PolyU Honor Degree",
    badge2: "🏆 PolyU Featured Alumni",
    badge3: "🌱 Eco Packaging Pioneer",
    linkedin: "LinkedIn Profile",
    contact: "Contact"
  },
  about: {
    title: "About Ryan",
    photoAlt: "Ryan Wong at Packaging Exhibition",
    photoCaption: "Ryan at international packaging exhibition",
    p1: {
      part1: "With ",
      part2: "14+ years of dedicated experience",
      part3: " in the packaging industry, Ryan Wong has built expertise cooperating with multinational and Fortune 500 companies to achieve mutually beneficial and long-lasting business relationships."
    },
    p2: {
      part1: "Ryan's packaging experience and business relationships span ",
      part2: "8 countries",
      part3: ": Australia, Canada, China, Germany, South Africa, Philippines, UK and USA. As a ",
      part4: "Hong Kong Polytechnic University Honor Degree",
      part5: " graduate in Global Supply Chain and Business Administration, he combines academic excellence with practical expertise."
    },
    p3: {
      part1: "His objective is to be a ",
      part2: "supply chain architect",
      part3: " — with packaging knowledge, IT skills and passion to create irreplaceable values and synergy for all parties throughout the whole supply chain from upstream to downstream."
    },
    p4: {
      part1: "As the ",
      part2: "Founder of Achieve Pack & Pouch.eco",
      part3: ", Ryan specializes in ",
      part4: "100% compostable digital print solutions",
      part5: " with industry-leading low MOQ (100-500 pieces), making sustainable packaging accessible to DTC startups and established brands alike. His expertise in ",
      part6: "HP Indigo 20000 digital printing",
      part7: " enables 4-day turnaround for urgent orders."
    }
  },
  career: {
    title: "Career Journey",
    exp1: {
      period: "2018 - Present",
      title: "Founder & Packaging Development Specialist",
      company: "Achieve Pack / Pouch.eco",
      desc: "Founded eco-friendly packaging company focused on compostable and sustainable solutions. Pioneer in digital printing with low MOQ for DTC brands."
    },
    exp2: {
      period: "2010 - 2018",
      title: "Senior Packaging Consultant",
      company: "Fortune 500 & Multinational Companies",
      desc: "Developed supply chain strategies and packaging solutions for international brands across 8 countries."
    },
    exp3: {
      period: "1999 - 2003",
      title: "Bachelor's Degree (Honors)",
      company: "The Hong Kong Polytechnic University",
      desc: "Global Supply Chain Management & Business Administration"
    }
  },
  expertise: {
    title: "Core Expertise",
    item1: "Compostable coffee pouches for DTC brands",
    item2: "Chocolate & confectionery packaging",
    item3: "Tea packaging (loose leaf & sachets)",
    item4: "E-commerce & subscription box solutions",
    item5: "EN 13432 & ASTM D6400 compliance",
    item6: "BPI & TÜV certification guidance",
    item7: "Food-contact safe materials",
    item8: "Low MOQ sustainable solutions",
    item9: "Transition planning from plastic",
    item10: "Barrier technology for food products",
    item11: "Degassing valves for coffee",
    item12: "Stand-up pouch design optimization"
  },
  caseStudies: {
    title: "Client Success Stories",
    cs1: {
      title: "Bean & Bole Coffee Roastery",
      desc: "Helped Portland-based specialty roaster switch to EN 13432 certified compostable pouches with degassing valves. Achieved 35% increase in customer satisfaction."
    },
    cs2: {
      title: "Milano Botanica Tea",
      desc: "Developed compostable window packaging for luxury tea brand. EU PPWR compliant solution increased sales by 28%."
    },
    cs3: {
      title: "Artisan Cocoa Emirates",
      desc: "Created heat-resistant recyclable mono-PP pouches for UAE chocolate brand. Gift sales up 55%."
    }
  },
  sidebar: {
    recognition: {
      title: "Recognition",
      item: {
        title: "PolyU Featured Alumni",
        subtitle: "Young Achievers Program",
        desc: "Recognized for contributions to sustainable packaging innovation"
      }
    },
    quickFacts: {
      title: "Quick Facts",
      fact1: "Years Experience",
      fact2: "Countries Served",
      fact3: "Minimum Order Qty",
      fact4: "Days Rush Production"
    },
    industryFocus: {
      title: "Industry Focus",
      item1: "☕ Coffee & Espresso",
      item2: "🍫 Chocolate & Confectionery",
      item3: "🍵 Tea & Herbal Blends",
      item4: "📦 Subscription Boxes",
      item5: "🌿 Organic & Natural Products"
    },
    education: {
      title: "Education & Skills",
      uni: "The Hong Kong Polytechnic University",
      degree: "Honor Degree (1999-2003)",
      major: "Global Supply Chain, Business Administration",
      techSkillsTitle: "Technical Skills:",
      techSkill1: "Adobe Photoshop",
      techSkill2: "Adobe Illustrator",
      techSkill3: "HP Indigo 20000",
      techSkill4: "Supply Chain Mgmt",
      techSkill5: "Digital Printing",
      certTitle: "Certifications Expertise:",
      cert1: "EN 13432",
      cert2: "ASTM D6400",
      cert3: "BPI Certified",
      cert4: "TÜV OK Compost"
    },
    globalNetwork: {
      title: "Global Network",
      country1: "Australia",
      country2: "Canada",
      country3: "China",
      country4: "Germany",
      country5: "South Africa",
      country6: "Philippines",
      country7: "UK",
      country8: "USA"
    },
    cta: {
      title: "Ready to Go Sustainable?",
      desc: "Book a free 30-minute consultation to discuss your packaging needs.",
      button: "Schedule Meeting"
    }
  }
};

const esTexts = {
  seoTitle: "Ryan Wong - Especialista en Desarrollo de Empaques | Achieve Pack",
  seoDescription: "Ryan Wong, Especialista en Desarrollo de Empaques en Achieve Pack. Más de 14 años ayudando a marcas DTC de café, chocolate y té con empaques compostables. Título de Honor de la Universidad Politécnica de Hong Kong. Experto en 8 países.",
  seoKeywords: "Ryan Wong, especialista en desarrollo de empaques, experto en empaques compostables, empaques DTC, empaques de café, Universidad Politécnica de Hong Kong, arquitecto de la cadena de suministro",
  backToHome: "Volver al Inicio",
  hero: {
    title: "Ryan Wong",
    subtitle: "Especialista en Desarrollo de Empaques",
    description: "Más de 14 años de experiencia | 8 países | Empresas Fortune 500 y startups DTC",
    badge1: "🎓 Título de Honor PolyU",
    badge2: "🏆 Ex Alumno Destacado de PolyU",
    badge3: "🌱 Pionero en Empaques Ecológicos",
    linkedin: "Perfil de LinkedIn",
    contact: "Contacto"
  },
  about: {
    title: "Sobre Ryan",
    photoAlt: "Ryan Wong en Exposición de Empaques",
    photoCaption: "Ryan en exposición internacional de empaques",
    p1: {
      part1: "Con ",
      part2: "más de 14 años de experiencia dedicada",
      part3: " en la industria de empaques, Ryan Wong ha desarrollado experiencia cooperando con empresas multinacionales y de la lista Fortune 500 para lograr relaciones comerciales duraderas y mutuamente beneficiosas."
    },
    p2: {
      part1: "La experiencia en empaques y las relaciones comerciales de Ryan abarcan ",
      part2: "8 países",
      part3: ": Australia, Canadá, China, Alemania, Sudáfrica, Filipinas, Reino Unido y EE. UU. Como graduado con ",
      part4: "Título de Honor de la Universidad Politécnica de Hong Kong",
      part5: " en Gestión Global de la Cadena de Suministro y Administración de Empresas, combina la excelencia académica con la experiencia práctica."
    },
    p3: {
      part1: "Su objetivo es ser un ",
      part2: "arquitecto de la cadena de suministro",
      part3: " — con conocimientos de empaque, habilidades de TI y pasión para crear valores irreemplazables y sinergia para todas las partes en toda la cadena de suministro desde el inicio hasta el final."
    },
    p4: {
      part1: "Como ",
      part2: "Fundador de Achieve Pack y Pouch.eco",
      part3: ", Ryan se especializa en ",
      part4: "soluciones de impresión digital 100% compostables",
      part5: " con MOQ bajo líder en la industria (100-500 piezas), haciendo que los empaques sostenibles sean accesibles tanto para startups DTC como para marcas establecidas. Su experiencia en ",
      part6: "impresión digital HP Indigo 20000",
      part7: " permite un tiempo de entrega de 4 días para pedidos urgentes."
    }
  },
  career: {
    title: "Trayectoria Profesional",
    exp1: {
      period: "2018 - Presente",
      title: "Fundador y Especialista en Desarrollo de Empaques",
      company: "Achieve Pack / Pouch.eco",
      desc: "Fundó una empresa de empaques ecológicos centrada en soluciones compostables y sostenibles. Pionero en impresión digital con bajo MOQ para marcas DTC."
    },
    exp2: {
      period: "2010 - 2018",
      title: "Consultor Senior de Empaques",
      company: "Empresas Fortune 500 y Multinacionales",
      desc: "Desarrolló estrategias de cadena de suministro y soluciones de empaque para marcas internacionales en 8 países."
    },
    exp3: {
      period: "1999 - 2003",
      title: "Licenciatura (Con Honores)",
      company: "Universidad Politécnica de Hong Kong",
      desc: "Gestión Global de la Cadena de Suministro y Administración de Empresas"
    }
  },
  expertise: {
    title: "Experiencia Principal",
    item1: "Bolsas de café compostables para marcas DTC",
    item2: "Empaques para chocolate y confitería",
    item3: "Empaques para té (hojas sueltas y bolsitas)",
    item4: "Soluciones para comercio electrónico y cajas de suscripción",
    item5: "Cumplimiento con EN 13432 y ASTM D6400",
    item6: "Orientación para certificación BPI y TÜV",
    item7: "Materiales seguros para contacto con alimentos",
    item8: "Soluciones sostenibles de bajo MOQ",
    item9: "Planificación de transición desde el plástico",
    item10: "Tecnología de barrera para productos alimenticios",
    item11: "Válvulas desgasificadoras para café",
    item12: "Optimización del diseño de bolsas stand-up"
  },
  caseStudies: {
    title: "Historias de Éxito de Clientes",
    cs1: {
      title: "Tostaduría de Café Bean & Bole",
      desc: "Ayudó al tostador especializado con sede en Portland a cambiar a bolsas compostables certificadas EN 13432 con válvulas desgasificadoras. Logró un aumento del 35% en la satisfacción del cliente."
    },
    cs2: {
      title: "Té Milano Botanica",
      desc: "Desarrolló empaques con ventana compostable para marca de té de lujo. Solución compatible con EU PPWR que aumentó las ventas en un 28%."
    },
    cs3: {
      title: "Artisan Cocoa Emirates",
      desc: "Creó bolsas mono-PP reciclables resistentes al calor para marca de chocolate en los EAU. Ventas de regalos aumentaron en un 55%."
    }
  },
  sidebar: {
    recognition: {
      title: "Reconocimiento",
      item: {
        title: "Ex Alumno Destacado de PolyU",
        subtitle: "Programa de Jóvenes Triunfadores",
        desc: "Reconocido por contribuciones a la innovación en empaques sostenibles"
      }
    },
    quickFacts: {
      title: "Datos Rápidos",
      fact1: "Años de Experiencia",
      fact2: "Países Servidos",
      fact3: "Cantidad Mínima de Pedido",
      fact4: "Días de Producción Urgente"
    },
    industryFocus: {
      title: "Enfoque de la Industria",
      item1: "☕ Café y Espresso",
      item2: "🍫 Chocolate y Confitería",
      item3: "🍵 Té y Mezclas de Hierbas",
      item4: "📦 Cajas de Suscripción",
      item5: "🌿 Productos Orgánicos y Naturales"
    },
    education: {
      title: "Educación y Habilidades",
      uni: "Universidad Politécnica de Hong Kong",
      degree: "Título de Honor (1999-2003)",
      major: "Cadena de Suministro Global, Administración de Empresas",
      techSkillsTitle: "Habilidades Técnicas:",
      techSkill1: "Adobe Photoshop",
      techSkill2: "Adobe Illustrator",
      techSkill3: "HP Indigo 20000",
      techSkill4: "Gestión de Cadena de Suministro",
      techSkill5: "Impresión Digital",
      certTitle: "Experiencia en Certificaciones:",
      cert1: "EN 13432",
      cert2: "ASTM D6400",
      cert3: "Certificación BPI",
      cert4: "TÜV OK Compost"
    },
    globalNetwork: {
      title: "Red Global",
      country1: "Australia",
      country2: "Canadá",
      country3: "China",
      country4: "Alemania",
      country5: "Sudáfrica",
      country6: "Filipinas",
      country7: "Reino Unido",
      country8: "EE. UU."
    },
    cta: {
      title: "¿Listo para ser sostenible?",
      desc: "Reserve una consulta gratuita de 30 minutos para discutir sus necesidades de empaque.",
      button: "Programar Reunión"
    }
  }
};

const frTexts = {
  seoTitle: "Ryan Wong - Spécialiste en Développement d'Emballages | Achieve Pack",
  seoDescription: "Ryan Wong, Spécialiste en Développement d'Emballages chez Achieve Pack. Plus de 14 ans à aider les marques de café, de chocolat et de thé DTC avec des emballages compostables. Diplôme d'Honneur de l'Université Polytechnique de Hong Kong. Expert dans 8 pays.",
  seoKeywords: "Ryan Wong, spécialiste en développement d'emballages, expert en emballage compostable, emballage DTC, emballage de café, Université Polytechnique de Hong Kong, architecte de la chaîne d'approvisionnement",
  backToHome: "Retour à l'Accueil",
  hero: {
    title: "Ryan Wong",
    subtitle: "Spécialiste en Développement d'Emballages",
    description: "Plus de 14 ans d'expérience | 8 pays | Entreprises Fortune 500 & startups DTC",
    badge1: "🎓 Diplôme d'Honneur PolyU",
    badge2: "🏆 Ancien Élève Distingué PolyU",
    badge3: "🌱 Pionnier de l'Emballage Éco",
    linkedin: "Profil LinkedIn",
    contact: "Contact"
  },
  about: {
    title: "À propos de Ryan",
    photoAlt: "Ryan Wong à une exposition d'emballage",
    photoCaption: "Ryan à l'exposition internationale de l'emballage",
    p1: {
      part1: "Avec ",
      part2: "plus de 14 ans d'expérience dédiée",
      part3: " dans l'industrie de l'emballage, Ryan Wong a développé son expertise en coopérant avec des entreprises multinationales et du classement Fortune 500 pour établir des relations commerciales durables et mutuellement bénéfiques."
    },
    p2: {
      part1: "L'expérience en emballage et les relations commerciales de Ryan s'étendent sur ",
      part2: "8 pays",
      part3: " : l'Australie, le Canada, la Chine, l'Allemagne, l'Afrique du Sud, les Philippines, le Royaume-Uni et les États-Unis. En tant que diplômé avec un ",
      part4: "Diplôme d'Honneur de l'Université Polytechnique de Hong Kong",
      part5: " en gestion de la chaîne d'approvisionnement mondiale et administration des affaires, il allie l'excellence académique à l'expertise pratique."
    },
    p3: {
      part1: "Son objectif est d'être un ",
      part2: "architecte de la chaîne d'approvisionnement",
      part3: " — avec des connaissances en emballage, des compétences informatiques et la passion de créer des valeurs irremplaçables et une synergie pour toutes les parties tout au long de la chaîne d'approvisionnement, d'amont en aval."
    },
    p4: {
      part1: "En tant que ",
      part2: "Fondateur de Achieve Pack & Pouch.eco",
      part3: ", Ryan se spécialise dans les ",
      part4: "solutions d'impression numérique 100 % compostables",
      part5: " avec une faible quantité minimale de commande (100-500 pièces) de pointe, rendant les emballages durables accessibles aux startups DTC comme aux marques établies. Son expertise en ",
      part6: "impression numérique HP Indigo 20000",
      part7: " permet un délai de 4 jours pour les commandes urgentes."
    }
  },
  career: {
    title: "Parcours Professionnel",
    exp1: {
      period: "2018 - Présent",
      title: "Fondateur & Spécialiste en Développement d'Emballages",
      company: "Achieve Pack / Pouch.eco",
      desc: "Fondateur d'une entreprise d'emballages écologiques axée sur des solutions compostables et durables. Pionnier de l'impression numérique avec de faibles MOQ pour les marques DTC."
    },
    exp2: {
      period: "2010 - 2018",
      title: "Consultant Principal en Emballage",
      company: "Entreprises Fortune 500 & Multinationales",
      desc: "A développé des stratégies de chaîne d'approvisionnement et des solutions d'emballage pour des marques internationales dans 8 pays."
    },
    exp3: {
      period: "1999 - 2003",
      title: "Licence (avec Honneurs)",
      company: "Université Polytechnique de Hong Kong",
      desc: "Gestion Globale de la Chaîne d'Approvisionnement & Administration des Affaires"
    }
  },
  expertise: {
    title: "Expertise Principale",
    item1: "Sachets de café compostables pour marques DTC",
    item2: "Emballage pour chocolat et confiserie",
    item3: "Emballage pour thé (feuilles en vrac & sachets)",
    item4: "Solutions pour e-commerce & boîtes d'abonnement",
    item5: "Conformité EN 13432 & ASTM D6400",
    item6: "Accompagnement pour certification BPI & TÜV",
    item7: "Matériaux sûrs pour le contact alimentaire",
    item8: "Solutions durables à faible MOQ",
    item9: "Planification de transition depuis le plastique",
    item10: "Technologie barrière pour produits alimentaires",
    item11: "Valves de dégazage pour le café",
    item12: "Optimisation de la conception de sachets stand-up"
  },
  caseStudies: {
    title: "Histoires de Réussite de Clients",
    cs1: {
      title: "Torréfacteur Bean & Bole",
      desc: "A aidé un torréfacteur de spécialité basé à Portland à passer à des sachets compostables certifiés EN 13432 avec valves de dégazage. A obtenu une augmentation de 35 % de la satisfaction client."
    },
    cs2: {
      title: "Thé Milano Botanica",
      desc: "A développé un emballage compostable avec fenêtre pour une marque de thé de luxe. La solution conforme au PPWR de l'UE a augmenté les ventes de 28 %."
    },
    cs3: {
      title: "Artisan Cocoa Emirates",
      desc: "A créé des sachets en mono-PP recyclables résistant à la chaleur pour une marque de chocolat des Émirats arabes unis. Ventes de cadeaux en hausse de 55 %."
    }
  },
  sidebar: {
    recognition: {
      title: "Reconnaissance",
      item: {
        title: "Ancien Élève Distingué PolyU",
        subtitle: "Programme des Jeunes Achievers",
        desc: "Reconnu pour ses contributions à l'innovation en matière d'emballages durables"
      }
    },
    quickFacts: {
      title: "Faits en Bref",
      fact1: "Années d'Expérience",
      fact2: "Pays Desservis",
      fact3: "Quantité Minimum de Commande",
      fact4: "Jours de Production Rapide"
    },
    industryFocus: {
      title: "Secteurs d'Activité",
      item1: "☕ Café & Espresso",
      item2: "🍫 Chocolat & Confiserie",
      item3: "🍵 Thé & Mélanges à base de plantes",
      item4: "📦 Boîtes d'Abonnement",
      item5: "🌿 Produits Bio & Naturels"
    },
    education: {
      title: "Éducation & Compétences",
      uni: "Université Polytechnique de Hong Kong",
      degree: "Diplôme d'Honneur (1999-2003)",
      major: "Chaîne d'Approvisionnement Globale, Administration des Affaires",
      techSkillsTitle: "Compétences Techniques :",
      techSkill1: "Adobe Photoshop",
      techSkill2: "Adobe Illustrator",
      techSkill3: "HP Indigo 20000",
      techSkill4: "Gestion Chaîne d'Appro",
      techSkill5: "Impression Numérique",
      certTitle: "Expertise en Certifications :",
      cert1: "EN 13432",
      cert2: "ASTM D6400",
      cert3: "Certifié BPI",
      cert4: "TÜV OK Compost"
    },
    globalNetwork: {
      title: "Réseau Mondial",
      country1: "Australie",
      country2: "Canada",
      country3: "Chine",
      country4: "Allemagne",
      country5: "Afrique du Sud",
      country6: "Philippines",
      country7: "Royaume-Uni",
      country8: "États-Unis"
    },
    cta: {
      title: "Prêt à passer au durable ?",
      desc: "Réservez une consultation gratuite de 30 minutes pour discuter de vos besoins en emballage.",
      button: "Planifier une Réunion"
    }
  }
};

const twTexts = {
  seoTitle: "Ryan Wong - 包裝開發專家 | Achieve Pack",
  seoDescription: "Ryan Wong，Achieve Pack 的包裝開發專家。14 年以上協助 DTC 咖啡、巧克力及茶葉品牌採用環保堆肥包裝經驗。香港理工大學榮譽學位。橫跨 8 個國家的跨國專家。",
  seoKeywords: "Ryan Wong, 包裝開發專家, 環保堆肥包裝專家, DTC 包裝, 咖啡包裝, 香港理工大學, 供應鏈架構師",
  backToHome: "返回首頁",
  hero: {
    title: "Ryan Wong",
    subtitle: "包裝開發專家",
    description: "14 年以上經驗 | 8 個國家 | 財富 500 強企業與 DTC 品牌",
    badge1: "🎓 理工大學榮譽學位",
    badge2: "🏆 理工大學傑出校友",
    badge3: "🌱 環保包裝先驅",
    linkedin: "LinkedIn 個人檔案",
    contact: "聯絡我們"
  },
  about: {
    title: "關於 Ryan",
    photoAlt: "Ryan Wong 在包裝展覽會",
    photoCaption: "Ryan 在國際包裝展覽會",
    p1: {
      part1: "憑藉在包裝行業",
      part2: "超過 14 年的專注經驗",
      part3: "，Ryan Wong 透過與跨國公司和財富 500 強企業合作，建立了深厚的專業知識，以實現互惠互利和長久的業務關係。"
    },
    p2: {
      part1: "Ryan 的包裝經驗和業務關係橫跨",
      part2: "8 個國家",
      part3: "：澳洲、加拿大、中國、德國、南非、菲律賓、英國和美國。作為一名",
      part4: "香港理工大學全球供應鏈與工商管理榮譽學位",
      part5: "的畢業生，他將卓越的學術背景與豐富的實務經驗相結合。"
    },
    p3: {
      part1: "他的目標是成為一名",
      part2: "供應鏈架構師",
      part3: " —— 憑藉包裝知識、IT 技能和熱情，在整個從上游到下游的供應鏈中為各方創造不可取代的價值與協同效應。"
    },
    p4: {
      part1: "身為 ",
      part2: "Achieve Pack & Pouch.eco 的創辦人",
      part3: "，Ryan 專注於",
      part4: "100% 可堆肥數位印刷解決方案",
      part5: "，提供業界領先的低起訂量（100-500 件），使 DTC 品牌和成熟企業皆可輕鬆採用環保包裝。他在",
      part6: "HP Indigo 20000 數位印刷",
      part7: "方面的專業知識使其能夠為緊急訂單提供 4 天的快速交期。"
    }
  },
  career: {
    title: "職涯歷程",
    exp1: {
      period: "2018 年 - 至今",
      title: "創辦人兼包裝開發專家",
      company: "Achieve Pack / Pouch.eco",
      desc: "創辦了專注於可堆肥和永續解決方案的環保包裝公司。以低起訂量為 DTC 品牌提供數位印刷服務的先驅。"
    },
    exp2: {
      period: "2010 年 - 2018 年",
      title: "資深包裝顧問",
      company: "財富 500 強與跨國企業",
      desc: "為橫跨 8 個國家的國際品牌制定供應鏈策略與包裝解決方案。"
    },
    exp3: {
      period: "1999 年 - 2003 年",
      title: "學士學位（榮譽）",
      company: "香港理工大學",
      desc: "全球供應鏈管理與工商管理"
    }
  },
  expertise: {
    title: "核心專業",
    item1: "為 DTC 品牌提供可堆肥咖啡自立袋",
    item2: "巧克力與糖果包裝",
    item3: "茶葉包裝（散葉茶與茶包）",
    item4: "電子商務與訂閱盒解決方案",
    item5: "符合 EN 13432 與 ASTM D6400 標準",
    item6: "BPI 與 TÜV 認證指導",
    item7: "食品級安全材料",
    item8: "低起訂量環保解決方案",
    item9: "減塑轉型規劃",
    item10: "食品屏障技術",
    item11: "咖啡排氣閥",
    item12: "自立袋設計最佳化"
  },
  caseStudies: {
    title: "客戶成功案例",
    cs1: {
      title: "Bean & Bole 咖啡烘焙廠",
      desc: "協助這家位於波特蘭的精品烘焙廠轉向使用通過 EN 13432 認證且配有排氣閥的可堆肥自立袋。客戶滿意度提升了 35%。"
    },
    cs2: {
      title: "Milano Botanica 茶葉",
      desc: "為這家奢華茶葉品牌開發了開窗可堆肥包裝。符合歐盟 PPWR 規範的解決方案使銷售額成長了 28%。"
    },
    cs3: {
      title: "Artisan Cocoa Emirates",
      desc: "為這家阿聯酋巧克力品牌打造了耐熱的可回收單一材質 PP 自立袋。禮品銷售額飆升 55%。"
    }
  },
  sidebar: {
    recognition: {
      title: "獎項認可",
      item: {
        title: "理工大學傑出校友",
        subtitle: "青年成就者計畫",
        desc: "因對環保包裝創新的貢獻而獲表揚"
      }
    },
    quickFacts: {
      title: "快速概覽",
      fact1: "年專業經驗",
      fact2: "服務國家",
      fact3: "最低起訂量",
      fact4: "急件生產天數"
    },
    industryFocus: {
      title: "產業焦點",
      item1: "☕ 咖啡與義式濃縮",
      item2: "🍫 巧克力與糖果",
      item3: "🍵 茶葉與草本混合",
      item4: "📦 訂閱盒",
      item5: "🌿 有機與天然產品"
    },
    education: {
      title: "教育背景與技能",
      uni: "香港理工大學",
      degree: "榮譽學位 (1999-2003)",
      major: "全球供應鏈，工商管理",
      techSkillsTitle: "技術技能：",
      techSkill1: "Adobe Photoshop",
      techSkill2: "Adobe Illustrator",
      techSkill3: "HP Indigo 20000",
      techSkill4: "供應鏈管理",
      techSkill5: "數位印刷",
      certTitle: "認證專業：",
      cert1: "EN 13432",
      cert2: "ASTM D6400",
      cert3: "BPI 認證",
      cert4: "TÜV OK Compost"
    },
    globalNetwork: {
      title: "全球網路",
      country1: "澳洲",
      country2: "加拿大",
      country3: "中國",
      country4: "德國",
      country5: "南非",
      country6: "菲律賓",
      country7: "英國",
      country8: "美國"
    },
    cta: {
      title: "準備好邁向環保了嗎？",
      desc: "預約免費的 30 分鐘諮詢，討論您的客製化包裝需求。",
      button: "安排會議"
    }
  }
};

const locales = ['en', 'es', 'fr', 'zh-TW'];
const texts = { en: enTexts, es: esTexts, fr: frTexts, 'zh-TW': twTexts };

locales.forEach(locale => {
  const filePath = `${basePath}/${locale}.json`;
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (!content.seoPages) content.seoPages = {};
  if (!content.seoPages.pages) content.seoPages.pages = {};
  
  content.seoPages.pages[pageKey] = texts[locale];
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n');
});

console.log('JSON files updated successfully.');
