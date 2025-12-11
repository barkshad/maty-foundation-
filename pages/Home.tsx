
import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Heart, BookOpen, Users, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { INSPIRATIONAL_QUOTES } from '../constants';
import AnimatedText from '../components/AnimatedText';
import AnimatedCounter from '../components/AnimatedCounter';
import { useContent } from '../contexts/ContentContext';

interface HomeProps {
  navigate: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  const { content } = useContent();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Map string icons to components for the dynamic stats
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6", style: { color: 'var(--primary-blue)' } };
    switch(iconName) {
        case 'Heart': return <Heart {...props} />;
        case 'BookOpen': return <BookOpen {...props} />;
        case 'Users': return <Users {...props} />;
        case 'Shield': return <Shield {...props} />;
        default: return <Heart {...props} />;
    }
  };

  const isVideo = (url?: string) => {
    if (!url) return false;
    return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('/video/upload/');
  };

  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24 bg-background-soft">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: parallaxY }}
        >
          {isVideo(content.hero.image) ? (
            <video 
              src={content.hero.image} 
              className="w-full h-full object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline
            />
          ) : (
            <img
              src={content.hero.image}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/60 to-accent-blue/20"></div>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto p-8">
            <AnimatedText 
              text={content.hero.headline}
              className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white [text-shadow:0_3px_5px_rgba(0,0,0,0.3)]"
            />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-100 mb-8 max-w-3xl mx-auto font-medium [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]"
          >
            {content.hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              How You Can Support <Heart className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => navigate(PageRoute.ABOUT)}
              className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-colors hover:bg-white hover:text-accent-blue"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Founder's Story
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-6xl mx-auto px-4 w-full -mt-48 relative z-20">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="relative bg-white border p-8 rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 card-shine overflow-hidden" style={{ borderColor: 'var(--border-color)'}}>
            <img 
                src="https://www.transparenttextures.com/patterns/subtle-zebra-3d.png" 
                alt="subtle background pattern" 
                className="absolute inset-0 w-full h-full object-cover opacity-5"
            />
          {content.impactStats.map((stat, idx) => (
            <div key={idx} className="text-center relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                {getIcon(stat.icon)}
              </div>
              <div className="text-3xl font-bold mb-1" style={{ color: 'var(--accent-blue)' }}>
                 <AnimatedCounter to={stat.value} />{stat.suffix}
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--text-light)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="px-4 max-w-7xl mx-auto py-10">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Core Programs</h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-light)' }}>We focus on key areas to provide holistic support and create lasting change.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Child Welfare & Care", icon: <Heart size={32} />, desc: "Food, clothing, and safe, supportive living conditions.", img: "https://i0.wp.com/africanrelief.org/wp-content/uploads/2024/08/BWA-Kabwata-Orphan-Image-Ironisitc.jpeg?fit=2160%2C1440&ssl=1" },
            { title: "Education Support", icon: <BookOpen size={32} />, desc: "School fees, learning materials, and uniforms.", img: "https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg" },
            { title: "Community Empowerment", icon: <Users size={32} />, desc: "Promoting family stability and self-reliance.", img: "https://static.wixstatic.com/media/c3ec3c_d97978e55e294e449545fe551cb85635~nv2.png/v1/fill/w_640%2Ch_446%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/c3ec3c_d97978e55e294e449545fe551cb85635~nv2.png" },
            { title: "Health & Wellbeing", icon: <Shield size={32} />, desc: "Nutrition awareness and basic health support.", img: "https://images.unsplash.com/photo-1540499749214-f6f3e8371804?auto=format&fit=crop&q=80&w=800" },
          ].map((item, idx) => (
             <motion.div
                key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ type: 'spring', stiffness: 100, damping: 20, delay: idx * 0.1 }}
             >
               <div
                  className="bg-white border rounded-2xl overflow-hidden shadow-lg flex flex-col h-full card-shine"
                  style={{ borderColor: 'var(--border-color)'}}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3" style={{ color: 'var(--primary-blue)'}}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="mb-6 flex-grow" style={{ color: 'var(--text-light)'}}>{item.desc}</p>
                    <button onClick={() => navigate(PageRoute.PROGRAMS)} className="font-bold flex items-center hover:underline mt-auto" style={{ color: 'var(--primary-blue)'}}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </section>
      
       {/* Inspirational Quote Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 z-0">
          <img src={INSPIRATIONAL_QUOTES[0].image} alt="Inspirational background" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 71, 161, 0.6)' }}></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="text-white text-3xl md:text-4xl font-serif italic [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
          >
            "{INSPIRATIONAL_QUOTES[0].quote}"
          </motion.p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-4">
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="relative max-w-6xl mx-auto p-12 rounded-2xl text-white text-center shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1518842323119-94a03f4a3424?auto=format&fit=crop&q=80&w=1470" alt="Hopeful child" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/80 to-accent-blue/80"></div>
            </div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.2)]">Support Comes in Many Forms</h2>
                <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
                    Your support helps provide education, food, and care to children who need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                    onClick={() => navigate(PageRoute.GET_INVOLVED)}
                    className="btn-primary text-lg px-8 py-4"
                    style={{ backgroundColor: 'var(--white)', color: 'var(--primary-blue)', border: 'none' }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    Sponsor a Child
                    </motion.button>
                    <motion.button
                    onClick={() => navigate(PageRoute.GET_INVOLVED)}
                    className="btn-secondary text-lg px-8 py-4 bg-white/20 border-white text-white hover:bg-white hover:text-accent-blue"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    Volunteer With Us
                    </motion.button>
                </div>
            </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
