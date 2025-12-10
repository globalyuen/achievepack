// Demo data for ryan@pouch.eco customer center
// This data will be used to demonstrate the customer portal features

export const DEMO_USER_EMAIL = 'ryan@pouch.eco'

export const demoOrders = [
  {
    id: 'demo-order-1',
    user_id: 'demo-user-ryan',
    order_number: 'ORD-2024-001',
    status: 'production' as const,
    total_amount: 2450.00,
    customer_email: DEMO_USER_EMAIL,
    customer_name: 'Ryan Chen',
    created_at: '2024-12-01T10:30:00Z',
    updated_at: '2024-12-05T14:20:00Z',
    items: [
      {
        id: 'item-1',
        name: 'Compostable Stand-Up Pouches',
        quantity: 5000,
        size: '12x18cm',
        material: 'EN13432 Certified Compostable',
        printing: '4-color digital print',
        unit_price: 0.35,
        total: 1750.00
      },
      {
        id: 'item-2',
        name: 'Zipper Closure Add-on',
        quantity: 5000,
        unit_price: 0.14,
        total: 700.00
      }
    ],
    shipping_address: {
      name: 'Ryan Chen',
      company: 'Pouch.eco',
      street: 'No.41 1/F Wo Liu Hang Tsuen',
      city: 'Fotan',
      state: 'Hong Kong',
      postal_code: '',
      country: 'Hong Kong'
    }
  },
  {
    id: 'demo-order-2',
    user_id: 'demo-user-ryan',
    order_number: 'ORD-2024-002',
    status: 'shipped' as const,
    total_amount: 1890.00,
    customer_email: DEMO_USER_EMAIL,
    customer_name: 'Ryan Chen',
    tracking_number: 'DHL8294756123',
    tracking_url: 'https://www.dhl.com/track?id=DHL8294756123',
    carrier: 'DHL Express',
    created_at: '2024-11-15T09:15:00Z',
    updated_at: '2024-11-25T16:45:00Z',
    items: [
      {
        id: 'item-3',
        name: 'Recyclable Flat Bottom Pouches',
        quantity: 3000,
        size: '15x22cm',
        material: 'GRS-Certified Recyclable',
        printing: '6-color plate print',
        unit_price: 0.63,
        total: 1890.00
      }
    ],
    shipping_address: {
      name: 'Ryan Chen',
      company: 'Pouch.eco',
      street: 'No.41 1/F Wo Liu Hang Tsuen',
      city: 'Fotan',
      state: 'Hong Kong',
      postal_code: '',
      country: 'Hong Kong'
    }
  },
  {
    id: 'demo-order-3',
    user_id: 'demo-user-ryan',
    order_number: 'ORD-2024-003',
    status: 'delivered' as const,
    total_amount: 3250.00,
    customer_email: DEMO_USER_EMAIL,
    customer_name: 'Ryan Chen',
    tracking_number: 'FEDEX4829175630',
    tracking_url: 'https://www.fedex.com/track?id=FEDEX4829175630',
    carrier: 'FedEx International',
    created_at: '2024-10-20T11:00:00Z',
    updated_at: '2024-11-10T10:30:00Z',
    items: [
      {
        id: 'item-4',
        name: 'Bio-based PE Pouches',
        quantity: 10000,
        size: '10x15cm',
        material: 'Sugarcane-based PE',
        printing: '2-color print',
        unit_price: 0.25,
        total: 2500.00
      },
      {
        id: 'item-5',
        name: 'Tear Notch Feature',
        quantity: 10000,
        unit_price: 0.05,
        total: 500.00
      },
      {
        id: 'item-6',
        name: 'Matte Finish',
        quantity: 10000,
        unit_price: 0.025,
        total: 250.00
      }
    ],
    shipping_address: {
      name: 'Ryan Chen',
      company: 'Pouch.eco',
      street: 'No.41 1/F Wo Liu Hang Tsuen',
      city: 'Fotan',
      state: 'Hong Kong',
      postal_code: '',
      country: 'Hong Kong'
    }
  },
  {
    id: 'demo-order-4',
    user_id: 'demo-user-ryan',
    order_number: 'ORD-2023-089',
    status: 'delivered' as const,
    total_amount: 4120.00,
    customer_email: DEMO_USER_EMAIL,
    customer_name: 'Ryan Chen',
    created_at: '2023-12-05T14:22:00Z',
    updated_at: '2024-01-08T09:15:00Z',
    items: [
      {
        id: 'item-7',
        name: 'Quad Seal Pouches',
        quantity: 8000,
        size: '18x25cm',
        material: 'Compostable Multilayer',
        printing: '8-color plate print',
        unit_price: 0.515,
        total: 4120.00
      }
    ],
    shipping_address: {
      name: 'Ryan Chen',
      company: 'Pouch.eco',
      street: 'No.41 1/F Wo Liu Hang Tsuen',
      city: 'Fotan',
      state: 'Hong Kong',
      postal_code: '',
      country: 'Hong Kong'
    }
  }
]

