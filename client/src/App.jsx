import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import MouseGlow from './components/MouseGlow';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);

  useEffect(() => {
    // Initial luxury loading screen counter
    const interval = setInterval(() => {
      setLoadPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050816] text-white custom-cursor-active selection:bg-[#00E5FF] selection:text-black">
      
      {/* Luxury Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-50 bg-[#050816] flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              {/* Spinning Logo Badge */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00E5FF] to-[#7C3AED] p-[3px] shadow-[0_0_40px_rgba(0,229,255,0.5)] mb-6 animate-bounce">
                <div className="w-full h-full bg-[#050816] rounded-[13px] flex items-center justify-center font-extrabold text-white text-3xl">
                  MS
                </div>
              </div>

              <h2 className="text-xl font-bold tracking-widest text-white uppercase mb-2">
                Muhammed Sahal K
              </h2>
              <p className="text-xs text-[#00E5FF] font-semibold tracking-wider uppercase mb-8">
                MERN Stack Portfolio • 2026
              </p>

              {/* Progress Bar */}
              <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mb-4 border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] transition-all duration-150"
                  style={{ width: `${loadPercent}%` }}
                />
              </div>

              <span className="text-xs font-mono text-[#A0AEC0]">{loadPercent}%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Interactive Overlays */}
      <CustomCursor />
      <MouseGlow />
      <CanvasBackground />

      {/* Glass Sticky Navbar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
