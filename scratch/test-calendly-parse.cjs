const fs = require('fs');
const path = require('path');
function parseInquiryContent(text, filename) {
  const titleMatch = text.match(/title:\s*"?New Event:\s*(.+?)"?\s*\n/) || text.match(/title:\s*"?(.+?)"?\s*\n/);
  const name = titleMatch ? titleMatch[1].replace(/---.*/, '').trim() : filename.replace('.md', '');

  let cleanName = name
    .replace(/^(?:Re:\s*|Fwd:\s*|RE:\s*|FWD:\s*|Re-New-Event-|New-Event-|Hi New Event:\s*|New Event:\s*)+/gi, '')
    .replace(/---.*/g, '')
    .replace(/\s\d{1,2}:\d{2}\s*(?:am|pm|AM|PM).*/, '') // Strip time
    .replace(/-/g, ' ')
    .trim();
  
  return cleanName;
}
console.log(parseInquiryContent('title: "Hi New Event: Alicia Wolbert   10:45pm Tue, Jun 23, 2026   15 Minute Meeting"\n', 'Alicia.md'));
