import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, ChevronDown, Leaf, Package, Factory, FileText, BookOpen, Users, Award, ShoppingBag, Globe, Boxes, HelpCircle, Search, Zap, Beaker, Layers, Sprout, Recycle, Gift } from 'lucide-react'

// All SEO pages mapped with illustrated images - COMPLETE LIST
// Ordered by importance: Company first, then Products, Materials, Industries...
const LEARN_PAGES = {
  company: {
    title: 'Company',
    icon: <Award className="h-4 w-4" />,
    pages: [
      { name: 'About Us', link: '/company/about', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'Our Impact (B Corp)', link: '/company/b-corp', image: '/imgs/company/b-corp/a_packaging_transformation_sustainable_8931589.webp' },
      { name: 'BPI Certified', link: '/company/bpi-certified', image: '/imgs/company/bpi/hero.png' },
      { name: 'Certificates', link: '/company/certificates', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Factory Tour', link: '/company/factory-tour', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
    ]
  },
  packaging: {
    title: 'Packaging Shapes',
    icon: <Boxes className="h-4 w-4" />,
    pages: [
      { name: 'Stand Up Pouches', link: '/packaging/stand-up-pouches', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp' },
      { name: 'Flat Bottom Bags', link: '/packaging/flat-bottom-bags', image: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp' },
      { name: 'Side Gusset Bags', link: '/packaging/side-gusset-bags', image: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp' },
      { name: 'Flat Pouches', link: '/packaging/flat-pouches', image: '/imgs/illustrated/a_achievepack_flat_pouches_0260646.webp' },
      { name: 'Spout Pouches', link: '/packaging/spout-pouches', image: '/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp' },
      { name: 'Vacuum Pouches', link: '/packaging/vacuum-pouches', image: '/imgs/illustrated/a_achievepack_vacuum_pouches_8597303.webp' },
      { name: 'Shrink Sleeves', link: '/packaging/shrink-sleeves', image: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-2.jpg' },
      { name: 'Custom Boxes', link: '/packaging/custom-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp' },
    ]
  },
  materials: {
    title: 'Materials',
    icon: <Leaf className="h-4 w-4" />,
    pages: [
      { name: 'Compostable Overview', link: '/materials/compostable', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Home Compostable', link: '/materials/home-compostable', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp' },
      { name: 'Industrial Compostable', link: '/materials/industrial-compostable', image: '/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp' },
      { name: 'Recyclable Mono PE', link: '/materials/recyclable-mono-pe', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'Recyclable Mono PP', link: '/materials/recyclable-mono-pp', image: '/imgs/illustrated/a_recyclable_mono_pp_card_v2_2805205.webp' },
      { name: 'Bio-PE', link: '/materials/bio-pe', image: '/imgs/illustrated/a_bio_pe_card_v3_4603248.webp' },
      { name: 'PCR Recycled', link: '/materials/pcr', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp' },
      { name: 'Kraft Low Barrier', link: '/materials/kraft-low-barrier', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp' },
      { name: 'Kraft Medium Barrier', link: '/materials/kraft-medium-barrier', image: '/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp' },
      { name: 'Kraft High Barrier', link: '/materials/kraft-high-barrier', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp' },
      { name: 'Plastic-Free Kraft', link: '/materials/plastic-free-kraft', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Combustion Safety Test', link: '/materials/combustion-safety-test', image: '/imgs/materials/combustion-safety-test.jpg' },
      { name: 'Conventional Printed Sachets', link: '/materials/conventional-printed-sachets', image: '/imgs/store/products/small-sachet-conventional-thumbnail-1.png' },
      { name: 'Reusable Canisters', link: '/knowledge/reusable-packaging', image: '/imgs/store/products/reusable-acrylic-airtight-canister-thumbnail-1.jpg' },
      { name: 'Bottle Printing Guide', link: '/knowledge/bottle-printing-guide', image: '/imgs/store/products/reusable-acrylic-airtight-canister-thumbnail-2.jpg' },
    ]
  },
  industries: {
    title: 'Industries',
    icon: <Factory className="h-4 w-4" />,
    pages: [
      { name: 'Coffee & Tea', link: '/industry/coffee-tea', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp' },
      { name: 'Snacks & Food', link: '/industry/snacks-food', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Pet Food', link: '/industry/pet-food', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp' },
      { name: 'Supplements', link: '/industry/supplements-powders', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'Baby Food', link: '/industry/baby-food', image: '/imgs/illustrated/a_baby_food_hero_v1_7008467.webp' },
      { name: 'Frozen Food', link: '/industry/frozen-food', image: '/imgs/illustrated/a_frozen_food_hero_v2_0166133.webp' },
      { name: 'Sauces & Condiments', link: '/industry/sauces-condiments', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Fresh Produce Packaging', link: '/industry/fresh-produce', image: '/imgs/knowledge/fresh-produce-pouch-arugula.png' },
      { name: 'Premium Matte Finish Pouches', link: '/industry/premium-matte-pouches', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp' },
      { name: 'Wholesale Unprinted & Stock ', link: '/industry/wholesale-unprinted-pouches', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'High-Barrier Food Grade Pouc', link: '/industry/high-barrier-food-pouches', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'How to Import Custom Packagi', link: '/industry/australia-shipping-coo', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'How to design premium Spot U', link: '/industry/premium-finishes', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp' },
      { name: 'Can High-Barrier Retort Pouc', link: '/industry/high-barrier-retort', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Why Switch to Spout Pouches', link: '/industry/custom-spout-pouches', image: '/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp' },
      { name: 'the Best Heavy-Duty Quad Sea', link: '/industry/pet-food-quad-seal', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp' },
      { name: 'Kraft Paper Stand Up Pouches', link: '/industry/kraft-window-pouch', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp' },
      { name: 'How to Design Custom Sachets', link: '/industry/matcha-supplement-sachets', image: '/imgs/store/products/small-sachet-conventional-thumbnail-1.png' },
      { name: 'How to Order Custom Packagin', link: '/industry/low-moq-fast-turnaround', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'Premium Soft Touch Pouches', link: '/industry/premium-soft-touch', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp' },
      { name: 'How to Create Custom Die-Cut', link: '/industry/custom-die-cut-pouches', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp' },
      { name: 'Resealable Tin Tie Paper Bag', link: '/industry/resealable-tin-tie-bags', image: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp' },
      { name: 'the Difference Between White', link: '/industry/sustainable-kraft-solutions', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp' },
      { name: 'Eco-Friendly Ziplock Pouches', link: '/industry/durable-reusable-pouches', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'How does 100% PLA Compostabl', link: '/industry/pla-compostable-packaging', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Sustainable Healthcare & Sup', link: '/industry/sustainable-healthcare-packaging', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'How to Select Eco-Friendly T', link: '/industry/eco-friendly-tea-coffee', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp' },
      { name: 'How does Compostable Laminat', link: '/industry/compostable-laminated-film', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp' },
      { name: 'Child Resistant (CR) Pouches', link: '/industry/child-resistant-cbd', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp' },
      { name: 'Compostable Flat Bottom Pouc', link: '/industry/compostable-protein-bags', image: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp' },
      { name: 'there Clear Transparent Comp', link: '/industry/clear-transparent-pouches', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Can You Recycle Vacuum Bags', link: '/industry/recyclable-vacuum-bags', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'there Fully Compostable Coff', link: '/industry/eco-coffee-bags-valve', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp' },
      { name: 'PCR (Post-Consumer Recycled)', link: '/industry/pcr-packaging-pouches', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp' },
      { name: 'Eco-Friendly Pouches', link: '/industry/euro-hole-hang-bags', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp' },
      { name: 'Sustainable Sachet Packaging', link: '/industry/sustainable-tea-sachets', image: '/imgs/store/products/small-sachet-conventional-thumbnail-1.png' },
      { name: 'How to Select Eco-Friendly P', link: '/industry/meat-jerky-packaging', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'the Difference Between Brown', link: '/industry/brown-white-kraft', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp' },
      { name: 'Compostable Sugarcane Pulp Box', link: '/industry/compostable-sugarcane-pulp-box', image: '/imgs/store/products/compostable-sugarcane-pulp-box-thumbnail-1.jpg' },
      { name: 'Citrus Oil Packaging', link: '/solutions/citrus-oil-packaging', image: '/imgs/materials/citrus_clear_spout_pouch.png' }
    ]
  },
  products: {
    title: 'Featured Products',
    icon: <ShoppingBag className="h-4 w-4" />,
    pages: [
      { name: 'Compostable Coffee Bags', link: '/products/compostable-coffee-bags', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp' },
      { name: 'Compostable Stand Up Pouches', link: '/products/compostable-stand-up-pouches', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Compostable Side Gusset', link: '/products/compostable-side-gusset-bags', image: '/imgs/store/products/compostable-side-gusset-collection.png' },
      { name: 'Recyclable Mono Pouches', link: '/products/recyclable-mono-material-pouches', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'Coffee Bags with Valve', link: '/products/coffee-bags-degassing-valve', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp' },
      { name: 'Low MOQ Packaging', link: '/products/low-moq-packaging', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'Custom Compostable Labels', link: '/products/custom-compostable-labels', image: '/taobao/compostable-label/compostable-label-cover.jpg' },
    ]
  },
  knowledge: {
    title: 'Knowledge Base',
    icon: <BookOpen className="h-4 w-4" />,
    pages: [
      { name: 'All Options', link: '/knowledge/all-options', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Surface Option', link: '/features/surface-finish', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp' },
      { name: 'Reclosure Option', link: '/features/reclosure-options', image: '/imgs/illustrated/a_reclosure_options_close_detail_b_4502553.webp' },
      { name: 'Flat Bottom vs Gusset Pouch', link: '/knowledge/flat-bottom-vs-gusset', image: '/imgs/pouch-shape/flat-bottom-vs-gusset/flat-bottom.png' },
      { name: 'Pouch Sizing', link: '/knowledge/pouch-sizing', image: '/imgs/illustrated/a_pouch_sizing_guide_card_v3_5278730.webp' },
      { name: 'Size Guide', link: '/knowledge/size-guide', image: '/imgs/illustrated/a_size_guide_card_v2_9433535.webp' },
      { name: 'Printing Types', link: '/knowledge/printing-types', image: '/imgs/illustrated/a_printing_types_card_v2_6243973.webp' },
      { name: 'K-Seal Stand Up Pouches', link: '/knowledge/k-seal-stand-up-pouches', image: '/imgs/pouch-shape/k-seal/hero.webp' },
      { name: 'White Ink Underprint', link: '/knowledge/white-ink-underprint', image: '/imgs/knowledge/white-ink/hero.webp' },
      { name: 'Fin Seal vs Lap Seal', link: '/knowledge/fin-seal-lap-seal', image: '/imgs/knowledge/fin-lap/hero.webp' },
      { name: 'Workflow', link: '/knowledge/workflow', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'Eco-Packaging Reality', link: '/knowledge/eco-packaging-reality', image: '/imgs/knowledge/eco-packaging-reality.png' },
      { name: 'Writable & Stampable Pouches', link: '/knowledge/writable-stampable-pouches', image: '/imgs/knowledge/writable-stampable-pouches.jpg' },
      { name: 'Color Matching Guide', link: '/knowledge/digital-printing-pantone-color-matching', image: '/imgs/knowledge/color-matching/pms-cmyk-deviation.png' },
      { name: 'Digital Product Passport Packaging', link: '/topics/digital-product-passport-packaging', image: '/imgs/knowledge/digital-product-passport-guide.jpg' },
      { name: 'Sensory Unboxing Experience', link: '/topics/sensory-unboxing-experience', image: '/imgs/knowledge/sensory-unboxing-pouch-guide.jpg' },
      { name: 'EPR Tax Minimization', link: '/topics/epr-tax-minimization-strategies', image: '/imgs/knowledge/epr-tax-minimization-guide.jpg' },
      { name: 'Ultrasonic vs. Heat Sealing', link: '/topics/ultrasonic-vs-heat-sealing', image: '/imgs/knowledge/ultrasonic-pouch-sealing-guide.jpg' },
      { name: 'Plant-Based Barrier Coatings', link: '/topics/plant-based-barrier-coatings', image: '/imgs/knowledge/compostable-barrier-coatings-guide.jpg' },
      { name: 'Ocean-Bound Plastic Packaging', link: '/topics/ocean-bound-plastic-packaging', image: '/imgs/knowledge/ocean-bound-plastic-guide.jpg' },
      { name: 'Active & Modified Atmosphere Packaging (MAP) Guide', link: '/topics/active-modified-atmosphere-packaging', image: '/imgs/knowledge/modified-atmosphere-packaging-guide.jpg' },
      { name: 'Tamper-Evident Sealing', link: '/topics/tamper-evident-sealing-standards', image: '/imgs/knowledge/tamper-evident-sealing-guide.jpg' },
      { name: 'Liquid Barrier Packaging', link: '/topics/liquid-barrier-packaging-spouts', image: '/imgs/knowledge/liquid-spout-pouches-guide.jpg' },
      { name: 'Carbon Footprint Tracking', link: '/topics/carbon-footprint-tracking-packaging', image: '/imgs/knowledge/carbon-footprint-packaging-guide.jpg' },
      { name: 'Digital Product Passport Packaging', link: '/topics/digital-product-passport-packaging', image: '/imgs/knowledge/digital-product-passport-guide.jpg' },
      { name: 'Sensory Unboxing Experience', link: '/topics/sensory-unboxing-experience', image: '/imgs/knowledge/sensory-unboxing-pouch-guide.jpg' },
      { name: 'EPR Tax Minimization', link: '/topics/epr-tax-minimization-strategies', image: '/imgs/knowledge/epr-tax-minimization-guide.jpg' },
      { name: 'Ultrasonic vs. Heat Sealing', link: '/topics/ultrasonic-vs-heat-sealing', image: '/imgs/knowledge/ultrasonic-pouch-sealing-guide.jpg' },
      { name: 'Plant-Based Barrier Coatings', link: '/topics/plant-based-barrier-coatings', image: '/imgs/knowledge/compostable-barrier-coatings-guide.jpg' },
      { name: 'Ocean-Bound Plastic Packaging', link: '/topics/ocean-bound-plastic-packaging', image: '/imgs/knowledge/ocean-bound-plastic-guide.jpg' },
      { name: 'Active & Modified Atmosphere Packaging (MAP) Guide', link: '/topics/active-modified-atmosphere-packaging', image: '/imgs/knowledge/modified-atmosphere-packaging-guide.jpg' },
      { name: 'Tamper-Evident Sealing', link: '/topics/tamper-evident-sealing-standards', image: '/imgs/knowledge/tamper-evident-sealing-guide.jpg' },
      { name: 'Liquid Barrier Packaging', link: '/topics/liquid-barrier-packaging-spouts', image: '/imgs/knowledge/liquid-spout-pouches-guide.jpg' },
      { name: 'Carbon Footprint Tracking', link: '/topics/carbon-footprint-tracking-packaging', image: '/imgs/knowledge/carbon-footprint-packaging-guide.jpg' },
      { name: 'PHA vs PLA', link: '/knowledge/pha-vs-pla', image: '/imgs/materials/citrus_clear_spout_pouch.png' },
      { name: 'Heat Sealing Guide', link: '/knowledge/pouch-heat-sealing-temperature-guide', image: '/imgs/knowledge/heat-sealing-machine.jpg' },
      { name: 'Hand-Clamp Sealer Guide', link: '/knowledge/hand-clamp-sealer', image: '/imgs/store/products/hand-clamp-sealer-portable-direct-heat-thumbnail-2.jpg' },
      { name: 'Pouch Date Coding Guide', link: '/knowledge/pouch-date-coding-guide', image: '/imgs/knowledge/pouch-coding-tij.jpg' },
      { name: 'Food Coding Compliance', link: '/knowledge/food-packaging-compliance-date-coding', image: '/imgs/knowledge/pouch-coding-tij.jpg' },
      { name: 'Packaging Line Automation', link: '/knowledge/packaging-line-automation-date-coding', image: '/imgs/knowledge/pouch-coding-tij.jpg' },
      { name: 'Eco Packaging Coding', link: '/knowledge/compostable-packaging-inkjet-coding', image: '/imgs/knowledge/pouch-coding-tij.jpg' },
    ]
  },
  support: {
    title: 'Support',
    icon: <HelpCircle className="h-4 w-4" />,
    pages: [
      { name: 'FAQs', link: '/support/faqs', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Lead Time', link: '/support/lead-time', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'Sample Quote', link: '/support/sample-quote', image: '/imgs/samples/achieve_pack_samples_hero.png' },
    ]
  },
  composting: {
    title: 'Composting',
    icon: <Leaf className="h-4 w-4" />,
    pages: [
      { name: 'Commercial Composting', link: '/composting/commercial-composting', image: '/imgs/composting/commercial/hero.webp' },
      { name: 'Composting Benefits', link: '/composting/composting-benefits', image: '/imgs/composting/benefits/a_achievepack_composting_locator_hero_9733153.webp' },
      { name: 'Composting Service Finder', link: '/composting/composting-services', image: '/imgs/composting/finder/a_achievepack_composting_locator_hero_9733153.webp' },
      { name: 'Biodegradable vs Compostable', link: '/composting/biodegradable-vs-compostable', image: '/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp' },
      { name: 'Home vs Industrial Compostable', link: '/composting/home-vs-industrial-compostable', image: '/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp' },
      { name: 'Plastic-Free vs Compostable', link: '/composting/plastic-free', image: '/imgs/composting/plastic-free/hero.webp' },
      { name: 'Natural Cellulose Fiber', link: '/composting/natural-cellulose-fiber', image: '/imgs/composting/cellulose/22be74fbcbe50dba49f2aaac988a540c.jpg' },
      { name: 'Organic Compliance', link: '/composting/organic-compliance-support', image: '/imgs/seo-photos/organic/organic_dried_mango_pouch.webp' },
      { name: 'Compostable Bag Humidity Control', link: '/topics/compostable-humidity-control', image: '/imgs/samples/brittle-vs-strong-compost.jpg' }
    ]
  },
  biope: {
    title: 'BioPE',
    icon: <Sprout className="h-4 w-4" />,
    pages: [
      { name: 'What is Bio-PE', link: '/biope/what-is-bio-pe', image: '/imgs/biope/what/a_hero_bio_pe_article_2212774.webp' },
      { name: 'Bio-PE vs Compostable', link: '/biope/bio-pe-vs-compostable', image: '/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp' },
      { name: 'Bio-PE & EPR Regulations', link: '/biope/bio-pe-epr-regulations', image: '/imgs/biope/epr/a_biope_epr_hero_image_8632332.webp' },
      { name: 'Inside I\'m green™ Bio-PE', link: '/biope/inside-im-green-bio-pe', image: '/imgs/biope/inside/hero.webp' },
    ]
  },
  pcr: {
    title: 'PCR',
    icon: <Recycle className="h-4 w-4" />,
    pages: [
      { name: 'What Is PCR Plastic?', link: '/pcr/pcr-plastic-guide', image: '/imgs/pcr/guide/hero.webp?v=2' },
      { name: '7-Point PCR Checklist', link: '/pcr/7-checklist', image: '/imgs/pcr/7/hero.webp?v=2' },
      { name: 'Realistic PCR Content', link: '/pcr/realistic-pcr-content', image: '/imgs/pcr/real/hero.webp?v=2' },
      { name: 'Recyclable vs PCR vs Bio-Based', link: '/pcr/recyclable-vs-pcr-biobased', image: '/imgs/recyclable/vs/hero.webp?v=2' },
      { name: 'PCR Materials', link: '/materials/pcr', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp' },
    ]
  },
  freeService: {
    title: 'Free Service',
    icon: <Gift className="h-4 w-4" />,
    pages: [
      { name: 'Free Packaging Design Consultation', link: '/free-service/packaging-design-consultation', image: '/imgs/free/design/hero.webp' },
      { name: 'Free Website Upgrade', link: '/free-service/website-upgrade', image: '/imgs/free/website/hero.webp' },
      { name: 'Free Packaging Mockup', link: '/free-service/packaging-mockup', image: '/imgs/free/mock/hero.webp' },
      { name: 'Free Customer Center', link: '/free-service/customer-center', image: '/imgs/free/design/a_process_flow_infographic_5376739.webp' },
    ]
  },
  options: {
    title: 'Options & Features',
    icon: <Package className="h-4 w-4" />,
    pages: [
      { name: 'Digital Printing', link: '/printing/digital-printing', image: '/imgs/illustrated/a_digital_printing_close_detail_b_7761926.webp' },
      { name: 'Plate Printing', link: '/printing/plate-printing', image: '/imgs/illustrated/a_plate_printing_close_detail_b_8707945.webp' },
      { name: 'Reclosure Options', link: '/features/reclosure-options', image: '/imgs/illustrated/a_reclosure_options_close_detail_b_4502553.webp' },
      { name: 'Surface Finishes', link: '/features/surface-finish', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp' },
      { name: 'Surface & Reclosure Options', link: '/options/surface-and-reclosure', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp' },
      { name: 'Barrier Options', link: '/features/barrier-options', image: '/imgs/illustrated/a_barrier_options_presentation_c_6124347.webp' },
      { name: 'Material Barrier Properties', link: '/features/material-barrier-properties', image: '/imgs/seo-photos/a_high_barrier_premium_protection_0120312.webp' },
      { name: 'Low Barrier', link: '/features/low-barrier', image: '/imgs/seo-photos/a_low_barrier_fresh_produce_5877816.webp' },
      { name: 'Medium Barrier', link: '/features/medium-barrier', image: '/imgs/seo-photos/a_medium_barrier_balanced_freshness_1094166.webp' },
      { name: 'High Barrier', link: '/features/high-barrier', image: '/imgs/seo-photos/a_high_barrier_premium_protection_0120312.webp' },
    ]
  },
  solutions: {
    title: 'Solutions',
    icon: <Users className="h-4 w-4" />,
    pages: [
      { name: 'Startup Founder', link: '/solutions/startup-founder', image: '/imgs/illustrated/a_startup_founder_variation_3_2900816.webp' },
      { name: 'Ecommerce Brand', link: '/solutions/ecommerce-brand', image: '/imgs/illustrated/a_ecommerce_brand_variation_2_5348466.webp' },
      { name: 'Corporate Sustainability', link: '/solutions/corporate-sustainability', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'Food Manufacturer', link: '/solutions/food-manufacturer', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Product Developer', link: '/solutions/product-developer', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'Coffee Roaster', link: '/solutions/coffee-roaster', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp' },
      { name: 'Artisan Producer', link: '/solutions/artisan-producer', image: '/imgs/illustrated/a_artisan_producer_variation_1_5454378.webp' },
      { name: 'Snack Brand Manager', link: '/solutions/snack-brand-manager', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
      { name: 'Citrus Oil Solutions', link: '/solutions/citrus-oil-packaging', image: '/imgs/materials/citrus_clear_spout_pouch.png' },
    ]
  },
  topics: {
    title: 'Topics',
    icon: <FileText className="h-4 w-4" />,
    pages: [
      { name: 'Eco Food Packaging', link: '/topics/eco-friendly-food-packaging', image: '/imgs/illustrated/a_topic_01_eco_food_pkg_var_a_0799522.webp' },
      { name: 'DTC Packaging', link: '/topics/dtc-sustainable-packaging', image: '/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp' },
      { name: 'Coffee Materials', link: '/topics/green-coffee-materials', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp' },
      { name: 'Digital Printing Guide', link: '/topics/digital-printing-eco-packaging', image: '/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp' },
      { name: 'Recyclable Snack Packaging', link: '/topics/recyclable-snack-packaging', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
      { name: 'Custom Printed Pouches', link: '/topics/custom-printed-sustainable-pouches', image: '/imgs/illustrated/a_digital_printing_close_detail_b_7761926.webp' },
      { name: 'Packaging Regulations', link: '/topics/eco-packaging-regulations', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'EU PPWR Compliance', link: '/topics/eu-ppwr-compliance', image: '/imgs/topics/eu-ppwr-compliance.png' },
      { name: 'Compostable Suppliers', link: '/topics/compostable-pouch-suppliers', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Low MOQ Startup', link: '/topics/low-moq-startup-packaging', image: '/imgs/illustrated/a_startup_founder_variation_3_2900816.webp' },
      { name: 'Baby Food Bags', link: '/topics/compostable-baby-food-bags', image: '/imgs/illustrated/a_baby_food_hero_v1_7008467.webp' },
      { name: 'Real-World Sustainability', link: '/topics/real-world-sustainability', image: '/imgs/illustrated/a_corporate_sustainability_variation_2_1276624.webp' },
      { name: 'Sustainable Packaging', link: '/topics/sustainable-packaging', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp' },
      { name: 'Recyclable Design', link: '/topics/recyclable-packaging', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v2_5619420.webp' },
      { name: 'Compostable Truths', link: '/topics/compostable-packaging', image: '/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp' },
      { name: 'Certifications (EN13432)', link: '/topics/compostable-certification', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Mono-Material Solutions', link: '/topics/mono-material-packaging', image: '/imgs/illustrated/a_monomaterial_warm_4127359.webp' },
      { name: 'PCR Content Guide', link: '/topics/pcr-packaging', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp' },
      { name: 'Choosing Suppliers', link: '/topics/food-packaging-supplier', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'Eco-Supplier Audit', link: '/topics/eco-friendly-packaging-supplier', image: '/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp' },
      { name: 'Custom Brand Solutions', link: '/topics/custom-packaging', image: '/imgs/illustrated/a_ecommerce_brand_variation_2_5348466.webp' },
      { name: 'Reducing Waste', link: '/topics/reduce-packaging-waste', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'Compostable Zipper Durability', link: '/topics/compostable-zipper-durability', image: '/imgs/illustrated/compostable-zipper-detail-v2.png' },
      { name: 'Custom vs. Standard Packaging', link: '/topics/custom-vs-standard-packaging', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Snack Food Stand-Up Pouch', link: '/topics/snack-food-stand-up-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Jelly & Beverage Stand-Up Pouch', link: '/topics/jelly-beverage-stand-up-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Oatmeal & Cereal Stand-Up Pouch', link: '/topics/oatmeal-cereal-stand-up-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Cosmetic Cream Stand-Up Pouch', link: '/topics/cosmetic-cream-stand-up-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Cosmetic Serum Stand-Up Pouch', link: '/topics/cosmetic-serum-stand-up-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Large Snack Stand-Up Pouch', link: '/topics/snack-stand-up-pouch-large', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Soft Beverage Stand-Up Pouch', link: '/topics/beverage-soft-stand-up-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Kraft Paper Shopping Bag', link: '/topics/kraft-paper-shopping-bag', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Tea Stand-Up Zipper Pouch', link: '/topics/tea-stand-up-zipper-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Pet Treat Stand-Up Zipper Pouch', link: '/topics/pet-treat-stand-up-zipper-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Condiment Sachet Three-Side Seal', link: '/topics/condiment-sachet-three-side-seal', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Medical Tape Three-Side Seal', link: '/topics/medical-tape-three-side-seal', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Household Jam Three-Side Seal', link: '/topics/household-jam-three-side-seal', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Cereal Sachet Three-Side Seal', link: '/topics/cereal-sachet-three-side-seal', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Cosmetic Sample Three-Side Seal', link: '/topics/cosmetic-sample-three-side-seal', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Hanging Dried Fruit Zipper Pouch', link: '/topics/dried-fruit-hanging-zipper-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Cosmetic Cleanser Zipper Pouch', link: '/topics/cosmetic-cleanser-three-side-zipper-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Snack Sachet Three-Side Seal', link: '/topics/snack-sachet-three-side-seal', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Tea Sachet Three-Side Seal', link: '/topics/tea-sachet-three-side-seal', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Coffee Sachet Three-Side Seal', link: '/topics/coffee-sachet-three-side-seal', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Flat Bottom Dried Fruit Pouch', link: '/topics/dried-fruit-flat-bottom-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Rice Flat Bottom Bag', link: '/topics/rice-flat-bottom-bag', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Bread Flat Bottom Bag', link: '/topics/bread-flat-bottom-bag', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Coffee Beans Flat Bottom Pouch', link: '/topics/coffee-beans-flat-bottom-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Nuts Flat Bottom Pouch', link: '/topics/nuts-flat-bottom-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Pet Food Flat Bottom Bag', link: '/topics/pet-food-flat-bottom-bag', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Pillow Pack Snack Bag', link: '/topics/pillow-pack-snack-bag', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Household Back Seal Bag', link: '/topics/household-back-seal-bag', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Beef Jerky Pillow Pouch', link: '/topics/beef-jerky-pillow-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Grains Back Seal Pouch', link: '/topics/grains-back-seal-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'AI Packaging Barcodes Bottom Fold', link: '/topics/ai-packaging-barcodes-bottom-fold', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'AI Packaging Bleed Dimensions', link: '/topics/ai-packaging-bleed-dimensions', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'AI Packaging Safe Margins', link: '/topics/ai-packaging-safe-margins', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'AI Packaging Layered Assets', link: '/topics/ai-packaging-layered-assets', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'AI Packaging Resolution', link: '/topics/ai-packaging-resolution', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Apparel Zipper', link: '/topics/apparel-zipper', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Beef Jerky Barrier', link: '/topics/beef-jerky-barrier', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Beverage Soft Stand Up Pouch', link: '/topics/beverage-soft-stand-up-pouch', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Cheese Pocket Zipper', link: '/topics/cheese-pocket-zipper', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Cocktail Spout', link: '/topics/cocktail-spout', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Collagen High Barrier', link: '/topics/collagen-high-barrier', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Cacao Stand Up', link: '/topics/cacao-stand-up', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' }
    ]
  },
  caseStudies: {
    title: 'Case Studies',
    icon: <Award className="h-4 w-4" />,
    pages: [
      { name: 'Coffee Roastery', link: '/case-studies/coffee-roastery', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp' },
      { name: 'Tea Brand', link: '/case-studies/tea-brand', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp' },
      { name: 'Superfood Brand', link: '/case-studies/superfood-brand', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'Pet Treats', link: '/case-studies/pet-treats', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp' },
      { name: 'Chocolate Brand', link: '/case-studies/chocolate-brand', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Candle Brand', link: '/case-studies/candle-brand', image: '/imgs/illustrated/a_artisan_producer_variation_1_5454378.webp' },
      { name: 'Bakery', link: '/case-studies/bakery', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
      { name: 'Wellness Brand', link: '/case-studies/wellness-brand', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'Organic Nuts', link: '/case-studies/organic-nuts', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Bath Products', link: '/case-studies/bath-products', image: '/imgs/illustrated/a_artisan_producer_variation_1_5454378.webp' },
      { name: 'Adaptogens', link: '/case-studies/adaptogens', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'Outdoor Snacks', link: '/case-studies/outdoor-snacks', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
    ]
  },
  function: {
    title: 'Function',
    icon: <Zap className="h-4 w-4" />,
    pages: [
      { name: 'Microwave Steam Bags', link: '/function/microwave-steam-bags', image: '/imgs/function/microwave/a_microwavebag_hero_main_kitchen_2543693.webp' },
      { name: 'Smart Degassing Sticker', link: '/function/smart-degassing-sticker', image: '/imgs/function/smart_sticker_valve_detail.png' },
      { name: 'Carbon Neutral Bags', link: '/function/carbon-neutral-bags', image: '/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp' },
      { name: 'Spout Pouches Juice', link: '/function/spout-pouches-juice', image: '/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp' },
      { name: 'Child-Resistant Bags', link: '/function/child-resistant-bags', image: '/imgs/function/child/child-resistant-hero-learn-center.webp' },
      { name: 'Digital Printed Retort Bags', link: '/function/digital-printed-retort-bags', image: '/imgs/function/retort/retort-hero.webp' },
      { name: 'Pre-Zippered Rollstock', link: '/function/pre-zippered-rollstock', image: '/imgs/function/roll/hero.webp' },
      { name: 'Rice Paper Bags', link: '/function/rice-paper-bags', image: '/imgs/function/rice/hero.webp' },
      { name: 'PVA Water-Soluble Bags', link: '/function/pva-water-soluble-bags', image: '/imgs/function/water/hero.webp' },
      { name: 'Kraft Heavy-Duty Sacks', link: '/function/large-format-kraft-heavy-bags', image: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png' },
      { name: 'Heat-Resistant Pouches', link: '/function/heat-resistant-compostable-pouches', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
    ]
  },
  lab: {
    title: 'Lab Bag',
    icon: <Beaker className="h-4 w-4" />,
    pages: [
      { name: 'Lateral Filter Bags', link: '/lab/lateral-filter-bags', image: '/imgs/lab/filter/hero.webp' },
      { name: 'Wire Closure Bags', link: '/lab/wire-closure-bags', image: '/imgs/lab/wire/hero.webp' },
      { name: 'Lab Blender Bags', link: '/lab/lab-blender-bags', image: '/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp' },
    ]
  },
  usa: {
    title: 'USA Market',
    icon: <Globe className="h-4 w-4" />,
    pages: [
      { name: 'Compostable Packaging USA', link: '/usa/compostable-packaging', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Coffee Packaging USA', link: '/usa/coffee-packaging', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp' },
      { name: 'Snacks Packaging USA', link: '/usa/snacks-packaging', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Labeling Guide USA', link: '/usa/labeling-guide', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
    ]
  },
  spec: {
    title: 'Structure Spec',
    icon: <Layers className="h-4 w-4" />,
    pages: [
      { name: 'PCR PET Duplex Clear', link: '/spec/pcr-pet-duplex-clear', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'Bio-PE PET Duplex Clear', link: '/spec/biope-pet-duplex-clear', image: '/imgs/illustrated/a_bio_pe_card_v3_4603248.webp' },
      { name: 'Bio-Cello Duplex Clear', link: '/spec/bio-cello-duplex-clear', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Mono PE Duplex Clear', link: '/spec/mono-pe-duplex-clear', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
    ]
  },
  recyclable: {
    title: 'Recyclable',
    icon: <Recycle className="h-4 w-4" />,
    pages: [
      { name: 'What Is 100% Recyclable?', link: '/recyclable/what-is-recyclable', image: '/imgs/recyclable/what/hero.webp?v=2' },
      { name: '3-Step Roadmap for SMEs', link: '/recyclable/roadmap-sme', image: '/imgs/recyclable/roadmap/hero.webp?v=2' },
      { name: 'Mono-Material Foundation', link: '/recyclable/mono-material-foundation', image: '/imgs/recyclable/foundation/hero.webp?v=2' },
      { name: 'Recyclable Mono-PE', link: '/materials/recyclable-mono-pe', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'Recyclable Mono-PP', link: '/materials/recyclable-mono-pp', image: '/imgs/illustrated/a_recyclable_mono_pp_card_v2_2805205.webp' },
      { name: 'Stamp Foil Recyclability', link: '/blog/stamp-foil-recyclability', image: '/imgs/seo-photos/a_compostable_vs_recyclable_packaging_4528107.jpg' },
    ]
  },
}

// Get first page of each category for featured rotation
const FEATURED_PAGES = Object.values(LEARN_PAGES).map(cat => cat.pages[0])

// Flatten all pages for navigation
const ALL_PAGES = Object.values(LEARN_PAGES).flatMap(cat => cat.pages)

interface LearnNavigationProps {
  currentPath?: string
}export default function LearnNavigation({ currentPath }: LearnNavigationProps) {
  const location = useLocation()
  const path = currentPath || location.pathname
  
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [activeCategory, setActiveCategory] = useState<string | null>('materials')
  const [currentSlide, setCurrentSlide] = useState(() => Math.floor(Math.random() * FEATURED_PAGES.length))
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Auto-rotate featured images - only first page of each category
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_PAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])
  
  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])
  
  const toggleCategory = (catKey: string) => {
    setActiveCategory(activeCategory === catKey ? null : catKey)
  }
  
  // Get current featured page
  const currentPage = FEATURED_PAGES[currentSlide]

  // Find active category title and page name for breadcrumbs
  let categoryTitle = 'Knowledge Base'
  let activePageName = ''
  
  for (const [_, category] of Object.entries(LEARN_PAGES)) {
    const foundPage = category.pages.find(p => p.link === path)
    if (foundPage) {
      categoryTitle = category.title
      activePageName = foundPage.name
      break
    }
  }

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white border-b border-neutral-200">
      {/* Breadcrumbs & Toggle Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-xs md:text-sm font-medium text-neutral-500">
        <div className="flex items-center gap-1.5 md:gap-2 flex-wrap min-w-0 pr-4">
          <Link to="/" className="hover:text-primary-600 transition-colors shrink-0">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-neutral-300 shrink-0" />
          <span className="text-neutral-400 truncate max-w-[120px] md:max-w-none">{categoryTitle}</span>
          {activePageName && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-neutral-300 shrink-0" />
              <span className="text-neutral-800 font-semibold truncate max-w-[160px] md:max-w-none">{activePageName}</span>
            </>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-bold transition-all shadow-sm shrink-0"
        >
          <span>Learn Center</span>
          <ChevronDown className={`h-4 w-4 text-neutral-500 transition-transform duration-300 ${isCollapsed ? '' : 'rotate-180'}`} />
        </button>
      </div>

      {/* Collapsible Panel */}
      {!isCollapsed && (
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 border-t border-neutral-200/60">
          
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile: Featured Categories Header */}
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
              Featured Categories
            </h3>
            
            {/* Mobile: Hero Image - Compact aspect ratio */}
            <Link 
              to={currentPage.link}
              className="block relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group mb-3"
            >
              <img
                src={currentPage.image}
                alt={currentPage.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 className="text-base font-bold text-white mb-0.5">{currentPage.name}</h4>
                <span className="inline-flex items-center gap-1 text-xs text-white/80">
                  Read more <ChevronRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
            
            {/* Mobile: Thumbnail Carousel - Larger touch targets */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {FEATURED_PAGES.map((page, i) => (
                <button
                  key={`mobile-thumb-${page.link}-${i}`}
                  onClick={() => handleThumbnailClick(i)}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentSlide
                      ? 'border-primary-500 ring-2 ring-primary-200'
                      : 'border-neutral-200'
                  }`}
                >
                  <img
                    src={page.image}
                    alt={page.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            
            {/* Mobile: Search Box */}
            <div className="mt-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search packaging solutions..."
                  className="w-full pl-9 pr-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const query = (e.target as HTMLInputElement).value
                      if (query.trim()) {
                        window.location.href = `/learn?q=${encodeURIComponent(query)}`
                      }
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Mobile: Popular Search Tags */}
            <div className="mt-2 flex gap-1.5 overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
              {[
                { term: 'Compostable', link: '/materials/compostable' },
                { term: 'Coffee Bags', link: '/products/compostable-coffee-bags' },
                { term: 'Stand Up', link: '/packaging/stand-up-pouches' },
                { term: 'Low MOQ', link: '/products/low-moq-packaging' },
                { term: 'Pet Food', link: '/industry/pet-food' },
              ].map((item) => (
                <Link
                  key={item.term}
                  to={item.link}
                  className="flex-shrink-0 px-2.5 py-1.5 text-xs bg-white border border-neutral-200 text-neutral-600 rounded-full whitespace-nowrap hover:bg-primary-50 hover:border-primary-300"
                >
                  {item.term}
                </Link>
              ))}
            </div>
            
            {/* Mobile: Learn Center Categories */}
            <div className="mt-4 pt-3 border-t border-neutral-200">
              <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Learn Center
              </h3>
              
              {/* Category Chips */}
              <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {Object.entries(LEARN_PAGES).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => toggleCategory(key)}
                    className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                      activeCategory === key
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-neutral-600 border border-neutral-200'
                    }`}
                  >
                    {category.icon}
                    {category.title}
                  </button>
                ))}
              </div>
              
              {/* Selected category pages */}
              {activeCategory && (
                <div className="mt-2">
                  <div className="grid grid-cols-2 gap-1.5">
                    {LEARN_PAGES[activeCategory as keyof typeof LEARN_PAGES]?.pages.map((page) => (
                      <Link
                        key={page.link}
                        to={page.link}
                        className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-colors truncate ${
                          path === page.link
                            ? 'bg-primary-500 text-white'
                            : 'bg-white text-neutral-700 border border-neutral-200'
                        }`}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6">
            {/* Desktop: Category Navigation */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Learn Center
              </h3>
              <div className="space-y-1">
                {Object.entries(LEARN_PAGES).map(([key, category]) => (
                  <div key={key}>
                    <button
                      onClick={() => toggleCategory(key)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === key
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {category.icon}
                        {category.title}
                        <span className="text-xs text-neutral-400">({category.pages.length})</span>
                      </span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeCategory === key ? 'rotate-180' : ''}`} />
                    </button>
                    {activeCategory === key && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {category.pages.map((page) => (
                          <Link
                            key={page.link}
                            to={page.link}
                            className={`block px-3 py-1.5 text-sm rounded transition-colors ${
                              path === page.link
                                ? 'bg-primary-500 text-white'
                                : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                            }`}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop: Featured Image Carousel */}
            <div className="lg:col-span-8">
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                Featured Categories
              </h3>
              
              {/* Main Featured Image */}
              <Link 
                to={currentPage.link}
                className="block relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg group mb-4"
              >
                <img
                  src={currentPage.image}
                  alt={currentPage.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{currentPage.name}</h4>
                  <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-primary-300 transition-colors">
                    Read more <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
              
              {/* Thumbnail Carousel */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {FEATURED_PAGES.map((page, i) => (
                  <button
                    key={`desktop-thumb-${page.link}-${i}`}
                    onClick={() => handleThumbnailClick(i)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentSlide
                        ? 'border-primary-500 ring-2 ring-primary-200'
                        : 'border-transparent hover:border-primary-300'
                    }`}
                  >
                    <img
                      src={page.image}
                      alt={page.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
              
              {/* Search Box */}
              <div className="mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search packaging solutions..."
                    className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const query = (e.target as HTMLInputElement).value
                        if (query.trim()) {
                          window.location.href = `/learn?q=${encodeURIComponent(query)}`
                        }
                      }
                    }}
                  />
                </div>
                
                {/* Popular Search Terms */}
                <div className="mt-3">
                  <span className="text-xs text-neutral-500 mr-2">Popular:</span>
                  <div className="inline-flex flex-wrap gap-2 mt-1">
                    {[
                      { term: 'Compostable', link: '/materials/compostable' },
                      { term: 'Coffee Bags', link: '/products/compostable-coffee-bags' },
                      { term: 'Stand Up Pouch', link: '/packaging/stand-up-pouches' },
                      { term: 'Recyclable', link: '/materials/recyclable-mono-pe' },
                      { term: 'Low MOQ', link: '/products/low-moq-packaging' },
                      { term: 'Digital Print', link: '/printing/digital-printing' },
                      { term: 'Pet Food', link: '/industry/pet-food' },
                      { term: 'Flat Bottom', link: '/packaging/flat-bottom-bags' },
                    ].map((item) => (
                      <Link
                        key={item.term}
                        to={item.link}
                        className="px-2.5 py-1 text-xs bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-700 rounded-full transition-colors"
                      >
                        {item.term}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Export the pages data for use in other components
export { LEARN_PAGES, ALL_PAGES, FEATURED_PAGES }
