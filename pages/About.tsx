import React from 'react';
import { TEAM, INSPIRATIONAL_QUOTES } from '../constants';
import { Heart, CheckCircle, Handshake, Sun, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// FIX: Explicitly typed SectionWrapper with React.FC to fix errors where TypeScript couldn't infer the 'children' prop.
const SectionWrapper: React.FC<{ className?: string }> = ({ children, className = '' }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
    className={className}
  >
    {children}
  </motion.section>
);

const About: React.FC = () => {
  return (
    <div className="pb-24 pt-16 px-4">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Header Section */}
        <SectionWrapper className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            A Foundation Built on a Vision of Care
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mati Foundation is an independent, humanitarian foundation created to respond directly to the real challenges facing children.
          </p>
        </SectionWrapper>

        {/* Narrative Card */}
        <SectionWrapper className="bg-white/30 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-2xl shadow-lg flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src={TEAM[0].image} // Directly using Matilda's image from constants
                alt="Founder Matilda Kashindo"
                className="rounded-2xl shadow-xl w-full"
              />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white/50 backdrop-blur-md border border-white/20 p-6 rounded-xl max-w-xs hidden md:block"
              >
                <p className="text-sm font-serif italic text-slate-700">"Every child deserves not only to survive, but to thrive. Our work is to build the path for them to do so."<br />- Matilda Kashindo</p>
              </motion.div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold font-serif text-slate-800">Our Founder’s Story</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-brand-primary">Matilda Kashindo</strong> is a passionate humanitarian and community advocate whose work with children and families inspired the creation of Mati Foundation. Through years of involvement in grassroots support initiatives, Matilda recognized the need for a focused, independent foundation that prioritizes education, child welfare, and sustainable empowerment.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Her vision is simple but powerful: help children not only survive, but thrive. The foundation operates independently, guided by compassion, accountability, and community-rooted solutions.
            </p>
          </div>
        </SectionWrapper>

        {/* Values Grid */}
        <SectionWrapper>
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Our Core Values</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: "Compassion", icon: <Heart className="w-8 h-8 text-red-500" />, text: "Driven by care and empathy." },
              { title: "Integrity", icon: <CheckCircle className="w-8 h-8 text-blue-500" />, text: "Honest, ethical leadership." },
              { title: "Transparency", icon: <Sun className="w-8 h-8 text-yellow-500" />, text: "Responsible use of resources." },
              { title: "Community", icon: <Users className="w-8 h-8 text-green-500" />, text: "Local voices lead solutions." },
              { title: "Sustainability", icon: <Handshake className="w-8 h-8 text-purple-500" />, text: "Focus on long-term impact." },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                className="bg-white/30 backdrop-blur-lg border border-white/20 p-8 rounded-2xl text-center shadow-lg"
                whileHover={{ y: -8, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, delay: idx * 0.1 }}
              >
                <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-slate-600 text-sm">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
        
        {/* Inspirational Quote */}
        <section className="relative py-32 px-4 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={INSPIRATIONAL_QUOTES[1].image} alt="Hopeful community" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.p 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="text-white text-3xl md:text-4xl font-serif italic"
                >
                    "{INSPIRATIONAL_QUOTES[1].quote}"
                </motion.p>
            </div>
        </section>

      </div>
    </div>
  );
};

export default About;
