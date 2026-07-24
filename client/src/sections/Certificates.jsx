import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { certificatesData } from '../data/portfolioData';

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Credentials & Awards"
          title="Certificates & Accomplishments"
          subtitle="Verifiable technical credentials and hackathon participation validating expertise across full stack web development."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-full group hover:border-[#00E5FF]/40">
                <div>
                  {/* Top Badge & Date */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {cert.badge}
                    </span>
                    <span className="text-xs text-[#A0AEC0] font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <Award className="w-7 h-7" />
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {cert.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-[#7C3AED] mb-4 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> {cert.issuer}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-[#A0AEC0] leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#00E5FF] font-bold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" /> Verified Credential
                  </span>
                  <span>Softronics MERN</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
