import fs from 'fs';
import { ourWorkCards, seoKnowHowCards } from '../src/data/carouselData.js'; // Will compile first

const extracted = {
  ourWorkCards: ourWorkCards.map((c, i) => ({
    keyPrefix: `work_${i}`,
    title: c.title,
    desc: c.desc,
    tag: c.tag
  })),
  seoKnowHowCards: seoKnowHowCards.map((c, i) => ({
    keyPrefix: `knowhow_${i}`,
    title: c.title,
    desc: c.desc,
    tag: c.tag
  }))
};

fs.writeFileSync('scratch/extracted_carousel.json', JSON.stringify(extracted, null, 2));
console.log("Extracted cards successfully");
