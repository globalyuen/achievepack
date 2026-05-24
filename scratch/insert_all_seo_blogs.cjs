const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase URL or Key. Check your .env / .env.local files.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Define the 10 rich articles
const articles = [
  {
    slug: "stand-up-pouch-sizing-guide",
    title: "The Ultimate Stand Up Pouch Sizing & Density Guide",
    excerpt: "Startup founders and product developers searching for the correct physical dimensions of flexible packaging so they don't buy bags that overflow or tear.",
    category: "Packaging Guide",
    tags: ["stand up pouch", "sizing guide", "pouch calculator", "packaging size", "flexible packaging", "dimensions"],
    featuredImage: "/imgs/blog/pouch_sizing_density_guide.png",
    readTime: 9,
    metaDescription: "Comprehensive stand up pouch sizing and density guide for B2B brands. Compare pouch volumes, standard dimensions (XS-XL), and calculate bulk density to prevent overflows.",
    source_url: "https://achievepack.com/blog/stand-up-pouch-sizing-guide",
    sections: [
      {
        title: "The Bulk Density Dilemma: Why Weight ≠ Volume",
        icon: "info",
        content: `Many startups make the critical mistake of assuming that <strong>100 grams of coffee beans will fit in the same bag as 100 grams of organic matcha powder</strong>. In reality, they require completely different pouch volumes. This physical reality is governed by <strong>bulk density</strong> (mass per unit volume).
        <br/><br/>
        For example, fine, compact powders like salt or matcha have high bulk density, meaning they take up very little space. Fluffy, loose products like herbal teas, granola, or freeze-dried dog treats have low bulk density, requiring large, spacious pouches. To calculate the exact pouch volume you need, use this standardized engineering formula:
        <br/><br/>
        <div style="padding: 1rem; border-left: 4px solid #10b981; background-color: #f3f4f6; margin: 1rem 0; border-radius: 4px;">
          <strong>The Volumetric Formula:</strong><br/>
          <code>Volume (ml) = [Product Weight (g) / Bulk Density (g/ml)] &times; 1.25 (Safety Factor for sealing headspace)</code>
        </div>
        Applying this formula ensures that your product fills the pouch perfectly without spilling during the high-speed heat-sealing process or putting stress on the zipper closure.`
      },
      {
        title: "Standard B2B Sizing Chart: Dimensions (XS to XL)",
        icon: "package",
        content: `To help your product development team, here is the official B2B standard sizing reference chart. It correlates physical dimensions (Width &times; Height + Bottom Gusset) with typical filling capacities for both dense products (like salt) and low-density products (like whole-bean coffee):
        <br/><br/>
        <table style="width:100%; text-align:left; margin: 1.5rem 0; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #059669; color: white;">
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">Size Category</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">Dimensions (W &times; H + Gusset)</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">Matcha / Powder Capacity</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">Whole Bean Coffee Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">XS (Extra Small)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">100 &times; 150 + 60 mm</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">30g - 50g</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">20g - 30g</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">S (Small)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">130 &times; 200 + 70 mm</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">100g - 150g</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">70g - 100g</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">M (Medium)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">160 &times; 230 + 80 mm</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">250g - 300g</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">150g - 200g</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">L (Large)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">190 &times; 260 + 90 mm</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">500g - 600g</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">250g - 350g</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">XL (Extra Large)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">230 &times; 340 + 100 mm</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">1kg - 1.2kg</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">500g - 1kg</td>
            </tr>
          </tbody>
        </table>
        <div style="padding: 1rem; border-left: 4px solid #3b82f6; background-color: #eff6ff; margin: 1rem 0; font-style: italic;">
          <strong>Note:</strong> Bottom gussets expand to create a flat, self-standing base once filled. The width and height are outer dimensions—subtract 10mm from each edge for standard side-weld seals to find the maximum internal capacity.
        </div>`
      },
      {
        title: "Measuring Pouch Volume: Home Water-Displacement Test",
        icon: "help",
        content: `If you want to verify your required sizing before ordering custom printing, you can perform a simple <strong>water-displacement test</strong> at home:
        <br/><br/>
        1. Fill a thin, flexible plastic measuring bag with your exact target product weight (e.g., 250g of your granola).<br/>
        2. Submerge the product completely into a graduated measuring jug filled with a known volume of water.<br/>
        3. Note the volume increase (displaced water) in milliliters (ml). This equals the physical volume of your product.<br/>
        4. Add 25% to this volume to account for the necessary headspace (which allows the bag to seal flat without crushing your product).`
      },
      {
        title: "The B2B Sample Kit Strategy: Test Before You Print",
        icon: "check",
        content: `To completely eliminate sizing risk, AchievePack recommends ordering a <strong>Pre-Sized Sample Box</strong>. This kit contains unprinted, plain pouches in all our standard sizes (XS to XL) in various materials (compostable Kraft, Mono-PE, and high-barrier metallized films). 
        <br/><br/>
        By physically pouring your product into these blank pouches, you can verify density, test zipper closure durability, and evaluate the standing posture of the pouch on retail shelves. The cost of the sample kit is fully credited back to your account upon placing your first custom printed order.`
      }
    ]
  },
  {
    slug: "mono-pe-vs-mono-pp",
    title: "Curbside Recyclable Mono-PP vs. Mono-PE: Which Material Wins?",
    excerpt: "Enterprise compliance managers and sustainable coordinators trying to choose between PE and PP to align with upcoming EU PPWR 2030 guidelines.",
    category: "Materials Guide",
    tags: ["mono-PE", "mono-PP", "recyclable packaging", "PPWR", "material science", "flexible packaging"],
    featuredImage: "/imgs/blog/mono_pe_vs_mono_pp.png",
    readTime: 11,
    metaDescription: "Detailed engineering guide comparing Mono-PE and Mono-PP curbside recyclable films. Compare OTR/WVTR barrier performance, compliance standards, and recycle channels.",
    source_url: "https://achievepack.com/blog/mono-pe-vs-mono-pp",
    sections: [
      {
        title: "Chemical Laminate Demystification: What is a Mono-Material?",
        icon: "info",
        content: `Traditional flexible pouches are multi-material structures made by laminating different plastics together—such as PET (for rigidity), Aluminum Foil (for barrier), and LLDPE (for sealing). Because these chemically distinct layers cannot be separated by standard machinery, <strong>traditional pouches are completely rejected by municipal recycling sorting centers</strong>.
        <br/><br/>
        <strong>Mono-material packaging</strong> solves this crisis by using polymers from the <em>same polymer family</em> (either Polyethylene or Polypropylene) for every layer. Because the bag is made from a single polymer, it can be melted down together and processed cleanly into high-grade recycled resins, conforming directly to upcoming <strong>EU Packaging and Packaging Waste Regulation (PPWR) 2030</strong> guidelines.`
      },
      {
        title: "Physical Performance: Mono-PE vs. Mono-PP",
        icon: "package",
        content: `Choosing the right mono-material depends heavily on your product's physical demands and shipping lifecycle:
        <br/><br/>
        <ul>
          <li><strong>Mono-PE (Polyethylene):</strong> Incredibly flexible, soft to the touch, and boasts superior puncture resistance. It remains highly elastic at low temperatures, making it the perfect choice for frozen foods and heavy bulk powders. Mono-PE has wide curbside infrastructure support in the EU and Store Drop-Off networks in the USA.</li>
          <li><strong>Mono-PP (Polypropylene):</strong> Characterized by high stiffness and rigidity, giving the pouch a crisp, upright stand-up posture on retail shelves. It features crystal-clear optical clarity (perfect for display windows) and high thermal resistance, allowing for hot-fill operations, pasteurization, and microwave steam applications.</li>
        </ul>`
      },
      {
        title: "OTR/WVTR Barrier Performance Metrics",
        icon: "check",
        content: `Sustainable packaging must still keep your product fresh. Here is the direct engineering comparison of standard vs. high-barrier PVOH-coated mono-materials:
        <br/><br/>
        <table style="width:100%; text-align:left; margin: 1.5rem 0; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #059669; color: white;">
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">Structure Specification</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">WVTR (g/m²/day)</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">OTR (cc/m²/day)</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">Recycling Stream Compatibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">Standard Mono-PE</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 1.5</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 2.5</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">USA Store Drop-Off, UK/EU Curbside</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">High-Barrier Mono-PE (EVOH/PVOH)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 0.8</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 1.0</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">Fully Compliant (barrier layer &lt; 5% weight)</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">Standard Mono-PP</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 1.2</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 2.0</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">EU Rigid & Flexible PP streams</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">High-Barrier Mono-PP (Coated)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 0.6</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 0.8</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">Fully Compliant</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        title: "Compliance & Sourcing: Navigating SB 343 & EU Regulations",
        icon: "help",
        content: `Under <strong>California's SB 343</strong>, products cannot display the "chasing arrows" recycling logo unless the manufacturer can prove the material is regularly recovered and sorted by local MRFs (Materials Recovery Facilities).
        <br/><br/>
        AchievePack's <strong>Mono-PE pouches are certified extensively</strong> and can be safely labeled for US Store Drop-Off networks (complying with How2Recycle guidelines) and European circular collection streams. This compliance mitigates greenwashing litigation risks and regulatory fines for enterprise brands.`
      }
    ]
  },
  {
    slug: "grease-proof-pet-treat-packaging",
    title: "Grease-Migration Barriers in Sustainable Pet Treat Packaging",
    excerpt: "Premium organic pet brand founders trying to prevent oily animal fats from migrating through paper bags and creating ugly dark spots on retail shelves.",
    category: "Industry Solutions",
    tags: ["pet treats", "grease barrier", "pet food packaging", "kraft pouches", "compostable pouches"],
    featuredImage: "/imgs/blog/grease_proof_pet_treat.png",
    readTime: 8,
    metaDescription: "Prevent dark grease spots and lipid migration in pet food packaging. Learn how triplex metallized paper laminates shield dog treats and kibble while maintaining eco credentials.",
    source_url: "https://achievepack.com/blog/grease-proof-pet-treat-packaging",
    sections: [
      {
        title: "The Staining Problem: Understanding Lipid Migration",
        icon: "info",
        content: `For premium pet food and organic dog treat brands, shelf appeal is everything. However, animal treats are packed with oils, fats, and moisture (e.g., chicken fat, salmon oil, beef tallow). When packaged in standard paper or single-layer bioplastics, these oils migrate outwards through a process called <strong>lipid migration</strong>.
        <br/><br/>
        As fats seep through the packaging, they dissolve lamination adhesives, weaken bag seams, and create unsightly dark, greasy spots on the outer paper. This not only destroys your retail aesthetics but also allows oxygen to seep inward, accelerating spoilage and creating a rancid smell.`
      },
      {
        title: "The Triplex Grease-Defense Laminate Architecture",
        icon: "package",
        content: `To completely block lipid migration while projecting a rustic, organic brand image, AchievePack engineers a specialized <strong>Triplex (three-layer) barrier laminate structure</strong>:
        <br/><br/>
        <ol>
          <li><strong>Outer Layer: Natural Kraft Paper (80gsm):</strong> Provides a beautiful, organic, tactile paper aesthetic that instantly signals premium eco-friendly values to shoppers.</li>
          <li><strong>Middle Layer: Metallized Barrier Film (12&mu;m Al/PLA or VMPET):</strong> Acts as a highly reflective, impermeable shield that completely blocks oxygen, moisture, and migrating grease.</li>
          <li><strong>Inner Layer: High-Seal Food-Grade LLDPE (60&mu;m):</strong> Provides high seal strength, high puncture resistance against sharp freeze-dried treats, and food-contact safety compliance.</li>
        </ol>
        For brands seeking fully compostable options, the middle layer is replaced with metallized NatureFlex cellulose, and the inner layer with a plant-derived biodegradable PBAT/PLA sealing film, certified to <strong>ASTM D6400 / EN 13432</strong> standards. Our certified compostable <a href="/spec/bio-kraft-vm-cello" style="color: #059669; font-weight: bold; text-decoration: underline;">Bio-Kraft VM-Cello</a> structure offers near-perfect lipid barrier performance.
        <br/><br/>
        <div style="text-align: center; margin: 1.5rem 0;">
          <img src="/imgs/spec/bio-kraft-vm-cello.webp" alt="Bio-Kraft VM-Cello Compostable Structure" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); margin: 0 auto; display: block;" />
        </div>`
      },
      {
        title: "Double-Phase Laboratory Testing for Fat Resistance",
        icon: "check",
        content: `Before launching any pet packaging, AchievePack subjects custom bags to rigorous fat and drop testing:
        <br/><br/>
        <ul>
          <li><strong>Fat Resistance Oven Test:</strong> Pouches are filled with high-fat pet treats and stored in a laboratory oven at 40°C under 80% relative humidity for 72 consecutive hours. The outer paper is monitored for any structural sweat spots, grease spots, or laminate peeling.</li>
          <li><strong>Tensile Sealing Integrity Test:</strong> The pouch seals are subjected to mechanical peel tests to ensure the fatty oils do not dissolve or weaken the heat-weld during transport drop impact.</li>
        </ul>`
      },
      {
        title: "Low MOQ Brand Sourcing Strategy",
        icon: "help",
        content: `Premium pet brands can avoid massive inventory carrying costs. AchievePack's digital printing allows custom pet treat pouches to be printed and produced with <strong>MOQs starting from just 100 units per SKU</strong>. This allows startup brands to launch premium, grease-proof packaging without committing thousands of dollars to unnecessary stock.`
      }
    ]
  },
  {
    slug: "coffee-degassing-valve-packaging",
    title: "Degassing Valves 101: Preventing Coffee Bag Bloating",
    excerpt: "Roasters who package fresh coffee beans. They need to understand how valves prevent both bag explosion and stale oxidation.",
    category: "Coffee Industry",
    tags: ["coffee bags", "degassing valve", "fresh coffee", "compostable valve", "packaging physics"],
    featuredImage: "/imgs/blog/coffee_degassing_valve.png",
    readTime: 10,
    metaDescription: "Learn the science of one-way coffee degassing valves. Discover how they release CO2, prevent oxygen ingress, and explore certified compostable bio-valves (ASTM D6400).",
    source_url: "https://achievepack.com/blog/coffee-degassing-valve-guide",
    sections: [
      {
        title: "The Physics of Coffee CO2 Off-Gassing",
        icon: "info",
        content: `During the coffee roasting process, intense thermal energy triggers chemical reactions that generate massive volumes of carbon dioxide (CO2) gas trapped inside the porous bean structure. Once roasted, <strong>coffee beans release this CO2 continuously for up to 14 days</strong>.
        <br/><br/>
        If fresh beans are sealed inside an airtight bag without ventilation, the expanding CO2 gas accumulates, causing the bag to bloat like a balloon and eventually burst at the seams. However, if you leave the bag open, atmospheric oxygen (O2) creeps in, oxidizing the coffee oils and destroying the volatile aromas within days, leading to stale, flat coffee.`
      },
      {
        title: "How the One-Way Mechanical Valve Works",
        icon: "package",
        content: `A <strong>one-way degassing valve</strong> solves this physical problem. It consists of an internal mechanical rubber diaphragm, a plastic cap, and a minute layer of viscous silicone oil:
        <br/><br/>
        <ul>
          <li><strong>Pressure Relief:</strong> When CO2 pressure inside the bag rises slightly above atmospheric pressure (approx. 0.05 psi), it pushes the rubber diaphragm open, letting CO2 escape.</li>
          <li><strong>Hermetic Seal:</strong> As soon as the gas exhausts, the external atmospheric pressure forces the diaphragm back down, sealing it against the silicone oil. This completely blocks outside oxygen (O2) from entering the bag.</li>
        </ul>
        This mechanism ensures fresh beans can off-gas safely while staying 100% protected against oxygen degradation.`
      },
      {
        title: "Traditional Valve vs. Certified Compostable Bio-Valve",
        icon: "check",
        content: `Traditional degassing valves are made from PE or nylon, which must be cut out and discarded before composting paper packaging. AchievePack offers advanced <strong>certified compostable bio-valves</strong>:
        <br/><br/>
        <ul>
          <li><strong>Material Formulation:</strong> Formulated from plant-derived PLA (Polylactic Acid) and natural biodegradable resins.</li>
          <li><strong>Compostability Certifications:</strong> Fully certified to meet <strong>ASTM D6400</strong> (USA) and <strong>EN 13432</strong> (Europe) standards.</li>
          <li><strong>Disintegration:</strong> The entire bag—including the bio-valve—can be thrown directly into organic compost bins, where it breaks down into nutrient-rich soil without leaving microplastics.</li>
        </ul>`
      },
      {
        title: "Enterprise ROI Analysis: Freshness & Space Efficiency",
        icon: "help",
        content: `For coffee roasters, degassing valves deliver direct financial returns:
        <br/><br/>
        1. **Zero Exploded Bags:** Completely eliminates product losses from ruptured seams during air transit.<br/>
        2. **Optimized Logistics:** Valves prevent bloating, allowing bags to pack flat and tight in shipping cartons. This reduces freight volumes and shipping costs by up to 20%.<br/>
        3. **Extended Shelf Life:** Keeps premium specialty roasts fresh for up to 12 months, expanding your distribution reach to national grocery chains.`
      }
    ]
  },
  {
    slug: "hot-fill-spout-pouches",
    title: "Pasteurization & Hot-Fill Tolerances in Spout Pouches",
    excerpt: "Production directors at organic baby food, puree, juice, or beverage brands auditing thermal tolerances for their packaging during pasteurization lines.",
    category: "Packaging Guide",
    tags: ["spout pouches", "hot fill", "pasteurization", "retort pouches", "baby food packaging"],
    featuredImage: "/imgs/blog/hot_fill_spout_pouches.png",
    readTime: 10,
    metaDescription: "Technical guide to hot-fill spout pouch materials and pasteurization. Understand thermal tolerances, retort limits, and anti-choke child-safe clover caps.",
    source_url: "https://achievepack.com/blog/hot-fill-spout-pouches",
    sections: [
      {
        title: "Thermal Limits in Retort & Hot-Fill Operations",
        icon: "info",
        content: `For liquid foods and purees (like organic baby foods, fruit purees, wellness juices, and sauces), packaging must survive intense heat during sanitization. There are two primary thermal processing methods:
        <br/><br/>
        <ul>
          <li><strong>Hot-Fill Operations:</strong> The product is heated to pasteurization temperature (typically <strong>85°C to 95°C</strong>) and immediately injected into the spout pouch. The heat of the product sterilizes both the pouch and the spout. The pouch is then quickly cooled to preserve nutrients.</li>
          <li><strong>Retort Processing:</strong> The product is filled at room temperature, sealed, and then placed in a pressurized chamber heated to <strong>121°C to 130°C</strong> for sterilizing. This process demands extremely specialized retort-grade materials to prevent thermal shock and delamination.</li>
        </ul>`
      },
      {
        title: "The Triplex High-Temp Material Alloy",
        icon: "package",
        content: `Standard packaging films will shrink, melt, or leak under hot-fill or retort conditions. AchievePack engineers specialized high-temperature structures:
        <br/><br/>
        <ul>
          <li><strong>Outer Layer: PET (Polyester - 12&mu;m):</strong> Provides high tensile strength, high heat resistance, and excellent print surface clarity.</li>
          <li><strong>Middle Layer: BOPA (Nylon - 15&mu;m):</strong> Delivers exceptional puncture resistance and thermal shock absorbing properties.</li>
          <li><strong>Inner Layer: RCPP (Retort Cast Polypropylene - 50&mu;m) or HDPE:</strong> Engineered specifically to maintain heat-seal stability and resist thermal stress without leaching or leaking.</li>
        </ul>`
      },
      {
        title: "Safety Innovations: Clover & Anti-Choke Child-Safe Caps",
        icon: "check",
        content: `Baby food packaging is subjected to the strictest safety standards. Traditional small screw caps present choking hazards if swallowed by infants. 
        <br/><br/>
        To prevent this, AchievePack spout pouches utilize large-diameter <strong>choke-proof clover caps</strong>. These caps are designed with cross-sectional ventilation channels. In the unlikely event that a child swallows a cap, these built-in air channels allow oxygen to flow through, preventing suffocation and meeting all FDA baby food safety guidelines.`
      },
      {
        title: "B2B Validation & Standard Leak Testing",
        icon: "help",
        content: `Every batch of spout pouches undergoes a double-phase seal audit:
        <br/><br/>
        1. **Hydraulic Compression Test:** Pouches are subjected to uniform pressure to verify that seams do not rupture.<br/>
        2. **Hot-Water Leak Test:** Pouches are filled with 95°C water and held under vacuum for 3 minutes to confirm zero micro-leaks around the spout interface.<br/>
        This technical rigor guarantees that your hot-fill filling lines run efficiently with zero downtime or messy product spills.`
      }
    ]
  },
  {
    slug: "mylar-vs-compostable-packaging",
    title: "Mylar vs. Compostable Film: A Granola Shelf-Life Comparison",
    excerpt: "Founders of organic granolas, seeds, and dried fruits comparing barrier shelf-life metrics to see if compostable bags can keep their products crunchy.",
    category: "Materials Guide",
    tags: ["mylar pouches", "compostable film", "shelf life comparison", "WVTR barrier", "organic granola"],
    featuredImage: "/imgs/blog/mylar_vs_compostable_comparison.png",
    readTime: 12,
    metaDescription: "Scientific comparison of high-barrier Mylar vs. compostable packaging. Compare OTR/WVTR transmission rates, shelf-life limits, and organic branding returns.",
    source_url: "https://achievepack.com/blog/mylar-vs-compostable-packaging",
    sections: [
      {
        title: "High-Barrier Mylar vs. Compostable Biopolymers",
        icon: "info",
        content: `Granola is a highly moisture-sensitive product. Its oats, nuts, and dried fruits quickly lose their crunch and absorb ambient humidity if exposed to vapor. Traditionally, brands rely on <strong>Mylar (PET/Aluminum Foil/LLDPE)</strong> structures, which offer near-perfect molecular isolation.
        <br/><br/>
        As sustainable values take center stage, brands are shifting toward <strong>compostable biopolymers</strong> (typically multi-layer Kraft/NatureFlex cellulose/biodegradable PBAT). But can compostable bioplastics truly match the formidable barrier of Mylar? Let's analyze the raw science.`
      },
      {
        title: "Shelf-Life Performance Comparison: OTR & WVTR",
        icon: "package",
        content: `Here is the direct barrier transmission rate comparison between high-barrier Mylar and certified high-barrier compostable biopolymers:
        <br/><br/>
        <table style="width:100%; text-align:left; margin: 1.5rem 0; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #059669; color: white;">
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">Material Specification</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">WVTR (g/m²/day)</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">OTR (cc/m²/day)</th>
              <th style="padding: 0.75rem; border: 1px solid #d1d5db;">Expected Freshness Shelf Life</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">High-Barrier Mylar (PET/Al/PE)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 0.1</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 0.1</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">18 - 24 Months</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 0.75rem; border: 1px solid #d1d5db; font-weight: bold;">High-Barrier Compostable (NatureFlex/Bio-Al)</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 1.0</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">&lt; 1.2</td>
              <td style="padding: 0.75rem; border: 1px solid #d1d5db;">9 - 12 Months</td>
            </tr>
          </tbody>
        </table>
        While Mylar remains the absolute king of preservation, <strong>compostable high-barrier packaging is more than sufficient for retail sales</strong>. Most packaged foods turn over on supermarket shelves in 3 to 6 months. A 9-12 month compostable shelf life guarantees high-quality freshness while delivering authentic eco credentials.`
      },
      {
        title: "The Circular Lifecycle Audit: Safe Disintegration",
        icon: "check",
        content: `Traditional Mylar can sit in landfills for over 400 years, breaking down into toxic microplastics.
        <br/><br/>
        In contrast, AchievePack's compostable structures are fully certified to <strong>ASTM D6400</strong> (USA) and <strong>EN 13432</strong> (EU) standards. In an industrial or home compost system, they disintegrate completely into non-toxic soil nutrients in 180 days, leaving zero microplastics behind. This closing of the loop build immense brand loyalty with modern eco-conscious shoppers.`
      },
      {
        title: "Financial and Sourcing Analysis: Sizing the Investment",
        icon: "help",
        content: `Compostable pouches cost approximately 25% to 35% more than standard petroleum-based Mylar due to the premium bioplastic raw resins. However, specialty brands can fully offset this cost by positioning their product in the premium organic category, where sustainable packaging justifies a higher price point.
        <br/><br/>
        Furthermore, AchievePack's low 100-unit MOQ means you can launch your sustainable granola brand without committing large capital upfront, maximizing your operational flexibility.`
      }
    ]
  },
  {
    slug: "powder-proof-zipper-pouch",
    title: "Powder-Proof Zippers: Preventing Protein Clumping",
    excerpt: "Operations managers at supplement, sports nutrition, and wellness powder brands looking to prevent zipper clumping.",
    category: "Design Tips",
    tags: ["powder proof zipper", "supplement packaging", "airtight pouch", "collagen bag", "low MOQ supplement"],
    featuredImage: "/imgs/blog/powder_proof_zipper.jpg",
    readTime: 8,
    metaDescription: "Prevent supplement bag zipper clumping. Discover the engineering of powder-proof micro-grooves and hook-to-loop closures for airtight wellness powders.",
    source_url: "https://achievepack.com/blog/powder-proof-zipper-pouch",
    sections: [
      {
        title: "The Powder Jam Mechanics: Why Traditional Zippers Fail",
        icon: "info",
        content: `Wellness powders—such as whey protein, bovine collagen, wheatgrass, and matcha powder—consist of extremely fine, electrostatic particles. When consumers scoop their daily servings, these fine particles naturally settle inside the narrow channels of traditional interlocking zippers.
        <br/><br/>
        Once these grooves clog, the zipper cannot snap shut, leaving a minute air gap. This gap allows ambient humidity to seep into the bag. Because supplement powders are highly <strong>hygroscopic</strong> (water-attracting), this moisture intake causes the powder to clump, harden, and spoil, resulting in negative customer reviews and product returns.`
      },
      {
        title: "The Solution: Tactile Micro-Groove & Hook-to-Loop Closures",
        icon: "package",
        content: `To solve this supplement industry issue, AchievePack developed specialized <strong>powder-proof reclosures</strong>:
        <br/><br/>
        <ul>
          <li><strong>Angled Dust-Deflecting Channels:</strong> These zippers feature microscopic, angled ribs. When closed, the interlocking pressure naturally forces trapped powder grains downwards, clearing the track automatically.</li>
          <li><strong>Hook-to-Loop (Velcro-Style) Closures:</strong> Unlike traditional female-to-male plastic zippers, hook-to-loop systems snap shut through mechanical interlocking fibers. These fibers hold a solid airtight seal even when covered in thick powder residue.</li>
        </ul>`
      },
      {
        title: "High-Moisture Barrier Supplement Alloys",
        icon: "check",
        content: `AchievePack pairs these advanced zippers with a high-barrier <strong>metallized laminate alloy (PET/VMPET/LLDPE)</strong>. This structure delivers a Water Vapor Transmission Rate (WVTR) of &lt; 0.1 g/m²/day, ensuring complete isolation against ambient air and eliminating any risk of protein powder clumping over a 24-month shelf life.`
      },
      {
        title: "Low MOQ Brand Optimization: Sourcing from 100 Pieces",
        icon: "help",
        content: `Supplement brands typically print numerous flavors (e.g., Chocolate, Vanilla, Strawberry, Unflavored). With traditional plate printing, setting up packaging for 5 flavors requires a massive investment of $10,000+ in plate fees.
        <br/><br/>
        AchievePack's advanced <strong>digital printing allows multi-SKU supplement pouches with zero plate fees</strong>, with MOQs starting at just 100 pieces per SKU. This allows brands to offer a wide variety of flavors without carrying excess inventory risk.`
      }
    ]
  },
  {
    slug: "custom-pouch-dieline-template",
    title: "Why Vector Dielines Save You $500 in Custom Artwork Fees",
    excerpt: "Graphic designers and brand managers preparing custom packaging artwork. Learn how to prepare vector dielines to avoid printing errors.",
    category: "Design Tips",
    tags: ["dieline template", "artwork guide", "vector dieline", "packaging dieline", "how to design packaging"],
    featuredImage: "/imgs/blog/custom_pouch_vector_dielines.png",
    readTime: 9,
    metaDescription: "Download and prepare custom pouch vector dieline templates. Learn standard margins, bleed zones, and color profile rules (CMYK vs. Pantone) to save on packaging design fees.",
    source_url: "https://achievepack.com/blog/custom-pouch-dieline-template",
    sections: [
      {
        title: "Anatomy of a Flexible Packaging Dieline",
        icon: "info",
        content: `A <strong>dieline</strong> is the 2D flat blueprint of your packaging pouch, used by graphic designers to place artwork accurately. It contains several critical lines:
        <br/><br/>
        <ul>
          <li><strong>Cut Line (Solid Red):</strong> Shows where the high-speed machinery will cut the physical pouch.</li>
          <li><strong>Fold Line (Dashed Blue):</strong> Shows where the film will bend to form bottom gussets and sides.</li>
          <li><strong>Seal Zone (Gray Mesh):</strong> The outer 5mm to 10mm borders where high-temperature weld bars melt the film together. No critical artwork or text should reside in this zone.</li>
          <li><strong>Bleed Margin (Green Outer Line):</strong> Extends 3mm past the cut line, ensuring no unprinted white borders show if the film shifts slightly during high-speed cutting.</li>
        </ul>`
      },
      {
        title: "Common Artwork Errors that Pause Production",
        icon: "package",
        content: `When brands submit artwork created by inexperienced packaging designers, it often contains errors that force prepress teams to reject the files, wasting weeks of production time:
        <br/><br/>
        1. **RGB Color Space:** Submitting files in RGB (the standard for screens) instead of converting to <strong>CMYK / Pantone</strong> (the standard for physical ink), resulting in muddy print finishes.<br/>
        2. **Unoutlined Fonts:** Submitting raw font files. If the printing machine doesn't have the font installed, it will substitute it with default system fonts, corrupting your branding. Always convert text to outlines in Adobe Illustrator.<br/>
        3. **Low-Resolution Rasters:** Using 72 DPI website images. AchievePack requires all raster elements to be a minimum of <strong>300 DPI</strong> at physical size to guarantee crisp, high-definition printing.`
      },
      {
        title: "Vector vs. Raster Quality: Why Vector Wins",
        icon: "check",
        content: `For flexible packaging, <strong>vector graphics (.AI or .PDF formats) are mandatory</strong> for logos, text, nutrition labels, and barcodes. Vector shapes are mathematically calculated curves and lines, meaning they retain absolute pixel-perfect sharpness at any scale.
        <br/><br/>
        Using raster (.PNG or .JPG) formats for small nutrition text leads to blurry, unreadable print, making your brand look unpolished and risking regulatory compliance rejection.`
      },
      {
        title: "Free Certified Vector Dieline Library",
        icon: "help",
        content: `To completely eliminate design risk, AchievePack provides a free library of <strong>certified vector dieline templates</strong> for our standard pouch sizes (XS, S, M, L, XL). 
        <br/><br/>
        You can download these dielines directly in Adobe Illustrator (.AI) and PDF formats. Once your design is placed, upload it via our website for a <strong>free, 24-hour prepress file audit</strong> by our expert packaging engineers.`
      }
    ]
  },
  {
    slug: "freezer-safe-vacuum-packaging",
    title: "Sub-Zero Flex-Crack Resistance: Freezer-Safe Laminates",
    excerpt: "Packaging buyers for frozen fruits, meats, seafood, dumplings, and cold chain foods seeking structures that do not crack or shatter under sub-zero shipping.",
    category: "Industry Solutions",
    tags: ["freezer safe", "vacuum packaging", "flex crack resistance", "cold chain", "heavy duty vacuum pouch"],
    featuredImage: "/imgs/blog/freezer_safe_vacuum_pouches.png",
    readTime: 9,
    metaDescription: "Prevent flex-cracking and freezer burn in cold chain packaging. Learn the engineering of high-durability sub-zero metallocene LLDPE and BOPA/Nylon triplex alloys.",
    source_url: "https://achievepack.com/blog/freezer-safe-vacuum-packaging",
    sections: [
      {
        title: "The Science of Cold-Chain Plastic Brittleness",
        icon: "info",
        content: `When standard plastics are exposed to temperatures below -20°C, their polymer chains lose mobility, causing the material to shift from a flexible, elastic state into a highly rigid, glassy state. This is known as the <strong>glass transition temperature (Tg)</strong>.
        <br/><br/>
        During shipping and warehouse handling, the physical impact of frozen products shifting inside the box causes the brittle bag to develop microscopic fractures, known as <strong>flex-cracks</strong>. These micro-cracks compromise vacuum seal integrity, allowing oxygen inside and leading to rapid dehydration and freezer burn.`
      },
      {
        title: "The Freezer-Safe Triplex Barrier Alloy",
        icon: "package",
        content: `To ensure absolute sub-zero seal integrity, AchievePack engineers a specialized <strong>freezer-safe packaging alloy</strong>:
        <br/><br/>
        <ul>
          <li><strong>Outer Layer: BOPA (Nylon - 15&mu;m):</strong> Possesses an extremely low glass transition temperature, retaining incredible elasticity, cushioning, and puncture resistance in deep-freeze environments.</li>
          <li><strong>Inner Layer: Elastomeric Metallocene LLDPE (70&mu;m):</strong> Infused with metallocene plastomers to retain soft, elastic sealing properties, ensuring seams absorb drop impacts without splitting in sub-zero freight.</li>
        </ul>`
      },
      {
        title: "Industrial Drop-Testing at -30°C",
        icon: "check",
        content: `AchievePack rigorously audits all cold-chain packaging through simulated logistics testing:
        <br/><br/>
        <ul>
          <li><strong>Deep-Freeze Drop Test:</strong> Pouches are filled with frozen product, stored in deep freeze at -30°C for 24 hours, and then dropped from a height of 1.5 meters onto a solid concrete slab. Seams and surfaces are audited to guarantee zero micro-fracturing or splits.</li>
          <li><strong>Puncture Audits:</strong> Bags are mechanically pressed against sharp frozen seafood edges (like lobster claws or bone-in meats) to ensure complete barrier longevity.</li>
        </ul>`
      },
      {
        title: "Sourcing and Ordering from 100 Pieces",
        icon: "help",
        content: `Frozen food startups can launch premium, heavy-duty packaging with minimal capital. AchievePack's digital printing enables <strong>freezer-safe vacuum packaging with MOQs from just 100 units</strong>, giving brands access to industrial-grade cold-chain packaging without high minimum volume barriers.`
      }
    ]
  },
  {
    slug: "compostable-packaging-regulations-usa",
    title: "US State Regulations on Recycled Content & Compostable Labeling Laws",
    excerpt: "Compliance managers and lawyers seeking to audit their packaging labels to prevent litigation, regulatory fines, and greenwashing claims across US states.",
    category: "Legal & Compliance",
    tags: ["compostable regulations", "SB 343 California", "labeling compliance", "FTC Green Guides", "eco-friendly packaging laws"],
    featuredImage: "/imgs/blog/compostable_compliance_usa.png",
    readTime: 11,
    metaDescription: "USA packaging compliance guide. Understand California SB 343 chasing arrows restrictions, Washington HB 1569 rules, and BPI certification labeling.",
    source_url: "https://achievepack.com/blog/compostable-packaging-regulations-usa",
    sections: [
      {
        title: "California SB 343 & The Chasing Arrows Restrictions",
        icon: "info",
        content: `In the United States, environmental labeling is increasingly regulated to prevent deceptive practices. The most critical state legislation is <strong>California's SB 343 (Truth in Recycling Law)</strong>. 
        <br/><br/>
        SB 343 bans printing the iconic "chasing arrows" recycling symbol on any packaging unless the brand can provide verifiable data proving that the material is actively sorted, processed, and recovered by recycling programs serving at least 60% of California's population. <strong>Improperly using the recycling logo can result in fines of up to $10,000 per day</strong>.`
      },
      {
        title: "The FTC Green Guides & 'Biodegradable' Bans",
        icon: "package",
        content: `The Federal Trade Commission (FTC) outlines national rules through the <strong>FTC Green Guides</strong>. 
        <br/><br/>
        Under these guidelines, terms like "biodegradable" are heavily restricted. A brand cannot label plastic packaging as biodegradable unless it breaks down completely within one year in standard disposal environments. 
        <br/><br/>
        Because petroleum plastics do not break down in this timeframe, <strong>compostability backed by third-party certification (like BPI or TÜV Austria) is the only legally defensible eco-label</strong> for organic waste streams.`
      },
      {
        title: "State-by-State Labeling Rules Matrix",
        icon: "check",
        content: `Several US states have introduced strict visual rules to help waste management workers identify compostable packaging and keep it separate from standard plastic waste:
        <br/><br/>
        <ul>
          <li><strong>California (SB 343 & AB 1201):</strong> Compostable items must be certified by a third-party (BPI) and have clear visual identifiers, such as green or brown lettering, stripes, or borders, to prevent contamination.</li>
          <li><strong>Washington (HB 1569):</strong> Requires compostable packaging to be clearly labeled. It explicitly bans the use of green or brown colors on standard, non-compostable plastic packaging to avoid confusion.</li>
          <li><strong>Minnesota & Colorado:</strong> Have enacted similar laws requiring BPI verification and clear labeling on all compostable bags and film products.</li>
        </ul>`
      },
      {
        title: "The B2B Brand Compliance Checklist",
        icon: "help",
        content: `To ensure your brand complies with all US regulations and is fully protected against greenwashing litigation, follow this compliance audit:
        <br/><br/>
        1. **Verify Certifications:** Ensure your sustainable packaging holds active <strong>BPI (Biodegradable Products Institute)</strong> or <strong>TÜV Austria OK Compost</strong> certifications.<br/>
        2. **Audit Logos:** Remove all unverified "chasing arrows" logos from bags that do not have active municipal curbside collection programs.<br/>
        3. **Color-Code Compostables:** Incorporate green or brown stripes, logos, or borders on your compostable products, as required by CA and WA laws.<br/>
        4. **Document Proof:** Retain technical material datasheets (TDS) and supplier compliance certificates for your regulatory audits.`
      }
    ]
  }
];

