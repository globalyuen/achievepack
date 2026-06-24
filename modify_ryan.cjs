const fs = require('fs');
const path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/team/RyanWongPage.tsx';

let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  "import { Helmet } from 'react-helmet-async'",
  "import { Helmet } from 'react-helmet-async'\nimport { useTranslation } from 'react-i18next'"
);

content = content.replace(
  "const ryanEntity = authorEntities['founder-ryan']",
  "const { t } = useTranslation();\n  const ryanEntity = authorEntities['founder-ryan']"
);

content = content.replace(
  /<title>.*<\/title>/g,
  "<title>{t('seoPages.pages.ryanWong.seoTitle', 'Ryan Wong - Packaging Development Specialist | Achieve Pack')}</title>"
);
content = content.replace(
  /<meta name="description" content="[^"]+" \/>/g,
  `<meta name="description" content={t('seoPages.pages.ryanWong.seoDescription', 'Ryan Wong, Packaging Development Specialist at Achieve Pack. 14+ years helping DTC coffee, chocolate & tea brands with compostable packaging. Hong Kong Polytechnic University Honor Degree. Expert across 8 countries.')} />`
);
content = content.replace(
  /<meta name="keywords" content="[^"]+" \/>/g,
  `<meta name="keywords" content={t('seoPages.pages.ryanWong.seoKeywords', 'Ryan Wong, packaging development specialist, compostable packaging expert, DTC packaging, coffee packaging, Hong Kong Polytechnic University, supply chain architect')} />`
);

content = content.replace(
  "Back to Home",
  "{t('seoPages.pages.ryanWong.backToHome', 'Back to Home')}"
);

content = content.replace(
  'alt="Ryan Wong - Packaging Development Specialist"',
  'alt={`${t(\'seoPages.pages.ryanWong.hero.title\', \'Ryan Wong\')} - ${t(\'seoPages.pages.ryanWong.hero.subtitle\', \'Packaging Development Specialist\')}`}'
);

content = content.replace(
  />Ryan Wong<\/h1>/g,
  ">{t('seoPages.pages.ryanWong.hero.title', 'Ryan Wong')}</h1>"
);
content = content.replace(
  />Packaging Development Specialist<\/p>/g,
  ">{t('seoPages.pages.ryanWong.hero.subtitle', 'Packaging Development Specialist')}</p>"
);
content = content.replace(
  /14\+ years experience \| 8 countries \| Fortune 500 & DTC startups/g,
  "{t('seoPages.pages.ryanWong.hero.description', '14+ years experience | 8 countries | Fortune 500 & DTC startups')}"
);
content = content.replace(
  />🎓 PolyU Honor Degree<\/span>/g,
  ">{t('seoPages.pages.ryanWong.hero.badge1', '🎓 PolyU Honor Degree')}</span>"
);
content = content.replace(
  />🏆 PolyU Featured Alumni<\/span>/g,
  ">{t('seoPages.pages.ryanWong.hero.badge2', '🏆 PolyU Featured Alumni')}</span>"
);
content = content.replace(
  />🌱 Eco Packaging Pioneer<\/span>/g,
  ">{t('seoPages.pages.ryanWong.hero.badge3', '🌱 Eco Packaging Pioneer')}</span>"
);
content = content.replace(
  />LinkedIn Profile<\/span>/g,
  ">{t('seoPages.pages.ryanWong.hero.linkedin', 'LinkedIn Profile')}</span>"
);
content = content.replace(
  />Contact<\/span>/g,
  ">{t('seoPages.pages.ryanWong.hero.contact', 'Contact')}</span>"
);

content = content.replace(
  />About Ryan<\/h2>/g,
  ">{t('seoPages.pages.ryanWong.about.title', 'About Ryan')}</h2>"
);
content = content.replace(
  /alt="Ryan Wong at Packaging Exhibition"/g,
  `alt={t('seoPages.pages.ryanWong.about.photoAlt', 'Ryan Wong at Packaging Exhibition')}`
);
content = content.replace(
  />Ryan at international packaging exhibition<\/p>/g,
  ">{t('seoPages.pages.ryanWong.about.photoCaption', 'Ryan at international packaging exhibition')}</p>"
);

