import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const partners = [
    {
        id: 1,
        name: "IMF",
        domain: "imf-srl.com",
        role: "Roasters & Processing",
        desc: "Manufacturers of integrated single internal afterburner roasters & complete facility processing technical solutions. Patented Vortex system precisely mixes hot & ambient air, allowing highly reactive control roasting profile with exact temperature modulation inside the performed drum.",
        image: "/images/imf.png"
    },
    {
        id: 2,
        name: "TME",
        domain: "tmeitaly.com",
        role: "Primary Packaging Machines",
        desc: "Coffee focused Italian packaging machine manufacturer with over 1500 global coffee installations since 1981. TME North America has been established including sales, field service & spare parts.",
        image: "/images/tme.png"
    },
    {
        id: 3,
        name: "Senzani",
        domain: "senzani.com",
        role: "Secondary Packaging Machines",
        desc: "Over 70 years of expertise designing advanced packaging & end-of-line automation for the coffee industry. Top-load & Vertical Cartoners for capsules to Tray, RSC & Wrap-Around Casers for bag and cans.",
        image: "/images/senzani.png"
    },
    {
        id: 4,
        name: "FlexP",
        domain: "flexp.it",
        role: "Packaging Material",
        desc: "Printers, Laminators & Converters of flexible packaging both high barrier FOIL & Non-FOIL structures. Extremely cost effective with aggressive lead times.",
        image: "/images/flexp.png"
    }
];

export default function Partners() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.partner-card');

        // ScrollTrigger to pin the container and cross-fade/scale cards
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${cards.length * 100}%`,
                pin: true,
                scrub: 1,
            }
        });

        cards.forEach((card, i) => {
            if (i > 0) {
                tl.fromTo(card, {
                    yPercent: 100,
                    scale: 1
                }, {
                    yPercent: 0,
                    ease: "none",
                });
            }

            // Scale down previous card as new one comes up
            if (i < cards.length - 1) {
                tl.to(card, {
                    scale: 0.95,
                    opacity: 0.5,
                    filter: "blur(4px)",
                    ease: "none"
                }, "+=0"); // Align with the start of the next card's animation
            }
        });

    }, { scope: containerRef });

    return (
        <section id="partners" ref={containerRef} className="relative w-full h-[100dvh] bg-bg overflow-hidden flex items-center justify-center">

            {partners.map((partner, index) => (
                <div
                    key={partner.id}
                    className="partner-card absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-bg border-t border-primary/20"
                    style={{ zIndex: index }}
                >
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center h-[calc(100vh-8rem)] pt-16">

                        <div className="md:col-span-4 font-mono text-xs md:text-sm tracking-widest uppercase border-l-2 border-accent pl-6 self-start md:self-center mt-8 md:mt-0">
                            <span className="text-text/50 block mb-2">Partner {index + 1}</span>
                            <h3 className="font-sans font-bold text-xl text-text mb-4">{partner.role}</h3>
                            <a
                                href={`https://${partner.domain}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-accent hover:text-text transition-colors"
                            >
                                {partner.domain} <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="md:col-span-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 pb-8 md:pb-0 h-full justify-center">
                            <div className="flex-1 order-2 md:order-1 flex flex-col justify-center">
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-text mb-4 lg:mb-6 leading-tight">{partner.name}</h2>
                                <p className="font-sans text-lg md:text-xl text-text/80 leading-relaxed font-light">
                                    {partner.desc}
                                </p>
                            </div>
                            <div className="w-full md:w-[280px] lg:w-[350px] xl:w-[450px] order-1 md:order-2 aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-primary relative flex-shrink-0 bg-white">
                                <img
                                    src={partner.image}
                                    alt={`${partner.name} machinery`}
                                    className="w-full h-full object-cover mix-blend-multiply opacity-90 contrast-125 saturate-50"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            ))}

        </section>
    );
}
