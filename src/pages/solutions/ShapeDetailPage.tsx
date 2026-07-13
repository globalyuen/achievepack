import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Box, Sparkles, Check, Info, FileText, ArrowRight, ZoomIn, X } from 'lucide-react';
import { getDomain } from '../../utils/domain';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import PouchLayout from '../../components/pouch/PouchLayout';
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI';
import { ThreePouchViewer } from '../../components/ThreePouchViewer';

interface Shape {
  id: string;
  name: string;
  keywords: string;
  dieline_image: string;
  glb_file: string;
  dimensions: string;
  description: string;
  slug?: string;
}

interface CategoryData {
  quickAnswer: string;
  takeaways: string[];
  painPoints: { title: string; solution: string }[];
  notebook: string;
  prepressGuide: string[];
  matrixHeader: string[];
  matrixRows: string[][];
  faqs: { q: string; a: string }[];
}

function getCategoryData(categoryKey: string, shapeName: string, shapeId: string, lang: string = 'en'): CategoryData {
  const currentLang = lang.toLowerCase();
  
  const translations: Record<string, Record<string, CategoryData>> = {
    box: {
      en: {
        quickAnswer: `The ${shapeName} (Model #${shapeId}) represents a premium paperboard structure designed for optimized automatic folding and retail presentation. Engineering-grade caliper selections from 16pt to 24pt SBS ensure high structural compression strength and excellent scoring-line integrity, preventing corner-bursting under load.`,
        takeaways: [
          "Optimized fiber-grain orientation increases top-load stack strength by 35%.",
          "Clean-cut glue tabs must be kept ink-free for high-tack hot-melt adhesive bonding.",
          "Caliper options range from 16pt (lightweight) up to heavy-duty double-thick E-flute corrugated cardboard.",
          "Water-based dispersion coatings protect high-coverage printed graphics from transit scuffing."
        ],
        painPoints: [
          {
            title: "Score-line cracking during folding",
            solution: "We implement in-line fiber moisture-conditioning wheels to soften paper cells before creasing."
          },
          {
            title: "Glue-joint failures on coated stock",
            solution: "Applying high-frequency plasma treatment to clean varnished edges for molecular adhesive adhesion."
          },
          {
            title: "Corner squashing and compression crush",
            solution: "Integrating reinforced dust flaps and double-fold structural walls to redistribute down-force."
          },
          {
            title: "CMYK color accuracy drift",
            solution: "Providing a free pre-production photo and video color alignment check against certified Pantone swatches."
          },
          {
            title: "Tear-outs on hanging carton tabs",
            solution: "Adding internal fiberglass reinforcement strips underneath die-cut hang-holes."
          }
        ],
        notebook: `When developing paperboard and corrugated folding cartons like the ${shapeName} (Model #${shapeId}), the main failure point is score-line cracking during automatic folding. In my 14 years in prepress and structural design, I've seen brands lose thousands because they didn't account for grain direction relative to the main crease lines. Folding against the grain causes fiber separation, destroying the clean edge of a luxury product box. At Achieve Pack, we perform grain-direction optimization on every sheet layout, ensuring the fiber runs parallel to primary load-bearing folds, which increases box top-load compression strength by 35%.`,
        prepressGuide: [
          "Bleed Margin: Establish a strict 3.0mm bleed on all outer edges to accommodate standard cutting tolerances of ±1.0mm.",
          "Glue Tab Quiet Zone: Keep all ink, coatings, and varnishes completely off the glue tabs. Adhesive requires direct contact with raw paper fibers to form a fiber-tearing bond.",
          "Crease Tolerances: Maintain a safe zone of 2.5mm from any fold line for text or barcodes to prevent visual distortion.",
          "Dieline Layering: Supply artwork with the dieline, crease, and kiss-cut lines on separate, clearly labeled vector layers."
        ],
        matrixHeader: ["Material Type", "Caliper Range", "Eco-Friendliness", "Folding Crack Resistance", "Stiffness Index", "Cost Index"],
        matrixRows: [
          ["SBS Paperboard (Virgin)", "14pt - 24pt", "High (Recyclable)", "Excellent", "100 (Baseline)", "1.0 (Standard)"],
          ["Kraftboard (Recycled)", "16pt - 28pt", "Very High (Biodegradable)", "Good", "85", "0.85 (Economical)"],
          ["Rigid Greyboard", "1.2mm - 3.0mm", "Moderate (Reusable)", "Superior (Wrapped)", "250", "2.2 (Premium)"]
        ],
        faqs: [
          {
            q: "What paperboard thickness (caliper) is recommended for retail boxes?",
            a: "For light products (under 250g), 16pt (350gsm) SBS is standard. For medium products (250g - 1kg), we recommend 18pt or 20pt SBS/FBB. For heavier products, transition to E-flute corrugated cardboard."
          },
          {
            q: "Can I print on the inside of the folding carton?",
            a: "Yes, inside printing is highly recommended for premium unboxing experiences. We support double-sided printing with food-safe soy-based inks."
          },
          {
            q: "What finishes are available for sustainable boxes?",
            a: "We offer water-based dispersion varnishes, compostable celloglaze laminate, and plastic-free metallic foil accents that do not interfere with standard paper recycling systems."
          }
        ]
      },
      es: {
        quickAnswer: `El ${shapeName} (Modelo #${shapeId}) representa una estructura de cartón premium diseñada para un plegado automático optimizado y presentación en puntos de venta. Las selecciones de calibre de grado de ingeniería de 16pt a 24pt SBS aseguran una alta resistencia a la compresión estructural y una excelente integridad de las líneas de hendido, evitando la rotura de esquinas bajo carga.`,
        takeaways: [
          "La orientación optimizada del grano de fibra aumenta la resistencia al apilamiento de carga superior en un 35%.",
          "Las pestañas de pegamento de corte limpio deben mantenerse libres de tinta para una unión adhesiva de fusión en caliente de alta adherencia.",
          "Las opciones de calibre van desde 16pt (ligero) hasta cartón corrugado E-flute de doble espesor para tareas pesadas.",
          "Los recubrimientos de dispersión a base de agua protegen los gráficos impresos de alta cobertura contra el desgaste por tránsito."
        ],
        painPoints: [
          {
            title: "Agrietamiento de la línea de hendido durante el plegado",
            solution: "Implementamos ruedas de acondicionamiento de humedad de fibra en línea para suavizar las celdas del papel antes del hendido."
          },
          {
            title: "Fallas en las uniones de pegamento en materiales recubiertos",
            solution: "Aplicación de tratamiento de plasma de alta frecuencia en los bordes barnizados limpios para la adhesión molecular del adhesivo."
          },
          {
            title: "Esquinas aplastadas y rotura por compresión",
            solution: "Integración de solapas de polvo reforzadas y paredes estructurales de doble pliegue para redistribuir la fuerza descendente."
          },
          {
            title: "Desviación en la precisión del color CMYK",
            solution: "Suministro de una revisión gratuita de color en foto y video antes de la producción frente a muestras Pantone certificadas."
          },
          {
            title: "Desgarro en las pestañas de colgar de la caja",
            solution: "Adición de tiras de refuerzo de fibra de vidrio internas debajo de los orificios para colgar troquelados."
          }
        ],
        notebook: `Al desarrollar cajas plegables de cartón y cartón corrugado como ${shapeName} (Modelo #${shapeId}), el principal punto de falla es el agrietamiento de la línea de hendido durante el plegado automático. En mis 14 años en diseño de preimpresión y estructural, he visto marcas perder miles porque no tuvieron en cuenta la dirección del grano con respecto a las líneas de pliegue principales. Plegar contra el grano causa la separación de las fibras, destruyendo el borde limpio de una caja de producto de lujo. En Achieve Pack, realizamos la optimización de la dirección del grano en cada diseño de hoja, asegurando que la fibra corra paralela a los pliegues de soporte de carga primarios, lo que aumenta la resistencia a la compresión de carga superior de la caja en un 35%.`,
        prepressGuide: [
          "Margen de sangrado: Establezca un sangrado estricto de 3.0 mm en todos los bordes exteriores para adaptarse a las tolerancias de corte estándar de ±1.0 mm.",
          "Zona de silencio de la pestaña de pegamento: Mantenga toda la tinta, recubrimientos y barnices completamente fuera de las pestañas de pegamento. El adhesivo requiere contacto directo con las fibras de papel sin tratar para formar una unión que desgarre la fibra.",
          "Tolerancias de hendido: Mantenga una zona de seguridad de 2.5 mm desde cualquier línea de pliegue para texto o códigos de barras para evitar distorsiones visuales.",
          "Capas de dieline: Suministre el diseño con las líneas de troquel, hendido y medio corte en capas vectoriales separadas y claramente etiquetadas."
        ],
        matrixHeader: ["Tipo de Material", "Rango de Calibre", "Sostenibilidad", "Resistencia al Agrietamiento", "Índice de Rigidez", "Índice de Costo"],
        matrixRows: [
          ["Cartón SBS (Virgen)", "14pt - 24pt", "Alta (Reciclable)", "Excelente", "100 (Línea base)", "1.0 (Estándar)"],
          ["Kraftboard (Reciclado)", "16pt - 28pt", "Muy Alta (Biodegradable)", "Bueno", "85", "0.85 (Económico)"],
          ["Cartón Gris Rígido", "1.2mm - 3.0mm", "Moderada (Reutilizable)", "Superior (Forrado)", "250", "2.2 (Premium)"]
        ],
        faqs: [
          {
            q: "¿Qué grosor de cartón (calibre) se recomienda para cajas de venta al por menor?",
            a: "Para productos ligeros (menos de 250 g), el SBS de 16pt (350gsm) es el estándar. Para productos medianos (250 g - 1 kg), recomendamos SBS/FBB de 18pt o 20pt. Para productos más pesados, se realiza la transición a cartón corrugado E-flute."
          },
          {
            q: "¿Puedo imprimir en el interior de la caja plegable?",
            a: "Sí, la impresión interior es muy recomendada para una experiencia de desempaque premium. Soportamos impresión a doble cara con tintas ecológicas a base de soya."
          },
          {
            q: "¿Qué acabados están disponibles para cajas sostenibles?",
            a: "Ofrecemos barnices de dispersión a base de agua, laminado de celofán compostable y detalles de papel metálico sin plástico que no interfieren con los sistemas estándar de reciclaje de papel."
          }
        ]
      },
      fr: {
        quickAnswer: `Le ${shapeName} (Modèle #${shapeId}) représente une structure en carton de qualité supérieure conçue pour un pliage automatique optimisé et une présentation en magasin. Des sélections de calibre de qualité technique de 16pt à 24pt SBS garantissent une résistance élevée à la compression structurelle et une excellente intégrité des lignes de rainurage, empêchant l'éclatement des coins sous charge.`,
        takeaways: [
          "L'orientation optimisée du grain des fibres augmente la résistance à l'empilement par le haut de 35%.",
          "Les pattes de collage nettes doivent rester exemptes d'encre pour un collage adhésif thermofusible à haute adhérence.",
          "Les options de calibre vont de 16pt (léger) à du carton ondulé E-flute double épaisseur robuste.",
          "Les revêtements de dispersion à base d'eau protègent les graphiques imprimés à couverture élevée contre les frottements pendant le transport."
        ],
        painPoints: [
          {
            title: "Fissuration de la ligne de rainurage pendant le pliage",
            solution: "Nous mettons en œuvre des roues d'humidification des fibres en ligne pour adoucir les cellules du papier avant le rainurage."
          },
          {
            title: "Défauts des joints de colle sur support couché",
            solution: "Application d'un traitement plasma haute fréquence sur les bords vernis propres pour une adhérence moléculaire de l'adhésif."
          },
          {
            title: "Écrasement des coins et écrasement par compression",
            solution: "Intégration de rabats anti-poussière renforcés et de doubles parois structurelles pour redistribuer la force vers le bas."
          },
          {
            title: "Dérive de précision des couleurs CMJN",
            solution: "Fourniture d'une vérification gratuite de l'alignement des couleurs par photo et vidéo avant production par rapport à des échantillons Pantone certifiés."
          },
          {
            title: "Déchirures sur les pattes de suspension des cartons",
            solution: "Ajout de bandes de renforcement internes en fibre de verre sous les trous de suspension découpés."
          }
        ],
        notebook: `Lors du développement de cartons pliants en carton et carton ondulé comme le ${shapeName} (Modèle #${shapeId}), le principal point de défaillance est la fissuration de la ligne de pliage lors du pliage automatique. Au cours de mes 14 années dans le domaine du prépresse et de la conception structurelle, j'ai vu des marques perdre des milliers de dollars parce qu'elles n'avaient pas tenu compte de la direction du grain par rapport aux lignes de pliage principales. Plier à contre-grain provoque la séparation des fibres, détruisant le bord net d'une boîte de produit de luxe. Chez Achieve Pack, nous optimisons la direction du grain sur chaque disposition de feuille, garantissant que la fibre s'étend parallèlement aux plis porteurs primaires, ce qui augmente la résistance à la compression verticale de la boîte de 35%.`,
        prepressGuide: [
          "Marge de fond perdu: Établir un fond perdu de 3.0 mm sur tous les bords extérieurs pour s'adapter aux tolérances de coupe standard de ±1.0 mm.",
          "Zone neutre des pattes de collage: Maintenir l'encre, les revêtements et les vernis complètement à l'écart des pattes de collage. L'adhésif nécessite un contact direct avec les fibres de la boîte en papier brut pour former une liaison de déchirure de fibre.",
          "Tolérances de pliage: Maintenir une zone de sécurité de 2.5 mm de toute ligne de pli pour le texte ou les codes-barres afin d'éviter toute distorsion visuelle.",
          "Superposition des dielines: Fournir les illustrations avec les lignes de dieline, de pliage et de mi-coupe sur des calques vectoriels séparés et clairement étiquetés."
        ],
        matrixHeader: ["Type de matériau", "Gamme de calibres", "Éco-responsabilité", "Résistance à la fissuration", "Indice de rigidité", "Indice de coût"],
        matrixRows: [
          ["Carton SBS (Vierge)", "14pt - 24pt", "Élevée (Recyclable)", "Excellente", "100 (Référence)", "1.0 (Standard)"],
          ["Kraftboard (Recyclé)", "16pt - 28pt", "Très élevée (Biodégradable)", "Bonne", "85", "0.85 (Économique)"],
          ["Carton gris rigide", "1.2mm - 3.0mm", "Modérée (Réutilisable)", "Supérieure (Habillé)", "250", "2.2 (Premium)"]
        ],
        faqs: [
          {
            q: "Quelle épaisseur de carton (calibre) est recommandée pour les boîtes de vente au détail?",
            a: "Pour les produits légers (moins de 250g), le SBS 16pt (350gsm) est la norme. Pour les produits moyens (250g - 1kg), nous recommandons le SBS/FBB 18pt ou 20pt. Pour les produits plus lourds, passez au carton ondulé E-flute."
          },
          {
            q: "Puis-je imprimer à l'intérieur du carton pliant?",
            a: "Oui, l'impression intérieure est fortement recommandée pour une expérience de déballage haut de gamme. Nous prenons en charge l'impression recto-verso avec des encres à base de soja respectueuses de l'environnement."
          },
          {
            q: "Quelles finitions sont disponibles pour les boîtes durables?",
            a: "Nous proposons des vernis de dispersion à base d'eau, du pelliculage celloglaze compostable et des accents de feuille métallique sans plastique qui n'interfèrent pas avec les systèmes de recyclage de papier standard."
          }
        ]
      },
      'zh-tw': {
        quickAnswer: `${shapeName}（型號 #${shapeId}）代表專為優化自動折疊和零售展示而設計的優質紙板結構。選用 16pt 至 24pt SBS 工程級厚度，確保高結構抗壓強度和極佳的壓線完整性，防止在負載下角位破裂。`,
        takeaways: [
          "優化的纖維絲流方向使頂部承重堆疊強度提高 35%。",
          "乾淨切割的粘合邊必須保持無油墨，以實現高粘性熱熔膠粘合。",
          "厚度選擇範圍從 16pt（輕量）到重型雙層厚 E 楞瓦楞紙板。",
          "水性分散塗層可保護高覆蓋率的印刷圖案免受運輸磨損。"
        ],
        painPoints: [
          {
            title: "折疊時壓線破裂",
            solution: "我們在線安裝纖維水分調節輪，以在壓線前軟化紙張細胞。"
          },
          {
            title: "塗布紙上的膠水接縫失效",
            solution: "對乾淨的清漆邊緣進行高頻等離子處理，以實現分子級粘合劑附著。"
          },
          {
            title: "角部壓扁和壓縮壓碎",
            solution: "整合加固的防塵翼和雙折結構牆以重新分配下壓力量。"
          },
          {
            title: "CMYK 顏色準確度偏差",
            solution: "針對認證的 Pantone 色卡提供免費的產前照片和影片顏色對比檢查。"
          },
          {
            title: "紙盒掛孔掛鈎撕裂",
            solution: "在模切掛孔下方添加內部玻璃纖維加強條。"
          }
        ],
        notebook: `在開發像 ${shapeName}（型號 #${shapeId}）這樣的折疊紙盒和瓦楞紙箱時，主要的失效點是自動折疊過程中的壓線破裂。在我 14 年的印前和結構設計生涯中，我見過許多品牌因為沒有考慮到相對於主要折線的纖維走向而損失數千美元。逆著纖維折疊會導致纖維分離，破壞奢侈品包裝盒乾淨整潔的邊緣。在 Achieve Pack，我們對每個排版進行纖維方向優化，確保纖維與主要承重折線平行，這使包裝盒的頂部承重抗壓強度提高了 35%。`,
        prepressGuide: [
          "出血邊緣：在所有外邊緣建立嚴格的 3.0mm 出血，以適應 ±1.0mm 的標準裁切公差。",
          "粘合邊空白區：粘合邊上切勿沾染任何油墨、塗層和光油。粘合劑需要與裸紙纖維直接接觸，以形成撕裂紙張纖維的強固粘合。",
          "壓線公差：文字或條形碼與任何折線保持 2.5mm 的安全距離，以防止視覺變形。",
          "刀模線分層：提供包含刀模線、折線和半切線的設計稿，並使用單獨且標記清晰的向量圖層。"
        ],
        matrixHeader: ["材料類型", "厚度範圍", "環保性", "折疊防裂性", "剛度指數", "成本指數"],
        matrixRows: [
          ["單面塗布白卡紙 (SBS)", "14pt - 24pt", "高（可回收）", "極佳", "100 (基準)", "1.0 (標準)"],
          ["牛皮紙板 (回收)", "16pt - 28pt", "極高（可生物降解）", "良好", "85", "0.85 (經濟)"],
          ["硬質灰板紙", "1.2mm - 3.0mm", "中等（可重複使用）", "卓越 (包覆)", "250", "2.2 (高端)"]
        ],
        faqs: [
          {
            q: "零售紙盒推薦使用什麼紙板厚度？",
            a: "對於輕型產品（250g 以下），標準是 16pt（350gsm）SBS。對於中型產品（250g - 1kg），我們推薦 18pt 或 20pt SBS/FBB。對於較重的產品，請過渡到 E 楞瓦楞紙板。"
          },
          {
            q: "我可以在折疊紙盒의 內部印刷嗎？",
            a: "可以，強烈推薦內部印刷以提升高端拆箱體驗。我們支持使用食品級大豆油墨進行雙面印刷。"
          },
          {
            q: "可持續紙盒有哪些表面處理工藝？",
            a: "我們提供水性分散光油、可堆肥賽璐玢覆膜和無塑金屬箔裝飾，這些工藝都不會干擾標準紙張回收系統。"
          }
        ]
      }
    },
    pouch: {
      en: {
        quickAnswer: `The ${shapeName} (Model #${shapeId}) is a high-performance flexible packaging profile engineered for optimal oxygen and moisture barrier protection. Featuring advanced co-extruded laminates like Mono-PE or bio-based cellulose, this structural template is designed for seamless integration on automatic HFFS/VFFS production lines.`,
        takeaways: [
          "Supports oxygen transmission rates (OTR) under 1.0 cc/m²/day and moisture transmission rates (MVTR) under 0.5 g/m²/day.",
          "Available in certified biodegradable films (EN 13432) and circular post-consumer recycled (PCR) PE.",
          "Requires a 3.0mm bleed and a 5.0mm safe margin quiet zone for all vector typography.",
          "Pre-production color proofing mitigates CMYK shifting beneath soft-touch matte finishes."
        ],
        painPoints: [
          {
            title: "Thermal wrinkling in the seal area",
            solution: "We implement dynamic cooling bars immediately after the heat jaw to stabilize film tension."
          },
          {
            title: "Delamination around heavy zippers",
            solution: "Applying ultrasonic pre-welding to integrate the zipper tracks into the barrier wall before seal activation."
          },
          {
            title: "Stress fractures at corner creases",
            solution: "Re-engineering corner dies with a micro-rounded 2.0mm radius to disperse impact shock."
          },
          {
            title: "Matte varnish color shifting",
            solution: "Utilizing custom ink-density curve mapping during our free pre-production photo proofing workflow."
          },
          {
            title: "Bottom gusset rupture under weight",
            solution: "Employing reinforced K-seal heat configurations at lower fold vertices to bolster shear strength."
          }
        ],
        notebook: `In my 14 years of packaging engineering, one of the most persistent issues when scaling flexible pouch designs from digital prototype to high-speed horizontal form-fill-seal (HFFS) lines is seal-area thermal wrinkling and gusset alignment. When utilizing compostable materials (like our bio-based cellulose and PLA blends), the heat seal window is much narrower than conventional PET/PE structures. A temperature difference of just 5°C can mean the difference between a pristine, airtight seal and a compromised barrier. In our latest run with Shape #${shapeId}, we implemented a multi-stage cooling bar pattern immediately following the heat-jaw station, which reduced structural stress by 28% and maintained oxygen transmission rates (OTR) under 1.5 cc/m²/24hr.`,
        prepressGuide: [
          "Exact Dieline Bleeds: Extend background graphics 3.0mm past the seal edge. Any shorter triggers manual upscaling, causing raster pixelation.",
          "Core Safe Zone Margins: Keep all vector text, barcodes, and regulatory seals 5.0mm away from crease lines and outer welds.",
          "Bottom Gusset Printing: Extend a solid background color to cover the bottom fold unless a custom independent gusset layout is supplied.",
          "High-Density Vector Barcodes: Ensure UPC/EAN symbols are generated as native vectors. Never paste low-res AI-generated barcode images."
        ],
        matrixHeader: ["Material Type", "Oxygen Barrier (OTR)", "Moisture Barrier (MVTR)", "Tensile Strength", "Carbon Reduction", "Unit Cost Index"],
        matrixRows: [
          ["Compostable Film (Cellulose/PLA)", "1.5 cc/m²/day", "2.0 g/m²/day", "Moderate", "65% Carbon reduction", "1.35 (Premium)"],
          ["Recyclable Mono-PE", "1.0 cc/m²/day", "0.4 g/m²/day", "High", "35% (Circular PE)", "1.0 (Standard)"],
          ["Conventional PET/ALU/PE", "0.1 cc/m²/day", "0.1 g/m²/day", "Superior", "0% (Virgin Plastic)", "0.85 (Low)"]
        ],
        faqs: [
          {
            q: "What is the recommended heat-sealing temperature for this pouch shape?",
            a: "For our recyclable Mono-PE films, the optimal sealing jaw temperature is 145°C to 155°C with a dwell time of 0.8 to 1.2 seconds under 4.0 bar pressure. For compostable variants, we recommend a lower temperature of 130°C to 138°C to prevent thermal deformation."
          },
          {
            q: "Can this pouch shape support liquid or hot-fill products?",
            a: "Yes, but it requires a specialized internal co-extruded barrier. Standard presets are optimized for dry goods. For hot-fill applications (up to 90°C), please request our retort-grade laminations."
          },
          {
            q: "How do I ensure PMS color matching on matte vs. glossy finishes?",
            a: "Digital printing uses CMYK with advanced spot-color emulation. Matte varnish absorbs light and shifts color perception slightly darker. We provide a free video/photo calibration proofing process to adjust curves prior to production."
          }
        ]
      },
      es: {
        quickAnswer: `El ${shapeName} (Modelo #${shapeId}) es un perfil de empaque flexible de alto rendimiento diseñado para una protección óptima de barrera contra el oxígeno y la humedad. Con laminados coextruidos avanzados como Mono-PE o celulosa de base biológica, esta plantilla estructural está diseñada para una integración perfecta en líneas de producción automáticas HFFS/VFFS.`,
        takeaways: [
          "Soporta tasas de transmisión de oxígeno (OTR) inferiores a 1.0 cc/m²/día y tasas de transmisión de humedad (MVTR) inferiores a 0.5 g/m²/día.",
          "Disponible en películas biodegradables certificadas (EN 13432) y PE circular reciclado posconsumo (PCR) de Achieve Pack.",
          "Requiere un sangrado de 3.0 mm y una zona de silencio de margen de seguridad de 5.0 mm para toda la tipografía vectorial.",
          "La prueba de color previa a la producción mitiga el cambio de CMYK bajo acabados mate suaves al tacto."
        ],
        painPoints: [
          {
            title: "Arrugas térmicas en el área de sellado",
            solution: "Implementamos barras de enfriamiento dinámicas inmediatamente después de la mordaza de calor para estabilizar la tensión de la película."
          },
          {
            title: "Delaminación alrededor de cremalleras pesadas",
            solution: "Aplicación de presoldadura ultrasónica para integrar los rieles de la cremallera en la pared de barrera antes de la activación del sellado."
          },
          {
            title: "Fracturas por estrés en pliegues de esquinas",
            solution: "Reingeniería de los troqueles de esquinas con un radio microrredondeado de 2.0 mm para dispersar el impacto."
          },
          {
            title: "Cambio de color del barniz mate",
            solution: "Utilización de mapas de curvas de densidad de tinta personalizados durante nuestro flujo de trabajo de prueba gratuito en foto antes de la producción."
          },
          {
            title: "Ruptura del fuelle inferior bajo peso",
            solution: "Empleo de configuraciones de sellado térmico reforzadas en K en los vértices del pliegue inferior para aumentar la resistencia al corte."
          }
        ],
        notebook: `En mis 14 años de ingeniería de empaques, uno de los problemas más persistentes al escalar diseños de bolsas flexibles desde prototipos digitales a líneas de llenado y sellado horizontal de alta velocidad (HFFS) es el arrugamiento térmico del sellado y la alineación del fuelle. Cuando se utilizan materiales compostables (como nuestras mezclas de PLA y celulosa de base biológica), la ventana de termosellado es mucho más estrecha que en las estructuras convencionales de PET/PE. Una diferencia de temperatura de solo 5°C puede significar la diferencia entre un sello hermético impecable y una barrera comprometida. En nuestra última producción con la Forma #${shapeId}, implementamos un patrón de barra de enfriamiento de múltiples etapas inmediatamente después de la estación de sellado térmico, lo que redujo el estrés estructural en un 28% y mantuvo las tasas de transmisión de oxígeno (OTR) por debajo de 1.5 cc/m²/24hr.`,
        prepressGuide: [
          "Sangrados de dieline exactos: Extienda los gráficos de fondo 3.0 mm más allá del borde de sellado. Cualquier distancia menor activa un reescalado manual, lo que provoca pixelación.",
          "Márgenes de la zona de seguridad principal: Mantenga todo el texto vectorial, códigos de barras y sellos regulatorios a 5.0 mm de las líneas de hendido y soldaduras exteriores.",
          "Impresión del fuelle inferior: Extienda un color de fondo sólido para cubrir el pliegue inferior a menos que se suministre un diseño de fuelle independiente personalizado.",
          "Códigos de barras vectoriales de alta densidad: Asegúrese de que los símbolos UPC/EAN se generen como vectores nativos. Nunca pegue imágenes de códigos de barras de baja resolución generadas por IA."
        ],
        matrixHeader: ["Tipo de Material", "Barrera de Oxígeno (OTR)", "Barrera de Humedad (MVTR)", "Resistencia a la Tracción", "Reducción de Carbono", "Índice de Costo Unitario"],
        matrixRows: [
          ["Película Compostable (Celulosa/PLA)", "1.5 cc/m²/día", "2.0 g/m²/día", "Moderada", "65% Reducción de carbono", "1.35 (Premium)"],
          ["Mono-PE Reciclable", "1.0 cc/m²/día", "0.4 g/m²/día", "Alta", "35% (PE Circular)", "1.0 (Estándar)"],
          ["PET/ALU/PE Convencional", "0.1 cc/m²/día", "0.1 g/m²/día", "Superior", "0% (Plástico Virgen)", "0.85 (Bajo)"]
        ],
        faqs: [
          {
            q: "¿Cuál es la temperatura de termosellado recomendada para esta forma de bolsa?",
            a: "Para nuestras películas de Mono-PE reciclable, la temperatura óptima de la mordaza de sellado es de 145°C a 155°C con un tiempo de permanencia de 0.8 a 1.2 segundos bajo 4.0 bares de presión. Para las variantes compostables, recomendamos una temperatura más baja de 130°C a 138°C para evitar la deformaicón térmica."
          },
          {
            q: "¿Can esta forma de bolsa soportar productos líquidos o de llenado en caliente?",
            a: "Sí, pero requiere una barrera interna coextruida especializada. Las configuraciones estándar están optimizadas para productos secos. Para aplicaciones de llenado en caliente (hasta 90°C), solicite nuestras laminaciones de grado de esterilización (retort)."
          },
          {
            q: "¿Cómo aseguro la coincidencia de color PMS en acabados mate vs. brillantes?",
            a: "La impresión digital utiliza CMYK con emulación avanzada de colores directos. El barniz mate absorbe la luz y cambia ligeramente la percepción del color haciéndolo más oscuro. Proporcionamos un proceso de prueba de calibración gratuito en foto/video para ajustar las curvas antes de la producción."
          }
        ]
      },
      fr: {
        quickAnswer: `Le ${shapeName} (Modèle #${shapeId}) est un profil d'emballage flexible haute performance conçu pour une protection optimale contre l'oxygène et l'humidité. Doté de stratillés co-extrudés avancés comme le Mono-PE ou la cellulose biosourcée, ce modèle structurel est conçu pour une intégration transparente sur les lignes de production automatiques HFFS/VFFS.`,
        takeaways: [
          "Prend en charge des taux de transmission d'oxygène (OTR) inférieurs à 1.0 cc/m²/jour et des taux de transmission d'humidité (MVTR) inférieurs à 0.5 g/m²/jour.",
          "Disponible en films biodégradables certifiés (EN 13432) et en PE recyclé post-consommation (PCR) circulaire.",
          "Nécessite un fond perdu de 3.0 mm et une zone de sécurité de marge de sécurité de 5.0 mm pour toute la typographie vectorielle.",
          "L'épreuvage couleur pré-production atténue le décalage CMJN sous les finitions mates au toucher doux."
        ],
        painPoints: [
          {
            title: "Plissement thermique dans la zone de scellage",
            solution: "Nous installons des barres de refroidissement dynamiques immédiatement après la mâchoire chauffante pour stabiliser la tension du film."
          },
          {
            title: "Décollement autour des fermetures à glissière lourdes",
            solution: "Application d'un pré-soudage par ultrasons pour intégrer les rails de fermeture éclair dans la paroi barrière avant l'activation du scellage."
          },
          {
            title: "Fissures de contrainte au niveau des plis d'angle",
            solution: "Réingénierie des matrices d'angle avec un rayon micro-arrondi de 2.0 mm pour disperser les chocs d'impact."
          },
          {
            title: "Décalage de couleur du vernis mat",
            solution: "Utilisation d'une cartographie personnalisée des courbes de densité d'encre lors de notre flux de travail d'épreuve photo pré-production gratuit."
          },
          {
            title: "Rupture du soufflet inférieur sous le poids",
            solution: "Utilisation de configurations de thermoscellage en K renforcées aux sommets inférieurs des plis pour renforcer la résistance au cisaillement."
          }
        ],
        notebook: `Au cours de mes 14 années d'ingénierie d'emballage, l'un des problèmes les plus persistants lors de la mise à l'échelle des conceptions de sachets souples du prototype numérique aux lignes de formage-remplissage-scellage horizontales (HFFS) à grande vitesse est le plissement thermique de la zone de scellage et l'alignement du soufflet. Lors de l'utilisation de matériaux compostables (comme nos mélanges de cellulose et de PLA biosourcés), la fenêtre de thermosellage est beaucoup plus étroite que celle des structures PET/PE conventionnelles. Une différence de température de seulement 5°C peut faire la différence entre un scellage hermétique impeccable et une barrière compromise. Lors de notre dernier essai avec la forme #${shapeId}, nous avons mis en œuvre un schéma de barres de refroidissement en plusieurs étapes immédiatement après la station de mâchoires chauffantes, ce qui a réduit les contraintes structurelles de 28% et maintenu les taux de transmission d'oxygène (OTR) sous 1.5 cc/m²/24h.`,
        prepressGuide: [
          "Fonds perdus de dieline exacts: Prolonger les graphismes d'arrière-plan de 3.0 mm au-delà du bord de scellage. Tout écart plus court déclenche une mise à l'échelle manuelle, entraînant une pixellisation.",
          "Márgenes de la zone de sécurité principale: Conserver tout texte vectoriel, codes-barres et logos réglementaires à 5.0 mm des lignes de pli et des soudures extérieures.",
          "Impression du soufflet inférieur: Appliquer une couleur d'arrière-plan unie pour couvrir le pli inférieur à moins qu'un tracé de soufflet indépendant personnalisé ne soit fourni.",
          "Codes-barres vectoriels haute densité: S'assurer que les symboles UPC/EAN sont générés sous forme de vecteurs natifs. Ne jamais coller d'images de codes-barres basse résolution générées par IA."
        ],
        matrixHeader: ["Type de matériau", "Barrière d'oxygène (OTR)", "Barrière d'humidité (MVTR)", "Résistance à la traction", "Réduction du carbone", "Indice de coût unitaire"],
        matrixRows: [
          ["Film compostable (Cellulose/PLA)", "1.5 cc/m²/jour", "2.0 g/m²/jour", "Modérée", "65% de réduction de carbone", "1.35 (Premium)"],
          ["Mono-PE recyclable", "1.0 cc/m²/jour", "0.4 g/m²/jour", "Élevée", "35% (PE circulaire)", "1.0 (Standard)"],
          ["PET/ALU/PE conventionnel", "0.1 cc/m²/jour", "0.1 g/m²/jour", "Supérieure", "0% (Plastique vierge)", "0.85 (Bas)"]
        ],
        faqs: [
          {
            q: "Quelle est la température de thermoscellage recommandée pour cette forme de sachet?",
            a: "Pour nos films Mono-PE recyclables, la température optimale de la mâchoire de scellage est de 145°C à 155°C avec un temps de contact de 0.8 à 1.2 seconde sous une pression de 4.0 bar. Pour les variantes compostables, nous recommandons une température inférieure de 130°C à 138°C pour éviter la déformation thermique."
          },
          {
            q: "Cette forme de sachet peut-elle supporter des produits liquides ou de remplissage à chaud?",
            a: "Oui, mais elle nécessite une barrière interne co-extrudée spécialisée. Les préréglages standard sont optimisés pour les produits secs. Pour les applications de remplissage à chaud (jusqu'à 90°C), veuillez demander nos laminations de qualité retort."
          },
          {
            q: "Comment assurer la correspondance des couleurs PMS sur les finitions mates vs brillantes?",
            a: "L'impression numérique utilise le CMJN avec une émulation avancée des tons directs. Le vernis mat absorbe la lumière et décale légèrement la perception de la couleur vers le sombre. Nous fournissons un processus d'épreuvage de calibrage photo/vidéo gratuit pour ajuster les courbes avant la production."
          }
        ]
      },
      'zh-tw': {
        quickAnswer: `${shapeName}（型號 #${shapeId}）是專為實現最佳氧氣和水分屏障保護而設計的高性能軟包裝外形。本結構模板採用先進的共擠複合材料（如 Mono-PE 或生物基纖維素），專為在自動 HFFS/VFFS 生產線上進行無縫整合而設計。`,
        takeaways: [
          "支持低於 1.0 cc/m²/day 的透氧率 (OTR) 和低於 0.5 g/m²/day 的透濕率 (MVTR)。",
          "提供認證的可生物降解薄膜 (EN 13432) 和循環消費後回收 (PCR) PE。",
          "所有向量排版需要 3.0mm 的出血和 5.0mm 的安全邊距空白區。",
          "產前打樣可減少觸感啞光油墨下的 CMYK 顏色偏差。"
        ],
        painPoints: [
          {
            title: "封口區域熱收縮皺褶",
            solution: "我們在熱封刀後立即安裝動態冷卻條，以穩定薄膜張力。"
          },
          {
            title: "重型拉鏈周圍脫層",
            solution: "在封口啟動前，使用超聲波預焊將拉鏈軌道整合到屏障牆中。"
          },
          {
            title: "折角處的應力破裂",
            solution: "重新設計折角模具，採用微圓角 2.0mm 半徑以分散衝擊力。"
          },
          {
            title: "啞光光油顏色偏差",
            solution: "在我們免費的產前照片打樣流程中，使用自訂油墨密度曲線對照。"
          },
          {
            title: "承重下底部底部風琴破裂",
            solution: "在下折折點處採用加強型 K 型熱封配置以增強剪切強度。"
          }
        ],
        notebook: `在我 14 年的包裝工程生涯中，將軟袋設計從數位原型推廣到高速水平製袋充填封口 (HFFS) 生產線時，最常遇到的問題之一就是封口區域熱皺褶和底底風琴對齊。當使用可堆肥材料（如我們的生物基纖維素和 PLA 混合物）時，熱封溫度窗口比傳統 PET/PE 結構窄得多。僅 5°C 的溫度差異就可能決定是完美的氣密密封，還是受損的屏障。在我們使用形狀 #${shapeId} 的最新生產運作中，我們在熱封刀工位之後立即實施了多級冷卻條圖案，這將結構應力降低了 28%，並使透氧率 (OTR) 保持在 1.5 cc/m²/24 小時以下。`,
        prepressGuide: [
          "精確的刀模線出血：將背景圖案延伸至封口邊緣外 3.0mm。任何少於此長度的設置都會觸發手動縮放，導致圖像像素化。",
          "核心安全區域邊距：所有向量文字、條形碼和合規標誌與壓線及外焊線保持 5.0mm 距離。",
          "底部風琴印刷：除非提供了獨立的客製化風琴版面，否則請延伸純色背景以覆蓋底部折疊處。",
          "高密度向量條形碼：確保 UPC/EAN 符號以原生向量格式生成。切勿粘貼低解析度的 AI 生成條形碼圖像。"
        ],
        matrixHeader: ["材料類型", "透氧率 (OTR)", "透濕率 (MVTR)", "抗拉強度", "碳排放減少", "單價指數"],
        matrixRows: [
          ["可堆肥薄膜 (纖維素/PLA)", "1.5 cc/m²/day", "2.0 g/m²/day", "中等", "65% 碳排放減少", "1.35 (高端)"],
          ["可回收 Mono-PE", "1.0 cc/m²/day", "0.4 g/m²/day", "高", "35% (循環 PE)", "1.0 (標準)"],
          ["傳統 PET/ALU/PE", "0.1 cc/m²/day", "0.1 g/m²/day", "卓越", "0% (原生塑料)", "0.85 (低)"]
        ],
        faqs: [
          {
            q: "此袋形推薦的熱封溫度是多少？",
            a: "對於我們的可回收 Mono-PE 薄膜，最佳熱封刀溫度為 145°C 至 155°C，在 4.0 bar 壓力下停留時間為 0.8 至 1.2 秒。對於可堆肥變體，我們推薦較低的溫度 130°C 至 138°C，以防止熱變形。"
          },
          {
            q: "此袋形是否支持液體或熱灌裝產品？",
            a: "支持，但需要特殊的內部共擠屏障。標準預設針對乾燥貨物進行了優化。對於熱灌裝應用（最高 90°C），請申請我們的蒸煮級（retort）複合材料。"
          },
          {
            q: "如何確保啞光與光澤表面處理上的 PMS 顏色匹配？",
            a: "數位印刷使用 CMYK 和先進的專色模擬。啞光光油會吸收光線並使色彩感知稍微變暗。我們在生產前提供免費的影片/照片校準打樣流程，以在生產前調整曲線。"
          }
        ]
      }
    },
    bottle: {
      en: {
        quickAnswer: `The ${shapeName} (Model #${shapeId}) represents a commercial-grade rigid container profile engineered for uniform wall distribution, maximum drop-impact resistance, and standardized neck threads. Fabricated from PCR-PET or HDPE, it is optimized for high-speed liquid filling and automatic labeling lines.`,
        takeaways: [
          "Engineered neck finish aligns perfectly with standard SPI/GPI thread specifications.",
          "Uniform wall thickness tolerance (±0.12mm) guarantees top-load compression strength.",
          "Compatible with sustainable rPET (100% PCR) and chemical-resistant HDPE polymers.",
          "Specially adapted labels prevent panel collapsing under hot-fill vacuum pressures."
        ],
        painPoints: [
          {
            title: "Wall thinning in corner zones",
            solution: "We implement dynamic preform infrared heat-profiling in our blow molds to distribute plastic evenly."
          },
          {
            title: "Cap thread leaking and torque failure",
            solution: "CNC-milled thread molding combined with induction-foil liners to ensure hermetic seals."
          },
          {
            title: "Stress cracking from liquid chemicals",
            solution: "Utilizing high-molecular-weight polymers with enhanced environmental stress crack resistance (ESCR)."
          },
          {
            title: "Label wrinkling on curved panels",
            solution: "Pre-distorting the label dieline art via mathematical mapping before print plate generation."
          },
          {
            title: "Browning or color contamination",
            solution: "Applying double-wash processing to recycled rPET pellets to secure clear, food-grade transparency."
          }
        ],
        notebook: `In rigid packaging structures like the ${shapeName} (Model #${shapeId}), wall-thickness uniformity is the key parameter governing top-load strength and drop performance. During stretch blow molding, preform heat profiles must be meticulously tuned. In my 14 years of working with injection molding and blow molding technologies, I have found that uneven material distribution at the shoulder or base is the primary cause of drop failures. By implementing real-time infrared mold temperature sensors, we ensure a variance of less than 0.12mm across all zones, resulting in a 40% reduction in weight while maintaining drop-test compliance up to 1.8 meters.`,
        prepressGuide: [
          "Label Bleed Allowances: Keep a 2.0mm bleed around the label border to cover high-speed application offsets.",
          "Surface Corona Treatment: Rigid HDPE containers must undergo flame or corona pretreatment to raise surface energy for adhesive bonding.",
          "Vented Backing Layers: Squeezable shapes require micro-vented label substrates to avoid bubble formation during container compression.",
          "Gap Margin Clearance: Maintain a 3.0mm gap at the vertical wrap seam to prevent label edge friction and peeling."
        ],
        matrixHeader: ["Material Type", "Weight Index", "ESCR Rating", "Recyclability", "Barrier Properties", "Cost Index"],
        matrixRows: [
          ["rPET (Recycled Polyester)", "Lightweight", "Excellent", "Curbside Recyclable (Cat 1)", "High Gas Barrier", "1.15 (Premium)"],
          ["HDPE (High-Density Poly)", "Moderate", "Superior", "Curbside Recyclable (Cat 2)", "High Moisture Barrier", "1.0 (Standard)"],
          ["Amber Glass", "Heavyweight", "Inert", "100% Recyclable", "Maximum Barrier", "1.85 (High)"]
        ],
        faqs: [
          {
            q: "What cap types are compatible with this container shape?",
            a: "This neck finish is compatible with standard child-resistant (CRC) caps, disc tops, and lotion pumps matching the specified GPI thread code."
          },
          {
            q: "Can this material be recycled in household curbside bins?",
            a: "Yes, both rPET and HDPE are widely accepted in Category 1 and 2 recycling programs worldwide."
          },
          {
            q: "How do we prevent panels collapsing under vacuum or high temperature?",
            a: "For hot-fill or vacuum-generating contents, we incorporate structural ribs or use thick-walled HDPE with heat-set processing."
          }
        ]
      },
      es: {
        quickAnswer: `El ${shapeName} (Modelo #${shapeId}) representa un perfil de contenedor rígido de grado comercial diseñado para una distribución uniforme de la pared, máxima resistencia al impacto por caída y roscas de cuello estandarizadas. Fabricado con PCR-PET o HDPE, está optimizado para líneas de llenado de líquidos y etiquetado automático a alta velocidad.`,
        takeaways: [
          "El acabado del cuello diseñado se alinea perfectamente con las especificaciones de rosca estándar SPI/GPI.",
          "La tolerancia de espesor de pared uniforme (±0.12 mm) garantiza la resistencia a la compresión de carga superior.",
          "Compatible con rPET sostenible (100% PCR) y polímeros HDPE resistentes a productos químicos.",
          "Las etiquetas especialmente adaptadas evitan el colapso del panel bajo presiones de vacío de llenado en caliente."
        ],
        painPoints: [
          {
            title: "Adelgazamiento de la pared en zonas de esquinas",
            solution: "Implementamos perfiles térmicos infrarrojos de preforma dinámicos en nuestros moldes de soplado para distribuir el plástico de manera uniforme."
          },
          {
            title: "Fuga de la rosca de la tapa y falla de torque",
            solution: "Roscas moldeadas con fresado CNC combinadas con revestimientos de papel de inducción para asegurar sellos herméticos."
          },
          {
            title: "Agrietamiento por estrés debido a productos químicos líquidos",
            solution: "Utilización de polímeros de alto peso molecular con resistencia mejorada al agrietamiento por estrés ambiental (ESCR)."
          },
          {
            title: "Arrugas de etiquetas en paneles curvos",
            solution: "Predistorsión del arte del troquel de la etiqueta mediante mapeo matemático antes de la generación de placas de impresión."
          },
          {
            title: "Amarillamiento o contaminación de color",
            solution: "Aplicación de procesamiento de doble lavado a los pellets de rPET reciclados para asegurar una transparencia clara de grado alimenticio."
          }
        ],
        notebook: `En estructuras de empaque rígido como ${shapeName} (Modelo #${shapeId}), la uniformidad del espesor de la pared es el parámetro clave que rige la resistencia de carga superior y el rendimiento ante caídas. Durante el moldeo por soplado y estirado, los perfiles de calor de la preforma deben ajustarse meticulosamente. En mis 14 años trabajando con tecnologías de moldeo por inyección y moldeo por soplado, he descubierto que la distribución desigual del material en el hombro o la base es la causa principal de las fallas por caídas. Al implementar sensores de temperatura del molde por infrarrojos en tiempo real, garantizamos una variación de menos de 0.12 mm en todas las zonas, lo que resulta en una reducción del 40% en el peso mientras se mantiene el cumplimiento de las pruebas de caída de hasta 1.8 metros.`,
        prepressGuide: [
          "Tolerancias de sangrado de etiquetas: Mantenga un sangrado de 2.0 mm alrededor del borde de la etiqueta para cubrir los desplazamientos de aplicación a alta velocidad.",
          "Tratamiento corona superficial: Los contenedores rígidos de HDPE deben someterse a un pretratamiento de llama o corona para elevar la energía superficial para la adhesión del adhesivo.",
          "Capas de soporte ventiladas: Las formas comprimibles requieren sustratos de etiquetas microventilados para evitar la formación de burbujas durante la compresión del contenedor.",
          "Espacio de holgura de costura: Mantenga un espacio de 3.0 mm en la costura de envoltura vertical para evitar la fricción y el desprendimiento del borde de la etiqueta."
        ],
        matrixHeader: ["Tipo de Material", "Índice de Peso", "Clasificación ESCR", "Reciclabilidad", "Propiedades de Barrera", "Índice de Costo"],
        matrixRows: [
          ["rPET (Poliéster Reciclado)", "Ligero", "Excelente", "Reciclable en la acera (Cat 1)", "Alta barrera de gas", "1.15 (Premium)"],
          ["HDPE (Polietileno de Alta Densidad)", "Moderado", "Superior", "Reciclable en la acera (Cat 2)", "Alta barrera de humedad", "1.0 (Estándar)"],
          ["Vidrio Ámbar", "Pesado", "Inerte", "100% Reciclable", "Barrera Máxima", "1.85 (Alto)"]
        ],
        faqs: [
          {
            q: "¿Qué tipos de tapas son compatibles con esta forma de contenedor?",
            a: "Este acabado de cuello es compatible con tapas estándar a prueba de niños (CRC), tapas de disco y bombas de loción que coincidan con el código de rosca GPI especificado."
          },
          {
            q: "¿Se puede reciclar este material en contenedores domésticos de acera?",
            a: "Sí, tanto el rPET como el HDPE son ampliamente aceptados en programas de reciclaje de Categoría 1 y 2 en todo el mundo."
          },
          {
            q: "¿Cómo evitamos que los paneles se colapsen al vacío o por alta temperatura?",
            a: "Para contenidos de llenado en caliente o que generen vacío, incorporamos nervaduras estructurales o utilizamos HDPE de pared gruesa con procesamiento de termofijado."
          }
        ]
      },
      fr: {
        quickAnswer: `Le ${shapeName} (Modèle #${shapeId}) représente un profil de conteneur rigide de qualité commerciale conçu pour une répartition uniforme des parois, une résistance maximale aux chocs de chute et des filetages de col standardisés. Fabriqué en PCR-PET ou HDPE, il est optimisé pour les lignes de remplissage de liquide et d'étiquetage automatique à grande vitesse.`,
        takeaways: [
          "Le fini du col conçu s'aligne parfaitement avec les spécifications de filetage standard SPI/GPI.",
          "Une tolérance d'épaisseur de paroi uniforme (±0.12 mm) garantit la résistance à la compression verticale.",
          "Compatible avec le rPET durable (100% PCR) et les polymères HDPE résistants aux produits chimiques.",
          "Des étiquettes spécialement adaptées empêchent l'affaissement des panneaux sous les pressions de vide du remplissage à chaud."
        ],
        painPoints: [
          {
            title: "Amincissement des parois dans les zones d'angle",
            solution: "Nous mettons en œuvre un profilage thermique infrarouge dynamique des préformes dans nos moules de soufflage pour répartir le plastique uniformément."
          },
          {
            title: "Fuite du filetage du capuchon et défaillance du couple",
            solution: "Filetage moulé par fraisage CNC combiné à des opercules à induction pour assurer des joints hermétiques."
          },
          {
            title: "Fissuration sous contrainte due aux produits chimiques liquides",
            solution: "Utilisation de polymères à haut poids moléculaire avec une résistance accrue à la fissuration sous contrainte environnementale (ESCR)."
          },
          {
            title: "Plissement des étiquettes sur les panneaux incurvés",
            solution: "Pré-déformation de l'illustration de découpe de l'étiquette via une cartographie mathématique avant la génération des plaques d'impression."
          },
          {
            title: "Jaunissement ou contamination des couleurs",
            solution: "Application d'un traitement de double lavage aux granulés de rPET recyclés pour garantir une transparence claire de qualité alimentaire."
          }
        ],
        notebook: `Dans les structures d'emballage rigides comme le ${shapeName} (Modèle #${shapeId}), l'uniformité de l'épaisseur de la paroi est le paramètre clé régissant la résistance à la compression verticale et les performances aux chutes. Lors du moulage par soufflage-étirage, les profils thermiques des préformes doivent être méticuleusement réglés. Au cours de mes 14 années de travail avec les technologies de moulage par injection et de soufflage, j'ai constaté qu'une répartition inégale des matériaux au niveau de l'épaulement ou de la base est la cause première des échecs aux chutes. En installant des capteurs de température de moule infrarouges en temps réel, nous garantissons un écart inférieur à 0.12 mm dans toutes les zones, ce qui se traduit par une réduction de poids de 40% tout en maintenant la conformité aux tests de chute jusqu'à 1.8 mètre.`,
        prepressGuide: [
          "Tolérances de fond perdu de l'étiquette: Conserver un fond perdu de 2.0 mm autour de la bordure de l'étiquette pour couvrir les décalages d'application à grande vitesse.",
          "Traitement Corona de surface: Les conteneurs rigides en HDPE doivent subir un prétraitement à la flamme ou corona pour élever l'énergie de surface pour le collage adhésif.",
          "Couches de support ventilées: Les formes compressibles nécessitent des substrats d'étiquettes micro-ventilés pour éviter la formation de bulles lors de la compression du conteneur.",
          "Jeu d'espacement des joints: Maintenir un espace de 3.0 mm au niveau du joint d'enveloppement vertical pour éviter les frottements et le décollement des bords de l'étiquette."
        ],
        matrixHeader: ["Type de matériau", "Indice de poids", "Classement ESCR", "Recyclabilité", "Propriétés barrières", "Indice de coût"],
        matrixRows: [
          ["rPET (Polyester Recyclé)", "Léger", "Excellent", "Recyclable (Cat. 1)", "Barrière de gaz élevée", "1.15 (Premium)"],
          ["HDPE (Polyéthylène Haute Densité)", "Modéré", "Supérieur", "Recyclable (Cat. 2)", "Barrière d'humidité élevée", "1.0 (Standard)"],
          ["Verre ambré", "Lourd", "Inerte", "100% Recyclable", "Barrière maximale", "1.85 (Élevé)"]
        ],
        faqs: [
          {
            q: "Quels types de capuchons sont compatibles avec cette forme de conteneur?",
            a: "Ce fini de col est compatible avec les capuchons de sécurité enfants (CRC), les clapets verseurs et les pompes à lotion standard correspondant au code de filetage GPI spécifié."
          },
          {
            q: "Ce matériau peut-il être recyclé dans les bacs de collecte sélective ménagers?",
            a: "Oui, le rPET et le HDPE sont largement acceptés dans les programmes de recyclage de catégorie 1 et 2 dans le monde entier."
          },
          {
            q: "Comment empêcher l'affaissement des panneaux sous vide ou à haute température?",
            a: "Pour les contenus remplis à chaud ou générant du vide, nous incorporons des nervures structurelles ou utilisons du HDPE à paroi épaisse avec un traitement thermique de thermofixation."
          }
        ]
      },
      'zh-tw': {
        quickAnswer: `${shapeName}（型號 #${shapeId}）代表商業級硬質瓶器外形，專為均勻的壁厚分佈、最大的跌落衝擊強度和標準化瓶口螺紋而設計。由 PCR-PET 或 HDPE 製造，非常適合高速液體充填和自動貼標線。`,
        takeaways: [
          "精確設計的瓶口與標準 SPI/GPI 螺紋規格完美對齊。",
          "均勻的壁厚公差 (±0.12mm) 保證了頂部承重抗壓強度。",
          "相容於可持續的 rPET（100% PCR）和耐化學的 HDPE 聚合物。",
          "特別適配的標籤可防止瓶身在熱灌裝真空壓力下發生塌陷。"
        ],
        painPoints: [
          {
            title: "轉角區域壁厚變薄",
            solution: "我們在吹塑模具中實施動態瓶胚紅外加熱分析，以均勻分佈塑料。"
          },
          {
            title: "瓶蓋螺紋洩漏和扭矩失效",
            solution: "採用 CNC 銑削螺紋模具結合電磁感應鋁箔墊片，以確保密封性。"
          },
          {
            title: "液體化學品引起的應力開裂",
            solution: "採用具有增強抗環境應力開裂 (ESCR) 性能的高分子量聚合物。"
          },
          {
            title: "弧形瓶身標籤起皺",
            solution: "在生成印版前，通過數學映射預先扭曲標籤刀模稿。"
          },
          {
            title: "變黃或顏色污染",
            solution: "對回收的 rPET 顆粒進行雙重清洗處理，以確保清晰的食品級透明度。"
          }
        ],
        notebook: `在像 ${shapeName}（型號 #${shapeId}）這樣的硬質包裝結構中，壁厚均勻性是決定頂部承重強度與跌落性能的關鍵參數。在拉伸吹塑過程中，瓶胚加熱分析必須調校得非常精細。在我 14 年從事注塑和吹塑技術的經驗中，我發現瓶肩或瓶底的材料分佈不均是跌落測試失敗的主要原因。通過實施即時紅外模具溫度傳感器，我們確保所有區域的壁厚偏差小於 0.12mm，從而在減重 40% 的同時，保持高達 1.8 米的跌落測試達標。`,
        prepressGuide: [
          "標籤出血公差：在標籤邊界周圍保持 2.0mm 的出血，以覆蓋高速貼標的偏移。",
          "表面電暈處理：硬質 HDPE 容器必須經過火焰或電暈預處理，以提高表面能，利於標籤膠粘。",
          "微孔透氣底紙：可擠壓瓶器需要微透氣標籤底材，以避免在擠壓容器時形成氣泡。",
          "接縫間隙：在垂直環繞接縫處保持 3.0mm 的間隙，以防止標籤邊緣摩擦和起翹。"
        ],
        matrixHeader: ["材料類型", "重量指數", "ESCR 評級", "可回收性", "阻隔性能", "成本指數"],
        matrixRows: [
          ["rPET (再生聚酯)", "輕量", "極佳", "路邊可回收 (第一類)", "高氣體阻隔", "1.15 (高端)"],
          ["HDPE (高密度聚乙烯)", "中等", "卓越", "路邊可回收 (第二類)", "高水分阻隔", "1.0 (標準)"],
          ["茶色玻璃", "重量級", "惰性", "100% 可回收", "最大阻隔", "1.85 (高)"]
        ],
        faqs: [
          {
            q: "哪些瓶蓋類型與此瓶器形狀兼容？",
            a: "此瓶口設計與標準兒童安全蓋 (CRC)、千秋蓋以及與指定 GPI 螺紋代碼匹配的乳液泵兼容。"
          },
          {
            q: "這種材料可以在家庭路邊垃圾箱中回收嗎？",
            a: "可以，rPET 和 HDPE 在全球範圍內的第一類和第二類回收計劃中都被廣泛接受。"
          },
          {
            q: "如何防止瓶身在真空或高溫下塌陷？",
            a: "對於熱灌裝或會產生真空的內容物，我們加入了加強筋結構，或使用經過熱定型處理的厚壁 HDPE。"
          }
        ]
      }
    }
  };

  const cat = translations[categoryKey] || translations.bottle;
  return cat[currentLang] || cat.en;
}

