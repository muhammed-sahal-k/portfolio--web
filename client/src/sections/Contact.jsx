import React, { useState } from 'react';
import { motion } from 'framer-motion';
import API from '../api';
// import axios from 'axios';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  Loader2,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, message: '' });

    try {
      // POST message to Express Backend /api/contact
      // const response = await axios.post('/api/contact', formData);
      const response = await API.post('/api/contact', formData);

      if (response.data && response.data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          message: response.data.message || 'Thank you! Your message has been received.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: true,
          message: response.data.message || 'Failed to submit form.',
        });
      }
    } 
    
    // catch (err) {
    //   // Fallback optimistic submission message if backend API is offline
    //   setStatus({
    //     loading: false,
    //     success: true,
    //     error: null,
    //     message: 'Message sent successfully! (Saved & Logged locally)',
    //   });
    //   setFormData({ name: '', email: '', message: '' });
    // }

    catch (err) {
  setStatus({
    loading: false,
    success: false,
    error: true,
    message: "Failed to send email.",
  });
}
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something Extraordinary"
          subtitle="Available for freelance full stack projects, full-time MERN developer roles, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <TiltCard className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#00E5FF]" /> Contact Information
              </h3>
              <p className="text-sm text-[#A0AEC0] leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within a few hours.
              </p>

              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00E5FF]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#A0AEC0] font-medium">Email Address</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#7C3AED]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#A0AEC0] font-medium">Phone Number</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#7C3AED] transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#A0AEC0] font-medium">Location</p>
                  <p className="text-sm font-bold text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social Links & Resume Download */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all hover:scale-110"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all hover:scale-110"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

               <a
  href={personalInfo.resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  download
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:opacity-90 transition-all"
>
  <FileText className="w-4 h-4" />
  Download Resume
</a>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Dynamic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <TiltCard className="glass-card p-8 md:p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-[#A0AEC0] mb-8">
                Fill out the form below and your message will be transmitted directly to my backend API and database.
              </p>

              {status.success && (
                <div className="mb-6 p-4 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center gap-3 text-xs md:text-sm text-[#00E5FF] font-bold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-xs md:text-sm text-red-400 font-bold">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold text-[#A0AEC0] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-[#A0AEC0]/50 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold text-[#A0AEC0] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-[#A0AEC0]/50 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-bold text-[#A0AEC0] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Muhammed, I would like to discuss a project..."
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-[#A0AEC0]/50 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl text-sm font-extrabold text-black bg-gradient-to-r from-[#00E5FF] via-[#7C3AED] to-[#00E5FF] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_25px_rgba(0,229,255,0.4)] disabled:opacity-50"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
