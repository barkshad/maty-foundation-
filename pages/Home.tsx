import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Heart, BookOpen, Users, Sparkles } from 'lucide-react';

interface HomeProps {
  navigate: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 bg-brand-dark">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/id/1012/1920/1080" 
            alt="Children playing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Building Futures, One Child at a Time.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Providing a loving home, quality education, and community support to orphaned children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate(PageRoute.GET_INVOLVED)}
              className="bg-brand-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-colors shadow-lg"
            >
              Donate Now
            </button>
            <button 
              onClick={() => navigate(PageRoute.ABOUT)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full text-lg font-bold transition-colors"
            >
              Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Children Housed', value: '50+', icon: <Heart className="w-6 h-6 text-brand-primary"/> },
            { label: 'Students Educated', value: '150+', icon: <BookOpen className="w-6 h-6 text-brand-secondary"/> },
            { label: 'Meals Served', value: '50k+', icon: <Users className="w-6 h-6 text-amber-500"/> },
            { label: 'Years Active', value: '14', icon: <Sparkles className="w-6 h-6 text-purple-500"/> },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-stone-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-2 block">Welcome to Mati Foundation</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">
              More Than Just a Shelter
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We believe that every child deserves safety, love, and opportunity. Founded in 2010, the Mati Foundation has grown from a humble home into a comprehensive center for community transformation. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We don't just provide beds; we provide pathways to dignity and independence through rigorous education and holistic care.
            </p>
            <button 
              onClick={() => navigate(PageRoute.ABOUT)}
              className="text-brand-primary font-bold hover:text-blue-700 flex items-center group"
            >
              Read Our Full Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-primary rounded-2xl z-0"></div>
            <img 
              src="https://picsum.photos/id/1059/600/700" 
              alt="Community" 
              className="relative z-10 rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Program Previews */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-2">Our Key Programs</h2>
              <p className="text-slate-500">Holistic support for lasting change.</p>
            </div>
            <button onClick={() => navigate(PageRoute.PROGRAMS)} className="hidden md:flex text-brand-secondary font-bold items-center hover:translate-x-1 transition-transform">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Education First", desc: "Scholarships, tutoring, and supplies for 150+ students.", img: "https://picsum.photos/id/10/800/600" },
              { title: "Community Outreach", desc: "Health camps and food security for vulnerable families.", img: "https://picsum.photos/id/12/800/600" }
            ].map((prog, idx) => (
              <div 
                key={idx}
                onClick={() => navigate(PageRoute.PROGRAMS)}
                className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer h-80"
              >
                <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl text-white font-bold mb-2">{prog.title}</h3>
                  <p className="text-slate-200 mb-4">{prog.desc}</p>
                  <span className="text-white text-sm font-bold underline decoration-brand-primary underline-offset-4">Learn More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;