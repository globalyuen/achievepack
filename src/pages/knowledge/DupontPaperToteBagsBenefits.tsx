import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const translations = {
  en: {
    title: "Benefits of DuPont Paper Tote Bags | Custom Tyvek Bags",
    metaDesc: "Discover why DuPont Tyvek paper tote bags are the ultimate sustainable, waterproof, and tear-resistant packaging solution for premium brands.",
    heroTitle: "The Ultimate Guide to DuPont Tyvek Tote Bags",
    heroSubtitle: "Why sustainable, waterproof, and tear-resistant Tyvek bags are revolutionizing retail and corporate packaging.",
    introSummary: "Quick Summary: DuPont Tyvek tote bags combine the premium look and feel of textured paper with the extreme durability of synthetic fabric. Being 100% waterproof, tear-resistant, washable, and recyclable (HDPE #2), they offer the perfect green alternative for premium brands.",
    
    sec1Title: "What is DuPont Tyvek Paper?",
    sec1P1: "DuPont™ Tyvek® is a unique nonwoven material made from high-density polyethylene (HDPE) fibers. While it looks and feels like premium textured paper, it possesses the durability of synthetic fabric. This innovative material has become the gold standard for eco-friendly tote bags and premium retail packaging. Tyvek tote bags combine a minimalist, natural aesthetic with extraordinary physical properties, making them highly sought after by forward-thinking brands.",
    sec1P2: "Unlike traditional paper shopping bags that disintegrate when wet, or cotton canvas bags that require immense amounts of water to produce, DuPont paper tote bags offer the perfect middle ground. They are 100% waterproof, incredibly lightweight, and virtually impossible to tear by hand. Furthermore, they can be washed and reused countless times, eventually softening into a supple, fabric-like texture that customers love.",
    
    painTitle: "5 Major Pain Points Solved by Tyvek Bags",
    pain1p: "1. Paper bags breaking in the rain",
    pain1s: "Tyvek is 100% waterproof. Your customers can carry these bags in a downpour without any risk of structural failure or damage to the contents.",
    pain2p: "2. High environmental footprint of cotton canvas",
    pain2s: "Tyvek is a highly efficient material that requires a fraction of the resources to produce compared to cotton, and it is 100% recyclable (HDPE #2).",
    pain3p: "3. Heavy and bulky packaging storage",
    pain3s: "Tyvek is incredibly lightweight and folds down much thinner than canvas or thick paper, saving significant warehousing space and shipping costs.",
    pain4p: "4. Generic and boring brand presentation",
    pain4s: "The unique texture of Tyvek—whether you choose the smooth finish or the crinkled finish—immediately signals a premium, modern brand identity. It also accepts vibrant custom printing flawlessly.",
    pain5p: "5. Short lifecycle of promotional bags",
    pain5s: "Because they are washable and tear-resistant, customers keep and reuse Tyvek bags for years, maximizing your brand's impressions.",
    
    expertTitle: "From Ryan Wong's Engineering Notebook",
    expertQuote: "\"When we first started engineering our Tyvek tote bags, the main challenge was the stitching. Standard paper bag manufacturing techniques don't apply here because Tyvek behaves more like a fabric. We had to calibrate our sewing machines with specific needle types and thread tensions to prevent micro-tears along the seams. Additionally, for the 'crinkled' texture, we developed a specialized mechanical softening process that gives the bags that sought-after vintage look right out of the box, without compromising the material's waterproof barrier.\"",
    expertBio: "Ryan Wong — Co-Founder & Chief Packaging Engineer",
    
    brandingTitle: "Customization and Branding Opportunities",
    brandingP: "At AchievePack, we offer full customization for our DuPont paper tote bags. Brands can choose between different material weights (measured in GSM), handle types (cotton webbed, PU leather, or Tyvek handles), and printing techniques. Silkscreen printing works beautifully for bold logos, while digital printing allows for full-color photographic designs. We can also add custom woven labels, interior pockets, and magnetic closures to create a truly bespoke retail product.",
    
    faq1q: "Are DuPont Tyvek bags actually waterproof?",
    faq1a: "Yes. Tyvek is inherently waterproof. Water beads up and rolls right off the surface, protecting the contents completely.",
    faq2q: "Can Tyvek bags be washed?",
    faq2a: "Absolutely. Tyvek bags can be hand-washed or wiped down with a damp cloth. Over time and with washing, the material becomes softer and more fabric-like.",
    faq3q: "Is Tyvek eco-friendly and recyclable?",
    faq3a: "Yes. Tyvek is made from high-density polyethylene (HDPE) and is 100% recyclable. It requires fewer resources to produce than cotton canvas and lasts significantly longer than traditional paper.",
    faq4q: "What is the MOQ for custom printed Tyvek bags?",
    faq4a: "Our standard minimum order quantity for custom printed DuPont paper tote bags is typically 500 units, though we can accommodate smaller runs depending on the complexity of the design."
  },
  'zh-TW': {
    title: "杜邦 Tyvek 紙手提袋的好處 | 客製化環保提袋",
    metaDesc: "探索為什麼杜邦 Tyvek 紙提袋是高級品牌在永續、防水與耐撕拉包裝上的終極解決方案。",
    heroTitle: "杜邦 Tyvek 手提袋終極指南",
    heroSubtitle: "為什麼永續、防水且抗撕裂的 Tyvek 提袋正在顛覆零售與企業禮品包裝。",
    introSummary: "快速總結：杜邦 Tyvek 手提袋結合了紙張的高級觸感與合成纖維的強韌度。它們 100% 防水、抗撕裂、可清洗且完全可回收（HDPE #2），為零售和禮品包裝提供了完美的綠色替代方案。",
    
    sec1Title: "什麼是杜邦 Tyvek 紙？",
    sec1P1: "DuPont™ Tyvek® 是一種獨特的非織造材料，由高密度聚乙烯（HDPE）纖維製成。雖然它看起來和摸起來像高級的有紋理紙張，但它具有合成纖維的耐用性。這種創新材料已成為環保手提袋和高級零售包裝的金科玉律。Tyvek 手提袋將極簡、自然的設計美學與防護性能相結合，深受具有遠見的品牌青睞。",
    sec1P2: "與遇水即爛的傳統紙質購物袋或生產過程中消耗大量水的棉質帆布袋不同，杜邦紙手提袋提供了完美的折衷方案。它們 100% 防水、極其輕巧，且幾乎無法用手撕裂。此外，它們可以清洗並重複使用無數次，最終會軟化成客戶喜愛的柔軟、類似布料的質地。",
    
    painTitle: "Tyvek 提袋解決的 5 大包裝痛點",
    pain1p: "1. 紙袋在雨中容易破損",
    pain1s: "Tyvek 具有 100% 的防水性能。您的客戶可以在大雨中攜帶這些袋子，而無需擔心任何結構性損壞或內部物品受損。",
    pain2p: "2. 棉質帆布提袋的環境足跡過高",
    pain2s: "與棉花相比，Tyvek 是一種高效的合成材料，生產過程消耗的資源僅為棉花的一小部分，且 100% 可回收（HDPE 二號塑料）。",
    pain3p: "3. 包裝倉儲沉重且佔空間",
    pain3s: "Tyvek 極其輕便，摺疊後的厚度比帆布或厚紙袋薄得多，可大幅節省倉庫空間和物流成本。",
    pain4p: "4. 品牌形象平庸無奇",
    pain4s: "Tyvek 獨特的紋理——無論是平紋還是揉紋——都能立刻傳達出高端、現代的品牌形象，且完美支持色彩鮮豔的客製化印刷。",
    pain5p: "5. 宣傳袋使用壽命短",
    pain5s: "由於可清洗且抗撕裂，消費者會將 Tyvek 袋子保留並使用數年，從而將您的品牌曝光度最大化。",
    
    expertTitle: "來自 Ryan Wong 的工程筆記",
    expertQuote: "「在我們開始研發 Tyvek 手提袋時，主要的挑戰在於車縫。傳統紙袋的製造技術在這裡不適用，因為 Tyvek 的物理特性更接近布料。我們必須使用特定的針型和線張力來校準縫炎機，以防止沿著縫線處產生微小撕裂。此外，為了呈現備受追捧的揉紋復古效果，我們開發了一種專門的機械揉軟工藝，使袋子在出廠時就擁有復古質感，且完全不損害材料的防水屏障。」",
    expertBio: "Ryan Wong — 聯合創始人兼首席包裝工程師",
    
    brandingTitle: "客製化與品牌推廣機會",
    brandingP: "在 AchievePack，我們為杜邦紙提袋提供全方位客製化服務。品牌可以選擇不同的克重（GSM）、手提帶類型（棉質織帶、PU 皮革或 Tyvek 提手）和印刷技術。網版印刷非常適合醒目的 Logo，而數位印刷則可以實現全彩的照片級設計。我們還可以添加客製化織標、內袋和磁鐵扣，打造出真正專屬的零售產品。",
    
    faq1q: "杜邦 Tyvek 袋子真的防水嗎？",
    faq1a: "是的。Tyvek 具有天然的防水性。水滴會在表面凝結並直接滑落，完全保護袋內物品。",
    faq2q: "Tyvek 手提袋可以清洗嗎？",
    faq2a: "當然可以。Tyvek 袋可以手洗或用濕布擦拭。隨著清洗與使用，材料會變得更柔軟，更像布料觸感。",
    faq3q: "Tyvek 袋環保且可回收嗎？",
    faq3a: "是的。Tyvek 由高密度聚乙烯（HDPE）製成，屬於 2 號回收塑料，100% 可回收。它的生產資源消耗低於棉質帆布，使用壽命也遠超傳統紙張。",
    faq4q: "客製化印刷 Tyvek 袋的起訂量（MOQ）是多少？",
    faq4a: "客製化印刷杜邦紙手提袋的標準起訂量通常為 500 個，根據設計的複雜程度，我們也可以承接更小批量的訂單。"
  },
  es: {
    title: "Beneficios de las Bolsas de Papel DuPont | Bolsas de Tyvek Personalizadas",
    metaDesc: "Descubra por qué las bolsas de papel DuPont Tyvek son la solución sostenible, impermeable y resistente a desgarros definitiva para marcas premium.",
    heroTitle: "Guía Completa de Bolsas de Tyvek DuPont",
    heroSubtitle: "Por qué las bolsas de Tyvek sostenibles, impermeables y resistentes a desgarros están revolucionando el empaque corporativo y minorista.",
    introSummary: "Resumen rápido: Las bolsas de mano DuPont Tyvek combinan el tacto premium del papel con la durabilidad de la tela sintética. Son 100% impermeables, resistentes a desgarros, lavables y 100% reciclables (HDPE #2), ofreciendo la alternativa ecológica perfecta para el comercio minorista y obsequios.",
    
    sec1Title: "¿Qué es el Papel DuPont Tyvek?",
    sec1P1: "DuPont™ Tyvek® es un material no tejido único hecho de fibras de polietileno de alta densidad (HDPE). Aunque se ve y se siente como papel texturizado premium, posee la durabilidad del tejido sintético. Este material innovador se ha convertido en el estándar de oro para bolsas de mano ecológicas y empaques minoristas premium. Las bolsas de mano de Tyvek combinan una estética natural y minimalista con propiedades físicas extraordinarias.",
    sec1P2: "A diferencia de las bolsas de papel tradicionales que se rompen al mojarse, o las bolsas de lona de algodón que requieren cantidades inmensas de agua para producirse, las bolsas de mano de papel DuPont ofrecen el punto medio perfecto. Son 100% impermeables, increíblemente ligeras y casi imposibles de rasgar a mano. Además, se pueden lavar y reutilizar innumerables veces, suavizándose con el tiempo.",
    
    painTitle: "5 Puntos de Dolor Resueltos por las Bolsas de Tyvek",
    pain1p: "1. Bolsas de papel rompiéndose bajo la lluvia",
    pain1s: "Tyvek es 100% impermeable. Sus clientes pueden llevar estas bolsas en un aguacero sin riesgo de daño estructural o daño a los contenidos.",
    pain2p: "2. Huella ambiental extremadamente alta del algodón",
    pain2s: "El Tyvek es un sintético altamente eficiente que requiere una fracción de los recursos para producirse en comparación con el algodón, y es 100% reciclable (HDPE #2).",
    pain3p: "3. Almacenamiento pesado y voluminoso",
    pain3s: "El Tyvek es increíblemente ligero y se pliega mucho más delgado que la lona o el papel grueso, ahorrando espacio de almacenamiento y costos de envío.",
    pain4p: "4. Identidad de marca genérica y aburrida",
    pain4s: "La textura única de Tyvek (lisa o arrugada) transmite instantáneamente una identidad de marca premium y moderna, y acepta impresiones personalizadas impecables.",
    pain5p: "5. Ciclo de vida corto de las bolsas promocionales",
    pain5s: "Dado que son lavables y resistentes a desgarros, los clientes las conservan durante años, maximizando las impresiones de su marca.",
    
    expertTitle: "Del Cuaderno de Ingeniería de Ryan Wong",
    expertQuote: "«Cuando comenzamos a diseñar nuestras bolsas de Tyvek, el principal desafío fue la costura. Las técnicas estándar de fabricación de bolsas de papel no se aplican aquí porque el Tyvek se comporta más como una tela. Tuvimos que calibrar nuestras máquinas de coser con tipos de agujas y tensiones de hilo específicos para evitar microdesgarros. Además, para la textura arrugada, desarrollamos un proceso mecánico especializado de ablandamiento que otorga ese aspecto vintage sin comprometer la barrera impermeable del material.»",
    expertBio: "Ryan Wong — Co-Fundador y Jefe de Ingeniería de Empaques",
    
    brandingTitle: "Oportunidades de Personalización y Marca",
    brandingP: "En AchievePack, ofrecemos personalización completa para nuestras bolsas de mano DuPont. Las marcas pueden elegir entre diferentes pesos de material (GSM), tipos de asas (lona de algodón, cuero PU o asas de Tyvek) y técnicas de impresión. La serigrafía funciona de maravilla para logotipos llamativos, mientras que la impresión digital permite diseños fotográficos a todo color. También podemos agregar etiquetas tejidas personalizadas y cierres magnéticos.",
    
    faq1q: "¿Las bolsas de DuPont Tyvek son realmente impermeables?",
    faq1a: "Sí. El Tyvek es inherentemente impermeable. El agua se desliza de la superficie, protegiendo los contenidos por completo.",
    faq2q: "¿Se pueden lavar las bolsas de Tyvek?",
    faq2a: "Absolutamente. Se pueden lavar a mano o limpiar con un paño húmedo. Con el uso y lavado, el material se vuelve más suave y flexible.",
    faq3q: "¿Es Tyvek ecológico y reciclable?",
    faq3a: "Sí. El Tyvek está hecho de polietileno de alta densidad (HDPE) y es 100% reciclable. Requiere menos recursos que el algodón y dura significativamente más que el papel tradicional.",
    faq4q: "¿Cuál es el pedido mínimo (MOQ) para bolsas impresas?",
    faq4a: "Nuestro pedido mínimo estándar es de 500 unidades, aunque podemos acomodar tiradas menores según la complejidad del diseño."
  },
  fr: {
    title: "Avantages des Sacs Cabas en Papier DuPont | Sacs Tyvek Personnalisés",
    metaDesc: "Découvrez pourquoi les sacs cabas en papier DuPont Tyvek sont la solution d'emballage durable, imperméable et indéchirable ultime pour les marques premium.",
    heroTitle: "Le Guide Ultime des Sacs Cabas DuPont Tyvek",
    heroSubtitle: "Pourquoi les sacs Tyvek durables, imperméables et indéchirables révolutionnent l'emballage de vente au détail et d'entreprise.",
    introSummary: "Résumé rapide : Les sacs cabas DuPont Tyvek combinent l'aspect et le toucher haut de gamme du papier texturé avec la durabilité extrême du tissu synthétique. 100% imperméables, indéchirables, lavables et recyclables (HDPE #2), ils offrent la parfaite alternative écologique.",
    
    sec1Title: "Qu'est-ce que le Papier DuPont Tyvek ?",
    sec1P1: "Le DuPont™ Tyvek® est un matériau non tissé unique fabriqué à partir de fibres de polyéthylène haute densité (HDPE). Bien qu'il ressemble à du papier texturé de qualité supérieure, il possède la durabilité d'un tissu synthétique. Ce matériau innovant est devenu la référence absolue pour les sacs cabas écologiques et les emballages de vente au détail haut de gamme. Les sacs cabas Tyvek associent une esthétique minimaliste et naturelle à des propriétés physiques extraordinaires.",
    sec1P2: "Contrairement aux sacs en papier traditionnels qui se désintègrent lorsqu'ils sont mouillés, ou aux sacs en toile de coton qui nécessitent d'immenses quantités d'eau pour être produits, les sacs cabas en papier DuPont offrent le compromis parfait. Ils sont 100% imperméables, incroyablement légers et pratiquement impossibles à déchirer à la main. De plus, ils peuvent être lavés et réutilisés d'innombrables fois.",
    
    painTitle: "5 Problèmes Majeurs Résolus par les Sacs Tyvek",
    pain1p: "1. Sacs en papier qui se déchirent sous la pluie",
    pain1s: "Le Tyvek est 100% imperméable. Vos clients peuvent transporter ces sacs sous une averse sans aucun risque de défaillance structurelle.",
    pain2p: "2. Empreinte environnementale élevée de la toile de coton",
    pain2s: "Le Tyvek est un matériau hautement efficace qui nécessite une fraction des ressources de production du coton, et est 100% recyclable (HDPE #2).",
    pain3p: "3. Stockage d'emballage lourd et encombrant",
    pain3s: "Le Tyvek est incroyablement léger et se plie de manière beaucoup plus fine que la toile ou le papier épais, réduisant les coûts de stockage et d'expédition.",
    pain4p: "4. Présentation de marque générique et ennuyeuse",
    pain4s: "La texture unique du Tyvek (lisse ou froissée) signale immédiatement une identité de marque moderne et haut de gamme, et permet des impressions personnalisées vibrantes.",
    pain5p: "5. Cycle de vie court des sacs promotionnels",
    pain5s: "Parce qu'ils sont lavables et indéchirables, les clients conservent et réutilisent les sacs Tyvek pendant des années, maximisant la visibilité de la marque.",
    
    expertTitle: "Extrait du Carnet d'Ingénierie de Ryan Wong",
    expertQuote: "\"Lorsque nous avons commencé à concevoir nos sacs cabas Tyvek, le principal défi résidait dans la couture. Les techniques de fabrication classiques des sacs en papier ne s'appliquent pas ici, le Tyvek se comportant davantage comme un tissu. Nous avons dû calibrer nos machines à coudre avec des types d'aiguilles et des tensions de fil spécifiques pour éviter les micro-déchirures. De plus, pour obtenir la texture froissée, nous avons développé un procédé d'assouplissement mécanique spécialisé pour donner ce look vintage sans compromettre l'étanchéité du matériau.\"",
    expertBio: "Ryan Wong — Co-fondateur & Ingénieur Principal en Emballage",
    
    brandingTitle: "Possibilités de Personnalisation et de Branding",
    brandingP: "Chez AchievePack, nous proposons une personnalisation complète pour nos sacs cabas en papier DuPont. Les marques peuvent choisir parmi différents grammages (GSM), types de poignées (toile de coton, cuir PU ou poignées Tyvek) et techniques d'impression. La sérigraphie est idéale pour les logos simples, tandis que l'impression numérique permet des motifs photographiques en couleur. Nous pouvons également ajouter des étiquettes tissées personnalisées et des fermetures magnétiques.",
    
    faq1q: "Les sacs DuPont Tyvek sont-ils vraiment imperméables ?",
    faq1a: "Oui. Le Tyvek est intrinsèquement imperméable. L'eau perle et glisse sur la surface, protégeant ainsi le contenu.",
    faq2q: "Les sacs Tyvek peuvent-ils être lavés ?",
    faq2a: "Absolument. Ils peuvent être lavés à la main ou essuyés avec un chiffon humide. Avec le temps et les lavages, le matériau devient plus doux.",
    faq3q: "Le Tyvek est-il écologique et recyclable ?",
    faq3a: "Oui. Le Tyvek est fabriqué en polyéthylène haute densité (HDPE) et est 100% recyclable. Sa production consomme moins de ressources que celle du coton et sa durabilité est bien supérieure.",
    faq4q: "Quel est le MOQ pour les sacs Tyvek personnalisés ?",
    faq4a: "Notre quantité minimale de commande standard est de 500 unités, bien que nous puissions réaliser des séries plus petites selon la complexité du design."
  }
};