export const demoQuotes = [
  {
    id: 'demo-quote-1',
    user_id: 'demo-user-ryan',
    quote_number: 'QT-2024-045',
    status: 'pending' as const,
    total_amount: 5680.00,
    valid_until: '2025-01-15T23:59:59Z',
    created_at: '2024-12-08T10:30:00Z',
    items: [
      {
        id: 'quote-item-1',
        name: 'Custom Printed Stand-Up Pouches',
        quantity: 15000,
        size: '14x20cm',
        material: 'Compostable + Recyclable Options',
        printing: '10-color digital print with spot UV',
        features: ['Resealable zipper', 'Tear notch', 'Soft-touch coating'],
        unit_price: 0.3787,
        total: 5680.00,
        notes: 'Includes free design service and 2 rounds of revisions'
      }
    ]
  },
  {
    id: 'demo-quote-2',
    user_id: 'demo-user-ryan',
    quote_number: 'QT-2024-038',
    status: 'accepted' as const,
    total_amount: 2890.00,
    valid_until: '2024-12-20T23:59:59Z',
    created_at: '2024-11-28T15:45:00Z',
    items: [
      {
        id: 'quote-item-2',
        name: 'Recyclable Side Gusset Pouches',
        quantity: 7000,
        size: '12x20+4cm',
        material: 'GRS-Certified 100% Recyclable',
        printing: '6-color print',
        features: ['Resealable zipper', 'Degassing valve'],
        unit_price: 0.413,
        total: 2890.00
      }
    ]
  }
]

export const demoDocuments = [
  {
    id: 'demo-doc-1',
    user_id: 'demo-user-ryan',
    name: 'EN13432 Certification',
    type: 'PDF',
    description: 'European Standard for Compostable Packaging Materials',
    file_url: '/docs/certifications/EN13432-Certificate.pdf',
    is_public: true,
    created_at: '2024-01-15T08:00:00Z'
  },
  {
    id: 'demo-doc-2',
    user_id: 'demo-user-ryan',
    name: 'ASTM D6400 Certification',
    type: 'PDF',
    description: 'US Standard Specification for Compostable Plastics',
    file_url: '/docs/certifications/ASTM-D6400-Certificate.pdf',
    is_public: true,
    created_at: '2024-01-15T08:00:00Z'
  },
  {
    id: 'demo-doc-3',
    user_id: 'demo-user-ryan',
    name: 'GRS Certification',
    type: 'PDF',
    description: 'Global Recycled Standard Certificate',
    file_url: '/docs/certifications/GRS-Certificate.pdf',
    is_public: true,
    created_at: '2024-02-20T10:30:00Z'
  },
  {
    id: 'demo-doc-4',
    user_id: 'demo-user-ryan',
    name: 'Material Safety Data Sheet',
    type: 'PDF',
    description: 'MSDS for Compostable Film Materials',
    file_url: '/docs/compliance/MSDS-Compostable-Film.pdf',
    is_public: true,
    created_at: '2024-03-10T14:20:00Z'
  },
  {
    id: 'demo-doc-5',
    user_id: 'demo-user-ryan',
    name: 'FDA Compliance Letter',
    type: 'PDF',
    description: 'Food Contact Compliance Documentation',
    file_url: '/docs/compliance/FDA-Compliance-Letter.pdf',
    is_public: true,
    created_at: '2024-03-15T09:00:00Z'
  },
  {
    id: 'demo-doc-6',
    user_id: 'demo-user-ryan',
    name: 'Product Catalog 2024',
    type: 'PDF',
    description: 'Complete product range and specifications',
    file_url: '/docs/catalogs/Product-Catalog-2024.pdf',
    is_public: true,
    created_at: '2024-06-01T08:00:00Z'
  }
]

export const demoArtworkFiles = [
  {
    id: 'demo-art-1',
    user_id: 'demo-user-ryan',
    order_id: 'demo-order-1',
    name: 'pouch-design-v3-final.ai',
    file_url: '/artwork/pouch-design-v3-final.ai',
    status: 'approved' as const,
    feedback: 'Design approved! Ready for production.',
    created_at: '2024-12-02T16:30:00Z'
  },
  {
    id: 'demo-art-2',
    user_id: 'demo-user-ryan',
    order_id: 'demo-order-1',
    name: 'label-artwork-front.pdf',
    file_url: '/artwork/label-artwork-front.pdf',
    status: 'approved' as const,
    feedback: 'Perfect! Colors match pantone references.',
    created_at: '2024-12-02T16:35:00Z'
  },
  {
    id: 'demo-art-3',
    user_id: 'demo-user-ryan',
    order_id: 'demo-order-2',
    name: 'recyclable-pouch-design.ai',
    file_url: '/artwork/recyclable-pouch-design.ai',
    status: 'approved' as const,
    feedback: 'Approved with minor color adjustments applied.',
    created_at: '2024-11-16T10:20:00Z'
  }
]

// Helper function to check if current user is demo user
export const isDemoUser = (email: string | undefined) => {
  return email === DEMO_USER_EMAIL
}

// Get demo data for a specific user
export const getDemoData = (email: string | undefined) => {
  if (!isDemoUser(email)) {
    return {
      orders: [],
      quotes: [],
      documents: [],
      artworkFiles: []
    }
  }

  return {
    orders: demoOrders,
    quotes: demoQuotes,
    documents: demoDocuments,
    artworkFiles: demoArtworkFiles
  }
}
