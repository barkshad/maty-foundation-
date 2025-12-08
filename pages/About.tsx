import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Who We Are</h1>
        <p className="text-stone-400 text-lg max-w-2xl mx-auto">Driven by compassion, guided by integrity.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">
        
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Our Mission</h2>
            <p className="text-xl font-serif text-stone-800 italic mb-8">
              "To provide a safe haven, holistic education, and community integration for orphaned and vulnerable children."
            </p>
             <h2 className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Our Vision</h2>
            <p className="text-xl font-serif text-stone-800 italic">
              "A world where every child, regardless of origin, has the foundation to build their own future."
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/id/1059/600/600" alt="Mission" className="rounded-2xl shadow-xl w-full" />
          </div>
        </section>

        {/* History Story */}
        <section>
          <h2 className="text-3xl font-bold font-serif mb-6 text-stone-900">Our Story</h2>
          <div className="prose prose-stone lg:prose-lg text-stone-600">
            <p className="mb-4">
              In 2010, Matilda Kashindo was a high school teacher who noticed that several of her students were dropping out not due to lack of ability, but lack of basic needs. Visiting their homes, she found children living in child-headed households or with aging grandparents unable to support them.
            </p>
            <p className="mb-4">
              She started by opening her own guest room to three siblings. Word spread, and the need became undeniable. With the help of the local church and initial donors, Matilda officially registered the Mati Foundation.
            </p>
            <p>
              Today, what started as a 3-bedroom house has grown into a campus with dormitories, a learning center, and a community clinic. Yet, the core value remains the same: treat every child like family.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section>
          <h2 className="text-3xl font-bold font-serif mb-10 text-center text-stone-900">Meet the Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-stone-100 shadow-md"
                />
                <h3 className="text-xl font-bold text-stone-800">{member.name}</h3>
                <p className="text-brand-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;