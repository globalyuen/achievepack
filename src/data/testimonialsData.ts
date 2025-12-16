export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  url?: string
  quote: string
  shortQuote: string
  extraInfo: string
  ownerImage: string
  companyLogo: string
  brandLogo: string
  bgColor: string
  pouchImage: string
  videoId?: string  // YouTube video ID for video testimonials
  // Multi-language support
  translations?: {
    en?: { quote: string; shortQuote: string; extraInfo: string }
    fr?: { quote: string; shortQuote: string; extraInfo: string }
    es?: { quote: string; shortQuote: string; extraInfo: string }
    'zh-TW'?: { quote: string; shortQuote: string; extraInfo: string }
  }
}

// Default pouch image for testimonials without specific product images
const DEFAULT_POUCH = '/imgs/testimonials/pouch-hover/morlife.webp'

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'michelle-correa',
    name: 'Michelle Correa',
    company: 'themclife.com',
    role: 'Founder',
    url: 'https://themclife.com',
    quote: "Eco Pouch's custom packaging met and exceeded expectations, with product fitting perfectly. Strong recommendation for anyone looking for quality sustainable packaging solutions.",
    shortQuote: "Custom packaging met and exceeded expectations!",
    extraInfo: 'Case study + transcript, 1 year ago',
    ownerImage: '/imgs/testimonials/owner/michelle.png',
    companyLogo: '/imgs/testimonials/logo/michelle.png',
    brandLogo: '',
    bgColor: 'bg-orange-100',
    pouchImage: '/imgs/testimonials/pouch-hover/michelle.webp',
    translations: {
      en: {
        quote: "Eco Pouch's custom packaging met and exceeded expectations, with product fitting perfectly. Strong recommendation for anyone looking for quality sustainable packaging solutions.",
        shortQuote: "Custom packaging met and exceeded expectations!",
        extraInfo: 'Case study + transcript, 1 year ago'
      },
      fr: {
        quote: "L'emballage personnalisé d'Eco Pouch a répondu et dépassé les attentes, avec un produit parfaitement adapté. Forte recommandation pour quiconque recherche des solutions d'emballage durable de qualité.",
        shortQuote: "L'emballage personnalisé a dépassé les attentes !",
        extraInfo: 'Étude de cas + transcription, il y a 1 an'
      },
      es: {
        quote: "El embalaje personalizado de Eco Pouch cumplió y superó las expectativas, con el producto encajando perfectamente. Recomendación firme para cualquiera que busque soluciones de embalaje sostenible de calidad.",
        shortQuote: "¡El embalaje personalizado superó las expectativas!",
        extraInfo: 'Estudio de caso + transcripción, hace 1 año'
      },
      'zh-TW': {
        quote: "Eco Pouch的客製化包裝滿足並超越了期望，產品完美契合。強烈推薦給任何尋找優質可持續包裝解決方案的人。",
        shortQuote: "客製化包裝超越了期望！",
        extraInfo: '案例研究 + 文字記錄，1年前'
      }
    }
  },
  {
    id: 'nicole-sarduy',
    name: 'Nicole Sarduy',
    company: '',
    role: '',
    quote: "Working with Eco Pouch Packaging has been the best production experience. The communication was outstanding, quality exceeded expectations, and pricing was unbeatable.",
    shortQuote: "Best production experience ever!",
    extraInfo: '3 months ago',
    ownerImage: '/imgs/testimonials/owner/nicole.png',
    companyLogo: '/imgs/testimonials/logo/nicole.png',
    brandLogo: '',
    bgColor: 'bg-pink-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Nicole.webp',
    translations: {
      en: {
        quote: "Working with Eco Pouch Packaging has been the best production experience. The communication was outstanding, quality exceeded expectations, and pricing was unbeatable.",
        shortQuote: "Best production experience ever!",
        extraInfo: '3 months ago'
      },
      fr: {
        quote: "Travailler avec Eco Pouch Packaging a été la meilleure expérience de production. La communication était exceptionnelle, la qualité a dépassé les attentes et les prix étaient imbattables.",
        shortQuote: "Meilleure expérience de production jamais vécue !",
        extraInfo: 'Il y a 3 mois'
      },
      es: {
        quote: "Trabajar con Eco Pouch Packaging ha sido la mejor experiencia de producción. La comunicación fue excepcional, la calidad superó las expectativas y el precio fue inmejorable.",
        shortQuote: "¡Mejor experiencia de producción jamás!",
        extraInfo: 'Hace 3 meses'
      },
      'zh-TW': {
        quote: "與Eco Pouch Packaging合作是最好的生產體驗。溝通非常出色，品質超出預期，價格無可匹敵。",
        shortQuote: "有史以來最好的生產體驗！",
        extraInfo: '3個月前'
      }
    }
  },
  {
    id: 'jemma-defore',
    name: 'Jemma Defore',
    company: 'Mylk Made',
    role: 'Director',
    url: 'https://mylkmade.co.nz',
    quote: "Eco Pouch is a great company with excellent communication and great-quality bags. They made the entire process smooth and professional.",
    shortQuote: "Great company with excellent communication!",
    extraInfo: '7 months ago',
    ownerImage: '/imgs/testimonials/owner/jemma.png',
    companyLogo: '/imgs/testimonials/logo/jemma.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_mylk_made_logo_6762912.webp',
    bgColor: 'bg-cyan-100',
    pouchImage: '/imgs/testimonials/pouch-hover/jemma.webp',
    translations: {
      en: {
        quote: "Eco Pouch is a great company with excellent communication and great-quality bags. They made the entire process smooth and professional.",
        shortQuote: "Great company with excellent communication!",
        extraInfo: '7 months ago'
      },
      fr: {
        quote: "Eco Pouch est une excellente entreprise avec une communication excellente et des sacs de grande qualité. Ils ont rendu tout le processus fluide et professionnel.",
        shortQuote: "Excellente entreprise avec une communication parfaite !",
        extraInfo: 'Il y a 7 mois'
      },
      es: {
        quote: "Eco Pouch es una gran empresa con excelente comunicación y bolsas de gran calidad. Hicieron que todo el proceso fuera fluido y profesional.",
        shortQuote: "¡Gran empresa con excelente comunicación!",
        extraInfo: 'Hace 7 meses'
      },
      'zh-TW': {
        quote: "Eco Pouch是一家很棒的公司，溝通優秀，袋子品質優良。他們讓整個過程順暢且專業。",
        shortQuote: "溝通優秀的好公司！",
        extraInfo: '7個月前'
      }
    }
  },
  {
    id: 'ruby-mayer',
    name: 'Ruby Mayer',
    company: 'EMU Elixir',
    role: 'Owner',
    quote: "The packaging looks and feels wonderful, matches my design almost perfectly. It's the main thing customers compliment about our products.",
    shortQuote: "Packaging is the main thing customers compliment!",
    extraInfo: 'Transcript, 1 year ago',
    ownerImage: '/imgs/testimonials/owner/ruby.png',
    companyLogo: '/imgs/testimonials/logo/ruby.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_emu_elixir_logo_7729355.webp',
    bgColor: 'bg-green-100',
    pouchImage: '/imgs/testimonials/pouch-hover/ruby.webp',
    videoId: 'G-1mKvEbAZg',  // YouTube Shorts video testimonial
    translations: {
      en: {
        quote: "The packaging looks and feels wonderful, matches my design almost perfectly. It's the main thing customers compliment about our products.",
        shortQuote: "Packaging is the main thing customers compliment!",
        extraInfo: 'Transcript, 1 year ago'
      },
      fr: {
        quote: "L'emballage est magnifique et correspond presque parfaitement à mon design. C'est ce que les clients complimentent le plus sur nos produits.",
        shortQuote: "L'emballage est ce que les clients complimentent le plus !",
        extraInfo: 'Transcription, il y a 1 an'
      },
      es: {
        quote: "El embalaje se ve y se siente maravilloso, coincide casi perfectamente con mi diseño. Es lo principal que los clientes elogian de nuestros productos.",
        shortQuote: "¡El embalaje es lo que más elogian los clientes!",
        extraInfo: 'Transcripción, hace 1 año'
      },
      'zh-TW': {
        quote: "包裝看起來和感覺都很棒，幾乎完美匹配我的設計。這是顧客對我們產品最讚賞的地方。",
        shortQuote: "包裝是顧客最讚賞的部分！",
        extraInfo: '文字記錄，1年前'
      }
    }
  },
  {
    id: 'richard-tango-lowy',
    name: 'Richard Tango-Lowy',
    company: 'Dancing Lion Chocolate',
    role: 'Owner',
    url: 'https://dancinglion.us',
    quote: "These fully compostable pouches decompose in about a year and a half. Thank you to the Eco Pouch team for fantastic work on our sustainable packaging!",
    shortQuote: "Fantastic work on compostable pouches!",
    extraInfo: 'Instagram video linked, 1 year ago',
    ownerImage: '/imgs/testimonials/owner/Richard.png',
    companyLogo: '/imgs/testimonials/logo/Richard.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_dancing_lion_chocolate_logo_9125312.webp',
    bgColor: 'bg-amber-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Richard.webp',
    translations: {
      en: {
        quote: "These fully compostable pouches decompose in about a year and a half. Thank you to the Eco Pouch team for fantastic work on our sustainable packaging!",
        shortQuote: "Fantastic work on compostable pouches!",
        extraInfo: 'Instagram video linked, 1 year ago'
      },
      fr: {
        quote: "Ces pochettes entièrement compostables se décomposent en environ un an et demi. Merci à l'équipe Eco Pouch pour un travail fantastique sur notre emballage durable !",
        shortQuote: "Travail fantastique sur les pochettes compostables !",
        extraInfo: 'Vidéo Instagram liée, il y a 1 an'
      },
      es: {
        quote: "Estas bolsas totalmente compostables se descomponen en aproximadamente un año y medio. ¡Gracias al equipo de Eco Pouch por un trabajo fantástico en nuestro embalaje sostenible!",
        shortQuote: "¡Trabajo fantástico en bolsas compostables!",
        extraInfo: 'Video de Instagram vinculado, hace 1 año'
      },
      'zh-TW': {
        quote: "這些完全可堆肥的袋子在大約一年半內分解。感謝Eco Pouch團隊為我們的可持續包裝所做的出色工作！",
        shortQuote: "可堆肥袋子的出色工作！",
        extraInfo: 'Instagram影片連結，1年前'
      }
    }
  },
  {
    id: 'holly-baer',
    name: 'Holly Baer',
    company: 'Superior Feline',
    role: 'Owner',
    quote: "Grateful to find quality compostable packaging with low MOQs. Top communication, helpful rep, proactive updates, and excellent-quality pouches at reasonable prices.",
    shortQuote: "Quality compostable packaging with low MOQs!",
    extraInfo: 'Transcript + text, 1 year ago',
    ownerImage: '/imgs/testimonials/owner/holly.webp',
    companyLogo: '/imgs/testimonials/logo/holly.png',
    brandLogo: '',
    bgColor: 'bg-purple-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Holly.webp',
    videoId: 'G-1mKvEbAZg',  // YouTube Shorts video testimonial
    translations: {
      en: {
        quote: "Grateful to find quality compostable packaging with low MOQs. Top communication, helpful rep, proactive updates, and excellent-quality pouches at reasonable prices.",
        shortQuote: "Quality compostable packaging with low MOQs!",
        extraInfo: 'Transcript + text, 1 year ago'
      },
      fr: {
        quote: "Reconnaissant de trouver des emballages compostables de qualité avec des MOQ faibles. Communication excellente, représentant serviable, mises à jour proactives et pochettes de qualité à prix raisonnables.",
        shortQuote: "Emballages compostables de qualité avec MOQ faibles !",
        extraInfo: 'Transcription + texte, il y a 1 an'
      },
      es: {
        quote: "Agradecido de encontrar embalaje compostable de calidad con MOQ bajos. Comunicación excelente, representante servicial, actualizaciones proactivas y bolsas de excelente calidad a precios razonables.",
        shortQuote: "¡Embalaje compostable de calidad con MOQ bajos!",
        extraInfo: 'Transcripción + texto, hace 1 año'
      },
      'zh-TW': {
        quote: "很高興找到低起訂量的優質可堆肥包裝。溝通一流，業務代表樂於助人，主動更新，袋子品質優良且價格合理。",
        shortQuote: "低起訂量的優質可堆肥包裝！",
        extraInfo: '文字記錄 + 文本，1年前'
      }
    }
  },
  {
    id: 'arielle',
    name: 'Arielle',
    company: 'Just Be Kind Dog Food Ltd',
    role: '',
    quote: "Very impressed with service, high-quality compostable pouches for dog supplements, and easy contact. Highly recommends for sustainable businesses.",
    shortQuote: "Highly recommend for sustainable businesses!",
    extraInfo: '1–2 years ago, 2 written testimonials',
    ownerImage: '/imgs/testimonials/owner/arielle.png',
    companyLogo: '/imgs/testimonials/logo/arielle.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_just_be_kind_logo_9956961.webp',
    bgColor: 'bg-blue-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Arielle.webp',
    translations: {
      en: {
        quote: "Very impressed with service, high-quality compostable pouches for dog supplements, and easy contact. Highly recommends for sustainable businesses.",
        shortQuote: "Highly recommend for sustainable businesses!",
        extraInfo: '1–2 years ago, 2 written testimonials'
      },
      fr: {
        quote: "Très impressionné par le service, pochettes compostables de haute qualité pour suppléments pour chiens, et contact facile. Recommande vivement pour les entreprises durables.",
        shortQuote: "Recommande vivement pour les entreprises durables !",
        extraInfo: 'Il y a 1–2 ans, 2 témoignages écrits'
      },
      es: {
        quote: "Muy impresionado con el servicio, bolsas compostables de alta calidad para suplementos para perros y contacto fácil. Altamente recomendado para empresas sostenibles.",
        shortQuote: "¡Altamente recomendado para empresas sostenibles!",
        extraInfo: 'Hace 1–2 años, 2 testimonios escritos'
      },
      'zh-TW': {
        quote: "對服務印象深刻，狗狗補充品的高品質可堆肥袋，聯繫方便。強烈推薦給可持續企業。",
        shortQuote: "強烈推薦給可持續企業！",
        extraInfo: '1–2年前，2份書面推薦'
      }
    }
  },
  {
    id: 'leo-vieira',
    name: 'Leo Vieira',
    company: 'Wise Angler NZ',
    role: 'Director',
    quote: "Eco Pouch met a tight deadline after we lost our prior supplier. Professional, fast communication. Highly recommend the team for quality, sustainable packaging.",
    shortQuote: "Met tight deadline with professional service!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/owner/leo.png',
    companyLogo: '/imgs/testimonials/logo/leo.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_wise_angler_logo_8090229.webp',
    bgColor: 'bg-teal-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Leo.webp',
    translations: {
      en: {
        quote: "Eco Pouch met a tight deadline after we lost our prior supplier. Professional, fast communication. Highly recommend the team for quality, sustainable packaging.",
        shortQuote: "Met tight deadline with professional service!",
        extraInfo: '2 years ago'
      },
      fr: {
        quote: "Eco Pouch a respecté un délai serré après avoir perdu notre ancien fournisseur. Communication professionnelle et rapide. Recommande vivement l'équipe pour un emballage durable de qualité.",
        shortQuote: "Délai serré respecté avec un service professionnel !",
        extraInfo: 'Il y a 2 ans'
      },
      es: {
        quote: "Eco Pouch cumplió un plazo ajustado después de perder a nuestro proveedor anterior. Comunicación profesional y rápida. Recomiendo encarecidamente al equipo para embalaje sostenible de calidad.",
        shortQuote: "¡Cumplió plazo ajustado con servicio profesional!",
        extraInfo: 'Hace 2 años'
      },
      'zh-TW': {
        quote: "在失去之前的供應商後，Eco Pouch滿足了緊迫的截止日期。專業、快速的溝通。強烈推薦該團隊提供優質、可持續的包裝。",
        shortQuote: "以專業服務滿足緊迫截止日期！",
        extraInfo: '2年前'
      }
    }
  },
  {
    id: 'remi',
    name: 'Remi',
    company: 'plantpowders.nl',
    role: '',
    url: 'https://plantpowders.nl',
    quote: "Eco Pouch is the best packaging company. We've had multiple years of collaboration and consistently satisfying packaging quality.",
    shortQuote: "Best packaging company, years of collaboration!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/owner/remi.png',
    companyLogo: '/imgs/testimonials/logo/remi.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_plantpowders_company_logo_3847855.webp',
    bgColor: 'bg-lime-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Remi.webp',
    translations: {
      en: {
        quote: "Eco Pouch is the best packaging company. We've had multiple years of collaboration and consistently satisfying packaging quality.",
        shortQuote: "Best packaging company, years of collaboration!",
        extraInfo: '2 years ago'
      },
      fr: {
        quote: "Eco Pouch est la meilleure entreprise d'emballage. Nous avons eu plusieurs années de collaboration et une qualité d'emballage constamment satisfaisante.",
        shortQuote: "Meilleure entreprise d'emballage, années de collaboration !",
        extraInfo: 'Il y a 2 ans'
      },
      es: {
        quote: "Eco Pouch es la mejor empresa de embalaje. Hemos tenido múltiples años de colaboración y calidad de embalaje constantemente satisfactoria.",
        shortQuote: "¡Mejor empresa de embalaje, años de colaboración!",
        extraInfo: 'Hace 2 años'
      },
      'zh-TW': {
        quote: "Eco Pouch是最好的包裝公司。我們已經合作多年，包裝品質一直令人滿意。",
        shortQuote: "最好的包裝公司，多年合作！",
        extraInfo: '2年前'
      }
    }
  },
  {
    id: 'david',
    name: 'David',
    company: 'Hike Again Remedies',
    role: '',
    url: 'https://hikeagainremedies.ca',
    quote: "Pouch.eco and Ryan helped meet a very tight launch deadline and navigate supply chain issues, ensuring on-time delivery.",
    shortQuote: "Helped meet tight launch deadline!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/owner/david.png',
    companyLogo: '/imgs/testimonials/logo/david.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_hike_again_remedies_logo_3308658.webp',
    bgColor: 'bg-rose-100',
    pouchImage: '/imgs/testimonials/pouch-hover/David.webp',
    translations: {
      en: {
        quote: "Pouch.eco and Ryan helped meet a very tight launch deadline and navigate supply chain issues, ensuring on-time delivery.",
        shortQuote: "Helped meet tight launch deadline!",
        extraInfo: '2 years ago'
      },
      fr: {
        quote: "Pouch.eco et Ryan ont aidé à respecter un délai de lancement très serré et à naviguer dans les problèmes de chaîne d'approvisionnement, assurant une livraison à temps.",
        shortQuote: "Ont aidé à respecter un délai de lancement serré !",
        extraInfo: 'Il y a 2 ans'
      },
      es: {
        quote: "Pouch.eco y Ryan ayudaron a cumplir un plazo de lanzamiento muy ajustado y a navegar problemas de cadena de suministro, asegurando entrega a tiempo.",
        shortQuote: "¡Ayudaron a cumplir plazo de lanzamiento ajustado!",
        extraInfo: 'Hace 2 años'
      },
      'zh-TW': {
        quote: "Pouch.eco和Ryan幫助滿足了非常緊迫的發布截止日期，並解決供應鏈問題，確保按時交貨。",
        shortQuote: "幫助滿足緊迫的發布截止日期！",
        extraInfo: '2年前'
      }
    }
  },
  {
    id: 'paul',
    name: 'Paul',
    company: 'Barky Bakey',
    role: 'CEO',
    quote: "Ryan helped over months answering startup packaging questions. Very pleased with the high-quality biodegradable packaging and A+ customer service.",
    shortQuote: "A+ customer service and quality packaging!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/owner/Paul.png',
    companyLogo: '/imgs/testimonials/logo/Paul.png',
    brandLogo: '',
    bgColor: 'bg-yellow-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Paul.webp',
    translations: {
      en: {
        quote: "Ryan helped over months answering startup packaging questions. Very pleased with the high-quality biodegradable packaging and A+ customer service.",
        shortQuote: "A+ customer service and quality packaging!",
        extraInfo: '2 years ago'
      },
      fr: {
        quote: "Ryan a aidé pendant des mois en répondant aux questions sur l'emballage de startup. Très satisfait de l'emballage biodégradable de haute qualité et du service client A+.",
        shortQuote: "Service client A+ et emballage de qualité !",
        extraInfo: 'Il y a 2 ans'
      },
      es: {
        quote: "Ryan ayudó durante meses respondiendo preguntas sobre embalaje de startup. Muy satisfecho con el embalaje biodegradable de alta calidad y servicio al cliente A+.",
        shortQuote: "¡Servicio al cliente A+ y embalaje de calidad!",
        extraInfo: 'Hace 2 años'
      },
      'zh-TW': {
        quote: "Ryan在數月內幫助回答初創公司的包裝問題。對高品質生物降解包裝和A+客戶服務非常滿意。",
        shortQuote: "A+客戶服務和優質包裝！",
        extraInfo: '2年前'
      }
    }
  },
  {
    id: 'steph',
    name: 'Steph',
    company: 'Cocktail by Mail',
    role: '',
    quote: "Great team from start to finish. Ryan helped resolve a pricing mistake and was eager to help a small business find the perfect solution despite time zone differences.",
    shortQuote: "Great team, eager to help small businesses!",
    extraInfo: '3 years ago',
    ownerImage: '/imgs/testimonials/owner/Steph.png',
    companyLogo: '/imgs/testimonials/logo/Steph.png',
    brandLogo: '',
    bgColor: 'bg-indigo-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Steph.webp',
    translations: {
      en: {
        quote: "Great team from start to finish. Ryan helped resolve a pricing mistake and was eager to help a small business find the perfect solution despite time zone differences.",
        shortQuote: "Great team, eager to help small businesses!",
        extraInfo: '3 years ago'
      },
      fr: {
        quote: "Équipe formidable du début à la fin. Ryan a aidé à résoudre une erreur de tarification et était désireux d'aider une petite entreprise à trouver la solution parfaite malgré les différences de fuseau horaire.",
        shortQuote: "Équipe formidable, désireuse d'aider les petites entreprises !",
        extraInfo: 'Il y a 3 ans'
      },
      es: {
        quote: "Gran equipo de principio a fin. Ryan ayudó a resolver un error de precio y estaba ansioso por ayudar a una pequeña empresa a encontrar la solución perfecta a pesar de las diferencias horarias.",
        shortQuote: "¡Gran equipo, ansioso por ayudar a pequeñas empresas!",
        extraInfo: 'Hace 3 años'
      },
      'zh-TW': {
        quote: "從頭到尾都是很棒的團隊。Ryan幫助解決了定價錯誤，並且儘管有時區差異，仍熱切地幫助小企業找到完美的解決方案。",
        shortQuote: "優秀的團隊，熱心幫助小企業！",
        extraInfo: '3年前'
      }
    }
  },
  {
    id: 'cheryl',
    name: 'Cheryl',
    company: 'Morlife',
    role: '',
    quote: "Great pouches with awesome printing. Impeccable quality, remarkable communication, and above-average delivery performance from Ryan and Pouch.eco.",
    shortQuote: "Impeccable quality and awesome printing!",
    extraInfo: '4 years ago',
    ownerImage: '/imgs/testimonials/owner/cheryl.png',
    companyLogo: '/imgs/testimonials/logo/cheryl.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_morlife_logo_7487286.webp',
    bgColor: 'bg-sky-100',
    pouchImage: '/imgs/testimonials/pouch-hover/morlife.webp',
    translations: {
      en: {
        quote: "Great pouches with awesome printing. Impeccable quality, remarkable communication, and above-average delivery performance from Ryan and Pouch.eco.",
        shortQuote: "Impeccable quality and awesome printing!",
        extraInfo: '4 years ago'
      },
      fr: {
        quote: "Excellentes pochettes avec une impression impressionnante. Qualité impeccable, communication remarquable et performance de livraison supérieure à la moyenne de Ryan et Pouch.eco.",
        shortQuote: "Qualité impeccable et impression impressionnante !",
        extraInfo: 'Il y a 4 ans'
      },
      es: {
        quote: "Excelentes bolsas con impresión impresionante. Calidad impecable, comunicación notable y rendimiento de entrega por encima del promedio de Ryan y Pouch.eco.",
        shortQuote: "¡Calidad impecable e impresión impresionante!",
        extraInfo: 'Hace 4 años'
      },
      'zh-TW': {
        quote: "優質的袋子，印刷非常棒。Ryan和Pouch.eco提供無可挑剛的品質、出色的溝通和高於平均水平的交貨表現。",
        shortQuote: "無可挑剛的品質和出色的印刷！",
        extraInfo: '4年前'
      }
    }
  }
]
