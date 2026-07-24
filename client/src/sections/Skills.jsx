import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { skillsCategories } from '../data/portfolioData';

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  'Tools & Cloud': Wrench,
  'Soft Skills': Brain,
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tech Stack"
          title="Skills & Technical Mastery"
          subtitle="Comprehensive toolkit powering production-grade full stack web architecture and responsive user interfaces."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillsCategories.map((category, idx) => {
            const Icon = iconMap[category.title] || Layers;
            const isActive = activeTab === idx;

            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-black shadow-[0_0_25px_rgba(0,229,255,0.4)] scale-105'
                    : 'glass-card text-[#A0AEC0] hover:text-white hover:border-[#00E5FF]/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#00E5FF]'}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsCategories[activeTab].skills.map((skill, sIdx) => (
            <TiltCard
              key={skill.name}
              className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-[#00E5FF]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF]/50 transition-all">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-extrabold text-[#7C3AED]">
                    {skill.level}
                  </span>
                </div>

                {/* Progress Bar Indicator */}
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-3 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                    className="h-full bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full shadow-[0_0_10px_#00E5FF]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#A0AEC0] pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#00E5FF]" /> Verified Competency
                </span>
                <span className="text-white/60 font-semibold">MERN Ecosystem</span>
              </div>
            </TiltCard>
          ))}
        </motion.div>

        {/* Full Technology Cloud Badges */}
        <div className="mt-16 glass-card p-8 rounded-3xl border border-white/10 text-center">
          <h4 className="text-sm uppercase tracking-widest text-[#00E5FF] font-bold mb-4 flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-[#7C3AED]" /> Complete Technical Stack Summary
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js",
              "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Cloudinary",
              "Postman", "Render", "Vercel", "AWS", "REST API", "JWT", "Socket.io",
              "Problem Solving", "Communication", "Critical Thinking", "Team Collaboration",
              "Continuous Learning", "Time Management"
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.04] border border-white/10 text-white hover:border-[#00E5FF] hover:text-[#00E5FF] hover:scale-105 transition-all cursor-default shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