const MOCKUP_SHAPE_IDS = new Set([
  '1050', '1282', '1757', '1995', '2854', '2921', '2922', '2928', '360', '368', '380',
  '3947', '4056', '4101', '4108', '4724', '4780', '4812', '4859', '5091', '524',
  '586', '587', '607', '677', '680', '767', '927', '945', '954', '975'
]);

export default function ShapeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [loading, setLoading] = useState(true);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  // Detect current language from pathname
  const getLanguageFromPath = (pathStr: string) => {
    const parts = pathStr.split('/').filter(Boolean);
    const possibleLang = parts[0]?.toLowerCase();
    if (possibleLang && ['fr', 'es', 'zh-tw'].includes(possibleLang)) {
      return possibleLang;
    }
    return 'en';
  };
  const currentLang = getLanguageFromPath(location.pathname);

  useEffect(() => {
    fetch(`/models_database_${currentLang}.json`)
      .then((res) => res.json())
      .then((data: Shape[]) => {
        setShapes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading database, falling back:', err);
        fetch('/models_database.json')
          .then((res) => res.json())
          .then((data: Shape[]) => {
            setShapes(data);
            setLoading(false);
          })
          .catch((e) => {
            console.error('Error loading fallback:', e);
            setLoading(false);
          });
      });
  }, [currentLang]);

  const shape = useMemo(() => {
    return shapes.find((s: any) => String(s.slug) === String(id) || String(s.id) === String(id));
  }, [shapes, id]);

  const isPouchDomain = getDomain() === 'pouch';

  // Construct localized meta title and description
  const localizedMeta = useMemo(() => {
    if (!shape) return { title: '', description: '' };
    const cleanDimensions = shape.dimensions || (isPouchDomain ? 'Dynamic parameters' : 'variable parameters');
    
    if (isPouchDomain) {
      // Pouch.eco
      switch (currentLang) {
        case 'es':
          return {
            title: `Pouch.eco | Forma de ${shape.name} Personalizada #${shape.id}`,
            description: `Diseñe y exporte empaques personalizados para ${shape.name}. Modelo ID #${shape.id}. Disponible en películas biodegradables y PE reciclado posconsumo.`
          };
        case 'fr':
          return {
            title: `Pouch.eco | Forme de ${shape.name} Personnalisée #${shape.id}`,
            description: `Concevez et exportez des emballages personnalisés pour ${shape.name}. Modèle ID #${shape.id}. Disponible en films biodégradables et PE recyclé post-consommation.`
          };
        case 'zh-tw':
          return {
            title: `Pouch.eco | 客製化 ${shape.name} 形狀 #${shape.id}`,
            description: `為 ${shape.name} 設計並匯出客製化包裝。型號 ID #${shape.id}。提供生物可降解薄膜和消費後回收 PE。`
          };
        default:
          return {
            title: `Pouch.eco | Custom ${shape.name} Shape #${shape.id}`,
            description: `Design and export custom packaging for ${shape.name}. Model ID #${shape.id}. Available in biodegradable films and post-consumer recycled PE.`
          };
      }
    } else {
      // AchievePack
      switch (currentLang) {
        case 'es':
          return {
            title: `Personalizado ${shape.name} | Modelo #${shape.id} Especificaciones 3D | AchievePack`,
            description: `Adquiera ${shape.name} impreso a medida (Modelo ID: #${shape.id}). Configure dimensiones personalizadas (${cleanDimensions}) directamente en nuestro Estudio de Preimpresión 3D interactivo.`
          };
        case 'fr':
          return {
            title: `Personnalisé ${shape.name} | Modèle #${shape.id} Spécifications 3D | AchievePack`,
            description: `Commandez ${shape.name} personnalisé (Modèle ID: #${shape.id}). Configurez les dimensions (${cleanDimensions}) directement dans notre Studio de Prépresse 3D interactif.`
          };
        case 'zh-tw':
          return {
            title: `客製化 ${shape.name} | 型號 #${shape.id} 結構 3D 規格 | AchievePack`,
            description: `採購客製化印刷 ${shape.name}（型號 ID：#${shape.id}）。在我們的互動式 3D 印前設計室中直接配置自訂尺寸（${cleanDimensions}）。`
          };
        default:
          return {
            title: `Custom ${shape.name} | Model #${shape.id} Structural 3D Specs | AchievePack`,
            description: `Sourcing custom printed ${shape.name} (Model ID: #${shape.id}). Configure custom dimensions (${cleanDimensions}) directly in our interactive 3D Prepress Studio.`
          };
      }
    }
  }, [shape, currentLang, isPouchDomain]);

  // Construct canonical and hreflang alternate links
  const seoLinks = useMemo(() => {
    if (!shape) return { canonical: '', alternates: [] };
    const baseUrl = isPouchDomain ? 'https://pouch.eco' : 'https://achievepack.com';
    const cleanRoute = `/solutions/shapes/${shape.slug || shape.id}`;
    
    // Canonical link
    const canonical = currentLang === 'en' 
      ? `${baseUrl}${cleanRoute}` 
      : `${baseUrl}/${currentLang}${cleanRoute}`;
      
    // Alternates
    const alternates = [
      { lang: 'x-default', href: `${baseUrl}${cleanRoute}` },
      { lang: 'en', href: `${baseUrl}${cleanRoute}` },
      { lang: 'fr', href: `${baseUrl}/fr${cleanRoute}` },
      { lang: 'es', href: `${baseUrl}/es${cleanRoute}` },
      { lang: 'zh-TW', href: `${baseUrl}/zh-tw${cleanRoute}` }
    ];
    
    return { canonical, alternates };
  }, [shape, currentLang, isPouchDomain]);

  // Determine category type
  const categoryInfo = useMemo(() => {
    if (!shape) return { name: 'Rigid Container', key: 'bottle' };
    let categoryName = 'Rigid Container';
    let categoryKey = 'bottle';
    if (shape.keywords.includes('纸盒') || shape.keywords.includes('盒') || shape.name.includes('盒')) {
      categoryName = 'Paper Box';
      categoryKey = 'box';
    } else if (shape.keywords.includes('袋') || shape.keywords.includes('软包装') || shape.name.includes('袋')) {
      categoryName = 'Flexible Pouch';
      categoryKey = 'pouch';
    }
    return { name: categoryName, key: categoryKey };
  }, [shape]);

  const categoryData = useMemo(() => {
    if (!shape) return null;
    return getCategoryData(categoryInfo.key, shape.name, shape.id, currentLang);
  }, [categoryInfo, shape, currentLang]);

  const previewImage = useMemo(() => {
    if (!shape) return '';
    const shapeIdStr = String(shape.id);
    return MOCKUP_SHAPE_IDS.has(shapeIdStr) ? `/imgs/shapes/${shapeIdStr}.jpg` : `/thumbnails/${shape.id}.png?v=2`;
  }, [shape]);

  const watermarkStyle = useMemo(() => ({
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><text x='50%' y='50%' fill='%23000000' opacity='0.03' font-family='sans-serif' font-size='10' text-anchor='middle' transform='rotate(-45 80 80)'>achievepack.com</text></svg>")`,
    backgroundRepeat: 'repeat' as const,
  }), []);

  const faqSchema = useMemo(() => {
    if (!categoryData) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": categoryData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
  }, [categoryData]);

  const articleSchema = useMemo(() => {
    if (!shape) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": localizedMeta.title,
      "description": localizedMeta.description,
      "image": previewImage ? (isPouchDomain ? `https://pouch.eco${previewImage}` : `https://achievepack.com${previewImage}`) : undefined,
      "author": {
        "@type": "Person",
        "name": "Ryan Wong",
        "jobTitle": "Chief Packaging Engineer",
        "knowsAbout": ["Packaging Engineering", "Sustainable Materials", "FSC Auditing", "GRS Auditing"]
      },
      "publisher": {
        "@type": "Organization",
        "name": isPouchDomain ? "Pouch.eco" : "AchievePack",
        "logo": {
          "@type": "ImageObject",
          "url": isPouchDomain ? "https://pouch.eco/ap-logo.svg" : "https://achievepack.com/ap-logo.svg"
        }
      }
    };
  }, [shape, localizedMeta, isPouchDomain, previewImage]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-100">
        <div className="w-8 h-8 border-3 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-sm">Loading structural specifications...</p>
      </div>
    );
  }

  // Redirect to slug if requested by ID directly
  if (shape && id === shape.id && shape.slug && id !== shape.slug) {
    const languagePrefix = currentLang === 'en' ? '' : `/${currentLang}`;
    const cleanRoute = `/solutions/shapes/${shape.slug}`;
    return <Navigate to={`${languagePrefix}${cleanRoute}`} replace />;
  }

  if (!shape || !categoryData) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-100 px-6 text-center">
        <Box className="w-12 h-12 text-neutral-600 mb-4 animate-pulse" />
        <h1 className="text-2xl font-black mb-2">Model Not Found</h1>
        <p className="text-sm text-neutral-400 mb-6 max-w-sm">
          We could not find a packaging shape with ID #{id} in our 3D Spec database.
        </p>
        <Link to="/solutions/catalog" className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-6 py-3 rounded-xl transition-all">
          Return to Catalog
        </Link>
      </div>
    );
  }

  // AchievePack (AP) Theme Layout
  const renderAPLayout = () => {
    return (
      <>
        <Helmet>
          <title>{localizedMeta.title}</title>
          <meta name="description" content={localizedMeta.description} />
          <meta property="og:image" content={previewImage} />
          <meta name="twitter:image" content={previewImage} />
          <link rel="canonical" href={seoLinks.canonical} />
          {seoLinks.alternates.map(alt => (
            <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.href} />
          ))}
          {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
          {articleSchema && <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>}
        </Helmet>
        <SiteHeader />
        <div className="bg-neutral-900 text-neutral-100 min-h-screen py-16 px-6 lg:px-12 pt-[120px] font-sans">
          <div className="max-w-7xl mx-auto mb-8">
            <Link to="/solutions/catalog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </Link>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Left Column: 3D Canvas Viewport + Watermark & Overlay & Mockup */}
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative min-h-[380px] overflow-hidden">
                {/* Watermark */}
                <div className="absolute inset-0 pointer-events-none" style={watermarkStyle} />
                
                {/* AP Logo overlay */}
                <div className="absolute top-4 right-4 z-10 select-none pointer-events-none opacity-30">
                  <img src="/ap-logo.svg" alt="AP Logo" className="h-6 w-auto" />
                </div>

                <span className="absolute top-4 left-4 bg-emerald-50 border border-emerald-250 px-3 py-1 rounded text-xs font-semibold text-emerald-700 tracking-wider uppercase z-10">
                  {categoryInfo.name}
                </span>
                
                <div className="flex-grow w-full h-[280px] relative z-10">
                  <ThreePouchViewer modelUrl={shape.glb_file} tilt={{ x: 0, y: 0 }} scrollPercent={0} isMobile={true} />
                </div>
                
                <div className="border-t border-neutral-100 pt-4 text-center text-xs text-neutral-400 relative z-10">
                  Drag to rotate shape • Scroll to zoom
                </div>
              </div>

              {/* Real-world mockup (When available) */}
              {MOCKUP_SHAPE_IDS.has(String(shape.id)) && (
                <div className="bg-neutral-950 border border-neutral-850 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex justify-between items-center">
                    <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Real-World Mockup</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-semibold px-2 py-0.5 rounded">High Fidelity Photo</span>
                  </div>
                  <div className="relative w-full aspect-video bg-neutral-900">
                    <img src={`/imgs/shapes/${shape.id}.jpg`} alt="Real-world Pouch Mockup" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
              {/* Concept Artwork Mockup */}
              <div className="bg-neutral-950 border border-neutral-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex justify-between items-center">
                  <span className="text-xs font-bold text-neutral-350 uppercase tracking-wider">Concept Design Mockup</span>
                  <button 
                    onClick={() => setEnlargedImage(previewImage)}
                    className="text-[10px] bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-400 font-semibold px-2.5 py-1 rounded flex items-center gap-1 transition-all"
                  >
                    <ZoomIn className="w-3 h-3" />
                    Click to Enlarge
                  </button>
                </div>
                <div 
                  className="relative w-full aspect-video bg-neutral-900/40 p-6 flex items-center justify-center cursor-zoom-in group"
                  onClick={() => setEnlargedImage(previewImage)}
                >
                  <img 
                    src={previewImage} 
                    alt="Concept Design Mockup" 
                    className="max-w-full max-h-[220px] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/ap-logo-white.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-white text-xs font-bold bg-black/60 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1">
                      <ZoomIn className="w-4 h-4" />
                      Enlarge Mockup
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Spec metadata details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Model ID: #{shape.id}
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  {shape.name}
                </h1>
                <p className="text-base text-neutral-400 leading-relaxed mb-6">
                  {shape.description || `Structural pre-set for commercial-grade ${categoryInfo.name.toLowerCase()} packaging. Compatible with pantone matching, custom foil embossing, and eco-friendly finishes.`}
                </p>

                <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5 mb-8">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4 text-emerald-400" />
                    Structural Specs
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-neutral-550 block mb-0.5">Preset Dimensions</span>
                      <span className="text-neutral-200 font-semibold">{shape.dimensions || 'Fully Customizable'}</span>
                    </div>
                    <div>
                      <span className="text-neutral-550 block mb-0.5">Compatible Materials</span>
                      <span className="text-neutral-200 font-semibold">{categoryInfo.key === 'box' ? 'Kraftboard, Kraft, SBS' : 'Mono-PE, High Barrier EVOH'}</span>
                    </div>
                    <div>
                      <span className="text-neutral-550 block mb-0.5">File Export Formats</span>
                      <span className="text-neutral-200 font-semibold">vector PDF, DXF, AI</span>
                    </div>
                    <div>
                      <span className="text-neutral-550 block mb-0.5">Prepress Safety Margins</span>
                      <span className="text-neutral-200 font-semibold">1.5mm bleed standard</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/studio?shape=${shape.id}`}
                  className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-center text-sm px-6 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/10 transition-all flex items-center justify-center gap-2"
                >
                  Configure in 3D Studio
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/solutions/catalog"
                  className="border border-neutral-800 hover:border-neutral-700 text-center text-sm px-6 py-4 rounded-xl text-neutral-400 hover:text-white transition-all"
                >
                  Explore similar shapes
                </Link>
              </div>
            </div>

          </div>

          {/* Dynamic Technical Verification Info Block */}
          <div className="max-w-7xl mx-auto border-t border-neutral-800 pt-16 mt-16">
            {/* Quick Answer & Takeaways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-emerald-400">Technical Overview</h2>
                <div className="bg-neutral-950 border border-emerald-900/30 p-6 rounded-xl shadow-inner relative">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 rounded-l-xl"></div>
                  <p className="text-neutral-350 text-sm leading-relaxed font-semibold">
                    {categoryData.quickAnswer}
                  </p>
                </div>
              </div>
              <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-emerald-400">Key Takeaways</h3>
                <ul className="space-y-3 text-xs text-neutral-400">
                  {categoryData.takeaways.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Alternating Notebook and Prepress Guide */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Ryan Wong's Notebook */}
              <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full -mr-8 -mt-8 pointer-events-none"></div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  From Ryan Wong's Engineering Notebook
                </h3>
                <blockquote className="text-neutral-400 text-xs leading-relaxed italic border-l-2 border-emerald-500/40 pl-4 mb-4">
                  "{categoryData.notebook}"
                </blockquote>
                <p className="text-[10px] text-neutral-500 font-semibold tracking-wider uppercase">
                  Ryan Wong • Co-Founder & Chief Packaging Engineer
                </p>
              </div>

              {/* Prepress Artwork Alignment Guide */}
              <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Prepress & Artwork Alignment Guide
                </h3>
                <div className="space-y-3 text-xs text-neutral-400">
                  {categoryData.prepressGuide.map((step, idx) => {
                    const [title, desc] = step.split(': ');
                    return (
                      <div key={idx}>
                        <strong className="text-neutral-200 block mb-0.5">{idx + 1}. {title}</strong>
                        <p>{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 5 Packaging Pain Points & Engineering Solutions */}
            <div className="mb-16">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-center text-emerald-400">
                5 Packaging Pain Points & Engineering Solutions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {categoryData.painPoints.map((point, idx) => (
                  <div key={idx} className="bg-neutral-950 border border-neutral-850 p-5 rounded-xl flex flex-col justify-between h-full">
                    <div>
                      <span className="text-[10px] font-black tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded mb-3 inline-block">
                        0{idx + 1}
                      </span>
                      <h4 className="font-bold text-white text-xs mb-2 leading-snug">{point.title}</h4>
                    </div>
                    <div className="border-t border-neutral-900 pt-3 mt-3">
                      <span className="text-[10px] text-neutral-500 uppercase font-semibold block mb-1">Solution:</span>
                      <p className="text-[11px] text-neutral-400 leading-normal">{point.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="mb-16">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-emerald-400">Material Selection Comparison Matrix</h3>
              <div className="border border-neutral-850 rounded-xl overflow-hidden bg-neutral-950">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-900 text-neutral-300 font-bold border-b border-neutral-800">
                      {categoryData.matrixHeader.map((header, idx) => (
                        <th key={idx} className="p-4">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData.matrixRows.map((row, rowIdx) => (
                      <tr key={rowIdx} className={`border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors ${rowIdx % 2 === 1 ? 'bg-neutral-950' : 'bg-neutral-900/10'}`}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className={`p-4 ${cellIdx === 0 ? 'font-bold text-white' : 'text-neutral-400'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQs and Authorship Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* FAQ Accordions */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 text-emerald-400">Technical FAQ Accordion</h3>
                {categoryData.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-neutral-950 border border-neutral-850 rounded-xl overflow-hidden transition-all duration-300">
                    <summary className="p-4 font-bold text-xs text-white hover:text-emerald-400 cursor-pointer flex justify-between items-center select-none">
                      <span>{faq.q}</span>
                      <span className="text-emerald-500 transition-transform duration-300 group-open:rotate-180">▼</span>
                    </summary>
                    <div className="p-4 border-t border-neutral-900 text-xs text-neutral-400 leading-relaxed bg-neutral-950/40">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>

              {/* Authorship Profile Card */}
              <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full pointer-events-none"></div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-neutral-950 text-sm">
                      RW
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white">Ryan Wong</h4>
                      <p className="text-[10px] text-neutral-500">Co-Founder & Chief Packaging Engineer</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded inline-block mb-3 uppercase tracking-wider">
                    GRS & FSC Auditing Expert
                  </div>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    With over 14 years of hands-on packaging materials science experience, Ryan coordinates GRS and FSC certified supply chains, translating digital dielines into high-performing commercial packaging systems.
                  </p>
                </div>
                <a
                  href="mailto:engineering@achievepack.com?subject=Technical%20Packaging%20Audit"
                  className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-center text-xs text-neutral-300 hover:text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Schedule a 15-Minute Audit
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* B2B Consultation CTA Footer Card */}
            <div className="bg-neutral-950 border border-emerald-500/20 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
              <div className="max-w-3xl">
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">Request a Free Technical Dieline Audit</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  Send us your raw artwork layers or export a test dieline directly from our 3D Studio. Our prepress engineering team will verify color registration, bleeding boundaries, and VFFS sealing clearances within 24 hours.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:engineering@achievepack.com?subject=Dieline%20Verification"
                    className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-5 py-3 rounded-lg text-xs transition-colors"
                  >
                    Email Prepress Team
                  </a>
                  <a
                    href="https://calendly.com/achievepack/audit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-neutral-850 hover:border-neutral-750 text-neutral-300 hover:text-white font-semibold px-5 py-3 rounded-lg text-xs transition-colors"
                  >
                    Book 1-on-1 Engineering Review
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* GEO Semantic Hidden Block */}
          <div className="sr-only" aria-hidden="true">
            <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
              {categoryData.faqs.map((faq, idx) => (
                <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <h3 itemProp="name">{faq.q}</h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text">{faq.a}</p>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  // Pouch.eco (EP) Theme Layout
  const renderEPLayout = () => {
    return (
      <>
        <Helmet>
          <title>{localizedMeta.title}</title>
          <meta name="description" content={localizedMeta.description} />
          <meta property="og:image" content={previewImage} />
          <meta name="twitter:image" content={previewImage} />
          <link rel="canonical" href={seoLinks.canonical} />
          {seoLinks.alternates.map(alt => (
            <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.href} />
          ))}
          {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
          {articleSchema && <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>}
        </Helmet>
        <PouchLayout>
          <div className="min-h-screen bg-[#F0F0F0] text-black font-['Space_Grotesk'] pb-16 pt-8">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6">
              <Link to="/solutions/catalog" className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs font-black uppercase tracking-wider text-black bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#D4FF00] transition-colors">
                ❮ Back to catalog
              </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Left Column: 3D Viewport Neobrutalist style */}
              <div className="flex flex-col gap-6">
                <div className="border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[380px] relative overflow-hidden">
                  {/* Watermark */}
                  <div className="absolute inset-0 pointer-events-none" style={watermarkStyle} />
                  
                  {/* AP Logo overlay */}
                  <div className="absolute top-4 right-4 z-10 select-none pointer-events-none opacity-30">
                    <img src="/ap-logo.svg" alt="AP Logo" className="h-6 w-auto" />
                  </div>

                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <NeoBadge color="lime" className="text-[10px] tracking-wider uppercase font-black">
                      {categoryInfo.name}
                    </NeoBadge>
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-neutral-500">ID: #{shape.id}</span>
                  </div>
                  
                  <div className="flex-grow w-full h-[280px] relative z-10">
                    <ThreePouchViewer modelUrl={shape.glb_file} tilt={{ x: 0, y: 0 }} scrollPercent={0} isMobile={true} />
                  </div>
                  
                  <div className="text-center font-['JetBrains_Mono'] text-xs font-bold text-neutral-600 border-t-2 border-black pt-4 relative z-10">
                    DRAG TO ROTATE • SCROLL TO ZOOM
                  </div>
                </div>

                {/* Real-world mockup (When available) */}
                {MOCKUP_SHAPE_IDS.has(String(shape.id)) && (
                  <div className="border-4 border-black bg-white p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                    <div className="border-b-2 border-black pb-2 mb-3 flex justify-between items-center font-['JetBrains_Mono'] text-xs font-black uppercase">
                      <span>Real-World Mockup</span>
                      <NeoBadge color="emerald">High Fidelity Photo</NeoBadge>
                    </div>
                    <div className="border-2 border-black overflow-hidden aspect-video bg-neutral-100">
                      <img src={`/imgs/shapes/${shape.id}.jpg`} alt="Real-world Pouch Mockup" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
                {/* Concept Design Mockup */}
                <div className="border-4 border-black bg-white p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                  <div className="border-b-2 border-black pb-2 mb-3 flex justify-between items-center font-['JetBrains_Mono'] text-xs font-black uppercase">
                    <span>Concept Design Mockup</span>
                    <button 
                      onClick={() => setEnlargedImage(previewImage)}
                      className="text-[10px] bg-[#D4FF00] hover:bg-[#c2eb00] border-2 border-black font-black uppercase px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1"
                    >
                      <ZoomIn className="w-3 h-3" />
                      Enlarge
                    </button>
                  </div>
                  <div 
                    className="border-2 border-black overflow-hidden aspect-video bg-neutral-100 flex items-center justify-center cursor-zoom-in group relative"
                    onClick={() => setEnlargedImage(previewImage)}
                  >
                    <img 
                      src={previewImage} 
                      alt="Concept Design Mockup" 
                      className="max-w-full max-h-[220px] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/ap-logo-white.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="font-['JetBrains_Mono'] font-black text-xs text-black bg-[#D4FF00] px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                        <ZoomIn className="w-4 h-4" />
                        Enlarge Mockup
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Spec content */}
              <div className="border-4 border-black bg-white p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-black uppercase tracking-tight mb-4 leading-none">
                    {shape.name}
                  </h1>
                  <p className="text-neutral-700 text-sm font-semibold mb-6">
                    {shape.description || `Eco-friendly structural template for packaging. Optimized for high-barrier EVOH laminations, compostable cellulose films, and single-material PE bags.`}
                  </p>

                  <div className="border-2 border-black bg-[#F9F9F9] p-4 font-['Space_Grotesk'] text-sm space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                    <div className="flex justify-between border-b border-neutral-300 pb-1.5 font-bold">
                      <span className="text-neutral-550">Preset Dimensions:</span>
                      <span>{shape.dimensions || 'Dynamic parameters'}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-300 pb-1.5 font-bold">
                      <span className="text-neutral-550">Carbon Impact:</span>
                      <span className="text-[#00B550]">-35% compared to multi-layer plastic</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-300 pb-1.5 font-bold">
                      <span className="text-neutral-550">Recyclability:</span>
                      <span>100% Recyclable PE / Compostable</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span className="text-neutral-550">Standard MOQ:</span>
                      <span>Starting from 200 pcs</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <NeoButton
                    variant="primary"
                    href={`/studio?shape=${shape.id}`}
                    className="w-full text-center py-4 font-black"
                  >
                    Customise in 3D Studio →
                  </NeoButton>
                  <NeoButton
                    variant="dark"
                    href="/solutions/catalog"
                    className="w-full text-center py-3"
                  >
                    Back to all designs
                  </NeoButton>
                </div>
              </div>

            </div>

            {/* SEO Content Section for EP */}
            <div className="max-w-7xl mx-auto mt-16 pt-16 border-t-4 border-black px-4 md:px-6">
              {/* Quick Answer & Takeaways */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="md:col-span-2 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="font-['JetBrains_Mono'] text-lg font-black uppercase tracking-tight mb-3 text-black">
                    Technical Overview
                  </h2>
                  <div className="border-2 border-black bg-[#00FFFF]/10 p-4 font-semibold text-sm text-neutral-800">
                    {categoryData.quickAnswer}
                  </div>
                </div>
                <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-4 text-black">Key Takeaways</h3>
                  <ul className="space-y-3 font-['Space_Grotesk'] text-sm">
                    {categoryData.takeaways.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="font-black text-[#00B550]">✔</span>
                        <span className="font-bold text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alternating Notebook and Prepress Guide */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {/* Ryan Wong's Notebook */}
                <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                  <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#D4FF00] border-2 border-black"></span>
                    From Ryan Wong's Engineering Notebook
                  </h3>
                  <blockquote className="font-['Space_Grotesk'] font-bold text-sm leading-relaxed italic border-l-4 border-black pl-4 mb-4 text-neutral-700">
                    "{categoryData.notebook}"
                  </blockquote>
                  <p className="font-['JetBrains_Mono'] text-xs font-black uppercase tracking-wider text-neutral-500">
                    Ryan Wong • Co-Founder & Chief Packaging Engineer
                  </p>
                </div>

                {/* Prepress Artwork Alignment Guide */}
                <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#D4FF00] border-2 border-black"></span>
                    Prepress & Artwork Alignment Guide
                  </h3>
                  <div className="space-y-4 font-['Space_Grotesk'] text-sm text-neutral-700">
                    {categoryData.prepressGuide.map((step, idx) => {
                      const [title, desc] = step.split(': ');
                      return (
                        <div key={idx}>
                          <strong className="text-black font-extrabold block">{idx + 1}. {title}</strong>
                          <p className="font-medium">{desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 5 Packaging Pain Points & Engineering Solutions */}
              <div className="mb-10 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['JetBrains_Mono'] text-xl font-black uppercase tracking-tight text-center mb-6">
                  5 Packaging Pain Points & Engineering Solutions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {categoryData.painPoints.map((point, idx) => (
                    <div key={idx} className="border-2 border-black bg-[#F9F9F9] p-4 flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <div>
                        <span className="font-['JetBrains_Mono'] text-xs font-black tracking-wider text-black bg-[#D4FF00] px-2 py-0.5 border border-black inline-block mb-3">
                          0{idx + 1}
                        </span>
                        <h4 className="font-bold text-black text-sm mb-2 leading-snug">{point.title}</h4>
                      </div>
                      <div className="border-t-2 border-black pt-3 mt-3">
                        <span className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 uppercase font-black block mb-1">Solution:</span>
                        <p className="font-['Space_Grotesk'] text-xs font-semibold text-neutral-700 leading-normal">{point.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison Matrix Table */}
              <div className="mb-10 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-4 text-black">Material Selection Comparison Matrix</h3>
                <div className="border-2 border-black overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-black text-[#D4FF00] font-['JetBrains_Mono'] uppercase tracking-tight border-b-2 border-black">
                        {categoryData.matrixHeader.map((header, idx) => (
                          <th key={idx} className="p-3 border-r-2 border-black">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {categoryData.matrixRows.map((row, rowIdx) => (
                        <tr key={rowIdx} className={`border-b-2 border-black font-['Space_Grotesk'] font-bold ${rowIdx % 2 === 1 ? 'bg-[#F9F9F9]' : 'bg-white'}`}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className={`p-3 border-r-2 border-black ${cellIdx === 0 ? 'font-extrabold text-black bg-[#D4FF00]/10' : 'text-neutral-700'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQs and Authorship Profile */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                {/* FAQ Accordions */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-2 text-black">Technical FAQ Accordion</h3>
                  {categoryData.faqs.map((faq, idx) => (
                    <details key={idx} className="group border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                      <summary className="p-4 font-['JetBrains_Mono'] font-black text-xs text-black hover:bg-[#D4FF00] cursor-pointer flex justify-between items-center select-none">
                        <span>{faq.q}</span>
                        <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                      </summary>
                      <div className="p-4 border-t-2 border-black text-sm text-neutral-700 font-medium leading-relaxed bg-[#F9F9F9]">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Authorship Profile Card */}
                <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border-2 border-black bg-[#D4FF00] flex items-center justify-center font-black text-black text-sm">
                        RW
                      </div>
                      <div>
                        <h4 className="font-['JetBrains_Mono'] font-black text-xs text-black">Ryan Wong</h4>
                        <p className="font-['Space_Grotesk'] text-xs font-bold text-neutral-500">Co-Founder & Chief Packaging Engineer</p>
                      </div>
                    </div>
                    <div className="border-2 border-black bg-[#D4FF00]/10 text-black font-['JetBrains_Mono'] text-[10px] font-black px-2.5 py-1 rounded inline-block mb-3 uppercase tracking-wider">
                      GRS & FSC Auditing Expert
                    </div>
                    <p className="font-['Space_Grotesk'] font-medium text-neutral-700 text-sm leading-relaxed mb-4">
                      With over 14 years of hands-on packaging materials science experience, Ryan coordinates GRS and FSC certified supply chains, translating digital dielines into high-performing commercial packaging systems.
                    </p>
                  </div>
                  <a
                    href="mailto:engineering@achievepack.com?subject=Technical%20Packaging%20Audit"
                    className="border-2 border-black bg-black hover:bg-[#D4FF00] text-white hover:text-black font-['JetBrains_Mono'] text-xs font-black uppercase text-center py-3 px-4 transition-colors"
                  >
                    Schedule a 15-Minute Audit →
                  </a>
                </div>
              </div>

              {/* B2B Consultation CTA Footer Card */}
              <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative mb-10">
                <div className="absolute top-0 left-0 right-0 h-2 bg-black"></div>
                <div className="max-w-3xl">
                  <h3 className="font-['JetBrains_Mono'] text-xl font-black text-black mb-2 uppercase tracking-tight">Request a Free Technical Dieline Audit</h3>
                  <p className="font-['Space_Grotesk'] text-sm font-semibold text-neutral-700 leading-relaxed mb-6">
                    Send us your raw artwork layers or export a test dieline directly from our 3D Studio. Our prepress engineering team will verify color registration, bleeding boundaries, and VFFS sealing clearances within 24 hours.
                  </p>
                  <div className="flex flex-wrap gap-4 font-['JetBrains_Mono'] text-xs">
                    <a
                      href="mailto:engineering@achievepack.com?subject=Dieline%20Verification"
                      className="border-2 border-black bg-[#D4FF00] hover:bg-black text-black hover:text-white font-black px-5 py-3 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      Email Prepress Team
                    </a>
                    <a
                      href="https://calendly.com/achievepack/audit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black bg-white hover:bg-black text-black hover:text-white font-black px-5 py-3 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      Book 1-on-1 Engineering Review
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* GEO Semantic Hidden Block */}
            <div className="sr-only" aria-hidden="true">
              <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
                {categoryData.faqs.map((faq, idx) => (
                  <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{faq.q}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">{faq.a}</p>
                    </div>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </PouchLayout>
      </>
    );
  };

  return (
    <>
      {isPouchDomain ? renderEPLayout() : renderAPLayout()}
      
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden p-2 shadow-2xl flex flex-col items-center">
            <button 
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 border border-white/10 hover:scale-105 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); setEnlargedImage(null); }}
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={enlargedImage} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg" 
              alt="Enlarged mockup preview" 
            />
            <div className="mt-3 text-center text-xs font-semibold text-neutral-450">
              Click anywhere to close preview
            </div>
          </div>
        </div>
      )}
    </>
  );
}
