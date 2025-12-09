import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Whether you want to arrange a drop-off for donations, inquire about volunteering, or just say hello, we are here.
          </p>

          <div className="space-y-6">
            {[
              { icon: <MapPin size={24} />, title: "Visit / Drop-off", content: CONTACT_INFO.address },
              { icon: <Mail size={24} />, title: "Email", content: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
              { icon: <Phone size={24} />, title: "Call", content: CONTACT_INFO.displayPhone, href: `tel:${CONTACT_INFO.rawPhone}` },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-white/30 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-md flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', delay: 0.2 + idx * 0.1 }}
              >
                <div className="bg-blue-100 p-3 rounded-xl mr-4 text-brand-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-slate-600 hover:text-brand-primary block">{item.content}</a>
                  ) : (
                    <p className="text-slate-600">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          className="bg-white/30 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none placeholder:text-slate-600" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none placeholder:text-slate-600" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none placeholder:text-slate-600" />
            <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none placeholder:text-slate-600"></textarea>
            <motion.button 
              className="w-full bg-brand-accent text-white font-bold py-3 rounded-xl hover:bg-amber-600 transition-colors shadow-lg flex justify-center items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <Send size={18} className="ml-2" />
            </motion.button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;