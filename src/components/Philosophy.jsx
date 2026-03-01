import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Philosophy() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.from(".reveal-text", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
            },
            y: 50,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power2.out",
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-40 px-6 md:px-16 lg:px-24 bg-text text-bg flex items-center justify-center overflow-hidden relative">
            <div className="max-w-5xl mx-auto w-full text-center relative z-10">
                <p className="reveal-text font-mono text-xl md:text-2xl text-bg/60 mb-8 uppercase tracking-widest">
                    Old physics dictates: friction and limits.
                </p>
                <h2 className="reveal-text font-serif text-5xl md:text-7xl lg:text-9xl leading-[1.1] text-bg">
                    We engineered:<br />
                    <span className="text-accent italic font-light tracking-tighter">absolute flow.</span>
                </h2>
            </div>

            {/* Background ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-accent opacity-5 blur-[100px] pointer-events-none" />
        </section>
    );
}
