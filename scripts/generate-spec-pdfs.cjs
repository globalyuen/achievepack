const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const specs = [
    {
        id: 'compostable',
        title: 'Compostable',
        subtitle: 'Kraft / Triplex',
        description: 'High barrier compostable structure designed for maximum shelf life while maintaining eco-compliance.',
        layers: [
            { name: 'Paper', desc: 'FSC Certified Kraft' },
            { name: 'Metallized', desc: 'High Barrier NKME' },
            { name: 'Sealant', desc: 'Bio-Polymer' }
        ],
        features: ['Moisture Barrier', 'Oxygen Barrier', 'Heat Sealable', 'Printable'],
        certifications: ['BPI', 'TUV Home', 'TUV Industrial'],
        techData: {
            thickness: '120 - 150 microns',
            wvtr: '< 2.0 g/m²/day',
            otr: '< 1.0 cc/m²/day',
            sealStrength: '> 30 N/15mm'
        }
    },
    {
        id: 'recyclable',
        title: 'Recyclable',
        subtitle: 'Mono-PE',
        description: 'Fully recyclable mono-material structure suitable for store drop-off recycling streams.',
        layers: [
            { name: 'Print', desc: 'MDO-PE' },
            { name: 'Barrier', desc: 'EVOH (Optional)' },
            { name: 'Sealant', desc: 'PE' }
        ],
        features: ['Recyclable (Code 4)', 'High Clarity', 'Durable', 'Moisture Resistant'],
        certifications: ['How2Recycle', 'RedCycle'],
        techData: {
            thickness: '100 - 180 microns',
            wvtr: '< 1.0 g/m²/day',
            otr: '< 2.0 cc/m²/day',
            sealStrength: '> 40 N/15mm'
        }
    },
    {
        id: 'pcr',
        title: 'PCR Content',
        subtitle: 'Post-Consumer Recycled',
        description: 'Incorporates recycled plastic to reduce virgin material usage and promote a circular economy.',
        layers: [
            { name: 'Outer', desc: 'PCR-PET' },
            { name: 'Barrier', desc: 'AL / VMPET' },
            { name: 'Inner', desc: 'PCR-PE' }
        ],
        features: ['Circular Economy', 'Reduced Carbon Footprint', 'Virgin Plastic Reduction'],
        certifications: ['GRS', 'SCS Global'],
        techData: {
            thickness: '100 - 120 microns',
            wvtr: '< 0.5 g/m²/day',
            otr: '< 0.5 cc/m²/day',
            sealStrength: '> 45 N/15mm'
        }
    },
    {
        id: 'aluminum',
        title: 'High Barrier Foil',
        subtitle: 'Premium Protection',
        description: 'The industry gold standard for oxygen and moisture protection. Ideal for coffee, powders, and long shelf-life products.',
        layers: [
            { name: 'Print', desc: 'PET / OPP' },
            { name: 'Barrier', desc: 'Aluminum Foil (7-9µm)' },
            { name: 'Sealant', desc: 'PE / RCPP' }
        ],
        features: ['Zero OTR/WVTR', 'Light Blocking', 'Retortable Option', 'Rigid Feel'],
        certifications: ['FDA Compliant', 'ISO 9001'],
        techData: {
            thickness: '110 - 140 microns',
            wvtr: '0.01 g/m²/day',
            otr: '0.01 cc/m²/day',
            sealStrength: '> 50 N/15mm'
        }
    },
    {
        id: 'bio-pe',
        title: 'Bio-Based PE',
        subtitle: 'Sugar Cane Derived',
        description: 'Carbon negative polyethylene derived from renewable sugar cane resources. Same performance as fossil fuel PE.',
        layers: [
            { name: 'Print', desc: 'Bio-PET / Paper' },
            { name: 'Barrier', desc: 'AL / VMPET' },
            { name: 'Sealant', desc: 'Bio-PE (Sugar Cane)' }
        ],
        features: ['Renewable Resource', 'Carbon Negative', 'High Strength', 'Drop-in Replacement'],
        certifications: ['Bonsucro', 'ASTM D6866', 'Carbon Trust'],
        techData: {
            thickness: '100 - 160 microns',
            wvtr: '< 1.5 g/m²/day',
            otr: '< 1.5 cc/m²/day',
            sealStrength: '> 35 N/15mm'
        }
    }
];

const generateHTML = (spec) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
        
        body {
            font-family: 'Space Grotesk', sans-serif;
            margin: 0;
            padding: 40px;
            color: #000;
            background: #fff;
            -webkit-print-color-adjust: exact;
        }

        .header {
            border-bottom: 4px solid #000;
            padding-bottom: 20px;
            margin-bottom: 40px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .logo {
            font-weight: 900;
            font-size: 24px;
            letter-spacing: -1px;
        }

        .doc-type {
            font-family: 'JetBrains Mono', monospace;
            background: #000;
            color: #D4FF00;
            padding: 4px 12px;
            font-weight: bold;
            font-size: 14px;
        }

        h1 {
            font-weight: 900;
            font-size: 48px;
            text-transform: uppercase;
            margin: 0 0 10px 0;
            line-height: 0.9;
        }

        h2 {
            font-family: 'JetBrains Mono', monospace;
            font-size: 18px;
            color: #666;
            margin: 0 0 20px 0;
            text-transform: uppercase;
        }

        .description {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 40px;
            max-width: 80%;
            border-left: 4px solid #D4FF00;
            padding-left: 20px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }

        .section {
            border: 2px solid #000;
            padding: 20px;
            box-shadow: 8px 8px 0 0 #000;
        }

        .section-title {
            font-family: 'JetBrains Mono', monospace;
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 15px;
            border-bottom: 2px solid #000;
            padding-bottom: 5px;
            display: inline-block;
        }

        .layers-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .layer-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
        }
        
        .layer-name { font-weight: bold; }
        .layer-desc { color: #555; }

        .features-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        .feature-tag {
            background: #f0f0f0;
            padding: 5px 10px;
            font-size: 12px;
            font-weight: bold;
            border: 1px solid #000;
        }

        .tech-data {
            display: grid;
            gap: 10px;
        }

        .data-row {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed #ccc;
            padding-bottom: 5px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
        }

        .cert-badge {
            display: inline-block;
            background: #00FFFF;
            color: #000;
            padding: 5px 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            font-weight: bold;
            border: 2px solid #000;
            font-size: 12px;
            box-shadow: 2px 2px 0 0 #000;
        }

        .footer {
            margin-top: 60px;
            border-top: 4px solid #000;
            padding-top: 20px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            text-align: center;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">POUCH.ECO</div>
        <div class="doc-type">TECHNICAL DATA SHEET</div>
    </div>

    <h1>${spec.title}</h1>
    <h2>${spec.subtitle}</h2>

    <div class="description">
        ${spec.description}
    </div>

    <div class="grid">
        <div class="section">
            <div class="section-title">Material Structure</div>
            <ul class="layers-list">
                ${spec.layers.map(l => `
                    <li class="layer-item">
                        <span class="layer-name">${l.name}</span>
                        <span class="layer-desc">${l.desc}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="section">
            <div class="section-title">Technical Performance</div>
            <div class="tech-data">
                <div class="data-row">
                    <span>Thickness</span>
                    <span>${spec.techData.thickness}</span>
                </div>
                <div class="data-row">
                    <span>WVTR</span>
                    <span>${spec.techData.wvtr}</span>
                </div>
                <div class="data-row">
                    <span>OTR</span>
                    <span>${spec.techData.otr}</span>
                </div>
                <div class="data-row">
                    <span>Seal Strength</span>
                    <span>${spec.techData.sealStrength}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="grid">
        <div class="section">
            <div class="section-title">Key Features</div>
            <div class="features-list">
                ${spec.features.map(f => `<div class="feature-tag">${f}</div>`).join('')}
            </div>
        </div>

        <div class="section">
            <div class="section-title">Certifications</div>
            <div>
                ${spec.certifications.map(c => `<span class="cert-badge">${c}</span>`).join('')}
            </div>
        </div>
    </div>

    <div class="footer">
        © ${new Date().getFullYear()} POUCH.ECO - ACHIEVE PACKAGING PROTOCOL // DOCUMENT ID: ${spec.id.toUpperCase()}-${new Date().getFullYear()}
    </div>
</body>
</html>
`;

(async () => {
    const outputDir = path.join(__dirname, '../public/pdfs');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (const spec of specs) {
        console.log(`Generating PDF for ${spec.title}...`);
        await page.setContent(generateHTML(spec));
        await page.pdf({
            path: path.join(outputDir, `${spec.id}-spec-sheet.pdf`),
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20px',
                bottom: '20px',
                left: '20px',
                right: '20px'
            }
        });
    }

    await browser.close();
    console.log('All PDFs generated successfully!');
})();
