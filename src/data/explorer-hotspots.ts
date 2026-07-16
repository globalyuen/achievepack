export interface Hotspot {
  id: string;
  name: string;
  desc: string;
  link: string;
  x: number;
  y: number;
  placement: 'left' | 'right' | 'top' | 'bottom';
  heroImage?: string;
}

export interface ExplorerImage {
  src: string;
  infographicSrc: string;
  alt: string;
  title: string;
  hotspots: Hotspot[];
}

export type ExplorerCategory = 'compost' | 'recyclable' | 'biope' | 'pcr' | 'pouch' | 'box' | 'industry' | 'printing' | 'sealing' | 'tech' | 'sizing' | 'all';

export const EXPLORER_DATA: Record<string, ExplorerImage[]> = {
  compost: [
    {
      src: '/imgs/knowledge/explorer_compost_2_1784176082121.jpg',
      infographicSrc: '/imgs/knowledge/composting-anatomy-diagram.jpg',
      alt: 'Compostable Pouch Structure',
      title: 'Compostable Pouch Structure',
      hotspots: [
        { id: 'c1', x: 39, y: 31, placement: 'top', name: 'PLA Outer Layer', desc: 'Plant-based polylactic acid provides moisture resistance and compostable surface printability.', link: '/topics/compostable-packaging', heroImage: '/imgs/generated/compostable_blog.png' },
        { id: 'c2', x: 55, y: 19, placement: 'right', name: 'Compostable Zipper', desc: 'Secure zip-lock reclosure made from biodegradable PBS polymer.', link: '/topics/compostable-zipper-durability', heroImage: '/imgs/generated/compostable_blog.png' },
        { id: 'c3', x: 47, y: 48, placement: 'left', name: 'Plant-Based Barrier Film', desc: 'High gas and aroma barrier layer shielding the product from oxygen and moisture.', link: '/topics/plant-based-barrier-coatings', heroImage: '/imgs/generated/sustainable_pillar.png' },
        { id: 'c4', x: 47, y: 67, placement: 'left', name: 'Inner Sealant Layer', desc: 'Airtight base sealant compatible with automated filling heat jaw temperatures.', link: '/topics/compostable-pouch-suppliers', heroImage: '/imgs/generated/sustainable_pillar.png' },
        { id: 'c5', x: 60, y: 77, placement: 'bottom', name: 'Stand-Up Gusset', desc: 'Heavy duty bottom gusset designed for vertical display stability.', link: '/topics/compostable-packaging-blog', heroImage: '/imgs/generated/sustainable_pillar.png' }
      ]
    },
    {
      src: '/imgs/knowledge/explorer_compost_2_1784176082121.jpg',
      infographicSrc: '/imgs/knowledge/composting-circular-lifecycle.jpg',
      alt: 'Cellulose Composting Lifecycle',
      title: 'Circular Composting Lifecycle',
      hotspots: [
        { id: 'cl1', x: 82, y: 35, placement: 'right', name: 'Packaging Use', desc: 'Durable and aesthetic compostable packaging in consumer use.', link: '/topics/home-compostable-coffee-bags', heroImage: '/imgs/generated/sustainable_pillar.png' },
        { id: 'cl2', x: 74, y: 48, placement: 'left', name: 'Organic Disposal', desc: 'Discarded alongside kitchen food scraps to home compost bins.', link: '/topics/home-vs-industrial-compostable', heroImage: '/imgs/generated/eco_audit.png' },
        { id: 'cl3', x: 90, y: 48, placement: 'right', name: 'Biodegradation Phase', desc: 'Breaks down fully into natural organic molecules in 90-180 days.', link: '/topics/compostable-certification', heroImage: '/imgs/generated/eco_audit.png' },
        { id: 'cl4', x: 78, y: 63, placement: 'left', name: 'Nutrient Rich Soil', desc: 'Returns essential nutrients back to farming compost soil.', link: '/topics/compostable-certification-faq', heroImage: '/imgs/generated/eco_audit.png' },
        { id: 'cl5', x: 87, y: 63, placement: 'bottom', name: 'Plant Sourced Raw Materials', desc: 'Regrown plants capture atmospheric CO2 in a carbon-negative feedstock loop.', link: '/topics/compostable-humidity-control', heroImage: '/imgs/generated/eco_audit.png' }
      ]
    }
  ],
  recyclable: [
    {
      src: '/imgs/knowledge/explorer_recyclable_1_1784176090594.jpg',
      infographicSrc: '/imgs/knowledge/explorer_recyclable_infographic.jpg',
      alt: 'Mono-PE Recyclable Pouch',
      title: 'Mono-Material PE Packaging',
      hotspots: [
        { id: 'r1', x: 30, y: 25, placement: 'top', name: 'Mono-material Structure', desc: 'Made from 100% PE for seamless sorting and mechanical recycling.', link: '/materials/recyclable-mono-pe', heroImage: '/imgs/generated/mono_material.png' },
        { id: 'r2', x: 60, y: 45, placement: 'right', name: 'EVOH Barrier', desc: 'Ultra-thin oxygen barrier coating fully compatible with recycle streams.', link: '/materials/recyclable-mono-pe', heroImage: '/imgs/generated/mono_material.png' },
        { id: 'r3', x: 50, y: 85, placement: 'top', name: 'Store Drop-off', desc: 'Designed for retail store PE bag collection drop-offs (How2Recycle).', link: '/materials/recyclable-mono-pe', heroImage: '/imgs/generated/recyclable_guide.png' }
      ]
    },
    {
      src: '/imgs/knowledge/explorer_recyclable_2_1784176098268.jpg',
      infographicSrc: '/imgs/knowledge/explorer_recyclable_infographic.jpg',
      alt: 'Mono-PP Recyclable Pouch',
      title: 'Mono-Material PP Packaging',
      hotspots: [
        { id: 'r2_1', x: 50, y: 30, placement: 'top', name: 'Polypropylene Base', desc: 'High melting point structure ideal for retort food sterilization.', link: '/materials/recyclable-mono-pp', heroImage: '/imgs/generated/mono_material.png' },
        { id: 'r2_2', x: 70, y: 60, placement: 'left', name: 'Matte Tactile Finish', desc: 'Luxury matte overprint varnish applied to outer film layer.', link: '/materials/recyclable-mono-pp', heroImage: '/imgs/generated/mono_material.png' }
      ]
    }
  ],
  biope: [
    {
      src: '/imgs/knowledge/explorer_biope_1_1784176106246.jpg',
      infographicSrc: '/imgs/knowledge/explorer_biope_infographic.jpg',
      alt: 'Bio-Based PE Cycle',
      title: 'Bio-Based PE Sugarcane Loop',
      hotspots: [
        { id: 'b1', x: 20, y: 30, placement: 'top', name: 'Sugarcane Source', desc: 'Derived from sustainable Brazilian sugarcane ethanol instead of petroleum.', link: '/biope/what-is-bio-pe', heroImage: '/imgs/generated/sustainable_pillar.png' },
        { id: 'b2', x: 70, y: 40, placement: 'right', name: 'Carbon Negative', desc: 'Crops capture up to 3.09 kg CO2 per kg of sugarcane polymer grown.', link: '/topics/carbon-footprint-tracking-packaging', heroImage: '/imgs/generated/eco_audit.png' },
        { id: 'b3', x: 35, y: 65, placement: 'left', name: 'Drop-in Solution', desc: '100% chemically identical to traditional fossil-based polyethylene.', link: '/biope/inside-im-green-bio-pe', heroImage: '/imgs/generated/certification_faq.png' },
        { id: 'b4', x: 80, y: 75, placement: 'bottom', name: 'Recyclability', desc: 'Fully recyclable inside traditional PE curbside collection streams.', link: '/biope/bio-pe-vs-compostable', heroImage: '/imgs/generated/recyclable_guide.png' }
      ]
    }
  ],
  pcr: [
    {
      src: '/imgs/knowledge/explorer_pcr_1_1784176113858.jpg',
      infographicSrc: '/imgs/knowledge/explorer_pcr_infographic.jpg',
      alt: 'Post-Consumer Recycled Material',
      title: 'Post-Consumer Recycled Loop',
      hotspots: [
        { id: 'p1', x: 15, y: 50, placement: 'right', name: 'Household Sorting', desc: 'Post-consumer waste collected through curbside bins.', link: '/materials/pcr', heroImage: '/imgs/generated/pcr_guide.png' },
        { id: 'p2', x: 50, y: 30, placement: 'bottom', name: 'Mechanical Processing', desc: 'Shredded, washed, and pelletized into recycled plastic resins.', link: '/materials/pcr', heroImage: '/imgs/generated/pcr_guide.png' },
        { id: 'p3', x: 85, y: 40, placement: 'left', name: 'Film Extrusion', desc: 'Extruded alongside virgin plastic to form high strength films.', link: '/materials/pcr', heroImage: '/imgs/generated/pcr_guide.png' },
        { id: 'p4', x: 25, y: 70, placement: 'right', name: 'Custom Pouch Production', desc: 'Formed into final stand-up bags containing up to 50% PCR material.', link: '/materials/pcr', heroImage: '/imgs/generated/pcr_guide.png' }
      ]
    }
  ],
  pouch: [
    {
      src: '/imgs/knowledge/explorer_pouch_1_1784176121449.jpg',
      infographicSrc: '/imgs/knowledge/explorer_pouch_infographic.jpg',
      alt: 'Flexible Pouch Formats',
      title: 'Pouch Shape Varieties',
      hotspots: [
        { id: 'pu1', x: 30, y: 40, placement: 'top', name: 'Stand-Up Pouch (Doypack)', desc: 'Round-bottom or K-seal bottom gussets allow vertical standing.', link: '/packaging/stand-up-pouches', heroImage: '/imgs/generated/custom_packaging.png' },
        { id: 'pu2', x: 70, y: 45, placement: 'left', name: 'Flat Bottom (Box Pouch)', desc: 'Five printable display panels with flat bottom stability.', link: '/packaging/flat-bottom-bags', heroImage: '/imgs/pouch/knowledge/pouch-sizing-pain-points.jpg' },
        { id: 'pu3', x: 50, y: 60, placement: 'bottom', name: 'Spouted Fitment Pouches', desc: 'Integrated plastic fitment and cap for secure liquid dispensing.', link: '/packaging/spout-pouches', heroImage: '/imgs/generated/custom_packaging.png' }
      ]
    },
    {
      src: '/imgs/knowledge/explorer_pouch_2_fixed_1784176405643.jpg',
      infographicSrc: '/imgs/knowledge/explorer_pouch_infographic.jpg',
      alt: 'Premium Pouch Add-ons',
      title: 'Functional Pouch Closures',
      hotspots: [
        { id: 'pu2_1', x: 50, y: 45, placement: 'bottom', name: 'Reclosable Zipper', desc: 'Press-to-close or slider options for multiple openings.', link: '/features/reclosure-options', heroImage: '/imgs/generated/custom_packaging.png' },
        { id: 'pu2_2', x: 65, y: 75, placement: 'right', name: 'One-Way Degassing Valve', desc: 'Expels roasted coffee carbon dioxide while blocking external oxygen.', link: '/products/coffee-bags-degassing-valve', heroImage: '/imgs/generated/food_supplier.png' }
      ]
    }
  ],
  box: [
    {
      src: '/imgs/knowledge/explorer_box_1_1784176139115.jpg',
      infographicSrc: '/imgs/knowledge/explorer_box_infographic.jpg',
      alt: 'Custom Paper Box Structures',
      title: 'Premium Paper Box Structure',
      hotspots: [
        { id: 'bx1', x: 40, y: 25, placement: 'bottom', name: 'FSC Rigid Carton', desc: 'Sourced from certified responsibly managed forestry supplies.', link: '/packaging/custom-boxes', heroImage: '/imgs/generated/eco_audit.png' },
        { id: 'bx2', x: 75, y: 35, placement: 'left', name: 'Eco-Friendly Inks', desc: 'Water-based or soy inks replacing toxic petroleum-based pigments.', link: '/materials/compostable', heroImage: '/imgs/generated/compostable_blog.png' },
        { id: 'bx3', x: 25, y: 55, placement: 'right', name: 'De-bossing Detail', desc: 'Tactile press effects applied to paper surfaces without plastic sheets.', link: '/features/surface-finish', heroImage: '/imgs/options/surface-finish-comparison.png' },
        { id: 'bx4', x: 60, y: 70, placement: 'top', name: 'Sugarcane Pulp Insert', desc: 'Molded bagasse tray custom molded to fit products securely.', link: '/industry/compostable-sugarcane-pulp-box', heroImage: '/imgs/generated/sustainable_pillar.png' }
      ]
    }
  ],
  industry: [
    {
      src: '/imgs/knowledge/explorer_industry_1_1784176146986.jpg',
      infographicSrc: '/imgs/knowledge/explorer_industry_infographic.jpg',
      alt: 'Industrial Packing Solutions',
      title: 'Industrial Barrier Specifications',
      hotspots: [
        { id: 'i1', x: 30, y: 30, placement: 'right', name: 'Oxygen & Moisture Barrier', desc: 'Sub-1cc barrier performance parameters for premium coffee shelf life.', link: '/industry/coffee-tea', heroImage: '/imgs/generated/food_supplier.png' },
        { id: 'i2', x: 70, y: 40, placement: 'left', name: 'Degassing Valve Placement', desc: 'Precise automated heat stamp insertion on packaging lines.', link: '/industry/eco-coffee-bags-valve', heroImage: '/imgs/generated/food_supplier.png' },
        { id: 'i3', x: 20, y: 70, placement: 'top', name: 'Nitrogen Flush Fitment', desc: 'Allows inert gas sealing to lower residual oxygen below 1.5%.', link: '/industry/snacks-food', heroImage: '/imgs/generated/food_supplier.png' }
      ]
    }
  ],
  printing: [
    {
      src: '/imgs/knowledge/explorer_printing_1_1784176867772.jpg',
      infographicSrc: '/imgs/knowledge/explorer_printing_infographic.jpg',
      alt: 'Flexible Printing Methods',
      title: 'Printing Technologies',
      hotspots: [
        { id: 'pr1', x: 20, y: 50, placement: 'right', name: 'Digital Plate-less Print', desc: 'Direct thermal inkjet array for short runs and variable data.', link: '/knowledge/printing-types', heroImage: '/imgs/generated/custom_packaging.png' },
        { id: 'pr2', x: 45, y: 45, placement: 'right', name: 'Rotogravure Cylinders', desc: 'Copper-plated engraved cylinders for fast, high-volume runs.', link: '/knowledge/printing-types', heroImage: '/imgs/generated/custom_packaging.png' },
        { id: 'pr3', x: 70, y: 60, placement: 'left', name: 'UV Curing Stations', desc: 'Instant ink drying systems preserving print sharp line edges.', link: '/knowledge/white-ink-underprint', heroImage: '/imgs/generated/custom_packaging.png' }
      ]
    }
  ],
  sealing: [
    {
      src: '/imgs/knowledge/explorer_sealing_1_1784176875532.jpg',
      infographicSrc: '/imgs/knowledge/explorer_sealing_infographic.jpg',
      alt: 'Film Sealing Dynamics',
      title: 'Sealing Parameters',
      hotspots: [
        { id: 'se1', x: 35, y: 40, placement: 'right', name: 'Thermal Jaw Sealing', desc: 'Controlling dwell time, force pressure, and temperature (150-230°C).', link: '/knowledge/pouch-heat-sealing-temperature-guide', heroImage: '/imgs/generated/sustainable_pillar.png' },
        { id: 'se2', x: 50, y: 25, placement: 'bottom', name: 'Ultrasonic Sonotrode Sealing', desc: 'Friction heat via 20-40 kHz mechanical vibration for dust exclusion.', link: '/topics/ultrasonic-vs-heat-sealing', heroImage: '/imgs/generated/sustainable_pillar.png' },
        { id: 'se3', x: 65, y: 50, placement: 'left', name: 'Fin vs Lap Seams', desc: 'Seaming layers structural comparisons in automated flow wrap lines.', link: '/knowledge/fin-seal-lap-seal', heroImage: '/imgs/pouch-shape/flat-bottom-vs-gusset/flat-bottom.png' }
      ]
    }
  ],
  tech: [
    {
      src: '/imgs/knowledge/explorer_tech_1_1784176883999.jpg',
      infographicSrc: '/imgs/knowledge/explorer_tech_infographic.jpg',
      alt: 'Digital Product Passports',
      title: 'Circularity QR Traceability',
      hotspots: [
        { id: 'tc1', x: 50, y: 40, placement: 'bottom', name: 'Digital Product Passports (DPP)', desc: 'EU regulations compliance through unique serializable QR codes.', link: '/topics/digital-product-passport-packaging', heroImage: '/imgs/generated/eco_audit.png' },
        { id: 'tc2', x: 65, y: 65, placement: 'left', name: 'Nitrogen Injection Verification', desc: 'MAP process sensor feedback to guarantee low oxygen levels.', link: '/topics/active-modified-atmosphere-packaging', heroImage: '/imgs/generated/food_supplier.png' }
      ]
    }
  ],
  sizing: [
    {
      src: '/imgs/knowledge/explorer_sizing_1_1784176890660.jpg',
      infographicSrc: '/imgs/knowledge/explorer_sizing_infographic.jpg',
      alt: 'Stand-Up Pouch Sizing Standards',
      title: 'Pouch Sizing & Gusset Standards',
      hotspots: [
        { id: 'sz1', x: 25, y: 65, placement: 'right', name: 'Capacity to Dry Volume', desc: 'Standard conversions from 2oz (50g) up to 10lb (4.5kg) bulk bags.', link: '/knowledge/size-guide', heroImage: '/imgs/pouch-shape/flat-bottom-vs-gusset/flat-bottom.png' },
        { id: 'sz2', x: 50, y: 55, placement: 'bottom', name: 'Gusset Geometry', desc: 'Round-bottom, single fold, or D-die cut bottom volume ratios.', link: '/knowledge/pouch-sizing', heroImage: '/imgs/pouch-shape/flat-bottom-vs-gusset/flat-bottom.png' },
        { id: 'sz3', x: 75, y: 50, placement: 'left', name: 'Dimension Measurements', desc: 'Proper measuring specifications (Width x Height x Gusset depth).', link: '/knowledge/flat-bottom-vs-gusset', heroImage: '/imgs/pouch-shape/flat-bottom-vs-gusset/flat-bottom.png' }
      ]
    }
  ],
  all: []
};
