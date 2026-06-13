import fs from 'fs';

let content = fs.readFileSync('src/data/carouselData.ts', 'utf8');

// Update interfaces
content = content.replace('export interface WorkCard {', 'export interface WorkCard {\n  keyPrefix: string;');
content = content.replace('export interface KnowHowCard {', 'export interface KnowHowCard {\n  keyPrefix: string;');

// Update arrays
let workIdx = 0;
content = content.replace(/title: ".*?",\n\s*tag:/g, (match) => {
  const result = `keyPrefix: "work_${workIdx}",\n    ${match}`;
  workIdx++;
  return result;
});

let knowhowIdx = 0;
content = content.replace(/title: ".*?",\n\s*desc:/g, (match) => {
  if (match.includes('tag:')) return match; // Avoid modifying workCards if they matched
  const result = `keyPrefix: "knowhow_${knowhowIdx}",\n    ${match}`;
  knowhowIdx++;
  return result;
});

fs.writeFileSync('src/data/carouselData.ts', content);
console.log(`Added keys. Work: ${workIdx}, KnowHow: ${knowhowIdx}`);
