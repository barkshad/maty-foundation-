import React from 'react';
import * as Lucide from 'lucide-react';
import { CONTACT_INFO, GET_INVOLVED_OPTIONS } from '../constants';
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
  
  const { itemCategories, deliveryInfo, volunteerInfo, sponsorInfo } = GET_INVOLVED_OPTIONS;

  return (
    <div className="min-h-screen bg-white">
      <div className="relative py-24 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1618143099239-c8b519a86a23?auto=format&fit=crop&q=80&w=1470" alt="Volunteers working together" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="relative z-10"
        >
            <AnimatedText text="How You Can Support" className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white" />
            <p className="text-lg max-w-2xl mx-auto text-slate-100">Your support helps provide education, food, and care to children who need it most.</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto space-y-24 py-24 px-4">
        {/* Item Donations Section */}
        <SectionWrapper>
            <h2 className="text-3xl font-serif font-bold mb-2 text-center">Donate Items</h2>
            <p className="text-center mb-12" style={{ color: 'var(--text-light)' }}>We gratefully accept items to support the children's daily needs and education.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {itemCategories.map((item, idx) => {
                // @ts-ignore
                const Icon = Lucide[item.icon];
                return (
                    <motion.div
                    key={item.id}
                    className="bg-white border p-6 rounded-2xl text-center shadow-lg card-shine group overflow-hidden relative"
                    style={{ borderColor: 'var(--border-color)'}}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100, delay: idx * 0.1 }}
                    >
                        <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"/>
                        <div className="relative z-10">
                            <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-sm" style={{ backgroundColor: 'var(--secondary-blue)', color: 'var(--primary-blue)'}}>
                                {Icon && <Icon size={28}/>}
                            </div>
                            <h3 className="text-xl font-bold mb-1">{item.label}</h3>
                            <p className="text-sm" style={{ color: 'var(--text-light)' }}>{item.desc}</p>
                        </div>
                    </motion.div>
                )
              })}
            </div>
            
            <div className="bg-white border p-6 rounded-2xl shadow-md relative overflow-hidden">
                <img src={deliveryInfo.image} alt={deliveryInfo.title} className="absolute inset-0 w-full h-full object-cover opacity-20"/>
               <div className="flex flex-col md:flex-row items-center text-center md:text-left relative z-10">
                 {/* @ts-ignore */}
                 {Lucide[deliveryInfo.icon] && React.createElement(Lucide[deliveryInfo.icon], {className:"w-12 h-12 mb-4 md:mb-0 md:mr-6 flex-shrink-0", style:{ color: 'var(--primary-blue)'}})}
                 <div>
                   <h4 className="font-bold text-xl">{deliveryInfo.title}</h4>
                   <p style={{ color: 'var(--text-light)' }}>
                     {deliveryInfo.description}
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
            <div className="bg-white border p-8 rounded-2xl shadow-lg card-shine relative overflow-hidden" style={{ borderColor: 'var(--border-color)'}}>
              <img src={volunteerInfo.image} alt={volunteerInfo.title} className="absolute inset-0 w-full h-full object-cover opacity-20"/>
              <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-2 text-center">{volunteerInfo.title}</h2>
                <p className="text-center mb-8" style={{ color: 'var(--text-light)' }}>{volunteerInfo.description}</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white/50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white/50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white/50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                  <textarea rows={3} placeholder="How would you like to help? (e.g., tutoring, events)" className="w-full px-4 py-3 bg-white/50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}></textarea>
                  <motion.button 
                    className="w-full btn-primary py-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join as a Volunteer
                  </motion.button>
                </form>
              </div>
            </div>
          </SectionWrapper>

          {/* Financial */}
          <SectionWrapper className="w-full">
              <div className="bg-white border p-8 rounded-2xl shadow-lg space-y-6 card-shine relative overflow-hidden" style={{ borderColor: 'var(--border-color)'}}>
                 <img src={sponsorInfo.image} alt={sponsorInfo.title} className="absolute inset-0 w-full h-full object-cover opacity-20"/>
                <div className="relative z-10">
                    <h2 className="text-3xl font-serif font-bold mb-2 text-center">{sponsorInfo.title}</h2>
                    <p className="text-center mb-8" style={{ color: 'var(--text-light)' }}>{sponsorInfo.description}</p>
                    
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
                        className="w-full px-4 py-3 rounded-xl border bg-white/50 mb-4 focus:ring-2"
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
                        <Lucide.Handshake className="w-10 h-10 mx-auto mb-2" style={{ color: 'var(--primary-blue)' }}/>
                        <h3 className="text-xl font-bold">Partner With Us</h3>
                        <p className="mb-3 text-sm" style={{ color: 'var(--text-light)' }}>Collaborate with Mati Foundation to amplify impact.</p>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold hover:underline" style={{ color: 'var(--primary-blue)' }}>Contact Us for Partnerships</a>
                    </div>
                </div>
              </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
