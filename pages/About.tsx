import React from 'react';
import { TEAM } from '../constants';
import { Heart, Book, Users, CheckCircle, Handshake, Sun } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-20 pt-16 px-4">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            A Foundation Built on a Vision of Care
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mati Foundation is an independent, humanitarian foundation created to respond directly to the real challenges facing children.
          </p>
        </section>

        {/* Narrative Card */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-lg flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src={TEAM[0].image} // Directly using Matilda's image from constants
                alt="Founder Matilda Kashindo"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-stone-50 border border-stone-200 p-6 rounded-xl max-w-xs hidden md:block">
                <p className="text-sm font-serif italic text-slate-700">"Every child deserves not only to survive, but to thrive. Our work is to build the path for them to do so."<br />- Matilda Kashindo</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold font-serif text-slate-800">Our Founder’s Story</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-brand-primary">Matilda Kashindo</strong> is a passionate humanitarian and community advocate whose work with children and families inspired the creation of Mati Foundation. Through years of involvement in grassroots support initiatives, Matilda recognized the need for a focused, independent foundation that prioritizes education, child welfare, and sustainable empowerment.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Her vision is simple but powerful: help children not only survive, but thrive. The foundation operates independently, guided by compassion, accountability, and community-rooted solutions.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 font-serif">Our Core Values</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: "Compassion", icon: <Heart className="w-8 h-8 text-red-500" />, text: "Driven by care and empathy." },
              { title: "Integrity", icon: <CheckCircle className="w-8 h-8 text-blue-500" />, text: "Honest, ethical leadership." },
              { title: "Transparency", icon: <Sun className="w-8 h-8 text-yellow-500" />, text: "Responsible use of resources." },
              { title: "Community", icon: <Users className="w-8 h-8 text-green-500" />, text: "Local voices lead solutions." },
              { title: "Sustainability", icon: <Handshake className="w-8 h-8 text-purple-500" />, text: "Focus on long-term impact." },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-slate-500 text-sm">{val.text}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Simplified Team Section to highlight founder */}
        <section>
           <h2 className="text-3xl font-bold text-center mb-12 font-serif">Our Founder</h2>
           <div className="max-w-md mx-auto">
             <div className="bg-white p-6 rounded-2xl text-center shadow-lg transition-transform hover:scale-105">
                 <img
                   src={TEAM[0].image}
                   alt={TEAM[0].name}
                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-stone-200 shadow-md"
                 />
                 <h3 className="text-lg font-bold text-slate-800">{TEAM[0].name}</h3>
                 <p className="text-brand-primary font-bold text-xs uppercase tracking-wider mb-3">{TEAM[0].role}</p>
                 <p className="text-slate-500 text-sm">{TEAM[0].bio}</p>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;
