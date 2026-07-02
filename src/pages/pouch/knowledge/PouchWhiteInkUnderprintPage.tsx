import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Droplet, Sun, Contrast, AlertTriangle, Eye, Layers, Maximize, Target } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    title: "5 Common White Ink Underprint Problems (And Solutions)",
    p1Title: "1. Dull or Metallic-Looking Colors on Foil",
    p1Desc: "Apply a 100% white ink underprint block beneath the color layer to ensure vibrant, true-to-brand PMS colors.",
    p2Title: "2. Hard-to-Read Text on Transparent Windows",
    p2Desc: "Add a high-density white ink backing behind text elements to provide contrast against the product inside.",
    p3Title: "3. Muddy Gradients on Specialty Substrates",
    p3Desc: "Use a halftone white ink underprint that fades gradually, matching the gradient profile of the top CMYK layer.",
    p4Title: "4. Unscannable Barcodes on Reflective Surfaces",
    p4Desc: "Print a solid white ink block specifically behind the barcode area to create the necessary contrast for infrared scanners.",
    p5Title: "5. White Halos from Misregistration",
    p5Desc: "Implement a slight choke (shrink) on the white underprint layer by 0.1mm - 0.2mm so it stays hidden beneath the top colors."
  },
  'zh-TW': {
    title: "5 個常見的白墨打底問題（及解決方案）",
    p1Title: "1. 鋁箔上的顏色顯得暗淡或金屬感太重",
    p1Desc: "在顏色層下方應用 100% 的白墨打底塊，以確保鮮豔且符合品牌的 PMS 顏色。",
    p2Title: "2. 透明開窗上的文字難以閱讀",
    p2Desc: "在文字元素後面添加高密度的白墨背襯，以與內部產品形成對比。",
    p3Title: "3. 特殊材質上的漸變顯得渾濁",
    p3Desc: "使用逐漸淡出的半色調白墨打底，匹配頂部 CMYK 層的漸變輪廓。",
    p4Title: "4. 反光表面上的條碼無法掃描",
    p4Desc: "專門在條碼區域後面列印實心的白墨塊，為紅外掃描儀創造必要的對比度。",
    p5Title: "5. 套印不準導致的白色光暈",
    p5Desc: "對白墨打底層進行 0.1 毫米至 0.2 毫米的輕微縮邊（choke），使其隱藏在頂層顏色之下。"
  },
  es: {
    title: "5 Problemas Comunes de la Tinta Blanca (Y Soluciones)",
    p1Title: "1. Colores Opacos o Metálicos en Papel Aluminio",
    p1Desc: "Aplique un bloque de impresión inferior de tinta blanca al 100% debajo de la capa de color para garantizar colores PMS vibrantes y fieles a la marca.",
    p2Title: "2. Texto Difícil de Leer en Ventanas Transparentes",
    p2Desc: "Agregue un respaldo de tinta blanca de alta densidad detrás de los elementos de texto para proporcionar contraste contra el producto en el interior.",
    p3Title: "3. Degradados Turbios en Sustratos Especiales",
    p3Desc: "Use una capa base de tinta blanca de medios tonos que se desvanezca gradualmente, coincidiendo con el perfil de degradado de la capa CMYK superior.",
    p4Title: "4. Códigos de Barras no Escaneables en Superficies Reflectantes",
    p4Desc: "Imprima un bloque de tinta blanca sólida específicamente detrás del área del código de barras para crear el contraste necesario para los escáneres infrarrojos.",
    p5Title: "5. Halos Blancos por Falta de Registro",
    p5Desc: "Implemente un ligero estrangulamiento (reducción) en la capa de impresión blanca subyacente de 0.1 mm a 0.2 mm para que permanezca oculta debajo de los colores superiores."
  },
  fr: {
    title: "5 Problèmes Courants d'Impression à l'Encre Blanche (Et Solutions)",
    p1Title: "1. Couleurs Ternes ou Métalliques sur Film",
    p1Desc: "Appliquez un bloc d'impression sous-jacent d'encre blanche à 100 % sous la couche de couleur pour garantir des couleurs PMS vibrantes et fidèles à la marque.",
    p2Title: "2. Texte Difficile à Lire sur des Fenêtres Transparentes",
    p2Desc: "Ajoutez un support d'encre blanche haute densité derrière les éléments textuels pour créer un contraste avec le produit à l'intérieur.",
    p3Title: "3. Dégradés Boueux sur des Substrats Spéciaux",
    p3Desc: "Utilisez une sous-couche d'encre blanche en demi-teinte qui s'estompe progressivement, correspondant au profil de dégradé de la couche CMYK supérieure.",
    p4Title: "4. Codes-Barres Illisibles sur des Surfaces Réfléchissantes",
    p4Desc: "Imprimez un bloc d'encre blanche solide spécifiquement derrière la zone du code-barres pour créer le contraste nécessaire pour les scanners infrarouges.",
    p5Title: "5. Halos Blancs Dus à un Défaut de Repérage",
    p5Desc: "Appliquez un léger rétrécissement (choke) sur la couche d'encre blanche de 0,1 mm à 0,2 mm pour qu'elle reste cachée sous les couleurs supérieures."
  }
}

