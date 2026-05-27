import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Ruler, Maximize2, Package, CheckCircle, ArrowRight, Mail, Send, Loader2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import SortableSizesTable, { STAND_UP_SIZES, FLAT_BOTTOM_SIZES } from '../../../components/SortableSizesTable'
import { DIELINE_CATALOG, type DielineItem } from '../../../data/dielineCatalog'

export default function PouchPouchSizingPage() {
  const title = "Standard Pouch Sizes Chart | Stand-Up & Flat Bottom | POUCH.ECO"
  const description = "Comprehensive standard sizing charts for stand-up pouches and flat bottom bags. Compare dimensions in mm, volume in grams, and find the perfect tooling size."

  // Email Lead Gate & CAPTCHA States
  const [selectedShape, setSelectedShape] = React.useState<'stand-up' | 'flat-bottom'>('stand-up')
  const [clientEmail, setClientEmail] = React.useState('')
  const [selectedDieline, setSelectedDieline] = React.useState<DielineItem | null>(null)
  const [emailDielineFilename, setEmailDielineFilename] = React.useState('')
  const [sendingEmail, setSendingEmail] = React.useState(false)
  const [emailSuccess, setEmailSuccess] = React.useState(false)
  
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null)
  const turnstileRef = React.useRef<HTMLDivElement>(null)
  const turnstileWidgetId = React.useRef<string | null>(null)

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

  // Available dielines filtered by shape
  const availableDielines = React.useMemo(() => {
    const catalogShape = selectedShape === 'stand-up' ? 'Stand Up Pouch' : 'Flat Bottom'
    return DIELINE_CATALOG.filter(d => d.shape === catalogShape && d.unit === 'mm')
  }, [selectedShape])

  // Auto-select first dieline when list changes
  React.useEffect(() => {
    if (availableDielines.length > 0) {
      const alreadySelected = availableDielines.some(d => d.filename === emailDielineFilename)
      if (!alreadySelected) {
        setSelectedDieline(availableDielines[0])
        setEmailDielineFilename(availableDielines[0].filename)
      }
    } else {
      setSelectedDieline(null)
      setEmailDielineFilename('')
    }
  }, [availableDielines, emailDielineFilename])

  // Prefill email from localStorage on mount
  React.useEffect(() => {
    const savedEmail = localStorage.getItem('dieline_finder_email')
    if (savedEmail) {
      setClientEmail(savedEmail)
    }
  }, [])

  // Load Cloudflare Turnstile script & render widget dynamically
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).turnstile) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }

    const renderWidget = () => {
      if (turnstileRef.current && (window as any).turnstile && !turnstileWidgetId.current) {
        turnstileWidgetId.current = (window as any).turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(null),
          'error-callback': () => setTurnstileToken(null)
        })
      }
    }

    if ((window as any).turnstile) {
      renderWidget()
    } else {
      (window as any).onTurnstileLoad = renderWidget
    }

    return () => {
      if (turnstileWidgetId.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(turnstileWidgetId.current)
        } catch (e) {
          console.error('Turnstile clean error:', e)
        }
        turnstileWidgetId.current = null
      }
    }
  }, [selectedShape])

  const handleEmailDielineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!clientEmail || !turnstileToken || !selectedDieline) return

    setSendingEmail(true)
    try {
      const response = await fetch('/api/send-dieline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: clientEmail,
          dielineFilename: selectedDieline.filename,
          dielineUrl: selectedDieline.url,
          dielineDisplayName: selectedDieline.displayName,
          turnstileToken,
          shape: selectedDieline.shape,
          width: selectedDieline.width,
          height: selectedDieline.height,
          gusset: selectedDieline.gusset,
          unit: selectedDieline.unit,
          capacity: selectedDieline.capacity
        })
      })

      const result = await response.json()
      if (response.ok && result.success) {
        setEmailSuccess(true)
        localStorage.setItem('dieline_finder_email', clientEmail)
      } else {
        alert(result.error || 'Failed to send email.')
      }
    } catch (err) {
      console.error(err)
      alert('A network error occurred. Please try again.')
    } finally {
      setSendingEmail(false)
      if ((window as any).turnstile && turnstileWidgetId.current) {
        (window as any).turnstile.reset(turnstileWidgetId.current)
        setTurnstileToken(null)
      }
    }
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/pouch-sizing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">KNOWLEDGE_BASE // STANDARD_SIZES</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                The Size <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Matrix.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                Save time and money by utilizing our standard tooling. Browse comprehensive sizing charts for both Stand-Up Pouches and Flat Bottom Bags.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                   <img 
                    src="/imgs/seo-photos/a_size_reference_dimensions_7506199.webp" 
                    alt="Various pouch sizes lined up for volume comparison" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute bottom-4 left-4 bg-black text-white border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    VOLUME = W × H + G
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content & Tables */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                 <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-6">
                   Stand-Up Pouch <span className="text-[#10b981]">Standard Sizes</span>
                 </h2>
                 <p className="font-['JetBrains_Mono'] text-gray-700 mb-6">
                   Stand-up pouches (Doypacks) are the most popular flexible packaging format globally. They feature a bottom gusset that expands to hold volume and stand upright. The sizes below represent our most common tooling, allowing for faster turnaround times and no custom die fees.
                 </p>
                 <div className="border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
                   <SortableSizesTable sizes={STAND_UP_SIZES} title="Stand-Up Pouch Dimensions" />
                 </div>
              </div>

              <div>
                 <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-6">
                   Flat Bottom Bag <span className="text-purple-500">Standard Sizes</span>
                 </h2>
                 <p className="font-['JetBrains_Mono'] text-gray-700 mb-6">
                   Flat Bottom Bags (Box Pouches) offer five printable panels and exceptional shelf stability. Because of their square base and side gussets, they often hold slightly more volume than a stand-up pouch of identical height and width.
                 </p>
                 <div className="border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
                   <SortableSizesTable sizes={FLAT_BOTTOM_SIZES} title="Flat Bottom Bag Dimensions" categoryColor="purple" />
                 </div>
              </div>
            </div>

            <div className="space-y-8">
                {/* Neo-Brutalist Dieline Auto-Sender Lead Gate */}
                <NeoCard className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-3 flex items-center gap-2 text-black">
                    <Mail className="w-6 h-6 stroke-[2]" /> Get Free Dielines
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-xs text-neutral-700 mb-4 leading-normal">
                    Select a shape and template size to receive high-fidelity vector blueprints (.AI / .PDF) directly in your email.
                  </p>

                  <div className="flex bg-gray-100 border-2 border-black p-1 mb-4">
                    <button
                      type="button"
                      onClick={() => setSelectedShape('stand-up')}
                      className={`flex-1 text-center py-2 text-xs font-black uppercase transition-all ${
                        selectedShape === 'stand-up' ? 'bg-black text-[#D4FF00]' : 'text-black'
                      }`}
                    >
                      Stand Up
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedShape('flat-bottom')}
                      className={`flex-1 text-center py-2 text-xs font-black uppercase transition-all ${
                        selectedShape === 'flat-bottom' ? 'bg-black text-[#D4FF00]' : 'text-black'
                      }`}
                    >
                      Flat Bottom
                    </button>
                  </div>

                  {emailSuccess ? (
                    <div className="border-4 border-emerald-600 bg-emerald-50 p-4 text-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                      <div className="font-['Space_Grotesk'] font-black text-emerald-800 uppercase text-sm">Email Sent!</div>
                      <p className="font-['JetBrains_Mono'] text-[11px] text-emerald-700 mt-1 leading-normal">
                        Dieline templates are dispatched to <strong>{clientEmail}</strong>. Check your inbox.
                      </p>
                      <button
                        type="button"
                        onClick={() => setEmailSuccess(false)}
                        className="font-['JetBrains_Mono'] text-xs text-black font-extrabold uppercase mt-4 underline"
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleEmailDielineSubmit} className="space-y-4">
                      <div>
                        <label className="block font-['Space_Grotesk'] font-bold text-xs uppercase mb-1.5">Select Template Size</label>
                        <select
                          value={emailDielineFilename}
                          onChange={(e) => {
                            const found = availableDielines.find(d => d.filename === e.target.value)
                            if (found) {
                              setSelectedDieline(found)
                              setEmailDielineFilename(found.filename)
                            }
                          }}
                          className="w-full bg-white border-2 border-black text-xs font-bold font-['JetBrains_Mono'] px-3 py-2 text-black outline-none focus:bg-[#D4FF00] transition"
                        >
                          {availableDielines.map((d) => (
                            <option key={d.filename} value={d.filename}>
                              {d.displayName} ({d.width}x{d.height}mm {d.ext})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-['Space_Grotesk'] font-bold text-xs uppercase mb-1.5">Your Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="hello@brand.com"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full bg-white border-2 border-black text-xs font-bold font-['JetBrains_Mono'] px-3 py-2.5 text-black outline-none focus:bg-yellow-50 transition"
                        />
                      </div>

                      {/* Cloudflare Turnstile */}
                      <div ref={turnstileRef} className="cf-turnstile w-full flex justify-center scale-90 -my-1" />

                      <button
                        type="submit"
                        disabled={sendingEmail || !turnstileToken}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-black text-[#D4FF00] disabled:bg-neutral-200 disabled:text-neutral-450 disabled:border-neutral-300 hover:bg-neutral-800 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-wider transition-all"
                      >
                        {sendingEmail ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Emailing...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Email Dieline
                          </>
                        )}
                      </button>

                      <p className="font-['JetBrains_Mono'] text-[9px] text-neutral-500 text-center leading-normal">
                        🔒 We don't spam. Your email is strictly used to deliver print dielines.
                      </p>
                    </form>
                  )}
                </NeoCard>

               <NeoCard className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-4">Why Use Standard Sizes?</h3>
                 <ul className="font-['JetBrains_Mono'] text-sm space-y-4 text-black">
                   <li className="flex items-start gap-2">
                     <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                     <span><strong>Zero Die Fees:</strong> We already own the tooling cutters for these sizes, saving you hundreds of dollars in setup costs.</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                     <span><strong>Faster Production:</strong> Standard sizes move through our machine queues faster than custom calibrations.</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                     <span><strong>Retail Consistency:</strong> These sizes fit perfectly on standard retail shelving and pegboards.</span>
                   </li>
                 </ul>
               </NeoCard>

               <div className="bg-black text-white p-6 border-4 border-black">
                 <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">Need a Custom Size?</h3>
                 <p className="font-['JetBrains_Mono'] text-sm text-gray-300 mb-4">
                   Not a problem. We can manufacture pouches to your exact millimeter specifications. A one-time custom tooling fee will apply.
                 </p>
                 <NeoButton href="/quote" variant="secondary" className="w-full justify-center !bg-white !text-black hover:!bg-gray-200">
                   Request Custom Quote
                 </NeoButton>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Pouch Sizing <span className="text-[#10b981]">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What do the measurements W x H + G mean?',
                a: 'Width (W) is measured across the pouch left to right. Height (H) is measured top to bottom. Gusset (G) is the depth. For stand-up pouches, it is the bottom gusset. For flat bottom bags, it refers to the side gussets.'
              },
              {
                q: 'Are the measurements internal or external?',
                a: 'All manufacturing dimensions provided on our site and dielines are External Dimensions (Outside Dimensions / OD). You must account for the seal margins (usually 5-10mm per side) when calculating internal volume.'
              },
              {
                q: 'How accurate is the volume/weight estimation?',
                a: 'The estimations (e.g., "Holds 250g") are based on standard roasted coffee beans. If your product is very dense (like salt) it will hold much more weight. If your product is very light (like popcorn), it will hold much less weight. Always request physical samples to test.'
              },
              {
                q: 'Can I change the size of the window on a standard pouch?',
                a: 'Yes! The clear window is printed into the design, it does not require a physical cut in the bag. Therefore, you can have any shape or size of window on any of our standard pouch sizes.'
              },
              {
                q: 'If I order a custom size, do I pay the die fee every time?',
                a: 'No. The custom die fee is a one-time charge. We keep your custom cutter on file for all your future reorders.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-black flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-black">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Find Your Fit</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Let us send you a free sample pack containing our standard sizes so you can test your product volume in real life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/free-service" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Get Size Samples <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
