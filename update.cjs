const fs = require('fs');

const mainTsxPath = './src/main.tsx';
let mainTsx = fs.readFileSync(mainTsxPath, 'utf8');

const lazyImports = `
// New Product SEO Pages
const DupontPaperToteBagsBenefits = lazyWithRetry(() => import('./pages/knowledge/DupontPaperToteBagsBenefits'))
const TyvekVsCanvasToteBags = lazyWithRetry(() => import('./pages/knowledge/TyvekVsCanvasToteBags'))
const EcoFriendlyDupontPaperBags = lazyWithRetry(() => import('./pages/knowledge/EcoFriendlyDupontPaperBags'))
const MoldedPulpPackagingBenefits = lazyWithRetry(() => import('./pages/knowledge/MoldedPulpPackagingBenefits'))
const EcoDegradablePulpBoxesGuide = lazyWithRetry(() => import('./pages/knowledge/EcoDegradablePulpBoxesGuide'))
const PulpBoxesVsCorrugated = lazyWithRetry(() => import('./pages/knowledge/PulpBoxesVsCorrugated'))
const LuxuryCorkGiftBoxes = lazyWithRetry(() => import('./pages/knowledge/LuxuryCorkGiftBoxes'))
const CorkPackagingSustainability = lazyWithRetry(() => import('./pages/knowledge/CorkPackagingSustainability'))
const CustomCorkGiftBoxesDesign = lazyWithRetry(() => import('./pages/knowledge/CustomCorkGiftBoxesDesign'))
const SoftWoodGiftBoxesWholesalePage = lazyWithRetry(() => import('./pages/knowledge/SoftWoodGiftBoxesWholesalePage'))
const WoodenGiftBoxesSustainabilityPage = lazyWithRetry(() => import('./pages/knowledge/WoodenGiftBoxesSustainabilityPage'))
const BalsaSoftWoodPackagingPage = lazyWithRetry(() => import('./pages/knowledge/BalsaSoftWoodPackagingPage'))

// Recyclable SEO Pages - Lazy loaded`;
mainTsx = mainTsx.replace('// Recyclable SEO Pages - Lazy loaded', lazyImports);

const prefetchMap = `  '/knowledge/compostable-packaging-inkjet-coding': () => import('./pages/knowledge/CompostablePackagingCodingPage'),
  '/knowledge/dupont-paper-tote-bags-benefits': () => import('./pages/knowledge/DupontPaperToteBagsBenefits'),
  '/knowledge/tyvek-vs-canvas-tote-bags': () => import('./pages/knowledge/TyvekVsCanvasToteBags'),
  '/knowledge/eco-friendly-dupont-paper-bags': () => import('./pages/knowledge/EcoFriendlyDupontPaperBags'),
  '/knowledge/molded-pulp-packaging-benefits': () => import('./pages/knowledge/MoldedPulpPackagingBenefits'),
  '/knowledge/eco-degradable-pulp-boxes-guide': () => import('./pages/knowledge/EcoDegradablePulpBoxesGuide'),
  '/knowledge/pulp-boxes-vs-corrugated-cardboard': () => import('./pages/knowledge/PulpBoxesVsCorrugated'),
  '/knowledge/luxury-cork-gift-boxes': () => import('./pages/knowledge/LuxuryCorkGiftBoxes'),
  '/knowledge/cork-packaging-sustainability': () => import('./pages/knowledge/CorkPackagingSustainability'),
  '/knowledge/custom-cork-gift-boxes-design': () => import('./pages/knowledge/CustomCorkGiftBoxesDesign'),
  '/knowledge/soft-wood-gift-boxes-wholesale': () => import('./pages/knowledge/SoftWoodGiftBoxesWholesalePage'),
  '/knowledge/wooden-gift-boxes-sustainability': () => import('./pages/knowledge/WoodenGiftBoxesSustainabilityPage'),
  '/knowledge/balsa-soft-wood-packaging': () => import('./pages/knowledge/BalsaSoftWoodPackagingPage'),`;
mainTsx = mainTsx.replace(`  '/knowledge/compostable-packaging-inkjet-coding': () => import('./pages/knowledge/CompostablePackagingCodingPage'),`, prefetchMap);

