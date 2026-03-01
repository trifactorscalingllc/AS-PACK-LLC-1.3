import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Crosshair, Cpu, Anchor } from "lucide-react";

export default function Features() {
    const containerRef = useRef(null);

    // Card 1 Logic: The Gyroscope (Tonnage-Agnostic Lifting)
    const [cards, setCards] = useState([1, 2, 3]);
    const handleCardClick = () => {
        setCards((prev) => {
            const newArray = [...prev];
            newArray.unshift(newArray.pop());
            return newArray;
        });
    };

    useGSAP(() => {
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <section id="technology" ref={containerRef} className="py-32 px-6 md:px-16 lg:px-24 bg-bg text-text">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-primary/40 pb-12">
                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide leading-none">
                        Core<br />
                        <span className="text-accent italic">Capabilities</span>
                    </h2>
                    <p className="font-mono text-sm uppercase tracking-widest text-text/50 max-w-xs text-right hidden md:block">
                        Engineered for absolute flow and precision control.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">

                    {/* Card 1: Tonnage-Agnostic Lifting (The Gyroscope) */}
                    <div className="feature-card relative h-[450px] md:h-[500px] border border-primary/60 rounded-[2.5rem] p-10 flex flex-col overflow-hidden group bg-white hover:border-accent hover:shadow-[0_0_40px_rgba(139,69,19,0.05)] transition-all duration-700 cursor-pointer" onClick={handleCardClick}>

                        <div className="flex-1 flex flex-col justify-end z-10 pb-8 relative mix-blend-difference pointer-events-none">
                            <h3 className="font-serif text-3xl md:text-4xl text-text mb-4 group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Tonnage-Agnostic Lifting</h3>
                            <p className="font-sans font-light text-text/80 leading-relaxed max-w-sm group-hover:-translate-y-2 transition-transform duration-500 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)]">Neutralize up to 50 metric tons of dead weight with minimal power draw.</p>
                        </div>

                        {/* Interactive Background Element */}
                        <div className="absolute top-10 right-10">
                            <Anchor className="text-primary w-8 h-8 group-hover:text-accent transition-colors duration-500" strokeWidth={1} />
                        </div>

                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center pt-10">
                            {cards.map((card, index) => {
                                const zIndex = cards.length - index;
                                const scale = 1 - index * 0.15;
                                const yOffset = index * 30;
                                const opacity = index === 0 ? 1 : 1 - index * 0.4;

                                return (
                                    <div
                                        key={card}
                                        className="absolute bg-[#FAFAFA] rounded-2xl h-48 w-4/5 md:w-2/3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border border-primary/20 flex flex-col items-center justify-center shadow-lg"
                                        style={{
                                            zIndex,
                                            transform: `translateY(-${yOffset}px) scale(${scale})`,
                                            opacity,
                                        }}
                                    >
                                        <span className="font-mono text-[10px] tracking-widest text-text/40 block mb-2">P-LIFT VECTOR R{card}</span>
                                        <span className="font-mono text-2xl text-text/90">Phase {card}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Card 2: Frictionless Mobility (Telemetry Feed) */}
                    <div className="feature-card relative h-[450px] md:h-[500px] border border-primary/60 rounded-[2.5rem] p-10 flex flex-col bg-text text-bg overflow-hidden group hover:shadow-[0_0_40px_rgba(139,69,19,0.15)] transition-all duration-700">
                        <div className="flex-1 flex flex-col z-10 p-2">
                            <div className="flex items-center justify-between mb-auto">
                                <Cpu className="text-bg/30 w-8 h-8 group-hover:text-accent transition-colors duration-500" strokeWidth={1} />
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Active Feed</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="font-serif text-3xl md:text-4xl text-bg mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Frictionless Mobility</h3>
                                <p className="font-sans font-light text-bg/70 leading-relaxed group-hover:translate-x-2 transition-transform duration-500 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)]">Omnidirectional, kinetic-dampened transport across any terrain or vertical plane.</p>
                            </div>
                        </div>

                        {/* Telemetry Display */}
                        <div className="absolute top-24 left-10 right-10 bottom-48 opacity-40 font-mono text-xs md:text-sm text-accent overflow-hidden">
                            <div className="space-y-3" id="telemetry-feed">
                                <p className="text-bg/50">&gt; SYS.INIT_Vector()...</p>
                                <p className="text-bg/50">&gt; VERIFYING DAMPENERS...</p>
                                <p>OK - DAMPENERS ENGAGED</p>
                                <p>AXIS.X: 0.00000</p>
                                <p>AXIS.Y: 0.00000</p>
                                <p>AXIS.Z: 0.00000</p>
                                <p className="animate-pulse">_</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Fail-Safe Anchoring (Vector Map) */}
                    <div className="feature-card relative h-[450px] md:h-[500px] border border-primary/60 rounded-[2.5rem] p-10 flex flex-col bg-white overflow-hidden group hover:border-accent hover:shadow-[0_0_40px_rgba(139,69,19,0.05)] transition-all duration-700">

                        <div className="flex-1 flex flex-col justify-end z-10 pb-8 pointer-events-none">
                            <h3 className="font-serif text-3xl md:text-4xl text-text mb-4 group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Fail-Safe Anchoring</h3>
                            <p className="font-sans font-light text-text/80 leading-relaxed max-w-sm group-hover:-translate-y-2 transition-transform duration-500 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)]">Instantaneous gravitational re-engagement systems to ensure absolute drop-safety and secure transit.</p>
                        </div>

                        <div className="absolute top-10 right-10 z-10">
                            <Crosshair className="text-primary w-8 h-8 group-hover:text-accent transition-colors duration-500" strokeWidth={1} />
                        </div>

                        {/* Interactive Grid Map */}
                        <div className="absolute inset-x-8 top-8 bottom-48 rounded-2xl overflow-hidden border border-primary/20 bg-[#FAFAFA] group-hover:bg-[#F5F5F5] transition-colors duration-700">
                            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid-large" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    </pattern>
                                    <pattern id="grid-small" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid-small)" />
                                <rect width="100%" height="100%" fill="url(#grid-large)" />
                            </svg>

                            {/* Gliding Node */}
                            <div className="absolute top-1/2 left-1/2 w-[1px] h-[1px] -translate-x-1/2 -translate-y-1/2">
                                <div className="absolute -inset-16 border-[0.5px] border-accent/20 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-[1.5s] ease-out" />
                                <div className="absolute -inset-8 border border-accent/40 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000 delay-100 ease-out" />

                                <div className="w-8 h-8 -ml-4 -mt-4 rounded-full border border-accent flex items-center justify-center bg-white shadow-[0_0_15px_rgba(139,69,19,0.3)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                    <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full absolute" />
                                </div>
                                <div className="absolute top-0 -left-64 w-[128px] h-[1px] bg-accent/40 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-1000 ease-out" />
                                <div className="absolute top-0 right-0 w-[128px] h-[1px] bg-accent/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000 ease-out" />
                                <div className="absolute -top-64 left-0 w-[1px] h-[128px] bg-accent/40 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-1000 ease-out" />
                                <div className="absolute top-0 left-0 w-[1px] h-[128px] bg-accent/40 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-1000 ease-out" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
