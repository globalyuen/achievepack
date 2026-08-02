import os
import math
from PIL import Image, ImageDraw, ImageFont

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

try:
    font_title = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 38)
    font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
    font_badge = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 17)
    font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 15)
    font_math = ImageFont.truetype("/System/Library/Fonts/Times New Roman.ttf", 26)
except Exception:
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_badge = ImageFont.load_default()
    font_small = ImageFont.load_default()
    font_math = ImageFont.load_default()

# 1. Hero Image with 355ml Reference Can Scale & Equation Callouts
def draw_hero_page1():
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(6, 78, 59))
    draw = ImageDraw.Draw(img)
    create_gradient(draw, (6, 78, 59), (15, 23, 42), WIDTH, HEIGHT)
    
    # Title & Badge
    draw.rounded_rectangle([70, 60, 480, 105], radius=20, fill=(16, 185, 129), outline=(255, 255, 255), width=2)
    draw.text((90, 72), "🌱 100% Bio-PE Recyclable #4 | I'm Green™", font=font_badge, fill=(15, 23, 42))
    
    draw.text((70, 130), "Bio-PE Recyclable Flat Bottom Coffee Pouch", font=font_title, fill=(255, 255, 255))
    draw.text((70, 180), "14-Year Packaging Engineer Master Specification & Mathematical Modeling", font=font_sub, fill=(56, 189, 248))
    
    # 3D Pouch Mockup (Center Left)
    pouch_x, pouch_y, pouch_w, pouch_h = 580, 160, 310, 470
    draw.rounded_rectangle([pouch_x, pouch_y, pouch_x + pouch_w, pouch_y + pouch_h], radius=18, fill=(245, 248, 250), outline=(16, 185, 129), width=4)
    # Label on pouch
    draw.rounded_rectangle([pouch_x + 25, pouch_y + 130, pouch_x + pouch_w - 25, pouch_y + pouch_h - 40], radius=10, fill=(6, 78, 59), outline=(56, 189, 248), width=2)
    draw.text((pouch_x + 45, pouch_y + 160), "ETHIOPIAN YIRGACHEFFE", font=font_badge, fill=(255, 255, 255))
    draw.text((pouch_x + 45, pouch_y + 190), "Single Origin Roasted Beans", font=font_small, fill=(56, 189, 248))
    draw.text((pouch_x + 45, pouch_y + 260), "12 oz / 340g Net Weight", font=font_badge, fill=(16, 185, 129))
    draw.text((pouch_x + 45, pouch_y + 290), "4.9\" x 7.8\" + 3.1\" Gusset", font=font_small, fill=(200, 220, 240))
    # Valve & Zipper
    draw.ellipse([pouch_x + pouch_w//2 - 20, pouch_y + 70, pouch_x + pouch_w//2 + 20, pouch_y + 110], fill=(220, 230, 240), outline=(16, 185, 129), width=3)
    draw.line([(pouch_x + 20, pouch_y + 50), (pouch_x + pouch_w - 20, pouch_y + 50)], fill=(160, 175, 190), width=3)
    
    # 355ml Can Scale Reference (Center Right)
    can_x, can_y, can_w, can_h = 940, 260, 160, 360
    draw.rounded_rectangle([can_x, can_y, can_x + can_w, can_y + can_h], radius=30, fill=(220, 225, 230), outline=(100, 115, 130), width=3)
    draw.ellipse([can_x, can_y - 10, can_x + can_w, can_y + 30], fill=(180, 190, 200), outline=(100, 115, 130), width=2)
    draw.text((can_x + 25, can_y + 150), "355ml CAN", font=font_badge, fill=(15, 23, 42))
    draw.text((can_x + 25, can_y + 180), "2.6\" x 4.8\"", font=font_small, fill=(70, 85, 100))
    draw.text((can_x + 20, can_y + 200), "(66mm x 122mm)", font=font_small, fill=(70, 85, 100))

    # Left Side Equations Box
    draw.rounded_rectangle([70, 240, 520, 630], radius=16, fill=(15, 23, 42, 220), outline=(56, 189, 248), width=2)
    draw.text((90, 260), "📐 Packaging Engineering Math & Equations", font=font_badge, fill=(56, 189, 248))
    
    eqs = [
        "1. Oxygen Decay Equation (OTR):",
        "   OTR_eff = 1 / Σ(t_i / P_i) < 0.5 cc/m²/24hr",
        "2. Shelf Life Expectancy (t_shelf):",
        "   t_shelf = Δ[O₂]_crit / (OTR · A/V) ≥ 365 Days",
        "3. Valve Hydrodynamic Opening Threshold:",
        "   P_open = 3.0 ± 0.2 mbar (Vents CO₂)",
        "4. Heat Seal Bond Kinetics:",
        "   S = k · (T - T_g) · ln(t_dwell) · P_jaw"
    ]
    for idx, eq in enumerate(eqs):
        color = (16, 185, 129) if "OTR" in eq or "t_shelf" in eq or "P_open" in eq or "S =" in eq else (230, 240, 250)
        draw.text((90, 300 + idx * 38), eq, font=font_small, fill=color)

    return img

# 2. Content 1: Oxygen Barrier & Shelf Life Decay Formula Diagram
def draw_content_1_page1():
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)
    create_gradient(draw, (15, 23, 42), (30, 41, 59), WIDTH, HEIGHT)
    
    draw.text((70, 40), "OXYGEN PERMEABILITY & SHELF LIFE DECAY EQUATION", font=font_sub, fill=(56, 189, 248))
    draw.text((70, 75), "EVOH Barrier Layer Polymer Permeance Kinetics", font=font_title, fill=(255, 255, 255))
    
    # Equation Display Banner
    draw.rounded_rectangle([70, 135, 1210, 220], radius=14, fill=(6, 78, 59), outline=(16, 185, 129), width=2)
    draw.text((90, 155), "Effective Oxygen Transmission Rate Formula:  OTR_eff = 1 / [ (t_BioPE / P_PE) + (t_EVOH / P_EVOH) ]", font=font_badge, fill=(255, 255, 255))
    draw.text((90, 185), "Result: OTR_eff = 0.45 cc/m²/24hr @ 23°C 0% RH  →  Extends Coffee Shelf Life from 21 Days to 365+ Days", font=font_small, fill=(16, 185, 129))

    # Graph (Left)
    draw.rounded_rectangle([70, 250, 620, 650], radius=16, fill=(20, 30, 50), outline=(100, 116, 139), width=1)
    draw.text((90, 270), "Coffee Flavor Volatiles Retention vs OTR (Months)", font=font_badge, fill=(255, 255, 255))
    # Axis
    draw.line([(120, 320), (120, 580)], fill=(200, 210, 220), width=2)
    draw.line([(120, 580), (580, 580)], fill=(200, 210, 220), width=2)
    draw.text((120, 595), "0m        3m        6m        9m        12m", font=font_small, fill=(150, 165, 180))
    # Curve 1: Standard Eco PE (Fails at 1m)
    draw.line([(120, 340), (220, 520), (320, 570), (580, 580)], fill=(239, 68, 68), width=3)
    draw.text((230, 500), "Standard PE (OTR >25)", font=font_small, fill=(239, 68, 68))
    # Curve 2: Bio-PE + EVOH (Maintains >90% at 12m)
    draw.line([(120, 340), (220, 350), (320, 360), (450, 375), (580, 390)], fill=(16, 185, 129), width=4)
    draw.text((330, 340), "Bio-PE + EVOH (OTR <0.5)", font=font_badge, fill=(16, 185, 129))

    # Detailed Specs Column (Right)
    draw.rounded_rectangle([660, 250, 1210, 650], radius=16, fill=(20, 30, 50), outline=(16, 185, 129), width=2)
    draw.text((680, 270), "🔬 Lamination Layer Breakdown & Parameters", font=font_badge, fill=(16, 185, 129))
    
    specs = [
        ("Layer 1 (Outer): Soft-Touch Bio-PE Film", "Thickness: 50µm | Density: 0.954 g/cm³ | Sugarcane Ethanol Origin"),
        ("Layer 2 (Core): EVOH High Oxygen Barrier", "Thickness: 5µm (<5% total weight) | OTR: 0.2 cc/m²/24hr | Gas Shield"),
        ("Layer 3 (Inner): Bio-PE Sealant Layer", "Thickness: 65µm | Seal Range: 135°C–145°C | High Hot-Tack Strength"),
        ("Water Vapor Transmission Rate (WVTR)", "WVTR < 0.8 g/m²/24hr @ 38°C 90% RH (Moisture Protection)"),
        ("Recyclability Compliance Class", "100% Recyclable #4 PE Stream (APR & RecyClass Certified)")
    ]
    for idx, (h, d) in enumerate(specs):
        y = 310 + idx * 65
        draw.text((680, y), f"• {h}", font=font_badge, fill=(255, 255, 255))
        draw.text((700, y + 22), d, font=font_small, fill=(160, 180, 200))

    return img

# 3. Content 2: One-Way Degassing Valve Hydrodynamics & Burst Pressure
def draw_content_2_page1():
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)
    create_gradient(draw, (15, 23, 42), (25, 35, 60), WIDTH, HEIGHT)
    
    draw.text((70, 40), "VALVE HYDRODYNAMICS & BURST PRESSURE CALCULATION", font=font_sub, fill=(16, 185, 129))
    draw.text((70, 75), "Mono-PE One-Way Degassing Valve Mechanics", font=font_title, fill=(255, 255, 255))
    
    # Equation Display Banner
    draw.rounded_rectangle([70, 135, 1210, 220], radius=14, fill=(30, 41, 59), outline=(56, 189, 248), width=2)
    draw.text((90, 155), "Valve Opening Threshold: P_open = 3.0 ± 0.2 mbar  |  Bag Bursting Formula: P_burst = (2 · σ · t) / r", font=font_badge, fill=(56, 189, 248))
    draw.text((90, 185), "Ensures 10L CO₂ degassing per kg of fresh roasted coffee without structural seam delamination or oxygen backflow.", font=font_small, fill=(200, 220, 240))

    # Valve Graphic (Left)
    draw.rounded_rectangle([70, 250, 550, 650], radius=16, fill=(20, 30, 50), outline=(16, 185, 129), width=2)
    draw.ellipse([210, 310, 410, 510], fill=(220, 230, 240), outline=(16, 185, 129), width=5)
    draw.ellipse([260, 360, 360, 460], fill=(180, 195, 210), outline=(16, 185, 129), width=3)
    for a in range(0, 360, 45):
        rad = math.radians(a)
        x1 = 310 + 45 * math.cos(rad)
        y1 = 410 + 45 * math.sin(rad)
        x2 = 310 + 70 * math.cos(rad)
        y2 = 410 + 70 * math.sin(rad)
        draw.line([(x1, y1), (x2, y2)], fill=(16, 185, 129), width=3)
    draw.text((180, 540), "Mono-PE Diaphragm Valve", font=font_badge, fill=(255, 255, 255))
    draw.text((195, 570), "(100% PE Stream Recyclable)", font=font_small, fill=(16, 185, 129))

    # Valve Physics Parameters Table (Right)
    draw.rounded_rectangle([590, 250, 1210, 650], radius=16, fill=(20, 30, 50), outline=(100, 116, 139), width=1)
    draw.text((610, 270), "📊 Valve Engineering Specification Matrix", font=font_badge, fill=(255, 255, 255))
    
    matrix = [
        ("Parameter", "Technical Specification", "Roastery Operational Impact"),
        ("Valve Diaphragm Material", "100% Polyethylene (PE)", "No recycling stream contamination"),
        ("Opening Pressure (P_open)", "2.5 mbar – 3.5 mbar", "Vents CO₂ instantly upon roasting"),
        ("Closing Pressure (P_close)", "≥ 1.0 mbar", "Blocks O₂ backflow completely"),
        ("Airflow Flow Rate @ 10 mbar", "≥ 12.5 Liters / Hour", "Prevents high-altitude bag ballooning"),
        ("Filter Paper Disks", "Micro-Porous PE Filter", "Blocks fine coffee dust clogging"),
        ("Pocket Tear Zipper", "Recessed Pull-Tab Zipper", "Easy fill line operation without spill")
    ]
    for idx, (p, s, i) in enumerate(matrix):
        y = 310 + idx * 46
        bg_c = (30, 45, 70) if idx == 0 else (25, 35, 55)
        text_c = (56, 189, 248) if idx == 0 else (240, 245, 250)
        draw.rectangle([610, y, 1190, y + 40], fill=bg_c)
        draw.text((620, y + 10), p[:18], font=font_small, fill=text_c)
        draw.text((790, y + 10), s[:22], font=font_small, fill=text_c)
        draw.text((990, y + 10), i[:22], font=font_small, fill=text_c)

    return img

