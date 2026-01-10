import { motion, type Variants } from 'motion/react'

interface CardData {
  emoji?: string
  icon?: React.ReactNode
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

function Card({ emoji, icon, title, hueA, hueB, index }: CardData & { index: number }) {
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
        className="text-[120px] md:text-[164px] w-[250px] md:w-[300px] h-[360px] md:h-[430px] flex flex-col justify-center items-center rounded-[20px] bg-[#f5f5f5] origin-[10%_60%]"
        style={{
          boxShadow: '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)'
        }}
        variants={cardVariants}
      >
        {emoji && <span>{emoji}</span>}
        {icon && <div className="text-6xl">{icon}</div>}
        {title && <span className="text-lg md:text-xl font-bold text-gray-800 mt-4 px-4 text-center">{title}</span>}
      </motion.div>
    </motion.div>
  )
}

export function ScrollTriggeredCards({ cards, className = '' }: ScrollTriggeredCardsProps) {
  return (
    <div className={`mx-auto max-w-[500px] pb-[100px] w-full ${className}`}>
      {cards.map((card, i) => (
        <Card key={i} {...card} index={i} />
      ))}
    </div>
  )
}

// Preset card configurations for different themes
export const CHIPS_SCROLL_CARDS: CardData[] = [
  { emoji: '🌶️', hueA: 340, hueB: 10, title: 'Fiery Chili Lime' },
  { emoji: '🧄', hueA: 80, hueB: 120, title: 'Herb & Garlic' },
  { emoji: '🧂', hueA: 200, hueB: 240, title: 'Sea Salt Vinegar' },
  { emoji: '🌱', hueA: 100, hueB: 140, title: 'Organic & Natural' },
  { emoji: '♻️', hueA: 120, hueB: 160, title: 'Compostable' },
]

export const MAXI_SCROLL_CARDS: CardData[] = [
  { emoji: '🌮', hueA: 30, hueB: 60, title: 'Authentic Tortillas' },
  { emoji: '🫔', hueA: 20, hueB: 50, title: 'Fresh Wraps' },
  { emoji: '🥗', hueA: 80, hueB: 120, title: 'Gluten Free' },
  { emoji: '🌽', hueA: 45, hueB: 75, title: 'Non-GMO Corn' },
  { emoji: '🍃', hueA: 100, hueB: 140, title: 'Eco Packaging' },
]

export const COFFEE_SCROLL_CARDS: CardData[] = [
  { emoji: '☕', hueA: 25, hueB: 45, title: 'Single Origin' },
  { emoji: '🫘', hueA: 15, hueB: 35, title: 'Fresh Roasted' },
  { emoji: '🌍', hueA: 180, hueB: 220, title: 'Direct Trade' },
  { emoji: '🌿', hueA: 90, hueB: 130, title: 'Organic Beans' },
  { emoji: '📦', hueA: 100, hueB: 140, title: 'Compostable Bags' },
]
