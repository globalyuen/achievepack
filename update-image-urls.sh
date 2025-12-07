#!/bin/bash

# Replace all pouch.eco image URLs with local /imgs/ paths in App.tsx

cd src

# About Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp|/imgs/about-hero.webp|g' App.tsx

# Certifications
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/04/home-compost.png|/imgs/cert-home-compost.png|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/04/pcr-grs-cert-1.png|/imgs/cert-pcr-grs.png|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/04/brc-cert.png|/imgs/cert-brc.png|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/04/BioPE.png|/imgs/cert-biope.png|g' App.tsx

# Environmental Benefits Infographics
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_carbon_footprint_reduction_infographic_6668500.webp|/imgs/infographic-carbon-footprint.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_compostable_materials_infographic_5689913.webp|/imgs/infographic-compostable.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_plant_based_materials_infographic_2991523.webp|/imgs/infographic-plant-based.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_grs_recyclable_infographic_8929966.webp|/imgs/infographic-grs-recyclable.webp|g' App.tsx

# Business Benefits Infographics
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_low_moq_infographic_9327303.webp|/imgs/infographic-low-moq.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_fast_turnaround_infographic_1726271.webp|/imgs/infographic-fast-turnaround.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Split-infographic-showing-shipping-and-storage-benefits-top-section-displays-15-22-shipping-cost-reduction-with-box-comparison-bottom-shows-70-space-savings-with-warehouse-shelf-visualization.webp|/imgs/infographic-shipping-storage.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_premium_finishes_infographic_5805298.webp|/imgs/infographic-premium-finishes.webp|g' App.tsx

# Products Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Educational-timeline-infographic-showing-five-month-composting-process-from-intact-pouch-to-rich-soil-with-EN13432ASTM-D6400-certification-and-earthy-color-progression.webp|/imgs/product-composting-timeline.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Close-up-editorial-shot-of-GRS-certified-mono-material-recyclable-pouches-in-neutral-tones-hands-presenting-premium-matte-and-soft-touch-finishes-on-marble-surface-with-natural-window-lighting.webp|/imgs/product-recyclable-pouches.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Overhead-flat-lay-of-PCR-and-bio-based-material-pouches-artfully-arranged-with-seeds-and-plant-elements-FDA-food-contact-approved-showing-circular-economy-innovation-with-Achieve-Pack-branding.webp|/imgs/product-pcr-biobased.webp|g' App.tsx

# Solutions Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_food_beverage_lifestyle_showcase_6362188.webp|/imgs/solution-food-beverage.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Dramatic-showcase-of-six-premium-finishing-options-matte-gloss-soft-touch-metallic-embossed-and-spot-UV-with-hand-touching-pouch-to-emphasize-tactile-luxury-under-directional-lighting.webp|/imgs/solution-cosmetics.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Fresh-wellness-photography-showing-athletic-hands-scooping-superfood-powder-from-clean-stand-up-wellness-pouch-into-glass-shaker-bottle-with-fresh-fruit-and-fitness-props-in-bright-modern-kitchen-setting.webp|/imgs/solution-wellness.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_pet_products_with_cute_pet_9679118.webp|/imgs/solution-pet-products.webp|g' App.tsx

# Features Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_barrier_options_infographic_4264860-scaled.webp|/imgs/feature-barrier-options.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_pouches_single_row_2617439-scaled.webp|/imgs/feature-pouch-shapes.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_bags_stamp_foil_3332905-scaled.webp|/imgs/feature-printing-finishes.webp|g' App.tsx
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Educational-infographic-displaying-five-closure-systems-zipper-spout-cap-tin-tie-press-to-close-and-valve-with-clear-labels-and-technical-illustrations-showing-convenience-and-freshness-benefits.webp|/imgs/feature-reclosure-solutions.webp|g' App.tsx

# Comparison Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_flexible_vs_rigid_packaging_comparison_infographic_9327303.webp|/imgs/comparison-flexible-vs-rigid.webp|g' App.tsx

# Process Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_5_step_process_infographic_9327303.webp|/imgs/process-5-steps.webp|g' App.tsx

# Testimonials Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/a_customer_logos_grid_grey_multiple_rows_6481588-scaled.webp|/imgs/testimonials-client-logos.webp|g' App.tsx

# Contact Section
sed -i '' 's|https://pouch.eco/wp-content/uploads/2025/12/Compelling-call-to-action-marketing-banner-featuring-prominent-Achieve-Pack-logo-headline-22Start-Your-Sustainable-Packaging-Journey22-showcase-of-diverse-sustainable-pouches.webp|/imgs/contact-cta-banner.webp|g' App.tsx

echo "✅ All image URLs updated to local paths!"
echo "Total replacements made:"
grep -c "/imgs/" App.tsx