content = content.replace(
  `With <strong>14+ years of dedicated experience</strong> in the packaging industry, Ryan Wong has built expertise cooperating with multinational and Fortune 500 companies to achieve mutually beneficial and long-lasting business relationships.`,
  `{t('seoPages.pages.ryanWong.about.p1.part1', 'With ')}<strong>{t('seoPages.pages.ryanWong.about.p1.part2', '14+ years of dedicated experience')}</strong>{t('seoPages.pages.ryanWong.about.p1.part3', ' in the packaging industry, Ryan Wong has built expertise cooperating with multinational and Fortune 500 companies to achieve mutually beneficial and long-lasting business relationships.')}`
);

content = content.replace(
  `Ryan's packaging experience and business relationships span <strong>8 countries</strong>: Australia, Canada, China, Germany, South Africa, Philippines, UK and USA. As a <strong>Hong Kong Polytechnic University Honor Degree</strong> graduate in Global Supply Chain and Business Administration, he combines academic excellence with practical expertise.`,
  `{t('seoPages.pages.ryanWong.about.p2.part1', "Ryan's packaging experience and business relationships span ")}<strong>{t('seoPages.pages.ryanWong.about.p2.part2', '8 countries')}</strong>{t('seoPages.pages.ryanWong.about.p2.part3', ': Australia, Canada, China, Germany, South Africa, Philippines, UK and USA. As a ')}<strong>{t('seoPages.pages.ryanWong.about.p2.part4', 'Hong Kong Polytechnic University Honor Degree')}</strong>{t('seoPages.pages.ryanWong.about.p2.part5', ' graduate in Global Supply Chain and Business Administration, he combines academic excellence with practical expertise.')}`
);

content = content.replace(
  `His objective is to be a <strong>supply chain architect</strong> — with packaging knowledge, IT skills and passion to create irreplaceable values and synergy for all parties throughout the whole supply chain from upstream to downstream.`,
  `{t('seoPages.pages.ryanWong.about.p3.part1', 'His objective is to be a ')}<strong>{t('seoPages.pages.ryanWong.about.p3.part2', 'supply chain architect')}</strong>{t('seoPages.pages.ryanWong.about.p3.part3', ' — with packaging knowledge, IT skills and passion to create irreplaceable values and synergy for all parties throughout the whole supply chain from upstream to downstream.')}`
);

content = content.replace(
  `As the <strong>Founder of Achieve Pack & Pouch.eco</strong>, Ryan specializes in <strong>100% compostable digital print solutions</strong> with industry-leading low MOQ (100-500 pieces), making sustainable packaging accessible to DTC startups and established brands alike. His expertise in <strong>HP Indigo 20000 digital printing</strong> enables 4-day turnaround for urgent orders.`,
  `{t('seoPages.pages.ryanWong.about.p4.part1', 'As the ')}<strong>{t('seoPages.pages.ryanWong.about.p4.part2', 'Founder of Achieve Pack & Pouch.eco')}</strong>{t('seoPages.pages.ryanWong.about.p4.part3', ', Ryan specializes in ')}<strong>{t('seoPages.pages.ryanWong.about.p4.part4', '100% compostable digital print solutions')}</strong>{t('seoPages.pages.ryanWong.about.p4.part5', ' with industry-leading low MOQ (100-500 pieces), making sustainable packaging accessible to DTC startups and established brands alike. His expertise in ')}<strong>{t('seoPages.pages.ryanWong.about.p4.part6', 'HP Indigo 20000 digital printing')}</strong>{t('seoPages.pages.ryanWong.about.p4.part7', ' enables 4-day turnaround for urgent orders.')}`
);

content = content.replace(
  />Career Journey<\/h2>/g,
  ">{t('seoPages.pages.ryanWong.career.title', 'Career Journey')}</h2>"
);
content = content.replace(
  />2018 - Present<\/span>/g,
  ">{t('seoPages.pages.ryanWong.career.exp1.period', '2018 - Present')}</span>"
);
content = content.replace(
  />Founder & Packaging Development Specialist<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.career.exp1.title', 'Founder & Packaging Development Specialist')}</h3>"
);
content = content.replace(
  />Achieve Pack \/ Pouch.eco<\/p>/g,
  ">{t('seoPages.pages.ryanWong.career.exp1.company', 'Achieve Pack / Pouch.eco')}</p>"
);
content = content.replace(
  />Founded eco-friendly packaging company focused on compostable and sustainable solutions. Pioneer in digital printing with low MOQ for DTC brands.<\/p>/g,
  ">{t('seoPages.pages.ryanWong.career.exp1.desc', 'Founded eco-friendly packaging company focused on compostable and sustainable solutions. Pioneer in digital printing with low MOQ for DTC brands.')}</p>"
);

