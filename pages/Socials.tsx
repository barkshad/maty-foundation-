import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import AnimatedText from '../components/AnimatedText';
import * as Lucide from 'lucide-react';

const Socials: React.FC = () => {
  return (
    <div className="min-h-screen pb-24 bg-background-soft">
      <div className="relative pt-20 pb-24 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=1470" alt="Community connection" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/70 to-accent-blue/40"></div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="relative z-10"
        >
          <AnimatedText text="Connect With Us" className="text-4xl font-serif font-bold mb-4 text-white [text-shadow:0_3px_5px_rgba(0,0,0,0.3)]" />
          <p className="text-lg text-slate-100 max-w-2xl mx-auto [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]">Follow our journey, share our stories, and be part of our growing community online.</p>
        </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {SOCIAL_LINKS.map((social, idx) => {
            // @ts-ignore
            const Icon = Lucide[social.icon];
            return (
              <motion.div
                key={social.name}
                className="bg-white border rounded-2xl shadow-lg card-shine overflow-hidden group"
                style={{ borderColor: 'var(--border-color)'}}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 100, delay: idx * 0.15 }}
              >
                <div className="relative h-48">
                    <img src={social.image} alt={social.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center">
                        <div className="p-3 rounded-xl bg-white/90 shadow-md mr-3" style={{ color: 'var(--primary-blue)' }}>
                           {Icon && <Icon size={24}/>}
                        </div>
                        <h2 className="text-2xl font-bold text-white font-serif [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">{social.name}</h2>
                    </div>
                </div>
                <div className="p-6">
                    <p className="mb-6" style={{ color: 'var(--text-light)' }}>{social.desc}</p>
                    <motion.a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {Icon && <Icon size={20} className="mr-2"/>}
                        Follow on {social.name}
                    </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Socials;