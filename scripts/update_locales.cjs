const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/locales');
const locales = ['en.json', 'zh-TW.json', 'fr.json', 'es.json'];

const translations = {
  'en': {
    "automatic-labeling-machine": {
      "name": "Full-automatic Labeling Machine for Packaging Boxes and Pouches",
      "shortDesc": "Automatic labeling machine for packaging color boxes, lids, and cards",
      "description": "A high-precision automatic labeling machine designed for cosmetic PE self-adhesive labels, color boxes, lids, and cards. Enhances production efficiency with a reliable stepper/servo motor drive and PLC touch screen control system.",
      "features": [
        "High-precision stepper/servo motor drive",
        "Advanced PLC control system with touch screen",
        "Adjustable labeling speed (30-150 pcs/min)",
        "Applicable for paper boxes, plastic lids, and flat pouches",
        "Durable stainless steel construction"
      ]
    },
    "aluminum-foil-spout-pouch-stock": {
      "name": "Stock Aluminum Foil Spout Pouch (Lightproof Liquid Bag)",
      "shortDesc": "Stock aluminum foil spout pouch for beverages and sauces",
      "description": "Premium lightproof aluminum foil spout pouches ideal for liquids such as beer, drinks, jam, sauce, and more. Features an easy-pour spout, durable bottom gusset for retail display, and strong barrier properties.",
      "features": [
        "Lightproof aluminum foil structure for maximum UV protection",
        "Leak-proof screw cap design",
        "Self-standing bottom gusset",
        "Available in multiple capacities (50ml to 5000ml)",
        "Low MOQ starting from 100 pieces"
      ]
    }
  },
  'zh-TW': {
    "automatic-labeling-machine": {
      "name": "全自動貼標機（適用於包裝盒與袋子）",
      "shortDesc": "適用於彩盒、蓋子、卡片和化妝品PE帶不干膠的自動貼標機",
      "description": "一款高精度全自動貼標機，專為化妝品PE不干膠標籤、彩盒、蓋子和卡片設計。採用可靠的步進/伺服電機驅動和PLC觸控螢幕控制系統，大幅提升生產效率。",
      "features": [
        "高精度步進/伺服電機驅動",
        "先進的PLC觸控螢幕控制系統",
        "可調貼標速度 (30-150 件/分鐘)",
        "適用於紙盒、塑膠蓋和平口包裝袋",
        "耐用的不鏽鋼結構"
      ]
    },
    "aluminum-foil-spout-pouch-stock": {
      "name": "現貨鋁箔吸嘴袋 (避光液體包裝)",
      "shortDesc": "適用於飲料和醬料的現貨鋁箔吸嘴袋",
      "description": "優質避光鋁箔吸嘴袋，非常適合啤酒、飲料、果醬、醬料等液體。配備易倒吸嘴，耐用的底部風琴設計適合零售展示，並具有強大的阻隔性能。",
      "features": [
        "避光鋁箔結構提供最大紫外線防護",
        "防漏螺旋蓋設計",
        "自立式底部風琴",
        "提供多種容量選擇（50ml至5000ml）",
        "低起訂量，100件起訂"
      ]
    }
  },
  'fr': {
    "automatic-labeling-machine": {
      "name": "Étiqueteuse Entièrement Automatique pour Boîtes et Sachets",
      "shortDesc": "Étiqueteuse automatique pour boîtes de couleur, couvercles et cartes",
      "description": "Une étiqueteuse automatique de haute précision conçue pour les étiquettes auto-adhésives cosmétiques en PE, les boîtes de couleur, les couvercles et les cartes. Améliore l'efficacité de la production avec un moteur pas à pas/servo fiable et un système de contrôle à écran tactile PLC.",
      "features": [
        "Entraînement par moteur pas à pas/servo de haute précision",
        "Système de contrôle avancé PLC avec écran tactile",
        "Vitesse d'étiquetage réglable (30-150 pcs/min)",
        "Applicable aux boîtes en papier, couvercles en plastique et sachets plats",
        "Construction durable en acier inoxydable"
      ]
    },
    "aluminum-foil-spout-pouch-stock": {
      "name": "Sachet à Bec en Feuille d'Aluminium (Sac pour Liquide à l'Épreuve de la Lumière)",
      "shortDesc": "Sachet à bec en aluminium pour boissons et sauces",
      "description": "Sachets à bec en aluminium de qualité supérieure idéaux pour les liquides tels que la bière, les boissons, la confiture, la sauce, et plus encore. Dispose d'un bec verseur facile, d'un soufflet inférieur durable pour affichage, et de solides propriétés de barrière.",
      "features": [
        "Structure en aluminium étanche à la lumière pour protection UV",
        "Conception de bouchon à vis anti-fuite",
        "Soufflet inférieur autoportant",
        "Disponible en plusieurs capacités (50ml à 5000ml)",
        "Faible MOQ à partir de 100 pièces"
      ]
    }
  },
  'es': {
    "automatic-labeling-machine": {
      "name": "Máquina Etiquetadora Totalmente Automática para Cajas y Bolsas",
      "shortDesc": "Etiquetadora automática para cajas de color, tapas y tarjetas",
      "description": "Una máquina etiquetadora automática de alta precisión diseñada para etiquetas cosméticas de PE, cajas, tapas y tarjetas. Mejora la eficiencia de producción con un motor paso a paso/servo y un sistema de control de pantalla táctil PLC.",
      "features": [
        "Motor paso a paso/servo de alta precisión",
        "Sistema de control avanzado PLC con pantalla táctil",
        "Velocidad de etiquetado ajustable (30-150 pzas/min)",
        "Aplicable a cajas de papel, tapas de plástico y bolsas planas",
        "Construcción duradera de acero inoxidable"
      ]
    },
    "aluminum-foil-spout-pouch-stock": {
      "name": "Bolsa con Boquilla de Papel de Aluminio (Bolsa de Líquido a Prueba de Luz)",
      "shortDesc": "Bolsa de aluminio con boquilla para bebidas y salsas",
      "description": "Bolsas de aluminio de calidad superior ideales para líquidos como cerveza, bebidas, mermelada, salsa, y más. Cuenta con una boquilla fácil de verter, un fuelle inferior duradero, y fuertes propiedades de barrera.",
      "features": [
        "Estructura de aluminio a prueba de luz para máxima protección UV",
        "Diseño de tapa de rosca a prueba de fugas",
        "Fuelle inferior autoportante",
        "Disponible en múltiples capacidades (50ml a 5000ml)",
        "Bajo MOQ a partir de 100 piezas"
      ]
    }
  }
};

locales.forEach(file => {
  const filePath = path.join(localesDir, file);
  if (fs.existsSync(filePath)) {
    const lang = file.replace('.json', '');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.productData) {
      data.productData = {};
    }
    data.productData = {
      ...data.productData,
      ...translations[lang]
    };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${file}`);
  }
});
