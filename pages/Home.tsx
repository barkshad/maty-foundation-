import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Heart, BookOpen, Users } from 'lucide-react';

interface HomeProps {
  navigate: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1012/1920/1080" 
            alt="Children playing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Building Futures,<br />One Child at a Time.
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto">
            Mati Foundation provides a loving home, quality education, and community support to orphaned children, giving them the tools to write their own stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="bg-brand-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Donate Now
            </button>
            <button 
              onClick={() => navigate(PageRoute.ABOUT)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/50 px-8 py-3 rounded-full text-lg font-semibold transition-all"
            >
              Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Children Housed', value: '50+', icon: <Heart className="w-8 h-8 mx-auto mb-2 opacity-80"/> },
            { label: 'Students Educated', value: '150+', icon: <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-80"/> },
            { label: 'Meals Served', value: '50k+', icon: <Users className="w-8 h-8 mx-auto mb-2 opacity-80"/> },
            { label: 'Years Active', value: '14', icon: <Heart className="w-8 h-8 mx-auto mb-2 opacity-80"/> },
          ].map((stat, idx) => (
            <div key={idx} className="p-4">
              {stat.icon}
              <div className="text-4xl font-bold font-serif mb-1">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / Welcome */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <span className="text-brand-secondary font-bold tracking-widest text-sm uppercase mb-3 block">Welcome to Mati Foundation</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">More Than Just a Shelter</h2>
        <p className="text-stone-600 text-lg leading-relaxed mb-8">
          We believe that every child deserves safety, love, and opportunity. Founded in 2010, the Mati Foundation has grown from a humble home into a comprehensive center for community transformation. We don't just provide beds; we provide pathways to dignity and independence through rigorous education and holistic care.
        </p>
        <button 
          onClick={() => navigate(PageRoute.ABOUT)}
          className="text-brand-primary font-bold hover:text-blue-900 flex items-center justify-center mx-auto"
        >
          Read Our Full Story <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </section>

      {/* Preview Programs */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">Our Key Programs</h2>
              <p className="text-stone-500">Holistic support for lasting change.</p>
            </div>
            <button onClick={() => navigate(PageRoute.PROGRAMS)} className="hidden md:flex text-brand-secondary font-bold items-center">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer" onClick={() => navigate(PageRoute.PROGRAMS)}>
              <img src="https://picsum.photos/id/10/800/600" alt="Education" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl text-white font-bold mb-2">Education First</h3>
                <p className="text-stone-200 mb-4">Scholarships, tutoring, and supplies for 150+ students.</p>
                <span className="text-white underline text-sm font-bold">Learn More</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer" onClick={() => navigate(PageRoute.PROGRAMS)}>
              <img src="https://picsum.photos/id/12/800/600" alt="Community" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl text-white font-bold mb-2">Community Outreach</h3>
                <p className="text-stone-200 mb-4">Health camps and food security for vulnerable families.</p>
                <span className="text-white underline text-sm font-bold">Learn More</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;