import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Heart, BookOpen, Users, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { INSPIRATIONAL_QUOTES } from '../constants';

interface HomeProps {
  navigate: (page: PageRoute) => void;
}

// FIX: Explicitly typed MotionCard with React.FC<any> to fix errors where TypeScript couldn't infer the 'children' prop.
const MotionCard: React.FC<any> = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    {...props}
  >
    {children}
  </motion.div>
);

const Home: React.FC<HomeProps> = ({ navigate }) => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: parallaxY }}
        >
          <img
            src="https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg"
            alt="African children in an outdoor learning session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white"
          >
            Empowering Children. <br />Strengthening <span className="text-blue-300">Communities.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto font-medium"
          >
            Founded by Matilda Kashindo, Mati Foundation is an independent foundation providing education, care, and connection to Kenya’s orphans and vulnerable children.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="bg-brand-accent hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg shadow-amber-500/30 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              How You Can Support <Heart className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => navigate(PageRoute.ABOUT)}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors hover:bg-white hover:text-slate-800"
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
        <MotionCard className="bg-white/30 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Children Supported', value: '200+', icon: <Heart className="w-6 h-6 text-brand-primary" /> },
            { label: 'Scholarships Given', value: '75+', icon: <BookOpen className="w-6 h-6 text-brand-secondary" /> },
            { label: 'Families Engaged', value: '120+', icon: <Users className="w-6 h-6 text-brand-accent" /> },
            { label: 'Communities Reached', value: '15+', icon: <Shield className="w-6 h-6 text-purple-500" /> },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </MotionCard>
      </section>

      {/* Pillars Section */}
      <section className="px-4 max-w-7xl mx-auto py-10">
        <MotionCard className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 mb-4">Our Core Programs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We focus on key areas to provide holistic support and create lasting change.</p>
        </MotionCard>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Child Welfare & Care", icon: <Heart size={32} />, desc: "Food, clothing, and safe, supportive living conditions.", img: "https://i0.wp.com/africanrelief.org/wp-content/uploads/2024/08/BWA-Kabwata-Orphan-Image-Ironisitc.jpeg?fit=2160%2C1440&ssl=1" },
            { title: "Education Support", icon: <BookOpen size={32} />, desc: "School fees, learning materials, and uniforms.", img: "https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg" },
            { title: "Community Empowerment", icon: <Users size={32} />, desc: "Promoting family stability and self-reliance.", img: "https://static.wixstatic.com/media/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png/v1/fill/w_640%2Ch_446%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png" },
            { title: "Health & Wellbeing", icon: <Shield size={32} />, desc: "Nutrition awareness and basic health support.", img: "https://images.unsplash.com/photo-1540499749214-f6f3e8371804?auto=format&fit=crop&q=80&w=800" },
          ].map((item, idx) => (
             <MotionCard key={idx}>
               <motion.div
                  className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full"
                  whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 200 } }}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-brand-primary mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-6 flex-grow">{item.desc}</p>
                    <button onClick={() => navigate(PageRoute.PROGRAMS)} className="text-brand-primary font-bold flex items-center hover:underline mt-auto">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
             </MotionCard>
          ))}
        </div>
      </section>
      
       {/* Inspirational Quote Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 z-0">
          <img src={INSPIRATIONAL_QUOTES[0].image} alt="Inspirational background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="text-white text-3xl md:text-4xl font-serif italic"
          >
            "{INSPIRATIONAL_QUOTES[0].quote}"
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <MotionCard className="max-w-6xl mx-auto p-12 rounded-2xl bg-brand-primary text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Support Comes in Many Forms</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Your support helps provide education, food, and care to children who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="bg-brand-accent text-white px-8 py-3 rounded-full font-bold shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Sponsor a Child
            </motion.button>
            <motion.button
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer With Us
            </motion.button>
          </div>
        </MotionCard>
      </section>
    </div>
  );
};

export default Home;
