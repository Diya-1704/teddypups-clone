import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTestimonials } from '../services/api.js';

export default function HappyFamiliesPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials().then(setTestimonials).catch(console.error);
  }, []);

  return (
    <div className="bg-[#faf5ec] min-h-screen pb-24 overflow-hidden relative">
      
      {/* Background Doodles */}
      <div className="absolute top-40 left-10 text-4xl text-gray-300 opacity-50">✨</div>
      <div className="absolute top-80 right-20 text-4xl text-gray-300 opacity-50">💖</div>
      <div className="absolute bottom-40 left-20 text-4xl text-gray-300 opacity-50">🐾</div>

      <div className="container pt-16 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 inline-block wavy-underline">
            Happy Families
          </h1>
          <p className="text-lg text-charcoal-light mt-6 leading-relaxed">
            We are truly honored to see our puppies become cherished members of loving families across Dubai and the world. Here are some of the beautiful moments they've shared with us.
          </p>
        </div>

        {/* Testimonials Grid (Scrapbook Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {testimonials.map((t, index) => {
            // Alternate styles for a scrapbook feel
            const isEven = index % 2 === 0;
            const rotation = isEven ? 'rotate-2' : '-rotate-2';
            const shapeClass = isEven ? 'puppy-blob' : 'rounded-3xl border-4 border-charcoal shadow-[4px_4px_0_#2b1d14]';

            return (
              <div 
                key={t.id} 
                className={`bg-white p-6 pb-8 tape-box ${rotation} hover:rotate-0 transition-transform duration-300 relative`}
              >
                {/* Little decorative heart tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">💖</div>

                <div className="flex flex-col items-center text-center">
                  {/* Family Image */}
                  <div className="w-40 h-40 mb-6">
                    <img 
                      src={t.image_url} 
                      alt={t.family_name} 
                      className={`w-full h-full object-cover bg-gray-200 ${shapeClass}`}
                    />
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <span className="text-4xl text-gray-300 font-serif leading-none block mb-2">"</span>
                    <p className="text-charcoal-light italic text-base leading-relaxed">
                      {t.text}
                    </p>
                  </div>

                  {/* Family Name */}
                  <h3 className="font-heading font-bold text-xl text-charcoal mt-auto">
                    — {t.family_name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center bg-[#f5ebd9] p-12 rounded-3xl border-4 border-charcoal shadow-[6px_6px_0_#2b1d14] max-w-4xl mx-auto relative">
           <div className="absolute -top-6 left-10 text-4xl">🌟</div>
           <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
             Ready to start your own story?
           </h2>
           <p className="text-lg text-charcoal-light mb-8 max-w-xl mx-auto">
             Join our family of happy pet parents. Find your perfect companion today.
           </p>
           <Link to="/puppies" className="btn-primary inline-block">
             View Available Puppies
           </Link>
        </div>
      </div>
    </div>
  );
}