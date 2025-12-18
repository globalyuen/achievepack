// Blog Data - Add your articles here

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  author: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: number; // minutes
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  // Example post - replace with your content
  {
    id: "1",
    slug: "eco-friendly-packaging-pouch-manufacturers-fast-shipping-us",
    title: "Eco Friendly Packaging Pouch Manufacturers with Fast Shipping in the US",
    excerpt: "Discover top eco-friendly packaging manufacturers offering fast US shipping...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Sustainable Packaging",
    tags: ["eco-friendly", "fast shipping", "US manufacturers"],
    featuredImage: "/imgs/blog/eco-friendly-packaging.webp",
    readTime: 8,
    metaDescription: "Find the best eco-friendly packaging pouch manufacturers with fast shipping in the US. Compare compostable, recyclable, and biodegradable options."
  },
  {
    id: "2",
    slug: "recyclable-packaging-pouches-cosmetics",
    title: "Companies That Supply Recyclable Packaging Pouches for Cosmetics",
    excerpt: "Find leading suppliers of recyclable cosmetic packaging pouches...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Cosmetics Packaging",
    tags: ["recyclable", "cosmetics", "beauty packaging"],
    featuredImage: "/imgs/blog/cosmetics-packaging.webp",
    readTime: 7,
    metaDescription: "Discover companies supplying recyclable packaging pouches for cosmetics. Sustainable beauty packaging solutions for your brand."
  },
  {
    id: "3",
    slug: "affordable-eco-friendly-packaging-startups",
    title: "Affordable Eco Friendly Packaging Pouch Options for Startups",
    excerpt: "Budget-friendly sustainable packaging solutions for new businesses...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Startup Resources",
    tags: ["affordable", "startups", "budget-friendly"],
    featuredImage: "/imgs/blog/startup-packaging.webp",
    readTime: 6,
    metaDescription: "Affordable eco-friendly packaging options for startups. Low MOQ sustainable pouches starting from 100 pieces."
  },
  {
    id: "4",
    slug: "plant-based-packaging-pouches-pet-food-reviews",
    title: "Reviews of Plant-Based Packaging Pouches for Pet Food",
    excerpt: "Comprehensive reviews of plant-based pet food packaging options...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Pet Food Packaging",
    tags: ["plant-based", "pet food", "reviews"],
    featuredImage: "/imgs/blog/pet-food-packaging.webp",
    readTime: 9,
    metaDescription: "In-depth reviews of plant-based packaging pouches for pet food. Compare compostable and bio-based options for pet brands."
  },
  {
    id: "5",
    slug: "eco-friendly-packaging-pouch-guide",
    title: "Eco Friendly Packaging Pouch: The Complete Guide",
    excerpt: "Everything you need to know about eco-friendly packaging pouches...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Guides",
    tags: ["eco-friendly", "guide", "sustainable"],
    featuredImage: "/imgs/blog/eco-pouch-guide.webp",
    readTime: 12,
    metaDescription: "Complete guide to eco-friendly packaging pouches. Learn about materials, certifications, and choosing the right sustainable option."
  },
  {
    id: "6",
    slug: "top-brands-compostable-packaging-pouches",
    title: "Top Brands Offering Compostable Packaging Pouches",
    excerpt: "Discover the leading brands in compostable packaging...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Brand Reviews",
    tags: ["compostable", "top brands", "certified"],
    featuredImage: "/imgs/blog/compostable-brands.webp",
    readTime: 8,
    metaDescription: "Top brands offering certified compostable packaging pouches. Compare home compostable and industrial compostable options."
  },
  {
    id: "7",
    slug: "choose-sustainable-packaging-pouches-food",
    title: "How to Choose Sustainable Packaging Pouches for Food Products",
    excerpt: "A step-by-step guide to selecting the right sustainable food packaging...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Food Packaging",
    tags: ["food packaging", "sustainable", "how-to"],
    featuredImage: "/imgs/blog/food-packaging-guide.webp",
    readTime: 10,
    metaDescription: "Learn how to choose sustainable packaging pouches for food products. Barrier options, certifications, and material comparisons."
  },
  {
    id: "8",
    slug: "buy-biodegradable-packaging-pouches-online-us",
    title: "Where to Buy Biodegradable Packaging Pouches Online in the US",
    excerpt: "Find the best online sources for biodegradable packaging in the US...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Buying Guide",
    tags: ["biodegradable", "online shopping", "US"],
    featuredImage: "/imgs/blog/buy-online-us.webp",
    readTime: 7,
    metaDescription: "Where to buy biodegradable packaging pouches online in the US. Compare suppliers, prices, and shipping options."
  },
  {
    id: "9",
    slug: "best-eco-friendly-packaging-pouches-small-businesses",
    title: "Best Eco Friendly Packaging Pouches for Small Businesses",
    excerpt: "Top eco-friendly packaging solutions perfect for small businesses...",
    content: `<p>Content coming soon...</p>`,
    author: "Achieve Pack Team",
    publishDate: "2024-12-18",
    category: "Small Business",
    tags: ["small business", "eco-friendly", "low MOQ"],
    featuredImage: "/imgs/blog/small-business-packaging.webp",
    readTime: 8,
    metaDescription: "Best eco-friendly packaging pouches for small businesses. Low minimum orders, affordable pricing, and sustainable materials."
  }
];

export const blogCategories = [
  "All",
  "Sustainable Packaging",
  "Cosmetics Packaging",
  "Startup Resources",
  "Pet Food Packaging",
  "Guides",
  "Brand Reviews",
  "Food Packaging",
  "Buying Guide",
  "Small Business"
];