content = content.replace(
  />2010 - 2018<\/span>/g,
  ">{t('seoPages.pages.ryanWong.career.exp2.period', '2010 - 2018')}</span>"
);
content = content.replace(
  />Senior Packaging Consultant<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.career.exp2.title', 'Senior Packaging Consultant')}</h3>"
);
content = content.replace(
  />Fortune 500 & Multinational Companies<\/p>/g,
  ">{t('seoPages.pages.ryanWong.career.exp2.company', 'Fortune 500 & Multinational Companies')}</p>"
);
content = content.replace(
  />Developed supply chain strategies and packaging solutions for international brands across 8 countries.<\/p>/g,
  ">{t('seoPages.pages.ryanWong.career.exp2.desc', 'Developed supply chain strategies and packaging solutions for international brands across 8 countries.')}</p>"
);

content = content.replace(
  />1999 - 2003<\/span>/g,
  ">{t('seoPages.pages.ryanWong.career.exp3.period', '1999 - 2003')}</span>"
);
content = content.replace(
  />Bachelor's Degree \(Honors\)<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.career.exp3.title', \"Bachelor's Degree (Honors)\")}</h3>"
);
content = content.replace(
  />The Hong Kong Polytechnic University<\/p>/g,
  ">{t('seoPages.pages.ryanWong.career.exp3.company', 'The Hong Kong Polytechnic University')}</p>"
);
content = content.replace(
  />Global Supply Chain Management & Business Administration<\/p>/g,
  ">{t('seoPages.pages.ryanWong.career.exp3.desc', 'Global Supply Chain Management & Business Administration')}</p>"
);

content = content.replace(
  />Core Expertise<\/h2>/g,
  ">{t('seoPages.pages.ryanWong.expertise.title', 'Core Expertise')}</h2>"
);

const expertiseMap = {
  'Compostable coffee pouches for DTC brands': 'item1',
  'Chocolate & confectionery packaging': 'item2',
  'Tea packaging (loose leaf & sachets)': 'item3',
  'E-commerce & subscription box solutions': 'item4',
  'EN 13432 & ASTM D6400 compliance': 'item5',
  'BPI & TÜV certification guidance': 'item6',
  'Food-contact safe materials': 'item7',
  'Low MOQ sustainable solutions': 'item8',
  'Transition planning from plastic': 'item9',
  'Barrier technology for food products': 'item10',
  'Degassing valves for coffee': 'item11',
  'Stand-up pouch design optimization': 'item12'
};

let expertiseArr = `[
                    'Compostable coffee pouches for DTC brands',
                    'Chocolate & confectionery packaging',
                    'Tea packaging (loose leaf & sachets)',
                    'E-commerce & subscription box solutions',
                    'EN 13432 & ASTM D6400 compliance',
                    'BPI & TÜV certification guidance',
                    'Food-contact safe materials',
                    'Low MOQ sustainable solutions',
                    'Transition planning from plastic',
                    'Barrier technology for food products',
                    'Degassing valves for coffee',
                    'Stand-up pouch design optimization'
                  ]`;

let newExpertiseArr = `[
                    t('seoPages.pages.ryanWong.expertise.item1', 'Compostable coffee pouches for DTC brands'),
                    t('seoPages.pages.ryanWong.expertise.item2', 'Chocolate & confectionery packaging'),
                    t('seoPages.pages.ryanWong.expertise.item3', 'Tea packaging (loose leaf & sachets)'),
                    t('seoPages.pages.ryanWong.expertise.item4', 'E-commerce & subscription box solutions'),
                    t('seoPages.pages.ryanWong.expertise.item5', 'EN 13432 & ASTM D6400 compliance'),
                    t('seoPages.pages.ryanWong.expertise.item6', 'BPI & TÜV certification guidance'),
                    t('seoPages.pages.ryanWong.expertise.item7', 'Food-contact safe materials'),
                    t('seoPages.pages.ryanWong.expertise.item8', 'Low MOQ sustainable solutions'),
                    t('seoPages.pages.ryanWong.expertise.item9', 'Transition planning from plastic'),
                    t('seoPages.pages.ryanWong.expertise.item10', 'Barrier technology for food products'),
                    t('seoPages.pages.ryanWong.expertise.item11', 'Degassing valves for coffee'),
                    t('seoPages.pages.ryanWong.expertise.item12', 'Stand-up pouch design optimization')
                  ]`;
