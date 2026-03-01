import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-bg text-text py-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 border-t border-primary/40 pt-16">

                <div className="max-w-md">
                    <h2 className="font-serif text-3xl md:text-4xl mb-6">AS PACK LLC</h2>
                    <p className="font-sans text-text/60 leading-relaxed max-w-sm">
                        Representing leading Italian packaging and processing technology in the global coffee industry.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-mono text-text/50 uppercase tracking-widest text-xs mb-2">Contact</h3>

                    <a href="mailto:Alden@ASPackLLC.com" className="group flex items-center gap-4 text-lg md:text-xl hover:text-accent transition-colors weightless-hover font-sans">
                        Alden@ASPackLLC.com
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </a>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-24 flex justify-between items-center border-t border-primary/20 pt-8 font-mono text-xs text-text/40 uppercase tracking-widest">
                <span>&copy; {new Date().getFullYear()} AS PACK LLC</span>
                <span>All Rights Reserved</span>
            </div>
        </footer>
    );
}
