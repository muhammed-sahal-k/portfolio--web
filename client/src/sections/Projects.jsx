import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { projectsData as defaultProjects } from '../data/portfolioData';

const Projects = () => {
  const [projects, setProjects] = useState(defaultProjects);
  const [filter, setFilter] = useState('All');

  // Load dynamically from backend API if available
  useEffect(() => {
    fetch('/api/projects')
      ? fetch('/api/projects')
          .then((res) => res.json())
          .then((data) => {
            if (data && data.success && data.projects.length > 0) {
              setProjects(data.projects);
            }
          })
          .catch(() => {
            // Smooth silent fallback to client local structured projects
            setProjects(defaultProjects);
          })
      : setProjects(defaultProjects);
  }, []);

  const filteredProjects =
    filter === 'All'
      ? projects
      : filter === 'MERN'
      ? projects.filter((p) => p.tech.includes('React') || p.tech.includes('MongoDB'))
      : projects.filter((p) => p.tech.includes('HTML5') || p.tech.includes('CSS3'));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio Showcase"
          title="Featured Projects & Solutions"
          subtitle="Explore production-grade full stack applications, interactive user interfaces, and custom web systems."
        />

        {/* Filter Categories */}
        <div className="flex justify-center gap-3 mb-12">
          {['All', 'MERN', 'Frontend'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                  : 'glass-card text-[#A0AEC0] hover:text-white'
              }`}
            >
              {cat} Projects
            </button>
          ))}
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col h-full group hover:border-[#00E5FF]/50 shadow-2xl">
                
                {/* Clickable Image Thumbnail with Hover Zoom */}
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-52 sm:h-60 overflow-hidden cursor-pointer group/img"
                  title={`Open Live Demo for ${project.name}`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover/img:scale-110 transition-transform duration-700 filter brightness-90 group-hover/img:brightness-100"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />

                  {/* Top Right Live Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#00E5FF] border border-[#00E5FF]/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
                    Live Demo
                  </div>

                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 bg-[#050816]/60 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-black font-extrabold text-xs shadow-2xl transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                      Visit Site <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Project Name */}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title inline-block mb-2"
                    >
                      <h3 className="text-xl font-bold text-white group-hover/title:text-[#00E5FF] transition-colors flex items-center gap-2">
                        {project.name}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/title:opacity-100 transition-opacity text-[#00E5FF]" />
                      </h3>
                    </a>

                    {/* Project Description */}
                    <p className="text-sm text-[#A0AEC0] leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                    {/* Live Demo Button */}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] hover:opacity-90 transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>

                    {/* GitHub Button */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all"
                        title="View Source Code on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
