#!/bin/bash

# Create imgs directory
mkdir -p public/imgs

# Download all images used in the website
echo "Downloading images..."

# About Section
curl -o public/imgs/about-hero.webp "https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp"

# Certifications
curl -o public/imgs/cert-home-compost.png "https://pouch.eco/wp-content/uploads/2025/04/home-compost.png"
curl -o public/imgs/cert-pcr-grs.png "https://pouch.eco/wp-content/uploads/2025/04/pcr-grs-cert-1.png"
curl -o public/imgs/cert-brc.png "https://pouch.eco/wp-content/uploads/2025/04/brc-cert.png"
curl -o public/imgs/cert-biope.png "https://pouch.eco/wp-content/uploads/2025/04/BioPE.png"

# Environmental Benefits Infographics
curl -o public/imgs/infographic-carbon-footprint.webp "https://pouch.eco/wp-content/uploads/2025/12/a_carbon_footprint_reduction_infographic_6668500.webp"
curl -o public/imgs/infographic-compostable.webp "https://pouch.eco/wp-content/uploads/2025/12/a_compostable_materials_infographic_5689913.webp"
curl -o public/imgs/infographic-plant-based.webp "https://pouch.eco/wp-content/uploads/2025/12/a_plant_based_materials_infographic_2991523.webp"
curl -o public/imgs/infographic-grs-recyclable.webp "https://pouch.eco/wp-content/uploads/2025/12/a_grs_recyclable_infographic_8929966.webp"

# Business Benefits Infographics
curl -o public/imgs/infographic-low-moq.webp "https://pouch.eco/wp-content/uploads/2025/12/a_low_moq_infographic_9327303.webp"
curl -o public/imgs/infographic-fast-turnaround.webp "https://pouch.eco/wp-content/uploads/2025/12/a_fast_turnaround_infographic_1726271.webp"
curl -o public/imgs/infographic-shipping-storage.webp "https://pouch.eco/wp-content/uploads/2025/12/Split-infographic-showing-shipping-and-storage-benefits-top-section-displays-15-22-shipping-cost-reduction-with-box-comparison-bottom-shows-70-space-savings-with-warehouse-shelf-visualization.webp"
curl -o public/imgs/infographic-premium-finishes.webp "https://pouch.eco/wp-content/uploads/2025/12/a_premium_finishes_infographic_5805298.webp"

# Products Section
curl -o public/imgs/product-composting-timeline.webp "https://pouch.eco/wp-content/uploads/2025/12/Educational-timeline-infographic-showing-five-month-composting-process-from-intact-pouch-to-rich-soil-with-EN13432ASTM-D6400-certification-and-earthy-color-progression.webp"
curl -o public/imgs/product-recyclable-pouches.webp "https://pouch.eco/wp-content/uploads/2025/12/Close-up-editorial-shot-of-GRS-certified-mono-material-recyclable-pouches-in-neutral-tones-hands-presenting-premium-matte-and-soft-touch-finishes-on-marble-surface-with-natural-window-lighting.webp"
curl -o public/imgs/product-pcr-biobased.webp "https://pouch.eco/wp-content/uploads/2025/12/Overhead-flat-lay-of-PCR-and-bio-based-material-pouches-artfully-arranged-with-seeds-and-plant-elements-FDA-food-contact-approved-showing-circular-economy-innovation-with-Achieve-Pack-branding.webp"
curl -o public/imgs/product-hero-pouch.webp "https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp"

# Solutions Section
curl -o public/imgs/solution-food-beverage.webp "https://pouch.eco/wp-content/uploads/2025/12/a_food_beverage_lifestyle_showcase_6362188.webp"
curl -o public/imgs/solution-cosmetics.webp "https://pouch.eco/wp-content/uploads/2025/12/Dramatic-showcase-of-six-premium-finishing-options-matte-gloss-soft-touch-metallic-embossed-and-spot-UV-with-hand-touching-pouch-to-emphasize-tactile-luxury-under-directional-lighting.webp"
curl -o public/imgs/solution-wellness.webp "https://pouch.eco/wp-content/uploads/2025/12/Fresh-wellness-photography-showing-athletic-hands-scooping-superfood-powder-from-clean-stand-up-wellness-pouch-into-glass-shaker-bottle-with-fresh-fruit-and-fitness-props-in-bright-modern-kitchen-setting.webp"
curl -o public/imgs/solution-pet-products.webp "https://pouch.eco/wp-content/uploads/2025/12/a_pet_products_with_cute_pet_9679118.webp"

# Features Section
curl -o public/imgs/feature-barrier-options.webp "https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_barrier_options_infographic_4264860-scaled.webp"
curl -o public/imgs/feature-pouch-shapes.webp "https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_pouches_single_row_2617439-scaled.webp"
curl -o public/imgs/feature-printing-finishes.webp "https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_bags_stamp_foil_3332905-scaled.webp"
curl -o public/imgs/feature-reclosure-solutions.webp "https://pouch.eco/wp-content/uploads/2025/12/Educational-infographic-displaying-five-closure-systems-zipper-spout-cap-tin-tie-press-to-close-and-valve-with-clear-labels-and-technical-illustrations-showing-convenience-and-freshness-benefits.webp"

# Comparison Section
curl -o public/imgs/comparison-flexible-vs-rigid.webp "https://pouch.eco/wp-content/uploads/2025/12/a_flexible_vs_rigid_packaging_comparison_infographic_9327303.webp"

# Process Section
curl -o public/imgs/process-5-steps.webp "https://pouch.eco/wp-content/uploads/2025/12/a_5_step_process_infographic_9327303.webp"

# Testimonials Section
curl -o public/imgs/testimonials-client-logos.webp "https://pouch.eco/wp-content/uploads/2025/12/a_customer_logos_grid_grey_multiple_rows_6481588-scaled.webp"

# Contact Section
curl -o public/imgs/contact-cta-banner.webp "https://pouch.eco/wp-content/uploads/2025/12/Compelling-call-to-action-marketing-banner-featuring-prominent-Achieve-Pack-logo-headline-22Start-Your-Sustainable-Packaging-Journey22-showcase-of-diverse-sustainable-pouches.webp"

echo "Download complete! All images saved to public/imgs/"
