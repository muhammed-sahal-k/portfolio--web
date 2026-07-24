import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Eye, Sparkles, Code, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { profileImage } from '../assets/profile';

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const fullText = personalInfo.taglines[currentTaglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTaglineIndex]);

  return (
    <section id="home" className="min-h-screen relative pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Side: Content & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold text-[#00E5FF] mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <Sparkles className="w-4 h-4 text-[#00E5FF] animate-pulse" />
              <span>Hello, I'm</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-none mb-4">
              {personalInfo.name}
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="h-12 sm:h-16 flex items-center mb-6">
              <span className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-cyan-200 to-[#7C3AED]">
                {displayedText}
              </span>
              <span className="w-1 h-8 sm:h-10 ml-1 bg-[#00E5FF] animate-pulse" />
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#A0AEC0] max-w-2xl font-normal leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">







              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-black bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1 shadow-lg"
              >
                <Send className="w-4 h-4 text-[#00E5FF]" />
                <span>Hire Me</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-[#00E5FF] bg-transparent border border-[#00E5FF]/30 hover:border-[#00E5FF] transition-all duration-300 transform hover:-translate-y-1"
              >
                <Eye className="w-4 h-4" />
                <span>View Projects</span>
              </a>
            </div>

            {/* Quick Tech Badge Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 w-full flex flex-wrap items-center gap-6 text-xs text-[#A0AEC0] font-semibold">
              <span className="text-white font-bold flex items-center gap-1.5">
                <Code className="w-4 h-4 text-[#00E5FF]" /> Core Stack:
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white">MongoDB</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white">Express.js</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white">React.js</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white">Node.js</span>
            </div>
          </motion.div>

          {/* Right Side: Profile Image Frame with Rotating Glow Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">

              {/* Outer Spinning Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] via-[#7C3AED] to-[#00E5FF] p-[3px] animate-spin-slow opacity-90 shadow-[0_0_50px_rgba(0,229,255,0.4)]" />

              {/* Pulsing Backlight */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#00E5FF] blur-2xl opacity-40 animate-pulse-slow" />

              {/* Inner Glass Frame */}
              <div className="relative w-[92%] h-[92%] rounded-full p-2 bg-[#050816] border border-white/15 shadow-2xl overflow-hidden animate-float">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full filter contrast-105 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge overlay */}
              <div className="absolute -bottom-4 -left-4 glass-card px-5 py-3 rounded-2xl border border-white/15 flex items-center gap-3 shadow-2xl backdrop-blur-xl">
                <div className="w-3 h-3 rounded-full bg-[#00E5FF] animate-ping" />
                <div>
                  <p className="text-xs text-[#A0AEC0] font-medium">Status</p>
                  <p className="text-xs font-extrabold text-white">Available for Hire</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass-card px-5 py-3 rounded-2xl border border-white/15 flex items-center gap-3 shadow-2xl backdrop-blur-xl">
                <Sparkles className="w-5 h-5 text-[#7C3AED]" />
                <div>
                  <p className="text-xs text-[#A0AEC0] font-medium">Experience</p>
                  <p className="text-xs font-extrabold text-white">Full Stack Dev</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
