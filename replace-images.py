#!/usr/bin/env python3
"""
Script to replace all hardcoded image URLs in App.tsx with dynamic img() calls
"""

import re

# Read the file
with open('src/App.tsx', 'r') as f:
    content = f.read()

# Define all the replacements
replacements = {
    # Environmental infographics
    'https://pouch.eco/wp-content/uploads/2025/12/a_carbon_footprint_reduction_infographic_6668500.webp': 'infographic-carbon-footprint',
    'https://pouch.eco/wp-content/uploads/2025/12/a_compostable_materials_infographic_5689913.webp': 'infographic-compostable',
    'https://pouch.eco/wp-content/uploads/2025/12/a_plant_based_materials_infographic_2991523.webp': 'infographic-plant-based',
    'https://pouch.eco/wp-content/uploads/2025/12/a_grs_recyclable_infographic_8929966.webp': 'infographic-grs-recyclable',
    
    # Business infographics
    'https://pouch.eco/wp-content/uploads/2025/12/a_low_moq_infographic_9327303.webp': 'infographic-low-moq',
    'https://pouch.eco/wp-content/uploads/2025/12/a_fast_turnaround_infographic_1726271.webp': 'infographic-fast-turnaround',
    'https://pouch.eco/wp-content/uploads/2025/12/Split-infographic-showing-shipping-and-storage-benefits-top-section-displays-15-22-shipping-cost-reduction-with-box-comparison-bottom-shows-70-space-savings-with-warehouse-shelf-visualization.webp': 'infographic-shipping-storage',
    'https://pouch.eco/wp-content/uploads/2025/12/a_premium_finishes_infographic_5805298.webp': 'infographic-premium-finishes',
    
    # Products
    'https://pouch.eco/wp-content/uploads/2025/12/Educational-timeline-infographic-showing-five-month-composting-process-from-intact-pouch-to-rich-soil-with-EN13432ASTM-D6400-certification-and-earthy-color-progression.webp': 'product-composting-timeline',
    'https://pouch.eco/wp-content/uploads/2025/12/Close-up-editorial-shot-of-GRS-certified-mono-material-recyclable-pouches-in-neutral-tones-hands-presenting-premium-matte-and-soft-touch-finishes-on-marble-surface-with-natural-window-lighting.webp': 'product-recyclable-pouches',
    'https://pouch.eco/wp-content/uploads/2025/12/Overhead-flat-lay-of-PCR-and-bio-based-material-pouches-artfully-arranged-with-seeds-and-plant-elements-FDA-food-contact-approved-showing-circular-economy-innovation-with-Achieve-Pack-branding.webp': 'product-pcr-biobased',
    
    # Solutions
    'https://pouch.eco/wp-content/uploads/2025/12/a_food_beverage_lifestyle_showcase_6362188.webp': 'solution-food-beverage',
    'https://pouch.eco/wp-content/uploads/2025/12/Dramatic-showcase-of-six-premium-finishing-options-matte-gloss-soft-touch-metallic-embossed-and-spot-UV-with-hand-touching-pouch-to-emphasize-tactile-luxury-under-directional-lighting.webp': 'solution-cosmetics',
    'https://pouch.eco/wp-content/uploads/2025/12/Fresh-wellness-photography-showing-athletic-hands-scooping-superfood-powder-from-clean-stand-up-wellness-pouch-into-glass-shaker-bottle-with-fresh-fruit-and-fitness-props-in-bright-modern-kitchen-setting.webp': 'solution-wellness',
    'https://pouch.eco/wp-content/uploads/2025/12/a_pet_products_with_cute_pet_9679118.webp': 'solution-pet-products',
    
    # Features
    'https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_barrier_options_infographic_4264860-scaled.webp': 'feature-barrier-options',
    'https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_pouches_single_row_2617439-scaled.webp': 'feature-pouch-shapes',
    'https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_bags_stamp_foil_3332905-scaled.webp': 'feature-printing-finishes',
    'https://pouch.eco/wp-content/uploads/2025/12/Educational-infographic-displaying-five-closure-systems-zipper-spout-cap-tin-tie-press-to-close-and-valve-with-clear-labels-and-technical-illustrations-showing-convenience-and-freshness-benefits.webp': 'feature-reclosure-solutions',
    
    # Other
    'https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp': 'about-hero',
    'https://pouch.eco/wp-content/uploads/2025/12/Bold-three-column-comparison-infographic-titled-The-Data-Doesnt-Lie-showing-70-less-plastic-70-lower-CO2-and-70-space-savings-with-clear-icons-bar-charts-and-green-accent-colors.webp': 'comparison-flexible-vs-rigid',
    'https://pouch.eco/wp-content/uploads/2025/12/a_flexible_vs_rigid_packaging_comparison_infographic_9327303.webp': 'comparison-flexible-vs-rigid',
    'https://pouch.eco/wp-content/uploads/2025/12/a_5_step_process_infographic_9327303.webp': 'process-5-steps',
    'https://pouch.eco/wp-content/uploads/2025/12/a_customer_logos_grid_grey_multiple_rows_6481588-scaled.webp': 'testimonials-client-logos',
    'https://pouch.eco/wp-content/uploads/2025/12/Compelling-call-to-action-marketing-banner-featuring-prominent-Achieve-Pack-logo-headline-22Start-Your-Sustainable-Packaging-Journey22-showcase-of-diverse-sustainable-pouches.webp': 'contact-cta-banner',
}

# Replace in src="" attributes
for url, img_name in replacements.items():
    # Replace src="URL"
    content = content.replace(f'src="{url}"', f'src={{img("{img_name}")}}')
    # Replace setModalImage('URL')
    content = content.replace(f"setModalImage('{url}')", f'setModalImage(img("{img_name}"))')

# Write back
with open('src/App.tsx', 'w') as f:
    f.write(content)

print("✅ All image URLs replaced with dynamic img() calls!")
print(f"Total replacements: {len(replacements)} image mappings")
