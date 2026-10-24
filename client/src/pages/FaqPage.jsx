import { useEffect, useState } from 'react';
import { fetchFaqs } from '../services/api.js';

export default function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchFaqs().then(setFaqs).catch(console.error);
  }, []);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#faf5ec] min-h-screen pb-24 relative overflow-hidden">
      {/* Doodles */}
      <div className="absolute top-32 left-10 text-5xl text-gray-200 opacity-60 rotate-12">?</div>
      <div className="absolute bottom-40 right-12 text-5xl text-gray-200 opacity-60 -rotate-12">?</div>

      <div className="container pt-16 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 inline-block wavy-underline">
            Questions & Answers
          </h1>
          <p className="text-lg text-charcoal-light mt-6">
            Find answers to the most common questions about our puppies, health guarantees, and delivery process.
          </p>
        </div>

        {/* Search Box */}
        <div className="tape-box p-2 mb-12 max-w-2xl mx-auto flex items-center">
          <span className="text-2xl pl-4 pr-2">🔍</span>
          <input
            type="search"
            placeholder="Search FAQs... (e.g., vaccine, delivery)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent p-4 outline-none font-sans text-lg text-charcoal placeholder-charcoal-light/50"
          />
        </div>

        {/* FAQ List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-20">
             <span className="text-6xl mb-4 block">🐶💭</span>
             <p className="text-xl font-heading font-bold text-charcoal-light">No results found for "{search}"</p>
             <p className="text-charcoal-light">Try asking us directly on WhatsApp!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <details key={faq.id} className="bg-white border-2 border-charcoal rounded-2xl shadow-[4px_4px_0_#2b1d14] group cursor-pointer overflow-hidden">
                <summary className="p-6 font-heading font-bold text-xl flex justify-between items-center list-none">
                  {faq.question}
                  <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="px-6 pb-6 text-charcoal-light border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        )}

        {/* Help CTA */}
        <div className="mt-16 text-center bg-[#f5d691] p-10 rounded-3xl border-4 border-charcoal shadow-[6px_6px_0_#2b1d14] relative">
           <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-4xl">💬</div>
           <h3 className="text-2xl font-heading font-bold mb-3">Still have questions?</h3>
           <p className="text-charcoal-light mb-6">Our team is ready to help you find your perfect puppy.</p>
           <a href="https://wa.me/971541676733" className="btn-primary inline-block">
             Chat with us on WhatsApp
           </a>
        </div>
      </div>
    </div>
  );
}