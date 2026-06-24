import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Customer Stories | Real Results from Real Brands | POUCH.ECO",
    "description": "See how 2,000+ sustainable brands launched with our eco pouches. From 500 unit startups to 50,000 unit brands - real stories, real results.",
    "ogTitle": "Customer Success Stories | POUCH.ECO",
    "ogDescription": "Real brands, real results. See how sustainable packaging transformed these businesses."
  },
  "hero": {
    "label": "REAL_STORIES",
    "titleLine1": "2,000+ Brands",
    "titleLine2": "Started Here",
    "desc1": "From 500-unit startups to established brands ordering 50,000+ units monthly. ",
    "desc2": "See how sustainable packaging transformed these businesses.",
    "stats": [
      {
        "value": "2,000+",
        "label": "Happy Brands"
      },
      {
        "value": "98%",
        "label": "Repeat Customers"
      },
      {
        "value": "4.9/5",
        "label": "Average Rating"
      },
      {
        "value": "500",
        "label": "Minimum Order"
      }
    ]
  },
  "testimonials": [
    {
      "company": "Bean & Bole Coffee",
      "industry": "Coffee Roastery",
      "location": "Portland, OR",
      "quote": "Switching to compostable bags was a no-brainer for our eco-conscious customers. The 500 MOQ meant we could test without huge risk. Sales increased 23% after the launch!",
      "person": "Sarah Chen",
      "role": "Founder",
      "highlights": ["23% Sales Increase", "Zero Waste", "Customer Love"]
    },
    {
      "company": "NourishNow",
      "industry": "Wellness Brand",
      "location": "Seattle, WA",
      "quote": "The soft-touch matte finish made our superfood pouches feel luxury. Customers keep telling us they love the tactile experience. Worth every penny!",
      "person": "Marcus Johnson",
      "role": "Product Manager",
      "highlights": ["Premium Feel", "Customer Feedback", "Brand Uplift"]
    },
    {
      "company": "VitalGreen",
      "industry": "Superfood Brand",
      "location": "Chicago, IL",
      "quote": "From inquiry to delivery in 3 weeks! Ryan walked us through every step. The digital printing quality is stunning, and the price was better than local suppliers.",
      "person": "Jessica Lee",
      "role": "Co-Founder",
      "highlights": ["3-Week Turnaround", "Great Support", "Amazing Quality"]
    },
    {
      "company": "Wholesome Bakery",
      "industry": "Artisan Bakery",
      "location": "Austin, TX",
      "quote": "We needed packaging that matched our artisan brand values. The kraft pouches with clear windows let our products shine while staying eco-friendly!",
      "person": "David Miller",
      "role": "Owner",
      "highlights": ["Artisan Look", "Perfect Fit", "Eco Values"]
    },
    {
      "company": "Nutrivie",
      "industry": "Organic Snacks",
      "location": "San Francisco, CA",
      "quote": "The barrier options were confusing at first, but the team helped us choose the perfect medium barrier for our nuts. 8-month shelf life - exactly what we needed!",
      "person": "Emma Rodriguez",
      "role": "Operations Lead",
      "highlights": ["Perfect Barrier", "Great Guidance", "8-Month Shelf Life"]
    },
    {
      "company": "Roast Ritual NYC",
      "industry": "Urban Coffee",
      "location": "New York, NY",
      "quote": "As a NYC startup, low MOQ was critical. Started with 500 bags, now ordering 5,000 per month. The degassing valve keeps our beans fresh for weeks!",
      "person": "Alex Park",
      "role": "Head Roaster",
      "highlights": ["Started Small", "Scaled Fast", "Fresh Coffee"]
    },
    {
      "company": "PureLeaf Organics",
      "industry": "Tea Brand",
      "location": "Boulder, CO",
      "quote": "We loved the kraft-look material with bio-based barrier. Our customers appreciate the natural aesthetic and the fact it's 100% compostable. Game changer for our brand!",
      "person": "Maya Patel",
      "role": "Brand Director",
      "highlights": ["Natural Look", "Compostable", "Brand Win"]
    },
    {
      "company": "SnackSmart",
      "industry": "Healthy Snacks",
      "location": "Los Angeles, CA",
      "quote": "The clear window on our pouches was a must-have. Customers love seeing the product before buying. The response has been incredible - our retail partners love it too!",
      "person": "Tom Chen",
      "role": "Founder & CEO",
      "highlights": ["Clear Window", "Retail Success", "Customer Trust"]
    },
    {
      "company": "Meadow & Moon",
      "industry": "Herbal Wellness",
      "location": "Portland, ME",
      "quote": "As a small batch producer, finding 500 unit minimums was impossible until we found pouch.eco. The quality rivals brands 10x our size. Our customers think we're much bigger!",
      "person": "Rachel Green",
      "role": "Owner",
      "highlights": ["Small Batch", "Premium Quality", "Brand Perception"]
    },
    {
      "company": "Peak Performance",
      "industry": "Sports Nutrition",
      "location": "Denver, CO",
      "quote": "The matte black finish with spot UV logo - absolute fire! Our pre-workout pouches look like they cost $50 when they're only $25. Instagram engagement went through the roof!",
      "person": "Jordan Smith",
      "role": "Co-Founder",
      "highlights": ["Matte Black", "Premium Look", "Social Media Win"]
    },
    {
      "company": "Little Sprouts",
      "industry": "Baby Food",
      "location": "San Diego, CA",
      "quote": "Parents love that our pouches are BPI certified compostable. The resealable zipper keeps snacks fresh all day. We've had zero complaints about leaking or quality issues!",
      "person": "Amanda Foster",
      "role": "Founder",
      "highlights": ["BPI Certified", "Parent Approved", "Zero Issues"]
    },
    {
      "company": "Grind Culture",
      "industry": "Specialty Coffee",
      "location": "Brooklyn, NY",
      "quote": "The one-way degassing valve was essential for our micro-roastery. Keeps beans fresh for 6+ weeks. Our subscription customers notice the difference immediately!",
      "person": "Chris Martinez",
      "role": "Head Roaster",
      "highlights": ["Degassing Valve", "6-Week Freshness", "Subscription Hit"]
    }
  ],
  "trustedBy": {
    "label": "TRUSTED_BY",
    "titleLine1": "Join ",
    "titleLine2": "500+",
    "titleLine3": " Brands",
    "desc": "From startups to established names - they all started with 500 units"
  },
  "cta": {
    "titleLine1": "Your Story",
    "titleLine2": "Next?",
    "desc1": "Join 2,000+ brands who launched with confidence. ",
    "desc2": "From 500 units. Zero compromise on quality or planet.",
    "button1": "Book Free Call",
    "button2": "Request Samples",
    "footer": "📧 ryan@achievepack.com • ⏱️ Response in 24 hours"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['pouchTestimonials'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
