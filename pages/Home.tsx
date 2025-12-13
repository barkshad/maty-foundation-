
import React, { useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { Heart, BookOpen, Users, Shield, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { INSPIRATIONAL_QUOTES } from '../constants';
import AnimatedText from '../components/AnimatedText';
import AnimatedCounter from '../components/AnimatedCounter';
import { useContent } from '../contexts/ContentContext';
import { isVideo, getOptimizedMediaUrl } from '../utils/media';

interface HomeProps {
  navigate: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  const { content } = useContent();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-teal-600" };
    switch(iconName) {
        case 'Heart': return <Heart {...props} />;
        case 'BookOpen': return <BookOpen {...props} />;
        case 'Users': return <Users {...props} />;
        case 'Shield': return <Shield {...props} />;
        default: return <Heart {...props} />;
    }
  };

  const heroMediaUrl = getOptimizedMediaUrl(content.hero.image);
  const isHeroVideo = isVideo(content.hero.image);

  useEffect(() => {
    if (isHeroVideo && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.warn("Hero video autoplay prevented:", err);
      });
    }
  }, [heroMediaUrl, isHeroVideo]);

  return (
    <div className="flex flex-col pb-24 bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: parallaxY }}
        >
          {isHeroVideo ? (
            <video 
              ref={videoRef}
              key={heroMediaUrl}
              src={heroMediaUrl} 
              className="w-full h-full object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
            />
          ) : (
            <img
              src={heroMediaUrl}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          )}
          {/* Heavy gradient overlay for maximum text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/30"></div>
          <div className="absolute inset-0 bg-black/20 backdrop-brightness-75"></div>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto p-8 pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-100 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                Non-Profit Organization
              </span>
            </motion.div>
            
            <AnimatedText 
              text={content.hero.headline}
              className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1] text-white drop-shadow-xl"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.8 }}
              className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
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
                className="bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-teal-900/30 hover:bg-teal-500 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Helping <Heart className="w-5 h-5 fill-current" />
              </motion.button>
              <motion.button
                onClick={() => navigate(PageRoute.ABOUT)}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-slate-900 transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Impact Stats - Floating Cards */}
      <section className="max-w-7xl mx-auto px-4 w-full -mt-24 relative z-20">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-900/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {content.impactStats.map((stat, idx) => (
              <div key={idx} className="text-center relative group">
                {idx < content.impactStats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-200"></div>
                )}
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-teal-100">
                  {getIcon(stat.icon)}
                </div>
                <div className="text-4xl font-bold mb-2 text-slate-800 font-serif">
                   <AnimatedCounter to={stat.value} />{stat.suffix}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="px-4 max-w-7xl mx-auto py-24 md:py-32">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
        >
          <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-3 block">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">Core Areas of Impact</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed font-light">
            We focus on holistic development to ensure every child has the foundation they need to thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Child Welfare", icon: <Heart size={28} />, desc: "Providing safe living conditions, food security, and emotional support.", img: "https://i0.wp.com/africanrelief.org/wp-content/uploads/2024/08/BWA-Kabwata-Orphan-Image-Ironisitc.jpeg?fit=2160%2C1440&ssl=1" },
            { title: "Education", icon: <BookOpen size={28} />, desc: "School fees, uniforms, and learning materials for every child.", img: "https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg" },
            { title: "Empowerment", icon: <Users size={28} />, desc: "Strengthening families to create sustainable, self-reliant communities.", img: "https://static.wixstatic.com/media/c3ec3c_d97978e55e294e449545fe551cb85635~nv2.png/v1/fill/w_640%2Ch_446%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/c3ec3c_d97978e55e294e449545fe551cb85635~nv2.png" },
            { title: "Health", icon: <Shield size={28} />, desc: "Nutritional support and hygiene education for long-term wellbeing.", img: "https://images.unsplash.com/photo-1540499749214-f6f3e8371804?auto=format&fit=crop&q=80&w=800" },
          ].map((item, idx) => (
             <motion.div
                key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ delay: idx * 0.1 }}
                 className="group"
             >
               <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-slate-100 hover:border-teal-100/50 hover:-translate-y-2">
                  <div className="h-56 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl inline-block mb-2 text-white">
                            {item.icon}
                        </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-teal-700 transition-colors font-serif">{item.title}</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed flex-grow text-sm">{item.desc}</p>
                    <button 
                        onClick={() => navigate(PageRoute.PROGRAMS)} 
                        className="flex items-center text-sm font-bold text-teal-600 hover:text-teal-800 group/btn"
                    >
                      Explore Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </section>
      
       {/* Inspirational Quote Section */}
      <section className="relative py-40 px-4 my-10">
        <div className="absolute inset-0 z-0">
          <img src={INSPIRATIONAL_QUOTES[0].image} alt="Inspirational background" className="w-full h-full object-cover fixed-bg" />
          <div className="absolute inset-0 bg-teal-900/90 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
             <Heart className="w-12 h-12 text-teal-300 mx-auto opacity-80" fill="currentColor"/>
          </div>
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-serif font-medium leading-tight mb-8"
          >
            "{INSPIRATIONAL_QUOTES[0].quote}"
          </motion.blockquote>
          <div className="w-24 h-1 bg-teal-400 mx-auto rounded-full"></div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-4 pb-20 -mt-10 relative z-20">
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1518842323119-94a03f4a3424?auto=format&fit=crop&q=80&w=1470" alt="Hopeful child" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
            </div>
            
            <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-3/5 text-left">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">Every Child Deserves a Chance</h2>
                    <p className="text-slate-200 text-lg leading-relaxed mb-0">
                        Join us in transforming lives. Whether through sponsorship, volunteering, or donating supplies, your contribution creates immediate impact.
                    </p>
                </div>
                
                <div className="md:w-2/5 flex flex-col gap-4 w-full">
                    <motion.button
                        onClick={() => navigate(PageRoute.SPONSORSHIP)}
                        className="w-full bg-white text-slate-900 text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-teal-50 transition-all flex justify-between items-center group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Sponsor a Child 
                        <span className="bg-teal-100 p-2 rounded-full group-hover:bg-teal-200 transition-colors"><ArrowRight size={20} className="text-teal-700"/></span>
                    </motion.button>
                    
                    <motion.button
                        onClick={() => navigate(PageRoute.GET_INVOLVED)}
                        className="w-full bg-teal-600/90 backdrop-blur-sm border border-teal-400/30 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-teal-600 transition-all flex justify-between items-center group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Volunteer With Us
                        <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors"><ArrowRight size={20}/></span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
