export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  url?: string
  quote: string
  shortQuote: string
  extraInfo: string
  ownerImage: string
  companyLogo: string
  brandLogo: string
  bgColor: string
  pouchImage: string
  videoId?: string  // YouTube video ID for video testimonials
}

// Default pouch image for testimonials without specific product images
const DEFAULT_POUCH = '/imgs/testimonials/pouch-hover/morlife.webp'

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'michelle-correa',
    name: 'Michelle Correa',
    company: 'themclife.com',
    role: 'Founder',
    url: 'https://themclife.com',
    quote: "Eco Pouch's custom packaging met and exceeded expectations, with product fitting perfectly. Strong recommendation for anyone looking for quality sustainable packaging solutions.",
    shortQuote: "Custom packaging met and exceeded expectations!",
    extraInfo: 'Case study + transcript, 1 year ago',
    ownerImage: '/imgs/testimonials/owner/michelle.png',
    companyLogo: '/imgs/testimonials/logo/michelle.png',
    brandLogo: '',
    bgColor: 'bg-orange-100',
    pouchImage: '/imgs/testimonials/pouch-hover/michelle.webp'
  },
  {
    id: 'nicole-sarduy',
    name: 'Nicole Sarduy',
    company: '',
    role: '',
    quote: "Working with Eco Pouch Packaging has been the best production experience. The communication was outstanding, quality exceeded expectations, and pricing was unbeatable.",
    shortQuote: "Best production experience ever!",
    extraInfo: '3 months ago',
    ownerImage: '/imgs/testimonials/owner/nicole.png',
    companyLogo: '/imgs/testimonials/logo/nicole.png',
    brandLogo: '',
    bgColor: 'bg-pink-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Nicole.webp'
  },
  {
    id: 'jemma-defore',
    name: 'Jemma Defore',
    company: 'Mylk Made',
    role: 'Director',
    url: 'https://mylkmade.co.nz',
    quote: "Eco Pouch is a great company with excellent communication and great-quality bags. They made the entire process smooth and professional.",
    shortQuote: "Great company with excellent communication!",
    extraInfo: '7 months ago',
    ownerImage: '/imgs/testimonials/owner/jemma.png',
    companyLogo: '/imgs/testimonials/logo/jemma.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_mylk_made_logo_6762912.webp',
    bgColor: 'bg-cyan-100',
    pouchImage: '/imgs/testimonials/pouch-hover/jemma.webp'
  },
  {
    id: 'ruby-mayer',
    name: 'Ruby Mayer',
    company: 'EMU Elixir',
    role: 'Owner',
    quote: "The packaging looks and feels wonderful, matches my design almost perfectly. It's the main thing customers compliment about our products.",
    shortQuote: "Packaging is the main thing customers compliment!",
    extraInfo: 'Transcript, 1 year ago',
    ownerImage: '/imgs/testimonials/owner/ruby.png',
    companyLogo: '/imgs/testimonials/logo/ruby.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_emu_elixir_logo_7729355.webp',
    bgColor: 'bg-green-100',
    pouchImage: '/imgs/testimonials/pouch-hover/ruby.webp',
    videoId: 'G-1mKvEbAZg'  // YouTube Shorts video testimonial
  },
  {
    id: 'richard-tango-lowy',
    name: 'Richard Tango-Lowy',
    company: 'Dancing Lion Chocolate',
    role: 'Owner',
    url: 'https://dancinglion.us',
    quote: "These fully compostable pouches decompose in about a year and a half. Thank you to the Eco Pouch team for fantastic work on our sustainable packaging!",
    shortQuote: "Fantastic work on compostable pouches!",
    extraInfo: 'Instagram video linked, 1 year ago',
    ownerImage: '/imgs/testimonials/owner/Richard.png',
    companyLogo: '/imgs/testimonials/logo/Richard.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_dancing_lion_chocolate_logo_9125312.webp',
    bgColor: 'bg-amber-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Richard.webp'
  },
  {
    id: 'holly-baer',
    name: 'Holly Baer',
    company: 'Superior Feline',
    role: 'Owner',
    quote: "Grateful to find quality compostable packaging with low MOQs. Top communication, helpful rep, proactive updates, and excellent-quality pouches at reasonable prices.",
    shortQuote: "Quality compostable packaging with low MOQs!",
    extraInfo: 'Transcript + text, 1 year ago',
    ownerImage: '/imgs/testimonials/owner/holly.webp',
    companyLogo: '/imgs/testimonials/logo/holly.png',
    brandLogo: '',
    bgColor: 'bg-purple-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Holly.webp',
    videoId: 'G-1mKvEbAZg'  // YouTube Shorts video testimonial
  },
  {
    id: 'arielle',
    name: 'Arielle',
    company: 'Just Be Kind Dog Food Ltd',
    role: '',
    quote: "Very impressed with service, high-quality compostable pouches for dog supplements, and easy contact. Highly recommends for sustainable businesses.",
    shortQuote: "Highly recommend for sustainable businesses!",
    extraInfo: '1–2 years ago, 2 written testimonials',
    ownerImage: '/imgs/testimonials/owner/arielle.png',
    companyLogo: '/imgs/testimonials/logo/arielle.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_just_be_kind_logo_9956961.webp',
    bgColor: 'bg-blue-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Arielle.webp'
  },
  {
    id: 'leo-vieira',
    name: 'Leo Vieira',
    company: 'Wise Angler NZ',
    role: 'Director',
    quote: "Eco Pouch met a tight deadline after we lost our prior supplier. Professional, fast communication. Highly recommend the team for quality, sustainable packaging.",
    shortQuote: "Met tight deadline with professional service!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/owner/leo.png',
    companyLogo: '/imgs/testimonials/logo/leo.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_wise_angler_logo_8090229.webp',
    bgColor: 'bg-teal-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Leo.webp'
  },
  {
    id: 'remi',
    name: 'Remi',
    company: 'plantpowders.nl',
    role: '',
    url: 'https://plantpowders.nl',
    quote: "Eco Pouch is the best packaging company. We've had multiple years of collaboration and consistently satisfying packaging quality.",
    shortQuote: "Best packaging company, years of collaboration!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/owner/remi.png',
    companyLogo: '/imgs/testimonials/logo/remi.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_plantpowders_company_logo_3847855.webp',
    bgColor: 'bg-lime-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Remi.webp'
  },
  {
    id: 'david',
    name: 'David',
    company: 'Hike Again Remedies',
    role: '',
    url: 'https://hikeagainremedies.ca',
    quote: "Pouch.eco and Ryan helped meet a very tight launch deadline and navigate supply chain issues, ensuring on-time delivery.",
    shortQuote: "Helped meet tight launch deadline!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/owner/david.png',
    companyLogo: '/imgs/testimonials/logo/david.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_hike_again_remedies_logo_3308658.webp',
    bgColor: 'bg-rose-100',
    pouchImage: '/imgs/testimonials/pouch-hover/David.webp'
  },
  {
    id: 'paul',
    name: 'Paul',
    company: 'Barky Bakey',
    role: 'CEO',
    quote: "Ryan helped over months answering startup packaging questions. Very pleased with the high-quality biodegradable packaging and A+ customer service.",
    shortQuote: "A+ customer service and quality packaging!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/owner/Paul.png',
    companyLogo: '/imgs/testimonials/logo/Paul.png',
    brandLogo: '',
    bgColor: 'bg-yellow-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Paul.webp'
  },
  {
    id: 'steph',
    name: 'Steph',
    company: 'Cocktail by Mail',
    role: '',
    quote: "Great team from start to finish. Ryan helped resolve a pricing mistake and was eager to help a small business find the perfect solution despite time zone differences.",
    shortQuote: "Great team, eager to help small businesses!",
    extraInfo: '3 years ago',
    ownerImage: '/imgs/testimonials/owner/Steph.png',
    companyLogo: '/imgs/testimonials/logo/Steph.png',
    brandLogo: '',
    bgColor: 'bg-indigo-100',
    pouchImage: '/imgs/testimonials/pouch-hover/Steph.webp'
  },
  {
    id: 'cheryl',
    name: 'Cheryl',
    company: 'Morlife',
    role: '',
    quote: "Great pouches with awesome printing. Impeccable quality, remarkable communication, and above-average delivery performance from Ryan and Pouch.eco.",
    shortQuote: "Impeccable quality and awesome printing!",
    extraInfo: '4 years ago',
    ownerImage: '/imgs/testimonials/owner/cheryl.png',
    companyLogo: '/imgs/testimonials/logo/cheryl.png',
    brandLogo: '/imgs/testimonials/brand-logo/a_morlife_logo_7487286.webp',
    bgColor: 'bg-sky-100',
    pouchImage: '/imgs/testimonials/pouch-hover/morlife.webp'
  }
]
