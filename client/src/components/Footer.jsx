import React from 'react';
import { Heart, ArrowUp, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pt-16 pb-12 border-t border-white/10 bg-[#03050f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#7C3AED] p-[2px] shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-extrabold text-white text-lg">
                MS
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{personalInfo.name}</h3>
              <p className="text-xs text-[#A0AEC0] font-medium">
                MERN Stack Developer
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all transform hover:-translate-y-1"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#00E5FF]" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0AEC0]">
          <p className="flex items-center gap-1.5 font-medium">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by{' '}
            <span className="text-white font-bold">{personalInfo.name}</span>
          </p>

          <p className="font-medium">
            © 2026 All Rights Reserved • Built with React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