# 4. Content 3: Heat Seal Kinetic Bond & VFFS Machine Runnability
def draw_content_3_page1():
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)
    create_gradient(draw, (20, 15, 35), (40, 20, 50), WIDTH, HEIGHT)
    
    draw.text((70, 40), "HEAT SEAL KINETICS & VFFS MACHINE RUNNABILITY", font=font_sub, fill=(245, 158, 11))
    draw.text((70, 75), "VFFS Automated Filling Line Temperature & Pressure Curve", font=font_title, fill=(255, 255, 255))
    
    # Banner Equation
    draw.rounded_rectangle([70, 135, 1210, 220], radius=14, fill=(40, 20, 50), outline=(245, 158, 11), width=2)
    draw.text((90, 155), "Heat Seal Bond Kinetic Formula:  S_seal = k · (T_jaw - T_g) · ln(t_dwell) · P_jaw", font=font_badge, fill=(245, 158, 11))
    draw.text((90, 185), "Calibrated VFFS Settings: Temp = 142°C | Dwell Time = 1.2 sec | Jaw Pressure = 4.2 bar  →  Seam Strength ≥ 45 N/15mm", font=font_small, fill=(240, 245, 250))

    # 3 VFFS Performance Cards
    cards = [
        ("⚡ High-Speed VFFS Runnability", "Runs smoothly at 80 bags/min on Bosch, Matrix, and Syntegon vertical form-fill-seal lines with 0% film jamming."),
        ("🔒 Hermetic Hot-Tack Sealing", "Low-density Bio-PE inner sealant layer seals securely through fine coffee dust particles without channel leaks."),
        ("🛒 100% Upright Shelf Stability", "5-Panel flat bottom box structure guarantees maximum retail shelf presence matching 355ml can reference scale.")
    ]
    for i, (title, desc) in enumerate(cards):
        x = 70 + i * 385
        draw.rounded_rectangle([x, 250, x + 365, 650], radius=16, fill=(25, 30, 50), outline=(245, 158, 11), width=2)
        draw.ellipse([x + 140, 290, x + 220, 370], fill=(245, 158, 11))
        draw.text((x + 165, 315), f"0{i+1}", font=font_title, fill=(20, 10, 30))
        draw.text((x + 20, 400), title, font=font_badge, fill=(255, 255, 255))
        
        words = desc.split(' ')
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
            draw.text((x + 20, 450 + line_idx * 28), line, font=font_small, fill=(200, 215, 230))

    return img

print("Generating Page 1 targeted equation-based images...")

imgs_page1 = [
    ("bio-pe-coffee-flat-bottom-pouch-hero.jpg", draw_hero_page1()),
    ("bio-pe-coffee-flat-bottom-pouch-content-1.jpg", draw_content_1_page1()),
    ("bio-pe-coffee-flat-bottom-pouch-content-2.jpg", draw_content_2_page1()),
    ("bio-pe-coffee-flat-bottom-pouch-content-3.jpg", draw_content_3_page1())
]

for filename, img_obj in imgs_page1:
    img_obj.save(os.path.join(output_dir_ap, filename), "JPEG", quality=95)
    img_obj.save(os.path.join(output_dir_ep, filename), "JPEG", quality=95)

print("Page 1 equation-based images successfully generated and saved!")
