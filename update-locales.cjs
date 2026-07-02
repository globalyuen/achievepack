const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'es.json', 'fr.json', 'zh-TW.json'];

const getTranslationData = (lang) => {
  const data = {
    "pouchHeatSealing": {
      "author": {
        "credentials": lang === 'zh-TW' ? "14+年包裝工程 | GRS與FSC稽核專家" : lang === 'es' ? "14+ Años Ingeniería | Experto en GRS y FSC" : lang === 'fr' ? "14+ Ans Ingénierie | Expert GRS et FSC" : "14+ Years Packaging Engineering | GRS & FSC Auditing Expert",
        "bio": lang === 'zh-TW' ? "Ryan擁有理工材料科學背景，已協助超過500個全球品牌從原型測試擴展到工業立式包裝線。" : lang === 'es' ? "Con experiencia en ciencia de materiales, Ryan ha ayudado a más de 500 marcas globales a escalar desde prototipos hasta líneas de envasado industrial." : lang === 'fr' ? "Fort d'une expérience en science des matériaux, Ryan a aidé plus de 500 marques mondiales à passer des tests de prototypes aux lignes d'emballage industriel." : "With a background in polytechnic materials science, Ryan has helped over 500+ global brands scale from prototype testing to industrial vertical packaging lines.",
        "cta": lang === 'zh-TW' ? "提出問題" : lang === 'es' ? "Hacer una Pregunta" : lang === 'fr' ? "Poser une Question" : "Ask a Question"
      },
      "seo": {
        "title": lang === 'zh-TW' ? "熱封溫度設定與測試指南 | Achieve Pack" : lang === 'es' ? "Guía de Ajustes de Temperatura de Sellado Térmico | Achieve Pack" : lang === 'fr' ? "Guide des Paramètres de Température de Thermoscellage | Achieve Pack" : "Pouch Heat Sealing Temperature Settings & Testing Guide | Achieve Pack",
        "description": lang === 'zh-TW' ? "學習彈性包裝袋的確切溫度、壓力和停留時間設定。包含我們專家級的「條狀測試」方法，可避免材料浪費。" : lang === 'es' ? "Aprenda los ajustes exactos de temperatura, presión y tiempo de sellado para bolsas flexibles. Incluye nuestra prueba de tiras para evitar el desperdicio." : lang === 'fr' ? "Apprenez les réglages exacts de température, de pression et de temps pour sceller les sachets. Inclut notre test en bande pour éviter le gaspillage." : "Learn the exact temperature, pressure, and dwell time settings for sealing flexible packaging pouches. Includes our expert Strip Test method to prevent material waste.",
        "keywords": {
          "1": lang === 'zh-TW' ? "包裝袋熱封溫度" : lang === 'es' ? "Temperatura sellado térmico" : lang === 'fr' ? "Température de thermoscellage" : "Pouch Heat Sealing Temperature",
          "2": lang === 'zh-TW' ? "彈性包裝封口設定" : lang === 'es' ? "Ajustes de selladora flexible" : lang === 'fr' ? "Paramètres de scelleuse flexible" : "Flexible Packaging Sealer Settings",
          "3": lang === 'zh-TW' ? "如何在家封咖啡袋" : lang === 'es' ? "Cómo sellar bolsas de café en casa" : lang === 'fr' ? "Comment sceller des sacs de café chez soi" : "How to seal coffee bags at home",
          "4": lang === 'zh-TW' ? "熱封故障排除" : lang === 'es' ? "Solución de problemas de sellado" : lang === 'fr' ? "Dépannage du thermoscellage" : "Heat sealing troubleshooting",
          "5": lang === 'zh-TW' ? "最佳封口溫度" : lang === 'es' ? "Temperatura óptima de sellado" : lang === 'fr' ? "Température de scellage optimale" : "Optimal sealing temp for pouches"
        }
      },
      "hero": {
        "title": lang === 'zh-TW' ? "包裝袋熱封溫度設定" : lang === 'es' ? "Ajustes de Temperatura de Sellado Térmico" : lang === 'fr' ? "Réglages de Température de Thermoscellage" : "Pouch Heat Sealing Temperature Settings",
        "subtitle": lang === 'zh-TW' ? "停止猜測，開始封口。調整溫度、壓力和停留時間的終極工程指南。" : lang === 'es' ? "Deja de adivinar y empieza a sellar. La guía de ingeniería definitiva para calibrar." : lang === 'fr' ? "Arrêtez de deviner et commencez à sceller. Le guide d'ingénierie ultime pour calibrer." : "Stop guessing and start sealing. The ultimate engineering guide to calibrating temperature, pressure, and dwell time for flexible pouches."
      },
      "quickAnswer": lang === 'zh-TW' ? "大多數彈性包裝袋在滾輪封口機上的最低熱封溫度約為 160°C，停留時間 3 秒，壓力 40psi。然而這會因材料厚度而異。使用「條狀測試」以遞增方式找出您的最佳溫度。" : lang === 'es' ? "La temperatura mínima para la mayoría de las bolsas en una selladora de rodillos es de unos 160°C con un tiempo de 3 segundos y 40psi. Utilice la 'Prueba de Tiras' para encontrar su temperatura óptima." : lang === 'fr' ? "La température minimale pour la plupart des sachets sur une scelleuse à rouleaux est d'environ 160°C avec un temps de 3 secondes et 40psi. Utilisez le 'Test en Bande' pour trouver votre température optimale." : "The minimum heat sealing temperature for most flexible pouches on a roller sealing machine is around 160°C with a dwell time of 3 seconds and 40psi of pressure. However, this varies by material thickness. Use the 'Strip Test' to incrementally find your optimal temperature.",
      "sections": {
        "engineersLog": {
          "title": lang === 'zh-TW' ? "來自 Ryan Wong 的工程筆記" : lang === 'es' ? "Del Cuaderno de Ingeniería de Ryan Wong" : lang === 'fr' ? "Du Carnet d'Ingénieur de Ryan Wong" : "From Ryan Wong's Engineering Notebook",
          "badge": lang === 'zh-TW' ? "專家工程見解" : lang === 'es' ? "Perspectiva Experta" : lang === 'fr' ? "Aperçu d'Expert" : "Expert Engineering Insight",
          "p1": lang === 'zh-TW' ? "「在我14年的包裝設計生涯中，我看過無數品牌因為錯誤的溫度設定而為封口漏氣而苦惱。沒有所謂『一體適用』的溫度，因為這完全取決於機器類型和材料厚度。」" : lang === 'es' ? '"En mis 14 años, he visto a innumerables marcas luchar con sellos con fugas por ajustes incorrectos. No hay una temperatura \'única para todos\'."' : lang === 'fr' ? '"En 14 ans, j\'ai vu d\'innombrables marques lutter contre des fuites de joints à cause de mauvais réglages. Il n\'y a pas de température \'universelle\'."' : "\"In my 14 years in packaging design, I’ve seen countless brands struggle with leaky seals simply because of incorrect temperature settings. There is no 'one size fits all' temperature because it depends entirely on the machine and the material thickness.\"",
          "p2": lang === 'zh-TW' ? "「對於我們的標準工業滾輪封口機，我們通常會建立一個基準：<strong>3秒 / 40psi / 160°C</strong>。但在進行整批生產前，我總是要求我的團隊進行『條狀測試』，以避免浪費昂貴的印刷材料。」" : lang === 'es' ? '"Normalmente establecemos una línea base de <strong>3 segundos / 40psi / 160°C</strong>. Pero siempre requiero la \'Prueba de Tiras\'."' : lang === 'fr' ? '"Nous établissons généralement une base de <strong>3 secondes / 40psi / 160°C</strong>. Mais j\'exige toujours le \'Test en Bande\'."' : "\"For our standard industrial roller sealing machines, we typically establish a baseline of <strong>3 seconds / 40psi / 160°C</strong>. But before running a full batch, I always require my team to perform the 'Strip Test' to avoid wasting expensive printed stock.\""
        },
        "stripTest": {
          "title": lang === 'zh-TW' ? "如何進行「條狀測試」" : lang === 'es' ? "Cómo hacer la 'Prueba de Tiras'" : lang === 'fr' ? "Comment faire le 'Test en Bande'" : "How to Perform the 'Strip Test'",
          "intro": lang === 'zh-TW' ? "與其浪費整個袋子來測試單一溫度設定，最具成本效益的校準方法是<strong>條狀測試</strong>。您可以最大化測試表面積。" : lang === 'es' ? "En lugar de desperdiciar una bolsa entera, el método más rentable es la <strong>Prueba de Tiras</strong>." : lang === 'fr' ? "Au lieu de gaspiller un sachet entier, la méthode la plus rentable est le <strong>Test en Bande</strong>." : "Instead of wasting an entire bag to test a single temperature setting, the most cost-effective calibration method is the <strong>Strip Test</strong>. You can maximize your testing surface area.",
          "step1Badge": lang === 'zh-TW' ? "步驟 1" : lang === 'es' ? "Paso 1" : lang === 'fr' ? "Étape 1" : "Step 1",
          "step1Title": lang === 'zh-TW' ? "從低溫開始" : lang === 'es' ? "Empezar Bajo" : lang === 'fr' ? "Commencer Bas" : "Start Low",
          "step1Desc": lang === 'zh-TW' ? "將一個袋子橫向切成多個條狀。從150°C開始標記，每次增加5°C（155°C, 160°C, 165°C）。" : lang === 'es' ? "Corta una bolsa en tiras. Márcalas empezando a 150°C, aumentando de 5°C." : lang === 'fr' ? "Coupez un sachet en bandes. Marquez-les en commençant à 150°C, augmentant de 5°C." : "Cut one bag into multiple strips across the width. Mark them with a sharpie starting at 150°C, increasing by 5°C (155°C, 160°C, 165°C).",
          "step2Badge": lang === 'zh-TW' ? "步驟 2" : lang === 'es' ? "Paso 2" : lang === 'fr' ? "Étape 2" : "Step 2",
          "step2Title": lang === 'zh-TW' ? "遞增測試" : lang === 'es' ? "Prueba Incremental" : lang === 'fr' ? "Test Incrémental" : "Incremental Testing",
          "step2Desc": lang === 'zh-TW' ? "將每個條帶以指定溫度穿過機器。等待完全冷卻後再評估。" : lang === 'es' ? "Pasa cada tira por tu máquina a la temperatura designada. Espera a que se enfríe." : lang === 'fr' ? "Passez chaque bande dans votre machine à la température indiquée. Attendez qu'elle refroidisse." : "Run each strip through your machine at the designated temperature. Wait for it to cool down completely before evaluating.",
          "step3Badge": lang === 'zh-TW' ? "步驟 3" : lang === 'es' ? "Paso 3" : lang === 'fr' ? "Étape 3" : "Step 3",
          "step3Title": lang === 'zh-TW' ? "剝離強度測試" : lang === 'es' ? "Prueba de Fuerza de Despegue" : lang === 'fr' ? "Test de Force de Pelage" : "Peel Strength Test",
          "step3Desc": lang === 'zh-TW' ? "將封口的條帶拉開。當各層完全融合時，封口最理想。如果外部薄膜拉伸或融化，則溫度過高。" : lang === 'es' ? "Separa la tira sellada. El sello es óptimo cuando las capas se fusionan por completo." : lang === 'fr' ? "Séparez la bande scellée. Le sceau est optimal lorsque les couches fusionnent complètement." : "Pull the sealed strip apart. The seal is optimal when the layers fuse completely. If the exterior film stretches or melts, the temp is too high.",
          "imageAlt": lang === 'zh-TW' ? "條狀測試：找出最佳溫度" : lang === 'es' ? "Prueba de tiras: Encontrando la temperatura óptima" : lang === 'fr' ? "Test en bande : Trouver la température optimale" : "The Strip Test: Finding optimal temperature without wasting packaging."
        },
        "painPoints": {
          "title": lang === 'zh-TW' ? "5 個常見的熱封問題（與解決方案）" : lang === 'es' ? "5 Problemas Comunes (Y Soluciones)" : lang === 'fr' ? "5 Problèmes Courants (Et Solutions)" : "5 Common Heat Sealing Problems (And Solutions)",
          "intro": lang === 'zh-TW' ? "熱封問題通常源於溫度、壓力和停留時間之間的不平衡。以下是我們客戶面臨的 5 個最常見痛點及解決方法：" : lang === 'es' ? "Los problemas suelen deberse a un desequilibrio entre temperatura, presión y tiempo." : lang === 'fr' ? "Les problèmes proviennent généralement d'un déséquilibre entre température, pression et temps." : "Heat sealing issues typically stem from an imbalance between temperature, pressure, and dwell time. Here are the 5 most common pain points our clients face and how to resolve them:",
          "point1": {
            "q": lang === 'zh-TW' ? "1. 袋子外觀融化或燒焦。" : lang === 'es' ? "1. El exterior se derrite o se quema." : lang === 'fr' ? "1. L'extérieur fond ou brûle." : "1. The exterior of the pouch is melting or scorching.",
            "a": lang === 'zh-TW' ? "解決方案：您的溫度太高，或停留時間太長。稍微減少停留時間，或將溫度降低 10°C。同時，確保您的 PTFE（鐵氟龍）膠帶沒有磨損。" : lang === 'es' ? "Solución: La temperatura es demasiado alta. Disminuye el tiempo o baja la temperatura." : lang === 'fr' ? "Solution : La température est trop élevée. Diminuez le temps ou baissez la température." : "Solution: Your temperature is too high, or your dwell time is too long. Decrease the dwell time slightly, or lower the temperature by 10°C. Also, ensure your PTFE (Teflon) covers on the sealing bars are not worn out."
          },
          "point2": {
            "q": lang === 'zh-TW' ? "2. 封口容易撕開（弱封口）。" : lang === 'es' ? "2. El sello se despega fácilmente." : lang === 'fr' ? "2. Le sceau se décolle facilement." : "2. The seal easily peels apart (Weak Seal).",
            "a": lang === 'zh-TW' ? "解決方案：內部PE密封層未達到熔點。使用條狀測試以5°C為單位提高溫度。如果溫度正確但仍漏氣，請增加壓力 (psi)。" : lang === 'es' ? "Solución: Aumenta la temperatura en incrementos de 5°C. Si sigue goteando, aumenta la presión." : lang === 'fr' ? "Solution : Augmentez la température par incréments de 5°C. Si ça fuit toujours, augmentez la pression." : "Solution: The inner PE sealant layer hasn't reached its melting point. Increase the temperature by 5°C increments using the Strip Test. If the temperature is correct but it still leaks, increase the jaw pressure (psi)."
          },
          "point3": {
            "q": lang === 'zh-TW' ? "3. 為了找出正確設定浪費太多袋子。" : lang === 'es' ? "3. Se desperdician muchas bolsas probando." : lang === 'fr' ? "3. Trop de sachets gaspillés pour tester." : "3. Wasting too many bags trying to find the right setting.",
            "a": lang === 'zh-TW' ? "解決方案：永遠不要使用完整的袋子進行校準。使用「條狀測試」方法。將一個袋子切成5-6條並測試。您只需要一個袋子。" : lang === 'es' ? "Solución: Usa el método de la 'Prueba de Tiras'. Solo necesitas una bolsa." : lang === 'fr' ? "Solution : Utilisez la méthode du 'Test en Bande'. Un seul sachet suffit." : "Solution: Never use a full pouch for calibration. Use the 'Strip Test' method. Cut one pouch vertically into 5-6 strips and test incrementing temperatures on each strip. One pouch is all you need."
          },
          "point4": {
            "q": lang === 'zh-TW' ? "4. 封口有皺紋或摺痕。" : lang === 'es' ? "4. El sello tiene arrugas." : lang === 'fr' ? "4. Le sceau a des rides ou des plis." : "4. The seal has wrinkles or creases.",
            "a": lang === 'zh-TW' ? "解決方案：皺紋通常是由於進料時張力不均造成的。確保袋子在進入封口鉗之前被拉緊。" : lang === 'es' ? "Solución: Asegúrate de que la bolsa esté tensa antes de enganchar las mordazas de sellado." : lang === 'fr' ? "Solution : Assurez-vous que le sachet est tendu avant d'engager les mâchoires de scellage." : "Solution: Wrinkles are usually caused by uneven tension during feeding. Ensure the pouch is pulled taut before engaging the sealing jaws. On continuous band sealers, check that the cooling belts are synchronized with the heating belts."
          },
          "point5": {
            "q": lang === 'zh-TW' ? "5. 貼標籤會融化袋子。" : lang === 'es' ? "5. Aplicar etiquetas derrite la bolsa." : lang === 'fr' ? "5. L'application d'étiquettes fait fondre le sachet." : "5. Applying labels melts the pouch.",
            "a": lang === 'zh-TW' ? "解決方案：如果您使用熱壓標籤，必須將標籤應用的參數與封口參數分開。先在條狀樣品上測試標籤附著力。" : lang === 'es' ? "Solución: Separa los parámetros de aplicación de la etiqueta de los parámetros de sellado." : lang === 'fr' ? "Solution : Séparez les paramètres d'application de l'étiquette de ceux du scellage." : "Solution: If you are heat-pressing labels, you must separate the label application parameters from the sealing parameters. Labels typically require lower temperatures. Test the label adhesion on a strip first, finding the minimum heat required to activate the adhesive without scorching the substrate."
          }
        },
        "quality": {
          "title": lang === 'zh-TW' ? "辨識完美的封口" : lang === 'es' ? "Identificando un Sello Perfecto" : lang === 'fr' ? "Identifier un Sceau Parfait" : "Identifying a Perfect Seal",
          "intro": lang === 'zh-TW' ? "完美的熱封能創造防氧氣與水氣的氣密屏障，同時維持袋子外部美觀的結構完整性。" : lang === 'es' ? "Un sello perfecto crea una barrera hermética." : lang === 'fr' ? "Un sceau parfait crée une barrière hermétique." : "A flawless heat seal creates an airtight barrier that protects against OTR (Oxygen Transmission Rate) and MVTR (Moisture Vapor Transmission Rate) while maintaining the structural integrity of the pouch's exterior aesthetic.",
          "imageAlt": lang === 'zh-TW' ? "完美袋封口的微距視角" : lang === 'es' ? "Vista macro de un sello perfecto" : lang === 'fr' ? "Vue macro d'un sceau parfait" : "Macro view of a perfect pouch seal with no distortion.",
          "ctaTitle": lang === 'zh-TW' ? "需要生產協助？" : lang === 'es' ? "¿Necesita Ayuda?" : lang === 'fr' ? "Besoin d'Aide ?" : "Need Production Help?",
          "ctaDesc": lang === 'zh-TW' ? "在不穩定的封口或更換為新型可堆肥材料時遇到困難？讓我們的工程師為您的產線進行稽核。" : lang === 'es' ? "¿Luchando con sellos inconsistentes? Deje que nuestros ingenieros auditen su línea." : lang === 'fr' ? "Vous luttez avec des sceaux incohérents ? Laissez nos ingénieurs auditer votre ligne." : "Struggling with inconsistent seals or changing over to new compostable materials? Let our engineers audit your line.",
          "ctaButton": lang === 'zh-TW' ? "諮詢工程師" : lang === 'es' ? "Consultar a un Ingeniero" : lang === 'fr' ? "Consulter un Ingénieur" : "Consult an Engineer"
        }
      },
      "faq": {
        "1": {
          "q": lang === 'zh-TW' ? "我應該在什麼溫度下封口我的咖啡袋？" : lang === 'es' ? "¿A qué temperatura debo sellar mis bolsas de café?" : lang === 'fr' ? "À quelle température dois-je sceller mes sacs de café ?" : "What temperature should I seal my coffee bags at?",
          "a": lang === 'zh-TW' ? "對於標準滾輪封口機，建議基準為 160°C，停留時間 3 秒，壓力 40psi。但始終建議從 150°C 開始測試，並以 5°C 為增量。" : lang === 'es' ? "Se recomienda una línea base de 160°C con 3 segundos de tiempo de permanencia. Siempre pruebe primero." : lang === 'fr' ? "Une base de 160°C avec 3 secondes de temps de maintien est recommandée. Testez toujours en premier." : "For a standard roller sealing machine, a baseline of 160°C with 3 seconds of dwell time and 40psi of pressure is recommended. However, it is always advised to test starting at 150°C and increase in 5°C increments."
        },
        "2": {
          "q": lang === 'zh-TW' ? "為什麼我在熱封時袋子會融化？" : lang === 'es' ? "¿Por qué mi bolsa se derrite cuando la sello?" : lang === 'fr' ? "Pourquoi mon sachet fond-il lorsque je le scelle ?" : "Why is my pouch melting when I heat seal it?",
          "a": lang === 'zh-TW' ? "如果袋子外部正在融化或變形，表示您的溫度設定過高，或者停留時間過長。" : lang === 'es' ? "Su temperatura es demasiado alta o el tiempo es demasiado largo." : lang === 'fr' ? "Votre température est trop élevée ou le temps est trop long." : "If the exterior of your pouch is melting or distorting, your temperature is set too high or the dwell time is too long. The exterior layer (usually PET or BOPP) has a higher melting point than the inner PE layer, but extreme temperatures will damage it."
        },
        "3": {
          "q": lang === 'zh-TW' ? "我可以用同一台熱封機封口標籤嗎？" : lang === 'es' ? "¿Puedo sellar etiquetas con la misma selladora térmica?" : lang === 'fr' ? "Puis-je sceller des étiquettes avec la même scelleuse ?" : "Can I seal labels with the same heat sealer?",
          "a": lang === 'zh-TW' ? "可以，但您必須找出標籤黏附而不會燒焦基材的最低溫度。使用條狀測試方法，避免在校準過程中浪費完整的標籤。" : lang === 'es' ? "Sí, pero encuentre la temperatura mínima donde la etiqueta se adhiere sin quemarse." : lang === 'fr' ? "Oui, mais trouvez la température minimale où l'étiquette adhère sans brûler." : "Yes, but you must find the minimum temperature where the label adheres without scorching the substrate. Use the strip test method to avoid wasting full labels during calibration."
        }
      },
      "cta": {
        "pouch": {
          "title": lang === 'zh-TW' ? "升級您的包裝" : lang === 'es' ? "Mejora tu Empaque" : lang === 'fr' ? "Améliorez votre Emballage" : "Upgrade Your Packaging",
          "desc": lang === 'zh-TW' ? "今天獲取免費報價。" : lang === 'es' ? "Obtén una cotización gratis hoy." : lang === 'fr' ? "Obtenez un devis gratuit aujourd'hui." : "Get a free quote today."
        },
        "achieve": {
          "title": lang === 'zh-TW' ? "需要專業校準？" : lang === 'es' ? "¿Necesita Calibración Experta?" : lang === 'fr' ? "Besoin d'un Étalonnage Expert ?" : "Need Expert Calibration?",
          "desc": lang === 'zh-TW' ? "停止浪費材料。諮詢我們的工程師。" : lang === 'es' ? "Deja de desperdiciar. Habla con un ingeniero." : lang === 'fr' ? "Arrêtez de gaspiller. Parlez à un ingénieur." : "Stop wasting materials. Talk to an engineer.",
          "button": lang === 'zh-TW' ? "聯絡我們" : lang === 'es' ? "Contáctenos" : lang === 'fr' ? "Contactez-Nous" : "Contact Us"
        }
      },
      "viewFullSize": lang === 'zh-TW' ? "查看原圖" : lang === 'es' ? "Ver Tamaño Completo" : lang === 'fr' ? "Voir Taille Réelle" : "View Full Size",
      "viewMacroShot": lang === 'zh-TW' ? "查看微距照片" : lang === 'es' ? "Ver Foto Macro" : lang === 'fr' ? "Voir Photo Macro" : "View Macro Shot"
    }
  };
  return data;
};

files.forEach(file => {
  const filePath = path.join(localesDir, file);
  const lang = file.replace('.json', '');
  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(rawData);
    jsonData.pouchHeatSealing = getTranslationData(lang).pouchHeatSealing;
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
    console.log(`Updated ${file}`);
  }
});
