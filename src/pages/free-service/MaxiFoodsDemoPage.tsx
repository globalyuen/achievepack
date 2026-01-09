import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf, Award, MapPin, ArrowRight, ArrowLeft, Check, Facebook, Instagram, Twitter, Phone, Mail, ShieldCheck, Recycle, Globe, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// High-quality product images from demo-site/maxi
const MAXI_IMAGES = {
    hero: '/imgs/demo-site/maxi/a_maxi_kv_01_organic_hero_8096653.webp',
    handcrafted: '/imgs/demo-site/maxi/a_maxi_kv_02_handcrafted_4900198.webp',
    organicCertified: '/imgs/demo-site/maxi/a_maxi_kv_03_organic_certified_8962139.webp',
    ecoPackaging: '/imgs/demo-site/maxi/a_maxi_kv_04_eco_packaging_9533320.webp',
    glutenFree: '/imgs/demo-site/maxi/a_maxi_kv_05_gluten_free_5682305.webp',
    canadianPride: '/imgs/demo-site/maxi/a_maxi_kv_06_canadian_pride_9877688.webp',
    crispyDetail: '/imgs/demo-site/maxi/a_maxi_kv_07_crispy_detail_7197894.webp',
    lifestyleTaste: '/imgs/demo-site/maxi/a_maxi_kv_08_lifestyle_taste_5164277.webp',
    pureIngredients: '/imgs/demo-site/maxi/a_maxi_kv_09_pure_ingredients_5982490.webp',
    artisanPride: '/imgs/demo-site/maxi/a_maxi_kv_10_artisan_pride_1798104.webp',
    organicBadge: '/imgs/demo-site/maxi/a_maxi_foods_image_3_organic_badge_5115408.webp',
    goldenHour: '/imgs/demo-site/maxi/a_maxi_foods_image_7_golden_hour_5440987.webp'
};

