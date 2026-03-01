import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Features() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <section id="technology" ref={containerRef} className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-bg text-text">
            <div className="max-w-7xl mx-auto flex flex-col">

                {/* Section Header */}
                <h2 className="text-accent text-sm md:text-base font-mono font-bold uppercase tracking-widest mb-12">
                    Commercial Offering
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {/* Card 1 */}
                    <div className="feature-card bg-text/5 p-10 md:p-12 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 border border-text/10 hover:border-accent/30 rounded-lg">
                        <h3 className="font-serif text-2xl md:text-3xl text-text mb-6 pr-4 tracking-tight">Strategic Representation</h3>

                        <div className="mb-8">
                            <span className="inline-block text-accent text-xs font-mono font-bold uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-sm">
                                Verified Competency
                            </span>
                        </div>

                        <p className="font-sans text-text/60 leading-relaxed text-sm md:text-base mt-auto">
                            Acting as the primary North American sales arm for European and domestic packaging manufacturers.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="feature-card bg-text/5 p-10 md:p-12 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 border border-text/10 hover:border-accent/30 rounded-lg">
                        <h3 className="font-serif text-2xl md:text-3xl text-text mb-6 pr-4 tracking-tight">Key Account Penetration</h3>

                        <div className="mb-8">
                            <span className="inline-block text-accent text-xs font-mono font-bold uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-sm">
                                Verified Competency
                            </span>
                        </div>

                        <p className="font-sans text-text/60 leading-relaxed text-sm md:text-base mt-auto">
                            Opening doors at Fortune 500 food &amp; beverage companies using 25+ years of relationship capital.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="feature-card bg-text/5 p-10 md:p-12 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 border border-text/10 hover:border-accent/30 rounded-lg">
                        <h3 className="font-serif text-2xl md:text-3xl text-text mb-6 pr-4 tracking-tight">Technical Sales Engineering</h3>

                        <div className="mb-8">
                            <span className="inline-block text-accent text-xs font-mono font-bold uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-sm">
                                Verified Competency
                            </span>
                        </div>

                        <p className="font-sans text-text/60 leading-relaxed text-sm md:text-base mt-auto">
                            Bridging the gap between complex machinery capabilities and flexible film requirements.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
