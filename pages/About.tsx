import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-brand-dark py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Who We Are</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Driven by compassion, guided by integrity.</p>
      </section>

      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10 space-y-16">
        
        {/* Mission & Vision Cards */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-primary">
            <h2 className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-4">Our Mission</h2>
            <p className="text-xl font-serif text-slate-800 italic leading-relaxed">
              "To provide a safe haven, holistic education, and community integration for orphaned and vulnerable children."
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-secondary">
             <h2 className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-4">Our Vision</h2>
            <p className="text-xl font-serif text-slate-800 italic leading-relaxed">
              "A world where every child, regardless of origin, has the foundation to build their own future."
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-white p-8 md:p-12 rounded-xl shadow-md">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">Our Story</h2>
                <div className="prose prose-slate text-slate-600 leading-relaxed space-y-4">
                  <p>
                    In 2010, <strong className="text-brand-primary">Matilda Kashindo</strong> was a high school teacher who noticed that several of her students were dropping out not due to lack of ability, but lack of basic needs. Visiting their homes, she found children living in child-headed households or with aging grandparents unable to support them.
                  </p>
                  <p>
                    She started by opening her own guest room to three siblings. Word spread, and the need became undeniable. With the help of the local church and initial donors, Matilda officially registered the Mati Foundation.
                  </p>
                  <p>
                    Today, what started as a 3-bedroom house has grown into a campus with dormitories, a learning center, and a community clinic. Yet, the core value remains the same: treat every child like family.
                  </p>
                </div>
             </div>
             <div>
                {/* Image: Teacher/Mentor with child */}
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" 
                  alt="Matilda Kashindo teaching" 
                  className="rounded-lg shadow-xl" 
                />
                <p className="mt-4 text-center text-sm text-slate-500 italic">Founder Matilda Kashindo with the first group of graduates.</p>
             </div>
           </div>
        </section>

        {/* Team Grid */}
        <section>
          <h2 className="text-3xl font-bold font-serif mb-10 text-center text-slate-900">Meet the Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border border-stone-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-stone-100"
                />
                <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                <p className="text-brand-primary font-bold text-xs uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;