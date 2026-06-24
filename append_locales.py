import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Color Accuracy in Digital Printing | POUCH.ECO",
    "description": "Understand the digital vs. physical color gap. Learn why standard group printing causes a 10% variance and when you need an individual color run."
  },
  "hero": {
    "label": "COLOR_GUIDE: DIGITAL_V_PHYSICAL",
    "titleLine1": "RGB vs.",
    "titleLine2": "CMYK",
    "titleLine3": "Reality.",
    "bullet1": "> Screens glow. Ink absorbs.",
    "bullet2": "> Expect a 10% natural variance.",
    "bullet3": "> Precision runs vs Group efficiency.",
    "cta": "Talk to an Expert",
    "imgAlt": "Digital Printing Color Accuracy",
    "hexLabel": "HEX #B99A5A"
  },
  "deepDive": {
    "titleLine1": "The Digital vs.",
    "titleLine2": "Physical Gap",
    "intro1": "To ensure we achieve the best result for your packaging, there are a few technical realities regarding color that are important to consider before we move to production. The hex code you provided (e.g., ",
    "intro2": ") is a digital value designed for screens (RGB). Physical printing presses use ink (CMYK).",
    "features": {
      "screenVariance": {
        "title": "Screen Variance",
        "desc": "Every monitor displays color differently depending on its brightness and calibration. The \"gold\" you see on your phone will look different than the \"gold\" on your laptop."
      },
      "rule10": {
        "title": "The 10% Rule",
        "desc1": "Because light (screen) and ink (paper/plastic) are different mediums, a ",
        "descHighlight": "10% color discrepancy",
        "desc2": " is a standard industry expectation. The printed version will naturally be more matte than a glowing screen."
      }
    },
    "groupPrinting": {
      "title": "Standard Group Printing",
      "desc1": "Most orders are produced via ",
      "descHighlight": "Group Printing",
      "desc2": ", where your artwork is laid out on a large sheet with other clients' designs.",
      "bullet1Label": "Efficiency vs Control: ",
      "bullet1Desc": "Because multiple designs are printed at once on standard materials, we cannot \"tweak\" the ink levels for just one design.",
      "bullet2Label": "The Result: ",
      "bullet2Desc": "This keeps costs incredibly low for small batches, but it means we cannot guarantee a 100% exact color match to your monitor."
    },
    "individualRun": {
      "title": "Individual Run (Precision Scaling)",
      "desc1": "If your brand requires 100% color precision, we can perform an ",
      "descHighlight": "Individual Run",
      "desc2": ". This means the press is set up exclusively for your design, allowing us to calibrate the color exactly. However, because the setup labor is the same regardless of quantity, the cost per unit is higher for smaller orders:",
      "table": {
        "col1": "Order Quantity",
        "col2": "Cost Comparison",
        "row1Col1": "Under 500 pcs",
        "row1Col2": "5x higher cost",
        "row2Col1": "Under 1,000 pcs",
        "row2Col2": "3x higher cost",
        "row3Col1": "Under 3,000 pcs",
        "row3Col2": "2x higher cost",
        "row4Col1": "Over 5,000 pcs",
        "row4Col2": "Standard Price (Individual run included)"
      },
      "logic": "Logic: Once you reach 5,000 pieces, the volume is large enough to justify a dedicated production run at our standard pricing. At this level, you receive maximum color control without the \"small-batch\" premium."
    },
    "proceed": {
      "title": "How would you like to proceed?",
      "desc": "We can move forward with the standard group run if a slight variance is acceptable, or we can quote you for a dedicated run if accuracy is the priority."
    }
  },
  "cta": {
    "titleLine1": "Let's Print",
    "titleLine2": "Your Vision.",
    "desc": "Accept the 10% variance for startup savings, or go big for absolute precision.",
    "button1": "Book Consultation",
    "button2": "Request a Sample"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['pouchColorAccuracy'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
