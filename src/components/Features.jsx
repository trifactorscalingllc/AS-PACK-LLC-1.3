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
        <section id="technology" ref={containerRef} className="py-24 px-6 md:px-16 lg:px-24 bg-bg text-text">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <h2 className="font-serif text-4xl md:text-5xl border-b border-primary pb-8 uppercase tracking-wide">
                    Core Capabilities
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Card 1: Tonnage-Agnostic Lifting (The Gyroscope) */}
                    <div className="feature-card relative h-96 border border-primary rounded-[2rem] p-8 flex flex-col overflow-hidden group bg-white hover:bg-[#FAFAFA] transition-colors duration-500">
                        <div className="flex items-center gap-3 mb-6">
                            <Anchor className="text-accent w-6 h-6" />
                            <h3 className="font-sans font-bold uppercase tracking-wider text-xl">Tonnage-Agnostic Lifting</h3>
                        </div>
                        <p className="font-mono text-sm text-text/70 z-10">Neutralize up to 50 metric tons of dead weight with minimal power draw.</p>

                        <div className="absolute bottom-8 left-8 right-8 h-40 cursor-pointer" onClick={handleCardClick}>
                            {cards.map((card, index) => {
                                const zIndex = cards.length - index;
                                const scale = 1 - index * 0.1;
                                const yOffset = index * 15;
                                const opacity = 1 - index * 0.3;

                                return (
                                    <div
                                        key={card}
                                        className="absolute inset-x-0 bottom-0 bg-primary/20 backdrop-blur-md rounded-xl h-24 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border border-primary/40 flex items-center justify-center font-mono text-accent/50 text-2xl"
                                        style={{
                                            zIndex,
                                            transform: `translateY(-${yOffset}px) scale(${scale})`,
                                            opacity,
                                        }}
                                    >
                                        Phase {card}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Card 2: Frictionless Mobility (Telemetry Feed) */}
                    <div className="feature-card relative h-96 border border-primary rounded-[2rem] p-8 flex flex-col bg-text text-bg overflow-hidden">
                        <div className="flex items-center gap-3 mb-6">
                            <Cpu className="text-accent w-6 h-6" />
                            <h3 className="font-sans font-bold uppercase tracking-wider text-xl">Frictionless Mobility</h3>
                        </div>
                        <p className="font-mono text-sm text-bg/70 mb-8">Omnidirectional, kinetic-dampened transport across any terrain or vertical plane.</p>

                        <div className="flex-1 bg-black/50 rounded-xl p-4 font-mono text-xs overflow-hidden relative border border-primary/20">
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent animate-ping" />
                            <div className="space-y-2 opacity-80 mt-4" id="telemetry-feed">
                                <p>SYS.INIT_Vector()...</p>
                                <p>OK - Dampeners engaged</p>
                                <p>Axis.X: 0.00 | Axis.Y: 0.00</p>
                                <p className="text-accent">Awaiting directional input...</p>
                                <p className="animate-pulse">_</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Fail-Safe Anchoring (Vector Map) */}
                    <div className="feature-card relative h-96 border border-primary rounded-[2rem] p-8 flex flex-col bg-white overflow-hidden group hover:border-accent transition-colors duration-500">
                        <div className="flex items-center gap-3 mb-6">
                            <Crosshair className="text-accent w-6 h-6" />
                            <h3 className="font-sans font-bold uppercase tracking-wider text-xl">Fail-Safe Anchoring</h3>
                        </div>
                        <p className="font-mono text-sm text-text/70 mb-8">Instantaneous gravitational re-engagement systems to ensure absolute drop-safety and secure transit.</p>

                        <div className="relative flex-1 rounded-xl overflow-hidden border border-primary/40 bg-[#FAFAFA] group-hover:bg-[#F0F0F0] transition-colors">
                            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:scale-150 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                <div className="w-2 h-2 bg-accent rounded-full" />
                            </div>
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/30" />
                            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-accent/30" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
