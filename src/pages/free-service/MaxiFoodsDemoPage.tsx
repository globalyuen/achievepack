import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf, Award, MapPin, ArrowRight, ArrowLeft, Check, Facebook, Instagram, Twitter, Phone, Mail, ShieldCheck, Recycle, Globe, ExternalLink, Star, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * AI-Enhanced Image Metadata for Maxi Foods
 * Generated based on image content analysis for SEO and accessibility
 */
const MAXI_IMAGES = {
    // Original Key Visuals with AI-enhanced metadata
    hero: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_01_organic_hero_8096653.webp',
        alt: 'Maxi Foods organic tortilla chips hero banner - authentic Mexican heritage handcrafted in Alberta Canada',
        title: 'Organic Hero - Maxi Foods',
        type: 'hero',
        usage: 'Primary hero section background'
    },
    handcrafted: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_02_handcrafted_4900198.webp',
        alt: 'Handcrafted organic tortilla chips process - traditional stone-ground Mexican technique',
        title: 'Handcrafted Process',
        type: 'scene',
        usage: 'About section, process showcase'
    },
    organicCertified: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_03_organic_certified_8962139.webp',
        alt: 'Canada Organic certified tortilla chips - Pro-Cert certified gluten-free facility',
        title: 'Organic Certified',
        type: 'certification',
        usage: 'Certification section, trust building'
    },
    ecoPackaging: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_04_eco_packaging_9533320.webp',
        alt: 'Compostable eco-friendly packaging for organic tortilla chips - BPI certified sustainable pouches',
        title: 'Eco Packaging',
        type: 'product',
        usage: 'Sustainability section, packaging showcase'
    },
    glutenFree: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_05_gluten_free_5682305.webp',
        alt: 'Gluten-free organic tortilla chips - dedicated gluten-free production facility',
        title: 'Gluten Free',
        type: 'feature',
        usage: 'Feature section, dietary benefits'
    },
    canadianPride: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_06_canadian_pride_9877688.webp',
        alt: 'Canadian made organic tortilla chips - proudly handcrafted in Airdrie Alberta',
        title: 'Canadian Pride',
        type: 'scene',
        usage: 'About section, origin story'
    },
    crispyDetail: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_07_crispy_detail_7197894.webp',
        alt: 'Crispy organic tortilla chip texture close-up - perfect golden crunch quality',
        title: 'Crispy Detail',
        type: 'detail',
        usage: 'Product detail, quality showcase'
    },
    lifestyleTaste: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_08_lifestyle_taste_5164277.webp',
        alt: 'Lifestyle scene enjoying organic tortilla chips with fresh salsa - authentic Mexican snacking',
        title: 'Lifestyle Taste',
        type: 'lifestyle',
        usage: 'Product cards, lifestyle marketing'
    },
    pureIngredients: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_09_pure_ingredients_5982490.webp',
        alt: 'Pure natural ingredients for organic tortilla chips - non-GMO corn and real spices',
        title: 'Pure Ingredients',
        type: 'ingredients',
        usage: 'Ingredient story, quality messaging'
    },
    artisanPride: {
        src: '/imgs/demo-site/maxi/a_maxi_kv_10_artisan_pride_1798104.webp',
        alt: 'Artisan craft organic tortilla chips - small batch handmade Mexican heritage',
        title: 'Artisan Pride',
        type: 'scene',
        usage: 'Heritage story, artisan quality'
    },
    organicBadge: {
        src: '/imgs/demo-site/maxi/a_maxi_foods_image_3_organic_badge_5115408.webp',
        alt: 'Canada Organic certification badge - certified organic tortilla chips',
        title: 'Organic Badge',
        type: 'badge',
        usage: 'Trust signals, certification display'
    },
    goldenHour: {
        src: '/imgs/demo-site/maxi/a_maxi_foods_image_7_golden_hour_5440987.webp',
        alt: 'Fresh organic salsa in golden hour light - handmade Mexican pico de gallo',
        title: 'Golden Hour Salsa',
        type: 'product',
        usage: 'Salsa products, food photography'
    },

    // NEW Images from maxi/new folder
    newHeroOrganic: {
        src: '/imgs/demo-site/maxi/new/a_kv_001_hero_organic_2444976.webp',
        alt: 'Premium organic tortilla chips hero showcase - Maxi Foods authentic Mexican flavor',
        title: 'New Hero Organic',
        type: 'hero',
        usage: 'Alternative hero, product showcase'
    },
    newHandcraftedHeritage: {
        src: '/imgs/demo-site/maxi/new/a_kv_002_handcrafted_heritage_2070915.webp',
        alt: 'Handcrafted heritage tortilla chips - UNESCO cultural heritage Mexican tradition',
        title: 'Handcrafted Heritage',
        type: 'scene',
        usage: 'Heritage section, cultural story'
    },
    newPremiumQuality: {
        src: '/imgs/demo-site/maxi/new/a_kv_003_premium_quality_5152582.webp',
        alt: 'Premium quality organic tortilla chips - small batch artisan production',
        title: 'Premium Quality',
        type: 'quality',
        usage: 'Quality section, premium positioning'
    },
    newCanadianPride: {
        src: '/imgs/demo-site/maxi/new/a_kv_004_canadian_pride_0432674.webp',
        alt: 'Canadian pride organic chips - proudly made in Alberta with local ingredients',
        title: 'New Canadian Pride',
        type: 'scene',
        usage: 'Origin story, Canadian identity'
    },
    newFlavorDiversity: {
        src: '/imgs/demo-site/maxi/new/a_kv_005_flavor_diversity_1642930.webp',
        alt: 'Diverse flavor range organic tortilla chips - lime chili jalapeno tomatonion varieties',
        title: 'Flavor Diversity',
        type: 'collection',
        usage: 'Flavor showcase, product range'
    },
    chiliLimeChips: {
        src: '/imgs/demo-site/maxi/new/a_chili_lime_tortilla_chips_2953420.webp',
        alt: 'Chili Lime organic tortilla chips - bold spicy citrus Mexican flavor in compostable packaging',
        title: 'Chili Lime Chips',
        type: 'product',
        usage: 'Product card, flavor highlight'
    },
    jalapenoLimeChips: {
        src: '/imgs/demo-site/maxi/new/a_jalapeno_lime_tortilla_chips_4049982.webp',
        alt: 'Jalapeno Lime organic tortilla chips - authentic Mexican heat with citrus kick',
        title: 'Jalapeno Lime Chips',
        type: 'product',
        usage: 'Product card, spicy flavor'
    },
    limeChips: {
        src: '/imgs/demo-site/maxi/new/a_lime_tortilla_chips_0051449.webp',
        alt: 'Lime organic white tortilla chips - zesty refreshing Mexican flavor',
        title: 'Lime Chips',
        type: 'product',
        usage: 'Product card, classic lime'
    },
    tomatonionChips: {
        src: '/imgs/demo-site/maxi/new/a_tomatonion_tortilla_chips_4226853.webp',
        alt: 'Tomatonion organic yellow tortilla chips - tomato onion savory Mexican blend',
        title: 'Tomatonion Chips',
        type: 'product',
        usage: 'Product card, savory flavor'
    }
};