content = content.replace(expertiseArr, newExpertiseArr);

content = content.replace(
  />Client Success Stories<\/h2>/g,
  ">{t('seoPages.pages.ryanWong.caseStudies.title', 'Client Success Stories')}</h2>"
);
content = content.replace(
  /Bean & Bole Coffee Roastery/g,
  "{t('seoPages.pages.ryanWong.caseStudies.cs1.title', 'Bean & Bole Coffee Roastery')}"
);
content = content.replace(
  />Helped Portland-based specialty roaster switch to EN 13432 certified compostable pouches with degassing valves. Achieved 35% increase in customer satisfaction.<\/p>/g,
  ">{t('seoPages.pages.ryanWong.caseStudies.cs1.desc', 'Helped Portland-based specialty roaster switch to EN 13432 certified compostable pouches with degassing valves. Achieved 35% increase in customer satisfaction.')}</p>"
);
content = content.replace(
  /Milano Botanica Tea/g,
  "{t('seoPages.pages.ryanWong.caseStudies.cs2.title', 'Milano Botanica Tea')}"
);
content = content.replace(
  />Developed compostable window packaging for luxury tea brand. EU PPWR compliant solution increased sales by 28%.<\/p>/g,
  ">{t('seoPages.pages.ryanWong.caseStudies.cs2.desc', 'Developed compostable window packaging for luxury tea brand. EU PPWR compliant solution increased sales by 28%.')}</p>"
);
content = content.replace(
  /Artisan Cocoa Emirates/g,
  "{t('seoPages.pages.ryanWong.caseStudies.cs3.title', 'Artisan Cocoa Emirates')}"
);
content = content.replace(
  />Created heat-resistant recyclable mono-PP pouches for UAE chocolate brand. Gift sales up 55%.<\/p>/g,
  ">{t('seoPages.pages.ryanWong.caseStudies.cs3.desc', 'Created heat-resistant recyclable mono-PP pouches for UAE chocolate brand. Gift sales up 55%.')}</p>"
);

content = content.replace(
  />Recognition<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.recognition.title', 'Recognition')}</h3>"
);
content = content.replace(
  />PolyU Featured Alumni<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.recognition.item.title', 'PolyU Featured Alumni')}</div>"
);
content = content.replace(
  />Young Achievers Program<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.recognition.item.subtitle', 'Young Achievers Program')}</div>"
);
content = content.replace(
  />Recognized for contributions to sustainable packaging innovation<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.recognition.item.desc', 'Recognized for contributions to sustainable packaging innovation')}</div>"
);

content = content.replace(
  />Quick Facts<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.quickFacts.title', 'Quick Facts')}</h3>"
);
content = content.replace(
  />Years Experience<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.quickFacts.fact1', 'Years Experience')}</div>"
);
content = content.replace(
  />Countries Served<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.quickFacts.fact2', 'Countries Served')}</div>"
);
content = content.replace(
  />Minimum Order Qty<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.quickFacts.fact3', 'Minimum Order Qty')}</div>"
);
content = content.replace(
  />Days Rush Production<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.quickFacts.fact4', 'Days Rush Production')}</div>"
);

content = content.replace(
  />Industry Focus<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.industryFocus.title', 'Industry Focus')}</h3>"
);
content = content.replace(
  />☕ Coffee & Espresso<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.industryFocus.item1', '☕ Coffee & Espresso')}</div>"
);
content = content.replace(
  />🍫 Chocolate & Confectionery<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.industryFocus.item2', '🍫 Chocolate & Confectionery')}</div>"
);
content = content.replace(
  />🍵 Tea & Herbal Blends<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.industryFocus.item3', '🍵 Tea & Herbal Blends')}</div>"
);
content = content.replace(
  />📦 Subscription Boxes<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.industryFocus.item4', '📦 Subscription Boxes')}</div>"
);
content = content.replace(
  />🌿 Organic & Natural Products<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.industryFocus.item5', '🌿 Organic & Natural Products')}</div>"
);