export default function DupontPaperToteBagsBenefits() {
  const { i18n } = useTranslation();
  const langKey = (i18n.language && i18n.language.startsWith('zh')) ? 'zh-TW' : 
                  (translations[i18n.language as keyof typeof translations] ? i18n.language : 'en');
  const tObj = translations[langKey as keyof typeof translations];

  const heroImageUrl = '/imgs/knowledge/dupont_tote_hero.jpg';
  const featureImageUrl = '/imgs/knowledge/dupont_tote_feature.jpg';
  const lifestyleImageUrl = '/imgs/knowledge/dupont_tote_lifestyle.jpg';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": tObj.title,
    "description": tObj.metaDesc,
    "author": {
      "@type": "Person",
      "name": "Ryan Wong"
    }
  };

  const sections = [
    {
      id: 'introduction',
      title: tObj.sec1Title,
      content: (
        <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">
          <p>{tObj.sec1P1}</p>
          <img src={heroImageUrl} alt="Stylish Dupont Tyvek paper tote bag" className="rounded-2xl shadow-xl w-full object-cover my-6" />
          <p>{tObj.sec1P2}</p>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tObj.painTitle,
      content: (
        <div className="space-y-6 my-8">
          {[
            { num: '01', problem: tObj.pain1p, solution: tObj.pain1s },
            { num: '02', problem: tObj.pain2p, solution: tObj.pain2s },
            { num: '03', problem: tObj.pain3p, solution: tObj.pain3s },
            { num: '04', problem: tObj.pain4p, solution: tObj.pain4s },
            { num: '05', problem: tObj.pain5p, solution: tObj.pain5s }
          ].map((item) => (
            <div key={item.num} className="bg-neutral-900 text-white rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-6xl font-black font-mono">{item.num}</span>
              </div>
              <h4 className="text-lg font-bold mb-3 pr-12 text-white">{item.problem}</h4>
              <div className="bg-neutral-800 rounded-lg p-4 border-l-4 border-emerald-500">
                <p className="text-neutral-300 text-sm leading-relaxed m-0"><strong className="text-emerald-400">Solution: </strong>{item.solution}</p>
              </div>
            </div>
          ))}
          <img src={featureImageUrl} alt="Unique crinkled Tyvek texture close-up" className="rounded-2xl shadow-xl w-full object-cover my-6" />
        </div>
      )
    },
    {
      id: 'engineering-notebook',
      title: tObj.expertTitle,
      content: (
        <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 my-8">
          <p className="italic text-neutral-700 dark:text-neutral-300 mb-4">{tObj.expertQuote}</p>
          <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 m-0">— {tObj.expertBio}</p>
        </div>
      )
    },
    {
      id: 'branding',
      title: tObj.brandingTitle,
      content: (
        <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">
          <p>{tObj.brandingP}</p>
          <img src={lifestyleImageUrl} alt="Printed Dupont paper tote bag lifestyle view" className="rounded-2xl shadow-xl w-full object-cover my-6" />
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>{tObj.title} | Achieve Pack</title>
        <meta name="description" content={tObj.metaDesc} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      
      <div className="sr-only">
        AchievePack offers premium DuPont Tyvek paper tote bags. These washable kraft paper shopping bags are 100% waterproof, tear-resistant, and perfect for custom logo eco bags. Ideal for fashion, retail, and corporate gifting. We provide low MOQs and global shipping.
      </div>

      <SEOPageLayout
        title={tObj.title}
        description={tObj.metaDesc}
        keywords="DuPont paper bags, Tyvek tote bags, washable kraft paper, waterproof eco bags, sustainable packaging"
        heroTitle={tObj.heroTitle}
        heroSubtitle={tObj.heroSubtitle}
        introSummary={tObj.introSummary}
        sections={sections}
        faqs={[
          { question: tObj.faq1q, answer: tObj.faq1a },
          { question: tObj.faq2q, answer: tObj.faq2a },
          { question: tObj.faq3q, answer: tObj.faq3a },
          { question: tObj.faq4q, answer: tObj.faq4a }
        ]}
        tables={[
          {
            title: 'Tyvek Bag Specifications',
            data: {
              headers: ['Feature', 'Specification', 'Benefit'],
              rows: [
                ['Material', 'DuPont™ Tyvek® (HDPE)', 'Durable, lightweight, and recyclable.'],
                ['Water Resistance', '100% Waterproof', 'Protects contents in all weather conditions.'],
                ['Tear Strength', 'Extremely High', 'Cannot be torn by hand; supports heavy loads.'],
                ['Textures', 'Smooth or Crinkled', 'Allows for precise brand alignment.'],
                ['Printability', 'Silkscreen, Digital, UV', 'Vibrant, long-lasting custom branding.']
              ]
            }
          }
        ]}
      />
    </>
  );
}