import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Leaf, Recycle, Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

// Reusing Neo-components for consistency
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

export default function PouchMaterialsPage() {
  const { t } = useTranslation()

  const MATERIALS = [
    {
      id: 'compostable',
      name: t('pouchMaterialsPage.materials.compostable.name'),
      description: t('pouchMaterialsPage.materials.compostable.description'),
      pros: [
        t('pouchMaterialsPage.materials.compostable.pros.0'),
        t('pouchMaterialsPage.materials.compostable.pros.1'),
        t('pouchMaterialsPage.materials.compostable.pros.2'),
        t('pouchMaterialsPage.materials.compostable.pros.3'),
      ],
      cons: [
        t('pouchMaterialsPage.materials.compostable.cons.0'),
        t('pouchMaterialsPage.materials.compostable.cons.1'),
      ],
      icon: Leaf,
      color: 'bg-[#D4FF00]', // Yellow
    },
    {
      id: 'recyclable',
      name: t('pouchMaterialsPage.materials.recyclable.name'),
      description: t('pouchMaterialsPage.materials.recyclable.description'),
      pros: [
        t('pouchMaterialsPage.materials.recyclable.pros.0'),
        t('pouchMaterialsPage.materials.recyclable.pros.1'),
        t('pouchMaterialsPage.materials.recyclable.pros.2'),
      ],
      cons: [
        t('pouchMaterialsPage.materials.recyclable.cons.0'),
        t('pouchMaterialsPage.materials.recyclable.cons.1'),
      ],
      icon: Recycle,
      color: 'bg-[#00FFFF]', // Cyan
    },
    {
      id: 'pcr',
      name: t('pouchMaterialsPage.materials.pcr.name'),
      description: t('pouchMaterialsPage.materials.pcr.description'),
      pros: [
        t('pouchMaterialsPage.materials.pcr.pros.0'),
        t('pouchMaterialsPage.materials.pcr.pros.1'),
        t('pouchMaterialsPage.materials.pcr.pros.2'),
        t('pouchMaterialsPage.materials.pcr.pros.3'),
      ],
      cons: [
        t('pouchMaterialsPage.materials.pcr.cons.0'),
        t('pouchMaterialsPage.materials.pcr.cons.1'),
      ],
      icon: Heart,
      color: 'bg-[#FF00FF]', // Magenta
    }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('pouchMaterialsPage.meta.title')}
        description={t('pouchMaterialsPage.meta.description')}
      />

      {/* Hero Section with Video Background */}
      <section className="relative py-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-materials"
          >
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block bg-black text-white px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform rotate-2">
            {t('pouchMaterialsPage.hero.badge')}
          </div>
          <h1 className="font-black text-5xl md:text-8xl uppercase mb-8 leading-none">
            {t('pouchMaterialsPage.hero.titleLine1')}<br />{t('pouchMaterialsPage.hero.titleLine2')}
          </h1>
          <p className="font-['JetBrains_Mono'] text-xl max-w-2xl mx-auto">
            {t('pouchMaterialsPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Material Grid */}
      <section className="py-24 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {MATERIALS.map((material) => (
              <NeoCard key={material.id} className={`${material.color} flex flex-col h-full`}>
                <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <material.icon className="w-8 h-8" />
                </div>
                <h2 className="font-black text-2xl mb-4 uppercase">{material.name}</h2>
                <p className="font-['Space_Grotesk'] mb-6 flex-grow">{material.description}</p>
                
                <div className="font-['JetBrains_Mono'] text-xs space-y-4 border-t-2 border-black pt-4">
                  <div>
                    <span className="font-bold block mb-1">{t('pouchMaterialsPage.labels.pros')}</span>
                    <ul className="list-disc list-inside">
                      {material.pros.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">{t('pouchMaterialsPage.labels.cons')}</span>
                    <ul className="list-disc list-inside text-gray-600">
                      {material.cons.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs CTA */}
      <section className="py-24 bg-black text-[#D4FF00] border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                 <div className="inline-block bg-[#D4FF00] text-black px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
                    {t('pouchMaterialsPage.techSpecs.badge')}
                 </div>
                 <h2 className="font-black text-4xl md:text-6xl uppercase mb-6 leading-none">
                    {t('pouchMaterialsPage.techSpecs.titleLine1')}<br/>{t('pouchMaterialsPage.techSpecs.titleLine2')}
                 </h2>
                 <p className="font-['Space_Grotesk'] text-xl mb-8 text-white max-w-xl">
                    {t('pouchMaterialsPage.techSpecs.description')}
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <Link to="/tech-specs">
                      <NeoButton variant="primary" className="inline-flex items-center justify-center w-full">
                         {t('pouchMaterialsPage.techSpecs.viewAllSpecs')} <ArrowRight className="w-5 h-5 ml-2" />
                      </NeoButton>
                   </Link>
                   <Link to="/barriers/material-properties">
                      <NeoButton variant="dark" className="inline-flex items-center justify-center w-full bg-black text-[#00FFFF] border-[#00FFFF] hover:shadow-[8px_8px_0px_0px_#00FFFF]">
                         {t('pouchMaterialsPage.techSpecs.barrierData')}
                      </NeoButton>
                   </Link>
                 </div>
              </div>
              <div className="flex-1 w-full relative">
                 <div className="border-4 border-[#D4FF00] p-4 relative rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute -top-6 -left-6 bg-[#00FFFF] border-4 border-black p-4 font-['JetBrains_Mono'] font-bold text-black transform -rotate-6 z-10 shadow-[8px_8px_0px_0px_#D4FF00]">
                       {t('pouchMaterialsPage.techSpecs.downloadBadge')}
                    </div>
                    <img src="/imgs/spec/tech-spec-hero.png" alt={t('pouchMaterialsPage.techSpecs.imgAlt')} className="w-full h-auto border-2 border-[#D4FF00] grayscale hover:grayscale-0 transition-all" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Badges / Certs */}
      <section className="py-24 border-t-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchMaterialsPage.certifications.title')}</h2>
             <Link to="/company/certificates" className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
               <img src="/imgs/cert/cert-din-home-compost.png" alt={t('pouchMaterialsPage.certifications.dinAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/logo-achievepack-BPI.jpg" alt={t('pouchMaterialsPage.certifications.bpiAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ABA-as5810.png" alt={t('pouchMaterialsPage.certifications.abaAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-pcr-grs.webp" alt={t('pouchMaterialsPage.certifications.grsAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-BioPE.webp" alt={t('pouchMaterialsPage.certifications.biopeAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-fsc.png" alt={t('pouchMaterialsPage.certifications.fscAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ISO9001.webp" alt={t('pouchMaterialsPage.certifications.iso9001Alt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ISO14001-cert.webp" alt={t('pouchMaterialsPage.certifications.iso14001Alt')} className="h-24 w-auto object-contain mx-auto" />
             </Link>
          <div className="mt-12">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchMaterialsPage.certifications.speakToExpert')}
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
