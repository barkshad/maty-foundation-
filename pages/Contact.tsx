import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            We love to hear from our community. Whether you have a question about donations, want to visit, or just want to say hi.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-lg mr-4 text-brand-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Visit Us</h3>
                <p className="text-slate-600">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-lg mr-4 text-brand-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Email</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 hover:text-brand-primary block">{CONTACT_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-lg mr-4 text-brand-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Call</h3>
                <a href={`tel:${CONTACT_INFO.rawPhone}`} className="text-slate-600 hover:text-brand-primary block">{CONTACT_INFO.displayPhone}</a>
              </div>
            </div>
            
             <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4 text-green-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">WhatsApp</h3>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.rawPhone}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-green-600 block"
                >
                  Chat with us directly
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-100">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" />
            <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"></textarea>
            <button className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex justify-center items-center">
              Send Message <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;