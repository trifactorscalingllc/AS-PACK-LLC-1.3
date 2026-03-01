import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Hexagon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Navbar() {
    const navRef = useRef(null);

    useGSAP(() => {
        ScrollTrigger.create({
            start: "top -50",
            end: 99999,
            toggleClass: { className: "nav-scrolled", targets: navRef.current },
        });
    }, { scope: navRef });

    return (
        <nav
            ref={navRef}
            className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] max-w-4xl z-50 flex items-center justify-between px-6 py-4 rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.nav-scrolled]:bg-white/80 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-transparent [&.nav-scrolled]:border-primary"
        >
            <div className="flex items-center gap-3 weightless-hover hover:cursor-pointer">
                <Hexagon className="text-accent w-6 h-6" strokeWidth={1.5} />
                <span className="font-sans font-bold tracking-tight text-lg">AS PACK LLC</span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-text/70">
                <a href="#partners" className="hover:text-accent transition-colors weightless-hover inline-block">Partners</a>
                <a href="#technology" className="hover:text-accent transition-colors weightless-hover inline-block">Technology</a>
            </div>

            <a
                href="mailto:Alden@ASPackLLC.com"
                className="group relative overflow-hidden rounded-full font-mono text-sm tracking-widest uppercase bg-text text-bg px-6 py-2 weightless-hover"
            >
                <span className="relative z-10 mix-blend-difference text-white group-hover:text-accent transition-colors duration-500">Contact Alden</span>
                <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            </a>
        </nav>
    );
}
