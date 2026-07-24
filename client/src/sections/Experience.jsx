import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work History"
          title="Professional Experience"
          subtitle="Building real-world web applications through freelance client solutions and professional industry internships."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00E5FF] via-[#7C3AED] to-transparent -translate-x-1/2 shadow-[0_0_15px_#00E5FF]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050816] border-2 border-[#00E5FF] shadow-[0_0_15px_#00E5FF] flex items-center justify-center z-20">
                    <div className="w-3 h-3 rounded-full bg-[#7C3AED] animate-ping" />
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <TiltCard className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 relative group">
                      {/* Top Role & Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[#A0AEC0] font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-[#7C3AED] mb-4 flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {exp.company}
                      </h4>

                      {/* Overview */}
                      <p className="text-sm text-[#A0AEC0] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-white/90">
                            <ChevronRight className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/5 border border-white/10 text-[#A0AEC0]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
