/**
 * Image Mapper Utility
 * Maps image names to their language-specific paths
 */

type Language = 'en' | 'fr' | 'es' | 'zh-TW';

interface ImageMapping {
    [key: string]: {
        en: string;
        fr: string;
        es: string;
        zh: string;
    };
}

const imageMapping: ImageMapping = {
    // Hero & Product Images (no translation needed)
    'about-hero': {
        en: '/imgs/landing-hero.webp',
        fr: '/imgs/landing-hero.webp',
        es: '/imgs/landing-hero.webp',
        zh: '/imgs/landing-hero.webp',
    },
    'product-hero-pouch': {
        en: '/imgs/product-hero-pouch.webp',
        fr: '/imgs/product-hero-pouch.webp',
        es: '/imgs/product-hero-pouch.webp',
        zh: '/imgs/product-hero-pouch.webp',
    },
    'product-pcr-biobased': {
        en: '/imgs/product-pcr-biobased.webp',
        fr: '/img-fr/a_product-pcr-biobased_french_3500775.webp',
        es: '/imgs-sp/a_product-pcr-biobased_spanish_1279891.webp',
        zh: '/imgs-ch/a_product-pcr-biobased_traditional_chinese_3103542.webp',
    },

    // Certifications (no translation needed)
    'cert-biope': {
        en: '/imgs/BioPE.webp',
        fr: '/imgs/BioPE.webp',
        es: '/imgs/BioPE.webp',
        zh: '/imgs/BioPE.webp',
    },
    'cert-brc': {
        en: '/imgs/brc-cert.webp',
        fr: '/imgs/brc-cert.webp',
        es: '/imgs/brc-cert.webp',
        zh: '/imgs/brc-cert.webp',
    },
    'cert-home-compost': {
        en: '/imgs/cert-home-compost.png',
        fr: '/imgs/cert-home-compost.png',
        es: '/imgs/cert-home-compost.png',
        zh: '/imgs/cert-home-compost.png',
    },
    'cert-pcr-grs': {
        en: '/imgs/pcr-grs-cert-1.webp',
        fr: '/imgs/pcr-grs-cert-1.webp',
        es: '/imgs/pcr-grs-cert-1.webp',
        zh: '/imgs/pcr-grs-cert-1.webp',
    },

    // Environmental Infographics (translated)
    'infographic-carbon-footprint': {
        en: '/imgs/infographic-carbon-footprint.webp',
        fr: '/img-fr/a_carbon_footprint_french_6831696.webp',
        es: '/imgs-sp/a_carbon_footprint_spanish_8619151.webp',
        zh: '/imgs-ch/a_carbon_footprint_traditional_chinese_4007408.webp',
    },
    'infographic-compostable': {
        en: '/imgs/infographic-compostable.webp',
        fr: '/img-fr/a_compostable_infographic_french_8263137.webp',
        es: '/imgs-sp/a_compostable_infographic_spanish_9919790.webp',
        zh: '/imgs-ch/a_compostable_infographic_traditional_chinese_9082533.webp',
    },
    'infographic-plant-based': {
        en: '/imgs/infographic-plant-based.webp',
        fr: '/img-fr/a_plant_based_french_0202435.webp',
        es: '/imgs-sp/a_plant_based_spanish_1163987.webp',
        zh: '/imgs-ch/a_plant_based_traditional_chinese_2911132.webp',
    },
    'infographic-grs-recyclable': {
        en: '/imgs/infographic-grs-recyclable.webp',
        fr: '/img-fr/a_grs_recyclable_french_3775236.webp',
        es: '/imgs-sp/a_grs_recyclable_spanish_6585716.webp',
        zh: '/imgs-ch/a_grs_recyclable_traditional_chinese_4658307.webp',
    },

    // Business Infographics (translated)
    'infographic-low-moq': {
        en: '/imgs/infographic-low-moq.webp',
        fr: '/img-fr/a_low_moq_french_6133875.webp',
        es: '/imgs-sp/a_low_moq_spanish_0051694.webp',
        zh: '/imgs-ch/a_low_moq_traditional_chinese_9053549.webp',
    },
    'infographic-fast-turnaround': {
        en: '/imgs/infographic-fast-turnaround.webp',
        fr: '/img-fr/a_fast_turnaround_french_7131233.webp',
        es: '/imgs-sp/a_fast_turnaround_spanish_6936404.webp',
        zh: '/imgs-ch/a_fast_turnaround_traditional_chinese_3580499.webp',
    },
    'infographic-shipping-storage': {
        en: '/imgs/infographic-shipping-storage.webp',
        fr: '/img-fr/a_shipping_storage_french_0128938.webp',
        es: '/imgs-sp/a_shipping_storage_spanish_3657988.webp',
        zh: '/imgs-ch/a_shipping_storage_traditional_chinese_2385301.webp',
    },
    'infographic-premium-finishes': {
        en: '/imgs/infographic-premium-finishes.webp',
        fr: '/img-fr/a_premium_finishes_french_6211544.webp',
        es: '/imgs-sp/a_premium_finishes_spanish_8460591.webp',
        zh: '/imgs-ch/a_premium_finishes_traditional_chinese_8868993.webp',
    },

    // Product Infographics (translated)
    // NOTE: French and Spanish composting timeline are currently swapped in the folders
    'product-composting-timeline': {
        en: '/imgs/product-composting-timeline.webp',
        fr: '/img-fr/a_composting_timeline_spanish_3885780.webp', // TODO: Fix - currently has Spanish text
        es: '/imgs-sp/a_composting_timeline_french_4908607.webp', // TODO: Fix - currently has French text
        zh: '/imgs-ch/a_composting_timeline_traditional_chinese_5384539.webp',
    },
    'product-recyclable-pouches': {
        en: '/imgs/product-recyclable-pouches.webp',
        fr: '/img-fr/a_recyclable_pouches_french_6677876.webp',
        es: '/imgs-sp/a_recyclable_pouches_spanish_4919688.webp',
        zh: '/imgs-ch/a_recyclable_pouches_traditional_chinese_7491817.webp',
    },

    // Solution Images (no translation needed - lifestyle photos)
    'solution-food-beverage': {
        en: '/imgs/solution-food-beverage.webp',
        fr: '/imgs/solution-food-beverage.webp',
        es: '/imgs/solution-food-beverage.webp',
        zh: '/imgs/solution-food-beverage.webp',
    },
    'solution-cosmetics': {
        en: '/imgs/solution-cosmetics.webp',
        fr: '/img-fr/a_cosmetic_pouch_finishes_french_1648364.webp',
        es: '/imgs-sp/a_cosmetic_pouch_finishes_spanish_0646579.webp',
        zh: '/imgs-ch/a_cosmetic_pouch_finishes_traditional_chinese_7020370.webp',
    },
    'solution-wellness': {
        en: '/imgs/solution-wellness.webp',
        fr: '/imgs/solution-wellness.webp',
        es: '/imgs/solution-wellness.webp',
        zh: '/imgs/solution-wellness.webp',
    },
    'solution-pet-products': {
        en: '/imgs/solution-pet-products.webp',
        fr: '/imgs/solution-pet-products.webp',
        es: '/imgs/solution-pet-products.webp',
        zh: '/imgs/solution-pet-products.webp',
    },

    // Feature Infographics (translated)
    'feature-barrier-options': {
        en: '/imgs/feature-barrier-options.webp',
        fr: '/img-fr/a_barrier_options_french_0428734.webp',
        es: '/imgs-sp/a_barrier_options_spanish_8504244.webp',
        zh: '/imgs-ch/a_barrier_options_traditional_chinese_8182562.webp',
    },
    'feature-pouch-shapes': {
        en: '/imgs/updates/feature-pouch-shapes.webp',
        fr: '/imgs/updates/feature-pouch-shapes_french_8379516.webp',
        es: '/imgs/updates/feature-pouch-shapes_spanish_2317615.webp',
        zh: '/imgs/updates/feature-pouch-shapes_traditional_chinese_3853426.webp',
    },
    'feature-printing-finishes': {
        en: '/imgs/feature-printing-finishes.webp',
        fr: '/img-fr/a_printing_finishes_french_2575256.webp',
        es: '/imgs-sp/a_printing_finishes_spanish_0018271.webp',
        zh: '/imgs-ch/a_printing_finishes_traditional_chinese_6621128.webp',
    },
    'feature-reclosure-solutions': {
        en: '/imgs/feature-reclosure-solutions.webp',
        fr: '/img-fr/a_reclosure_options_french_3234977.webp',
        es: '/imgs-sp/a_reclosure_options_spanish_8419525.webp',
        zh: '/imgs-ch/a_reclosure_options_traditional_chinese_7952293.webp',
    },

    // Other
    'comparison-flexible-vs-rigid': {
        en: '/imgs/comparison-flexible-vs-rigid.webp',
        fr: '/img-fr/a_comparison-flexible-vs-rigid_french.webp',
        es: '/imgs-sp/a_comparison-flexible-vs-rigid_spanish.webp',
        zh: '/imgs-ch/a_comparison-flexible-vs-rigid_chinese.webp',
    },
    'process-5-steps': {
        en: '/imgs/process-5-steps.webp',
        fr: '/img-fr/a_process_french_4594650.webp',
        es: '/imgs-sp/a_process_spanish_3226411.webp',
        zh: '/imgs-ch/a_process_traditional_chinese_7374254.webp',
    },
    'testimonials-client-logos': {
        en: '/imgs/testimonials-client-logos.webp',
        fr: '/imgs/testimonials-client-logos.webp',
        es: '/imgs/testimonials-client-logos.webp',
        zh: '/imgs/testimonials-client-logos.webp',
    },
    'contact-cta-banner': {
        en: '/imgs/contact-cta-banner.webp',
        fr: '/img-fr/a_sustainable_packaging_banner_french_6395454.webp',
        es: '/imgs-sp/a_sustainable_packaging_banner_spanish_9446290.webp',
        zh: '/imgs-ch/a_sustainable_packaging_banner_traditional_chinese_9050358.webp',
    },
    'climate': {
        en: '/imgs/climate.webp',
        fr: '/imgs/climate.webp',
        es: '/imgs/climate.webp',
        zh: '/imgs/climate.webp',
    },
};

/**
 * Get the image path for the current language
 * @param imageName - The base name of the image (e.g., 'infographic-carbon-footprint')
 * @param language - The current language code ('en', 'fr', 'es', 'zh-TW')
 * @returns The path to the language-specific image
 */
export function getImage(imageName: string, language: Language = 'en'): string {
    const mapping = imageMapping[imageName];

    if (!mapping) {
        console.warn(`Image mapping not found for: ${imageName}`);
        return `/imgs/${imageName}.webp`; // Fallback to English
    }

    // Map zh-TW to zh for our internal mapping
    const lang = language === 'zh-TW' ? 'zh' : language;

    return mapping[lang] || mapping.en;
}

/**
 * Hook to use with React i18next
 * Returns a function that gets images based on current language
 */
export function useImageMapper(currentLanguage: string) {
    return (imageName: string) => getImage(imageName, currentLanguage as Language);
}

export default getImage;
