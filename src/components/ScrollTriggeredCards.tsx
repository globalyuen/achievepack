import { motion, type Variants } from 'motion/react'

interface CardData {
  image: string
  alt?: string
  title?: string
  hueA: number
  hueB: number
}

interface ScrollTriggeredCardsProps {
  cards: CardData[]
  className?: string
}

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

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

function Card({ image, alt, title, hueA, hueB }: CardData) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      className="overflow-hidden flex justify-center items-center relative pt-5 -mb-[120px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* Splash background with clip-path */}
      <div 
        className="absolute inset-0"
        style={{ 
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`
        }}
      />
      <motion.div 
        className="w-[250px] md:w-[300px] h-[360px] md:h-[430px] flex flex-col justify-center items-center rounded-[20px] bg-white overflow-hidden origin-[10%_60%]"
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
    </motion.div>
  )
}

export function ScrollTriggeredCards({ cards, className = '' }: ScrollTriggeredCardsProps) {
  return (
    <div className={`mx-auto max-w-[500px] pb-[100px] w-full ${className}`}>
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
    hueA: 340, hueB: 10
  },
  { 
    image: '/imgs/demo-site/chips/a_achievepack_herb_garlic_chips_4271307.webp',
    alt: 'Herb & Garlic tortilla chips package',
    title: 'Herb & Garlic',
    hueA: 80, hueB: 120
  },
  { 
    image: '/imgs/demo-site/chips/a_achievepack_sea_salt_vinegar_hero_kv_6506902.webp',
    alt: 'Sea Salt Vinegar tortilla chips hero key visual',
    title: 'Sea Salt & Vinegar',
    hueA: 200, hueB: 240
  },
  { 
    image: '/imgs/demo-site/chips/a_achievepack_sustainability_composable_4433734.webp',
    alt: 'Compostable packaging sustainability feature',
    title: 'Compostable',
    hueA: 100, hueB: 140
  },
  { 
    image: '/imgs/demo-site/chips/a_achievepack_lifestyle_scene_7839522.webp',
    alt: 'Social gathering chips lifestyle scene',
    title: 'Share The Moment',
    hueA: 120, hueB: 160
  },
]

// Preset card configurations for Maxi Foods demo site
export const MAXI_SCROLL_CARDS: CardData[] = [
  { 
    image: '/imgs/demo-site/maxi/new/a_chili_lime_tortilla_chips_2953420.webp',
    alt: 'Chili Lime organic tortilla chips in compostable packaging',
    title: 'Chili Lime',
    hueA: 30, hueB: 60
  },
  { 
    image: '/imgs/demo-site/maxi/new/a_jalapeno_lime_tortilla_chips_4049982.webp',
    alt: 'Jalapeno Lime organic tortilla chips',
    title: 'Jalapeno Lime',
    hueA: 20, hueB: 50
  },
  { 
    image: '/imgs/demo-site/maxi/new/a_lime_tortilla_chips_0051449.webp',
    alt: 'Lime organic white tortilla chips',
    title: 'Classic Lime',
    hueA: 80, hueB: 120
  },
  { 
    image: '/imgs/demo-site/maxi/new/a_tomatonion_tortilla_chips_4226853.webp',
    alt: 'Tomatonion organic yellow tortilla chips',
    title: 'Tomatonion',
    hueA: 45, hueB: 75
  },
  { 
    image: '/imgs/demo-site/maxi/a_maxi_kv_04_eco_packaging_9533320.webp',
    alt: 'Compostable eco-friendly packaging for organic tortilla chips',
    title: 'Eco Packaging',
    hueA: 100, hueB: 140
  },
]

// Preset card configurations for Coffee demo site
export const COFFEE_SCROLL_CARDS: CardData[] = [
  { 
    image: '/imgs/demo-site/coffee/a_achieve_detail_01_limited_series_5452944.webp',
    alt: 'Achieve Coffee Limited Series specialty coffee bag',
    title: 'Limited Series',
    hueA: 25, hueB: 45
  },
  { 
    image: '/imgs/demo-site/coffee/a_achieve_detail_04_craftsmanship_5633579.webp',
    alt: 'Achieve Coffee craftsmanship and quality',
    title: 'Craftsmanship',
    hueA: 15, hueB: 35
  },
  { 
    image: '/imgs/demo-site/coffee/a_achieve_detail_09_signature_0200823.webp',
    alt: 'Achieve Coffee signature blend',
    title: 'Signature Blend',
    hueA: 30, hueB: 50
  },
  { 
    image: '/imgs/demo-site/coffee/a_achieve_coffee_kv_bright_series_0823684.webp',
    alt: 'Achieve Coffee Bright Series light roast',
    title: 'Bright Series',
    hueA: 40, hueB: 70
  },
  { 
    image: '/imgs/demo-site/coffee/a_achieve_detail_08_materials_3186664.webp',
    alt: 'Achieve Coffee sustainable packaging materials',
    title: 'Sustainable',
    hueA: 100, hueB: 140
  },
]
