import { useState, useEffect } from 'react'

const BANNER_IMAGES = [
  '/imgs/banner/transparent/a_achievepack_hero_3d_depth_5416790 (1).png',
  '/imgs/banner/transparent/a_achievepack_hero_eco_nature_7180632 (1).png',
  '/imgs/banner/transparent/a_achievepack_hero_flatlay_5941661 (1).png',
  '/imgs/banner/transparent/a_achievepack_hero_gradient_eco_9331347 (1).png',
  '/imgs/banner/transparent/a_achievepack_hero_shot_1_white_background_2665361 (1).png',
]

interface RandomBannerProps {
  className?: string
}

export const RandomBanner: React.FC<RandomBannerProps> = ({ className = '' }) => {
  const [bannerImage, setBannerImage] = useState('')

  useEffect(() => {
    // Pick a random banner image on mount
    const randomIndex = Math.floor(Math.random() * BANNER_IMAGES.length)
    setBannerImage(BANNER_IMAGES[randomIndex])
  }, [])

  if (!bannerImage) return null

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img 
        src={bannerImage}
        alt="Achieve Pack - Sustainable Packaging Solutions"
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  )
}

export default RandomBanner
