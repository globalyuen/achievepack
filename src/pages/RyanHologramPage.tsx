import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Terminal, Cpu, Globe, Award, GraduationCap, Briefcase, 
  Target, Volume2, VolumeX, Sparkles, Clock, ArrowUpRight, 
  Send, Compass, Database, User, Activity, MapPin, ChevronRight
} from 'lucide-react'
import { ThreePouchViewer } from '../components/ThreePouchViewer'

// Custom Audio Synth Generator using browser AudioContext
class SciFiSoundEngine {
  private ctx: AudioContext | null = null;

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  playBeep(freq = 600, duration = 0.08, type: OscillatorType = 'sine') {
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio Context block:', e);
    }
  }
}

const soundEngine = new SciFiSoundEngine();



const RyanHologramPage = () => {
  const [booting, setBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'abilities' | 'network' | 'logs'>('profile');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [randomCoord, setRandomCoord] = useState('22.3193° N, 114.1694° E');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollPercent(scrollTop / docHeight);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pouchModels = {
    'family': {
      url: 'family',
      name: 'Pouch Family',
      emoji: '👨‍👩‍👧‍👦',
      moq: 'Varies by shape',
      materials: 'All 100% Compostable Structures',
      desc: 'The complete family of Achieve Pack premium sustainable structures shown standing together in one virtual workspace. Toggle individual models below to inspect detailed configurations, features, and precise material laminations.'
    },
    'stand-up': {
      url: '/3d/3d-pouch/stand-up-pouch.glb',
      name: 'Stand-Up Pouch',
      emoji: '🥡',
      moq: '1,000 units',
      materials: 'NK / Kraft / PBS Compostable Barrier',
      desc: 'Premium Doypack style stand-up pouch featuring a high-barrier laminated kraft layer and a fully compostable zipper. Ideal for premium coffee, tea, and snack brands seeking zero environmental footprint.'
    },
    'three-side': {
      url: '/3d/3d-pouch/3-side-seal.glb',
      name: '3-Side Seal Pouch',
      emoji: '✉️',
      moq: '5,000 units',
      materials: 'Paper / PLA High-Barrier Compostable',
      desc: 'Flat pouch configuration sealed on three sides for maximum rigidity. Perfect for single-serve coffee packets, protein powders, supplements, and sample packaging.'
    },
    'flat-bottom': {
      url: '/3d/3d-pouch/flat-bottom-pouch.glb',
      name: 'Flat Bottom Pouch',
      emoji: '📦',
      moq: '2,000 units',
      materials: 'Mono-Material Recyclable PE / PP',
      desc: 'Box-style flat bottom pouch that stands perfectly upright on retail shelves. Offers maximum volumetric space and pristine front/back canvas presentation.'
    },
    'spouted': {
      url: '/3d/3d-pouch/spouted-pouch.glb',
      name: 'Spouted Pouch',
      emoji: '🥤',
      moq: '2,000 units',
      materials: 'Bio-EVOH / Plant-Based Rigid Spouts',
      desc: 'Fully compostable flexible spouted pouch designed for liquids, baby food purees, energy gels, and cosmetics, featuring a certified plant-based rigid spout.'
    },
    'coffee': {
      url: '/3d/3d-pouch/coffee-pouch.glb',
      name: 'Coffee Pouch',
      emoji: '☕',
      moq: '1,000 units',
      materials: 'Kraft Paper / Bio-Degassing Valve',
      desc: 'Specialty coffee packaging integrated with a fully compostable organic degassing valve to allow active CO2 release while preserving flavor profiles.'
    }
  };

  const [selectedModel, setSelectedModel] = useState<keyof typeof pouchModels>('family');

  const hologramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      setCurrentTime(d.toUTCString().replace('GMT', 'UTC'));
      if (Math.random() > 0.85) {
        const lat = (22.2 + Math.random() * 0.3).toFixed(4);
        const lng = (114.1 + Math.random() * 0.2).toFixed(4);
        setRandomCoord(`${lat}° N, ${lng}° E`);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Bootup sequence progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setBooting(false);
            if (soundEnabled) soundEngine.playBeep(880, 0.2, 'sine');
          }, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 35);
    return () => clearInterval(progressInterval);
  }, [soundEnabled]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hologramRef.current) return;
    const rect = hologramRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 25, y: y * -25 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const playClick = () => {
    if (soundEnabled) soundEngine.playBeep(680, 0.05, 'sine');
  };

  const handleTabChange = (tab: any) => {
    playClick();
    setActiveTab(tab);
  };

  const countries = [
    { name: 'Australia', flag: '🇦🇺', desc: 'Sustainable pouch supply to leading specialty coffee roasters in Melbourne.' },
    { name: 'Canada', flag: '🇨🇦', desc: 'Compostable loose-leaf tea pouch deployment and startup consulting.' },
    { name: 'China', flag: '🇨🇳', desc: 'Upstream supply chain coordination & digital printing factory inspections.' },
    { name: 'Germany', flag: '🇩🇪', desc: 'EU PPWR standard organic barrier coffee bags retail placement.' },
    { name: 'South Africa', flag: '🇿🇦', desc: 'Eco-conscious chocolate wrappers & confectionery barrier mockups.' },
    { name: 'Philippines', flag: '🇵🇭', desc: 'Low-MOQ retail packaging deployment for natural brands.' },
    { name: 'UK', flag: '🇬🇧', desc: 'Specialty compostable block bottom coffee bags logistics.' },
    { name: 'USA', flag: '🇺🇸', desc: 'High-speed HP Indigo 20000 custom pouch print pipelines nationwide.' }
  ];

  return (
    <>
      <Helmet>
        <title>Ryan Wong - Packaging Development Specialist | Achieve Pack</title>
        <meta name="description" content="Explore Ryan Wong's interactive 2025 creative developer portfolio. Co-founder of Achieve Pack helping brands transition to 100% compostable digital printing." />
        <meta name="theme-color" content="#f5efe6" />
        <link rel="canonical" href="https://achievepack.com/ryan" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&family=Outfit:wght@300;400;600;700;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Styled in the official David Heckhoff cream-and-charcoal layout system */}
      <div className="min-h-screen bg-[#f5efe6] text-[#2d2a24] font-['Space_Grotesk'] relative overflow-hidden select-none selection:bg-[#ff8400]/20 selection:text-[#2d2a24]">
        
        {/* Subtle grid pattern background overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#2d2a24_1px,transparent_1px),linear-gradient(to_bottom,#2d2a24_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Subtle circular scanner radial gradient */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,132,0,0.015)_0%,transparent_80%)]"></div>

        {/* 1. LOADING SCREEN - 2025 STYLE */}
        {booting && (
          <div className="fixed inset-0 z-50 bg-[#f5efe6] flex flex-col items-center justify-center p-6 transition-all duration-300">
            <div className="max-w-md w-full space-y-6 text-center">
              <div className="flex justify-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff8400] animate-ping"></span>
              </div>
              <div className="space-y-1">
                <h1 className="text-xl font-black tracking-widest text-[#2d2a24] font-['Space_Grotesk'] uppercase">
                  INITIALIZING PORTFOLIO
                </h1>
                <p className="text-[10px] text-[#5f5646] font-['Space_Mono'] tracking-wider">
                  RYAN WONG // SYSTEM CORE v2.0.26
                </p>
              </div>

              {/* Progress counter */}
              <div className="relative pt-1 max-w-xs mx-auto">
                <div className="flex mb-2 items-center justify-between text-xs font-['Space_Mono'] text-[#5f5646]">
                  <span>LOADING SHADERS...</span>
                  <span className="font-bold">{bootProgress}%</span>
                </div>
                <div className="overflow-hidden h-1.5 text-xs flex rounded bg-[#dfd2bf]">
                  <div 
                    style={{ width: `${bootProgress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#ff8400] transition-all duration-100"
                  ></div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    setSoundEnabled(true);
                    soundEngine.playBeep(880, 0.08, 'sine');
                  }}
                  className={`px-4 py-2 border rounded-full text-[10px] font-['Space_Mono'] font-bold transition duration-300 ${
                    soundEnabled 
                      ? 'border-[#ff8400] bg-[#ff8400]/10 text-[#ff8400]' 
                      : 'border-[#dfd2bf] text-[#5f5646] hover:border-[#2d2a24] hover:text-[#2d2a24]'
                  }`}
                >
                  {soundEnabled ? '🔊 AUDIO ENABLED' : '🔇 ENGAGE AUDIO SYSTEM'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. THE SIGNATURE HEADER WITH DOCKED BORDERS */}
        <header className="fixed top-0 left-50 transform translate-x-0 w-full max-w-7xl mx-auto px-4 z-40 h-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto bg-[#f5efe6]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#dfd2bf] shadow-sm">
            <div className="relative w-6 h-6 flex items-center justify-center bg-[#2d2a24] rounded-full text-white font-black text-xs">
              R
            </div>
            <div>
              <h2 className="text-xs font-black tracking-widest text-[#2d2a24] uppercase">RYAN WONG</h2>
              <p className="text-[8px] text-[#5f5646] font-['Space_Mono'] tracking-wider">ECO_ARCHITECT</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pointer-events-auto bg-[#f5efe6]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#dfd2bf] shadow-sm">
            {/* Audio Toggle Button */}
            <button
              onClick={() => {
                playClick();
                setSoundEnabled(!soundEnabled);
              }}
              className="flex items-center gap-1.5 text-[9px] font-bold text-[#2d2a24] hover:text-[#ff8400] transition"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="h-3.5 w-3.5 text-[#ff8400] animate-bounce" />
                  <span>SOUND ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="h-3.5 w-3.5 text-[#5f5646]" />
                  <span className="text-[#5f5646]">MUTED</span>
                </>
              )}
            </button>

            <span className="w-1.5 h-1.5 rounded-full bg-[#dfd2bf]"></span>

            <Link
              to="/"
              onClick={playClick}
              className="text-[9px] font-black uppercase text-[#2d2a24] hover:text-[#ff8400]"
            >
              [ EXIT ]
            </Link>
          </div>
        </header>

        {/* Global Full-Screen 3D Pouch Viewport for Desktop (Persistent in visual field!) */}
        <div className="hidden lg:block fixed inset-0 w-full h-[100vh] z-10 pointer-events-none">
          <div className="w-full h-full pointer-events-auto">
            <ThreePouchViewer modelUrl={pouchModels[selectedModel].url} tilt={tilt} scrollPercent={scrollPercent} isMobile={false} />
          </div>
        </div>

        {/* 3. MAIN SCROLLABLE CONTAINER */}
        <div className="pt-28 pb-12 px-4 max-w-7xl mx-auto relative min-h-[90vh] z-20">
          
          {/* Hero Section: Left-aligned content, leaving the right side wide open for the 3D pouch */}
          <section className="w-full lg:w-7/12 space-y-8 min-h-[75vh] flex flex-col justify-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2d2a24]/5 border border-[#dfd2bf] rounded-full text-[10px] text-[#5f5646] font-['Space_Mono'] uppercase tracking-wider">
                <Activity className="h-3.5 w-3.5 text-[#ff8400] animate-pulse" />
                <span>SYSTEM AGENT DIRECTORY // HKG_LAX</span>
              </div>
              
              {/* Big Bold Headline */}
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#2d2a24] leading-[0.9] font-['Outfit']">
                  Ryan<br />Wong
                </h1>

                {/* Iconic -5deg Tilted Orange Sticker Banner */}
                <div className="absolute -bottom-4 right-[-40px] md:right-[-60px] transform rotate-[-5deg] bg-[#ff8400] text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-md rounded border border-white">
                  🏆 Eco Packaging Pioneer
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-[#5f5646] max-w-lg leading-relaxed font-bold">
              Founder of Achieve Pack & Pouch.eco. Decomposing packaging barriers and digitalizing 100% compostable structures to help startups scale.
            </p>

            {/* Quick dashboard badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg border border-[#dfd2bf] bg-[#2d2a24]/5 text-xs font-bold text-[#2d2a24]">🎓 PolyU Honor Degree</span>
              <span className="px-3 py-1.5 rounded-lg border border-[#dfd2bf] bg-[#2d2a24]/5 text-xs font-bold text-[#2d2a24]">🌱 100% Compostable</span>
              <span className="px-3 py-1.5 rounded-lg border border-[#dfd2bf] bg-[#2d2a24]/5 text-xs font-bold text-[#2d2a24]">⚡ HP Indigo Digital</span>
            </div>

            {/* Mobile-only inline 3D viewport (Locks to center so it frames beautifully on phones) */}
            <div className="lg:hidden w-full max-w-[320px] h-[340px] mx-auto flex items-center justify-center relative z-10 mt-6 bg-[#f5efe6] border border-[#dfd2bf] rounded-2xl p-4 shadow-sm">
              <ThreePouchViewer modelUrl={pouchModels[selectedModel].url} tilt={tilt} scrollPercent={0} isMobile={true} />
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://calendly.com/30-min-free-packaging-consultancy" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={playClick}
                className="inline-flex items-center gap-2 bg-[#2d2a24] hover:bg-[#ff8400] text-[#f5efe6] hover:text-white px-8 py-3.5 rounded-full font-black text-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5 group"
              >
                <span>BOOK SECURE CONSULTATION</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href="https://www.linkedin.com/in/ryanwwc/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={playClick}
                className="inline-flex items-center gap-2 border-2 border-[#2d2a24] hover:bg-[#2d2a24] hover:text-white px-6 py-3.5 rounded-full font-black text-sm transition-all duration-300"
              >
                <span>LINKEDIN</span>
              </a>
            </div>
          </section>

          {/* Interactive 3D Packaging Design Lab: Left aligned as the bag is transitioning to the center/left */}
          <section className="py-16 border-t border-[#dfd2bf]/60 mt-24 w-full lg:w-7/12">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2a24] tracking-tight">
                🔬 Interactive 3D Packaging Design Lab
              </h2>
              <p className="mt-2 text-xs md:text-sm text-[#ff8400] font-['Space_Mono'] font-bold">
                [ REAL-TIME RENDERED 3D FLEXIBLE PACKAGING MOCKUPS ]
              </p>
            </div>

            {/* Model Selector Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(pouchModels).map(([key, model]) => (
                <button
                  key={key}
                  onClick={() => {
                    playClick();
                    setSelectedModel(key as any);
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-xl border-2 transition-all duration-200 ${
                    selectedModel === key
                      ? 'bg-[#2d2a24] text-white border-[#2d2a24] shadow-md'
                      : 'bg-white text-[#2d2a24] border-[#dfd2bf] hover:bg-[#2d2a24]/5 hover:border-[#2d2a24]'
                  }`}
                >
                  {model.emoji} {model.name}
                </button>
              ))}
            </div>

            <div className="bg-white border-2 border-[#2d2a24] rounded-2xl p-6 space-y-4 shadow-sm transition-all duration-300">
              <div className="flex justify-between items-start">
                <span className="text-3xl">{pouchModels[selectedModel].emoji}</span>
                <span className="text-[8px] font-['Space_Mono'] px-2 py-0.5 rounded-full border text-[#ff8400] border-[#ff8400]/30 bg-[#ff8400]/5 font-bold uppercase">
                  {pouchModels[selectedModel].name}
                </span>
              </div>
              
              <h3 className="font-extrabold text-[#2d2a24] text-base">{pouchModels[selectedModel].name} Mockup</h3>
              <div className="text-[10px] text-[#5f5646] font-['Space_Mono'] leading-tight">
                <div className="text-[#ff8400] font-bold">MOQ: {pouchModels[selectedModel].moq}</div>
                <div className="text-[#8c826e]">{pouchModels[selectedModel].materials}</div>
              </div>
              
              <p className="text-xs text-[#5f5646] leading-relaxed">
                {pouchModels[selectedModel].desc}
              </p>
            </div>
          </section>

          {/* Interactive Specifications Card Dock: Right aligned on desktop since the bag has glided to the left side! */}
          <section className="py-16 border-t border-[#dfd2bf]/60 mt-24 w-full lg:w-7/12 lg:ml-auto">
            <div className="grid grid-cols-1 gap-6">
              
              {/* TABS CONTROLLER */}
              <div className="flex flex-col gap-4">
                <div className="bg-[#2d2a24]/5 border border-[#dfd2bf] rounded-2xl p-1.5 flex flex-wrap gap-1 shadow-sm">
                  {[
                    { id: 'profile', label: '🛡️ Credentials' },
                    { id: 'abilities', label: '⚡ Expertise' },
                    { id: 'network', label: '🌐 Global Nodes' },
                    { id: 'logs', label: '📝 Case Reports' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id as any)}
                      className={`flex-1 py-2 px-3 text-[10px] md:text-xs font-bold rounded-xl text-center transition duration-200 ${
                        activeTab === tab.id 
                          ? 'bg-[#2d2a24] text-white shadow-md' 
                          : 'text-[#2d2a24] hover:bg-[#2d2a24]/10'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* HIGH-FIDELITY ACTIVE CARD DOCK VIEW */}
                <div className="bg-white border-2 border-[#2d2a24] rounded-3xl p-6 shadow-md relative min-h-[380px] flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-[#f5efe6] rounded-br-2xl border-t border-l border-white pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 bg-[#f5efe6] rounded-bl-2xl border-t border-r border-white pointer-events-none"></div>

                  <div className="space-y-6">
                    
                    {/* TAB 1: PROFILE CREDENTIALS */}
                    {activeTab === 'profile' && (
                      <div className="space-y-5 animate-fadeIn">
                        <div className="flex items-center gap-2.5 border-b border-[#dfd2bf] pb-3">
                          <User className="h-5 w-5 text-[#ff8400]" />
                          <h3 className="text-sm font-black text-[#2d2a24] uppercase tracking-wider font-['Space_Mono']">
                            CREDENTIALS_SYS_LOG
                          </h3>
                        </div>
                        
                        <div className="space-y-4 text-sm text-[#5f5646]">
                          <div className="space-y-1">
                            <span className="text-[10px] text-[#ff8400] font-['Space_Mono'] font-bold block uppercase">[ CAREER SUMMARY ]</span>
                            <p className="text-xs text-[#2d2a24] leading-relaxed">
                              With over <strong>14 years of professional experience</strong> in the packaging industry, Ryan has scaled logistics and custom bag projects across multinational and Fortune 500 corporations.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                            <div className="space-y-1">
                              <span className="text-[10px] text-[#ff8400] font-['Space_Mono'] font-bold block uppercase">[ EDUCATION ]</span>
                              <span className="text-xs text-[#2d2a24] font-bold block">Hong Kong Polytechnic University</span>
                              <span className="text-xs text-[#5f5646]">Global Supply Chain Management (Honours Degree)</span>
                            </div>
                            
                            <div className="space-y-1">
                              <span className="text-[10px] text-[#ff8400] font-['Space_Mono'] font-bold block uppercase">[ RECOGNITION ]</span>
                              <span className="text-xs text-[#2d2a24] font-bold block">PolyU Featured Alumni</span>
                              <span className="text-xs text-[#5f5646]">Young Achievers Program Recognition</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB 2: SYSTEM SKILLS & BARRIERS */}
                    {activeTab === 'abilities' && (
                      <div className="space-y-5 animate-fadeIn">
                        <div className="flex items-center gap-2.5 border-b border-[#dfd2bf] pb-3">
                          <Target className="h-5 w-5 text-[#ff8400]" />
                          <h3 className="text-sm font-black text-[#2d2a24] uppercase tracking-wider font-['Space_Mono']">
                            ABILITIES_MATRIX_COMPILER
                          </h3>
                        </div>

                        <div className="space-y-3.5">
                          {[
                            { title: 'Compostable Pouch Design & R&D', level: 100, desc: 'Expertise in EN 13432 & ASTM D6400 raw structures.' },
                            { title: 'HP Indigo 20000 Printing Tech', level: 95, desc: 'Optimizing ink overlays and high-speed mockups.' },
                            { title: 'Supply Chain Architecture & Logistics', level: 90, desc: 'Orchestrating upstream processing to end-delivery.' },
                            { title: 'Low MOQ Startup Deployment', level: 100, desc: 'Enabling digital-grade packaging runs from 100 pieces.' }
                          ].map((skill, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-[#2d2a24]">
                                <span>{skill.title}</span>
                                <span className="text-[#ff8400] font-mono">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-[#2d2a24]/5 h-1.5 rounded p-0 border border-[#dfd2bf]/40">
                                <div 
                                  className="bg-[#ff8400] h-full rounded"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                              <span className="text-[9px] text-[#5f5646] font-['Space_Mono'] block">{skill.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* TAB 3: GLOBAL PIPELINE MAP */}
                    {activeTab === 'network' && (
                      <div className="space-y-4 animate-fadeIn">
                        <div className="flex items-center gap-2.5 border-b border-[#dfd2bf] pb-3">
                          <Globe className="h-5 w-5 text-[#ff8400]" />
                          <h3 className="text-sm font-black text-[#2d2a24] uppercase tracking-wider font-['Space_Mono']">
                            GLOBAL_PIPELINE_ROUTING
                          </h3>
                        </div>

                        <p className="text-xs text-[#5f5646]">
                          Ryan Wong serves packaging pipelines across 8 key countries. Select any country node below:
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {countries.map((c, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                playClick();
                                setActiveNode(activeNode === c.name ? null : c.name);
                              }}
                              className={`flex items-center justify-between px-2 py-1.5 border rounded-xl text-[10px] font-bold transition text-left ${
                                activeNode === c.name
                                  ? 'bg-[#ff8400] border-[#ff8400] text-white shadow-sm'
                                  : 'bg-[#2d2a24]/5 border-[#dfd2bf] text-[#2d2a24] hover:bg-[#2d2a24]/10'
                              }`}
                            >
                              <span>{c.flag} {c.name}</span>
                            </button>
                          ))}
                        </div>

                        {activeNode ? (
                          <div className="bg-[#2d2a24]/5 border border-[#dfd2bf] p-3 rounded-2xl text-xs text-[#2d2a24] animate-fadeIn leading-relaxed">
                            <strong className="text-[#ff8400] block uppercase font-['Space_Mono']">[ ACTIVE NODE: {activeNode} ]</strong>
                            <p className="mt-1 text-[#5f5646]">
                              {countries.find(c => c.name === activeNode)?.desc}
                            </p>
                          </div>
                        ) : (
                          <div className="text-[10px] text-[#5f5646]/70 italic text-center pt-2 font-['Space_Mono']">
                            *Select a country node from the grid above to load telemetry details.*
                          </div>
                        )}
                      </div>
                    )}

                    {/* TAB 4: CLIENT CASE STUDIES */}
                    {activeTab === 'logs' && (
                      <div className="space-y-4 animate-fadeIn">
                        <div className="flex items-center gap-2.5 border-b border-[#dfd2bf] pb-3">
                          <Database className="h-5 w-5 text-[#ff8400]" />
                          <h3 className="text-sm font-black text-[#2d2a24] uppercase tracking-wider font-['Space_Mono']">
                            SYS_SUCCESS_REPORTS
                          </h3>
                        </div>

                        <div className="space-y-3.5 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
                          {[
                            {
                              title: 'Bean & Bole Coffee Roastery',
                              badge: 'COFFEE POUCH',
                              desc: 'Orchestrated Portland-based roaster transition to 100% compostable bags with high-barrier degassing valves. Boosted client retention +35%.'
                            },
                            {
                              title: 'Milano Botanica High-Barrier Tea',
                              badge: 'TEA POUCH',
                              desc: 'Deployed compostable window stand-up bags adhering to strict EU PPWR regulations. Accelerated sales +28%.'
                            },
                            {
                              title: 'Artisan Cocoa Emirates Confectionery',
                              badge: 'COCOA POUCH',
                              desc: 'Created premium heat-resistant recyclable mono-PP pouches for luxury Middle East confectioners. Drove gift segment sales +55%.'
                            }
                          ].map((log, idx) => (
                            <div key={idx} className="bg-[#2d2a24]/5 border border-[#dfd2bf] p-3 rounded-2xl text-xs space-y-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                              <div className="flex justify-between items-start">
                                  <span className="text-[#2d2a24] font-black">{log.title}</span>
                                  <span className="text-[8px] bg-[#2d2a24] text-white px-2 py-0.5 rounded font-black tracking-widest uppercase">{log.badge}</span>
                              </div>
                              <p className="text-[#5f5646] leading-relaxed">{log.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  <div className="mt-4 pt-4 border-t border-[#dfd2bf] flex justify-between items-center text-[10px] text-[#5f5646] font-['Space_Mono']">
                    <span>SYS_UTC: {currentTime || 'SYNCING...'}</span>
                    <span>RYAN_PORTFOLIO_DOCK // v2026</span>
                  </div>

                </div>
              </div>

            </div>
          </section>

        </div>

        {/* 6. BOTTOM STATUS BAR FOOTER */}
        <footer className="max-w-7xl mx-auto px-4 py-8 border-t border-[#dfd2bf] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5f5646]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff8400] animate-ping"></span>
            <span>SECURE ACCESS CONTEXT: SYNCHRONIZED</span>
          </div>

          <span>© 2026 ACHIEVE PACK CO-FOUNDER PORTAL // ALL RIGHTS RESERVED</span>

          <div className="flex gap-4">
            <a href="mailto:ryan@achievepack.com" onClick={playClick} className="hover:text-[#ff8400] transition font-bold">[ EMAIL ]</a>
            <a href="https://www.linkedin.com/in/ryanwwc/" target="_blank" rel="noopener noreferrer" onClick={playClick} className="hover:text-[#ff8400] transition font-bold">[ LINKEDIN ]</a>
          </div>
        </footer>

      </div>
    </>
  )
}

export default RyanHologramPage