export default function MaxiFoodsDemoPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const MaxiLogo = ({ className = "h-12" }: { className?: string }) => (
        <div className={`flex items-center gap-3 ${className}`}>
            <img
                src="https://images.squarespace-cdn.com/content/v1/604fb524a07b3150a39f3e78/1615836543966-XNDRSKQGE3LDTBVR06D5/maxi_foods_homepage_logo.png"
                alt="Maxi Foods Logo"
                className="h-full object-contain brightness-0 invert"
            />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#26c6da] selection:text-black">
            <Helmet>
                <title>Maxi Foods | Authentic Mexican Staples with a Healthy Twist | Organic Tortilla Chips</title>
                <meta name="description" content="Handcrafted organic Mexican tortilla chips and salsas. Gluten-free, vegan, non-GMO. Made in Airdrie, Alberta with certified compostable eco-friendly packaging." />
                <meta name="keywords" content="organic tortilla chips, Mexican food, gluten-free chips, vegan snacks, compostable packaging, Alberta food, non-GMO" />
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
                    .font-display { font-family: 'Outfit', sans-serif; }
                    .font-serif { font-family: 'Playfair Display', serif; }
                `}</style>
            </Helmet>

            {/* Achieve Pack Return Banner */}
            <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-600 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/free-service/website-upgrade" className="flex items-center gap-2 text-sm hover:text-white/80 transition">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Achieve Pack
                    </Link>
                    <span className="text-xs text-white/80 hidden sm:block">This is a demo website created by Achieve Pack</span>
                    <Link to="/store" className="text-sm font-medium hover:text-white/80 transition">
                        Browse Packaging
                    </Link>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex items-center justify-between">
                        <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 cursor-pointer h-12">
                            <MaxiLogo />
                        </motion.div>
                        <div className="hidden md:flex items-center space-x-10">
                            {['Shop', 'Our Story', 'Sustainability', 'Wholesale', 'Contact'].map((item) => (
                                <a key={item} href="#" className="text-sm font-semibold tracking-widest uppercase hover:text-[#26c6da] transition-colors duration-300 opacity-80 hover:opacity-100">
                                    {item}
                                </a>
                            ))}
                            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                            <button className="relative group p-2">
                                <ShoppingCart className="w-6 h-6 group-hover:text-[#26c6da] transition-colors" />
                                <AnimatePresence>
                                    {cartCount > 0 && (
                                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-1 -right-1 w-5 h-5 bg-[#26c6da] text-black rounded-full text-[10px] font-black flex items-center justify-center border-2 border-black">
                                            {cartCount}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                        <div className="md:hidden flex items-center gap-4">
                            <button className="relative p-2"><ShoppingCart className="w-6 h-6" /></button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1"><Menu className="w-8 h-8" /></button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Full Width Impact */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={MAXI_IMAGES.hero} alt="Organic Tortilla Chips Hero" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="h-[2px] w-12 bg-[#26c6da]"></span>
                                <span className="text-[#26c6da] font-black tracking-[0.3em] uppercase text-xs">Certified Organic</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[0.9] mb-8 tracking-tight">
                                AUTHENTIC<br />
                                <span className="italic font-serif font-normal text-white/40">Mexican</span><br />
                                FLAVOR
                            </h1>
                            <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed font-light">
                                Handcrafted in Airdrie, Alberta using traditional recipes passed down through generations. 
                                Our commitment to quality means <span className="text-white font-medium">zero preservatives</span>, 
                                <span className="text-white font-medium"> zero artificial colorants</span>, and 
                                <span className="text-white font-medium"> 100% compostable packaging</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#26c6da] text-black px-10 py-5 rounded-full font-extrabold text-sm tracking-widest uppercase hover:bg-white transition-all shadow-2xl shadow-[#26c6da]/20 flex items-center justify-center gap-3">
                                    SHOP PRODUCTS <ArrowRight className="w-5 h-5" />
                                </motion.button>
                                <motion.button whileHover={{ borderOpacity: 1, background: "rgba(255,255,255,0.05)" }} className="border border-white/20 text-white px-10 py-5 rounded-full font-extrabold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3">
                                    OUR STORY
                                </motion.button>
                            </div>
                            <div className="mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
                                <div className="flex flex-col gap-2">
                                    <ShieldCheck className="w-6 h-6 text-[#26c6da]" />
                                    <span className="text-xs font-bold tracking-widest uppercase opacity-70">100% Gluten-Free</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Leaf className="w-6 h-6 text-[#26c6da]" />
                                    <span className="text-xs font-bold tracking-widest uppercase opacity-70">Certified Organic</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Recycle className="w-6 h-6 text-[#26c6da]" />
                                    <span className="text-xs font-bold tracking-widest uppercase opacity-70">Eco Packaging</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.3 }} className="relative hidden lg:block">
                            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#26c6da]/20 to-transparent rounded-[2rem] blur-2xl -z-10 translate-y-10 scale-90"></div>
                                <img src={MAXI_IMAGES.ecoPackaging} alt="Maxi Foods Premium Tortilla Chips in Compostable Packaging" className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]" />
                            </div>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute top-10 right-0 bg-white text-black px-6 py-6 rounded-full flex flex-col items-center justify-center border-8 border-black shadow-xl">
                                <span className="text-[10px] font-black uppercase tracking-tighter">Handcrafted in</span>
                                <span className="text-lg font-black leading-tight">ALBERTA</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Full Width Image Banner */}
            <section className="py-0">
                <div className="relative h-[60vh] overflow-hidden">
                    <img src={MAXI_IMAGES.handcrafted} alt="Handcrafted Organic Tortilla Chips Process" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-12 max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-4 tracking-tight">HANDCRAFTED WITH PASSION</h2>
                        <p className="text-xl text-white/70 max-w-xl">Every chip is made in small batches using traditional stone-ground techniques, ensuring authentic flavor and perfect crunch.</p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid md:grid-cols-3 gap-16 border-y border-white/5 py-20">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#26c6da]/10 flex items-center justify-center"><Leaf className="w-8 h-8 text-[#26c6da]" /></div>
                            <span className="text-xs font-black tracking-[0.2em] uppercase">ALL-NATURAL INGREDIENTS</span>
                            <p className="text-white/50 text-sm">Non-GMO organic corn flour sourced from trusted Canadian farms</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#26c6da]/10 flex items-center justify-center"><ShieldCheck className="w-8 h-8 text-[#26c6da]" /></div>
                            <span className="text-xs font-black tracking-[0.2em] uppercase">NO PRESERVATIVES</span>
                            <p className="text-white/50 text-sm">Clean label products with zero artificial additives or colorants</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#26c6da]/10 flex items-center justify-center"><Recycle className="w-8 h-8 text-[#26c6da]" /></div>
                            <span className="text-xs font-black tracking-[0.2em] uppercase">COMPOSTABLE PACKAGING</span>
                            <p className="text-white/50 text-sm">Certified compostable pouches that return to earth naturally</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase - Large Images */}
            <section id="products" className="py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 tracking-tighter uppercase leading-none">THE MODERN <br /><span className="text-[#26c6da]">STAPLES.</span></h2>
                            <p className="text-lg text-white/40 font-light max-w-lg">Taste the heritage. Handcrafted corn tortilla chips and salsas inspired by UNESCO Intangible Cultural Heritage traditions.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                            <img src={MAXI_IMAGES.crispyDetail} alt="Crispy Organic Tortilla Chips Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <span className="inline-block bg-white/10 backdrop-blur-md text-white text-xs uppercase font-black px-4 py-2 rounded-full mb-4">Organic</span>
                                <h3 className="text-3xl font-bold mb-2">Lime Organic White Tortilla Chips</h3>
                                <p className="text-white/60 mb-4">Zesty and refreshing with real lime. Handcrafted in small batches using non-GMO organic white corn flour.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-display text-[#26c6da]">$7.49</span>
                                    <button onClick={() => setCartCount(c => c + 1)} className="bg-[#26c6da] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                            <img src={MAXI_IMAGES.lifestyleTaste} alt="Chili-Lime Tortilla Chips Lifestyle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <span className="inline-block bg-white/10 backdrop-blur-md text-white text-xs uppercase font-black px-4 py-2 rounded-full mb-4">Spicy</span>
                                <h3 className="text-3xl font-bold mb-2">Chili-Lime Organic Yellow Corn Chips</h3>
                                <p className="text-white/60 mb-4">The perfect balance of heat and citrus. Authentic Mexican flavor with a healthy, all-natural twist.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-display text-[#26c6da]">$7.49</span>
                                    <button onClick={() => setCartCount(c => c + 1)} className="bg-[#26c6da] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="relative aspect-square rounded-2xl overflow-hidden group bg-[#111]">
                            <img src={MAXI_IMAGES.pureIngredients} alt="Tomatonion Organic Chips" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold mb-1">Tomatonion Organic Yellow Chips</h3>
                                <span className="text-[#26c6da] font-display">$7.49</span>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden group bg-[#111]">
                            <img src={MAXI_IMAGES.goldenHour} alt="Fresh Pico de Gallo Salsa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold mb-1">Pico de Gallo Salsa</h3>
                                <span className="text-[#26c6da] font-display">$8.99</span>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden group bg-[#111]">
                            <img src={MAXI_IMAGES.artisanPride} alt="Salsa Verde" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold mb-1">Salsa Verde</h3>
                                <span className="text-[#26c6da] font-display">$8.99</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability Section - Compostable Packaging Focus */}
            <section className="py-32 bg-gradient-to-b from-[#050505] to-[#0a1a1a]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-[2px] w-12 bg-green-500"></span>
                                <span className="text-green-500 font-black tracking-[0.3em] uppercase text-xs">Sustainability Commitment</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">COMPOSTABLE<br/><span className="text-green-500">PACKAGING</span></h2>
                            <p className="text-xl text-white/60 mb-8 leading-relaxed">We believe great food should come in packaging that respects our planet. Our certified compostable pouches are made from plant-based materials and break down naturally within 180 days in commercial composting facilities.</p>
                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"><Check className="w-5 h-5 text-green-500" /></div>
                                    <div><h4 className="font-bold text-white">BPI Certified Compostable</h4><p className="text-white/50 text-sm">Meets ASTM D6400 standards for industrial composting</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"><Check className="w-5 h-5 text-green-500" /></div>
                                    <div><h4 className="font-bold text-white">Plant-Based Materials</h4><p className="text-white/50 text-sm">Made from renewable resources including PLA and kraft paper</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"><Check className="w-5 h-5 text-green-500" /></div>
                                    <div><h4 className="font-bold text-white">Zero Plastic Waste</h4><p className="text-white/50 text-sm">Returns to earth as nutrient-rich compost, not microplastics</p></div>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <p className="text-white/70 text-sm mb-4">Our packaging is proudly supplied by Achieve Pack, specialists in sustainable food packaging solutions.</p>
                                <div className="flex flex-wrap gap-3">
                                    <Link to="/materials/compostable" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition">Learn About Compostable Materials <ExternalLink className="w-4 h-4" /></Link>
                                    <Link to="/store" className="inline-flex items-center gap-2 text-sm font-semibold text-[#26c6da] hover:text-white transition">Shop Eco Packaging <ExternalLink className="w-4 h-4" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={MAXI_IMAGES.ecoPackaging} alt="Compostable Eco-Friendly Packaging" className="w-full rounded-3xl shadow-2xl" />
                            <div className="absolute -bottom-6 -right-6 bg-green-500 text-black p-6 rounded-2xl shadow-xl">
                                <div className="text-3xl font-black">180</div>
                                <div className="text-xs font-bold uppercase tracking-wider">Days to Compost</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-40 bg-white text-black overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <img src={MAXI_IMAGES.organicCertified} alt="Vladimir Gonzalez - Founder of Maxi Foods" className="w-full rounded-3xl shadow-2xl" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-[2px] w-12 bg-black"></span>
                                <span className="text-black/50 font-black tracking-[0.3em] uppercase text-xs">Our Story</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter leading-none mb-8">A MEXICAN<br />ENGINEER'S<br />JOURNEY.</h2>
                            <p className="text-2xl font-serif italic mb-10 leading-snug text-black/70">"Our story began with a simple desire: to bring true Mexican gastronomy - a UNESCO Cultural Intangible Heritage - to Canada."</p>
                            <div className="space-y-6 text-lg font-light leading-relaxed text-black/70">
                                <p>Founded by <span className="font-bold text-black">Vladimir Gonzalez</span>, a chemical engineer from Mexico who relocated to Canada in 2002. Vladimir's professional background combined with his passion for his roots led to the creation of Maxi Foods.</p>
                                <p>We are committed to quality, choosing only the best ingredients. Every tortilla, every chip, and every jar of salsa is handcrafted in a professional gluten-free facility in Airdrie, Alberta.</p>
                            </div>
                            <div className="mt-10 grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-black/5 rounded-xl"><div className="text-3xl font-black text-black">20+</div><div className="text-xs text-black/50 uppercase tracking-wider">Years Experience</div></div>
                                <div className="text-center p-4 bg-black/5 rounded-xl"><div className="text-3xl font-black text-black">100%</div><div className="text-xs text-black/50 uppercase tracking-wider">Gluten-Free</div></div>
                                <div className="text-center p-4 bg-black/5 rounded-xl"><div className="text-3xl font-black text-black">0</div><div className="text-xs text-black/50 uppercase tracking-wider">Preservatives</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Certifications */}
            <section className="py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-extrabold mb-4">CERTIFIED QUALITY</h2>
                        <p className="text-white/50 max-w-2xl mx-auto">Our products meet the highest standards for organic certification, food safety, and sustainable packaging.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
                            <Award className="w-12 h-12 text-[#26c6da] mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Certified Organic</h3>
                            <p className="text-white/50 text-sm">Canada Organic certified by Pro-Cert</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
                            <ShieldCheck className="w-12 h-12 text-[#26c6da] mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Gluten-Free Facility</h3>
                            <p className="text-white/50 text-sm">Dedicated gluten-free production</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
                            <Recycle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">BPI Certified</h3>
                            <p className="text-white/50 text-sm">Compostable packaging certification</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
                            <Globe className="w-12 h-12 text-[#26c6da] mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Non-GMO Project</h3>
                            <p className="text-white/50 text-sm">Verified non-GMO ingredients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Large Feature Image */}
            <section className="relative h-[80vh] overflow-hidden">
                <img src={MAXI_IMAGES.glutenFree} alt="Gluten Free Organic Tortilla Chips" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                        <div className="max-w-xl">
                            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tight">TASTE THE DIFFERENCE</h2>
                            <p className="text-xl text-white/70 mb-8">When you choose Maxi Foods, you're choosing authentic Mexican heritage, clean ingredients, and a commitment to sustainability.</p>
                            <button className="bg-white text-black px-10 py-5 rounded-full font-extrabold text-sm tracking-widest uppercase hover:bg-[#26c6da] transition-all">FIND A STORE NEAR YOU</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 mb-24">
                        <div className="lg:col-span-5">
                            <MaxiLogo className="h-16 mb-10" />
                            <p className="text-white/40 max-w-sm text-lg leading-relaxed mb-10">Dedicated to bringing authentic Mexican gastronomy to all communities in Canada. Handcrafted, clean, and uncompromisingly delicious.</p>
                            <div className="flex gap-6">
                                {[{ icon: Facebook, color: "#1877F2" }, { icon: Instagram, color: "#E4405F" }, { icon: Twitter, color: "#1DA1F2" }].map((social, i) => (
                                    <motion.a key={i} whileHover={{ scale: 1.1, color: social.color }} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all border border-white/5">
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-8">
                            <h4 className="font-black tracking-[0.2em] uppercase text-xs text-[#26c6da]">Shop</h4>
                            <ul className="space-y-4 text-white/50 text-sm font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Organic Tortillas</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Premium Chips</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Fresh Salsas</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
                            </ul>
                        </div>
                        <div className="lg:col-span-2 space-y-8">
                            <h4 className="font-black tracking-[0.2em] uppercase text-xs text-[#26c6da]">Company</h4>
                            <ul className="space-y-4 text-white/50 text-sm font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
                            </ul>
                        </div>
                        <div className="lg:col-span-3 space-y-8">
                            <h4 className="font-black tracking-[0.2em] uppercase text-xs text-[#26c6da]">Visit Us</h4>
                            <div className="space-y-6 text-white/50 text-sm font-medium">
                                <div className="flex gap-4"><MapPin className="w-5 h-5 text-white/20 shrink-0" /><span>#101, 2944 Kingsview Blvd.<br />Airdrie, AB. T4A 0M2</span></div>
                                <div className="flex gap-4"><Mail className="w-5 h-5 text-white/20 shrink-0" /><span>info@maxifoods.ca</span></div>
                                <div className="flex gap-4"><Phone className="w-5 h-5 text-white/20 shrink-0" /><span>(403) 608-2476</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 mb-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
                            <div className="flex items-center gap-2">
                                <Recycle className="w-4 h-4 text-green-500" />
                                <span>Sustainable packaging proudly supplied by</span>
                                <Link to="/" className="text-[#26c6da] hover:text-white transition font-semibold">Achieve Pack</Link>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link to="/materials/compostable" className="hover:text-white transition">Compostable Options</Link>
                                <span>|</span>
                                <Link to="/packaging/stand-up-pouches" className="hover:text-white transition">Stand Up Pouches</Link>
                                <span>|</span>
                                <Link to="/industry/snacks-food" className="hover:text-white transition">Food Packaging</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-black tracking-widest uppercase">
                        <p>2024 Maxi Foods. Authentic Quality Since 2002.</p>
                        <div className="flex gap-8"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Shipping</a></div>
                    </div>
                </div>
            </footer>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black p-8 flex flex-col">
                        <div className="flex justify-between items-center mb-20">
                            <MaxiLogo />
                            <button onClick={() => setIsMenuOpen(false)}><X className="w-10 h-10" /></button>
                        </div>
                        <div className="flex flex-col gap-10">
                            {['Shop All', 'Our Story', 'Sustainability', 'Wholesale', 'Find Us', 'Contact'].map(item => (
                                <a key={item} href="#" className="text-5xl font-display font-black tracking-tighter hover:text-[#26c6da]">{item}</a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
