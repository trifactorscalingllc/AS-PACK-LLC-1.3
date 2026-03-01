import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-text text-bg py-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 border-t border-bg/20 pt-16">

                <div className="max-w-md">
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">AS PACK LLC</h2>
                    <p className="font-sans text-bg/60 text-lg mb-8 uppercase tracking-widest">
                        Representing Italian Technology in the Coffee Industry
                    </p>
                </div>

                <div className="flex flex-col gap-6 font-mono">
                    <h3 className="text-bg/50 uppercase tracking-widest text-sm mb-4">Direct Communication</h3>

                    <a href="mailto:Alden@ASPackLLC.com" className="group flex items-center gap-4 text-2xl md:text-3xl hover:text-accent transition-colors weightless-hover">
                        Alden@ASPackLLC.com
                        <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </a>

                    <a href="tel:917-544-9821" className="text-xl md:text-2xl hover:text-accent transition-colors">
                        917-544-9821
                    </a>

                    <p className="text-bg/40 mt-8 text-sm">Contact Alden Schiavi</p>
                </div>

            </div>
        </footer>
    );
}
