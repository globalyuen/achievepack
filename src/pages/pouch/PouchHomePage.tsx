import React, { useRef, useEffect, useState, type MouseEvent, type UIEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Package, Leaf, Zap, Box as BoxIcon, Flame, Star, Play, Sparkles, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../components/pouch/PouchLayout'
import VideoShowcase from '../../components/pouch/VideoShowcase'
import { ThreePouchViewer } from '../../components/ThreePouchViewer'
import { SizingFinderIcon, MaterialSpecFinderIcon } from '../../components/AppIcons'

const ourWorkCards = [
  {
    title: "Compostable Coffee Stand-Up Pouch",
    tag: "Compostable",
    desc: "Plant-based high-barrier stand-up pouches with degassing valves.",
    image: "/imgs/clients-sample/IMG_6311.jpg",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    title: "Kraft Flat-Bottom Tea Pouch",
    tag: "Kraft Paper",
    desc: "Earthy, organic kraft outer layers with certified compostable barrier lining.",
    image: "/imgs/clients-sample/IMG_6312.jpg",
    badgeType: "eco",
    link: "/quotes/flat-bottom"
  },
  {
    title: "Recyclable Matte Snack Bag",
    tag: "Recyclable",
    desc: "100% recyclable mono-PE film with matte soft-touch finish.",
    image: "/imgs/clients-sample/IMG_8013.jpg",
    badgeType: "accent",
    link: "/quotes/three-side-seal"
  },
  {
    title: "Metallic Luxury Stand-Up Pouch",
    tag: "High Barrier",
    desc: "Premium metalized lining providing ultra-high moisture and oxygen barriers.",
    image: "/imgs/clients-sample/IMG_8016.jpg",
    badgeType: "luxury",
    link: "/quotes/stand-up-pouch"
  },
  {
    title: "Clear-Window Compostable Pouch",
    tag: "Eco-Friendly",
    desc: "Compostable kraft stand-up pouch featuring a clear plant-based window.",
    image: "/imgs/clients-sample/IMG_8020.jpg",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    title: "Spouted Juice & Liquid Pouch",
    tag: "Liquids",
    desc: "Heavy-duty laminated structures with rigid spouts for leakproof transit.",
    image: "/imgs/clients-sample/IMG_8028.jpg",
    badgeType: "liquid",
    link: "/quotes/spouted-pouch"
  },
  {
    title: "Custom Printed Stand-Up Pouch",
    tag: "Digital Print",
    desc: "High-resolution digital print sample with low minimum order quantity.",
    image: "/imgs/clients-sample/IMG_8032.jpg",
    badgeType: "accent",
    link: "/quotes/stand-up-pouch"
  },
  {
    title: "Premium Black Matte Coffee Bag",
    tag: "Specialty",
    desc: "Sleek matte black flat bottom bag with integrated pocket zipper.",
    image: "/imgs/clients-sample/IMG_8034.jpg",
    badgeType: "luxury",
    link: "/quotes/flat-bottom"
  },
  {
    title: "Recyclable Mono-PE Zipper Pouch",
    tag: "Recyclable",
    desc: "Fully circular design with recyclable press-to-close zippers.",
    image: "/imgs/clients-sample/IMG_8042.jpg",
    badgeType: "accent",
    link: "/quotes/three-side-seal"
  },
  {
    title: "Bio-PE SugarCane Supplement Bag",
    tag: "Bio-PE",
    desc: "Sugarcane-derived bioplastics helping brands reduce carbon emissions.",
    image: "/imgs/clients-sample/IMG_8043.jpg",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    title: "PCR Recycled Plastic Pouch",
    tag: "PCR Plastic",
    desc: "Incorporating post-consumer recycled plastics into structural layers.",
    image: "/imgs/clients-sample/IMG_8048.jpg",
    badgeType: "luxury",
    link: "/quotes/stand-up-pouch"
  },
  {
    title: "Ecosential Kraft Mailer Bag",
    tag: "Paper Mailer",
    desc: "Heavy-duty recycled kraft paper mailer bags with self-sealing adhesive strips.",
    image: "/imgs/clients-sample/IMG_8053.jpg",
    badgeType: "eco",
    link: "/store"
  },
  {
    title: "Home Compostable Nuts Pouch",
    tag: "Home Compost",
    desc: "TÜV OK Compost HOME certified stand-up pouch for organic snacks.",
    image: "/all-product-photos/IMG_4362.webp",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    title: "Gusseted Side Coffee Pouch",
    tag: "Side Gusset",
    desc: "Expandable side gussets with quad seal structure for stable shelf layout.",
    image: "/all-product-photos/IMG_4372.webp",
    badgeType: "accent",
    link: "/quotes/flat-bottom"
  },
  {
    title: "Holographic High-Luxe Box",
    tag: "Rigid Box",
    desc: "Corrugated shipping mailers with vibrant holographic foil designs.",
    image: "/all-product-photos/IMG_4385.webp",
    badgeType: "luxury",
    link: "/store?category=boxes"
  },
  {
    title: "Eco-Friendly Pet Treat Bag",
    tag: "Pet Treats",
    desc: "Puncture-resistant laminations designed for shelf longevity and grease-resistance.",
    image: "/all-product-photos/IMG_4395.webp",
    badgeType: "liquid",
    link: "/quotes/stand-up-pouch"
  }
];

const seoKnowHowCards = [
  {
    title: "Compostable vs Recyclable",
    desc: "Deciding between circular plastic recovery and organic composting paths for your packaging.",
    link: "/blog/compostable-vs-recyclable",
    image: "/imgs/store/products/recyclable-3ss-evoh-pe-102x152.png",
    tag: "Analysis",
    badgeType: "eco"
  },
  {
    title: "Packaging Cost Guide",
    desc: "Complete breakdown of plate charges, setup fees, material costs, and wholesale volume tiers.",
    link: "/blog/packaging-cost-guide",
    image: "/imgs/store/products/eco-flatbottom-premium.png",
    tag: "Finance",
    badgeType: "accent"
  },
  {
    title: "Eco Packaging Mistakes",
    desc: "Avoid common design and material selection errors that disrupt commercial supply chains.",
    link: "/blog/eco-packaging-mistakes",
    image: "/imgs/store/products/conven-sup-met-zip-premium.png",
    tag: "Strategy",
    badgeType: "luxury"
  },
  {
    title: "EU PPWR Compliance",
    desc: "Understanding the new European Union packaging regulations and recycling requirements.",
    link: "/blog/eu-ppwr-compliance-guide",
    image: "/imgs/store/products/eco-standup-premium.png",
    tag: "Regulations",
    badgeType: "eco"
  },
  {
    title: "Compostable Zippers",
    desc: "How biodegradable press-to-close zippers preserve freshness without polluting composting streams.",
    link: "/blog/compostable-zipper-no-removal",
    image: "/imgs/store/products/rice-paper-500g-standup.png",
    tag: "Technology",
    badgeType: "eco"
  },
  {
    title: "Foil Stamping Recyclability",
    desc: "Assessing the impact of hot and cold foil stamping on paperboard and plastic recycling.",
    link: "/blog/stamp-foil-recyclability",
    image: "/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp",
    tag: "Design",
    badgeType: "luxury"
  },
  {
    title: "Compostable Materials",
    desc: "Overview of organic starch-based polymers and plant cell membranes that biodegrade safely.",
    link: "/materials/compostable",
    image: "/imgs/store/products/rice-paper-500g-standup.png",
    tag: "Materials",
    badgeType: "eco"
  },
  {
    title: "Recyclable Mono-PE",
    desc: "Engineered single-polymer films with EVOH barrier that qualify for standard recycling streams.",
    link: "/materials/recyclable-mono-pe",
    image: "/imgs/store/products/recyclable-3ss-evoh-pe-102x152.png",
    tag: "Materials",
    badgeType: "accent"
  },
  {
    title: "Sugarcane Bio-PE",
    desc: "Plant-based polyethylene films derived from sugarcane that reduce carbon footprint.",
    link: "/materials/bio-pe",
    image: "/imgs/store/products/eco-standup-premium.png",
    tag: "Materials",
    badgeType: "eco"
  },
  {
    title: "Post-Consumer Recycled",
    desc: "Reusing plastic ocean waste and curbside recyclables to fabricate premium composite barrier films.",
    link: "/materials/pcr",
    image: "/imgs/store/products/conven-sup-met-zip-premium.png",
    tag: "Materials",
    badgeType: "luxury"
  },
  {
    title: "Stand Up Pouches",
    desc: "The classic retail packaging format with bottom gusset and custom resealable zippers.",
    link: "/packaging/stand-up-pouches",
    image: "/imgs/store/products/eco-standup-premium.png",
    tag: "Packaging",
    badgeType: "eco"
  },
  {
    title: "Flat Bottom Bags",
    desc: "Maximum stability with five printable panels, ideal for heavy coffee beans and dry pet food.",
    link: "/packaging/flat-bottom-bags",
    image: "/imgs/store/products/eco-flatbottom-premium.png",
    tag: "Packaging",
    badgeType: "accent"
  },
  {
    title: "Spouted Liquid Pouches",
    desc: "Flexible bottle-shaped pouches with fitment caps designed to hold cosmetics, drinks, and purees.",
    link: "/packaging/spout-pouches",
    image: "/imgs/store/products/spouted-foil-pouch-thumbnail-26.webp",
    tag: "Packaging",
    badgeType: "liquid"
  },
  {
    title: "Custom Printed Boxes",
    desc: "Sturdy corrugated cardboard boxes, mailers, and custom retail displays with custom finishes.",
    link: "/packaging/custom-boxes",
    image: "/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp",
    tag: "Packaging",
    badgeType: "luxury"
  },
  {
    title: "Startup Founder Solutions",
    desc: "Low MOQ, design support, and rapid prototyping workflows for launching products.",
    link: "/solutions/startup-founder",
    image: "/imgs/store/products/conven-3ss-clear-zip-premium.png",
    tag: "Solutions",
    badgeType: "accent"
  },
  {
    title: "Ecommerce Brand Packaging",
    desc: "Optimizing mailers, shipping boxes, and secondary pouches for D2C transit safety.",
    link: "/solutions/ecommerce-brand",
    image: "/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp",
    tag: "Solutions",
    badgeType: "luxury"
  },
  {
    title: "Coffee Roaster Packaging",
    desc: "High-barrier foil stand-up and flat bottom bags equipped with degassing valves.",
    link: "/solutions/coffee-roaster",
    image: "/imgs/store/products/eco-flatbottom-premium.png",
    tag: "Solutions",
    badgeType: "accent"
  },
  {
    title: "Snack Brand Packaging",
    desc: "Lightproof and air-tight pouches to maintain crispness and extend retail shelf life.",
    link: "/solutions/snack-brand-manager",
    image: "/imgs/store/products/conven-sup-met-zip-premium.png",
    tag: "Solutions",
    badgeType: "liquid"
  },
  {
    title: "Minimalist D2C Branding",
    desc: "Designing clean packaging layouts that reduce ink waste and capture consumer interest.",
    link: "/topics/minimalist-d2c-packaging",
    image: "/imgs/store/products/eco-standup-premium.png",
    tag: "Branding",
    badgeType: "eco"
  },
  {
    title: "Low MOQ Startup Tips",
    desc: "Strategic advice on split-shipping, template reuse, and digital runs for multi-SKU brands.",
    link: "/topics/low-moq-startup-packaging",
    image: "/imgs/store/products/conven-3ss-clear-zip-premium.png",
    tag: "Strategy",
    badgeType: "luxury"
  },
  {
    title: "Home Compostable Coffee",
    desc: "Integrating plant-based degassing valves and compostable films to create home-friendly coffee bags.",
    link: "/topics/home-compostable-coffee-bags",
    image: "/imgs/store/products/rice-paper-500g-standup.png",
    tag: "Coffee",
    badgeType: "eco"
  },
  {
    title: "Recyclable Snacks Pouch",
    desc: "Preserving chips and granola freshness using EVOH-coated recyclable polyethylene structures.",
    link: "/topics/recyclable-snack-packaging",
    image: "/imgs/store/products/recyclable-3ss-evoh-pe-102x152.png",
    tag: "Snacks",
    badgeType: "liquid"
  },
  {
    title: "Mono-Material PE Guide",
    desc: "Technical deep-dive on single-polymer laminates that fulfill circular economy requirements.",
    link: "/topics/mono-material-pe-pouches",
    image: "/imgs/store/products/conven-sup-met-zip-premium.png",
    tag: "Technology",
    badgeType: "accent"
  },
  {
    title: "PFAS-Free Food Packaging",
    desc: "Ensuring compliance with local environmental acts by utilizing PFAS-free barriers.",
    link: "/topics/pfas-free-food-packaging",
    image: "/imgs/store/products/eco-standup-premium.png",
    tag: "Compliance",
    badgeType: "eco"
  },
  {
    title: "USA Compostable Standards",
    desc: "Guidelines on ASTM D6400 certification, BPI labels, and local state labeling mandates.",
    link: "/usa/compostable-packaging",
    image: "/imgs/store/products/rice-paper-500g-standup.png",
    tag: "USA",
    badgeType: "eco"
  },
  {
    title: "USA Coffee Bags Market",
    desc: "US retail trends in organic specialty coffee packaging and eco-friendly packaging rules.",
    link: "/usa/coffee-packaging",
    image: "/imgs/store/products/eco-flatbottom-premium.png",
    tag: "USA",
    badgeType: "accent"
  },
  {
    title: "Coffee Roastery Case Study",
    desc: "How a specialty Seattle roastery shifted to 100% compostable bags without dropping speed.",
    link: "/case-studies/coffee-roastery",
    image: "/imgs/store/products/eco-flatbottom-premium.png",
    tag: "Case Study",
    badgeType: "accent"
  },
  {
    title: "Tea Brand Case Study",
    desc: "Transitioning to plastic-free kraft bags to align with clean label values.",
    link: "/case-studies/tea-brand",
    image: "/imgs/store/products/rice-paper-500g-standup.png",
    tag: "Case Study",
    badgeType: "eco"
  },
  {
    title: "Pet Treats Case Study",
    desc: "Developing high-volume pet food pouches with puncture-resistant layers and durable zippers.",
    link: "/case-studies/pet-treats",
    image: "/imgs/store/products/conven-sup-met-zip-premium.png",
    tag: "Case Study",
    badgeType: "liquid"
  },
  {
    title: "Chocolate Brand Case Study",
    desc: "Eco-luxe chocolate brand showcases premium rigid box and compostable pouch designs.",
    link: "/case-studies/chocolate-brand",
    image: "/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp",
    tag: "Case Study",
    badgeType: "luxury"
  }
];

// ============================================
// NEO-BRUTALIST COMPONENTS (Local)
// ============================================

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const Typewriter = ({ words }: { words: string[] }) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  
  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    const typeSpeed = isDeleting ? 100 : 200
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
         // Finished typing word, wait before deleting
         setTimeout(() => setIsDeleting(true), 2000)
         return
      }
      
      if (isDeleting && text === '') {
         // Finished deleting, move to next word
         setIsDeleting(false)
         setWordIndex((prev) => prev + 1)
         return
      }
      
      setText(currentWord.substring(0, isDeleting ? text.length - 1 : text.length + 1))
    }, typeSpeed)
    
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words])

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
      {text}<span className="text-black opacity-50 ml-1 animate-pulse">|</span>
    </span>
  )
}

