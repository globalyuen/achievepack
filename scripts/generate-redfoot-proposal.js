const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const projectDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';

const getImageData = (subPath) => {
    try {
        const imagePath = path.join(projectDir, subPath);
        if (fs.existsSync(imagePath)) {
            const ext = path.extname(imagePath).toLowerCase();
            const mimeType = ext === '.png' ? 'image/png' : (ext === '.webp' ? 'image/webp' : 'image/jpeg');
            const imageBuffer = fs.readFileSync(imagePath);
            return `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
        }
        return '';
    } catch (e) {
        console.warn(`Could not load image: ${subPath}`);
        return '';
    }
};

const logoData = getImageData('public/imgs/free/invest-cal-hero.jpg');
const conventionalData = getImageData('public/imgs/store/products/flat-bottom-one-sided-zipper-conventional-thumbnail-1.jpg');
const recyclableData = getImageData('public/imgs/store/products/invest-cal-recyclable.jpg');
const compostableData = getImageData('public/imgs/store/products/invest-cal-compostable.jpg');

const generateHTML = () => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;900&family=Outfit:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@400;750&display=swap');
        
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Space Grotesk', sans-serif;
            margin: 0;
            padding: 0;
            color: #ffffff;
            background: #040d0a;
            -webkit-print-color-adjust: exact;
        }

        .slide {
            width: 297mm;
            height: 210mm;
            padding: 20mm;
            position: relative;
            page-break-after: always;
            background: #040d0a;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
        }

        /* Slide 1 Cover Specifics */
        .slide-cover {
            background: radial-gradient(circle at 70% 30%, #062319 0%, #040d0a 100%);
            justify-content: center;
        }

        .cover-content {
            border-left: 8px solid #D4FF00;
            padding-left: 30px;
            margin-bottom: 40px;
        }

        .tagline {
            font-family: 'JetBrains Mono', monospace;
            color: #D4FF00;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        h1 {
            font-family: 'Outfit', sans-serif;
            font-weight: 900;
            font-size: 48px;
            text-transform: uppercase;
            margin: 0 0 10px 0;
            line-height: 1.0;
            letter-spacing: -1.5px;
            color: #ffffff;
        }

        .subtitle {
            font-size: 18px;
            color: #8da499;
            margin: 0 0 20px 0;
            font-weight: 400;
        }

        .meta-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 20px;
            max-w: 600px;
        }

        .meta-item span {
            display: block;
            color: #557868;
            margin-bottom: 5px;
            text-transform: uppercase;
            font-size: 9px;
            letter-spacing: 1px;
        }

        .meta-item strong {
            color: #D4FF00;
            font-size: 12px;
        }

        /* Standard Slide Layouts */
        .slide-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid rgba(212, 255, 0, 0.2);
            padding-bottom: 10px;
            margin-bottom: 15px;
        }

        .slide-title {
            font-family: 'Outfit', sans-serif;
            font-weight: 900;
            font-size: 26px;
            text-transform: uppercase;
            color: #ffffff;
            margin: 0;
        }

        .slide-number {
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            background: #D4FF00;
            color: #040d0a;
            padding: 3px 10px;
            font-weight: bold;
            border-radius: 4px;
        }

        .slide-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .slide-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 10px;
            margin-top: 15px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 9px;
            color: #557868;
        }

        /* Elements */
        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }

        .grid-3 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
        }

        .card {
            background: rgba(255, 255, 255, 0.02);
            border: 2px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 18px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .card-accent {
            border-left: 4px solid #D4FF00;
            border-radius: 4px 16px 16px 4px;
        }

        .card-title {
            font-family: 'Outfit', sans-serif;
            font-size: 16px;
            font-weight: 900;
            text-transform: uppercase;
            color: #ffffff;
            margin-top: 0;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .card-badge {
            background: rgba(212, 255, 0, 0.1);
            color: #D4FF00;
            border: 1px solid rgba(212, 255, 0, 0.2);
            font-size: 9px;
            font-family: 'JetBrains Mono', monospace;
            padding: 2px 8px;
            border-radius: 99px;
            text-transform: uppercase;
            font-weight: bold;
        }

        .card p {
            font-size: 11.5px;
            line-height: 1.4;
            color: #a3b8ae;
            margin: 0 0 10px 0;
        }

        .tech-list {
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 10.5px;
            color: #ffffff;
        }

        .tech-list li {
            margin-bottom: 6px;
            display: flex;
            align-items: flex-start;
            gap: 6px;
        }

        .tech-list li::before {
            content: "✓";
            color: #D4FF00;
            font-weight: bold;
            flex-shrink: 0;
        }

        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
            background: rgba(255, 255, 255, 0.01);
            border-radius: 12px;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.05);
        }

        th {
            background: rgba(212, 255, 0, 0.05);
            color: #D4FF00;
            text-align: left;
            padding: 10px 14px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 2px solid rgba(212, 255, 0, 0.1);
        }

        td {
            padding: 10px 14px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
            color: #a3b8ae;
            font-weight: 500;
        }

        tr:last-child td {
            border-bottom: none;
        }

        .highlight-td {
            color: #ffffff;
            font-weight: bold;
            font-family: 'JetBrains Mono', monospace;
        }

        .price-tag {
            color: #D4FF00;
            font-weight: bold;
            font-family: 'JetBrains Mono', monospace;
        }

        /* Image styling */
        .preview-img {
            width: 100%;
            height: 120px;
            border-radius: 10px;
            object-fit: cover;
            border: 1px solid rgba(255, 255, 255, 0.05);
            margin-bottom: 10px;
            background: #020907;
        }

        .logo-box {
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: 'Outfit', sans-serif;
            font-weight: 900;
            font-size: 18px;
            letter-spacing: -0.5px;
            color: #ffffff;
        }

        .logo-dot {
            width: 8px;
            height: 8px;
            background: #D4FF00;
            border-radius: 99px;
        }
    </style>
</head>
<body>

    <!-- SLIDE 1: COVER -->
    <div class="slide slide-cover">
        <div class="cover-content">
            <div class="tagline">B2B Packaging Presentation Protocol</div>
            <h1>RedFoot Coffee Range</h1>
            <div class="subtitle">Custom Printed High-Barrier Flat-Bottom & Stand-Up Coffee Pouch Solutions</div>
        </div>
        <div class="meta-grid">
            <div class="meta-item">
                <span>Prepared For</span>
                <strong>Sharleah @ RedFoot & Co.</strong>
            </div>
            <div class="meta-item">
                <span>Prepared By</span>
                <strong>Ryan / Achieve Pack Specialist</strong>
            </div>
            <div class="meta-item">
                <span>Date & Location</span>
                <strong>May 2026 // WA Supply Chain</strong>
            </div>
        </div>
    </div>

    <!-- SLIDE 2: THE CHALLENGE & RECOMMENDATION -->
    <div class="slide">
        <div class="slide-header">
            <h2 class="slide-title">1. High-Barrier Materials for WA Heat</h2>
            <span class="slide-number">Slide 02</span>
        </div>
        <div class="slide-content">
            <div class="grid-3">
                <div class="card card-accent">
                    <div>
                        <div class="card-title">
                            Recyclable PE+EVOH
                            <span class="card-badge">Code 4</span>
                        </div>
                        <p>Fully recyclable mono-material structure designed for standard drop-off streams. EVOH delivers high-performance aroma-locking barriers.</p>
                    </div>
                    <ul class="tech-list">
                        <li>FSC Premium Matte White touch</li>
                        <li>High barrier blocks moisture/oxygen</li>
                        <li>100% Recyclable Eco-circularity</li>
                        <li>High durability in regional temperatures</li>
                    </ul>
                </div>

                <div class="card card-accent">
                    <div>
                        <div class="card-title">
                            FSC Kraft Compostable
                            <span class="card-badge">Home Bio</span>
                        </div>
                        <p>FSC Kraft paper laminated with high-barrier VM-Cello (bio-metallized) film and compostable zip/valve. Decomposes in backyard compost piles.</p>
                    </div>
                    <ul class="tech-list">
                        <li>Premium organic raw-touch aesthetic</li>
                        <li>Bio-metallized light & gas block</li>
                        <li>BPI & TUV Home compost certified</li>
                        <li>Decomposes in backyard compost in 12m</li>
                    </ul>
                </div>

                <div class="card card-accent">
                    <div>
                        <div class="card-title">
                            Pure Aluminum Foil
                            <span class="card-badge">Pure Block</span>
                        </div>
                        <p>Triplex structure with pure aluminum foil layer (7-9 microns). Absolute zero-transmission rate. Ideal for long shelf life in severe WA hot weather.</p>
                    </div>
                    <ul class="tech-list">
                        <li>Absolute zero gas transmission</li>
                        <li>Light-shielding defense for roasted beans</li>
                        <li>Keeps roasted coffee ground aroma intact</li>
                        <li>Ultimate shelf life extension (+18 months)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="slide-footer">
            <div class="logo-box"><div class="logo-dot"></div>ACHIEVE PACK & POUCH.ECO</div>
            <div>TECHNICAL SPECS // MATERIAL DECISIONS</div>
        </div>
    </div>

    <!-- SLIDE 3: SUGGESTED BAG DIMENSIONS -->
    <div class="slide">
        <div class="slide-header">
            <h2 class="slide-title">2. Suggested Bag Sizing Specifications</h2>
            <span class="slide-number">Slide 03</span>
        </div>
        <div class="slide-content">
            <div class="grid-2" style="align-items: center;">
                <div>
                    <h3 style="font-family:'Outfit'; text-transform:uppercase; margin-top:0; font-size:18px; color:#D4FF00;">Landscape Box Pouch Dimensioning</h3>
                    <p style="font-size:12px; color:#a3b8ae; margin-bottom:15px; line-height:1.4;">Flat-bottom box pouches provide unmatched retail shelf presence. The sizing below is optimized for ground coffee densities and whole bean expansion volume. For custom runs, we offer 100% customizable sizes down to the millimeter to optimize cost and bag-to-volume ratio.</p>
                    <ul class="tech-list" style="font-size:11px;">
                        <li><strong>Ground Coffee vs Whole Beans:</strong> Ground coffee packs tightly (150g & 250g), while whole beans (500g & 1kg) require larger expandable volume and side gusset venting.</li>
                        <li><strong>Dieline Adjustments:</strong> Width and height parameters are optimized for folding consistency across both flat-bottom (square) and stand-up (doypack) layouts.</li>
                    </ul>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Roast SKU</th>
                                <th>Capacity</th>
                                <th>Dimensions (W × H + Gusset)</th>
                                <th>Layout Style</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="highlight-td">150g Ground</td>
                                <td>~150g coffee</td>
                                <td>13.5 × 14.5 + 8 cm</td>
                                <td>Landscape (魔方)</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">250g Ground</td>
                                <td>~250g coffee</td>
                                <td>15.5 × 16.5 + 8 cm</td>
                                <td>Landscape (魔方)</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">500g Beans</td>
                                <td>~500g beans</td>
                                <td>19.5 × 20.5 + 8 cm</td>
                                <td>Landscape (魔方)</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">1kg Beans</td>
                                <td>~1000g beans</td>
                                <td>23.0 × 24.0 + 10 cm</td>
                                <td>Landscape (魔方)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="slide-footer">
            <div class="logo-box"><div class="logo-dot"></div>ACHIEVE PACK & POUCH.ECO</div>
            <div>B2B COFFEE DIMENSIONS // SIZING TELEMETRY</div>
        </div>
    </div>

    <!-- SLIDE 4: BUDGET SOLUTION A (COST SAVING) -->
    <div class="slide">
        <div class="slide-header">
            <h2 class="slide-title">3. Solution A: Unprinted Pouch + Applied Sticker</h2>
            <span class="slide-number">Slide 04</span>
        </div>
        <div class="slide-content">
            <div class="grid-2">
                <div class="card" style="justify-content: space-between;">
                    <div>
                        <div class="card-title">
                            Stock Pouch + Custom Branded Sticker
                            <span class="card-badge">Fast Dispatch</span>
                        </div>
                        <p>We supply pre-made premium high-barrier matte white flat-bottom pouches with pre-installed resealable zippers and degassing valves. We print high-resolution color stickers matching your 4 blends (Pippingarra, Barrga Binya, Karijini, Cooya Pooya) and apply them locally.</p>
                    </div>
                    <ul class="tech-list" style="margin-top: 15px;">
                        <li><strong>Flat Unit Price:</strong> $0.50 USD flat per bag (All sizes!)</li>
                        <li><strong>Setup Cylinder Costs:</strong> $0.00 (Zero plate or cylinder setup costs)</li>
                        <li><strong>Minimum Order Quantity:</strong> 100 bags per SKU (Perfect for 1,600 bags total run)</li>
                        <li><strong>Lead Time:</strong> 3 - 5 days dispatch + air freight</li>
                    </ul>
                </div>
                <div style="display:flex; flex-direction:column; justify-content:center;">
                    ${conventionalData ? `<img src="${conventionalData}" class="preview-img" style="height: 180px;" alt="Stock Unprinted Flat Bottom Pouch" />` : ''}
                    <div style="font-size:10px; color:#557868; font-family:'JetBrains Mono', monospace; text-align:center;">
                        Premium unprinted matte white flat bottom pouch thumbnail
                    </div>
                </div>
            </div>
        </div>
        <div class="slide-footer">
            <div class="logo-box"><div class="logo-dot"></div>ACHIEVE PACK & POUCH.ECO</div>
            <div>SOLUTION A // ECONOMICAL LOW RUNS</div>
        </div>
    </div>

    <!-- SLIDE 5: CUSTOM PRINT SOLUTIONS B & C -->
    <div class="slide">
        <div class="slide-header">
            <h2 class="slide-title">4. Custom Digital Print Solutions (B & C)</h2>
            <span class="slide-number">Slide 05</span>
        </div>
        <div class="slide-content">
            <div class="grid-2">
                <div class="card">
                    <div>
                        <div class="card-title">
                            Solution B: Flat-Bottom Pouch
                            <span class="card-badge">Custom Box</span>
                        </div>
                        <p>100% full-bleed edge-to-edge custom print directly on the pouch, including colored side gussets for each blend. Printed on HP Indigo digital presses with a stunning premium matte white finish.</p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Recyclable PE+EVOH</th>
                                <th>Compostable Kraft</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="highlight-td">S (150g)</td>
                                <td class="price-tag">$2.50 /pc</td>
                                <td class="price-tag">$2.70 /pc</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">M (250g)</td>
                                <td class="price-tag">$2.60 /pc</td>
                                <td class="price-tag">$2.80 /pc</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">L (500g)</td>
                                <td class="price-tag">$2.70 /pc</td>
                                <td class="price-tag">$2.90 /pc</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">XL (1kg)</td>
                                <td class="price-tag">$2.90 /pc</td>
                                <td class="price-tag">$3.10 /pc</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card" style="border-color: rgba(212, 255, 0, 0.3);">
                    <div>
                        <div class="card-title">
                            Solution C: Stand-Up Pouch (Doypack)
                            <span class="card-badge" style="background:rgba(212,255,0,0.15)">50% Cost Saver</span>
                        </div>
                        <p>By transitioning from flat-bottom box pouch to standard Stand-Up Pouches (oval bottom gusset), we **save you 50% of the cost** for the same capacities! Sizing still fits perfectly. Retains zipper, valve, and full digital color print.</p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Recyclable (PE+EVOH)</th>
                                <th>Savings vs Flat Bottom</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="highlight-td">S (150g)</td>
                                <td class="price-tag" style="color:#ffffff;">$1.25 /pc</td>
                                <td style="color:#D4FF00; font-weight:bold;">Save 50.0%</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">M (250g)</td>
                                <td class="price-tag" style="color:#ffffff;">$1.30 /pc</td>
                                <td style="color:#D4FF00; font-weight:bold;">Save 50.0%</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">L (500g)</td>
                                <td class="price-tag" style="color:#ffffff;">$1.35 /pc</td>
                                <td style="color:#D4FF00; font-weight:bold;">Save 50.0%</td>
                            </tr>
                            <tr>
                                <td class="highlight-td">XL (1kg)</td>
                                <td class="price-tag" style="color:#ffffff;">$1.45 /pc</td>
                                <td style="color:#D4FF00; font-weight:bold;">Save 50.0%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="slide-footer">
            <div class="logo-box"><div class="logo-dot"></div>ACHIEVE PACK & POUCH.ECO</div>
            <div>SOLUTION B & C // CUSTOM DIGITAL PRINTING MATRICES</div>
        </div>
    </div>

    <!-- SLIDE 6: ARTWORK REQUIREMENTS & DESIGN SUPPORT -->
    <div class="slide">
        <div class="slide-header">
            <h2 class="slide-title">5. Artwork Requirements & Design Support</h2>
            <span class="slide-number">Slide 06</span>
        </div>
        <div class="slide-content">
            <div class="grid-2">
                <div class="card">
                    <div>
                        <div class="card-title">Dieline & Setup Requirements</div>
                        <p>To ensure perfect edge-to-edge full print registration on the PE+EVOH or Kraft substrate, artwork files must follow these specifications:</p>
                    </div>
                    <ul class="tech-list" style="font-size:11px;">
                        <li><strong>External Bleed:</strong> 3 mm bleed beyond diecut fold lines.</li>
                        <li><strong>Safe Area:</strong> Keep all essential text, logos, and nutrition details 5 mm away from creases and 15 mm away from the zipper channel.</li>
                        <li><strong>ZIP & Valve placement:</strong> Pre-set layout templates lock ZIP seals at 30 mm top header and valves centered 20 mm below zip line.</li>
                        <li><strong>Format:</strong> High-resolution vector file (Adobe Illustrator .AI or print-ready layered .PDF with fonts outlined).</li>
                    </ul>
                </div>

                <div class="card" style="background: rgba(212, 255, 0, 0.02); border-color: rgba(212, 255, 0, 0.1);">
                    <div>
                        <div class="card-title">
                            Complimentary Adaptation Support
                            <span class="card-badge">Free Assistance</span>
                        </div>
                        <p>We provide full design services to ensure your 16 SKU package assets are 100% production ready:</p>
                    </div>
                    <ul class="tech-list" style="font-size:11px;">
                        <li><strong>Free SKU Adaptation:</strong> Simply supply the finalized artwork for one size. Our team will scale and align elements across all other sizes at no charge.</li>
                        <li><strong>Gusset & Linework Alignment:</strong> We will ensure side-gusset color panels and colored linework wrap perfectly across folds without warping.</li>
                        <li><strong>3D Virtual Proofing:</strong> Interactive 3D web-link mockups will be created for each blend and size for your final digital approval.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="slide-footer">
            <div class="logo-box"><div class="logo-dot"></div>ACHIEVE PACK & POUCH.ECO</div>
            <div>ARTWORK STANDARDS // COMPLIMENTARY SKILLS</div>
        </div>
    </div>

    <!-- SLIDE 7: MEETING AGENDA & SAMPLE DISPATCH -->
    <div class="slide" style="background: radial-gradient(circle at 30% 70%, #062319 0%, #040d0a 100%);">
        <div class="slide-header">
            <h2 class="slide-title">6. Next Steps & Meeting Agenda</h2>
            <span class="slide-number">Slide 07</span>
        </div>
        <div class="slide-content" style="justify-content: space-around;">
            <div class="grid-2">
                <div class="card" style="background:rgba(0,0,0,0.4); border-color:rgba(212,255,0,0.1)">
                    <div class="card-title" style="color:#D4FF00;">Meeting Discussion Points</div>
                    <ul class="tech-list" style="font-size: 11.5px; line-height: 1.6;">
                        <li>Review your RedFoot Coffee visual mockups and side-gusset layout.</li>
                        <li>Confirm blend distribution matching the 4 sizes (150g, 250g, 500g, 1kg).</li>
                        <li>Finalize material selection matching WA logistics and freshness target.</li>
                        <li>Align on timeline milestones, sampling, and air freight scheduling.</li>
                    </ul>
                </div>
                <div class="card" style="background:rgba(0,0,0,0.4); border-color:rgba(255,255,255,0.05)">
                    <div class="card-title">B2B Physical Sample Kit</div>
                    <p>We are shipping a comprehensive B2B physical sample kit containing our matte white EVOH Recyclable, FSC Kraft Compostable, and high-barrier Aluminum foil bags directly to WA today. This allows you to test heat sealing, zipper strengths, and bean filling immediately.</p>
                    <div style="font-family:'JetBrains Mono', monospace; font-size:10px; color:#D4FF00; margin-top:10px;">
                        👉 Please supply your mailing address via WhatsApp or Email!
                    </div>
                </div>
            </div>
            
            <div style="text-align:center; margin-top:20px; font-family:'JetBrains Mono', monospace; font-size:12px; border: 2px dashed rgba(212,255,0,0.3); padding: 15px; border-radius:12px; background:rgba(4,13,10,0.6)">
                📅 Reschedule our Saturday meeting slot easily here: <strong style="color:#D4FF00;">achievepack.com/schedule</strong><br/>
                💻 Real-time telemetry: Model your packaging budget at <strong style="color:#D4FF00;">achievepack.com/coffee</strong>
            </div>
        </div>
        <div class="slide-footer">
            <div class="logo-box"><div class="logo-dot"></div>ACHIEVE PACK & POUCH.ECO</div>
            <div>B2B RESCHEDULING // PROTOCOL COLLABORATION</div>
        </div>
    </div>

</body>
</html>
`;
};

(async () => {
    const outputDir = path.join(projectDir, 'public/pdfs');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Launching browser to generate B2B proposal slide deck...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set custom viewport for high quality renders
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    
    console.log('Rendering HTML slide contents...');
    await page.setContent(generateHTML());
    
    const outputPath = path.join(outputDir, 'redfoot-coffee-packaging-proposal.pdf');
    console.log(`Compiling widescreen PDF deck to: ${outputPath}`);
    
    await page.pdf({
        path: outputPath,
        width: '297mm',
        height: '210mm',
        printBackground: true,
        margin: {
            top: '0mm',
            bottom: '0mm',
            left: '0mm',
            right: '0mm'
        }
    });

    await browser.close();
    console.log('Widescreen B2B proposal PDF presentation generated successfully!');
})();
