import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Education & Qualifications"
          subtitle="Strong formal foundation in computer science principles, web engineering, and database systems."
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TiltCard className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.3)]">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-base font-semibold text-[#7C3AED] flex items-center gap-1.5 mt-1">
                        <BookOpen className="w-4 h-4" /> {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="text-xs text-[#A0AEC0] font-semibold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#7C3AED]" /> {edu.grade}
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                  Key Academic Modules & Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-[#A0AEC0] font-medium hover:border-[#00E5FF]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
