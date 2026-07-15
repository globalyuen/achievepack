const fs = require('fs');

const en = {
    title: "Digital Product Passport Packaging | Smart Tracing for Eco-Brands",
    description: "Prepare for EU PPWR with our Digital Product Passport Packaging. Integrated QR codes, NFC tags, and blockchain tracing for full transparency.",
    heroTitle: "Digital Product Passport Packaging",
    empathyHook: "Are you struggling to keep up with the incoming EU Packaging and Packaging Waste Regulation (PPWR)? Consumers and regulators alike are demanding 100% transparency. With our Digital Product Passport (DPP) packaging, you can turn compliance into a competitive advantage, proving your sustainability claims with a simple scan.",
    point1Title: "Automated Compliance", point1Desc: "Navigating EU and US recycling regulations is complex.", point1Sol: "Integrated QR codes link directly to certified material data and disposal instructions.",
    point2Title: "Counterfeit Prevention", point2Desc: "High-value products are often targeted by counterfeiters.", point2Sol: "Unique serialized QR or NFC tags verify product authenticity instantly.",
    point3Title: "Supply Chain Transparency", point3Desc: "Consumers distrust vague 'eco-friendly' claims.", point3Sol: "Blockchain-backed tracing shows the journey from raw material to finished pouch.",
    point4Title: "Consumer Engagement", point4Desc: "Static packaging limits your ability to interact with buyers post-purchase.", point4Sol: "Dynamic landing pages allow you to update marketing content, recipes, or promotions without changing the physical package.",
    point5Title: "Lifecycle Tracking", point5Desc: "Proving EPR (Extended Producer Responsibility) targets are met is difficult.", point5Sol: "Data collection tracks recycling rates and consumer engagement to report back to regulators.",
    compTitle: "Why Choose Our DPP Integration?", compDesc: "We don't just print a QR code. We integrate a full digital ecosystem directly into your sustainable flexible packaging.",
    faq1Q: "What is a Digital Product Passport (DPP)?", faq1A: "A DPP is a digital record that provides information about a product's origin, materials, environmental impact, and end-of-life disposal, accessible via a scannable code on the packaging.",
    faq2Q: "Do I need special equipment to scan these codes?", faq2A: "No. The QR codes and NFC tags we integrate can be scanned natively by any modern smartphone camera without the need for a special app.",
    faq3Q: "Can I update the information after the packaging is printed?", faq3A: "Yes! The codes use dynamic links, meaning you can update the destination URL and content at any time through your dashboard."
};

const zh_tw = {
    title: "數位產品護照包裝 | 環保品牌的智能追溯",
    description: "使用我們的數位產品護照包裝為歐盟 PPWR 做好準備。整合 QR Code、NFC 標籤和區塊鏈追溯，實現全面透明度。",
    heroTitle: "數位產品護照包裝 (DPP)",
    empathyHook: "您是否正在為即將實施的歐盟包裝和包裝廢棄物法規 (PPWR) 感到苦惱？消費者和監管機構都要求 100% 的透明度。透過我們的數位產品護照 (DPP) 包裝，您可以將合規性轉化為競爭優勢，只需輕鬆一掃即可證明您的永續發展主張。",
    point1Title: "自動化合規", point1Desc: "應對歐盟和美國的回收法規非常複雜。", point1Sol: "整合的 QR Code 直接連結到經過認證的材料數據和處置說明。",
    point2Title: "防偽保護", point2Desc: "高價值產品經常成為仿冒者的目標。", point2Sol: "獨特的序列化 QR 或 NFC 標籤可立即驗證產品的真實性。",
    point3Title: "供應鏈透明度", point3Desc: "消費者不信任模糊的「環保」聲明。", point3Sol: "區塊鏈支援的追溯技術展示了從原材料到成品包裝袋的完整旅程。",
    point4Title: "消費者互動", point4Desc: "靜態包裝限制了您在購買後與買家互動的能力。", point4Sol: "動態登陸頁面可讓您更新行銷內容、食譜或促銷活動，而無需更改物理包裝。",
    point5Title: "生命週期追蹤", point5Desc: "證明已達到 EPR (生產者延伸責任) 目標非常困難。", point5Sol: "數據收集可追蹤回收率和消費者互動情況，以便向監管機構報告。",
    compTitle: "為什麼選擇我們的 DPP 整合方案？", compDesc: "我們不只是列印 QR Code。我們將完整的數位生態系統直接整合到您的永續軟包裝中。",
    faq1Q: "什麼是數位產品護照 (DPP)？", faq1A: "DPP 是一份數位記錄，提供有關產品來源、材料、環境影響和報廢處置的資訊，可透過掃描包裝上的代碼獲取。",
    faq2Q: "我需要特殊設備來掃描這些代碼嗎？", faq2A: "不需要。我們整合的 QR Code 和 NFC 標籤可以使用任何現代智慧型手機相機直接掃描，無需特殊應用程式。",
    faq3Q: "我可以在包裝列印後更新資訊嗎？", faq3A: "可以！代碼使用動態連結，這意味著您可以隨時透過儀表板更新目標網址和內容。"
};

const apPath = 'src/pages/topics/DigitalProductPassportPackagingPage.tsx';
const epPath = '../../pouch-eco-website/src/app/topics/digital-product-passport-packaging/page.tsx';

function updateContent(filePath, isEp = false) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the localTranslations object
    const replacement = `const localTranslations = {
  en: ${JSON.stringify(en, null, 4)},
  'zh-tw': ${JSON.stringify(zh_tw, null, 4)},
  'zh-cn': {}, ko: {}, ja: {}, de: {}, es: {}, fr: {}, pt: {}, th: {}, vi: {}, ms: {}, ar: {}
};`;

    content = content.replace(/const localTranslations = {[\s\S]*?};\n/m, replacement + '\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
}

updateContent(apPath);
updateContent(epPath, true);
