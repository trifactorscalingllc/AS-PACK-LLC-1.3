import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Hexagon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Navbar({ onContactClick }) {
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
            {/* Logo Left */}
            <div className="flex-1 flex items-center">
                <span className="font-sans font-bold tracking-widest text-lg md:text-xl weightless-hover hover:cursor-pointer transition-colors hover:text-accent">AS PACK LLC</span>
            </div>

            {/* Center Links */}
            <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-text/70">
                <a href="#partners" className="hover:text-accent transition-colors weightless-hover inline-block">Partners</a>
                <a href="#technology" className="hover:text-accent transition-colors weightless-hover inline-block">Technology</a>
            </div>

            {/* Call to Action Right */}
            <div className="flex-1 flex justify-end">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        if (onContactClick) onContactClick();
                    }}
                    className="relative group overflow-hidden rounded-full bg-text text-bg px-6 py-2.5 font-mono text-xs uppercase tracking-widest transition-transform hover:scale-105"
                >
                    <span className="relative z-10 transition-colors group-hover:text-text">Contact Alden</span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </button>
            </div>
        </nav>
    );
}
