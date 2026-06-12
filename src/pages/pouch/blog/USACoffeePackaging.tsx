import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Link } from 'react-router-dom'
import { Shield, MapPin, DollarSign, CheckCircle, TrendingUp, Package, Leaf, Wind, Lock, Droplets, Building2, Coffee } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function USACoffeePackaging() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'why-us-roasters',
      title: t('usaCoffeePackaging.sections.why-us-roasters.title'),
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900">
            {t('usaCoffeePackaging.sections.why-us-roasters.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4">{t('usaCoffeePackaging.sections.why-us-roasters.shiftTitle')}</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('usaCoffeePackaging.sections.why-us-roasters.shiftList.0')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('usaCoffeePackaging.sections.why-us-roasters.shiftList.1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('usaCoffeePackaging.sections.why-us-roasters.shiftList.2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('usaCoffeePackaging.sections.why-us-roasters.shiftList.3')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-8 border-amber-600 p-6">
            <h4 className="font-black text-2xl uppercase mb-3 text-amber-900">
              {t('usaCoffeePackaging.sections.why-us-roasters.freshnessTitle')}
            </h4>
            <p className="text-lg mb-3">
              {t('usaCoffeePackaging.sections.why-us-roasters.freshnessP')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white border-4 border-black p-4">
                <Droplets className="w-8 h-8 mb-2 text-amber-600" />
                <h5 className="font-black uppercase mb-2">{t('usaCoffeePackaging.sections.why-us-roasters.barriers.oxygen.title')}</h5>
                <p className="text-sm">{t('usaCoffeePackaging.sections.why-us-roasters.barriers.oxygen.desc')}</p>
              </div>
              <div className="bg-white border-4 border-black p-4">
                <Wind className="w-8 h-8 mb-2 text-amber-600" />
                <h5 className="font-black uppercase mb-2"><Link to="/blog/coffee-degassing-valve-guide" className="hover:underline">{t('usaCoffeePackaging.sections.why-us-roasters.barriers.valve.title')}</Link></h5>
                <p className="text-sm">{t('usaCoffeePackaging.sections.why-us-roasters.barriers.valve.desc')}</p>
              </div>
              <div className="bg-white border-4 border-black p-4">
                <Lock className="w-8 h-8 mb-2 text-amber-600" />
                <h5 className="font-black uppercase mb-2">{t('usaCoffeePackaging.sections.why-us-roasters.barriers.zipper.title')}</h5>
                <p className="text-sm">{t('usaCoffeePackaging.sections.why-us-roasters.barriers.zipper.desc')}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="font-black text-xl uppercase mb-3 text-green-600">{t('usaCoffeePackaging.sections.why-us-roasters.pros.title')}</h4>
              <ul className="space-y-2 text-sm">
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.pros.items.0')}</li>
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.pros.items.1')}</li>
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.pros.items.2')}</li>
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.pros.items.3')}</li>
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.pros.items.4')}</li>
              </ul>
            </div>
            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="font-black text-xl uppercase mb-3 text-red-600">{t('usaCoffeePackaging.sections.why-us-roasters.cons.title')}</h4>
              <ul className="space-y-2 text-sm">
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.cons.items.0')}</li>
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.cons.items.1')}</li>
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.cons.items.2')}</li>
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.cons.items.3')}</li>
                <li>• {t('usaCoffeePackaging.sections.why-us-roasters.cons.items.4')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'state-compliance',
      title: t('usaCoffeePackaging.sections.state-compliance.title'),
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold">
            {t('usaCoffeePackaging.sections.state-compliance.p1')}
          </p>

          <div className="bg-blue-50 border-l-8 border-blue-600 p-6">
            <h4 className="font-black text-2xl uppercase mb-3 text-blue-900 flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              {t('usaCoffeePackaging.sections.state-compliance.california.title')}
            </h4>
            <div className="space-y-3">
              <p className="text-lg">
                <strong>{t('usaCoffeePackaging.sections.state-compliance.california.p').split('.')[0]}.</strong>{t('usaCoffeePackaging.sections.state-compliance.california.p').split('.').slice(1).join('.')}
              </p>
              <div className="bg-white border-2 border-blue-600 p-4">
                <h5 className="font-black uppercase mb-2">{t('usaCoffeePackaging.sections.state-compliance.california.mustTitle')}</h5>
                <ul className="space-y-2 text-sm">
                  <li>✓ {t('usaCoffeePackaging.sections.state-compliance.california.mustList.0')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.state-compliance.california.mustList.1')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.state-compliance.california.mustList.2')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.state-compliance.california.mustList.3')}</li>
                </ul>
              </div>
              <div className="bg-red-50 border-2 border-red-600 p-4">
                <h5 className="font-black uppercase mb-2 text-red-800">{t('usaCoffeePackaging.sections.state-compliance.california.fineTitle')}</h5>
                <ul className="space-y-2 text-sm">
                  <li>✗ {t('usaCoffeePackaging.sections.state-compliance.california.fineList.0')}</li>
                  <li>✗ {t('usaCoffeePackaging.sections.state-compliance.california.fineList.1')}</li>
                  <li>✗ {t('usaCoffeePackaging.sections.state-compliance.california.fineList.2')}</li>
                  <li><strong className="text-red-700">{t('usaCoffeePackaging.sections.state-compliance.california.fineList.3')}</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-8 border-green-600 p-6">
            <h4 className="font-black text-2xl uppercase mb-3 text-green-900 flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              {t('usaCoffeePackaging.sections.state-compliance.washington.title')}
            </h4>
            <p className="mb-3">
              {t('usaCoffeePackaging.sections.state-compliance.washington.p')}
            </p>
            <ul className="space-y-2">
              <li>• {t('usaCoffeePackaging.sections.state-compliance.washington.list.0')}</li>
              <li>• {t('usaCoffeePackaging.sections.state-compliance.washington.list.1')}</li>
              <li>• {t('usaCoffeePackaging.sections.state-compliance.washington.list.2')}</li>
              <li>• {t('usaCoffeePackaging.sections.state-compliance.washington.list.3')}</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-8 border-amber-600 p-6">
            <h4 className="font-black text-2xl uppercase mb-3 text-amber-900 flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              {t('usaCoffeePackaging.sections.state-compliance.colorado.title')}
            </h4>
            <p className="mb-3">
              {t('usaCoffeePackaging.sections.state-compliance.colorado.p')}
            </p>
            <ul className="space-y-2">
              <li>• {t('usaCoffeePackaging.sections.state-compliance.colorado.list.0')}</li>
              <li>• {t('usaCoffeePackaging.sections.state-compliance.colorado.list.1')}</li>
              <li>• {t('usaCoffeePackaging.sections.state-compliance.colorado.list.2')}</li>
              <li>• {t('usaCoffeePackaging.sections.state-compliance.colorado.list.3')}</li>
            </ul>
          </div>

          <div className="bg-[#00FFFF] border-4 border-black p-6">
            <h4 className="font-black text-2xl uppercase mb-3">{t('usaCoffeePackaging.sections.state-compliance.compliantSection.title')}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-4">
                <CheckCircle className="w-6 h-6 mb-2 text-green-600" />
                <h5 className="font-bold mb-2"><Link to="/industry/coffee-tea" className="hover:underline">{t('usaCoffeePackaging.sections.state-compliance.compliantSection.compostable.title')}</Link></h5>
                <p className="text-sm">{t('usaCoffeePackaging.sections.state-compliance.compliantSection.compostable.desc')}</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <CheckCircle className="w-6 h-6 mb-2 text-blue-600" />
                <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.state-compliance.compliantSection.recyclable.title')}</h5>
                <p className="text-sm">{t('usaCoffeePackaging.sections.state-compliance.compliantSection.recyclable.desc')}</p>
              </div>
            </div>
            <p className="mt-4 text-sm font-bold">
              {t('usaCoffeePackaging.sections.state-compliance.compliantSection.auditReady')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'material-options',
      title: t('usaCoffeePackaging.sections.material-options.title'),
      icon: <Leaf className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            {t('usaCoffeePackaging.sections.material-options.p1')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-4 border-green-600 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-2xl uppercase mb-4 flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                {t('usaCoffeePackaging.sections.material-options.compostableCard.title')}
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.compostableCard.structureTitle')}</h5>
                  <p className="text-sm">{t('usaCoffeePackaging.sections.material-options.compostableCard.structureDesc')}</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.compostableCard.certsTitle')}</h5>
                  <p className="text-sm">{t('usaCoffeePackaging.sections.material-options.compostableCard.certsDesc')}</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.compostableCard.barrierTitle')}</h5>
                  <p className="text-sm">{t('usaCoffeePackaging.sections.material-options.compostableCard.barrierDesc')}</p>
                  <p className="text-xs text-neutral-600 mt-1">{t('usaCoffeePackaging.sections.material-options.compostableCard.shelfLife')}</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.compostableCard.bestTitle')}</h5>
                  <ul className="text-sm space-y-1">
                    <li>• {t('usaCoffeePackaging.sections.material-options.compostableCard.bestList.0')}</li>
                    <li>• {t('usaCoffeePackaging.sections.material-options.compostableCard.bestList.1')}</li>
                    <li>• {t('usaCoffeePackaging.sections.material-options.compostableCard.bestList.2')}</li>
                    <li>• {t('usaCoffeePackaging.sections.material-options.compostableCard.bestList.3')}</li>
                  </ul>
                </div>
                
                <div className="bg-white border-2 border-green-600 p-3">
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.compostableCard.priceTitle')}</h5>
                  <p className="text-lg font-black text-green-700">{t('usaCoffeePackaging.sections.material-options.compostableCard.priceVal')}</p>
                  <p className="text-xs">{t('usaCoffeePackaging.sections.material-options.compostableCard.priceDesc')}</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2 text-green-700">{t('usaCoffeePackaging.sections.material-options.compostableCard.prosTitle')}</h5>
                  <ul className="text-sm space-y-1">
                    <li>✓ {t('usaCoffeePackaging.sections.material-options.compostableCard.prosList.0')}</li>
                    <li>✓ {t('usaCoffeePackaging.sections.material-options.compostableCard.prosList.1')}</li>
                    <li>✓ {t('usaCoffeePackaging.sections.material-options.compostableCard.prosList.2')}</li>
                    <li>✓ {t('usaCoffeePackaging.sections.material-options.compostableCard.prosList.3')}</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2 text-red-700">{t('usaCoffeePackaging.sections.material-options.compostableCard.consTitle')}</h5>
                  <ul className="text-sm space-y-1">
                    <li>✗ {t('usaCoffeePackaging.sections.material-options.compostableCard.consList.0')}</li>
                    <li>✗ {t('usaCoffeePackaging.sections.material-options.compostableCard.consList.1')}</li>
                    <li>✗ {t('usaCoffeePackaging.sections.material-options.compostableCard.consList.2')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-4 border-blue-600 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-2xl uppercase mb-4 flex items-center gap-2">
                <Package className="w-6 h-6" />
                {t('usaCoffeePackaging.sections.material-options.recyclableCard.title')}
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.recyclableCard.structureTitle')}</h5>
                  <p className="text-sm">{t('usaCoffeePackaging.sections.material-options.recyclableCard.structureDesc')}</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.recyclableCard.certsTitle')}</h5>
                  <p className="text-sm">{t('usaCoffeePackaging.sections.material-options.recyclableCard.certsDesc')}</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.recyclableCard.barrierTitle')}</h5>
                  <p className="text-sm">{t('usaCoffeePackaging.sections.material-options.recyclableCard.barrierDesc')}</p>
                  <p className="text-xs text-neutral-600 mt-1">{t('usaCoffeePackaging.sections.material-options.recyclableCard.shelfLife')}</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.recyclableCard.bestTitle')}</h5>
                  <ul className="text-sm space-y-1">
                    <li>• {t('usaCoffeePackaging.sections.material-options.recyclableCard.bestList.0')}</li>
                    <li>• {t('usaCoffeePackaging.sections.material-options.recyclableCard.bestList.1')}</li>
                    <li>• {t('usaCoffeePackaging.sections.material-options.recyclableCard.bestList.2')}</li>
                    <li>• {t('usaCoffeePackaging.sections.material-options.recyclableCard.bestList.3')}</li>
                  </ul>
                </div>
                
                <div className="bg-white border-2 border-blue-600 p-3">
                  <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.material-options.recyclableCard.priceTitle')}</h5>
                  <p className="text-lg font-black text-blue-700">{t('usaCoffeePackaging.sections.material-options.recyclableCard.priceVal')}</p>
                  <p className="text-xs">{t('usaCoffeePackaging.sections.material-options.recyclableCard.priceDesc')}</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2 text-green-700">{t('usaCoffeePackaging.sections.material-options.recyclableCard.prosTitle')}</h5>
                  <ul className="text-sm space-y-1">
                    <li>✓ {t('usaCoffeePackaging.sections.material-options.recyclableCard.prosList.0')}</li>
                    <li>✓ {t('usaCoffeePackaging.sections.material-options.recyclableCard.prosList.1')}</li>
                    <li>✓ {t('usaCoffeePackaging.sections.material-options.recyclableCard.prosList.2')}</li>
                    <li>✓ {t('usaCoffeePackaging.sections.material-options.recyclableCard.prosList.3')}</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2 text-red-700">{t('usaCoffeePackaging.sections.material-options.recyclableCard.consTitle')}</h5>
                  <ul className="text-sm space-y-1">
                    <li>✗ {t('usaCoffeePackaging.sections.material-options.recyclableCard.consList.0')}</li>
                    <li>✗ {t('usaCoffeePackaging.sections.material-options.recyclableCard.consList.1')}</li>
                    <li>✗ {t('usaCoffeePackaging.sections.material-options.recyclableCard.consList.2')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-4 bg-[#D4FF00] inline-block px-2">{t('usaCoffeePackaging.sections.material-options.table.title')}</h4>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-black bg-[#F0F0F0]">
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('usaCoffeePackaging.sections.material-options.table.headers.0')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('usaCoffeePackaging.sections.material-options.table.headers.1')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold text-sm">{t('usaCoffeePackaging.sections.material-options.table.headers.2')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCoffeePackaging.sections.material-options.table.rows.0.0')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.0.1')}</td>
                    <td className="p-3 text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.0.2')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCoffeePackaging.sections.material-options.table.rows.1.0')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.1.1')}</td>
                    <td className="p-3 text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.1.2')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCoffeePackaging.sections.material-options.table.rows.2.0')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.2.1')}</td>
                    <td className="p-3 text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.2.2')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCoffeePackaging.sections.material-options.table.rows.3.0')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.3.1')}</td>
                    <td className="p-3 text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.3.2')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCoffeePackaging.sections.material-options.table.rows.4.0')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.4.1')}</td>
                    <td className="p-3 text-sm">{t('usaCoffeePackaging.sections.material-options.table.rows.4.2')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-3xl uppercase mb-4">{t('usaCoffeePackaging.sections.material-options.decision.title')}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold mb-3">{t('usaCoffeePackaging.sections.material-options.decision.compostable.title')}</h5>
                <ul className="space-y-2 text-sm">
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.compostable.list.0')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.compostable.list.1')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.compostable.list.2')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.compostable.list.3')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.compostable.list.4')}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-3">{t('usaCoffeePackaging.sections.material-options.decision.recyclable.title')}</h5>
                <ul className="space-y-2 text-sm">
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.recyclable.list.0')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.recyclable.list.1')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.recyclable.list.2')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.recyclable.list.3')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.material-options.decision.recyclable.list.4')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="https://pouch.eco/products"
              className="inline-flex items-center justify-center gap-3 bg-black text-[#D4FF00] px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-[#D4FF00] hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Coffee className="w-5 h-5" />
              {t('usaCoffeePackaging.sections.material-options.buttons.shop')}
            </a>
            <a 
              href="https://achievepack.com/usa/coffee-packaging"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#00FFFF] text-black px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-black hover:text-[#00FFFF] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Building2 className="w-5 h-5" />
              {t('usaCoffeePackaging.sections.material-options.buttons.wholesale')}
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'pricing-moq',
      title: t('usaCoffeePackaging.sections.pricing-moq.title'),
      icon: <DollarSign className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold">
            {t('usaCoffeePackaging.sections.pricing-moq.p1')}
          </p>

          <div className="bg-[#00FFFF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-3xl uppercase mb-6">{t('usaCoffeePackaging.sections.pricing-moq.matrix.title')}</h4>
            
            <table className="w-full text-left border-4 border-black">
              <thead>
                <tr className="bg-black text-[#00FFFF]">
                  <th className="py-3 px-4 font-['JetBrains_Mono'] border-r-2 border-[#00FFFF]">{t('usaCoffeePackaging.sections.pricing-moq.matrix.headers.0')}</th>
                  <th className="py-3 px-4 border-r-2 border-[#00FFFF]">{t('usaCoffeePackaging.sections.pricing-moq.matrix.headers.1')}</th>
                  <th className="py-3 px-4 border-r-2 border-[#00FFFF]">{t('usaCoffeePackaging.sections.pricing-moq.matrix.headers.2')}</th>
                  <th className="py-3 px-4">{t('usaCoffeePackaging.sections.pricing-moq.matrix.headers.3')}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t-4 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.0.0')}</td>
                  <td className="py-3 px-4 border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.0.1')}</td>
                  <td className="py-3 px-4 border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.0.2')}</td>
                  <td className="py-3 px-4">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.0.3')}</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.1.0')}</td>
                  <td className="py-3 px-4 border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.1.1')}</td>
                  <td className="py-3 px-4 border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.1.2')}</td>
                  <td className="py-3 px-4">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.1.3')}</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.2.0')}</td>
                  <td className="py-3 px-4 border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.2.1')}</td>
                  <td className="py-3 px-4 border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.2.2')}</td>
                  <td className="py-3 px-4">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.2.3')}</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.3.0')}</td>
                  <td className="py-3 px-4 text-green-600 font-bold border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.3.1')}</td>
                  <td className="py-3 px-4 text-green-600 font-bold border-r-2 border-black">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.3.2')}</td>
                  <td className="py-3 px-4">{t('usaCoffeePackaging.sections.pricing-moq.matrix.rows.3.3')}</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 bg-white border-4 border-black p-4">
              <h5 className="font-black uppercase mb-3">{t('usaCoffeePackaging.sections.pricing-moq.factors.title')}</h5>
              <ul className="space-y-2 text-sm">
                <li>• {t('usaCoffeePackaging.sections.pricing-moq.factors.list.0')}</li>
                <li>• {t('usaCoffeePackaging.sections.pricing-moq.factors.list.1')}</li>
                <li>• {t('usaCoffeePackaging.sections.pricing-moq.factors.list.2')}</li>
                <li>• {t('usaCoffeePackaging.sections.pricing-moq.factors.list.3')}</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="font-black text-xl uppercase mb-4">{t('usaCoffeePackaging.sections.pricing-moq.included.title')}</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.included.list.0')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.included.list.1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.included.list.2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.included.list.3')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.included.list.4')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.included.list.5')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.included.list.6')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="font-black text-xl uppercase mb-4">{t('usaCoffeePackaging.sections.pricing-moq.addons.title')}</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">{t('usaCoffeePackaging.sections.pricing-moq.addons.list.0.0')}</span>
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.addons.list.0.1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">{t('usaCoffeePackaging.sections.pricing-moq.addons.list.1.0')}</span>
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.addons.list.1.1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">{t('usaCoffeePackaging.sections.pricing-moq.addons.list.2.0')}</span>
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.addons.list.2.1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">{t('usaCoffeePackaging.sections.pricing-moq.addons.list.3.0')}</span>
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.addons.list.3.1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">{t('usaCoffeePackaging.sections.pricing-moq.addons.list.4.0')}</span>
                  <span>{t('usaCoffeePackaging.sections.pricing-moq.addons.list.4.1')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-8 border-amber-600 p-6">
            <h4 className="font-black text-2xl uppercase mb-3">{t('usaCoffeePackaging.sections.pricing-moq.process.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-black text-[#D4FF00] w-10 h-10 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <h5 className="font-bold mb-1">{t('usaCoffeePackaging.sections.pricing-moq.process.steps.0.title')}</h5>
                  <p className="text-sm text-neutral-700">{t('usaCoffeePackaging.sections.pricing-moq.process.steps.0.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-black text-[#D4FF00] w-10 h-10 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <h5 className="font-bold mb-1">{t('usaCoffeePackaging.sections.pricing-moq.process.steps.1.title')}</h5>
                  <p className="text-sm text-neutral-700">{t('usaCoffeePackaging.sections.pricing-moq.process.steps.1.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-black text-[#D4FF00] w-10 h-10 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <h5 className="font-bold mb-1">{t('usaCoffeePackaging.sections.pricing-moq.process.steps.2.title')}</h5>
                  <p className="text-sm text-neutral-700">{t('usaCoffeePackaging.sections.pricing-moq.process.steps.2.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: t('usaCoffeePackaging.sections.case-study.title'),
      icon: <Coffee className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-black text-[#D4FF00] px-4 py-2 font-['JetBrains_Mono'] font-bold uppercase transform -rotate-2">
                {t('usaCoffeePackaging.sections.case-study.resultsBadge')}
              </div>
            </div>
            
            <blockquote className="text-xl italic text-neutral-800 mb-6 border-l-4 border-amber-600 pl-6">
              {t('usaCoffeePackaging.sections.case-study.quote')}
            </blockquote>
            
            <p className="font-bold text-lg text-neutral-900">
              {t('usaCoffeePackaging.sections.case-study.author')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-4xl font-black text-green-600 mb-2">{t('usaCoffeePackaging.sections.case-study.stats.0.0')}</div>
              <div className="text-sm font-bold uppercase">{t('usaCoffeePackaging.sections.case-study.stats.0.1')}</div>
              <div className="text-xs text-neutral-600 mt-2">{t('usaCoffeePackaging.sections.case-study.stats.0.2')}</div>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-4xl font-black text-blue-600 mb-2">{t('usaCoffeePackaging.sections.case-study.stats.1.0')}</div>
              <div className="text-sm font-bold uppercase">{t('usaCoffeePackaging.sections.case-study.stats.1.1')}</div>
              <div className="text-xs text-neutral-600 mt-2">{t('usaCoffeePackaging.sections.case-study.stats.1.2')}</div>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-4xl font-black text-amber-600 mb-2">{t('usaCoffeePackaging.sections.case-study.stats.2.0')}</div>
              <div className="text-sm font-bold uppercase">{t('usaCoffeePackaging.sections.case-study.stats.2.1')}</div>
              <div className="text-xs text-neutral-600 mt-2">{t('usaCoffeePackaging.sections.case-study.stats.2.2')}</div>
            </div>
          </div>

          <div className="bg-[#F0F0F0] border-4 border-black p-6">
            <h4 className="font-black text-xl uppercase mb-4">{t('usaCoffeePackaging.sections.case-study.journey.title')}</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.case-study.journey.challengeTitle')}</h5>
                <p className="text-sm">{t('usaCoffeePackaging.sections.case-study.journey.challengeDesc')}</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.case-study.journey.solutionTitle')}</h5>
                <p className="text-sm">{t('usaCoffeePackaging.sections.case-study.journey.solutionDesc')}</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">{t('usaCoffeePackaging.sections.case-study.journey.resultsTitle')}</h5>
                <ul className="text-sm space-y-1">
                  <li>✓ {t('usaCoffeePackaging.sections.case-study.journey.resultsList.0')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.case-study.journey.resultsList.1')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.case-study.journey.resultsList.2')}</li>
                  <li>✓ {t('usaCoffeePackaging.sections.case-study.journey.resultsList.3')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-8 border-blue-600 p-6">
            <h4 className="font-black text-xl uppercase mb-3 text-blue-900">{t('usaCoffeePackaging.sections.case-study.takeaways.title')}</h4>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="font-bold">{t('usaCoffeePackaging.sections.case-study.takeaways.list.0')}</li>
              <li className="font-bold">{t('usaCoffeePackaging.sections.case-study.takeaways.list.1')}</li>
              <li className="font-bold">{t('usaCoffeePackaging.sections.case-study.takeaways.list.2')}</li>
              <li className="font-bold">{t('usaCoffeePackaging.sections.case-study.takeaways.list.3')}</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('usaCoffeePackaging.sections.b2b-store-links.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('usaCoffeePackaging.sections.b2b-store-links.desc') }} />
        </div>
      )
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('usaCoffeePackaging.meta.title')}
      metaDescription={t('usaCoffeePackaging.meta.description')}
      canonicalUrl="https://pouch.eco/blog/usa-coffee-packaging"
      keywords={[
        'USA coffee packaging',
        'compostable coffee bags USA',
        'recyclable coffee pouches',
        'ASTM D6400 coffee bags',
        'California coffee packaging laws',
        'specialty coffee roaster packaging',
        'degassing valve bags',
        'low MOQ coffee bags'
      ]}
      publishedDate="2026-01-30"
      modifiedDate="2026-01-30"
      author="Ryan Wong"
      
      heroTitle={
        <>
          {t('usaCoffeePackaging.hero.title').split('\n')[0]}<br />
          <span className="text-amber-600">{t('usaCoffeePackaging.hero.title').split('\n')[1]}</span><br />
          {t('usaCoffeePackaging.hero.title').split('\n')[2]}
        </>
      }
      heroSubtitle={t('usaCoffeePackaging.hero.subtitle')}
      heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      heroImageAlt={t('usaCoffeePackaging.hero.imageAlt')}
      categoryTag="COFFEE_USA"
      categoryColor="#d97706"
      readTime="15 min read"
      
      sections={sections}
      
      faqSections={[
        {
          q: t('usaCoffeePackaging.faqSections.0.q'),
          a: t('usaCoffeePackaging.faqSections.0.a')
        },
        {
          q: t('usaCoffeePackaging.faqSections.1.q'),
          a: t('usaCoffeePackaging.faqSections.1.a')
        },
        {
          q: t('usaCoffeePackaging.faqSections.2.q'),
          a: t('usaCoffeePackaging.faqSections.2.a')
        },
        {
          q: t('usaCoffeePackaging.faqSections.3.q'),
          a: t('usaCoffeePackaging.faqSections.3.a')
        },
        {
          q: t('usaCoffeePackaging.faqSections.4.q'),
          a: t('usaCoffeePackaging.faqSections.4.a')
        },
        {
          q: t('usaCoffeePackaging.faqSections.5.q'),
          a: t('usaCoffeePackaging.faqSections.5.a')
        }
      ]}
      
      ctaTitle={t('usaCoffeePackaging.cta.title')}
      ctaDescription={t('usaCoffeePackaging.cta.description')}
      calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
      
      achievePackLink="https://achievepack.com/usa/coffee-packaging"
      achievePackText={t('usaCoffeePackaging.cta.achievePackText')}
      
      showTableOfContents={true}
      relatedArticles={[
        {
          title: t('usaCoffeePackaging.relatedArticles.0.title'),
          url: '/blog/usa-compostable-guide',
          image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
        },
        {
          title: t('usaCoffeePackaging.relatedArticles.1.title'),
          url: '/blog/coffee-packaging-guide',
          image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp'
        },
        {
          title: t('usaCoffeePackaging.relatedArticles.2.title'),
          url: '/blog/compostable-packaging-guide',
          image: '/imgs/seo-photos/a_industrial_compostable_facility_2850870.webp'
        }
      ]}
    />
  )
}
