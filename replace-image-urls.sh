#!/bin/bash

# Script to replace hardcoded image URLs with dynamic image mapper calls in App.tsx

cd "$(dirname "$0")/src"

# Hero Section - about-hero (Premium kraft pouch)
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp|{img("about-hero")}|g' App.tsx

# Certifications
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/04/home-compost.png|{img("cert-home-compost")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/04/pcr-grs-cert-1.png|{img("cert-pcr-grs")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/04/brc-cert.png|{img("cert-brc")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/04/BioPE.png|{img("cert-biope")}|g' App.tsx

# Environmental Benefits Infographics
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_carbon_footprint_reduction_infographic_6668500.webp|{img("infographic-carbon-footprint")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_compostable_materials_infographic_5689913.webp|{img("infographic-compostable")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_plant_based_materials_infographic_2991523.webp|{img("infographic-plant-based")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_grs_recyclable_infographic_8929966.webp|{img("infographic-grs-recyclable")}|g' App.tsx

# Business Benefits Infographics
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_low_moq_infographic_9327303.webp|{img("infographic-low-moq")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_fast_turnaround_infographic_1726271.webp|{img("infographic-fast-turnaround")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Split-infographic-showing-shipping-and-storage-benefits-top-section-displays-15-22-shipping-cost-reduction-with-box-comparison-bottom-shows-70-space-savings-with-warehouse-shelf-visualization.webp|{img("infographic-shipping-storage")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_premium_finishes_infographic_5805298.webp|{img("infographic-premium-finishes")}|g' App.tsx

# Products Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Educational-timeline-infographic-showing-five-month-composting-process-from-intact-pouch-to-rich-soil-with-EN13432ASTM-D6400-certification-and-earthy-color-progression.webp|{img("product-composting-timeline")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Close-up-editorial-shot-of-GRS-certified-mono-material-recyclable-pouches-in-neutral-tones-hands-presenting-premium-matte-and-soft-touch-finishes-on-marble-surface-with-natural-window-lighting.webp|{img("product-recyclable-pouches")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Overhead-flat-lay-of-PCR-and-bio-based-material-pouches-artfully-arranged-with-seeds-and-plant-elements-FDA-food-contact-approved-showing-circular-economy-innovation-with-Achieve-Pack-branding.webp|{img("product-pcr-biobased")}|g' App.tsx

# Solutions Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_food_beverage_lifestyle_showcase_6362188.webp|{img("solution-food-beverage")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Dramatic-showcase-of-six-premium-finishing-options-matte-gloss-soft-touch-metallic-embossed-and-spot-UV-with-hand-touching-pouch-to-emphasize-tactile-luxury-under-directional-lighting.webp|{img("solution-cosmetics")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Fresh-wellness-photography-showing-athletic-hands-scooping-superfood-powder-from-clean-stand-up-wellness-pouch-into-glass-shaker-bottle-with-fresh-fruit-and-fitness-props-in-bright-modern-kitchen-setting.webp|{img("solution-wellness")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_pet_products_with_cute_pet_9679118.webp|{img("solution-pet-products")}|g' App.tsx

# Features Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_barrier_options_infographic_4264860-scaled.webp|{img("feature-barrier-options")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_pouches_single_row_2617439-scaled.webp|{img("feature-pouch-shapes")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_bags_stamp_foil_3332905-scaled.webp|{img("feature-printing-finishes")}|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Educational-infographic-displaying-five-closure-systems-zipper-spout-cap-tin-tie-press-to-close-and-valve-with-clear-labels-and-technical-illustrations-showing-convenience-and-freshness-benefits.webp|{img("feature-reclosure-solutions")}|g' App.tsx

# Comparison Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_flexible_vs_rigid_packaging_comparison_infographic_9327303.webp|{img("comparison-flexible-vs-rigid")}|g' App.tsx

# Process Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_5_step_process_infographic_9327303.webp|{img("process-5-steps")}|g' App.tsx

# Testimonials Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_customer_logos_grid_grey_multiple_rows_6481588-scaled.webp|{img("testimonials-client-logos")}|g' App.tsx

# Contact Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Compelling-call-to-action-marketing-banner-featuring-prominent-Achieve-Pack-logo-headline-22Start-Your-Sustainable-Packaging-Journey22-showcase-of-diverse-sustainable-pouches.webp|{img("contact-cta-banner")}|g' App.tsx

echo "✅ All image URLs replaced with dynamic img() calls!"
echo "Images will now load based on current language setting."
