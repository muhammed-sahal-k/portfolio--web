import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ badge, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
      {/* Badge Pill */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold tracking-wider text-[#00E5FF] uppercase mb-4 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          {badge}
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-[#A0AEC0] max-w-2xl font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Neon Gradient Underline Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-24 h-1 mt-6 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] shadow-[0_0_12px_#00E5FF]"
      />
    </div>
  );
};

export default SectionHeader;