export default function PouchWhiteInkUnderprintPage() {
  const { t, i18n } = useTranslation();
  const langKey = (i18n.language && i18n.language.startsWith('zh')) ? 'zh-TW' : 
                  (localTranslations[i18n.language as keyof typeof localTranslations] ? i18n.language : 'en');
  const lt = localTranslations[langKey as keyof typeof localTranslations];
  const p = 'seoPages.pages.pouchWhiteInkUnderprint';

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/white-ink-underprint" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-blue-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.tag`)}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.title`)} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleHighlight`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.subtitle`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                   <div className="w-full h-full border-4 border-black relative bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
                      {/* Simulated metallic bag */}
                      <div className="absolute top-1/4 left-1/4 right-1/4 text-center">
                         <h3 className="font-black text-4xl text-red-500 mix-blend-multiply opacity-80">{t(`${p}.hero.card.noWhiteInk`)}</h3>
                      </div>
                      <div className="absolute bottom-1/4 left-1/4 right-1/4 text-center bg-white border-2 border-black p-2">
                         <h3 className="font-black text-4xl text-red-500">{t(`${p}.hero.card.withWhiteInk`)}</h3>
                      </div>
                   </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                    {t(`${p}.hero.card.opacityControl`)}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.content.title`)} <span className="text-blue-500">{t(`${p}.content.titleHighlight`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.content.intro1`)}<strong>{t(`${p}.content.intro2`)}</strong>{t(`${p}.content.intro3`)}
            </p>

            <img 
              src="/imgs/surface/ads/a_metallic_gold_closeup_5151764.webp" 
              alt={t(`${p}.content.imageAlt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.content.ruleOfTransparency.title`)}</h3>
            <p>
              {t(`${p}.content.ruleOfTransparency.p1`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.content.howWhiteInkFixesThis.title`)}</h3>
            <p>
              {t(`${p}.content.howWhiteInkFixesThis.p1`)}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">{t(`${p}.content.howWhiteInkFixesThis.withWhiteTitle`)}</h4>
                  <p className="text-sm">{t(`${p}.content.howWhiteInkFixesThis.withWhiteDesc`)}</p>
               </div>
               <div className="bg-gray-200 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">{t(`${p}.content.howWhiteInkFixesThis.withoutWhiteTitle`)}</h4>
                  <p className="text-sm">{t(`${p}.content.howWhiteInkFixesThis.withoutWhiteDesc`)}</p>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.content.usingWhiteInkCreatively.title`)}</h3>
            <p>
              {t(`${p}.content.usingWhiteInkCreatively.p1`)}
            </p>
            <p>
              {t(`${p}.content.usingWhiteInkCreatively.p2`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.content.howToSetUp.title`)}</h3>
            <p>
              {t(`${p}.content.howToSetUp.p1`)}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {lt.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black flex items-center gap-2">
                   <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                   {lt.p1Title}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{lt.p1Desc}</p>
              </div>
              <div className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black flex items-center gap-2">
                   <Eye className="w-6 h-6 text-blue-500 shrink-0" />
                   {lt.p2Title}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{lt.p2Desc}</p>
              </div>
              <div className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black flex items-center gap-2">
                   <Layers className="w-6 h-6 text-yellow-500 shrink-0" />
                   {lt.p3Title}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{lt.p3Desc}</p>
              </div>
              <div className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black flex items-center gap-2">
                   <Maximize className="w-6 h-6 text-green-500 shrink-0" />
                   {lt.p4Title}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{lt.p4Desc}</p>
              </div>
              <div className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black flex items-center gap-2">
                   <Target className="w-6 h-6 text-purple-500 shrink-0" />
                   {lt.p5Title}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{lt.p5Desc}</p>
              </div>
            </div>
            <div className="sticky top-24">
              <img 
                src="/imgs/knowledge/white-ink-underprint-pain-points.jpg" 
                alt="White ink underprint solutions" 
                className="w-full h-auto object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.title`)} <span className="text-blue-500">{t(`${p}.faq.titleHighlight`)}</span>
          </h2>

          <div className="space-y-6">
            {[0, 1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-blue-500 flex-shrink-0">Q:</span>
                  {t(`${p}.faq.items.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-blue-500">A:</span> {t(`${p}.faq.items.${idx}.a`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/quote" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t(`${p}.cta.button`)} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