const b2cRoutes = `<Route path="/knowledge/compostable-packaging-inkjet-coding" element={<CompostablePackagingCodingPage />} />
                  <Route path="/knowledge/dupont-paper-tote-bags-benefits" element={<DupontPaperToteBagsBenefits />} />
                  <Route path="/knowledge/tyvek-vs-canvas-tote-bags" element={<TyvekVsCanvasToteBags />} />
                  <Route path="/knowledge/eco-friendly-dupont-paper-bags" element={<EcoFriendlyDupontPaperBags />} />
                  <Route path="/knowledge/molded-pulp-packaging-benefits" element={<MoldedPulpPackagingBenefits />} />
                  <Route path="/knowledge/eco-degradable-pulp-boxes-guide" element={<EcoDegradablePulpBoxesGuide />} />
                  <Route path="/knowledge/pulp-boxes-vs-corrugated-cardboard" element={<PulpBoxesVsCorrugated />} />
                  <Route path="/knowledge/luxury-cork-gift-boxes" element={<LuxuryCorkGiftBoxes />} />
                  <Route path="/knowledge/cork-packaging-sustainability" element={<CorkPackagingSustainability />} />
                  <Route path="/knowledge/custom-cork-gift-boxes-design" element={<CustomCorkGiftBoxesDesign />} />
                  <Route path="/knowledge/soft-wood-gift-boxes-wholesale" element={<SoftWoodGiftBoxesWholesalePage />} />
                  <Route path="/knowledge/wooden-gift-boxes-sustainability" element={<WoodenGiftBoxesSustainabilityPage />} />
                  <Route path="/knowledge/balsa-soft-wood-packaging" element={<BalsaSoftWoodPackagingPage />} />`;
mainTsx = mainTsx.replace('<Route path="/knowledge/compostable-packaging-inkjet-coding" element={<CompostablePackagingCodingPage />} />', b2cRoutes);

const b2bRoutes = `<Route path="/knowledge/compostable-packaging-inkjet-coding" element={<CompostablePackagingCodingPage />} />
                        <Route path="/knowledge/dupont-paper-tote-bags-benefits" element={<DupontPaperToteBagsBenefits />} />
                        <Route path="/knowledge/tyvek-vs-canvas-tote-bags" element={<TyvekVsCanvasToteBags />} />
                        <Route path="/knowledge/eco-friendly-dupont-paper-bags" element={<EcoFriendlyDupontPaperBags />} />
                        <Route path="/knowledge/molded-pulp-packaging-benefits" element={<MoldedPulpPackagingBenefits />} />
                        <Route path="/knowledge/eco-degradable-pulp-boxes-guide" element={<EcoDegradablePulpBoxesGuide />} />
                        <Route path="/knowledge/pulp-boxes-vs-corrugated-cardboard" element={<PulpBoxesVsCorrugated />} />
                        <Route path="/knowledge/luxury-cork-gift-boxes" element={<LuxuryCorkGiftBoxes />} />
                        <Route path="/knowledge/cork-packaging-sustainability" element={<CorkPackagingSustainability />} />
                        <Route path="/knowledge/custom-cork-gift-boxes-design" element={<CustomCorkGiftBoxesDesign />} />
                        <Route path="/knowledge/soft-wood-gift-boxes-wholesale" element={<SoftWoodGiftBoxesWholesalePage />} />
                        <Route path="/knowledge/wooden-gift-boxes-sustainability" element={<WoodenGiftBoxesSustainabilityPage />} />
                        <Route path="/knowledge/balsa-soft-wood-packaging" element={<BalsaSoftWoodPackagingPage />} />`;
mainTsx = mainTsx.replace('<Route path="/knowledge/compostable-packaging-inkjet-coding" element={<CompostablePackagingCodingPage />} />', b2bRoutes);

fs.writeFileSync(mainTsxPath, mainTsx, 'utf8');

const footerPath = './src/components/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');
const footerLinks = `<li><Link to="/knowledge/compostable-packaging-inkjet-coding" className="hover:text-primary-400">Eco Packaging Coding</Link></li>
              <li><Link to="/knowledge/dupont-paper-tote-bags-benefits" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">DuPont Tyvek Tote Bags <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/knowledge/eco-degradable-pulp-boxes-guide" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Eco Pulp Boxes <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/knowledge/luxury-cork-gift-boxes" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Luxury Cork Boxes <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/knowledge/soft-wood-gift-boxes-wholesale" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Soft Wood Packaging <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>`;

footer = footer.replace('<li><Link to="/knowledge/compostable-packaging-inkjet-coding" className="hover:text-primary-400">Eco Packaging Coding</Link></li>', footerLinks);
fs.writeFileSync(footerPath, footer, 'utf8');

console.log("Updated main.tsx and Footer.tsx successfully");
