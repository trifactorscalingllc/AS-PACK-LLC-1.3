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
        const cards = gsap.utils.toArray('.partner-row');

        cards.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });
    }, { scope: containerRef });

    return (
        <section id="partners" ref={containerRef} className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-bg">
            <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">

                {partners.map((partner, index) => {
                    const isEven = index % 2 === 1;

                    return (
                        <div
                            key={partner.id}
                            className={`partner-row flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                        >

                            {/* Text Content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="font-mono text-xs md:text-sm tracking-widest uppercase border-l-2 border-accent pl-6 mb-8">
                                    <span className="text-text/50 block mb-2">Partner {index + 1}</span>
                                    <h3 className="font-sans font-bold text-xl text-text">{partner.role}</h3>
                                </div>

                                <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-text mb-6 leading-tight">{partner.name}</h2>

                                <p className="font-sans text-lg md:text-xl text-text/80 leading-relaxed font-light mb-8 max-w-2xl">
                                    {partner.desc}
                                </p>

                                <div>
                                    <a
                                        href={`https://${partner.domain}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-full text-text hover:bg-text hover:text-bg transition-colors font-mono text-sm uppercase tracking-widest"
                                    >
                                        Visit {partner.name} <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-full lg:w-[45%] aspect-[4/3] rounded-[2rem] overflow-hidden border border-primary relative shrink-0 bg-white shadow-xl shadow-black/5 group">
                                <img
                                    src={partner.image}
                                    alt={`${partner.name} machinery`}
                                    className="w-full h-full object-cover mix-blend-multiply opacity-90 contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                            </div>

                        </div>
                    );
                })}

            </div>
        </section>
    );
}
