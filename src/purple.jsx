import React, { useState, useEffect, useRef } from 'react';
import { Mail, ArrowRight, TrendingUp, AlertCircle, CheckCircle, Bell, DollarSign, X, Menu, ChevronRight, MousePointer2 } from 'lucide-react';

const HookXApp = () => {
    const [viewState, setViewState] = useState('hook'); // 'hook', 'reveal', 'website'

    // Transition logic
    const handleHookClick = () => setViewState('reveal');
    const handleEnterClick = () => setViewState('website');

    if (viewState === 'website') {
        return <MainWebsite />;
    }

    return (
        <div className="fixed inset-0 bg-black text-white flex items-center justify-center font-sans overflow-hidden">
            {/* Background Ambience - Adjusted to new primary #a855f7 */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#a855f7]/20 via-black to-black"></div>

            {viewState === 'hook' && (
                <div
                    onClick={handleHookClick}
                    className="relative cursor-pointer group animate-float"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-8 bg-[#a855f7]/20 rounded-full blur-2xl group-hover:bg-[#a855f7]/40 transition-all duration-500"></div>

                    <div className="relative p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/10">
                        <div className="relative">
                            <Mail className="w-16 h-16 text-white animate-shake" strokeWidth={1.5} />

                            {/* Overlapping Notification Badge - Bigger & Positioned */}
                            <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-600 rounded-full border-[3px] border-zinc-950 flex items-center justify-center animate-pulse z-10 shadow-lg">
                                <span className="sr-only">New Notification</span>
                            </div>
                        </div>
                    </div>

                    <p className="mt-10 text-zinc-500 text-xs font-mono tracking-[0.2em] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase">
                        Click to Open
                    </p>
                </div>
            )}

            {viewState === 'reveal' && (
                <div
                    onClick={handleEnterClick}
                    className="w-full max-w-md mx-4 cursor-pointer animate-scaleIn"
                >
                    <div className="bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden hover:border-[#a855f7]/50 transition-colors duration-300 ring-1 ring-white/5">
                        {/* Fake iOS Mail Header */}
                        <div className="bg-zinc-950 px-5 py-4 flex justify-between items-center border-b border-zinc-800">
                            <span className="text-[10px] font-bold text-[#a855f7] tracking-wider">NEW MESSAGE</span>
                            <span className="text-[10px] text-zinc-600 font-mono">NOW</span>
                        </div>

                        {/* Email Body */}
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#a855f7] flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-[#a855f7]/20">H</div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">HookX Agency</h3>
                                    <p className="text-xs text-zinc-500 font-medium">to you</p>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold text-white mb-3 tracking-tight">The science behind why you clicked.</h2>
                            <p className="text-zinc-400 text-sm leading-7">
                                It wasn't an accident. You saw a signal, felt the curiosity, and took action.
                                <br /><br />
                                This is the exact behavioral science we use to turn your passive email list into active revenue.
                                <span className="block mt-6 text-[#a855f7] font-bold flex items-center gap-2 group text-sm">
                                    Ready to see how? <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-scaleIn { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
        </div>
    );
};

const MainWebsite = () => {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-[#a855f7]/30">
            <Navbar />
            <HeroSection />
            <ProblemCalculator />
            <SolutionPhilosophy />
            <ShowcaseMarquee />
            <InboxComparison />
            <VisionNotifications />
            <Footer />
        </div>
    );
};

/* --- Sections --- */

const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-1">
                <span className="text-white">Hook</span><span className="text-[#a855f7]">X</span>
            </div>
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors border border-transparent hover:border-white/50">
                Start Your Audit
            </button>
        </div>
    </nav>
);

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10 animate-fadeInUp">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 text-[#a855f7] text-xs font-bold uppercase tracking-wider mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse"></span>
                    Retention Architecture for eCommerce
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                    Stop Renting Your Traffic. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-pink-500">
                        Own Your Audience.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                    You clicked the notification because we designed the moment. Imagine applying that same psychological precision to your retention strategy.
                    <span className="text-white font-medium"> We don't just send emails; we engineer loyalty.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <button className="px-8 py-4 bg-[#a855f7] rounded-full font-bold text-lg hover:bg-[#9333ea] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        Explore The BuyBack System
                    </button>
                    <button className="px-8 py-4 border border-zinc-800 bg-zinc-900/50 rounded-full font-bold text-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all text-zinc-300 hover:text-white">
                        See Our Results
                    </button>
                </div>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a855f7]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </section>
    );
};

const ProblemCalculator = () => {
    const [revenue, setRevenue] = useState(50000);
    const [lostRevenue, setLostRevenue] = useState(0);

    useEffect(() => {
        // Estimating 25% revenue loss due to poor email marketing
        setLostRevenue(Math.floor(revenue * 12 * 0.25));
    }, [revenue]);

    return (
        <section className="py-32 px-6 bg-zinc-950 border-y border-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Silent Leak in Your Revenue Engine</h2>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            You are an expert at acquiring customers, but what happens after the sale? Most brands let valuable data decay.
                            <br /><br />
                            Without a dedicated retention architecture, you are paying full price for every sale, every time. It’s not just lost revenue—it’s lost leverage.
                        </p>

                        <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl flex items-start gap-4">
                            <AlertCircle className="text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-400 mb-1">The Reality Check</h4>
                                <p className="text-sm text-red-200/60">
                                    Acquisition costs are rising. Stability comes from the customers you already have.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <DollarSign className="w-24 h-24 text-zinc-800" />
                        </div>

                        <h3 className="text-xl font-bold mb-8 flex items-center gap-2 relative z-10">
                            <span className="w-8 h-8 rounded-lg bg-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
                                <DollarSign className="w-5 h-5" />
                            </span>
                            Revenue Leak Calculator
                        </h3>

                        <div className="mb-12 relative z-10">
                            <label className="text-xs text-zinc-500 mb-4 block uppercase tracking-widest font-bold">Current Monthly Revenue</label>
                            <div className="text-5xl font-mono font-bold text-white mb-8 tracking-tighter">
                                ${revenue.toLocaleString()}
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="500000"
                                step="5000"
                                value={revenue}
                                onChange={(e) => setRevenue(parseInt(e.target.value))}
                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#a855f7] hover:accent-[#9333ea]"
                            />
                            <div className="flex justify-between text-xs text-zinc-600 mt-4 font-mono">
                                <span>$10k</span>
                                <span>$500k+</span>
                            </div>
                        </div>

                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 text-center relative z-10">
                            <div className="text-sm text-zinc-500 mb-3 font-medium">Projected Annual Revenue Currently At Risk</div>
                            <div className="text-4xl md:text-6xl font-mono font-bold text-red-500 animate-pulse tracking-tighter">
                                ${lostRevenue.toLocaleString()}
                            </div>
                            <div className="text-[10px] text-zinc-600 mt-4 uppercase tracking-widest">*Based on standard 20-30% retention optimization benchmarks</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SolutionPhilosophy = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="py-32 px-6 bg-black" ref={sectionRef}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">The BuyBack System™</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        We don't chase the quick hit. We architect the second, third, and tenth purchase.
                        We build the systems that turn casual browsers into your brand's most vocal advocates.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LTV Graph Visualization */}
                    <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 h-[500px] flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="absolute top-6 left-8 flex gap-8 z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
                                <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Other Agencies</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#a855f7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                                <span className="text-xs text-[#a855f7] font-bold uppercase tracking-wider">HookX</span>
                            </div>
                        </div>

                        {/* SVG Graph */}
                        <div className="flex-1 flex items-end mt-12 relative">
                            {/* Grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="w-full h-px bg-white/10 dashed"></div>
                                ))}
                            </div>

                            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                                {/* Line A: Spike and Flatline */}
                                <path
                                    d="M0,200 L50,50 L100,180 L400,180"
                                    fill="none"
                                    stroke="#3f3f46"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                    className="opacity-50"
                                />

                                {/* Line B: Compounding Steps */}
                                <path
                                    d="M0,200 L50,50 L80,150 L120,40 L150,120 L200,30 L250,100 L350,10 L400,0"
                                    fill="none"
                                    stroke="#a855f7"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeDasharray="1000"
                                    strokeDashoffset={isVisible ? "0" : "1000"}
                                    className="drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-[2500ms] ease-out"
                                />

                                {/* Gradient Fill under the line (optional visual enhancement) */}
                                <defs>
                                    <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,200 L50,50 L80,150 L120,40 L150,120 L200,30 L250,100 L350,10 L400,0 L400,200 Z"
                                    fill="url(#purpleGradient)"
                                    className={`transition-opacity duration-[2500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </svg>

                            {/* Label */}
                            <div
                                className={`absolute right-10 top-20 bg-[#a855f7] text-white text-[10px] font-bold px-4 py-1.5 rounded-full transition-all duration-500 delay-[2000ms] shadow-lg shadow-[#a855f7]/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            >
                                THE COMPOUNDING EFFECT
                            </div>
                        </div>

                        <div className="mt-6 flex justify-between text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
                            <span>Acquisition</span>
                            <span>30 Days</span>
                            <span>90 Days</span>
                            <span>1 Year</span>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <FeaturePoint
                            title="Behavioral Architecture"
                            desc="Replacing generic blasts with intelligent flows triggered by actual user intent. We map the customer journey and intervene exactly when it matters."
                        />
                        <FeaturePoint
                            title="Inbox-Native Design"
                            desc="Emails designed to look like they belong in the Priority tab, not the Promotions folder. High engagement, low friction."
                        />
                        <FeaturePoint
                            title="Deliverability Defense"
                            desc="Ensuring your message actually reaches the audience you paid to acquire. We protect your domain reputation like a vault."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturePoint = ({ title, desc }) => (
    <div className="flex gap-6 group">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#a855f7]/30 group-hover:bg-[#a855f7]/10 transition-colors">
            <CheckCircle className="w-6 h-6 text-zinc-500 group-hover:text-[#a855f7] transition-colors" />
        </div>
        <div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#a855f7] transition-colors">{title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{desc}</p>
        </div>
    </div>
);

const ShowcaseMarquee = () => {
    // REPLACE THESE URLs with your actual portfolio image links
    const designs = [
        "https://placehold.co/600x1200/18181b/a855f7?text=Email+Design+1",
        "https://placehold.co/600x1200/18181b/d8b4fe?text=Email+Design+2",
        "https://placehold.co/600x1200/18181b/9333ea?text=Email+Design+3",
        "https://placehold.co/600x1200/18181b/f43f5e?text=Email+Design+4",
        "https://placehold.co/600x1200/18181b/f59e0b?text=Email+Design+5",
        "https://placehold.co/600x1200/18181b/ec4899?text=Email+Design+6",
    ];

    return (
        <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Gallery</h2>
                <p className="text-zinc-400 text-lg">Strategic design that respects the user's intelligence.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designs.map((img, idx) => (
                        <DesignCard key={idx} img={img} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const DesignCard = ({ img }) => {
    return (
        <div className="relative aspect-[1/2] rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl bg-zinc-900 hover:border-[#a855f7]/50 transition-all duration-500">
            {/* Image Container */}
            <img
                src={img}
                alt="Email Design"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <button className="px-8 py-3 bg-white text-black font-bold rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#a855f7] hover:text-white hover:scale-105">
                    View Case Study
                </button>
            </div>
        </div>
    );
}

const InboxComparison = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleDrag = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchDrag = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    return (
        <section className="py-32 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">Signal vs. Noise</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        The difference between an unsubscribe and a purchase is often just respect for the user's inbox.
                        <span className="text-white font-bold"> We help you stand out by adding value, not clutter.</span>
                    </p>
                    <div className="mt-10 text-[10px] font-mono text-zinc-600 flex items-center justify-center gap-3 uppercase tracking-widest">
                        <ChevronRight className="w-3 h-3 rotate-180" />
                        Drag Slider to Compare
                        <ChevronRight className="w-3 h-3" />
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-800 cursor-ew-resize select-none shadow-2xl ring-1 ring-white/5"
                    onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
                    onClick={handleDrag}
                    onTouchMove={handleTouchDrag}
                >
                    {/* Layer 1: Chaos (Others) - Background */}
                    <div className="absolute inset-0 bg-zinc-900 flex flex-col p-6 md:p-10">
                        <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
                            <div className="text-red-500 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                The Panic Marketing Approach
                            </div>
                            <div className="text-zinc-600 text-xs font-mono">99+ Unread</div>
                        </div>

                        <div className="flex-1 space-y-3 overflow-hidden opacity-60 blur-[0.5px] grayscale-[0.5]">
                            <SpamEmail sender="MEGA SALE" subject="LAST CHANCE!!!" time="10:00 AM" />
                            <SpamEmail sender="Brand Name" subject="We miss you! (Please come back)" time="9:45 AM" />
                            <SpamEmail sender="No-Reply" subject="DO NOT MISS THIS" time="9:30 AM" />
                            <SpamEmail sender="Promo Alerts" subject="🔥 FLASH SALE EXTENDED" time="9:15 AM" />
                            <SpamEmail sender="Newsletter" subject="Your cart is lonely..." time="9:00 AM" />
                            <SpamEmail sender="Support" subject="Ticket #9921: Pending..." time="8:45 AM" />
                        </div>
                    </div>

                    {/* Layer 2: Clean (HookX) - Foreground clipped */}
                    <div
                        className="absolute inset-0 bg-zinc-950 flex flex-col p-6 md:p-10"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                        <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
                            <div className="text-[#a855f7] font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                The Value-First Approach
                            </div>
                            <div className="text-[#a855f7] text-xs font-bold font-mono">Priority</div>
                        </div>

                        <div className="flex-1 space-y-4 overflow-hidden">
                            <PremiumEmail
                                initials="H"
                                sender="HookX"
                                subject="The story behind our new collection"
                                preview="I wanted to share exactly how we sourced these materials..."
                                time="10:42 AM"
                            />
                            <PremiumEmail
                                initials="S"
                                sender="Sarah (Founder)"
                                subject="Your early access invite"
                                preview="Since you've been with us for a year, I wanted you to see this first."
                                time="Yesterday"
                            />
                            <PremiumEmail
                                initials="V"
                                sender="VIP Support"
                                subject="A personal note from the founder"
                                preview="Just packed this myself. Included a small gift inside..."
                                time="Tuesday"
                            />
                        </div>
                        {/* Subtle purple gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#a855f7]/10 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white/20 backdrop-blur-md cursor-ew-resize z-20 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-2xl transform transition-transform hover:scale-110 active:scale-95 flex items-center justify-center">
                            <div className="flex gap-0.5">
                                <ChevronRight className="w-3 h-3 rotate-180" />
                                <ChevronRight className="w-3 h-3" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const SpamEmail = ({ sender, subject, time }) => (
    <div className="bg-zinc-800/50 p-4 rounded-lg flex gap-4 items-center border border-zinc-800">
        <div className="w-8 h-8 rounded-full bg-zinc-800 shrink-0 flex items-center justify-center text-[10px] text-zinc-500 border border-zinc-700">?</div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between">
                <div className="text-xs font-bold text-zinc-400 truncate w-32">{sender}</div>
                <div className="text-[10px] text-zinc-600">{time}</div>
            </div>
            <div className="text-xs text-zinc-500 font-medium truncate">{subject}</div>
        </div>
    </div>
);

const PremiumEmail = ({ initials, sender, subject, preview, time }) => (
    <div className="bg-zinc-900/80 p-5 rounded-xl flex gap-5 items-center border border-zinc-800 hover:border-[#a855f7]/30 transition-colors shadow-lg group cursor-pointer backdrop-blur-sm">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a855f7] to-pink-600 flex items-center justify-center font-bold text-white text-xs shadow-inner shrink-0 group-hover:scale-110 transition-transform">
            {initials}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline mb-1">
                <div className="text-sm font-bold text-white group-hover:text-[#a855f7] transition-colors">{sender}</div>
                <div className="text-xs text-[#a855f7] font-bold">{time}</div>
            </div>
            <div className="text-sm text-zinc-200 font-medium truncate">{subject}</div>
            <div className="text-xs text-zinc-500 truncate mt-1">{preview}</div>
        </div>
        <div className="w-2 h-2 rounded-full bg-[#a855f7] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
);

const VisionNotifications = () => {
    return (
        <section className="py-32 px-6 flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden relative">

            <div className="text-center mb-16 z-10">
                <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">Growth That Feels Different.</h2>
                <p className="text-xl text-zinc-400">Less anxiety about tomorrow's ad costs. More stability from your existing base.</p>
            </div>

            {/* Phone Screen Simulation */}
            <div className="relative w-[320px] md:w-[380px] h-[700px] bg-black border-[12px] border-zinc-900 rounded-[3.5rem] shadow-2xl overflow-hidden z-10 ring-1 ring-zinc-800">
                {/* Notch */}
                <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-center pt-2">
                    <div className="w-32 h-6 bg-black rounded-b-2xl"></div>
                </div>

                {/* Wallpaper */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/20 via-black to-black z-0"></div>

                {/* Time */}
                <div className="relative z-10 pt-16 flex flex-col items-center text-white/90">
                    <div className="text-7xl font-light tracking-tighter">8:41</div>
                    <div className="text-lg font-medium text-zinc-400 mt-2">Tuesday, January 17</div>
                </div>

                {/* Notifications Feed */}
                <div className="relative z-10 mt-10 px-4 space-y-3">
                    <Notification
                        icon={<div className="bg-[#635BFF] w-full h-full flex items-center justify-center text-xs font-bold text-white">S</div>}
                        app="Stripe"
                        title="Payment Received"
                        msg="$150.00 USD from Customer #8821"
                        delay={500}
                        bgIcon="bg-[#635BFF]"
                    />
                    <Notification
                        icon={<Mail className="w-4 h-4 text-black" />}
                        app="Mail"
                        title="Reply: Sarah J."
                        msg="I actually look forward to your newsletters. Keep them coming."
                        delay={2000}
                        bgIcon="bg-white"
                    />
                    <Notification
                        icon={<div className="bg-[#95BF47] w-full h-full flex items-center justify-center text-xs font-bold text-white">S</div>}
                        app="Shopify"
                        title="Store Order"
                        msg="Order #1024 placed by Mike T. ($240.00)"
                        delay={3500}
                        bgIcon="bg-[#95BF47]"
                    />
                    <Notification
                        icon={<Mail className="w-4 h-4 text-black" />}
                        app="Mail"
                        title="Reply: David B."
                        msg="Just shared this with my friend. Love the brand."
                        delay={5000}
                        bgIcon="bg-white"
                    />
                </div>

                {/* Home Bar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
            </div>

            {/* Background glow effects */}
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#a855f7]/10 to-transparent pointer-events-none"></div>

            <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-notification {
          animation: slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </section>
    );
};

const Notification = ({ icon, app, title, msg, delay, bgIcon = "bg-[#a855f7]" }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (!show) return null;

    return (
        <div className="animate-notification bg-zinc-900/60 backdrop-blur-xl border border-white/5 p-4 rounded-3xl flex gap-4 shadow-xl">
            <div className={`w-10 h-10 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center ${bgIcon}`}>
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                    <span className="font-bold text-xs text-white/90 uppercase tracking-wide">{app}</span>
                    <span className="text-[10px] text-zinc-500">Now</span>
                </div>
                <div className="text-sm font-semibold text-white leading-tight">{title}</div>
                <div className="text-xs text-zinc-400 truncate leading-tight mt-1">{msg}</div>
            </div>
        </div>
    );
};

const Footer = () => (
    <footer className="bg-black border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-3xl font-bold tracking-tighter flex items-center gap-1">
                <span className="text-white">Hook</span><span className="text-[#a855f7]">X</span>
            </div>
            <div className="text-zinc-500 text-sm font-mono">
                © 2025 HookX Agency. All rights reserved.
            </div>
            <div className="flex gap-8">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">Twitter</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">LinkedIn</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">Instagram</a>
            </div>
        </div>
    </footer>
);

export default HookXApp;