import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Shield, TrendingUp, AlertTriangle, ShieldCheck, Sun, Scissors, FileCheck2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const localTranslations: Record<string, any> = {
  en: {
    badge: "COMMON ISSUES",
    title: "5 Common CR Mylar Bag Problems<br/>(And Solutions)",
    p1Title: "1. Difficult for Adults & Seniors to Open",
    p1Desc: "Many CR bags are too hard for adults to open. Our solution uses ergonomic dual-action zippers requiring cognitive steps rather than brute force.",
    p2Title: "2. Flimsy Zipper Tracks",
    p2Desc: "Cheap zippers break after a few uses. We engineer heavy-duty, self-aligning CR locks tested for hundreds of opening cycles.",
    p3Title: "3. Poor Light & Odor Barrier",
    p3Desc: "Standard bags let UV light and odors escape. We utilize a multi-layered mylar core with aluminum to ensure 100% light block and odor containment.",
    p4Title: "4. Puncture Vulnerability",
    p4Desc: "Sharp contents can easily pierce thin bags. Our 5+ mil thick PET/PE structure provides exceptional puncture resistance.",
    p5Title: "5. Non-Compliant Certifications",
    p5Desc: "Failing compliance tests leads to product recalls. All our CR bags are third-party tested and ASTM D3475 certified."
  },
  es: {
    badge: "PROBLEMAS COMUNES",
    title: "5 Problemas Comunes de las Bolsas Mylar a Prueba de Niños<br/>(Y Soluciones)",
    p1Title: "1. Difícil de Abrir para Adultos y Ancianos",
    p1Desc: "Muchas bolsas CR son demasiado difíciles de abrir para los adultos. Nuestra solución utiliza cremalleras ergonómicas de doble acción que requieren pasos cognitivos en lugar de fuerza bruta.",
    p2Title: "2. Pistas de Cremallera Endebles",
    p2Desc: "Las cremalleras baratas se rompen después de unos pocos usos. Diseñamos cierres CR de alta resistencia y autoalineación probados para cientos de ciclos de apertura.",
    p3Title: "3. Pobre Barrera contra Luz y Olor",
    p3Desc: "Las bolsas estándar dejan escapar la luz UV y los olores. Utilizamos un núcleo de mylar multicapa con aluminio para asegurar un bloqueo de luz del 100% y contención de olores.",
    p4Title: "4. Vulnerabilidad a Pinchazos",
    p4Desc: "Los contenidos afilados pueden perforar fácilmente las bolsas delgadas. Nuestra estructura de PET/PE de más de 5 mil proporciona una resistencia excepcional a los pinchazos.",
    p5Title: "5. Certificaciones No Cumplidas",
    p5Desc: "Fallas en las pruebas de cumplimiento provocan retiros de productos. Todas nuestras bolsas CR son probadas por terceros y están certificadas bajo ASTM D3475."
  },
  fr: {
    badge: "PROBLÈMES COURANTS",
    title: "5 Problèmes Courants des Sacs Mylar à l'Épreuve des Enfants<br/>(Et Solutions)",
    p1Title: "1. Difficile à Ouvrir pour les Adultes et les Personnes Âgées",
    p1Desc: "Beaucoup de sacs CR sont trop durs à ouvrir pour les adultes. Notre solution utilise des fermetures éclair ergonomiques à double action nécessitant des étapes cognitives plutôt que de la force brute.",
    p2Title: "2. Rails de Fermeture Éclair Fragiles",
    p2Desc: "Les fermetures éclair bon marché se cassent après quelques utilisations. Nous concevons des verrous CR robustes et auto-alignants testés pour des centaines de cycles d'ouverture.",
    p3Title: "3. Mauvaise Barrière Contre la Lumière et les Odeurs",
    p3Desc: "Les sacs standard laissent échapper la lumière UV et les odeurs. Nous utilisons un noyau en mylar multicouche avec de l'aluminium pour assurer un blocage total de la lumière et la rétention des odeurs.",
    p4Title: "4. Vulnérabilité aux Perforations",
    p4Desc: "Les contenus tranchants peuvent facilement percer les sacs fins. Notre structure PET/PE de plus de 5 mil offre une résistance exceptionnelle aux perforations.",
    p5Title: "5. Certifications Non Conformes",
    p5Desc: "L'échec des tests de conformité entraîne des rappels de produits. Tous nos sacs CR sont testés par des tiers et certifiés ASTM D3475."
  },
  'zh-TW': {
    badge: "常見問題",
    title: "防兒童開啟麥拉袋的 5 個常見問題<br/>(及解決方案)",
    p1Title: "1. 成人及長者難以開啟",
    p1Desc: "許多防兒童袋對成人來說太難打開。我們的解決方案使用人體工學雙重動作夾鏈，需要認知步驟而不是蠻力。",
    p2Title: "2. 脆弱的夾鏈軌道",
    p2Desc: "廉價夾鏈在使用幾次後就會損壞。我們設計了堅固、自動對齊的 CR 鎖，經過數百次開合測試。",
    p3Title: "3. 阻光與防臭效果差",
    p3Desc: "標準袋會讓紫外線和氣味洩漏。我們使用多層鋁箔麥拉核心，確保 100% 阻光和完全防臭。",
    p4Title: "4. 易被刺破",
    p4Desc: "尖銳物品容易刺破薄袋。我們厚達 5 mil 以上的 PET/PE 結構提供了卓越的防刺穿性能。",
    p5Title: "5. 不符合認證標準",
    p5Desc: "未能通過合規測試會導致產品召回。我們所有的防兒童袋均由第三方測試並獲得 ASTM D3475 認證。"
  }
};

const PouchChildResistantMylarBagsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localT = localTranslations[lang] || localTranslations.en
  
  const CR_METRICS = [
    { label: t('pouchChildResistantMylarBagsPage.engineering.metrics.m1.label'), value: t('pouchChildResistantMylarBagsPage.engineering.metrics.m1.value'), unit: t('pouchChildResistantMylarBagsPage.engineering.metrics.m1.unit'), desc: t('pouchChildResistantMylarBagsPage.engineering.metrics.m1.desc') },
    { label: t('pouchChildResistantMylarBagsPage.engineering.metrics.m2.label'), value: t('pouchChildResistantMylarBagsPage.engineering.metrics.m2.value'), unit: t('pouchChildResistantMylarBagsPage.engineering.metrics.m2.unit'), desc: t('pouchChildResistantMylarBagsPage.engineering.metrics.m2.desc') },
    { label: t('pouchChildResistantMylarBagsPage.engineering.metrics.m3.label'), value: t('pouchChildResistantMylarBagsPage.engineering.metrics.m3.value'), unit: t('pouchChildResistantMylarBagsPage.engineering.metrics.m3.unit'), desc: t('pouchChildResistantMylarBagsPage.engineering.metrics.m3.desc') },
    { label: t('pouchChildResistantMylarBagsPage.engineering.metrics.m4.label'), value: t('pouchChildResistantMylarBagsPage.engineering.metrics.m4.value'), unit: t('pouchChildResistantMylarBagsPage.engineering.metrics.m4.unit'), desc: t('pouchChildResistantMylarBagsPage.engineering.metrics.m4.desc') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchChildResistantMylarBagsPage.meta.title')}</title>
        <meta name="description" content={t('pouchChildResistantMylarBagsPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/child-resistant-mylar`} />
        <meta name="keywords" content={t('pouchChildResistantMylarBagsPage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#991b1b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">{t('pouchChildResistantMylarBagsPage.hero.badge')}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic" dangerouslySetInnerHTML={{ __html: t('pouchChildResistantMylarBagsPage.hero.title') }} />
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t('pouchChildResistantMylarBagsPage.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">{t('pouchChildResistantMylarBagsPage.hero.browse')}</NeoButton>
            <NeoButton variant="secondary" to="/sample">{t('pouchChildResistantMylarBagsPage.hero.order')}</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The CR Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt={t('pouchChildResistantMylarBagsPage.engineering.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t('pouchChildResistantMylarBagsPage.engineering.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchChildResistantMylarBagsPage.engineering.title') }} />
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchChildResistantMylarBagsPage.engineering.p1')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {CR_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Security Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t('pouchChildResistantMylarBagsPage.tech.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16" dangerouslySetInnerHTML={{ __html: t('pouchChildResistantMylarBagsPage.tech.title') }} />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchChildResistantMylarBagsPage.tech.t1.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchChildResistantMylarBagsPage.tech.t1.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchChildResistantMylarBagsPage.tech.t2.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchChildResistantMylarBagsPage.tech.t2.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchChildResistantMylarBagsPage.tech.t3.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchChildResistantMylarBagsPage.tech.t3.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchChildResistantMylarBagsPage.tech.t4.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchChildResistantMylarBagsPage.tech.t4.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t('pouchChildResistantMylarBagsPage.lab.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchChildResistantMylarBagsPage.lab.title') }} />
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchChildResistantMylarBagsPage.lab.p1')}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Shield className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchChildResistantMylarBagsPage.lab.f1_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchChildResistantMylarBagsPage.lab.f1_desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchChildResistantMylarBagsPage.lab.f2_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchChildResistantMylarBagsPage.lab.f2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t('pouchChildResistantMylarBagsPage.lab.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common CR Mylar Bag Problems (And Solutions) */}
      <section className="py-24 bg-neutral-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{localT.badge}</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: localT.title }} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {[
                { title: localT.p1Title, desc: localT.p1Desc, icon: AlertTriangle },
                { title: localT.p2Title, desc: localT.p2Desc, icon: ShieldCheck },
                { title: localT.p3Title, desc: localT.p3Desc, icon: Sun },
                { title: localT.p4Title, desc: localT.p4Desc, icon: Scissors },
                { title: localT.p5Title, desc: localT.p5Desc, icon: FileCheck2 }
              ].map((problem, i) => (
                <div key={i} className="bg-white p-6 border-4 border-black flex gap-6 items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <problem.icon className="w-10 h-10 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black uppercase text-xl mb-2">{problem.title}</h4>
                    <p className="text-gray-700 font-['JetBrains_Mono'] leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/child-resistant-mylar-bags-pain-points.jpg" 
                alt="5 Common Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Safety Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchChildResistantMylarBagsPage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12" dangerouslySetInnerHTML={{ __html: t('pouchChildResistantMylarBagsPage.faq.title') }} />
          <div className="space-y-4">
            {[
              { q: t('pouchChildResistantMylarBagsPage.faq.q1_q'), a: t('pouchChildResistantMylarBagsPage.faq.q1_a') },
              { q: t('pouchChildResistantMylarBagsPage.faq.q2_q'), a: t('pouchChildResistantMylarBagsPage.faq.q2_a') },
              { q: t('pouchChildResistantMylarBagsPage.faq.q3_q'), a: t('pouchChildResistantMylarBagsPage.faq.q3_a') },
              { q: t('pouchChildResistantMylarBagsPage.faq.q4_q'), a: t('pouchChildResistantMylarBagsPage.faq.q4_a') }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t('pouchChildResistantMylarBagsPage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic" dangerouslySetInnerHTML={{ __html: t('pouchChildResistantMylarBagsPage.cta.title') }} />
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('pouchChildResistantMylarBagsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t('pouchChildResistantMylarBagsPage.cta.samples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchChildResistantMylarBagsPage.cta.engineer')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchChildResistantMylarBagsPage
