const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const specs = [
    {
        id: 'compostable',
        title: 'Compostable',
        subtitle: 'Kraft / Triplex',
        image: 'bio-kraft-vm-cello.webp',
        description: 'High barrier compostable structure designed for maximum shelf life while maintaining eco-compliance.',
        longDescription: 'Our Compostable Kraft/Triplex structure represents the pinnacle of sustainable packaging technology. Utilizing a unique blend of FSC-certified paper, high-barrier metallized cellulose, and bio-polymers, this material offers shelf-stability comparable to traditional plastics while being fully certified for industrial and home composting environments. It breaks down into non-toxic biomass, water, and CO2, leaving zero microplastics behind.',
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
        },
        questions: [
            { q: 'What is the shelf life?', a: '+12 months under standard storage conditions relative to the product.' },
            { q: 'Is a valve available?', a: 'Yes, certified compostable degassing valves can be applied.' },
            { q: 'How should it be disposed?', a: 'Ideally in an industrial composting facility, but TUV Home certification allows for home compost piles.' }
        ]
    },
    {
        id: 'recyclable',
        title: 'Recyclable',
        subtitle: 'Mono-PE',
        image: 'mono-pe-duplex-clear.webp',
        description: 'Fully recyclable mono-material structure suitable for store drop-off recycling streams.',
        longDescription: 'Designed for the circular economy, our Recyclable Mono-PE structure simplifies the recycling process. By using a single polymer family (Polyethylene) for all layers—including the high-barrier MDO-PE print layer and sealant—we ensure compatibility with standard Store Drop-off recycling streams (Code 4). This material does not compromise on performance, offering excellent clarity, stiffness, and moisture protection.',
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
        },
        questions: [
            { q: 'Where can this be recycled?', a: 'In Store Drop-off bins at major retailers accepting PE films (Code 4).' },
            { q: 'Does it have a barrier?', a: 'Yes, EVOH coatings provide excellent oxygen and moisture barriers.' },
            { q: 'Can it be matte finished?', a: 'Yes, a registered matte varnish can be applied for a premium look.' }
        ]
    },
    {
        id: 'pcr',
        title: 'PCR Content',
        subtitle: 'Post-Consumer Recycled',
        image: 'pcr-pet-duplex-clear.webp',
        description: 'Incorporates recycled plastic to reduce virgin material usage and promote a circular economy.',
        longDescription: 'Post-Consumer Recycled (PCR) content gives a second life to existing plastics. Our PCR structure incorporates up to 45% recycled PET and PE seamlessly into the packaging layers. This significantly lowers the carbon footprint and reduces reliance on virgin fossil fuels. It maintains the durability and barrier properties of standard mixed laminates.',
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
        },
        questions: [
            { q: 'Is it food safe?', a: 'Yes, the food-contact layer is virgin FDA-approved material; PCR is used in outer layers.' },
            { q: 'Does it look different?', a: 'PCR films may have slight visual imperfections or a "greener" tint, signaling sustainability.' },
            { q: 'What percentage is recycled?', a: 'Typically between 30% to 45% of the total pouch weight.' }
        ]
    },
    {
        id: 'aluminum',
        title: 'High Barrier Foil',
        subtitle: 'Premium Protection',
        image: 'pcr-pet-triplex-aluminum.webp',
        description: 'The industry gold standard for oxygen and moisture protection. Ideal for coffee, powders, and long shelf-life products.',
        longDescription: 'When absolute protection is non-negotiable, our High Barrier Foil structure is the solution. Featuring a 7-9 micron layer of pure aluminum, this triplex laminate provides a near-zero transmission rate for both oxygen and moisture. It is the gold standard for sensitive products like roast coffee, pharmaceuticals, and powdered supplements requiring extended shelf lives of 18-24 months.',
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
        },
        questions: [
            { q: 'Can it be microwaved?', a: 'No, aluminum blocks microwaves and will spark. Do not compost or microwave.' },
            { q: 'Why use foil over metallized?', a: 'Foil offers superior "dead-fold" characteristics and a complete block of light and gases.' },
            { q: 'Is it recyclable?', a: 'Generally no, as it is a multi-material laminate, unless specialized separation exists.' }
        ]
    },
    {
        id: 'bio-pe',
        title: 'Bio-Based PE',
        subtitle: 'Sugar Cane Derived',
        image: 'biope-kraft-vmpet.webp',
        description: 'Carbon negative polyethylene derived from renewable sugar cane resources. Same performance as fossil fuel PE.',
        longDescription: 'Bio-Based PE (Polyethylene) is chemically identical to standard PE but derived from renewable sugarcane ethanol rather than fossil fuels. This "drop-in" solution captures CO2 during the sugarcane growth cycle, resulting in a carbon-negative material production process. It offers the exact same durability, seal strength, and barrier performance as conventional plastics without the environmental guilt.',
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
        },
        questions: [
            { q: 'Is it biodegradable?', a: 'No, it is a durable plastic but made from plants. It is fully recyclable (Code 4).' },
            { q: 'Does it affect shelf life?', a: 'No, performance is identical to fossil-based PE.' },
            { q: 'How is it verified?', a: 'We use Carbon-14 testing (ASTM D6866) to verify bio-based content.' }
        ]
    }
];

const getImageData = (imageName) => {
    try {
        const imagePath = path.join(__dirname, '../public/imgs/spec', imageName);
        const imageBuffer = fs.readFileSync(imagePath);
        return `data:image/webp;base64,${imageBuffer.toString('base64')}`;
    } catch (e) {
        console.warn(`Could not load image: ${imageName}`);
        return '';
    }
};

const generateHTML = (spec) => {
    const imageData = getImageData(spec.image);
    
    return `
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
            margin-bottom: 30px;
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
            font-size: 42px;
            text-transform: uppercase;
            margin: 0 0 5px 0;
            line-height: 0.9;
        }

        h2 {
            font-family: 'JetBrains Mono', monospace;
            font-size: 16px;
            color: #666;
            margin: 0 0 20px 0;
            text-transform: uppercase;
        }

        .hero-section {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            height: 200px;
        }

        .hero-image {
            flex: 1;
            border: 2px solid #000;
            box-shadow: 6px 6px 0 0 #000;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f9f9f9;
        }
        
        .hero-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .hero-desc {
            flex: 1.5;
            font-size: 14px;
            line-height: 1.4;
            display: flex;
            align-items: center;
            padding: 20px;
            border-left: 4px solid #D4FF00;
            background: #fbfbfb;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }

        .section {
            border: 2px solid #000;
            padding: 15px;
            box-shadow: 6px 6px 0 0 #000;
        }

        .section-title {
            font-family: 'JetBrains Mono', monospace;
            font-weight: bold;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 12px;
            border-bottom: 2px solid #000;
            padding-bottom: 4px;
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
            margin-bottom: 8px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            border-bottom: 1px dotted #ccc;
            padding-bottom: 4px;
        }
        
        .layer-name { font-weight: bold; }
        .layer-desc { color: #555; }

        .features-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }

        .feature-tag {
            background: #f0f0f0;
            padding: 4px 8px;
            font-size: 10px;
            font-weight: bold;
            border: 1px solid #000;
            text-align: center;
        }

        .tech-data {
            display: grid;
            gap: 8px;
        }

        .data-row {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed #ccc;
            padding-bottom: 4px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
        }

        .cert-badge {
            display: inline-block;
            background: #00FFFF;
            color: #000;
            padding: 4px 8px;
            margin-right: 8px;
            margin-bottom: 8px;
            font-weight: bold;
            border: 2px solid #000;
            font-size: 10px;
            box-shadow: 2px 2px 0 0 #000;
        }

        .qa-list {
            display: grid;
            gap: 15px;
        }

        .qa-item {
            font-size: 12px;
        }
        
        .qa-question {
            font-weight: bold;
            font-family: 'JetBrains Mono', monospace;
            margin-bottom: 4px;
            color: #000;
        }
        
        .qa-answer {
            color: #444;
            line-height: 1.3;
        }

        .footer {
            margin-top: 40px;
            border-top: 4px solid #000;
            padding-top: 15px;
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

    <div class="hero-section">
        <div class="hero-image">
             ${imageData ? `<img src="${imageData}" alt="${spec.title}" />` : 'NO IMAGE'}
        </div>
        <div class="hero-desc">
            ${spec.longDescription}
        </div>
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
            
            <div style="margin-top: 20px;">
                <div class="section-title">Certifications</div>
                <div>
                    ${spec.certifications.map(c => `<span class="cert-badge">${c}</span>`).join('')}
                </div>
            </div>
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
            
             <div style="margin-top: 20px;">
                 <div class="section-title">Key Features</div>
                 <div class="features-list">
                     ${spec.features.map(f => `<div class="feature-tag">${f}</div>`).join('')}
                 </div>
             </div>
        </div>
    </div>

    <div class="section" style="margin-bottom: 30px;">
        <div class="section-title">Common Questions (FAQ)</div>
        <div class="qa-list">
            ${spec.questions.map(qa => `
                <div class="qa-item">
                    <div class="qa-question">Q: ${qa.q}</div>
                    <div class="qa-answer">A: ${qa.a}</div>
                </div>
            `).join('')}
        </div>
    </div>

    <div class="footer">
        © ${new Date().getFullYear()} POUCH.ECO - ACHIEVE PACKAGING PROTOCOL // DOCUMENT ID: ${spec.id.toUpperCase()}-${new Date().getFullYear()}
    </div>
</body>
</html>
`;
};

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
