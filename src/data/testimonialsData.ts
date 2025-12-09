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
  bgColor: string
}

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
    ownerImage: '/imgs/testimonials/michelle-correa.jpg',
    companyLogo: '/imgs/testimonials/logo-themclife.png',
    bgColor: 'bg-orange-100'
  },
  {
    id: 'nicole-sarduy',
    name: 'Nicole Sarduy',
    company: '',
    role: '',
    quote: "Working with Eco Pouch Packaging has been the best production experience. The communication was outstanding, quality exceeded expectations, and pricing was unbeatable.",
    shortQuote: "Best production experience ever!",
    extraInfo: '3 months ago',
    ownerImage: '/imgs/testimonials/nicole-sarduy.jpg',
    companyLogo: '/imgs/testimonials/logo-placeholder.png',
    bgColor: 'bg-pink-100'
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
    ownerImage: '/imgs/testimonials/jemma-defore.jpg',
    companyLogo: '/imgs/testimonials/logo-mylkmade.png',
    bgColor: 'bg-cyan-100'
  },
  {
    id: 'ruby-mayer',
    name: 'Ruby Mayer',
    company: 'EMU Elixir',
    role: 'Owner',
    quote: "The packaging looks and feels wonderful, matches my design almost perfectly. It's the main thing customers compliment about our products.",
    shortQuote: "Packaging is the main thing customers compliment!",
    extraInfo: 'Transcript, 1 year ago',
    ownerImage: '/imgs/testimonials/ruby-mayer.jpg',
    companyLogo: '/imgs/testimonials/logo-emuelixir.png',
    bgColor: 'bg-green-100'
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
    ownerImage: '/imgs/testimonials/richard-tango-lowy.jpg',
    companyLogo: '/imgs/testimonials/logo-dancinglion.png',
    bgColor: 'bg-amber-100'
  },
  {
    id: 'holly-baer',
    name: 'Holly Baer',
    company: 'Superior Feline',
    role: 'Owner',
    quote: "Grateful to find quality compostable packaging with low MOQs. Top communication, helpful rep, proactive updates, and excellent-quality pouches at reasonable prices.",
    shortQuote: "Quality compostable packaging with low MOQs!",
    extraInfo: 'Transcript + text, 1 year ago',
    ownerImage: '/imgs/testimonials/holly-baer.jpg',
    companyLogo: '/imgs/testimonials/logo-superiorfeline.png',
    bgColor: 'bg-purple-100'
  },
  {
    id: 'arielle',
    name: 'Arielle',
    company: 'Just Be Kind Dog Food Ltd',
    role: '',
    quote: "Very impressed with service, high-quality compostable pouches for dog supplements, and easy contact. Highly recommends for sustainable businesses.",
    shortQuote: "Highly recommend for sustainable businesses!",
    extraInfo: '1–2 years ago, 2 written testimonials',
    ownerImage: '/imgs/testimonials/arielle.jpg',
    companyLogo: '/imgs/testimonials/logo-justbekind.png',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'leo-vieira',
    name: 'Leo Vieira',
    company: 'Wise Angler NZ',
    role: 'Director',
    quote: "Eco Pouch met a tight deadline after we lost our prior supplier. Professional, fast communication. Highly recommend the team for quality, sustainable packaging.",
    shortQuote: "Met tight deadline with professional service!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/leo-vieira.jpg',
    companyLogo: '/imgs/testimonials/logo-wiseangler.png',
    bgColor: 'bg-teal-100'
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
    ownerImage: '/imgs/testimonials/remi.jpg',
    companyLogo: '/imgs/testimonials/logo-plantpowders.png',
    bgColor: 'bg-lime-100'
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
    ownerImage: '/imgs/testimonials/david.jpg',
    companyLogo: '/imgs/testimonials/logo-hikeagain.png',
    bgColor: 'bg-rose-100'
  },
  {
    id: 'paul',
    name: 'Paul',
    company: 'Barky Bakey',
    role: 'CEO',
    quote: "Ryan helped over months answering startup packaging questions. Very pleased with the high-quality biodegradable packaging and A+ customer service.",
    shortQuote: "A+ customer service and quality packaging!",
    extraInfo: '2 years ago',
    ownerImage: '/imgs/testimonials/paul.jpg',
    companyLogo: '/imgs/testimonials/logo-barkybakey.png',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'steph',
    name: 'Steph',
    company: 'Cocktail by Mail',
    role: '',
    quote: "Great team from start to finish. Ryan helped resolve a pricing mistake and was eager to help a small business find the perfect solution despite time zone differences.",
    shortQuote: "Great team, eager to help small businesses!",
    extraInfo: '3 years ago',
    ownerImage: '/imgs/testimonials/steph.jpg',
    companyLogo: '/imgs/testimonials/logo-cocktailbymail.png',
    bgColor: 'bg-indigo-100'
  },
  {
    id: 'cheryl',
    name: 'Cheryl',
    company: 'Morlife',
    role: '',
    quote: "Great pouches with awesome printing. Impeccable quality, remarkable communication, and above-average delivery performance from Ryan and Pouch.eco.",
    shortQuote: "Impeccable quality and awesome printing!",
    extraInfo: '4 years ago',
    ownerImage: '/imgs/testimonials/cheryl.jpg',
    companyLogo: '/imgs/testimonials/logo-morlife.png',
    bgColor: 'bg-sky-100'
  }
]
