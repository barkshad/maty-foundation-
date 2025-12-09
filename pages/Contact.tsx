import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Whether you want to arrange a drop-off for donations, inquire about volunteering, or just say hello, we are here.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl mr-4 text-brand-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Visit / Drop-off</h3>
                <p className="text-slate-600">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md flex items-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl mr-4 text-brand-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Email</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 hover:text-brand-primary block">{CONTACT_INFO.email}</a>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md flex items-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl mr-4 text-brand-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Call</h3>
                <a href={`tel:${CONTACT_INFO.rawPhone}`} className="text-slate-600 hover:text-brand-primary block">{CONTACT_INFO.displayPhone}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none" />
            <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"></textarea>
            <button className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg flex justify-center items-center">
              Send Message <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
