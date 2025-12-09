import React from 'react';
import { TEAM, INSPIRATIONAL_QUOTES, CORE_VALUES } from '../constants';
import { Heart, CheckCircle, Handshake, Sun, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const icons: { [key: string]: React.ReactElement } = {
    Heart: <Heart className="w-8 h-8" style={{ color: 'var(--primary-blue)'}}/>,
    CheckCircle: <CheckCircle className="w-8 h-8" style={{ color: 'var(--primary-blue)'}}/>,
    Sun: <Sun className="w-8 h-8" style={{ color: 'var(--primary-blue)'}}/>,
    Users: <Users className="w-8 h-8" style={{ color: 'var(--primary-blue)'}}/>,
    Handshake: <Handshake className="w-8 h-8" style={{ color: 'var(--primary-blue)'}}/>,
};

// FIX: Added 'style' prop to the component's props to allow passing inline styles.
const SectionWrapper: React.FC<{ className?: string, children: React.ReactNode, style?: React.CSSProperties }> = ({ children, className = '', style }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
    className={className}
    style={style}
  >
    {children}
  </motion.section>
);

const About: React.FC = () => {
  return (
    <div className="pb-24 bg-white">
        {/* Header Section with Image */}
        <div className="relative py-24 px-4 text-center text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1470" alt="Community hands" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10">
                 <AnimatedText 
                    text="A Foundation Built on a Vision of Care"
                    className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white"
                />
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', delay: 0.5 }}
                    className="text-xl max-w-3xl mx-auto text-slate-100"
                >
                    Mati Foundation is an independent, humanitarian foundation created to respond directly to the real challenges facing children.
                </motion.p>
            </div>
        </div>

      <div className="max-w-6xl mx-auto space-y-24 px-4 pt-24">

        {/* Narrative Card */}
        <SectionWrapper className="bg-white border p-8 md:p-12 rounded-2xl shadow-lg flex flex-col md:flex-row gap-12 items-center card-shine" style={{ borderColor: 'var(--border-color)'}}>
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
                className="absolute -bottom-6 -right-6 bg-white border p-6 rounded-xl max-w-xs hidden md:block"
                style={{ borderColor: 'var(--border-color)'}}
              >
                <p className="text-sm font-serif italic" style={{ color: 'var(--text-main)'}}>"Every child deserves not only to survive, but to thrive. Our work is to build the path for them to do so."<br />- Matilda Kashindo</p>
              </motion.div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold font-serif">Our Founder’s Story</h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-light)'}}>
              <strong style={{ color: 'var(--primary-blue)'}}>Matilda Kashindo</strong> is a passionate humanitarian and community advocate whose work with children and families inspired the creation of Mati Foundation. Through years of involvement in grassroots support initiatives, Matilda recognized the need for a focused, independent foundation that prioritizes education, child welfare, and sustainable empowerment.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text-light)'}}>
              Her vision is simple but powerful: help children not only survive, but thrive. The foundation operates independently, guided by compassion, accountability, and community-rooted solutions.
            </p>
          </div>
        </SectionWrapper>

        {/* Values Grid */}
        <SectionWrapper>
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Our Core Values</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                className="bg-white border rounded-2xl text-center shadow-lg card-shine overflow-hidden group"
                style={{ borderColor: 'var(--border-color)'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, delay: idx * 0.1 }}
              >
                <div className="relative h-32">
                    <img src={val.image} alt={val.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                    <div className="w-16 h-16 -mt-14 relative z-10 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border-4 border-white">
                      {icons[val.icon]}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-light)'}}>{val.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
        
        {/* Inspirational Quote */}
        <section className="relative py-32 px-4 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={INSPIRATIONAL_QUOTES[1].image} alt="Hopeful community" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 71, 161, 0.6)' }}></div>
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