import React from 'react';
import * as Lucide from 'lucide-react';
import { CONTACT_INFO, CONTACT_METHODS } from '../constants';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const Contact: React.FC = () => {
  return (
    <div className="bg-white pb-24">
       <div className="relative py-24 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1470" alt="Contact us" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="relative z-10"
        >
          <AnimatedText text="Get in Touch" className="text-4xl font-serif font-bold mb-6 text-white" />
          <p className="text-lg max-w-2xl mx-auto text-slate-100">
            Whether you want to arrange a drop-off for donations, inquire about volunteering, or just say hello, we are here.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Contact Info */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            >
            <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
                {CONTACT_METHODS.map((item, idx) => {
                // @ts-ignore
                const Icon = Lucide[item.icon];
                return (
                <motion.div
                    key={item.title}
                    className="bg-white border rounded-2xl shadow-lg flex items-center card-shine relative overflow-hidden group p-6"
                    style={{ borderColor: 'var(--border-color)'}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', delay: 0.4 + idx * 0.15 }}
                >
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative z-10 flex items-center w-full">
                    <div className="p-4 rounded-xl mr-5" style={{ backgroundColor: 'var(--secondary-blue)', color: 'var(--primary-blue)'}}>
                        {Icon && <Icon size={28} />}
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        {item.href ? (
                        <a href={item.href} className="block hover:underline" style={{ color: 'var(--text-light)'}}>{item.content}</a>
                        ) : (
                        <p style={{ color: 'var(--text-light)'}}>{item.content}</p>
                        )}
                    </div>
                    </div>
                </motion.div>
                )})}
            </div>
            </motion.div>

            {/* Form */}
            <motion.div 
            className="bg-white border p-8 md:p-10 rounded-2xl shadow-xl card-shine relative overflow-hidden"
            style={{ borderColor: 'var(--border-color)'}}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
            >
            <img src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80&w=800" alt="contact background" className="absolute inset-0 w-full h-full object-cover opacity-25" />
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white/70 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/70 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                </div>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-white/70 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
                <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 bg-white/70 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}></textarea>
                <motion.button 
                    className="w-full btn-primary py-3 flex justify-center items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Send Message <Lucide.Send size={18} className="ml-2" />
                </motion.button>
                </form>
            </div>
            </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
             className="bg-white border rounded-2xl shadow-lg p-6 text-center"
             style={{ borderColor: 'var(--border-color)'}}
        >
            <h3 className="text-2xl font-serif font-bold mb-4">Our Location</h3>
             <div className="aspect-video w-full rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                <div className="text-center p-4">
                    <Lucide.MapPin size={48} className="mx-auto mb-4" style={{ color: 'var(--primary-blue)'}} />
                    <p className="font-bold" style={{ color: 'var(--text-light)'}}>Exact map location will be added soon.</p>
                    <p className="text-sm" style={{ color: 'var(--text-light)'}}>{CONTACT_INFO.address}</p>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;