// Helper to convert structured sections into fully formed HTML content for B2B blogData.ts
function generateB2BContentHTML(sections) {
  let html = "";
  sections.forEach((sec, idx) => {
    html += `      <h2>${sec.title}</h2>\n`;
    html += `      <div>${sec.content}</div>\n\n`; // FIXED nesting issue: changed <p> to <div> container to support child block elements!
  });
  // Append CTA
  html += `      <h2>Ready to Upgrade Your Packaging?</h2>\n`;
  html += `      <p>Whether you're a startup packaging your very first batch or an enterprise brand aiming to optimize your supply chain, AchievePack delivers sustainable, high-barrier custom printed pouches with zero plate fees and low minimum order quantities starting from just 100 pieces.</p>\n`;
  html += `      <ul>\n`;
  html += `        <li><a href="/store">Browse our eco-friendly pouch store</a> - starting from 100 units</li>\n`;
  html += `        <li><a href="/materials/compostable">Explore certified compostable structures</a></li>\n`;
  html += `        <li><a href="/materials/recyclable-mono-pe">Check out curbside recyclable Mono-PE options</a></li>\n`;
  html += `      </ul>\n`;
  return html.replace(/\s+/g, ' ').trim();
}

async function run() {
  console.log("🚀 Starting dual-domain SEO & AIEO B2B copy populator with hot-overwrite support...");

  // SECTION 1: Append or OVERWRITE articles to src/data/blogData.ts
  const blogDataPath = path.join(__dirname, '../src/data/blogData.ts');
  if (fs.existsSync(blogDataPath)) {
    console.log("📝 Modifying src/data/blogData.ts...");
    let fileContent = fs.readFileSync(blogDataPath, 'utf8');

    // RECURSIVE BRACE-MATCHING ALGORITHM to completely strip old versions of these articles from the data file!
    articles.forEach(art => {
      const slugMarker = `slug: "${art.slug}"`;
      let markerIdx = fileContent.indexOf(slugMarker);
      while (markerIdx !== -1) {
        const startBraceIdx = fileContent.lastIndexOf('{', markerIdx);
        let braceCount = 1;
        let endBraceIdx = -1;
        for (let i = markerIdx; i < fileContent.length; i++) {
          if (fileContent[i] === '{') braceCount++;
          if (fileContent[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
              endBraceIdx = i;
              break;
            }
          }
        }
        if (startBraceIdx !== -1 && endBraceIdx !== -1) {
          let endPos = endBraceIdx + 1;
          if (fileContent[endPos] === ',') endPos++;
          fileContent = fileContent.substring(0, startBraceIdx) + fileContent.substring(endPos);
        }
        markerIdx = fileContent.indexOf(slugMarker);
      }
    });

    console.log(`Injecting ${articles.length} fresh, corrected B2B articles...`);
    
    // Parse out the blogPosts array
    const searchStr = 'export const blogPosts: BlogPost[] = [';
    const startIndex = fileContent.indexOf(searchStr);
    if (startIndex !== -1) {
      const insertPosition = startIndex + searchStr.length;
      
      let insertedCode = "";
      articles.forEach(art => {
        const htmlContent = generateB2BContentHTML(art.sections);
        insertedCode += `\n  {\n`;
        insertedCode += `    id: "${art.slug}",\n`;
        insertedCode += `    slug: "${art.slug}",\n`;
        insertedCode += `    title: "${art.title}",\n`;
        insertedCode += `    excerpt: "${art.excerpt}",\n`;
        insertedCode += `    content: \`${htmlContent}\`,\n`;
        insertedCode += `    author: "Ryan Wong",\n`;
        insertedCode += `    publishDate: "2026-05-23",\n`;
        insertedCode += `    category: "${art.category}",\n`;
        insertedCode += `    tags: ${JSON.stringify(art.tags)},\n`;
        insertedCode += `    featuredImage: "${art.featuredImage}",\n`;
        insertedCode += `    readTime: ${art.readTime},\n`;
        insertedCode += `    metaDescription: "${art.metaDescription}"\n`;
        insertedCode += `  },`;
      });

      fileContent = fileContent.substring(0, insertPosition) + insertedCode + fileContent.substring(insertPosition);
      fs.writeFileSync(blogDataPath, fileContent, 'utf8');
      console.log(`✅ Successfully updated all 10 B2B articles inside src/data/blogData.ts!`);
    } else {
      console.error("❌ Could not find blogPosts insertion marker in src/data/blogData.ts.");
    }
  } else {
    console.error("❌ src/data/blogData.ts not found!");
  }

  // SECTION 2: Insert/upsert articles to Supabase pouch_seo_blog
  console.log("⚡ Syncing B2C articles with Supabase table pouch_seo_blog...");
  let syncedDbCount = 0;
  for (const art of articles) {
    try {
      const transformedSections = art.sections.map(sec => ({
        title: sec.title,
        icon: sec.icon,
        content: `<div>${sec.content}</div>` // FIXED nesting issue for dynamic dynamic sections too!
      }));

      const payload = {
        slug: art.slug,
        title: art.title,
        excerpt: art.excerpt,
        content: {
          sections: transformedSections,
          faqs: [
            {
              question: `Is ${art.title} certified?`,
              answer: `Yes! All materials are rigorously tested and certified by leading bodies like BPI and TÜV Austria to conform with international compostability or recyclability compliance standards.`
            }
          ],
          cta: {
            title: "Ready to Upgrade Your Packaging?",
            description: "Request a custom consultation or sample pack directly from our team."
          }
        },
        category: art.category,
        image_url: art.featuredImage,
        published_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        meta_title: `${art.title} | Certified Sustainable | POUCH.ECO`,
        meta_description: art.metaDescription,
        source_url: art.source_url
      };

      const { error } = await supabase
        .from('pouch_seo_blog')
        .upsert(payload, { onConflict: 'slug' });

      if (error) throw error;
      syncedDbCount++;
      console.log(`🟢 Synced B2C article: /blog/${art.slug}`);
    } catch (err) {
      console.error(`🔴 Error syncing B2C article /blog/${art.slug}:`, err.message);
    }
  }
  console.log(`✅ Supabase Synchronization Completed! (${syncedDbCount}/${articles.length} synced)`);

  // SECTION 3: Update sitemaps
  const sitemaps = [
    { file: 'sitemap-achievepack.xml', domain: 'https://achievepack.com' },
    { file: 'sitemap-pouch.xml', domain: 'https://pouch.eco' }
  ];

  sitemaps.forEach(sm => {
    const sitemapPath = path.join(__dirname, `../public/${sm.file}`);
    if (fs.existsSync(sitemapPath)) {
      console.log(`🗺️ Modifying ${sm.file}...`);
      let content = fs.readFileSync(sitemapPath, 'utf8');
      let urlsAdded = 0;

      articles.forEach(art => {
        const fullUrl = `${sm.domain}/blog/${art.slug}`;
        if (!content.includes(`<loc>${fullUrl}</loc>`)) {
          const urlBlock = `  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>2026-05-23</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
          const closeIndex = content.lastIndexOf('</urlset>');
          if (closeIndex !== -1) {
            content = content.substring(0, closeIndex) + urlBlock + content.substring(closeIndex);
            urlsAdded++;
          }
        }
      });

      if (urlsAdded > 0) {
        fs.writeFileSync(sitemapPath, content, 'utf8');
        console.log(`✅ Appended ${urlsAdded} new URLs to ${sm.file}`);
      } else {
        console.log(`⏭️ All URLs already present in ${sm.file}.`);
      }
    } else {
      console.error(`❌ Sitemap ${sm.file} not found in public directory!`);
    }
  });

  console.log("🌟 All operations completed successfully!");
}

run();
