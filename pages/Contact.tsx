import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-white">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <AnimatedText text="Get in Touch" className="text-4xl font-serif font-bold mb-6" />
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-light)' }}>
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
                className="bg-white border p-4 rounded-xl shadow-md flex items-center card-shine"
                style={{ borderColor: 'var(--border-color)'}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', delay: 0.2 + idx * 0.1 }}
              >
                <div className="p-3 rounded-xl mr-4" style={{ backgroundColor: 'var(--secondary-blue)', color: 'var(--primary-blue)'}}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="block hover:underline" style={{ color: 'var(--text-light)'}}>{item.content}</a>
                  ) : (
                    <p style={{ color: 'var(--text-light)'}}>{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          className="bg-white border p-8 md:p-10 rounded-2xl shadow-xl card-shine"
          style={{ borderColor: 'var(--border-color)'}}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}/>
            <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none" style={{ borderColor: 'var(--border-color)'}}></textarea>
            <motion.button 
              className="w-full btn-primary py-3 flex justify-center items-center"
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