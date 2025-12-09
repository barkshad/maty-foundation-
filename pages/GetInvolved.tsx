import React from 'react';
import * as Lucide from 'lucide-react';
import { CONTACT_INFO, GET_INVOLVED_OPTIONS, BANK_DETAILS } from '../constants';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { PageRoute } from '../types';

interface GetInvolvedProps {
  navigate: (page: PageRoute) => void;
}

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

const BankDetailRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
    <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(13, 71, 161, 0.1)'}}>
        <span className="font-semibold" style={{ color: 'var(--text-light)'}}>{label}</span>
        <span className="font-mono text-sm">{value}</span>
    </div>
);


const GetInvolved: React.FC<GetInvolvedProps> = ({ navigate }) => {
  
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
        
        {/* Bank Donation Section */}
        <SectionWrapper className="w-full">
          <div className="bg-white border p-8 rounded-2xl shadow-lg card-shine relative overflow-hidden" style={{ borderColor: 'var(--border-color)'}}>
             <img src={sponsorInfo.image} alt={sponsorInfo.title} className="absolute inset-0 w-full h-full object-cover opacity-20"/>
            <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-2 text-center">Donate via Bank Transfer</h2>
                <p className="text-center mb-8" style={{ color: 'var(--text-light)' }}>{sponsorInfo.description}</p>
                
                <div className="bg-white border rounded-xl p-6 mb-6" style={{ backgroundColor: 'var(--secondary-blue)', borderColor: 'rgba(13, 71, 161, 0.2)'}}>
                    <h3 className="font-bold text-lg mb-4 flex items-center"><Lucide.Landmark size={20} className="mr-2" style={{ color: 'var(--primary-blue)' }}/> Bank Details</h3>
                    <div className="space-y-2">
                        <BankDetailRow label="Bank Name" value={BANK_DETAILS.bankName} />
                        <BankDetailRow label="Account Name" value={BANK_DETAILS.accountName} />
                        <BankDetailRow label="Account Number" value={BANK_DETAILS.accountNumber} />
                        <BankDetailRow label="Branch" value={BANK_DETAILS.branch} />
                        <BankDetailRow label="Swift Code" value={BANK_DETAILS.swiftCode} />
                        <BankDetailRow label="Country" value={BANK_DETAILS.country} />
                    </div>
                </div>
                
                <div className="text-center">
                    <h4 className="font-bold text-lg mb-4">How it Works</h4>
                    <div className="grid sm:grid-cols-3 gap-4 text-left">
                        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                            <span className="font-bold block mb-1" style={{ color: 'var(--primary-blue)'}}>Step 1</span>
                            <p className="text-sm" style={{ color: 'var(--text-light)'}}>Send your donation to the account details listed above.</p>
                        </div>
                         <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                            <span className="font-bold block mb-1" style={{ color: 'var(--primary-blue)'}}>Step 2</span>
                            <p className="text-sm" style={{ color: 'var(--text-light)'}}>Keep your transaction reference for your records.</p>
                        </div>
                         <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                            <span className="font-bold block mb-1" style={{ color: 'var(--primary-blue)'}}>Step 3 (Optional)</span>
                            <p className="text-sm" style={{ color: 'var(--text-light)'}}>Share your confirmation with us for documentation.</p>
                        </div>
                    </div>
                    <div className="text-xs mt-6 italic" style={{ color: 'var(--text-light)'}}>
                      <p>All donations go directly toward supporting children and community programs. For assistance or to connect with us after donating, please visit our socials page.</p>
                      <motion.button 
                        onClick={() => navigate(PageRoute.SOCIALS)}
                        className="btn-primary mt-4 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contact & Socials
                      </motion.button>
                    </div>
                </div>
            </div>
          </div>
        </SectionWrapper>
        
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
                        <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"/>
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
                <img src={deliveryInfo.image} alt={deliveryInfo.title} className="absolute inset-0 w-full h-full object-cover opacity-30"/>
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
        
        {/* Volunteer & Partner */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Volunteer */}
          <SectionWrapper className="w-full">
            <div className="bg-white border p-8 rounded-2xl shadow-lg card-shine relative overflow-hidden" style={{ borderColor: 'var(--border-color)'}}>
              <img src={volunteerInfo.image} alt={volunteerInfo.title} className="absolute inset-0 w-full h-full object-cover opacity-30"/>
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

          {/* Partner */}
           <SectionWrapper className="w-full">
               <div className="bg-white border p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center text-center card-shine relative overflow-hidden" style={{ borderColor: 'var(--border-color)'}}>
                 <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1470" alt="Partnership" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
                <div className="relative z-10">
                    <Lucide.Handshake className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--primary-blue)' }}/>
                    <h2 className="text-3xl font-serif font-bold mb-2">Partner With Us</h2>
                    <p className="mb-6" style={{ color: 'var(--text-light)' }}>Collaborate with Mati Foundation to amplify impact and create sustainable change in our communities.</p>
                     <motion.a 
                        href={`mailto:${CONTACT_INFO.email}`} 
                        className="btn-primary inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        Contact for Partnerships
                    </motion.a>
                </div>
              </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;