const SocialVideoCard = ({ videoSrc, coverSrc, index }: { videoSrc: string, coverSrc: string, index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = (e: MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(true)
  }

  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] snap-center">
      <NeoCard className="p-2 h-full">
        <div 
          className="aspect-[9/16] relative bg-black overflow-hidden cursor-pointer group" 
          onClick={!isPlaying ? handlePlay : undefined}
        >
          {!isPlaying ? (
            <>
              <img 
                src={coverSrc} 
                alt={`Social Video ${index}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 bg-[#D4FF00] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-black fill-black ml-1" />
                </div>
              </div>
            </>
          ) : (
            <video 
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="mt-2 flex justify-between items-center font-['JetBrains_Mono'] text-xs font-bold px-1 uppercase">
          <span>@POUCH.ECO</span>
          <span>#{index.toString().padStart(3, '0')}</span>
        </div>
      </NeoCard>
    </div>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function PouchHomePage() {
  const navigate = useNavigate()
  const productsRef = useRef<HTMLElement>(null)

  // See Our Work Carousel state and handlers
  const [activeWorkDot, setActiveWorkDot] = useState(0)
  const workScrollerRef = useRef<HTMLDivElement>(null)
  const [isWorkDown, setIsWorkDown] = useState(false)
  const [startWorkX, setStartWorkX] = useState(0)
  const [scrollLeftWorkState, setScrollLeftWorkState] = useState(0)
  const [isWorkDragging, setIsWorkDragging] = useState(false)

  const handleWorkMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!workScrollerRef.current) return
    setIsWorkDown(true)
    setIsWorkDragging(false)
    setStartWorkX(e.pageX - workScrollerRef.current.offsetLeft)
    setScrollLeftWorkState(workScrollerRef.current.scrollLeft)
  }

  const handleWorkMouseLeave = () => {
    setIsWorkDown(false)
  }

  const handleWorkMouseUp = () => {
    setIsWorkDown(false)
    setTimeout(() => setIsWorkDragging(false), 50)
  }

  const handleWorkMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isWorkDown || !workScrollerRef.current) return
    e.preventDefault()
    setIsWorkDragging(true)
    const x = e.pageX - workScrollerRef.current.offsetLeft
    const walk = (x - startWorkX) * 1.5 // Drag sensitivity
    workScrollerRef.current.scrollLeft = scrollLeftWorkState - walk
  }

  const handleWorkScroll = (e: UIEvent<HTMLDivElement>) => {
    const scroller = e.currentTarget
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2
    const items = scroller.querySelectorAll('.work-carousel-item-node')
    let closestIndex = 0
    let minDistance = Infinity

    items.forEach((item, index) => {
      const itemElement = item as HTMLDivElement
      const itemCenter = itemElement.offsetLeft + itemElement.clientWidth / 2
      const distance = Math.abs(itemCenter - scrollerCenter)

      if (distance < minDistance) {
        minDistance = distance
        closestIndex = index
      }
    })

    setActiveWorkDot(closestIndex)
  }

  const scrollToWorkSlide = (index: number) => {
    if (!workScrollerRef.current) return
    const items = workScrollerRef.current.querySelectorAll('.work-carousel-item-node')
    if (!items[index]) return

    const targetItem = items[index] as HTMLDivElement
    const scrollerWidth = workScrollerRef.current.clientWidth
    const itemWidth = targetItem.offsetWidth
    
    const targetScrollLeft = targetItem.offsetLeft - (scrollerWidth / 2) + (itemWidth / 2)
    
    workScrollerRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    })
    
    setActiveWorkDot(index)
  }

  // See Our Know How Carousel state and handlers
  const [activeKnowHowDot, setActiveKnowHowDot] = useState(0)
  const knowHowScrollerRef = useRef<HTMLDivElement>(null)
  const [isKnowHowDown, setIsKnowHowDown] = useState(false)
  const [startKnowHowX, setStartKnowHowX] = useState(0)
  const [scrollLeftKnowHowState, setScrollLeftKnowHowState] = useState(0)
  const [isKnowHowDragging, setIsKnowHowDragging] = useState(false)

  const handleKnowHowMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!knowHowScrollerRef.current) return
    setIsKnowHowDown(true)
    setIsKnowHowDragging(false)
    setStartKnowHowX(e.pageX - knowHowScrollerRef.current.offsetLeft)
    setScrollLeftKnowHowState(knowHowScrollerRef.current.scrollLeft)
  }

  const handleKnowHowMouseLeave = () => {
    setIsKnowHowDown(false)
  }

  const handleKnowHowMouseUp = () => {
    setIsKnowHowDown(false)
    setTimeout(() => setIsKnowHowDragging(false), 50)
  }

  const handleKnowHowMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isKnowHowDown || !knowHowScrollerRef.current) return
    e.preventDefault()
    setIsKnowHowDragging(true)
    const x = e.pageX - knowHowScrollerRef.current.offsetLeft
    const walk = (x - startKnowHowX) * 1.5 // Drag sensitivity
    knowHowScrollerRef.current.scrollLeft = scrollLeftKnowHowState - walk
  }

  const handleKnowHowScroll = (e: UIEvent<HTMLDivElement>) => {
    const scroller = e.currentTarget
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2
    const items = scroller.querySelectorAll('.knowhow-carousel-item-node')
    let closestIndex = 0
    let minDistance = Infinity

    items.forEach((item, index) => {
      const itemElement = item as HTMLDivElement
      const itemCenter = itemElement.offsetLeft + itemElement.clientWidth / 2
      const distance = Math.abs(itemCenter - scrollerCenter)

      if (distance < minDistance) {
        minDistance = distance
        closestIndex = index
      }
    })

    setActiveKnowHowDot(closestIndex)
  }

  const scrollToKnowHowSlide = (index: number) => {
    if (!knowHowScrollerRef.current) return
    const items = knowHowScrollerRef.current.querySelectorAll('.knowhow-carousel-item-node')
    if (!items[index]) return

    const targetItem = items[index] as HTMLDivElement
    const scrollerWidth = knowHowScrollerRef.current.clientWidth
    const itemWidth = targetItem.offsetWidth
    
    const targetScrollLeft = targetItem.offsetLeft - (scrollerWidth / 2) + (itemWidth / 2)
    
    knowHowScrollerRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    })
    
    setActiveKnowHowDot(index)
  }

  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const videoRef3 = useRef<HTMLVideoElement>(null)
  const videoRef4 = useRef<HTMLVideoElement>(null)
  const videoRef5 = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (activeHeroIndex === 0) {
      videoRef1.current?.play().catch((err) => console.log(err))
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 1) {
      videoRef2.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 2) {
      videoRef3.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 3) {
      videoRef4.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else {
      videoRef5.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
    }
  }, [activeHeroIndex])

  const offsetVal = isMobile ? 16 : 40
  const slideVal = isMobile ? 120 : 260

  const card1Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card2Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, 10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card3Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card4Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, 10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card5Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const [slogan, setSlogan] = useState("Your Customers Care What Their Products Are Made Of & Where They End Up. Your Packaging Should Too.");

  useEffect(() => {
    const B2C_SLOGANS = [
      "You poured your heart into what’s inside. Let’s make sure the outside honors that promise.",
      "Your product tells a story of care. Your packaging should be its perfect ending.",
      "Packaging as thoughtful and purposeful as the product inside.",
      "Earn their trust before they even open the bag. Packaging that shares your customers' deepest values.",
      "They love what you make. Show them you care about the world they live in.",
      "Speak to your customers' hearts with packaging that leaves no trace.",
      "Beautiful on the shelf. Harmless in the soil. Packaging your brand can be proud of.",
      "Leave a legacy of quality, not a footprint of waste.",
      "Made with purpose. Returned to the earth."
    ];
    const randomIdx = Math.floor(Math.random() * B2C_SLOGANS.length);
    setSlogan(B2C_SLOGANS[randomIdx]);
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // 3D Pouch Interactive states
  const [activePouchModel, setActivePouchModel] = useState<'spouted' | 'flat-bottom'>('spouted')
  const [threeTilt, setThreeTilt] = useState({ x: 0, y: 0 })
  const [threeScrollPercent, setThreeScrollPercent] = useState(0)
  const threeContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleThreeScroll = () => {
      if (!threeContainerRef.current) return
      const rect = threeContainerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      const start = rect.top - viewportHeight
      const totalRange = rect.height + viewportHeight
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight - rect.top) / totalRange
        setThreeScrollPercent(Math.max(0, Math.min(1, progress)))
      }
    }
    window.addEventListener('scroll', handleThreeScroll, { passive: true })
    handleThreeScroll()
    return () => window.removeEventListener('scroll', handleThreeScroll)
  }, [])

  const handleThreeMouseMove = (e: React.MouseEvent) => {
    if (!threeContainerRef.current) return
    const rect = threeContainerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setThreeTilt({ x: x * 25, y: y * -25 })
  }

  const handleThreeMouseLeave = () => {
    setThreeTilt({ x: 0, y: 0 })
  }

  // Floating elements animation
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const PRODUCTS = [
    {
      id: 'stand-up',
      name: 'Stand Up Pouch',
      description: 'The industry standard. Perfect for snacks & supplements.',
      price: '$0.50',
      stats: { moq: '500', material: 'BIO/PCR', barrier: 'HIGH' },
      color: 'bg-[#D4FF00]', // Yellow
      image: '/3d/2d-pouch/pouch2.webp'
    },
    {
      id: 'flat-bottom',
      name: 'Flat Bottom',
      description: 'Premium box-like stability. Best for coffee & tea.',
      price: '$0.65',
      stats: { moq: '500', material: 'RECYCLABLE', barrier: 'MAX' },
      color: 'bg-[#00FFFF]', // Cyan
      image: '/3d/2d-pouch/pouch1.webp'
    },
    {
      id: 'spouted',
      name: 'Spouted Pouch',
      description: 'Flexible alternative to bottles. Lighter & cheaper.',
      price: '$0.90',
      stats: { moq: '1K', material: 'MONO-PE', barrier: 'LIQUID' },
      color: 'bg-[#FF00FF]', // Magenta
      image: '/3d/2d-pouch/pouch4.webp'
    }
  ]

  // Add scroll detection for marquee speed boost
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout
    
    const handleScroll = () => {
      document.body.classList.add('is-scrolling')
      
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 150)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  return (
    <PouchLayout>
      <Helmet>
        <title>POUCH.ECO - Sustainable Eco Packaging for Startups</title>
        <meta name="description" content="Sustainable packaging made simple. Low MOQ compostable pouches for startups. Get started with 500 units." />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video"
          >
            <source src="/video/pouch-eco-marketing-videos/problem.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/brand-reveal.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/Performance.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">ECO_SYSTEM v2026</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                Start.<br/>
                Scale.<br/>
                <Typewriter words={["Sustain.", "Eco.", "Digital."]} />
              </h1>

              {/* Neo-brutalist Emotional Slogan Block */}
              <div className="bg-[#D4FF00] border-4 border-black p-4 rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['Space_Grotesk'] text-lg font-bold uppercase text-black leading-snug max-w-md">
                "{slogan}"
              </div>

              <div className="bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md">
                <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl">
                  &gt; Eco packaging from 500 units.<br/>
                  &gt; Compostable // Recyclable // Bio-based.<br/>
                  &gt; Fast turnaround. No BS.
                </p>
                {/* Eco Material Badges */}
                <div className="flex gap-4 mt-4 border-t-2 border-black pt-4">
                  <img src="/eco-logo/transparent-bkg/compost.png" alt="Compostable" className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/recycle.png" alt="Recyclable" className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/biope.png" alt="Bio-based" className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/pcr.png" alt="PCR" className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Book Consultation</NeoButton>
                <NeoButton to="/materials">View Materials</NeoButton>
              </div>
            </div>

            {/* Right Visual - Rotating Card Stack */}
            <div className="relative w-full max-w-md aspect-square mx-auto lg:ml-auto lg:mr-0 mb-10 md:mb-0">
              
              {/* Card 1: Bag Video */}
              <motion.div
                variants={card1Variants}
                animate={activeHeroIndex === 0 ? "front" : (activeHeroIndex === 4 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-[#00FFFF] w-full h-full !p-0 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF] to-[#FF00FF] opacity-20 z-0 mix-blend-multiply" />
                  <video
                    ref={videoRef1}
                    muted
                    playsInline
                    poster="/video/hero/cover.jpg"
                    onEnded={() => setActiveHeroIndex(1)}
                    className="w-full h-full object-cover relative z-10 mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/bag.mp4" type="video/mp4" />
                    <source src="/video/hero/bag.mov" type="video/quicktime" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    COMPOSTABLE_OK
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Card 2: Recycle Video */}
              <motion.div
                variants={card2Variants}
                animate={activeHeroIndex === 1 ? "front" : (activeHeroIndex === 0 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-[#D4FF00] w-full h-full !p-0 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00] to-[#00FFFF] opacity-20 z-0 mix-blend-multiply" />
                  <video
                    ref={videoRef2}
                    muted
                    playsInline
                    poster="/video/hero/cover.jpg"
                    onEnded={() => setActiveHeroIndex(2)}
                    className="w-full h-full object-cover relative z-10 mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/recycle/remake_this_image_to_square_.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    RECYCLABLE_OK
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Card 3: Industrial Video */}
              <motion.div
                variants={card3Variants}
                animate={activeHeroIndex === 2 ? "front" : (activeHeroIndex === 1 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-[#FF00FF] w-full h-full !p-0 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF] to-[#00FFFF] opacity-20 z-0 mix-blend-multiply" />
                  <video
                    ref={videoRef3}
                    muted
                    playsInline
                    poster="/video/hero/cover.jpg"
                    onEnded={() => setActiveHeroIndex(3)}
                    className="w-full h-full object-cover relative z-10 mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/industrial/industrial.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    INDUSTRIAL_OK
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Card 4: PCR Video */}
              <motion.div
                variants={card4Variants}
                animate={activeHeroIndex === 3 ? "front" : (activeHeroIndex === 2 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-white w-full h-full !p-0 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-[#00FFFF] opacity-25 z-0 mix-blend-multiply" />
                  <video
                    ref={videoRef4}
                    muted
                    playsInline
                    poster="/video/hero/cover.jpg"
                    onEnded={() => setActiveHeroIndex(4)}
                    className="w-full h-full object-cover relative z-10 mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/PCR/pcr.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    PCR_BARRIER_OK
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Card 5: BioPE Video */}
              <motion.div
                variants={card5Variants}
                animate={activeHeroIndex === 4 ? "front" : (activeHeroIndex === 3 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-[#D4FF00] w-full h-full !p-0 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00] to-[#FF00FF] opacity-20 z-0 mix-blend-multiply" />
                  <video
                    ref={videoRef5}
                    muted
                    playsInline
                    poster="/video/hero/cover.jpg"
                    onEnded={() => setActiveHeroIndex(0)}
                    className="w-full h-full object-cover relative z-10 mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/biope/biope.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    BIO_BASED_OK
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Decorative Foreground Badge */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-[#FF00FF] border-4 border-black flex items-center justify-center animate-bounce z-30">
                <span className="font-black text-sm md:text-xl rotate-[-15deg]">500!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Logo Marquee - Neo-Brutalist Style */}
      <section className="py-16 px-4 bg-white border-y-4 border-black overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <span className="font-['JetBrains_Mono'] font-bold uppercase">TRUSTED_BY</span>
          </div>
          <h2 className="font-black text-4xl md:text-5xl uppercase mb-4">
            Join <span className="text-[#10b981]">500+</span> Brands
          </h2>
          <p className="text-lg text-gray-700 font-['Space_Grotesk']">
            From startups to established names - they all started with 500 units
          </p>
        </div>

        {/* Logo Strip 1 - Scrolling Left */}
        <div className="relative -rotate-1 mb-6">
          <div className="bg-black border-4 border-black py-6 overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* First set */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].map((logo, idx) => (
                <div 
                  key={`logo-1-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].map((logo, idx) => (
                <div 
                  key={`logo-2-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Strip 2 - Scrolling Right */}
        <div className="relative rotate-1">
          <div className="bg-[#10b981] border-4 border-black py-6 overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* First set */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].slice().reverse().map((logo, idx) => (
                <div 
                  key={`logo-3-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].slice().reverse().map((logo, idx) => (
                <div 
                  key={`logo-4-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom CSS for infinite scroll animations */}
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes scroll-left-fast {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right-fast {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 13s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 13s linear infinite;
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }

          /* Speed up on page scroll */
          body.is-scrolling .animate-scroll-left {
            animation: scroll-left-fast 4s linear infinite;
          }

          body.is-scrolling .animate-scroll-right {
            animation: scroll-right-fast 4s linear infinite;
          }
        `}</style>
      </section>

      {/* Interactive 3D Eco Pouch Showcase */}
      <section 
        ref={threeContainerRef}
        onMouseMove={handleThreeMouseMove}
        onMouseLeave={handleThreeMouseLeave}
        className="py-24 bg-neutral-100 border-b-4 border-black overflow-hidden relative animate-fade-in"
      >
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block bg-[#10b981] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white font-black text-xs uppercase tracking-wider mb-6">
              ✨ Interactive 3D Showcase
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-black">
              Eco Bags in <span className="text-[#10b981]">3D Space</span>
            </h2>
            <p className="font-['JetBrains_Mono'] text-lg mt-6 leading-relaxed max-w-2xl mx-auto text-neutral-800">
              Rotate, tilt, and inspect the certified organic structural barriers of our green pouches. Move your mouse to tilt, scroll to spin, or toggle models below.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Controls & Marketing Copy (5 columns) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Card 1: Spouted Pouch */}
              <button
                onClick={() => setActivePouchModel('spouted')}
                className={`w-full text-left p-8 border-4 border-black transition-all duration-300 relative ${
                  activePouchModel === 'spouted'
                    ? 'bg-[#D4FF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-x-1 -translate-y-1'
                    : 'bg-white hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
                      💧 Liquids & Purees
                    </span>
                    <h3 className="font-black text-2xl uppercase text-black">
                      Industrial Compostable Spouted Pouch
                    </h3>
                  </div>
                  <span className="text-3xl bg-white border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">🥤</span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-sm mt-4 leading-relaxed text-neutral-800">
                  Certified industrial compostable flexible pouch featuring a fully plant-based rigid spout. Replaces conventional plastic spout barrier options with zero plastic footprint.
                </p>

                <div className="mt-6 pt-4 border-t-2 border-dashed border-black grid grid-cols-2 gap-4 font-['JetBrains_Mono'] text-xs text-black">
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">MOQ:</span>
                    <span className="font-black bg-white px-2 py-0.5 border border-black inline-block mt-1">2,000 units</span>
                  </div>
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">Certifications:</span>
                    <span className="font-black text-[#10b981] bg-white px-2 py-0.5 border border-black inline-block mt-1">EN 13432, ASTM D6400</span>
                  </div>
                </div>
              </button>

              {/* Card 2: Flat Bottom Pouch */}
              <button
                onClick={() => setActivePouchModel('flat-bottom')}
                className={`w-full text-left p-8 border-4 border-black transition-all duration-300 relative ${
                  activePouchModel === 'flat-bottom'
                    ? 'bg-[#D4FF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-x-1 -translate-y-1'
                    : 'bg-white hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
                      🌱 Dry Goods & Coffee
                    </span>
                    <h3 className="font-black text-2xl uppercase text-black">
                      Home Compostable Flat Bottom Pouch
                    </h3>
                  </div>
                  <span className="text-3xl bg-white border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">☕</span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-sm mt-4 leading-relaxed text-neutral-800">
                  Premium 100% home compostable box bottom structure that delivers outstanding shelf presence. Decomposes safely and naturally in home backyard compost bins.
                </p>

                <div className="mt-6 pt-4 border-t-2 border-dashed border-black grid grid-cols-2 gap-4 font-['JetBrains_Mono'] text-xs text-black">
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">MOQ:</span>
                    <span className="font-black bg-white px-2 py-0.5 border border-black inline-block mt-1">1,000 units</span>
                  </div>
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">Certifications:</span>
                    <span className="font-black text-[#10b981] bg-white px-2 py-0.5 border border-black inline-block mt-1">OK Compost HOME</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Right 3D Viewport (7 columns) */}
            <div className="lg:col-span-7 h-[500px] md:h-[600px] bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative flex items-center justify-center overflow-hidden">
              <div className="w-full h-full relative z-10">
                <ThreePouchViewer 
                  modelUrl={activePouchModel === 'spouted' ? '/3d/3d-pouch/spouted-pouch.glb' : '/3d/3d-pouch/coffee-pouch.glb'} 
                  tilt={threeTilt} 
                  scrollPercent={threeScrollPercent} 
                  isMobile={false} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See Our Work Section (Vilgain Style) */}
      <section id="work" className="py-24 bg-white overflow-hidden border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-center">
            <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
              REAL_PRODUCTS • REAL_BRANDS
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
              See Our <span className="text-[#10b981]">Work</span>
            </h2>
            <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
              Browse real product photos from brands we've helped launch. Your custom packaging could be next.
            </p>
          </div>
        </div>

        {/* Scrollable Work Track */}
        <div className="w-full overflow-visible py-8">
          <div 
            ref={workScrollerRef}
            onMouseDown={handleWorkMouseDown}
            onMouseLeave={handleWorkMouseLeave}
            onMouseUp={handleWorkMouseUp}
            onMouseMove={handleWorkMouseMove}
            onScroll={handleWorkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-[5%] md:px-[10%] py-4 scrollbar-none select-none cursor-grab active:cursor-grabbing"
          >
            {ourWorkCards.map((item, idx) => {
              return (
                <div 
                  key={idx} 
                  className="work-carousel-item-node flex-none w-[76vw] md:w-[24vw] min-w-[280px] max-w-[340px] snap-center group"
                >
                  <div 
                    className={`w-full h-[400px] md:h-[460px] rounded-3xl relative overflow-hidden transition-all duration-500 border ${
                      activeWorkDot === idx
                        ? 'border-neutral-900/10 shadow-lg scale-[1.01] z-20' 
                        : 'border-neutral-200/50 opacity-90 z-10'
                    }`}
                  >
                    {/* Image layer: full width of the block */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    
                    {/* Subtle top overlay for the white tag */}
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
                    
                    {/* Dark gradient overlay at the bottom for readability */}
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/44 to-transparent z-10" />
                    
                    {/* Top Info Overlay */}
                    <div className="absolute top-6 left-6 z-20 flex justify-between items-start right-6">
                      <span className={`text-[9px] uppercase font-extrabold px-2.5 py-1 rounded-full border shadow-sm ${
                        item.badgeType === 'eco' 
                          ? 'bg-emerald-600/90 text-white border-emerald-500/10' 
                          : item.badgeType === 'liquid'
                          ? 'bg-blue-600/90 text-white border-blue-500/10'
                          : item.badgeType === 'luxury'
                          ? 'bg-purple-600/90 text-white border-purple-500/10'
                          : 'bg-orange-600/90 text-white border-orange-500/10'
                      }`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="relative z-20 p-6 w-full flex flex-col items-start mt-auto h-full justify-end">
                      <h3 className="text-white font-bold text-base md:text-lg mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-neutral-200 text-xs font-light mb-4 leading-normal line-clamp-2">
                        {item.desc}
                      </p>
                      
                      <Link 
                        to={item.link}
                        className="px-6 py-2 bg-white hover:bg-neutral-100 text-neutral-950 font-bold rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 shadow-md self-start inline-flex items-center gap-1.5"
                      >
                        Get Quote <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination Dots for Work Carousel */}
        <div className="flex justify-center gap-2 pb-6 flex-wrap px-4 max-w-lg mx-auto">
          {ourWorkCards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToWorkSlide(idx)}
              className={`w-2 h-2 rounded-full border-none transition-all duration-300 ${
                activeWorkDot === idx 
                  ? 'bg-neutral-800 scale-125 shadow-sm' 
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* See Our Know How Section (Vilgain Style) */}
      <section id="know-how" className="py-24 bg-white overflow-hidden border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-center">
            <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
              KNOWLEDGE_BASE • GUIDES
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
              See Our <span className="text-[#10b981]">Know How</span>
            </h2>
            <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
              Explore our comprehensive knowledge base on sustainable materials, packaging specifications, cost structures, and D2C strategies.
            </p>
          </div>
        </div>

        {/* Scrollable Know How Track */}
        <div className="w-full overflow-visible py-8">
          <div 
            ref={knowHowScrollerRef}
            onMouseDown={handleKnowHowMouseDown}
            onMouseLeave={handleKnowHowMouseLeave}
            onMouseUp={handleKnowHowMouseUp}
            onMouseMove={handleKnowHowMouseMove}
            onScroll={handleKnowHowScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-[5%] md:px-[10%] py-4 scrollbar-none select-none cursor-grab active:cursor-grabbing"
          >
            {seoKnowHowCards.map((item, idx) => {
              return (
                <div 
                  key={idx} 
                  className="knowhow-carousel-item-node flex-none w-[76vw] md:w-[24vw] min-w-[280px] max-w-[340px] snap-center group"
                >
                  <div 
                    className={`w-full h-[400px] md:h-[460px] rounded-3xl relative overflow-hidden transition-all duration-500 border ${
                      activeKnowHowDot === idx
                        ? 'border-neutral-900/10 shadow-lg scale-[1.01] z-20' 
                        : 'border-neutral-200/50 opacity-90 z-10'
                    }`}
                  >
                    {/* Image layer: full width of the block */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    
                    {/* Subtle top overlay for the white tag */}
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
                    
                    {/* Dark gradient overlay at the bottom for readability */}
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/44 to-transparent z-10" />
                    
                    {/* Top Info Overlay */}
                    <div className="absolute top-6 left-6 z-20 flex justify-between items-start right-6">
                      <span className={`text-[9px] uppercase font-extrabold px-2.5 py-1 rounded-full border shadow-sm ${
                        item.badgeType === 'eco' 
                          ? 'bg-emerald-600/90 text-white border-emerald-500/10' 
                          : item.badgeType === 'liquid'
                          ? 'bg-blue-600/90 text-white border-blue-500/10'
                          : item.badgeType === 'luxury'
                          ? 'bg-purple-600/90 text-white border-purple-500/10'
                          : 'bg-orange-600/90 text-white border-orange-500/10'
                      }`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="relative z-20 p-6 w-full flex flex-col items-start mt-auto h-full justify-end">
                      <h3 className="text-white font-bold text-base md:text-lg mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-neutral-200 text-xs font-light mb-4 leading-normal line-clamp-2">
                        {item.desc}
                      </p>
                      
                      <Link 
                        to={item.link}
                        className="px-6 py-2 bg-white hover:bg-neutral-100 text-neutral-950 font-bold rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 shadow-md self-start inline-flex items-center gap-1.5"
                      >
                        Read Guide <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination Dots for Know How Carousel */}
        <div className="flex justify-center gap-2 pb-6 flex-wrap px-4 max-w-xl mx-auto">
          {seoKnowHowCards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToKnowHowSlide(idx)}
              className={`w-2 h-2 rounded-full border-none transition-all duration-300 ${
                activeKnowHowDot === idx 
                  ? 'bg-neutral-800 scale-125 shadow-sm' 
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Social Video Section - Added by AI */}
      <section className="py-24 px-4 md:px-6 max-w-[1920px] mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
            REAL PRODUCTS • REAL BRANDS
          </div>
          <h2 className="font-black text-5xl md:text-8xl uppercase mb-6 tracking-tighter">
            As Seen In <span className="text-[#10b981]">Social</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
            Watch how our pouches help brands go viral. Unboxing experiences that customers love to share.
          </p>
        </div>
        
        {/* Horizontal Scroll / Grid of Vertical Videos */}
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 md:px-0 md:justify-center scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <SocialVideoCard 
              key={num}
              index={num}
              videoSrc={`/video/social/social-${num}.mp4`}
              coverSrc={`/video/social/cover-${num}.jpg`}
            />
          ))}
        </div>
      </section>

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Feature Bento Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase leading-none">
            Core<br/>Features
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            SELECT_MATERIAL_BELOW
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Low MOQ */}
          <NeoCard className="md:col-span-2 bg-[#F0F0F0] relative overflow-hidden group">
            <div className="relative z-10">
              <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
              <h3 className="font-black text-3xl mb-4 uppercase">Low MOQ Protocol</h3>
              <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 max-w-md">
                Start with just 500 units. Test your market without massive inventory commitment. 
                Perfect for startups and new product launches.
              </p>
              <div className="flex gap-2">
                <NeoBadge color="bg-[#D4FF00]">500_MIN</NeoBadge>
                <NeoBadge color="bg-[#00FFFF]">Fast_Launch</NeoBadge>
              </div>
            </div>
             <img src="/imgs/infographic-low-moq.webp" className="absolute right-0 bottom-0 w-48 opacity-20 grayscale group-hover:scale-110 transition-transform duration-500" alt="Low MOQ" />
          </NeoCard>

          {/* Feature 2: Compostable */}
          <NeoCard color="bg-[#00FFFF]" className="flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <Leaf className="w-12 h-12 mb-4" />
              <h3 className="font-black text-3xl mb-2 uppercase">Bio_Matrix</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-4">Certified compostable materials. Industrial + home compost ready.</p>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4 relative z-10">
              STATUS: <span className="font-bold">BPI_CERTIFIED</span>
            </div>
            <img src="https://achievepack.com/imgs/infographic-compostable.webp" className="absolute right-[-20%] bottom-[-20%] w-64 opacity-20 grayscale rotate-12 group-hover:rotate-0 transition-transform duration-500" alt="Compostable" />
          </NeoCard>

          {/* Feature 3: Fast Turnaround */}
          <NeoCard color="bg-[#D4FF00]" className="flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <Flame className="w-12 h-12 mb-4" />
              <h3 className="font-black text-3xl mb-2 uppercase">Fast_Ship</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-4">Samples in 2-3 weeks. Production in 6-8 weeks. No delays.</p>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4 relative z-10">
              SPEED: <span className="font-bold">OPTIMIZED</span>
            </div>
            <img src="https://achievepack.com/imgs/infographic-fast-turnaround.webp" className="absolute right-[-20%] bottom-[-20%] w-64 opacity-20 grayscale rotate-12 group-hover:rotate-0 transition-transform duration-500" alt="Fast Turnaround" />
          </NeoCard>

          {/* Feature 4: High Barrier */}
          <NeoCard className="md:col-span-2 bg-white relative overflow-hidden group">
            <div className="relative z-10">
              <BoxIcon className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="font-black text-3xl mb-4 uppercase">High-Barrier Tech</h3>
              <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 max-w-lg">
                Multi-layer barrier structures. O2 + moisture blocking. 
                Keeps product fresh for 6-18 months shelf life.
              </p>
              <NeoButton to="/tech-specs" className="text-sm">View Tech Specs</NeoButton>
            </div>
            <img src="https://achievepack.com/imgs/feature-barrier-options.webp" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500 mask-image-gradient" alt="Barrier Options" />
          </NeoCard>
        </div>
      </section>

      {/* Neobrutalist Packaging Apps Section */}
      <section className="py-24 px-4 md:px-6 bg-[#00FFFF] border-t-4 border-black border-b-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-bold text-xs uppercase mb-6">
              ⚡ INTERACTIVE_UTILITIES
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-black">
              PACKAGING APP SUITE
            </h2>
            <p className="font-['Space_Grotesk'] text-lg mt-6 leading-relaxed max-w-2xl mx-auto text-black font-semibold">
              Engineer your pouch sizing and material specifications instantly. No guessing, no errors. Pure technical precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sizing Finder App */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-black">
                  <div className="w-16 h-16 border-4 border-black bg-[#D4FF00] flex items-center justify-center group-hover:rotate-3 transition-transform">
                    <SizingFinderIcon className="w-9 h-9 text-black" strokeWidth={2.5} />
                  </div>
                  <NeoBadge color="bg-[#FF00FF] text-white">SIZING APP</NeoBadge>
                </div>
                
                <h3 className="font-black text-3xl mb-4 uppercase">[SIZING FINDER APP]</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-neutral-800">
                  Calculate exact dimensions and capacity based on product weight & density presets. Match dimensions instantly with standard manufacturing templates.
                </p>

                <ul className="space-y-3 mb-8 font-['JetBrains_Mono'] text-xs font-bold text-black uppercase">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#D4FF00]"></span>
                    <span>Density presets (Coffee, Powders, Snacks)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#D4FF00]"></span>
                    <span>Volume calculations (Ounces, Grams, ML)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#D4FF00]"></span>
                    <span>Standard MoQ and size reference matching</span>
                  </li>
                </ul>
              </div>

              <NeoButton to="/size-guide" variant="dark" className="w-full text-center py-4 text-base font-black uppercase">
                LAUNCH SIZING APP →
              </NeoButton>
            </div>

            {/* Material Spec Finder App */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-black">
                  <div className="w-16 h-16 border-4 border-black bg-[#FF00FF] flex items-center justify-center group-hover:-rotate-3 transition-transform">
                    <MaterialSpecFinderIcon className="w-9 h-9 text-white" strokeWidth={2.5} />
                  </div>
                  <NeoBadge color="bg-[#D4FF00] text-black">MATERIAL SPEC</NeoBadge>
                </div>
                
                <h3 className="font-black text-3xl mb-4 uppercase">[SPEC FINDER APP]</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-neutral-800">
                  Search, filter, and compare water vapor & oxygen transmission rates (OTR/WVTR) across 15+ certified compostable, recyclable, PCR, and plant-based biopolymer structures.
                </p>

                <ul className="space-y-3 mb-8 font-['JetBrains_Mono'] text-xs font-bold text-black uppercase">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#FF00FF]"></span>
                    <span>15+ eco duplex & triplex structures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#FF00FF]"></span>
                    <span>OTR & WVTR performance level filtering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#FF00FF]"></span>
                    <span>Full thickness & weight sheets download</span>
                  </li>
                </ul>
              </div>

              <NeoButton to="/tech-specs" variant="dark" className="w-full text-center py-4 text-base font-black uppercase">
                LAUNCH SPEC FINDER →
              </NeoButton>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section ref={productsRef} className="py-24 bg-black border-y-4 border-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white mb-16 text-center">
            Choose Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <NeoCard key={product.id} className="h-full flex flex-col p-0 overflow-hidden">
                <div className={`relative bg-white p-6 h-full flex flex-col`}>
                  <div className="bg-gray-100 border-2 border-black aspect-square mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 ${product.color} opacity-20`} />
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-['JetBrains_Mono'] text-xs font-bold z-10">
                      ID: {product.id.toUpperCase()}
                    </div>
                  </div>

                  <h3 className="font-black text-3xl mb-2 uppercase">{product.name}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm mb-6 flex-grow">{product.description}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 font-['JetBrains_Mono'] text-xs border-y-2 border-black py-4 bg-gray-50">
                    <div className="text-center">
                      <div className="font-bold">MOQ</div>
                      <div>{product.stats.moq}</div>
                    </div>
                    <div className="text-center border-l-2 border-black">
                      <div className="font-bold">MAT</div>
                      <div>{product.stats.material}</div>
                    </div>
                    <div className="text-center border-l-2 border-black">
                      <div className="font-bold">BAR</div>
                      <div>{product.stats.barrier}</div>
                    </div>
                  </div>

                  <div className="text-center mb-4 font-black text-2xl">{product.price}</div>

                  <NeoButton className="w-full" href="https://calendly.com/30-min-free-packaging-consultancy">
                    BOOK CALL
                  </NeoButton>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Resource & Circular Economy Guides Library */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-bold text-xs uppercase mb-6">
              📚 KNOWLEDGE_PORTAL
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-black">
              ECO RESOURCE & LIBRARY
            </h2>
            <p className="font-['Space_Grotesk'] text-lg mt-6 leading-relaxed text-neutral-800 font-semibold">
              Deep-dive technical reports, global compliance playbooks, and circular economy research drafted by certified experts to keep your brand aligned.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-['Space_Grotesk'] text-black">
            {/* Guide 1: EU PPWR Compliance */}
            <NeoCard color="bg-white" className="flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#D4FF00] border-2 border-black text-black px-2 py-0.5 text-[10px] font-black uppercase font-['JetBrains_Mono']">
                    COMPLIANCE_2026
                  </span>
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase leading-tight group-hover:text-[#10b981] transition-colors">
                  EU PPWR Compliance Guide
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed mb-6 text-neutral-600">
                  Detailed analysis of void space ratios, harmonized recycling sorting labels, and eco-modulated modulation fees relief for EU-bound brand owners.
                </p>
              </div>
              <NeoButton to="/blog/eu-ppwr-compliance-guide" className="text-xs !py-2.5 !px-4 w-full text-center">
                Read Playbook →
              </NeoButton>
            </NeoCard>

            {/* Guide 2: Stamp Foil Recyclability */}
            <NeoCard color="bg-white" className="flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#00FFFF] border-2 border-black text-black px-2 py-0.5 text-[10px] font-black uppercase font-['JetBrains_Mono']">
                    RECYCLING_SPECS
                  </span>
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase leading-tight group-hover:text-[#10b981] transition-colors">
                  Stamp Foil Recyclability
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed mb-6 text-neutral-600">
                  How hot stamp foils and metallic decorative embellishments affect sorting telemetry in municipal mono-material recycling streams.
                </p>
              </div>
              <NeoButton to="/blog/stamp-foil-recyclability" className="text-xs !py-2.5 !px-4 w-full text-center">
                Read Research →
              </NeoButton>
            </NeoCard>

            {/* Guide 3: Compostable Zipper Study */}
            <NeoCard color="bg-white" className="flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#FF00FF] text-white border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase font-['JetBrains_Mono']">
                    MATERIAL_SCIENCE
                  </span>
                  <Zap className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase leading-tight group-hover:text-[#10b981] transition-colors">
                  Compostable Zipper Durability
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed mb-6 text-neutral-600">
                  Analyzing oxygen transmission rates and tensile grip durability of 100% plant-based reclosure zippers without removal requirements.
                </p>
              </div>
              <NeoButton to="/topics/compostable-zipper-durability" className="text-xs !py-2.5 !px-4 w-full text-center">
                Read Technical Study →
              </NeoButton>
            </NeoCard>

            {/* Guide 4: Custom vs Standard */}
            <NeoCard color="bg-[#D4FF00]" className="flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-black text-[#D4FF00] border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase font-['JetBrains_Mono']">
                    PROCUREMENT_ROI
                  </span>
                  <Leaf className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase leading-tight group-hover:text-white transition-colors">
                  Standard Runs vs. Custom Specs
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed mb-6 text-neutral-850">
                  Decision matrix comparing pre-made online packaging stock models with custom-engineered bulk B2B production specs to optimize unit pricing.
                </p>
              </div>
              <NeoButton to="/topics/custom-vs-standard-packaging" variant="secondary" className="text-xs !py-2.5 !px-4 w-full text-center">
                Compare Spec Sheets →
              </NeoButton>
            </NeoCard>
          </div>

          {/* Quick links list for remaining guides */}
          <div className="mt-12 bg-neutral-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid md:grid-cols-2 lg:grid-cols-3 gap-4 font-['JetBrains_Mono'] text-sm font-bold uppercase">
            <Link to="/topics/real-world-sustainability" className="flex items-center justify-between p-3 border-2 border-black bg-white hover:bg-[#D4FF00] transition-colors group">
              <span>🌱 Real-World Circular Sustainability</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/topics/compostable-spouted-pouches" className="flex items-center justify-between p-3 border-2 border-black bg-white hover:bg-[#00FFFF] transition-colors group">
              <span>💧 Spouted Biopolymer Composting</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/solutions/citrus-oil-packaging" className="flex items-center justify-between p-3 border-2 border-black bg-white hover:bg-[#FF00FF] hover:text-white transition-colors group">
              <span className="group-hover:text-white">🍊 Citrus Oil Protective Barriers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <NeoCard color="bg-[#FF00FF]" className="text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-white fill-white" />
            ))}
          </div>
          <blockquote className="font-['JetBrains_Mono'] text-xl font-bold text-white mb-6 leading-relaxed">
            "Started with 500 pouches from POUCH.ECO. Best decision ever. Now ordering 10K+ monthly."
          </blockquote>
          <cite className="font-black text-lg text-white uppercase">
            - Sarah M., Brand Founder
          </cite>
        </NeoCard>
      </section>

      {/* Add animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) rotate(-15deg);
          }
          50% {
            transform: translateY(-10px) rotate(-15deg);
          }
        }
        .mask-image-gradient {
          mask-image: linear-gradient(to left, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to left, black 50%, transparent 100%);
        }
      `}</style>
    </PouchLayout>
  )
}
