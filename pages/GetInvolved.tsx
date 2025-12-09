import React from 'react';
import { Heart, Shirt, Book, DollarSign, Truck, Droplets, Utensils, Handshake } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const GetInvolved: React.FC = () => {
  
  const itemCategories = [
    { id: 'clothes', label: 'Clothes & Shoes', icon: <Shirt size={28}/>, desc: 'New or gently used for all ages.' },
    { id: 'books', label: 'School Supplies', icon: <Book size={28}/>, desc: 'Books, pens, and notebooks.' },
    { id: 'hygiene', label: 'Hygiene Kits', icon: <Droplets size={28}/>, desc: 'Soap, toothpaste, sanitary items.' },
    { id: 'food', label: 'Food Items', icon: <Utensils size={28}/>, desc: 'Non-perishable staples.' },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">How You Can Support</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Your support helps provide education, food, and care to children who need it most.</p>
        </div>

        {/* Item Donations Section */}
        <section>
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-2 text-center">Donate Items</h2>
            <p className="text-center text-slate-500 mb-10">We gratefully accept items to support the children's daily needs and education.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {itemCategories.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="mx-auto w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-brand-primary shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{item.label}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-t-4 border-brand-primary shadow-md">
               <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                 <Truck className="text-brand-primary w-12 h-12 mb-4 md:mb-0 md:mr-6 flex-shrink-0" />
                 <div>
                   <h4 className="font-bold text-slate-800 text-xl">How to Deliver Items</h4>
                   <p className="text-slate-600">
                     Please drop off items at our center or call us to arrange a pickup for larger contributions.
                   </p>
                   <p className="mt-2">
                     <span className="font-bold text-slate-700">{CONTACT_INFO.address}</span> | <a href={`tel:${CONTACT_INFO.rawPhone}`} className="font-bold text-brand-primary hover:underline">{CONTACT_INFO.displayPhone}</a>
                   </p>
                 </div>
               </div>
            </div>
        </section>

        {/* Split Section for Volunteer & Financial */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Volunteer */}
          <div className="w-full">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-2 text-center">Volunteer Your Time</h2>
            <p className="text-center text-slate-500 mb-8">Join us in making a difference through skills, time, or community outreach.</p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-secondary outline-none" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-secondary outline-none" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-secondary outline-none" />
                <textarea rows={3} placeholder="How would you like to help? (e.g., tutoring, events)" className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-secondary outline-none"></textarea>
                <button className="w-full bg-brand-secondary text-white py-3 rounded-xl font-bold hover:bg-teal-800 transition-colors shadow-md">
                  Join as a Volunteer
                </button>
              </form>
            </div>
          </div>

          {/* Financial */}
          <div className="w-full">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-2 text-center">Sponsor or Donate</h2>
             <p className="text-center text-slate-500 mb-8">Sponsor a child’s education or make a general donation.</p>
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                
                <div>
                  <h3 className="text-xl font-bold text-center text-slate-700 mb-4">Make a Donation</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['25', '50', '100'].map((amt) => (
                      <button 
                        key={amt} 
                        className="py-3 rounded-xl font-bold text-lg transition-all border-2 border-stone-200 bg-stone-50 text-slate-600 hover:border-brand-primary hover:bg-blue-50 hover:text-brand-primary focus:border-brand-primary focus:bg-blue-50 focus:text-brand-primary"
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <input 
                     type="number" 
                     className="w-full px-4 py-3 rounded-xl border border-stone-300 mb-4 focus:ring-2 focus:ring-brand-primary"
                     placeholder="Custom Amount"
                  />
                  <button className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
                    Donate Securely
                  </button>
                </div>

                <div className="border-t border-stone-200 pt-6 text-center">
                    <Handshake className="text-brand-secondary w-10 h-10 mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-slate-700">Partner With Us</h3>
                    <p className="text-slate-500 mb-3 text-sm">Collaborate with Mati Foundation to amplify impact.</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-primary font-bold hover:underline">Contact Us for Partnerships</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
