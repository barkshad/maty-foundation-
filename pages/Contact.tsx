import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-6">Get in Touch</h1>
          <p className="text-stone-600 text-lg mb-10">
            We love to hear from our community. Whether you have a question about donations, want to visit, or just want to say hi.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-brand-primary/10 p-3 rounded-lg mr-4 text-brand-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-stone-800">Visit Us</h3>
                <p className="text-stone-600">123 Hope Lane,<br/>Springfield, SP 12345</p>
                <p className="text-xs text-stone-400 mt-1">Visitors welcome Mon-Fri, 10am - 4pm</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-primary/10 p-3 rounded-lg mr-4 text-brand-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-stone-800">Email</h3>
                <p className="text-stone-600">hello@matifoundation.org</p>
                <p className="text-stone-600">volunteer@matifoundation.org</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-primary/10 p-3 rounded-lg mr-4 text-brand-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-stone-800">Call</h3>
                <p className="text-stone-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-stone-800">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-brand-primary" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-brand-primary" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-brand-primary" />
            <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-brand-primary"></textarea>
            <button className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;