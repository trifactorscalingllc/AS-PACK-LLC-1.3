import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Crosshair, Cpu, Anchor } from "lucide-react";

export default function Features() {
    const containerRef = useRef(null);

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

                    {/* Card 1 */}
                    <div className="group border border-primary/40 hover:border-accent/60 rounded-3xl p-10 md:p-12 flex flex-col bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:-translate-y-2">
                        <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-accent/5 transition-colors duration-500">
                            <Anchor className="text-text/60 group-hover:text-accent transition-colors duration-500 w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl text-text mb-4">Tonnage-Agnostic Lifting</h3>
                        <p className="font-sans font-light text-text/70 leading-relaxed text-sm md:text-base">
                            Neutralize up to 50 metric tons of dead weight with minimal power draw. Experience absolute control regardless of scale.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-primary/40 hover:border-accent/60 rounded-3xl p-10 md:p-12 flex flex-col bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:-translate-y-2">
                        <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-accent/5 transition-colors duration-500">
                            <Cpu className="text-text/60 group-hover:text-accent transition-colors duration-500 w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl text-text mb-4">Frictionless Mobility</h3>
                        <p className="font-sans font-light text-text/70 leading-relaxed text-sm md:text-base">
                            Omnidirectional, kinetic-dampened transport across any terrain or vertical plane. Designed for seamless operational flow.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-primary/40 hover:border-accent/60 rounded-3xl p-10 md:p-12 flex flex-col bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:-translate-y-2">
                        <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-accent/5 transition-colors duration-500">
                            <Crosshair className="text-text/60 group-hover:text-accent transition-colors duration-500 w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl text-text mb-4">Fail-Safe Anchoring</h3>
                        <p className="font-sans font-light text-text/70 leading-relaxed text-sm md:text-base">
                            Instantaneous gravitational re-engagement systems to ensure absolute drop-safety and secure transit under any condition.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
