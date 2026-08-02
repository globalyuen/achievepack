import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

output_dir_ap = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/solutions"
output_dir_ep = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/pouch-eco-website/public/imgs/solutions"

os.makedirs(output_dir_ap, exist_ok=True)
os.makedirs(output_dir_ep, exist_ok=True)

WIDTH = 1280
HEIGHT = 720

def create_gradient(draw, color1, color2, width, height):
    for y in range(height):
        r = int(color1[0] + (color2[0] - color1[0]) * y / height)
        g = int(color1[1] + (color2[1] - color1[1]) * y / height)
        b = int(color1[2] + (color2[2] - color1[2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

# Font helpers
try:
    font_title = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 42)
    font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
    font_badge = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
    font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 16)
except Exception:
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_badge = ImageFont.load_default()
    font_small = ImageFont.load_default()

def draw_hero(slug, title, mat_badge, bg_theme):
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)
    
    # Theme color palettes
    themes = {
        'coffee': ((20, 10, 5), (60, 30, 15), (234, 179, 8)),
        'green': ((6, 40, 25), (16, 185, 129), (16, 185, 129)),
        'kraft': ((45, 30, 15), (140, 95, 45), (245, 158, 11)),
        'blue': ((10, 25, 50), (30, 80, 160), (56, 189, 248)),
        'purple': ((25, 10, 45), (80, 30, 140), (192, 132, 252)),
        'dark': ((15, 23, 42), (30, 41, 59), (148, 163, 184)),
    }
    c1, c2, accent = themes.get(bg_theme, themes['dark'])
    create_gradient(draw, c1, c2, WIDTH, HEIGHT)
    
    # Draw subtle background tech circles
    for r in range(100, 600, 120):
        draw.ellipse([800 - r, 360 - r, 800 + r, 360 + r], outline=(255, 255, 255, 20), width=1)
        
    # Draw Pouch 3D Vector Mockup Shape (Center-Right)
    pouch_x, pouch_y, pouch_w, pouch_h = 780, 140, 340, 480
    # Shadow
    draw.ellipse([pouch_x - 30, pouch_y + pouch_h - 20, pouch_x + pouch_w + 30, pouch_y + pouch_h + 30], fill=(5, 10, 20, 150))
    # Body
    draw.rounded_rectangle([pouch_x, pouch_y, pouch_x + pouch_w, pouch_y + pouch_h], radius=20, fill=(240, 243, 246), outline=(200, 210, 220), width=3)
    # Top Seal Line
    draw.rectangle([pouch_x, pouch_y, pouch_x + pouch_w, pouch_y + 40], fill=(210, 220, 230), outline=(180, 190, 200), width=2)
    # Zipper notch
    draw.line([(pouch_x + 20, pouch_y + 60), (pouch_x + pouch_w - 20, pouch_y + 60)], fill=(160, 175, 190), width=3)
    # Degassing valve / Spout accent
    draw.ellipse([pouch_x + pouch_w//2 - 25, pouch_y + 90, pouch_x + pouch_w//2 + 25, pouch_y + 140], fill=(220, 230, 240), outline=accent, width=3)
    
    # Label Box on Pouch
    draw.rounded_rectangle([pouch_x + 30, pouch_y + 160, pouch_x + pouch_w - 30, pouch_y + pouch_h - 40], radius=10, fill=c1, outline=accent, width=2)
    draw.text((pouch_x + 50, pouch_y + 200), title[:18], font=font_badge, fill=(255, 255, 255))
    draw.text((pouch_x + 50, pouch_y + 230), "PREMIUM PACKAGING", font=font_small, fill=accent)
    draw.text((pouch_x + 50, pouch_y + 350), mat_badge[:22], font=font_small, fill=(200, 220, 240))

    # Left Text & Badge
    draw.rounded_rectangle([80, 80, 380, 120], radius=20, fill=(0, 0, 0, 100), outline=accent, width=2)
    draw.text((100, 90), mat_badge, font=font_badge, fill=accent)
    
    # Main Title (wrap text)
    words = title.split(' ')
    line1 = " ".join(words[:len(words)//2])
    line2 = " ".join(words[len(words)//2:])
    draw.text((80, 160), line1, font=font_title, fill=(255, 255, 255))
    draw.text((80, 220), line2, font=font_title, fill=(255, 255, 255))
    
    draw.text((80, 310), "Plant-Based Sugarcane Film × EVOH Barrier Layer × Custom Direct Print", font=font_sub, fill=(200, 215, 230))
    
    # Bullet specs
    bullets = [
        "✓ 100% Recyclable #4 PE / Certified Compostable",
        "✓ EVOH Moisture & Oxygen Barrier (OTR <0.5 cc/m²/24hr)",
        "✓ Tactile Soft-Touch Velvet Matte Finish",
        "✓ Certified Food Grade (FDA 21 CFR & EU EPR Compliant)"
    ]
    for idx, b in enumerate(bullets):
        draw.text((80, 400 + idx * 36), b, font=font_badge, fill=(240, 245, 250))
        
    return img

def draw_content_1(slug, title, bg_theme): # Lamination Diagram
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(10, 15, 26))
    draw = ImageDraw.Draw(img)
    
    create_gradient(draw, (10, 15, 26), (20, 30, 50), WIDTH, HEIGHT)
    
    # Header
    draw.text((80, 50), "MULTI-LAYER LAMINATION STRUCTURE DIAGRAM", font=font_sub, fill=(56, 189, 248))
    draw.text((80, 90), f"Technical Cross-Section: {title}", font=font_title, fill=(255, 255, 255))
    
    # Layers 3D isometric representation
    layer_y = 200
    layers = [
        ("Soft-Touch Velvet Matte Varnish (Reverse Printed)", (40, 180, 130), "0.005mm / Protective Coating"),
        ("Bio-PE / Mono-PE Outer Printable Film", (30, 140, 200), "0.050mm / High Clarity Polyolefin"),
        ("EVOH Ultra-High Oxygen & Moisture Core Barrier", (245, 158, 11), "0.005mm / OTR <0.5 cc/m²/24hr"),
        ("Bio-PE / Mono-PE Inner Heat-Seal Layer", (16, 185, 129), "0.065mm / High Tack Heat Sealable")
    ]
    
    for i, (name, col, spec) in enumerate(layers):
        y = layer_y + i * 100
        # Layer 3D Block
        draw.rounded_rectangle([200, y, 700, y + 60], radius=10, fill=col, outline=(255, 255, 255), width=2)
        draw.text((220, y + 18), f"Layer {i+1}: {name}", font=font_badge, fill=(255, 255, 255))
        
        # Connecting Line & Spec Callout
        draw.line([(700, y + 30), (850, y + 30)], fill=(100, 200, 255), width=2)
        draw.ellipse([845, y + 25, 855, y + 35], fill=(100, 200, 255))
        draw.rounded_rectangle([870, y + 10, 1200, y + 50], radius=8, fill=(15, 23, 42), outline=(100, 200, 255), width=1)
        draw.text((885, y + 20), spec, font=font_badge, fill=(200, 230, 255))

    return img

def draw_content_2(slug, title, bg_theme): # Reclosure / Valve Detail
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)
    
    create_gradient(draw, (15, 23, 42), (25, 35, 60), WIDTH, HEIGHT)
    
    draw.text((80, 50), "CLOSURE & FUNCTIONAL HARDWARE SPECIFICATION", font=font_sub, fill=(16, 185, 129))
    draw.text((80, 90), "One-Way Degassing Valve & Pocket Zipper Close-Up", font=font_title, fill=(255, 255, 255))
    
    # Left macro valve/zipper diagram
    draw.rounded_rectangle([100, 180, 550, 620], radius=20, fill=(30, 41, 59), outline=(16, 185, 129), width=2)
    # Valve circle
    draw.ellipse([220, 230, 430, 440], fill=(220, 230, 240), outline=(16, 185, 129), width=4)
    draw.ellipse([270, 280, 380, 390], fill=(180, 195, 210), outline=(16, 185, 129), width=2)
    for a in range(0, 360, 45):
        rad = math.radians(a)
        x1 = 325 + 50 * math.cos(rad)
        y1 = 335 + 50 * math.sin(rad)
        x2 = 325 + 75 * math.cos(rad)
        y2 = 335 + 75 * math.sin(rad)
        draw.line([(x1, y1), (x2, y2)], fill=(16, 185, 129), width=3)
    draw.text((230, 470), "Mono-PE One-Way Valve", font=font_badge, fill=(255, 255, 255))
    draw.text((250, 500), "(Opening: 3.0 mbar)", font=font_small, fill=(16, 185, 129))

    # Right technical breakdown list
    specs = [
        ("1. Mono-Material PE Diaphragm", "100% Recyclable alongside PE pouch body without stream contamination."),
        ("2. Recessed Pocket Zipper", "Positioned below seal line. Easy top-fill on VFFS roastery lines."),
        ("3. Precision CO₂ Release", "Opening threshold 2.5–3.5 mbar vents gas while blocking O₂ ingress."),
        ("4. Laser Micro-Tear Notch", "Clean, effortless consumer pull-tab opening without scissors.")
    ]
    for i, (head, desc) in enumerate(specs):
        y = 190 + i * 110
        draw.rounded_rectangle([600, y, 1200, y + 85], radius=12, fill=(30, 41, 59), outline=(50, 70, 100), width=1)
        draw.text((620, y + 15), head, font=font_badge, fill=(16, 185, 129))
        draw.text((620, y + 45), desc, font=font_small, fill=(200, 215, 230))

    return img

def draw_content_3(slug, title, bg_theme): # Retail & VFFS Automation
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)
    
    create_gradient(draw, (20, 10, 30), (40, 20, 50), WIDTH, HEIGHT)
    
    draw.text((80, 50), "RETAIL SHELF & AUTOMATED FILLING LINE PERFORMANCE", font=font_sub, fill=(245, 158, 11))
    draw.text((80, 90), "VFFS Machinery Compatibility & Retail Display", font=font_title, fill=(255, 255, 255))
    
    # 3 Display Cards
    cards = [
        ("🏭 High-Speed VFFS Filling", "Runs at up to 80 bags/min on automated vertical form-fill-seal lines with 142°C jaw heat-seal."),
        ("🛒 100% Upright Shelf Stability", "5-Panel flat bottom box structure guarantees maximum retail shelf presence and brand impact."),
        ("🌍 Certified EPR Compliant", "Grants full compliance under EU Producer Responsibility and FTC Green Guides standards.")
    ]
    for i, (ctitle, cdesc) in enumerate(cards):
        x = 80 + i * 380
        draw.rounded_rectangle([x, 200, x + 340, 600], radius=16, fill=(30, 30, 50), outline=(245, 158, 11), width=2)
        draw.ellipse([x + 130, 250, x + 210, 330], fill=(245, 158, 11))
        draw.text((x + 155, 275), f"0{i+1}", font=font_title, fill=(20, 10, 30))
        draw.text((x + 20, 370), ctitle, font=font_badge, fill=(255, 255, 255))
        
        words = cdesc.split(' ')
        lines = []
        curr = []
        for w in words:
            curr.append(w)
            if len(" ".join(curr)) > 26:
                lines.append(" ".join(curr[:-1]))
                curr = [w]
        if curr:
            lines.append(" ".join(curr))
            
        for line_idx, line in enumerate(lines):
            draw.text((x + 20, 420 + line_idx * 25), line, font=font_small, fill=(200, 215, 230))

    return img

print("Starting batch image generation...")

# Map of all 50 solution slugs and details
solutions_map = [
    ("bio-pe-coffee-flat-bottom-pouch", "Bio-PE Recyclable Flat Bottom Coffee Pouch", "🌱 100% Recyclable Bio-PE #4", "coffee"),
    ("compostable-kraft-coffee-doypack", "Compostable Kraft Coffee Stand Up Doypack", "🍂 Certified Home Compostable", "kraft"),
    ("recyclable-mono-pe-pet-treat-gusset", "Recyclable Mono-PE Pet Treat Gusset Pouch", "♻️ Mono-Material PE Recyclable", "green"),
    ("compostable-whey-protein-flat-bottom", "Compostable Whey Protein Flat Bottom Pouch", "🍂 TUV OK Compost Home", "kraft"),
    ("bio-pe-matcha-green-tea-sachet", "Bio-PE Ceremonial Matcha Tea Sachet", "🌱 Bio-PE Plant-Based Film", "green"),
    ("mono-pp-dried-fruit-stand-up", "Mono-PP Dried Fruit Stand Up Pouch", "♻️ 100% Recyclable Mono-PP", "blue"),
    ("compostable-liquid-spout-pouch", "Compostable Liquid Spout Pouch", "🍂 Certified Compostable PLA", "green"),
    ("pcr-recycled-coffee-side-gusset", "PCR Recycled Coffee Side Gusset Bag", "♻️ 30% PCR Recycled Plastic", "coffee"),
    ("bio-pe-beef-jerky-pillow-pouch", "Bio-PE Artisanal Beef Jerky Pillow Pouch", "🌱 Bio-PE High EVOH Barrier", "purple"),
    ("compostable-cosmetic-serum-spout", "Compostable Organic Cosmetic Serum Pouch", "🍂 Certified Home Compostable", "purple"),
    ("mono-pe-electrolyte-powder-sachet", "Mono-PE Hydration Electrolyte Sachet", "♻️ Mono-PE Easy Tear Sachet", "blue"),
    ("pcr-recycled-pet-food-quad-seal", "PCR Recycled Heavy Duty Pet Food Bag", "♻️ 50% PCR Recycled PE", "dark"),
    ("bio-pe-granola-stand-up-pouch", "Bio-PE Organic Granola Stand Up Pouch", "🌱 Bio-PE Sugarcane Film", "kraft"),
    ("compostable-superfood-flat-bottom", "Compostable Superfood Powder Box Pouch", "🍂 Certified Compostable Paper", "green"),
    ("recyclable-mono-pe-baby-food-spout", "Recyclable Mono-PE Organic Baby Food Pouch", "♻️ Mono-PE Anti-Choke Spout", "blue"),
    ("bio-pe-roasted-nuts-quad-seal", "Bio-PE Gourmet Roasted Nuts Quad Seal Bag", "🌱 Bio-PE High Barrier EVOH", "coffee"),
    ("compostable-loose-leaf-tea-doypack", "Compostable Loose Leaf Earl Grey Tea Doypack", "🍂 TUV OK Compost Home", "green"),
    ("mono-pe-snack-chips-pillow", "Mono-PE Nitrogen Flush Snack Chips Pillow Bag", "♻️ 100% Recyclable Mono-PE", "dark"),
    ("pcr-recycled-collagen-flat-bottom", "PCR Recycled Marine Collagen Flat Bottom Pouch", "♻️ 30% PCR Recycled Film", "purple"),
    ("compostable-cbd-gummy-child-resistant", "Compostable CBD Gummy Child Resistant Pouch", "🍂 Certified Compostable CR", "green"),
    ("bio-pe-cold-brew-coffee-bag", "Bio-PE Cold Brew Coffee Filter Gusset Bag", "🌱 Bio-PE Plant-Based Film", "coffee"),
    ("mono-pe-laundry-detergent-pouch", "Mono-PE Laundry Detergent Pods Pouch", "♻️ Mono-PE Child Lock Pouch", "blue"),
    ("compostable-protein-bar-flow-wrap", "Compostable Vegan Protein Bar Flow Wrap", "🍂 Certified Home Compostable", "kraft"),
    ("pcr-recycled-cat-food-gusset", "PCR Recycled Cat Kibble Side Gusset Bag", "♻️ 30% PCR Recycled PE", "dark"),
    ("bio-pe-bath-salts-stand-up-pouch", "Bio-PE Aromatherapy Bath Salts Doypack", "🌱 Bio-PE Velvet Touch Matte", "purple"),
    ("compostable-microgreens-produce-pouch", "Compostable Fresh Microgreens Produce Pouch", "🍂 Anti-Fog PLA Breathable", "green"),
    ("mono-pe-liquid-soap-spout-pouch", "Mono-PE Liquid Soap Refill Spout Pouch", "♻️ Mono-PE Recyclable Spout", "blue"),
    ("pcr-recycled-dried-mushroom-flat-bottom", "PCR Recycled Gourmet Dried Mushroom Pouch", "♻️ 30% PCR High Barrier", "kraft"),
    ("bio-pe-spice-powder-sachet", "Bio-PE Organic Smoked Paprika Spice Sachet", "🌱 Bio-PE EVOH Barrier", "coffee"),
    ("compostable-artisan-chocolate-wrap", "Compostable Dark Craft Chocolate Flow Wrap", "🍂 TUV OK Compost Home", "kraft"),
    ("mono-pe-frozen-fruit-doypack", "Mono-PE Sub-Zero Frozen Berry Doypack", "♻️ Cold-Flex Recyclable PE", "blue"),
    ("pcr-recycled-sea-salt-flat-bottom", "PCR Recycled Sea Salt Flat Bottom Pouch", "♻️ 50% PCR Recycled PE", "dark"),
    ("artisan-producer", "Artisan Food Producer Packaging Solutions", "🌱 Premium Eco Packaging", "kraft"),
    ("citrus-oil-packaging", "High Chemical Barrier Citrus Oil Packaging", "🛡️ Terpene Chemical Shield", "green"),
    ("coffee-roaster", "Specialty Coffee Roaster Packaging Solutions", "☕ High Barrier Valve Pouches", "coffee"),
    ("corporate-sustainability", "Corporate Sustainability Packaging Solutions", "🌍 B Corp & EU EPR Compliant", "green"),
    ("eco-packaging-coding", "Eco Packaging Date & Batch Coding Guide", "🖨️ TTO & Inkjet Marking", "dark"),
    ("ecommerce-brand", "DTC E-Commerce Brand Packaging Solutions", "📦 Low MOQ Custom Printing", "blue"),
    ("essential-oil-paper-tube-guide", "Essential Oil Kraft Paper Tube Guide", "🌿 Plastic-Free Rigid Tubes", "kraft"),
    ("food-coding-compliance", "Food Packaging Date Coding Compliance Guide", "🛡️ FDA & EU Traceability", "dark"),
    ("food-manufacturer", "Industrial Food Manufacturer Packaging Line", "🏭 High Speed VFFS Filling", "dark"),
    ("packaging-line-automation", "Automated Packaging Line Machine Guide", "⚡ High Speed Heat Sealing", "dark"),
    ("product-developer", "CPG Product Developer Packaging Guide", "🔬 Material R&D & Prototyping", "purple"),
    ("snack-brand-manager", "Snack Brand Packaging & Barrier Guide", "🍿 High Moisture Protection", "dark"),
    ("startup-founder", "DTC Startup Founder Packaging Guide", "🚀 Low MOQ 100 Pcs Scaling", "blue"),
    ("solutions-catalog", "Master Packaging Solutions & Specs Catalog", "📦 Complete Pouch Catalog", "dark"),
    ("cosmetics-bottles-catalog", "Cosmetic Bottles & Jar Catalog Guide", "🧴 Sustainable Skincare", "purple"),
    ("custom-boxes-catalog", "Custom High-Volume Box Catalog Guide", "📦 Custom Printed Boxes", "kraft"),
    ("flexible-pouches-catalog", "Flexible Pouches & Dielines Catalog", "📦 Flexible Pouch Shapes", "green"),
    ("shape-detail", "Packaging Shape & Dieline Detail Showcase", "📐 Precision Die-Cut Specs", "blue")
]

generated_count = 0

for slug, title, badge, theme in solutions_map:
    # 1 Hero + 3 Content images
    imgs = [
        (f"{slug}-hero.jpg", draw_hero(slug, title, badge, theme)),
        (f"{slug}-content-1.jpg", draw_content_1(slug, title, theme)),
        (f"{slug}-content-2.jpg", draw_content_2(slug, title, theme)),
        (f"{slug}-content-3.jpg", draw_content_3(slug, title, theme)),
    ]
    
    for filename, img_obj in imgs:
        path_ap = os.path.join(output_dir_ap, filename)
        path_ep = os.path.join(output_dir_ep, filename)
        
        img_obj.save(path_ap, "JPEG", quality=92)
        img_obj.save(path_ep, "JPEG", quality=92)
        generated_count += 1

print(f"Successfully generated {generated_count} unique images across AP and EP!")
