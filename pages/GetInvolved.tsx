import React from 'react';
import { Shirt, Book, Droplets, Utensils, Truck, Handshake } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const SectionWrapper: React.FC<{ className?: string, children: React.ReactNode }> = ({ children, className = '' }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
    className={className}
  >
    {children}
  </motion.section>
);

const GetInvolved: React.FC = () => {
  
  const itemCategories = [
    { id: 'clothes', label: 'Clothes & Shoes', icon: <Shirt size={28}/>, desc: 'New or gently used for all ages.' },
    { id: 'books', label: 'School Supplies', icon: <Book size={28}/>, desc: 'Books, pens, and notebooks.' },
    { id: 'hygiene', label: 'Hygiene Kits', icon: <Droplets size={28}/>, desc: 'Soap, toothpaste, sanitary items.' },
    { id: 'food', label: 'Food Items', icon: <Utensils size={28}/>, desc: 'Non-perishable staples.' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-24">
        
        <SectionWrapper className="text-center">
          <AnimatedText text="How You Can Support" className="text-4xl md:text-5xl font-serif font-bold mb-4" />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-light)' }}>Your support helps provide education, food, and care to children who need it most.</p>
        </SectionWrapper>

        {/* Item Donations Section */}
        <SectionWrapper>
            <h2 className="text-3xl font-serif font-bold mb-2 text-center">Donate Items</h2>
            <p className="text-center mb-12" style={{ color: 'var(--text-light)' }}>We gratefully accept items to support the children's daily needs and education.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {itemCategories.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="bg-white border p-6 rounded-2xl text-center shadow-lg card-shine"
                  style={{ borderColor: 'var(--border-color)'}}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, delay: idx * 0.1 }}
                >
                  <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-sm" style={{ backgroundColor: 'var(--secondary-blue)', color: 'var(--primary-blue)'}}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.label}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-light)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white border p-6 rounded-2xl shadow-md" style={{ borderColor: 'var(--border-color)'}}>
               <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                 <Truck className="w-12 h-12 mb-4 md:mb-0 md:mr-6 flex-shrink-0" style={{ color: 'var(--primary-blue)'}} />
                 <div>
                   <h4 className="font-bold text-xl">How to Deliver Items</h4>
                   <p style={{ color: 'var(--text-light)' }}>
                     Please drop off items at our center or call us to arrange a pickup for larger contributions.
                   </p>
                   <p className="mt-2">
                     <span className="font-bold">{CONTACT_INFO.address}</span> | <a href={`tel:${CONTACT_INFO.rawPhone}`} className="font-bold hover:underline" style={{ color: 'var(--primary-blue)'}}>{CONTACT_INFO.displayPhone}</a>
                   </p>
                 </div>
               </div>
            </div>
        </SectionWrapper>

        {/* Split Section for Volunteer & Financial */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Volunteer */}
          <SectionWrapper className="w-full">
            <h2 className="text-3xl font-serif font-bold mb-2 text-center">Volunteer Your Time</h2>
            <p className="text-center mb-8" style={{ color: 'var(--text-light)' }}>Join us in making a difference through skills, time, or community outreach.</p>
            <div className="bg-white border p-8 rounded-2xl shadow-lg card-shine" style={{ borderColor: 'var(--border-color)'}}>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                <textarea rows={3} placeholder="How would you like to help? (e.g., tutoring, events)" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}></textarea>
                <motion.button 
                  className="w-full btn-primary py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join as a Volunteer
                </motion.button>
              </form>
            </div>
          </SectionWrapper>

          {/* Financial */}
          <SectionWrapper className="w-full">
             <h2 className="text-3xl font-serif font-bold mb-2 text-center">Sponsor or Donate</h2>
             <p className="text-center mb-8" style={{ color: 'var(--text-light)' }}>Sponsor a child’s education or make a general donation.</p>
              <div className="bg-white border p-8 rounded-2xl shadow-lg space-y-6 card-shine" style={{ borderColor: 'var(--border-color)'}}>
                
                <div>
                  <h3 className="text-xl font-bold text-center mb-4">Make a Donation</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['25', '50', '100'].map((amt) => (
                      <motion.button 
                        key={amt} 
                        className="py-3 rounded-xl font-bold text-lg transition-all border-2"
                        style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--secondary-blue)', color: 'var(--primary-blue)' }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ${amt}
                      </motion.button>
                    ))}
                  </div>
                  <input 
                     type="number" 
                     className="w-full px-4 py-3 rounded-xl border bg-gray-50 mb-4 focus:ring-2"
                     style={{ borderColor: 'var(--border-color)'}}
                     placeholder="Custom Amount"
                  />
                  <motion.button 
                    className="w-full btn-primary py-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Donate Securely
                  </motion.button>
                </div>

                <div className="border-t pt-6 text-center" style={{ borderColor: 'var(--border-color)'}}>
                    <Handshake className="w-10 h-10 mx-auto mb-2" style={{ color: 'var(--primary-blue)' }}/>
                    <h3 className="text-xl font-bold">Partner With Us</h3>
                    <p className="mb-3 text-sm" style={{ color: 'var(--text-light)' }}>Collaborate with Mati Foundation to amplify impact.</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold hover:underline" style={{ color: 'var(--primary-blue)' }}>Contact Us for Partnerships</a>
                </div>
              </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;