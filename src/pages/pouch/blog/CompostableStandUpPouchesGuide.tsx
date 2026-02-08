import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Package, Leaf, Shield, DollarSign, CheckCircle, TrendingUp, Award, Clock, Droplets, Wind } from 'lucide-react'

export default function CompostableStandUpPouchesGuide() {
  const sections = [
    {
      id: 'why-stand-up',
      title: 'Why Stand-Up Pouches Are Taking Over Food Packaging (And Why Yours Should Be Compostable)',
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900">
            Stand-up pouches are the fastest-growing packaging format in food & beverage—projected to hit $47 billion by 2027—and compostable versions are leading the charge.
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4">The Numbers Tell The Story:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>87% of consumers</strong> prefer brands with sustainable packaging (McKinsey 2026)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>65% lighter</strong> than rigid packaging = lower shipping costs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>40% more shelf space</strong> efficiency vs boxes/jars</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>12-18 months shelf life</strong> with proper barrier materials</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-8 border-green-600 p-6">
            <h4 className="font-black text-2xl uppercase mb-3 text-green-900">
              Why Stand-Up Pouches Win
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold mb-2 text-green-800">For Your Brand:</h5>
                <ul className="space-y-2 text-sm">
                  <li>✓ 360° printable surface = maximum branding</li>
                  <li>✓ Premium shelf presence (stands upright)</li>
                  <li>✓ Resealable zipper = repeat usage</li>
                  <li>✓ Low MOQ from 100 pieces</li>
                  <li>✓ 50-70% cheaper than rigid packaging</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-green-800">For Your Customers:</h5>
                <ul className="space-y-2 text-sm">
                  <li>✓ Easy to open (tear notch)</li>
                  <li>✓ Resealable for freshness</li>
                  <li>✓ Space-efficient storage</li>
                  <li>✓ Lightweight (easy to carry)</li>
                  <li>✓ Can actually compost it (ASTM D6400)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-4 border-black p-6 text-center">
              <Package className="w-12 h-12 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-black mb-2">47B</div>
              <div className="text-sm font-bold uppercase">Market Size by 2027</div>
              <div className="text-xs text-neutral-600 mt-1">Global stand-up pouch market</div>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <Leaf className="w-12 h-12 mx-auto mb-3 text-green-600" />
              <div className="text-3xl font-black mb-2">34%</div>
              <div className="text-sm font-bold uppercase">CAGR (2024-2027)</div>
              <div className="text-xs text-neutral-600 mt-1">Compostable pouches segment</div>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl font-black mb-2">73%</div>
              <div className="text-sm font-bold uppercase">Retail Preference</div>
              <div className="text-xs text-neutral-600 mt-1">Whole Foods, Sprouts, Target</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-science',
      title: 'The Material Science: How Compostable Stand-Up Pouches Actually Work',
      icon: <Leaf className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold">
            Not all "compostable" pouches are created equal. Here's what actually breaks down and what's just greenwashing.
          </p>

          <div className="bg-[#00FFFF] border-4 border-black p-8">
            <h4 className="font-black text-3xl uppercase mb-6">Compostable Material Stack Breakdown</h4>
            
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#10b981] text-white px-4 py-2 font-['JetBrains_Mono'] font-bold border-2 border-black">
                    OPTION 1
                  </div>
                  <span className="font-black text-xl uppercase">Kraft Paper + PLA Film</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold mb-2">Structure:</h5>
                    <p className="text-sm">Kraft Paper (outer) + PLA Lining (inner) + PLA Zipper</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Certifications:</h5>
                    <p className="text-sm">EN 13432, ASTM D6400, BPI</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Barrier Performance:</h5>
                    <p className="text-sm">OTR: 50-100 cc/m²/24hr | Low barrier</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Best For:</h5>
                    <p className="text-sm">Baked goods, herbs, short shelf life (1-3 months)</p>
                  </div>
                </div>
                <div className="mt-4 bg-green-50 border-2 border-green-600 p-3">
                  <p className="text-sm"><strong>Cost:</strong> $0.45-0.65/piece (MOQ 500) | <strong>Compost Time:</strong> 90-120 days</p>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#10b981] text-white px-4 py-2 font-['JetBrains_Mono'] font-bold border-2 border-black">
                    OPTION 2
                  </div>
                  <span className="font-black text-xl uppercase">Kraft + PBAT/PLA Blend</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold mb-2">Structure:</h5>
                    <p className="text-sm">Kraft Paper + PBAT/PLA Blend + PLA Zipper</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Certifications:</h5>
                    <p className="text-sm">ASTM D6400, EN 13432, BPI</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Barrier Performance:</h5>
                    <p className="text-sm">OTR: 5-15 cc/m²/24hr | Medium barrier</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Best For:</h5>
                    <p className="text-sm">Coffee, snacks, nuts, dried fruit (3-6 months)</p>
                  </div>
                </div>
                <div className="mt-4 bg-green-50 border-2 border-green-600 p-3">
                  <p className="text-sm"><strong>Cost:</strong> $0.65-0.95/piece (MOQ 500) | <strong>Compost Time:</strong> 120-180 days</p>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#10b981] text-white px-4 py-2 font-['JetBrains_Mono'] font-bold border-2 border-black">
                    OPTION 3
                  </div>
                  <span className="font-black text-xl uppercase">NatureFlex™ (Home Compost)</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold mb-2">Structure:</h5>
                    <p className="text-sm">Cellulose Film (wood pulp) + PLA or no coating</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Certifications:</h5>
                    <p className="text-sm">OK Compost HOME, TÜV Austria</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Barrier Performance:</h5>
                    <p className="text-sm">OTR: 10-30 cc/m²/24hr | Medium barrier</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Best For:</h5>
                    <p className="text-sm">Premium brands, farmers markets (6-12 months)</p>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 border-2 border-blue-600 p-3">
                  <p className="text-sm"><strong>Cost:</strong> $0.85-1.20/piece (MOQ 500) | <strong>Compost Time:</strong> 90 days (home)</p>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#10b981] text-white px-4 py-2 font-['JetBrains_Mono'] font-bold border-2 border-black">
                    OPTION 4
                  </div>
                  <span className="font-black text-xl uppercase">MetPLA Triplex (Max Barrier)</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold mb-2">Structure:</h5>
                    <p className="text-sm">PLA + Metallized PLA + PLA (3-layer)</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Certifications:</h5>
                    <p className="text-sm">ASTM D6400, EN 13432</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Barrier Performance:</h5>
                    <p className="text-sm">OTR: &lt;1.0 cc/m²/24hr | High barrier</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Best For:</h5>
                    <p className="text-sm">Coffee, supplements, premium food (12-18 months)</p>
                  </div>
                </div>
                <div className="mt-4 bg-amber-50 border-2 border-amber-600 p-3">
                  <p className="text-sm"><strong>Cost:</strong> $1.10-1.50/piece (MOQ 500) | <strong>Compost Time:</strong> 180 days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-8 border-red-600 p-6">
            <h4 className="font-black text-2xl uppercase mb-3 text-red-900">
              ⚠️ Watch Out for Greenwashing
            </h4>
            <p className="mb-3 font-bold">These claims are NOT compostable:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>"Biodegradable"</strong> without ASTM D6400 certification = could take 500 years</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>"Oxo-degradable"</strong> = banned in many states, breaks into microplastics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>"Plant-based"</strong> without certification = may not actually compost</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>"Eco-friendly"</strong> = meaningless marketing term</span>
              </li>
            </ul>
            <p className="mt-4 text-sm font-bold">
              Always ask for: ASTM D6400, EN 13432, or BPI certification PDFs.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sizes-applications',
      title: 'Standard Sizes & What Products They Fit',
      icon: <Package className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Here's the honest breakdown of what size pouch fits what products—no guessing required.
          </p>

          <div className="bg-[#F0F0F0] border-4 border-black p-8">
            <h4 className="font-black text-3xl uppercase mb-6">Quick Size Reference Table</h4>
            
            <table className="w-full border-4 border-black">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="py-3 px-4 text-left font-['JetBrains_Mono'] border-r-2 border-[#D4FF00]">Size</th>
                  <th className="py-3 px-4 text-left border-r-2 border-[#D4FF00]">Dimensions (W×H+G mm)</th>
                  <th className="py-3 px-4 text-left border-r-2 border-[#D4FF00]">Typical Products</th>
                  <th className="py-3 px-4 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t-4 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">50g</td>
                  <td className="py-3 px-4 border-r-2 border-black">80×130+50</td>
                  <td className="py-3 px-4 border-r-2 border-black">Samples, single-serve coffee, tea bags, spice packets</td>
                  <td className="py-3 px-4">$0.30-0.45</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">100g (4oz)</td>
                  <td className="py-3 px-4 border-r-2 border-black">100×180+60</td>
                  <td className="py-3 px-4 border-r-2 border-black">Trial sizes, small snacks, loose tea, protein powder samples</td>
                  <td className="py-3 px-4">$0.40-0.60</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">250g (8oz)</td>
                  <td className="py-3 px-4 border-r-2 border-black">130×200+80</td>
                  <td className="py-3 px-4 border-r-2 border-black">Coffee (1/2 lb), granola, nuts, pet treats, dried fruit</td>
                  <td className="py-3 px-4">$0.55-0.85</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">340g (12oz)</td>
                  <td className="py-3 px-4 border-r-2 border-black">140×235+85</td>
                  <td className="py-3 px-4 border-r-2 border-black">Coffee (3/4 lb), snacks, cereal, supplements, candy</td>
                  <td className="py-3 px-4">$0.70-1.00</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">500g (1lb)</td>
                  <td className="py-3 px-4 border-r-2 border-black">160×260+95</td>
                  <td className="py-3 px-4 border-r-2 border-black">Coffee (1 lb), large snack bags, pasta, rice, protein powder</td>
                  <td className="py-3 px-4">$0.85-1.20</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">1kg (2.2lb)</td>
                  <td className="py-3 px-4 border-r-2 border-black">200×300+110</td>
                  <td className="py-3 px-4 border-r-2 border-black">Bulk coffee, large pet food, family-size snacks</td>
                  <td className="py-3 px-4">$1.10-1.60</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4 text-sm font-bold">
              *Prices based on MOQ 500 pieces, Kraft + PBAT/PLA material, digital printing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 border-4 border-amber-600 p-6">
              <h5 className="font-black text-xl uppercase mb-3 text-amber-900">Coffee & Tea</h5>
              <ul className="space-y-2 text-sm">
                <li><strong>8oz (250g):</strong> Perfect for specialty coffee trial sizes</li>
                <li><strong>12oz (340g):</strong> Most popular size for retail coffee</li>
                <li><strong>1lb (500g):</strong> Standard roastery size, bulk buyers</li>
                <li><strong>Add-ons:</strong> Degassing valve ($0.08-0.12 extra)</li>
              </ul>
            </div>
            <div className="bg-green-50 border-4 border-green-600 p-6">
              <h5 className="font-black text-xl uppercase mb-3 text-green-900">Snacks & Nuts</h5>
              <ul className="space-y-2 text-sm">
                <li><strong>4oz (100g):</strong> Single-serve snack packs</li>
                <li><strong>8oz (250g):</strong> Standard snack bag size</li>
                <li><strong>1lb (500g):</strong> Family-size or bulk snacks</li>
                <li><strong>Add-ons:</strong> Clear window ($0.05-0.10 extra)</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-4 border-blue-600 p-6">
              <h5 className="font-black text-xl uppercase mb-3 text-blue-900">Supplements</h5>
              <ul className="space-y-2 text-sm">
                <li><strong>4oz (100g):</strong> Sample/trial sizes</li>
                <li><strong>12oz (340g):</strong> Standard protein powder size</li>
                <li><strong>1lb+ (500g+):</strong> Bulk/subscription sizes</li>
                <li><strong>Note:</strong> Requires high barrier (MetPLA recommended)</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-6">
            <h5 className="font-black text-2xl uppercase mb-3">Custom Sizes Available</h5>
            <p className="mb-3">
              Standard sizes don't fit? We can create custom dimensions for MOQ 1,000+ pieces.
            </p>
            <p className="text-sm">
              <strong>Typical custom scenarios:</strong> Uniquely shaped products, subscription boxes, gift sets, bulk wholesale packaging
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'pricing-moq',
      title: 'Transparent Pricing: What Compostable Stand-Up Pouches Actually Cost',
      icon: <DollarSign className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold">
            No hidden fees, no surprises. Here's exactly what you'll pay in 2026:
          </p>

          <div className="bg-[#00FFFF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-3xl uppercase mb-6">Price Breakdown: 12oz (340g) Stand-Up Pouch</h4>
            
            <table className="w-full border-4 border-black">
              <thead>
                <tr className="bg-black text-[#00FFFF]">
                  <th className="py-3 px-4 text-left font-['JetBrains_Mono'] border-r-2 border-[#00FFFF]">Quantity</th>
                  <th className="py-3 px-4 border-r-2 border-[#00FFFF]">Kraft + PLA<br/>(Low Barrier)</th>
                  <th className="py-3 px-4 border-r-2 border-[#00FFFF]">Kraft + PBAT<br/>(Medium Barrier)</th>
                  <th className="py-3 px-4">MetPLA Triplex<br/>(High Barrier)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t-4 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">100-500 pcs</td>
                  <td className="py-3 px-4 border-r-2 border-black">$0.85-1.10</td>
                  <td className="py-3 px-4 border-r-2 border-black">$1.05-1.35</td>
                  <td className="py-3 px-4">$1.40-1.80</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">500-1,000 pcs</td>
                  <td className="py-3 px-4 border-r-2 border-black">$0.70-0.95</td>
                  <td className="py-3 px-4 border-r-2 border-black">$0.85-1.10</td>
                  <td className="py-3 px-4">$1.15-1.50</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">1,000-3,000 pcs</td>
                  <td className="py-3 px-4 border-r-2 border-black">$0.60-0.80</td>
                  <td className="py-3 px-4 border-r-2 border-black">$0.70-0.95</td>
                  <td className="py-3 px-4">$0.95-1.25</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="py-3 px-4 font-bold border-r-2 border-black">3,000+ pcs</td>
                  <td className="py-3 px-4 text-green-600 font-bold border-r-2 border-black">Request Quote</td>
                  <td className="py-3 px-4 text-green-600 font-bold border-r-2 border-black">Request Quote</td>
                  <td className="py-3 px-4 text-green-600 font-bold">Request Quote</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="font-black text-xl uppercase mb-4">What's Included:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Full-color digital printing (no setup fees)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Resealable zipper (standard)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Tear notch for easy opening</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Free design review + file optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Digital proof before production</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>ASTM D6400/EN 13432 certification PDFs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>QC photos before shipping</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="font-black text-xl uppercase mb-4">Optional Add-Ons:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">+$0.08-0.12</span>
                  <span>Degassing valve (for coffee)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">+$0.05-0.10</span>
                  <span>Clear window (PLA or NatureFlex)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">+$0.15-0.25</span>
                  <span>Foil stamping (logo/text)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">+$0.20-0.30</span>
                  <span>Spot UV coating (glossy accents)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">+$0.03-0.05</span>
                  <span>Hang hole punch</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] font-bold text-amber-600">+$200-400</span>
                  <span>Custom size development (MOQ 1,000)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-8 border-blue-600 p-6">
            <h4 className="font-black text-2xl uppercase mb-3 text-blue-900">Cost Comparison: Pouches vs Alternatives</h4>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-blue-600">
                  <th className="py-2">Packaging Type</th>
                  <th className="py-2">Cost per Unit</th>
                  <th className="py-2">Shipping Weight</th>
                  <th className="py-2">Sustainability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-200">
                  <td className="py-2 font-bold text-green-700">Compostable Pouch</td>
                  <td className="py-2">$0.70-1.10</td>
                  <td className="py-2">8g</td>
                  <td className="py-2">✓ ASTM D6400</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-2">Plastic Jar</td>
                  <td className="py-2">$1.20-1.80</td>
                  <td className="py-2">45g</td>
                  <td className="py-2">✗ Not recyclable</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-2">Glass Jar</td>
                  <td className="py-2">$1.50-2.50</td>
                  <td className="py-2">120g</td>
                  <td className="py-2">△ Recyclable (heavy)</td>
                </tr>
                <tr>
                  <td className="py-2">Cardboard Box</td>
                  <td className="py-2">$0.80-1.30</td>
                  <td className="py-2">25g</td>
                  <td className="py-2">△ Recyclable (not barrier)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm mt-4">
              <strong>Shipping savings:</strong> Pouches are 80% lighter than jars, saving $0.30-0.50 per unit in shipping costs.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'ordering-process',
      title: 'How to Order: From Design to Delivery in 2-4 Weeks',
      icon: <Clock className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-3xl uppercase mb-6">5-Step Ordering Process</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-black text-[#D4FF00] w-12 h-12 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-2xl shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h5 className="font-black text-xl uppercase mb-2">Book Free 30-Min Consultation</h5>
                  <p className="text-neutral-700 mb-2">
                    Tell us about your product, target market, and sustainability goals. We'll recommend the right material, size, and features.
                  </p>
                  <p className="text-sm text-neutral-600">
                    <strong>What we'll discuss:</strong> Product type, shelf life requirements, budget, quantity needed, timeline
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black text-[#D4FF00] w-12 h-12 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-2xl shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h5 className="font-black text-xl uppercase mb-2">Get Custom Quote + Material Samples</h5>
                  <p className="text-neutral-700 mb-2">
                    We'll send a detailed quote with pricing breakdown + physical material samples so you can feel the quality.
                  </p>
                  <p className="text-sm text-neutral-600">
                    <strong>Timeline:</strong> 24-48 hours | <strong>Cost:</strong> $0 (samples are free)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black text-[#D4FF00] w-12 h-12 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-2xl shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h5 className="font-black text-xl uppercase mb-2">Design Review + Digital Proof</h5>
                  <p className="text-neutral-700 mb-2">
                    Send your artwork or let our designers create it. We'll send a 3D mockup + dieline for approval. Unlimited revisions.
                  </p>
                  <p className="text-sm text-neutral-600">
                    <strong>Timeline:</strong> 2-3 days | <strong>Included:</strong> File optimization, bleed checks, color matching
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black text-[#D4FF00] w-12 h-12 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-2xl shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h5 className="font-black text-xl uppercase mb-2">Production + Quality Control</h5>
                  <p className="text-neutral-700 mb-2">
                    Once you approve the proof, production starts. We send QC photos at key checkpoints before final packing.
                  </p>
                  <p className="text-sm text-neutral-600">
                    <strong>Timeline:</strong> 7-10 days | <strong>QC checks:</strong> Color, sealing, zipper function, print quality
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black text-[#D4FF00] w-12 h-12 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-2xl shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h5 className="font-black text-xl uppercase mb-2">Shipping + Delivery</h5>
                  <p className="text-neutral-700 mb-2">
                    Choose air (fast) or sea (economical) shipping. Full tracking provided. We handle customs paperwork.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-white border-2 border-black p-3">
                      <p className="font-bold">✈️ Air Shipping</p>
                      <p className="text-sm">7-14 days | $150-300 (100-500 pcs)</p>
                    </div>
                    <div className="bg-white border-2 border-black p-3">
                      <p className="font-bold">🚢 Sea Shipping</p>
                      <p className="text-sm">20-30 days | $80-150 (1,000+ pcs)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-6">
            <h5 className="font-black text-2xl uppercase mb-3">Total Timeline: 2-4 Weeks from Order to Door</h5>
            <p className="mb-3">
              <strong>Rush orders available:</strong> Need pouches faster? We offer expedited production (3-5 days) + express air shipping (3-5 days) for urgent projects.
            </p>
            <p className="text-sm">
              <strong>Rush fee:</strong> +30% production cost | <strong>Express shipping:</strong> $300-500 for 100-500 pcs
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <BlogArticleTemplate
      title="Compostable Stand-Up Pouches Guide 2026: Materials, Sizes & Pricing | POUCH.ECO"
      metaDescription="Complete guide to compostable stand-up pouches: ASTM D6400 materials breakdown, size reference, transparent pricing, MOQ from 100 pieces. Perfect for food & beverage brands."
      canonicalUrl="https://pouch.eco/blog/compostable-stand-up-pouches-guide"
      keywords={[
        'compostable stand up pouches',
        'compostable food packaging',
        'ASTM D6400 pouches',
        'sustainable packaging',
        'eco friendly pouches',
        'kraft paper pouches',
        'PLA pouches',
        'low MOQ pouches'
      ]}
      publishedDate="2026-01-30"
      modifiedDate="2026-01-30"
      author="POUCH.ECO Packaging Experts"
      
      heroTitle={
        <>
          Everything You Need to Know About<br />
          <span className="text-[#10b981]">Compostable Stand-Up Pouches</span><br />
          (Materials, Sizes & Real Pricing)
        </>
      }
      heroSubtitle="The complete 2026 guide: ASTM D6400 material science, size-to-product matching, transparent pricing, and how to order with MOQ from 100 pieces."
      heroImage="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp"
      heroImageAlt="Compostable stand-up pouches with custom printing for food and beverage"
      categoryTag="PACKAGING_GUIDE"
      categoryColor="#10b981"
      readTime="18 min read"
      
      sections={sections}
      
      ctaTitle="Ready to Launch Your Brand with Compostable Pouches?"
      ctaDescription="Book a free 30-minute consultation with our packaging experts. We'll help you choose the right material, size, and features for your product—plus send you free samples."
      calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
      
      achievePackLink="https://achievepack.com/products/compostable-stand-up-pouches"
      achievePackText="Need enterprise-level packaging with custom material development?"
      
      showTableOfContents={true}
      relatedArticles={[
        {
          title: 'USA Compostable Packaging Guide: ASTM D6400 & State Laws',
          url: '/blog/usa-compostable-packaging-guide',
          image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
        },
        {
          title: 'Coffee Packaging Guide: Compostable vs Recyclable',
          url: '/blog/coffee-packaging-guide',
          image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp'
        },
        {
          title: 'USA Coffee Packaging: State Laws & Material Options',
          url: '/blog/usa-coffee-packaging',
          image: '/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp'
        }
      ]}
    />
  )
}
