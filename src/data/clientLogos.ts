/**
 * Client Logos Data - PNG Image Logos
 * 
 * This file stores all client logo references for use across the website.
 * Each logo includes the company name and image path.
 */

export interface ClientLogo {
  id: string
  name: string
  image: string
  website?: string
}

export const CLIENT_LOGOS: ClientLogo[] = [
  // 1. Morlife
  {
    id: 'morlife',
    name: 'Morlife',
    image: '/imgs/clien-logos/morlife.png',
    website: 'https://www.morlife.com',
  },
  // 2. Sustenir Agriculture
  {
    id: 'sustenir',
    name: 'Sustenir Agriculture',
    image: '/imgs/clien-logos/sustenir.png',
    website: 'https://susteniragriculture.com',
  },
  // 3. Two Rivers
  {
    id: 'tworivers',
    name: 'Two Rivers',
    image: '/imgs/clien-logos/tworivers.png',
  },
  // 4. Humble Snacks
  {
    id: 'humble',
    name: 'Humble Snacks',
    image: '/imgs/clien-logos/humble.png',
    website: 'https://humblechips.ca',
  },
  // 5. Modern Food Packing
  {
    id: 'modern',
    name: 'Modern Food Packing',
    image: '/imgs/clien-logos/mordern.png',
  },
  // 6. Mavella Superfoods
  {
    id: 'mavella',
    name: 'Mavella Superfoods',
    image: '/imgs/clien-logos/mavella.png',
    website: 'https://mavella.com.au',
  },
  // 7. Superfood Lab Asia
  {
    id: 'superfood',
    name: 'Superfood Lab Asia',
    image: '/imgs/clien-logos/superfood.png',
    website: 'https://superfood-lab.com',
  },
  // 8. Green Urban Foods
  {
    id: 'green-urban',
    name: 'Green Urban Foods',
    image: '/imgs/clien-logos/green-urban.png',
  },
  // 9. Knowrish Well
  {
    id: 'knowrish',
    name: 'Knowrish Well',
    image: '/imgs/clien-logos/knowrish.png',
    website: 'https://knowrishwell.com',
  },
  // 10. Fodilicious
  {
    id: 'fodilicious',
    name: 'Fodilicious',
    image: '/imgs/clien-logos/fodilicious.png',
    website: 'https://fodilicious.com',
  },
  // 11. Hike Again Remedies
  {
    id: 'hike',
    name: 'Hike Again Remedies',
    image: '/imgs/clien-logos/hike.png',
    website: 'https://hikeagainremedies.ca',
  },
  // 12. Kakejo
  {
    id: 'kakejo',
    name: 'Kakejo',
    image: '/imgs/clien-logos/kakejo.png',
  },
  // 13. Nuditea
  {
    id: 'nuditea',
    name: 'Nuditea',
    image: '/imgs/clien-logos/nuditea.png',
    website: 'https://nuditea.com',
  },
  // 14. Winand Products
  {
    id: 'winand',
    name: 'Winand Products',
    image: '/imgs/clien-logos/winand.png',
    website: 'https://winandproducts.com',
  },
  // 15. Caffeine Solutions
  {
    id: 'caffeine',
    name: 'Caffeine Solutions',
    image: '/imgs/clien-logos/caffeine.png',
    website: 'https://caffeinesolutions.sg',
  },
  // 16. Simply This
  {
    id: 'simply',
    name: 'Simply This',
    image: '/imgs/clien-logos/simply.png',
    website: 'https://simplythis-global.com',
  },
  // 17. Freshfield
  {
    id: 'freshfield',
    name: 'Freshfield',
    image: '/imgs/clien-logos/freshfield.png',
    website: 'https://freshfield.life',
  },
  // 18. Happy Jack Co
  {
    id: 'happy-jack',
    name: 'Happy Jack Co',
    image: '/imgs/clien-logos/happy-jack.png',
  },
  // 19. Red Hot Chili Peppe
  {
    id: 'red-hot',
    name: 'Red Hot Chili Peppe',
    image: '/imgs/clien-logos/red-hot.png',
  },
  // 20. Oovo Straw
  {
    id: 'oovo',
    name: 'Oovo Straw',
    image: '/imgs/clien-logos/oovo.png',
  },
  // 21. Honestea
  {
    id: 'honestea',
    name: 'Honestea',
    image: '/imgs/clien-logos/honestea.png',
    website: 'https://honestea.com.au',
  },
  // 22. Tra My Organic
  {
    id: 'tra-my',
    name: 'Tra My Organic',
    image: '/imgs/clien-logos/tra-my.png',
  },
  // 23. Moom Health
  {
    id: 'moom',
    name: 'Moom Health',
    image: '/imgs/clien-logos/moom.png',
    website: 'https://moom.health',
  },
  // 24. Alia Wall Co
  {
    id: 'alia',
    name: 'Alia Wall Co',
    image: '/imgs/clien-logos/alia.png',
  },
  // 25. Prime Natural Foods
  {
    id: 'prime',
    name: 'Prime Natural Foods',
    image: '/imgs/clien-logos/prime.png',
  },
  // 26. Guest Experience Company
  {
    id: 'guest',
    name: 'Guest Experience Company',
    image: '/imgs/clien-logos/guest.png',
  },
  // 27. Create Innovative Packaging
  {
    id: 'create',
    name: 'Create Innovative Packaging',
    image: '/imgs/clien-logos/create.png',
  },
  // 28. Cocktails
  {
    id: 'cocktails',
    name: 'Cocktails',
    image: '/imgs/clien-logos/cocktails.png',
  },
]

// Helper function to get logo by ID
export const getClientLogoById = (id: string): ClientLogo | undefined => {
  return CLIENT_LOGOS.find(logo => logo.id === id)
}

// Helper function to get logos with website
export const getClientLogosWithWebsite = (): ClientLogo[] => {
  return CLIENT_LOGOS.filter(logo => logo.website)
}
