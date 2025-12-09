import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Heart, BookOpen, Users, Shield } from 'lucide-react';

interface HomeProps {
  navigate: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden bg-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg"
            alt="African children in an outdoor learning session"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto p-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Empowering Children. <br />Strengthening <span className="text-blue-400">Communities.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto font-medium">
            Founded by Matilda Kashindo, Mati Foundation is an independent foundation providing education, care, and connection to Kenya’s orphans and vulnerable children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="bg-brand-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center"
            >
              How You Can Support <Heart className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => navigate(PageRoute.ABOUT)}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-colors hover:bg-white hover:text-slate-800"
            >
              Our Founder's Story
            </button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-6xl mx-auto px-4 w-full -mt-24 relative z-20">
        <div className="bg-white p-8 rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Children Supported', value: '200+', icon: <Heart className="w-6 h-6 text-brand-primary" /> },
            { label: 'Scholarships Given', value: '75+', icon: <BookOpen className="w-6 h-6 text-brand-secondary" /> },
            { label: 'Families Engaged', value: '120+', icon: <Users className="w-6 h-6 text-amber-500" /> },
            { label: 'Communities Reached', value: '15+', icon: <Shield className="w-6 h-6 text-purple-500" /> },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-stone-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Section */}
      <section className="px-4 max-w-7xl mx-auto py-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 mb-4">Our Core Programs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We focus on key areas to provide holistic support and create lasting change.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Child Welfare & Care", icon: <Heart size={32} />, desc: "Food, clothing, and safe, supportive living conditions.", img: "https://i0.wp.com/africanrelief.org/wp-content/uploads/2024/08/BWA-Kabwata-Orphan-Image-Ironisitc.jpeg?fit=2160%2C1440&ssl=1" },
            { title: "Education Support", icon: <BookOpen size={32} />, desc: "School fees, learning materials, and uniforms.", img: "https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg" },
            { title: "Community Empowerment", icon: <Users size={32} />, desc: "Promoting family stability and self-reliance.", img: "https://static.wixstatic.com/media/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png/v1/fill/w_640%2Ch_446%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png" },
            { title: "Health & Wellbeing", icon: <Shield size={32} />, desc: "Nutrition awareness and basic health support.", img: "https://images.unsplash.com/photo-1540499749214-f6f3e8371804?auto=format&fit=crop&q=80&w=800" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 flex flex-col"
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
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto p-12 rounded-2xl bg-brand-primary text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Support Comes in Many Forms</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Your support helps provide education, food, and care to children who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="bg-white text-brand-primary px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
            >
              Sponsor a Child
            </button>
            <button
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-transform hover:scale-105"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
