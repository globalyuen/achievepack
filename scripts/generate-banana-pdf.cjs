const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    try {
        console.log('Launching Puppeteer...');
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        const htmlPath = path.resolve(__dirname, '../public/quotes/banana-nano-cad-quote.html');
        console.log(`Loading HTML from: ${htmlPath}`);

        // Navigate to the file using file:// URL
        await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });

        const pdfPath = path.resolve(__dirname, '../public/quotes/banana-nano-cad-quote.pdf');
        console.log(`Generating PDF to: ${pdfPath}`);

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '12mm',
                bottom: '12mm',
                left: '12mm',
                right: '12mm'
            }
        });

        await browser.close();
        console.log('PDF generated successfully!');
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    }
})();