// SEO Keywords from image analysis
const SEO_KEYWORDS = [
    'organic tortilla chips', 'Mexican food', 'gluten-free chips', 'vegan snacks',
    'compostable packaging', 'Alberta food', 'non-GMO', 'handcrafted chips',
    'authentic Mexican', 'Canadian made', 'BPI certified', 'sustainable snacks'
];

// Product Catalog with AI-enhanced data
const PRODUCTS = [
    {
        id: 'lime-white',
        name: 'Lime Organic White Corn Chips',
        tagline: 'Zesty & Refreshing',
        description: 'Handcrafted using non-GMO organic white corn flour. Bright citrus notes with perfect crunch.',
        price: 7.49,
        weight: '283g',
        image: MAXI_IMAGES.limeChips,
        badge: 'Bestseller',
        color: '#4ade80',
        keywords: ['lime chips', 'white corn', 'citrus', 'organic']
    },
    {
        id: 'chili-lime',
        name: 'Chili-Lime Organic Yellow Corn',
        tagline: 'Bold Heat Meets Citrus',
        description: 'The perfect balance of spicy and tangy. Authentic Mexican flavor with real chili and lime.',
        price: 7.49,
        weight: '283g',
        image: MAXI_IMAGES.chiliLimeChips,
        badge: 'Spicy',
        color: '#ef4444',
        keywords: ['chili lime', 'spicy chips', 'yellow corn', 'Mexican']
    },
    {
        id: 'jalapeno-lime',
        name: 'Jalapeño Lime Organic Chips',
        tagline: 'Authentic Mexican Heat',
        description: 'Real jalapeño flavor with a citrus kick. For those who love bold, authentic Mexican spice.',
        price: 7.49,
        weight: '283g',
        image: MAXI_IMAGES.jalapenoLimeChips,
        badge: 'Hot',
        color: '#22c55e',
        keywords: ['jalapeno', 'hot chips', 'Mexican heat', 'organic']
    },
    {
        id: 'tomatonion',
        name: 'Tomatonion Organic Yellow Chips',
        tagline: 'Savory & Rich',
        description: 'A unique blend of sun-ripened tomato and sweet onion. Savory satisfaction in every bite.',
        price: 7.49,
        weight: '283g',
        image: MAXI_IMAGES.tomatonionChips,
        badge: 'Unique',
        color: '#f97316',
        keywords: ['tomato onion', 'savory', 'yellow corn', 'unique flavor']
    }
];

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
                    <img src={MAXI_IMAGES.hero.src} alt={MAXI_IMAGES.hero.alt} className="w-full h-full object-cover opacity-40" style={{ objectPosition: 'center calc(50% - 200px)' }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
                    <div className="max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="h-[2px] w-12 bg-[#26c6da]"></span>
                                <span className="text-[#26c6da] font-black tracking-[0.3em] uppercase text-xs">Certified Organic</span>
                            </div>
                            {/* Mexican Colorful MAXI Brand */}
                            <div className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-4">
                                <span style={{ color: '#E4002B' }}>M</span>
                                <span style={{ color: '#FFC72C' }}>A</span>
                                <span style={{ color: '#00873E' }}>X</span>
                                <span style={{ color: '#FF6B35' }}>I</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[0.9] mb-8 tracking-tight">
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
                    </div>
                </div>
            </section>

            {/* DISCOVER YOUR FLAVOR - Product Flavors Showcase */}
            <section className="py-32 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-[2px] w-12 bg-[#26c6da]"></span>
                            <span className="text-[#26c6da] font-black tracking-[0.3em] uppercase text-xs">Flavor Collection</span>
                            <span className="h-[2px] w-12 bg-[#26c6da]"></span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">DISCOVER YOUR <span className="text-[#26c6da]">FLAVOR</span></h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">From zesty lime to bold jalapeño, each flavor is crafted with authentic Mexican spices and organic ingredients.</p>
                    </div>
                    
                    {/* Product Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PRODUCTS.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#26c6da]/50 transition-all duration-500"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img 
                                        src={product.image.src} 
                                        alt={product.image.alt} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider" style={{ backgroundColor: product.color, color: 'black' }}>
                                        {product.badge}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                                    <p className="text-white/50 text-sm mb-4">{product.tagline}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-display text-[#26c6da]">${product.price.toFixed(2)}</span>
                                        <button 
                                            onClick={() => setCartCount(c => c + 1)}
                                            className="bg-white/10 hover:bg-[#26c6da] text-white hover:text-black px-4 py-2 rounded-full text-xs font-bold transition-all"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Width Image Banner */}
            <section className="py-0">
                <div className="relative h-[60vh] overflow-hidden">
                    <img src={MAXI_IMAGES.handcrafted.src} alt={MAXI_IMAGES.handcrafted.alt} className="w-full h-full object-cover" />
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
                            <img src={MAXI_IMAGES.crispyDetail.src} alt={MAXI_IMAGES.crispyDetail.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                            <img src={MAXI_IMAGES.lifestyleTaste.src} alt={MAXI_IMAGES.lifestyleTaste.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                            <img src={MAXI_IMAGES.pureIngredients.src} alt={MAXI_IMAGES.pureIngredients.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold mb-1">Tomatonion Organic Yellow Chips</h3>
                                <span className="text-[#26c6da] font-display">$7.49</span>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden group bg-[#111]">
                            <img src={MAXI_IMAGES.goldenHour.src} alt={MAXI_IMAGES.goldenHour.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold mb-1">Pico de Gallo Salsa</h3>
                                <span className="text-[#26c6da] font-display">$8.99</span>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden group bg-[#111]">
                            <img src={MAXI_IMAGES.artisanPride.src} alt={MAXI_IMAGES.artisanPride.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                            <img src={MAXI_IMAGES.ecoPackaging.src} alt={MAXI_IMAGES.ecoPackaging.alt} className="w-full rounded-3xl shadow-2xl" />
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
                            <img src={MAXI_IMAGES.organicCertified.src} alt={MAXI_IMAGES.organicCertified.alt} className="w-full rounded-3xl shadow-2xl" />
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

            {/* NEW: Heritage Gallery - Using new KV images */}
            <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 tracking-tight">MEXICAN <span className="italic font-serif font-normal text-white/40">Heritage</span></h2>
                        <p className="text-white/50 max-w-xl mx-auto">Bringing UNESCO Cultural Heritage traditions to your table with every chip.</p>
                    </div>
                    
                    {/* Masonry-style Gallery */}
                    <div className="grid md:grid-cols-3 gap-4">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                            >
                                <img src={MAXI_IMAGES.newHeroOrganic.src} alt={MAXI_IMAGES.newHeroOrganic.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#26c6da]">Premium Quality</span>
                                </div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-2xl overflow-hidden aspect-square"
                            >
                                <img src={MAXI_IMAGES.canadianPride.src} alt={MAXI_IMAGES.canadianPride.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">Made in Canada</span>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Column 2 */}
                        <div className="space-y-4">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-2xl overflow-hidden aspect-square"
                            >
                                <img src={MAXI_IMAGES.newHandcraftedHeritage.src} alt={MAXI_IMAGES.newHandcraftedHeritage.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">Handcrafted</span>
                                </div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                            >
                                <img src={MAXI_IMAGES.newPremiumQuality.src} alt={MAXI_IMAGES.newPremiumQuality.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#26c6da]">Artisan Quality</span>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Column 3 */}
                        <div className="space-y-4">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                            >
                                <img src={MAXI_IMAGES.newCanadianPride.src} alt={MAXI_IMAGES.newCanadianPride.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">Alberta Pride</span>
                                </div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-2xl overflow-hidden aspect-square"
                            >
                                <img src={MAXI_IMAGES.newFlavorDiversity.src} alt={MAXI_IMAGES.newFlavorDiversity.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#26c6da]">Flavor Diversity</span>
                                </div>
                            </motion.div>
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
                <img src={MAXI_IMAGES.glutenFree.src} alt={MAXI_IMAGES.glutenFree.alt} className="w-full h-full object-cover" />
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
