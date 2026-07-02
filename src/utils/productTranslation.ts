import { useTranslation } from 'react-i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';
import zhTW from '../locales/zh-TW.json';

const locales: Record<string, any> = {
  'en': en,
  'fr': fr,
  'es': es,
  'zh-tw': zhTW,
  'zh': zhTW,
  'fr-fr': fr,
  'es-es': es,
  'es-419': es
};

/**
 * Pure function to translate a product's text fields for a given language code.
 * Case-insensitive and supports underscore/hyphen normalization.
 */
export function translateProductDirect<T extends { id: string; name: string; description: string; shortDesc: string; features: string[] }>(
  product: T,
  lang: string
): T {
  if (!product) return product;

  // Normalize language format (e.g. 'zh_TW' -> 'zh-tw')
  const searchLang = (lang || 'en').toLowerCase().replace('_', '-');
  
  let langKey = 'en';
  if (locales[searchLang]) {
    langKey = searchLang;
  } else {
    const primaryCode = searchLang.split('-')[0];
    if (locales[primaryCode]) {
      langKey = primaryCode;
    }
  }

  const locale = locales[langKey] || locales['en'];
  const translation = locale?.productData?.[product.id];

  if (!translation) return product;

  return {
    ...product,
    name: translation.name || product.name,
    shortDesc: translation.shortDesc || product.shortDesc,
    description: translation.description || product.description,
    features: Array.isArray(translation.features) ? translation.features : product.features
  };
}

/**
 * React hook to translate products dynamically based on the current active language in i18next.
 */
export function useProductTranslation() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const translateProduct = <T extends { id: string; name: string; description: string; shortDesc: string; features: string[] }>(
    product: T
  ): T => {
    return translateProductDirect(product, currentLang);
  };

  const translateProducts = <T extends { id: string; name: string; description: string; shortDesc: string; features: string[] }>(
    products: T[]
  ): T[] => {
    return products.map(p => translateProduct(p));
  };

  return {
    translateProduct,
    translateProducts,
    currentLang
  };
}
