import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
    const containerRef = useRef(null);
    const heroTextRef = useRef(null);
    const shapeRef = useRef(null);

    useGSAP(() => {
        // Stagger fade-up drifting slowly upward
        gsap.from(".hero-element", {
            y: 60,
            opacity: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2,
        });

        // Slow-floating visual element
        gsap.to(shapeRef.current, {
            y: -30,
            rotation: 5,
            duration: 4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center px-6 md:px-16 lg:px-24">
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center pb-24" ref={heroTextRef}>

                <h1 className="hero-element font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-text mb-6">
                    Representing<br />
                    <span className="text-accent italic">Italian Technology</span> in the Coffee Industry
                </h1>

                <p className="hero-element font-mono text-xl md:text-2xl text-text/80 max-w-2xl mb-12">
                    Advanced processing, packaging, and high-barrier structures engineered for absolute flow.
                </p>

                <a
                    href="#technology"
                    className="hero-element group inline-flex items-center gap-4 bg-transparent weightless-hover"
                >
                    <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center bg-white group-hover:bg-accent group-hover:border-accent transition-colors duration-500">
                        <ArrowDownRight className="w-6 h-6 text-text group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                    </div>
                    <span className="font-sans font-medium text-lg tracking-wide group-hover:opacity-60 transition-opacity">Explore Capabilities</span>
                </a>
            </div>
        </section>
    );
}
