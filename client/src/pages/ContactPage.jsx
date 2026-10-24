import { useState } from 'react';
import { sendEnquiry } from '../services/api.js';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendEnquiry(form);
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#faf5ec] min-h-screen pb-24 relative overflow-hidden">
      <div className="container pt-16 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 inline-block wavy-underline">
            Visit & Contact
          </h1>
          <p className="text-lg text-charcoal-light mt-6 max-w-2xl mx-auto">
            Have a question or want to meet our puppies? Fill out the form or visit our showroom in Downtown Dubai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Side: Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border-2 border-charcoal shadow-[4px_4px_0_#2b1d14]">
              <h2 className="text-2xl font-heading font-bold mb-6">Showroom Details</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Location</h4>
                    <p className="text-charcoal-light">Downtown Dubai, UAE</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Phone / WhatsApp</h4>
                    <a href="https://wa.me/971541676733" className="text-accent hover:underline">+971 54 167 6733</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Email</h4>
                    <p className="text-charcoal-light">hello@teddypups.ae</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Styled "Map" Placeholder */}
            <div className="bg-[#e5dfd3] rounded-3xl border-2 border-charcoal shadow-[4px_4px_0_#2b1d14] h-64 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
               <span className="text-6xl mb-2 group-hover:scale-110 transition-transform">🗺️</span>
               <p className="font-heading font-bold text-lg">Downtown Dubai</p>
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-accent font-medium text-sm hover:underline relative z-10">
                 Open in Google Maps ↗
               </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="tape-box p-8 md:p-10 bg-white">
            <h2 className="text-2xl font-heading font-bold mb-6">Send an Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2">Your Name</label>
                <input 
                  required 
                  value={form.name} 
                  onChange={e => setForm({...form, name: e.target.value})} 
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-charcoal focus:outline-none transition-colors" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Phone / WhatsApp</label>
                <input 
                  required 
                  value={form.phone} 
                  onChange={e => setForm({...form, phone: e.target.value})} 
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-charcoal focus:outline-none transition-colors" 
                  placeholder="+971 50 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input 
                  required 
                  type="email" 
                  value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})} 
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-charcoal focus:outline-none transition-colors" 
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea 
                  required 
                  rows="4" 
                  value={form.message} 
                  onChange={e => setForm({...form, message: e.target.value})} 
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-charcoal focus:outline-none transition-colors resize-none" 
                  placeholder="I'd love to know more about..."
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full text-lg py-4 mt-2" 
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
              </button>
              
              {status === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mt-4 text-sm font-medium">
                  ✅ Message sent! We will get back to you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-4 text-sm font-medium">
                  ❌ Something went wrong. Please try WhatsApp instead.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}