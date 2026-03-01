import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Philosophy from "./components/Philosophy";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root>
      <main className="bg-bg min-h-screen text-text selection:bg-accent selection:text-white">
        <Navbar />
        <Hero />
        <Features />
        <Philosophy />
        <Partners />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
