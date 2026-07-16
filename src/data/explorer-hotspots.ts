export interface Hotspot {
  id: string;
  name: string;
  desc: string;
  link: string;
  x: number;
  y: number;
  placement: 'left' | 'right' | 'top' | 'bottom';
}

export interface ExplorerImage {
  src: string;
  alt: string;
  title: string;
  hotspots: Hotspot[];
}

export type ExplorerCategory = 'compost' | 'recyclable' | 'biope' | 'pcr' | 'pouch' | 'box' | 'industry' | 'all';

export const EXPLORER_DATA: Record<string, ExplorerImage[]> = {
  compost: [
    {
      src: '/imgs/knowledge/explorer_compost_1784171771409.jpg',
      alt: 'Compostable Pouch Anatomy',
      title: 'Compostable Pouch Anatomy',
      hotspots: [
        { id: 'c1', x: 25, y: 30, placement: 'top', name: 'PLA Outer Layer', desc: 'Plant-based polylactic acid provides moisture resistance and printability.', link: '/materials/compostable' },
        { id: 'c2', x: 50, y: 50, placement: 'right', name: 'Cellulose Core', desc: 'Provides structural rigidity derived from wood pulp.', link: '/materials/compostable' },
        { id: 'c3', x: 75, y: 70, placement: 'bottom', name: 'PBS Sealant', desc: 'Biodegradable sealant layer ensuring airtight closure.', link: '/materials/compostable' },
        { id: 'c4', x: 40, y: 80, placement: 'left', name: 'Soil Degradation', desc: 'Breaks down into biomass, water, and CO2 in 90-180 days.', link: '/composting/commercial-composting' },
        { id: 'c5', x: 20, y: 60, placement: 'right', name: 'Organic Inks', desc: 'Non-toxic, soy-based inks that leave no harmful residues.', link: '/materials/compostable' }
      ]
    }
  ],
  recyclable: [
    {
      src: '/imgs/knowledge/explorer_recyclable_1784171781810.jpg',
      alt: 'Mono-Material Recyclable Structure',
      title: 'Mono-Material Recyclable Structure',
      hotspots: [
        { id: 'r1', x: 30, y: 25, placement: 'top', name: 'Mono-material Structure', desc: 'Made from 100% PE for seamless recycling.', link: '/materials/recyclable-mono-pe' },
        { id: 'r2', x: 60, y: 45, placement: 'right', name: 'EVOH Barrier', desc: 'High-barrier coating that does not disrupt recycling streams.', link: '/materials/recyclable-mono-pe' },
        { id: 'r3', x: 20, y: 75, placement: 'bottom', name: 'Recyclable Zipper', desc: 'Compatible PE zipper allowing the whole pouch to be recycled.', link: '/materials/recyclable-mono-pe' },
        { id: 'r4', x: 80, y: 60, placement: 'left', name: 'Store Drop-off', desc: 'Designed for PE film recycling bins (How2Recycle).', link: '/materials/recyclable-mono-pe' },
        { id: 'r5', x: 50, y: 85, placement: 'top', name: 'Heat Seal Layer', desc: 'Low initiation temperature for faster packaging speeds.', link: '/materials/recyclable-mono-pe' }
      ]
    }
  ],
  biope: [
    {
      src: '/imgs/knowledge/explorer_biope_1784171790236.jpg',
      alt: 'Bio-Based PE Production Cycle',
      title: 'Bio-Based PE Production Cycle',
      hotspots: [
        { id: 'b1', x: 20, y: 30, placement: 'top', name: 'Sugarcane Source', desc: 'Derived from renewable ethanol instead of fossil fuels.', link: '/biope/what-is-bio-pe' },
        { id: 'b2', x: 70, y: 40, placement: 'right', name: 'Carbon Negative', desc: 'Captures CO2 during sugarcane growth phase.', link: '/topics/carbon-footprint-tracking-packaging' },
        { id: 'b3', x: 35, y: 65, placement: 'left', name: 'Drop-in Solution', desc: 'Chemically identical to fossil PE, works on standard lines.', link: '/biope/inside-im-green-bio-pe' },
        { id: 'b4', x: 80, y: 75, placement: 'bottom', name: 'Recyclable', desc: 'Fully compatible with traditional PE recycling streams.', link: '/biope/bio-pe-vs-compostable' }
      ]
    }
  ],
  pcr: [
    {
      src: '/imgs/knowledge/explorer_pcr_1784171798162.jpg',
      alt: 'Post-Consumer Recycled Circular Loop',
      title: 'Post-Consumer Recycled Circular Loop',
      hotspots: [
        { id: 'p1', x: 15, y: 20, placement: 'right', name: 'Collected Waste', desc: 'Post-consumer plastic bottles and films.', link: '/materials/pcr' },
        { id: 'p2', x: 50, y: 15, placement: 'bottom', name: 'Sorting & Cleaning', desc: 'Advanced sorting ensures high purity resin.', link: '/materials/pcr' },
        { id: 'p3', x: 85, y: 40, placement: 'left', name: 'PCR Resin', desc: 'Pelletized recycled material ready for extrusion.', link: '/materials/pcr' },
        { id: 'p4', x: 70, y: 80, placement: 'top', name: 'Extrusion', desc: 'Blended with virgin plastic to maintain structural integrity.', link: '/materials/pcr' },
        { id: 'p5', x: 25, y: 70, placement: 'right', name: 'Final Pouch', desc: 'Up to 50% PCR content reducing virgin plastic use.', link: '/materials/pcr' }
      ]
    }
  ],
  pouch: [
    {
      src: '/imgs/knowledge/explorer_pouch_1784171805375.jpg',
      alt: 'Pouch Structural Guide',
      title: 'Pouch Structural Guide',
      hotspots: [
        { id: 'pu1', x: 30, y: 20, placement: 'top', name: 'Stand-Up Pouch', desc: 'Bottom gusset allows the pouch to stand vertically.', link: '/packaging/stand-up-pouches' },
        { id: 'pu2', x: 70, y: 25, placement: 'right', name: 'Flat Bottom Pouch', desc: 'Five panels for maximum branding and stability.', link: '/packaging/flat-bottom-bags' },
        { id: 'pu3', x: 20, y: 60, placement: 'left', name: 'Spout Pouch', desc: 'Integrated fitment for liquids and purees.', link: '/packaging/spout-pouches' },
        { id: 'pu4', x: 55, y: 75, placement: 'bottom', name: 'Shaped Pouch', desc: 'Custom die-cut shapes for shelf differentiation.', link: '/knowledge/flat-bottom-vs-gusset' },
        { id: 'pu5', x: 85, y: 65, placement: 'left', name: 'Tear Notch', desc: 'Easy opening feature for consumer convenience.', link: '/features/reclosure-options' }
      ]
    }
  ],
  box: [
    {
      src: '/imgs/knowledge/explorer_box_1784171812789.jpg',
      alt: 'Premium Sugarcane Box',
      title: 'Premium Sugarcane Box',
      hotspots: [
        { id: 'bx1', x: 40, y: 15, placement: 'bottom', name: 'FSC Certified Paper', desc: 'Sourced from responsibly managed forests.', link: '/packaging/custom-boxes' },
        { id: 'bx2', x: 75, y: 35, placement: 'left', name: 'Water-based Coating', desc: 'Eco-friendly alternative to plastic laminations.', link: '/materials/compostable' },
        { id: 'bx3', x: 25, y: 55, placement: 'right', name: 'Embossing', desc: 'Premium tactile finish without adding plastics.', link: '/features/surface-finish' },
        { id: 'bx4', x: 60, y: 70, placement: 'top', name: 'Sugarcane Pulp Insert', desc: 'Molded pulp tray replacing plastic blister packs.', link: '/industry/compostable-sugarcane-pulp-box' },
        { id: 'bx5', x: 80, y: 85, placement: 'top', name: 'Soy Inks', desc: 'Vibrant colors using renewable resources.', link: '/materials/compostable' }
      ]
    }
  ],
  industry: [
    {
      src: '/imgs/knowledge/explorer_industry_1784171820644.jpg',
      alt: 'Industry Packaging Solutions',
      title: 'Industry Packaging Solutions',
      hotspots: [
        { id: 'i1', x: 20, y: 30, placement: 'top', name: 'Food & Beverage', desc: 'FDA-approved, high-barrier packaging for freshness.', link: '/industry/snacks-food' },
        { id: 'i2', x: 80, y: 40, placement: 'left', name: 'Pet Food', desc: 'Durable, odor-barrier solutions for kibble and treats.', link: '/industry/pet-food' },
        { id: 'i3', x: 30, y: 70, placement: 'right', name: 'Coffee & Tea', desc: 'Degassing valves and foil barriers for aroma protection.', link: '/industry/coffee-tea' },
        { id: 'i4', x: 70, y: 80, placement: 'bottom', name: 'Health & Beauty', desc: 'Premium, sustainable packaging for cosmetics.', link: '/industry/premium-soft-touch' },
        { id: 'i5', x: 50, y: 50, placement: 'top', name: 'Household Goods', desc: 'Child-resistant and chemical-resistant options.', link: '/industry/sustainable-healthcare-packaging' }
      ]
    }
  ],
  all: []
};
