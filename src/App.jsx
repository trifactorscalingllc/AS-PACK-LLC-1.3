import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Features from "./components/Features";
import Philosophy from './components/Philosophy';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { ReactLenis } from 'lenis/react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div className="relative w-full min-h-screen bg-bg text-text antialiased selection:bg-accent selection:text-white">
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        <main>
          <Hero />
          <Features />
          <Philosophy />
          <Partners />
        </main>
        <Footer />
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </ReactLenis>
  );
}

export default App;
