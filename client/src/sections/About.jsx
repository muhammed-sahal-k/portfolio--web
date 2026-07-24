import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Server, Database, CheckCircle2, Cpu, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { aboutData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Architecting Scalable Web Applications"
          subtitle="Combining strong computer science fundamentals with modern MERN stack expertise to deliver production-ready software solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <TiltCard className="w-full glass-card p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {aboutData.degree}
                    </h3>
                    <p className="text-sm text-[#00E5FF] font-medium">
                      {aboutData.specialization}
                    </p>
                  </div>
                </div>

                <p className="text-base text-[#A0AEC0] leading-relaxed mb-8">
                  {aboutData.description}
                </p>

                {/* Grid of Mentions & Highlights */}
                <h4 className="text-xs uppercase tracking-widest text-white/60 font-bold mb-4">
                  Core Technologies & Competencies
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {aboutData.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white font-medium hover:border-[#00E5FF]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#A0AEC0]">
                <span>Clean Code & Best Practices</span>
                <span className="text-[#00E5FF] font-bold">100% Production Ready</span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Stats & Stack Overview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {aboutData.stats.map((stat, idx) => (
              <TiltCard
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#A0AEC0]">
                  {stat.label}
                </div>
              </TiltCard>
            ))}

            {/* Comprehensive Stack Highlight */}
            <div className="col-span-2 glass-card p-6 rounded-3xl border border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-[#00E5FF] font-bold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#7C3AED]" /> Ecosystem Deployment
              </h4>
              <p className="text-xs text-[#A0AEC0] leading-relaxed">
                Proficient in creating RESTful services with Express, JWT security pipelines, Cloudinary asset storage, MongoDB Atlas cloud instances, and continuous deployment via Vercel & Render.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
