const https = require('https');

const url = 'https://achievepack.com/video/hero/bag.mp4';

console.log('Sending HEAD request to:', url);
const req = https.request(url, { method: 'HEAD' }, (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Headers:', res.headers);
  const contentLength = res.headers['content-length'];
  if (contentLength) {
    const sizeMB = (parseInt(contentLength, 10) / (1024 * 1024)).toFixed(2);
    console.log(`Video File Size: ${contentLength} bytes (~${sizeMB} MB)`);
    if (contentLength === '2366401') {
      console.log('VERIFICATION SUCCESSFUL: Serving the original rotating bag video (2.36 MB).');
    } else if (contentLength === '702754') {
      console.log('VERIFICATION WARNING: Still serving the machinery video (702 KB).');
    } else {
      console.log('Unknown video file size:', contentLength);
    }
  } else {
    console.log('No content-length header found.');
  }
});

req.on('error', (e) => {
  console.error('Error fetching headers:', e);
});

req.end();
