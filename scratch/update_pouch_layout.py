import re

filepath = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/components/pouch/PouchLayout.tsx"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

replacements = [
    (r'Ready to<br/>\s*Launch\?', "{t('pouchLayoutFooter.readyToLaunch')}<br/>Launch?"), # Wait, "Ready to Launch?" was split. Let's just do simple string replacements.
    (r"Ready to<br/>\s*Launch\?", "{t('pouchLayoutFooter.readyToLaunch', 'Ready to Launch?').split(' ').slice(0, 2).join(' ')}<br/>{t('pouchLayoutFooter.readyToLaunch', 'Ready to Launch?').split(' ').slice(2).join(' ')}"),
    (r"Join 2,000\+ brands\. Get instant quote\. Start with 500 units\.", "{t('pouchLayoutFooter.joinBrands')}"),
    (r'placeholder="ENTER_EMAIL"', "placeholder={t('pouchLayoutFooter.enterEmail')}"),
    (r'>\s*Book Call\s*</NeoButton>', ">{t('pouchLayoutFooter.bookCall')}</NeoButton>"),
    (r'>Packaging</h4>', ">{t('pouchLayoutFooter.categories.packaging')}</h4>"),
    (r'>\[STAND-UP POUCHES\]</Link>', ">{t('pouchLayoutFooter.links.standUpPouches')}</Link>"),
    (r'>\[FLAT BOTTOM BAGS\]</Link>', ">{t('pouchLayoutFooter.links.flatBottomBags')}</Link>"),
    (r'>\[SPOUT POUCHES\]</Link>', ">{t('pouchLayoutFooter.links.spoutPouches')}</Link>"),
    (r'>\[FLAT POUCHES\]</Link>', ">{t('pouchLayoutFooter.links.flatPouches')}</Link>"),
    (r'>\[VACUUM POUCHES\]</Link>', ">{t('pouchLayoutFooter.links.vacuumPouches')}</Link>"),
    (r'>\[K-SEAL FOR HEAVY WEIGHTS\]</Link>', ">{t('pouchLayoutFooter.links.kSeal')}</Link>"),
    (r'>\[ALL PRODUCTS\]</Link>', ">{t('pouchLayoutFooter.links.allProducts')}</Link>"),
    (r'>Materials</h4>', ">{t('pouchLayoutFooter.categories.materials')}</h4>"),
    (r'>\[COMPOSTABLE\]</Link>', ">{t('pouchLayoutFooter.links.compostable')}</Link>"),
    (r'>\[RECYCLABLE\]</Link>', ">{t('pouchLayoutFooter.links.recyclable')}</Link>"),
    (r'>\[PLASTIC-FREE KRAFT\]</Link>', ">{t('pouchLayoutFooter.links.plasticFreeKraft')}</Link>"),
    (r'>\[TECHNICAL DATA SHEETS\]</Link>', ">{t('pouchLayoutFooter.links.tds')}</Link>"),
    (r'>\[MATERIAL HUB\]</Link>', ">{t('pouchLayoutFooter.links.materialHub')}</Link>"),
    (r'>Industries</h4>', ">{t('pouchLayoutFooter.categories.industries')}</h4>"),
    (r'>\[COFFEE & TEA\]</Link>', ">{t('pouchLayoutFooter.links.coffeeTea')}</Link>"),
    (r'>\[BABY FOOD\]</Link>', ">{t('pouchLayoutFooter.links.babyFood')}</Link>"),
    (r'>\[FROZEN FOOD\]</Link>', ">{t('pouchLayoutFooter.links.frozenFood')}</Link>"),
    (r'>\[SNACKS\]</Link>', ">{t('pouchLayoutFooter.links.snacks')}</Link>"),
    (r'>\[PET FOOD\]</Link>', ">{t('pouchLayoutFooter.links.petFood')}</Link>"),
    (r'>\[SUPPLEMENTS\]</Link>', ">{t('pouchLayoutFooter.links.supplements')}</Link>"),
    (r'>\[SAUCES & CONDIMENTS\]</Link>', ">{t('pouchLayoutFooter.links.sauces')}</Link>"),
    (r'>\[CITRUS OIL SOLUTIONS\]</Link>', ">{t('pouchLayoutFooter.links.citrusOil')}</Link>"),
    (r'>USA Market</h4>', ">{t('pouchLayoutFooter.categories.usaMarket')}</h4>"),
    (r'>\[COMPOSTABLE USA\]</Link>', ">{t('pouchLayoutFooter.links.compostableUsa')}</Link>"),
    (r'>\[COFFEE USA\]</Link>', ">{t('pouchLayoutFooter.links.coffeeUsa')}</Link>"),
    (r'>\[SNACKS USA\]</Link>', ">{t('pouchLayoutFooter.links.snacksUsa')}</Link>"),
    (r'>\[LABELING USA\]</Link>', ">{t('pouchLayoutFooter.links.labelingUsa')}</Link>"),
    (r'>Support</h4>', ">{t('pouchLayoutFooter.categories.support')}</h4>"),
    (r'>\[BLOG\]</Link>', ">{t('pouchLayoutFooter.links.blog')}</Link>"),
    (r'>\[CERTIFICATIONS\]</Link>', ">{t('pouchLayoutFooter.links.certifications')}</Link>"),
    (r'>\[COLOR ACCURACY\]</Link>', ">{t('pouchLayoutFooter.links.colorAccuracy')}</Link>"),
    (r'>\[SIZE GUIDE\]</Link>', ">{t('pouchLayoutFooter.links.sizeGuide')}</Link>"),
    (r'>\[UNPRINTED SAMPLES\]</Link>', ">{t('pouchLayoutFooter.links.unprintedSamples')}</Link>"),
    (r'>\[TECH SPECS\]</Link>', ">{t('pouchLayoutFooter.links.techSpecs')}</Link>"),
    (r'>\[CUSTOM PRINTED SAMPLE\]</Link>', ">{t('pouchLayoutFooter.links.customSample')}</Link>"),
    (r'>\[STAMP FOIL RECYCLABILITY\]</Link>', ">{t('pouchLayoutFooter.links.stampFoil')}</Link>"),
    (r'>\[DRINK & LIQUID POUCHES\]</Link>', ">{t('pouchLayoutFooter.links.drinkPouches')}</Link>"),
    (r'>\[DIGITAL PRINT 100PCS MOQ\]</Link>', ">{t('pouchLayoutFooter.links.digitalPrint')}</Link>"),
    (r'>\[BIO-BASED SPOUT POUCHES\]</Link>', ">{t('pouchLayoutFooter.links.bioBasedSpout')}</Link>"),
    (r'>\[PREPRESS TRAPPING & KEYLINES\]</Link>', ">{t('pouchLayoutFooter.links.prepress')}</Link>"),
    (r'>\[REFILL POUCH SYSTEMS\]</Link>', ">{t('pouchLayoutFooter.links.refillPouch')}</Link>"),
    (r'>© 2026 Achieve Pack. All rights reserved.</div>', ">{t('pouchLayoutFooter.legal.copyright')}</div>"),
    (r'>PRIVACY</Link>', ">{t('pouchLayoutFooter.legal.privacy')}</Link>"),
    (r'>TERMS</Link>', ">{t('pouchLayoutFooter.legal.terms')}</Link>"),
    (r'>RETURNS</Link>', ">{t('pouchLayoutFooter.legal.returns')}</Link>"),
]

for old, new in replacements:
    content = re.sub(old, new, content)

# Custom replacement for "Ready to Launch?" which is split by <br/>
content = re.sub(r'Ready to<br/>\s*Launch\?', "{t('pouchLayoutFooter.readyToLaunch').split(' ').slice(0, 2).join(' ')}<br/>{t('pouchLayoutFooter.readyToLaunch').split(' ').slice(2).join(' ')}", content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("PouchLayout.tsx footer strings replaced with translations.")
