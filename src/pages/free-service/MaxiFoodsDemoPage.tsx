import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Star, Leaf, Award, MapPin, ArrowRight, ArrowLeft, Check, Facebook, Instagram, Twitter, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Real Product Data from maxifoods.ca
const PRODUCTS = [
    {
        id: 1,
        name: "Lime Organic White Tortilla Chips",
        flavor: "Lime",
        price: 7.49,
        image: "/imgs/maxi-foods-packaging.jpg",
        tags: ["Organic", "Gluten-Free", "Vegan"],
        description: "Zesty and refreshing with real lime. Handcrafted in small batches using non-GMO organic white corn flour."
    },
    {
        id: 2,
        name: "Chili-Lime Organic Yellow Corn Chips",
        flavor: "Chili-Lime",
        price: 7.49,
        image: "/imgs/maxi-foods-packaging.jpg",
        tags: ["Organic", "Spicy", "Vegan"],
        description: "The perfect balance of heat and citrus. Authentic Mexican flavor with a healthy, all-natural twist."
    },
    {
        id: 3,
        name: "Tomatonion Organic Yellow Chips",
        flavor: "Tomato & Onion",
        price: 7.49,
        image: "/imgs/maxi-foods-packaging.jpg",
        tags: ["Organic", "Savory", "Non-GMO"],
        description: "A unique blend of sun-ripened tomatoes and savory onions. Crispy perfection made with simple ingredients."
    },
    {
        id: 4,
        name: "Pico de Gallo Salsa",
        flavor: "Classic Fresh",
        price: 8.99,
        image: "https://images.squarespace-cdn.com/content/v1/604fb524a07b3150a39f3e78/1615838561144-8R8YUPRK9C0B9K3G6U7V/maxi_foods_pico_de_gallo.png",
        tags: ["Fresh", "No Preservatives", "Vegan"],
        description: "Authentic fresh salsa made with the finest tomatoes, onions, and jalapeños. Intangible Heritage of Humanity flavor."
    },
    {
        id: 5,
        name: "Salsa Verde",
        flavor: "Tangy Tomatillo",
        price: 8.99,
        image: "https://images.squarespace-cdn.com/content/v1/604fb524a07b3150a39f3e78/1615838634844-3T9N9R9N9R9N9R9N9R9N/maxi_foods_salsa_verde.png",
        tags: ["Tangy", "Authentic", "Natural"],
        description: "Traditional Mexican green salsa featuring roasted tomatillos and fresh cilantro. A stapel for any taco night."
    },
    {
        id: 6,
        name: "Guacamole",
        flavor: "Creamy Avocado",
        price: 9.99,
        image: "https://images.squarespace-cdn.com/content/v1/604fb524a07b3150a39f3e78/1615838700000-XXXXXXXXXXXXX/maxi_foods_guacamole.png",
        tags: ["Superfood", "Handcrafted", "Fresh"],
        description: "Rich, creamy, and made with 100% Hass avocados. No fillers, no artificial colorants—just pure goodness."
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

    // Logo from the site (sun/pyramid)
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
                <title>Maxi Foods | Authentic Mexican Staples with a Healthy Twist</title>
                <meta name="description" content="Handcrafted, Organic, and all-natural Mexican food staples. Gluten-free, Vegan, and Non-GMO. Made in Airdrie, Alberta." />
                <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
          .font-display { font-family: 'Outfit', sans-serif; }
          .font-serif { font-family: 'Playfair Display', serif; }
        `}</style>
            </Helmet>

            {/* Achieve Pack Return Banner */}
            <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-600 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link 
                        to="/free-service/website-upgrade" 
                        className="flex items-center gap-2 text-sm hover:text-white/80 transition"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Achieve Pack
                    </Link>
                    <span className="text-xs text-white/80 hidden sm:block">This is a demo website created by Achieve Pack</span>
                    <Link 
                        to="/store" 
                        className="text-sm font-medium hover:text-white/80 transition"
                    >
                        Browse Packaging →
                    </Link>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex items-center justify-between">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0 cursor-pointer h-12"
                        >
                            <MaxiLogo />
                        </motion.div>

                        <div className="hidden md:flex items-center space-x-10">
                            {['Shop', 'Our Story', 'Wholesale', 'Contact'].map((item) => (
                                <a key={item} href="#" className="text-sm font-semibold tracking-widest uppercase hover:text-[#26c6da] transition-colors duration-300 opacity-80 hover:opacity-100">
                                    {item}
                                </a>
                            ))}
                            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                            <button className="relative group p-2">
                                <ShoppingCart className="w-6 h-6 group-hover:text-[#26c6da] transition-colors" />
                                <AnimatePresence>
                                    {cartCount > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute -top-1 -right-1 w-5 h-5 bg-[#26c6da] text-black rounded-full text-[10px] font-black flex items-center justify-center border-2 border-black"
                                        >
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

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#26c6da]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ff4081]/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="h-[2px] w-12 bg-[#26c6da]"></span>
                                <span className="text-[#26c6da] font-black tracking-[0.3em] uppercase text-xs">Authentic Quality</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[0.9] mb-8 tracking-tight">
                                REAL FOOD<br />
                                <span className="italic font-serif font-normal text-white/40">Clean Label</span>
                            </h1>

                            <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed font-light">
                                Handcrafted in Airdrie, Alberta. Committed to bringing unique Mexican flavors to your table with <span className="text-white font-medium">zero preservatives</span> and <span className="text-white font-medium">zero artificial colorants</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-[#26c6da] text-black px-10 py-5 rounded-full font-extrabold text-sm tracking-widest uppercase hover:bg-white transition-all shadow-2xl shadow-[#26c6da]/20 flex items-center justify-center gap-3"
                                >
                                    SHOP PRODUCTS <ArrowRight className="w-5 h-5" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ borderOpacity: 1, background: "rgba(255,255,255,0.05)" }}
                                    className="border border-white/20 text-white px-10 py-5 rounded-full font-extrabold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3"
                                >
                                    LOCAL PICKUP info
                                </motion.button>
                            </div>

                            <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 opacity-70">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#26c6da]" />
                                    <span className="text-xs font-bold tracking-widest uppercase">100% Gluten-Free</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Leaf className="w-5 h-5 text-[#26c6da]" />
                                    <span className="text-xs font-bold tracking-widest uppercase">Certified Organic</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#26c6da]/20 to-transparent rounded-[2rem] blur-2xl -z-10 translate-y-10 scale-90"></div>
                                <img
                                    src="/imgs/maxi-foods-packaging.jpg"
                                    alt="Maxi Foods Premium Tortilla Chips"
                                    className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                                />
                            </div>

                            {/* Product Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute top-10 right-0 bg-white text-black px-6 py-6 rounded-full flex flex-col items-center justify-center border-8 border-black shadow-xl"
                            >
                                <span className="text-[10px] font-black uppercase tracking-tighter">Hand-Made in</span>
                                <span className="text-lg font-black leading-tight">AIRDRIE</span>
                            </motion.div>

                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#26c6da]/5 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid md:grid-cols-3 gap-16 border-y border-white/5 py-20 uppercase tracking-[0.2em] text-xs font-black">
                        <div className="flex flex-col items-center text-center gap-4">
                            <span className="text-[#26c6da] text-3xl">🌿</span>
                            <span>ALL-NATURAL INGREDIENTS</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4">
                            <span className="text-[#26c6da] text-3xl">🚫</span>
                            <span>NO PRESERVATIVES</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4">
                            <span className="text-[#26c6da] text-3xl">🌽</span>
                            <span>NON-GMO CORN FLOUR</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section id="products" className="py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 tracking-tighter uppercase leading-none">
                                THE MODERN <br />
                                <span className="text-[#26c6da]">STAPLES.</span>
                            </h2>
                            <p className="text-lg text-white/40 font-light max-w-lg">
                                Taste the heritage. Handcrafted corn tortilla chips and salsas inspired by UNESCO Intangible Cultural Heritage.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-[2px] w-24 bg-white/10 self-center"></div>
                            <a href="#" className="font-bold tracking-widest uppercase text-xs hover:text-[#26c6da] transition-colors">View All Products</a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                        {PRODUCTS.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#111] p-12 transition-all duration-500 group-hover:bg-[#1a1a1a] relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

                                    {/* Floating Content Tag */}
                                    <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                                        {product.tags.slice(0, 1).map(tag => (
                                            <span key={tag} className="bg-white/5 backdrop-blur-md text-white text-[9px] uppercase font-black px-4 py-1.5 rounded-full border border-white/10 tracking-widest">{tag}</span>
                                        ))}
                                    </div>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 ease-out"
                                    />

                                    {/* Quick Add Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setCartCount(c => c + 1)}
                                        className="absolute bottom-8 right-8 w-14 h-14 bg-[#26c6da] text-black rounded-full flex items-center justify-center shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                                    >
                                        <PlusIcon className="w-6 h-6" />
                                    </motion.button>
                                </div>

                                <div className="mt-8 px-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold tracking-tight max-w-[70%]">{product.name}</h3>
                                        <span className="text-xl font-display font-light text-[#26c6da]">${product.price}</span>
                                    </div>
                                    <p className="text-white/40 text-sm font-light leading-relaxed">{product.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-40 bg-white text-black overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 text-[15rem] font-black text-black/5 select-none leading-none">HIST</div>
                            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none mb-12">
                                A MEXICAN <br />
                                <span className="text-black/30">ENGINEER'S</span> <br />
                                JOURNEY.
                            </h2>
                            <div className="h-2 w-20 bg-black mb-12"></div>
                            <p className="text-2xl font-serif italic mb-10 leading-snug">
                                "Our story began with a simple desire: to bring true Mexican gastronomy—a UNESCO Cultural Intangible Heritage—to Canada."
                            </p>
                        </div>
                        <div className="space-y-8 text-lg font-light leading-relaxed opacity-80">
                            <p>
                                Founded by <span className="font-bold">Vladimir Gonzalez</span>, a chemical engineer from Mexico who relocated to Canada in 2002. Vladimir's professional background combined with his passion for his roots led to the creation of Maxi Foods.
                            </p>
                            <p>
                                We are committed to quality, choosing only the best ingredients. Every tortilla, every chip, and every jar of salsa is handcrafted in a professional gluten-free facility in Airdrie, Alberta.
                            </p>
                            <p>
                                Our philosophy is simple: No preservatives, no artificial colorants, and no fillers. Just authentic staples with a healthy, modern twist.
                            </p>
                            <button className="pt-6 font-black tracking-[0.3em] uppercase text-xs flex items-center gap-3 border-b-2 border-black/10 pb-2 hover:border-black transition-all group">
                                READ THE FULL STORY <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
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
                            <p className="text-white/40 max-w-sm text-lg leading-relaxed mb-10">
                                Dedicated to bringing authentic Mexican gastronomy to all communities in Canada.
                                Handcrafted, clean, and uncompromisingly delicious.
                            </p>
                            <div className="flex gap-6">
                                {[{ icon: Facebook, color: "#1877F2" }, { icon: Instagram, color: "#E4405F" }, { icon: Twitter, color: "#1DA1F2" }].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ scale: 1.1, color: social.color }}
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all border border-white/5"
                                    >
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
                                <li><a href="#" className="hover:text-white transition-colors">Vegan Creams</a></li>
                            </ul>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <h4 className="font-black tracking-[0.2em] uppercase text-xs text-[#26c6da]">Connect</h4>
                            <ul className="space-y-4 text-white/50 text-sm font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Recipes</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Find a Store</a></li>
                            </ul>
                        </div>

                        <div className="lg:col-span-3 space-y-8">
                            <h4 className="font-black tracking-[0.2em] uppercase text-xs text-[#26c6da]">Visit Us</h4>
                            <div className="space-y-6 text-white/50 text-sm font-medium">
                                <div className="flex gap-4">
                                    <MapPin className="w-5 h-5 text-white/20 shrink-0" />
                                    <span>#101, 2944 Kingsview Blvd.<br />Airdrie, AB. T4A 0M2</span>
                                </div>
                                <div className="flex gap-4">
                                    <Mail className="w-5 h-5 text-white/20 shrink-0" />
                                    <span>info@maxifoods.ca</span>
                                </div>
                                <div className="flex gap-4">
                                    <Phone className="w-5 h-5 text-white/20 shrink-0" />
                                    <span>(403) 608-2476</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-black tracking-widest uppercase">
                        <p>&copy; {new Date().getFullYear()} Maxi Foods. Authentic Quality Since 2002.</p>
                        <div className="flex gap-8">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Shipping</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black p-8 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-20">
                            <MaxiLogo />
                            <button onClick={() => setIsMenuOpen(false)}><X className="w-10 h-10" /></button>
                        </div>
                        <div className="flex flex-col gap-10">
                            {['Shop All', 'Our Story', 'Wholesale', 'Find Us', 'Contact'].map(item => (
                                <a key={item} href="#" className="text-5xl font-display font-black tracking-tighter hover:text-[#26c6da]">{item}</a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function PlusIcon(props: any) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    );
}
