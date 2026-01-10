import { motion, useInView, type Variants } from 'motion/react'
import { useRef } from 'react'

// Info box content structure
interface InfoBoxContent {
  title: string
  description: string
  badges?: string[]
}

interface CardData {
  image: string
  alt?: string
  title?: string
  hueA: number
  hueB: number
  leftInfo?: InfoBoxContent
  rightInfo?: InfoBoxContent
}

interface ScrollTriggeredCardsProps {
  cards: CardData[]
  className?: string
}

// Main card animation variants
const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

// Left info box animation - slides out from behind card to the left
const leftInfoVariants: Variants = {
  hidden: {
    x: 50,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: 0.3, // Starts after main card animation
    },
  },
}

// Right info box animation - slides out from behind card to the right
const rightInfoVariants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: 0.5, // Staggered 0.2s after left box
    },
  },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

// Info Box Component
function InfoBox({ content, side, isVisible }: { content: InfoBoxContent; side: 'left' | 'right'; isVisible: boolean }) {
  return (
    <motion.div
      className={`hidden lg:flex flex-col gap-2 p-5 bg-white rounded-2xl shadow-lg max-w-[280px] will-change-transform ${
        side === 'left' ? 'items-end text-right' : 'items-start text-left'
      }`}
      variants={side === 'left' ? leftInfoVariants : rightInfoVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{content.title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{content.description}</p>
      {content.badges && content.badges.length > 0 && (
        <div className={`flex flex-wrap gap-1.5 mt-2 ${side === 'left' ? 'justify-end' : 'justify-start'}`}>
          {content.badges.map((badge, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

// Card with Info Boxes Component
function Card({ image, alt, title, hueA, hueB, leftInfo, rightInfo }: CardData) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.6, once: false })
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      ref={ref}
      className="overflow-visible flex justify-center items-center relative pt-5 -mb-[120px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* Full width container for card + info boxes */}
      <div className="flex items-center justify-center gap-6 lg:gap-10 w-full max-w-6xl px-4">
        {/* Left Info Box */}
        {leftInfo && (
          <InfoBox content={leftInfo} side="left" isVisible={isInView} />
        )}

        {/* Main Card Container */}
        <div className="relative flex-shrink-0">
          {/* Splash background with clip-path */}
          <div 
            className="absolute inset-0 -z-10"
            style={{ 
              background,
              clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
              transform: 'translateX(-50%)',
              left: '50%',
              width: '500px',
            }}
          />
          <motion.div 
            className="w-[250px] md:w-[300px] h-[360px] md:h-[430px] flex flex-col justify-center items-center rounded-[20px] bg-white overflow-hidden origin-[10%_60%] will-change-transform"
            style={{
              boxShadow: '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)'
            }}
            variants={cardVariants}
          >
            <img 
              src={image} 
              alt={alt || title || 'Product image'}
              className="w-full h-[280px] md:h-[340px] object-cover"
            />
            {title && (
              <div className="p-4 w-full text-center">
                <span className="text-lg md:text-xl font-bold text-gray-800">{title}</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Info Box */}
        {rightInfo && (
          <InfoBox content={rightInfo} side="right" isVisible={isInView} />
        )}
      </div>
    </motion.div>
  )
}

export function ScrollTriggeredCards({ cards, className = '' }: ScrollTriggeredCardsProps) {
  return (
    <div className={`mx-auto pb-[100px] w-full ${className}`}>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  )
}

// Preset card configurations for Chips demo site
export const CHIPS_SCROLL_CARDS: CardData[] = [
  { 
    image: '/imgs/demo-site/chips/a_achievepack_fiery_chili_lime_hero_kv_4003688.webp',
    alt: 'Fiery Chili Lime tortilla chips hero key visual',
    title: 'Fiery Chili Lime',
    hueA: 340, hueB: 10,
    leftInfo: {
      title: 'Real Ingredients',
      description: 'Real chili peppers, fresh lime zest, organic corn. No artificial heat, just authentic bold flavor.',
      badges: ['Organic Corn', 'Fresh Lime']
    },
    rightInfo: {
      title: 'Certifications',
      description: 'Made with care for you and the planet.',
      badges: ['Non-GMO', 'Gluten-Free', 'Vegan']
    }
  },
  { 
    image: '/imgs/demo-site/chips/a_achievepack_herb_garlic_chips_4271307.webp',
    alt: 'Herb & Garlic tortilla chips package',
    title: 'Herb & Garlic',
    hueA: 80, hueB: 120,
    leftInfo: {
      title: 'Artisan Recipe',
      description: 'Hand-selected rosemary, thyme, and slow-roasted garlic from our partner farms.',
      badges: ['Mediterranean Herbs', 'Partner Farms']
    },
    rightInfo: {
      title: 'Certified Quality',
      description: 'USDA Organic certified with BPI compostable packaging.',
      badges: ['USDA Organic', 'BPI Certified']
    }
  },
  { 
    image: '/imgs/demo-site/chips/a_achievepack_sea_salt_vinegar_hero_kv_6506902.webp',
    alt: 'Sea Salt Vinegar tortilla chips hero key visual',
    title: 'Sea Salt & Vinegar',
    hueA: 200, hueB: 240,
    leftInfo: {
      title: 'Classic Crunch',
      description: 'Sea salt crystals meet tangy apple cider vinegar for that timeless flavor.',
      badges: ['Sea Salt', 'Apple Cider Vinegar']
    },
    rightInfo: {
      title: 'Clean Label',
      description: 'Zero artificial flavors. Carbon neutral production.',
      badges: ['Zero Artificial', 'Carbon Neutral']
    }
  },
  { 
    image: '/imgs/demo-site/chips/a_achievepack_sustainability_composable_4433734.webp',
    alt: 'Compostable packaging sustainability feature',
    title: 'Compostable',
    hueA: 100, hueB: 140,
    leftInfo: {
      title: 'Plant-Based',
      description: 'Our bags are made from renewable plant materials, not petroleum.',
      badges: ['Plant-Based', 'Renewable']
    },
    rightInfo: {
      title: '180 Days',
      description: 'Fully breaks down in commercial compost within 180 days.',
      badges: ['BPI Certified', 'Home Compostable']
    }
  },
  { 
    image: '/imgs/demo-site/chips/a_achievepack_lifestyle_scene_7839522.webp',
    alt: 'Social gathering chips lifestyle scene',
    title: 'Share The Moment',
    hueA: 120, hueB: 160,
    leftInfo: {
      title: 'Perfect For',
      description: 'Parties, picnics, movie nights, or any moment worth sharing.',
      badges: ['Shareable Size', 'Party Ready']
    },
    rightInfo: {
      title: 'Feel Good Snacking',
      description: 'Enjoy without guilt. Good for you, good for Earth.',
      badges: ['Low Sodium', 'No Guilt']
    }
  },
]

// Preset card configurations for Maxi Foods demo site
export const MAXI_SCROLL_CARDS: CardData[] = [
  { 
    image: '/imgs/demo-site/maxi/new/a_chili_lime_tortilla_chips_2953420.webp',
    alt: 'Chili Lime organic tortilla chips in compostable packaging',
    title: 'Chili Lime',
    hueA: 30, hueB: 60,
    leftInfo: {
      title: 'Authentic Heat',
      description: 'Traditional Mexican spice blend with fresh lime for bold, zesty flavor.',
      badges: ['Stone Ground', 'Fresh Lime']
    },
    rightInfo: {
      title: 'Heritage Recipe',
      description: 'Made in Airdrie, Alberta using traditional methods.',
      badges: ['Canadian Made', 'Small Batch']
    }
  },
  { 
    image: '/imgs/demo-site/maxi/new/a_jalapeno_lime_tortilla_chips_4049982.webp',
    alt: 'Jalapeno Lime organic tortilla chips',
    title: 'Jalapeno Lime',
    hueA: 20, hueB: 50,
    leftInfo: {
      title: 'Perfect Kick',
      description: 'Real jalapeno peppers with citrus lime for authentic Mexican heat.',
      badges: ['Real Jalapeno', 'Citrus Burst']
    },
    rightInfo: {
      title: 'Pure Quality',
      description: 'Canada Organic certified. Gluten-free facility.',
      badges: ['Canada Organic', 'Gluten-Free']
    }
  },
  { 
    image: '/imgs/demo-site/maxi/new/a_lime_tortilla_chips_0051449.webp',
    alt: 'Lime organic white tortilla chips',
    title: 'Classic Lime',
    hueA: 80, hueB: 120,
    leftInfo: {
      title: 'White Corn Base',
      description: 'Premium organic white corn with refreshing lime essence.',
      badges: ['White Corn', 'Light & Crispy']
    },
    rightInfo: {
      title: 'Clean Ingredients',
      description: 'Just 5 simple ingredients you can pronounce.',
      badges: ['5 Ingredients', 'Non-GMO']
    }
  },
  { 
    image: '/imgs/demo-site/maxi/new/a_tomatonion_tortilla_chips_4226853.webp',
    alt: 'Tomatonion organic yellow tortilla chips',
    title: 'Tomatonion',
    hueA: 45, hueB: 75,
    leftInfo: {
      title: 'Savory Blend',
      description: 'Sun-ripened tomatoes and caramelized onion for rich umami flavor.',
      badges: ['Tomato', 'Caramelized Onion']
    },
    rightInfo: {
      title: 'Artisan Craft',
      description: 'Handcrafted in small batches for perfect crunch.',
      badges: ['Small Batch', 'Pro-Cert Organic']
    }
  },
  { 
    image: '/imgs/demo-site/maxi/a_maxi_kv_04_eco_packaging_9533320.webp',
    alt: 'Compostable eco-friendly packaging for organic tortilla chips',
    title: 'Eco Packaging',
    hueA: 100, hueB: 140,
    leftInfo: {
      title: 'Sustainable Choice',
      description: 'BPI certified compostable bags made from plant materials.',
      badges: ['BPI Certified', 'Plant-Based']
    },
    rightInfo: {
      title: 'Zero Waste Goal',
      description: 'Part of our commitment to leave no trace.',
      badges: ['Compostable', 'Carbon Neutral']
    }
  },
]

// Preset card configurations for Coffee demo site
export const COFFEE_SCROLL_CARDS: CardData[] = [
  { 
    image: '/imgs/demo-site/coffee/a_achieve_detail_01_limited_series_5452944.webp',
    alt: 'Achieve Coffee Limited Series specialty coffee bag',
    title: 'Limited Series',
    hueA: 25, hueB: 45,
    leftInfo: {
      title: 'Rare Selection',
      description: 'The highest echelon of quality from producers we trust. Very limited quantity.',
      badges: ['Micro-Lot', 'Single Origin']
    },
    rightInfo: {
      title: 'Tasting Notes',
      description: 'Complex profiles with unique terroir expression.',
      badges: ['Specialty Grade', '90+ Score']
    }
  },
  { 
    image: '/imgs/demo-site/coffee/a_achieve_detail_04_craftsmanship_5633579.webp',
    alt: 'Achieve Coffee craftsmanship and quality',
    title: 'Craftsmanship',
    hueA: 15, hueB: 35,
    leftInfo: {
      title: 'Roast Mastery',
      description: 'Small batch roasting to bring out each bean\'s unique character.',
      badges: ['Small Batch', 'Profile Roasting']
    },
    rightInfo: {
      title: 'Quality Control',
      description: 'Every batch cupped and scored before packaging.',
      badges: ['SCA Standards', 'Cupped Daily']
    }
  },
  { 
    image: '/imgs/demo-site/coffee/a_achieve_detail_09_signature_0200823.webp',
    alt: 'Achieve Coffee signature blend',
    title: 'Signature Blend',
    hueA: 30, hueB: 50,
    leftInfo: {
      title: 'House Favorite',
      description: 'Our flagship blend balancing sweetness, body, and bright acidity.',
      badges: ['Balanced', 'Versatile']
    },
    rightInfo: {
      title: 'Brew Flexibility',
      description: 'Perfect for espresso, pour over, or French press.',
      badges: ['All Methods', 'Consistent']
    }
  },
  { 
    image: '/imgs/demo-site/coffee/a_achieve_coffee_kv_bright_series_0823684.webp',
    alt: 'Achieve Coffee Bright Series light roast',
    title: 'Bright Series',
    hueA: 40, hueB: 70,
    leftInfo: {
      title: 'Light Roast',
      description: 'Developed with bright aromatic flavors in mind. Lighter roasts for nuanced extraction.',
      badges: ['Fruity', 'Floral Notes']
    },
    rightInfo: {
      title: 'Origin Forward',
      description: 'Showcasing the distinct flavors of each growing region.',
      badges: ['Single Origin', 'Traceable']
    }
  },
  { 
    image: '/imgs/demo-site/coffee/a_achieve_detail_08_materials_3186664.webp',
    alt: 'Achieve Coffee sustainable packaging materials',
    title: 'Sustainable',
    hueA: 100, hueB: 140,
    leftInfo: {
      title: 'Eco Materials',
      description: 'Kraft paper bags with plant-based lining. Fully compostable.',
      badges: ['Kraft Paper', 'Plant Lining']
    },
    rightInfo: {
      title: 'Direct Trade',
      description: 'Fair prices paid directly to farmers. Building lasting relationships.',
      badges: ['Direct Trade', 'Fair Pricing']
    }
  },
]