content = content.replace(
  />Education & Skills<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.title', 'Education & Skills')}</h3>"
);
content = content.replace(
  />The Hong Kong Polytechnic University<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.uni', 'The Hong Kong Polytechnic University')}</div>"
);
content = content.replace(
  />Honor Degree \(1999-2003\)<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.degree', 'Honor Degree (1999-2003)')}</div>"
);
content = content.replace(
  />Global Supply Chain, Business Administration<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.major', 'Global Supply Chain, Business Administration')}</div>"
);
content = content.replace(
  />Technical Skills:<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.techSkillsTitle', 'Technical Skills:')}</div>"
);
content = content.replace(
  />Adobe Photoshop<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.techSkill1', 'Adobe Photoshop')}</span>"
);
content = content.replace(
  />Adobe Illustrator<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.techSkill2', 'Adobe Illustrator')}</span>"
);
content = content.replace(
  />HP Indigo 20000<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.techSkill3', 'HP Indigo 20000')}</span>"
);
content = content.replace(
  />Supply Chain Mgmt<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.techSkill4', 'Supply Chain Mgmt')}</span>"
);
content = content.replace(
  />Digital Printing<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.techSkill5', 'Digital Printing')}</span>"
);
content = content.replace(
  />Certifications Expertise:<\/div>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.certTitle', 'Certifications Expertise:')}</div>"
);
content = content.replace(
  />EN 13432<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.cert1', 'EN 13432')}</span>"
);
content = content.replace(
  />ASTM D6400<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.cert2', 'ASTM D6400')}</span>"
);
content = content.replace(
  />BPI Certified<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.cert3', 'BPI Certified')}</span>"
);
content = content.replace(
  />TÜV OK Compost<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.education.cert4', 'TÜV OK Compost')}</span>"
);

content = content.replace(
  />Global Network<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.globalNetwork.title', 'Global Network')}</h3>"
);
content = content.replace(
  /<span>🇦🇺<\/span> Australia/g,
  `<span>🇦🇺</span> {t('seoPages.pages.ryanWong.sidebar.globalNetwork.country1', 'Australia')}`
);
content = content.replace(
  /<span>🇨🇦<\/span> Canada/g,
  `<span>🇨🇦</span> {t('seoPages.pages.ryanWong.sidebar.globalNetwork.country2', 'Canada')}`
);
content = content.replace(
  /<span>🇨🇳<\/span> China/g,
  `<span>🇨🇳</span> {t('seoPages.pages.ryanWong.sidebar.globalNetwork.country3', 'China')}`
);
content = content.replace(
  /<span>🇩🇪<\/span> Germany/g,
  `<span>🇩🇪</span> {t('seoPages.pages.ryanWong.sidebar.globalNetwork.country4', 'Germany')}`
);
content = content.replace(
  /<span>🇿🇦<\/span> South Africa/g,
  `<span>🇿🇦</span> {t('seoPages.pages.ryanWong.sidebar.globalNetwork.country5', 'South Africa')}`
);
content = content.replace(
  /<span>🇵🇭<\/span> Philippines/g,
  `<span>🇵🇭</span> {t('seoPages.pages.ryanWong.sidebar.globalNetwork.country6', 'Philippines')}`
);
content = content.replace(
  /<span>🇬🇧<\/span> UK/g,
  `<span>🇬🇧</span> {t('seoPages.pages.ryanWong.sidebar.globalNetwork.country7', 'UK')}`
);
content = content.replace(
  /<span>🇺🇸<\/span> USA/g,
  `<span>🇺🇸</span> {t('seoPages.pages.ryanWong.sidebar.globalNetwork.country8', 'USA')}`
);

content = content.replace(
  />Ready to Go Sustainable\?<\/h3>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.cta.title', 'Ready to Go Sustainable?')}</h3>"
);
content = content.replace(
  />\s*Book a free 30-minute consultation to discuss your packaging needs\.\s*<\/p>/,
  ">\n                  {t('seoPages.pages.ryanWong.sidebar.cta.desc', 'Book a free 30-minute consultation to discuss your packaging needs.')}\n                </p>"
);
content = content.replace(
  />Schedule Meeting<\/span>/g,
  ">{t('seoPages.pages.ryanWong.sidebar.cta.button', 'Schedule Meeting')}</span>"
);


fs.writeFileSync(path, content);
console.log('RyanWongPage.tsx updated.');
