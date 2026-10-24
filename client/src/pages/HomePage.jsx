import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPuppies } from '../services/api.js';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const [puppies, setPuppies] = useState([]);
  
  // Scroll Animation Hook for the walking dog
  const { scrollYProgress } = useScroll();
  // Moves the dog from left (-10%) to right (110%) as the page scrolls
  const dogX = useTransform(scrollYProgress, [0, 1], ['-10vw', '110vw']);

  useEffect(() => {
    fetchPuppies({ status: 'available' }).then(data => setPuppies(data.slice(0, 4))).catch(console.error);
  }, []);

  return (
    <div className="relative">
      
      {/* 🐕 MOVING DOG ON SCROLL */}
      <motion.div 
        style={{ x: dogX }} 
        className="fixed bottom-0 left-0 z-50 text-5xl md:text-6xl pointer-events-none drop-shadow-lg"
      >
        🐕
      </motion.div>

      {/* 🏠 HERO SECTION */}
      <section className="pt-20 pb-32 bg-cream relative overflow-hidden">
        <div className="container text-center max-w-4xl">
          <p className="text-accent font-heading italic text-xl mb-4">every puppy is family</p>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-charcoal mb-6 leading-tight">
            Premium teacup<br/>puppies in Dubai
          </h1>
          <p className="text-lg text-charcoal-light mb-8 max-w-xl mx-auto">
            Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link to="/puppies" className="btn-primary">View available puppies</Link>
            <a href="https://wa.me/971541676733" className="btn-outline" target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
          </div>

          {/* Arch Images (Hero Bottom) */}
          <div className="flex justify-center items-end gap-2 md:gap-4 h-48 md:h-64 relative z-10">
            <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=300&q=80" className="arch-image w-24 h-32 md:w-40 md:h-56 border-4 border-charcoal shadow-lg" alt="Puppy" />
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300&q=80" className="arch-image w-28 h-40 md:w-48 md:h-64 border-4 border-charcoal shadow-lg -mb-4" alt="Puppy" />
            <div className="text-6xl md:text-8xl -mb-4 z-20">🐶</div>
            <img src="https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=300&q=80" className="arch-image w-28 h-40 md:w-48 md:h-64 border-4 border-charcoal shadow-lg -mb-4" alt="Puppy" />
            <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&q=80" className="arch-image w-24 h-32 md:w-40 md:h-56 border-4 border-charcoal shadow-lg" alt="Puppy" />
          </div>
        </div>
        {/* Scalloped Divider */}
        <div className="absolute bottom-0 w-full h-8 scallop-bottom z-0"></div>
      </section>

      {/* 🚪 MEET THE PUPS (Wooden Doors) */}
      <section className="section-padding bg-cream-dark border-b-8 border-[#d8c3a5]">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-heading font-black mb-2">Meet the pups</h2>
              <p className="text-lg text-charcoal-light">Real puppies, real photos, looking for their families right now.</p>
            </div>
            <Link to="/puppies" className="btn-primary hidden md:block">See all available puppies</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {puppies.map((pup, index) => {
              // Different door colors for variety
              const doorColors = ['bg-[#5c3a21]', 'bg-[#8b5a2b]', 'bg-[#c88c4d]', 'bg-[#a66b3d]'];
              return (
                <Link to={`/puppies/${pup.slug}`} key={pup.id} className="group flex flex-col items-center">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-heading font-bold">{pup.name}</h3>
                    <p className="text-sm text-charcoal-light">{pup.breed}, {pup.gender}, {pup.age}</p>
                  </div>
                  {/* The Door Shape */}
                  <div className={`relative w-40 h-64 md:w-48 md:h-80 rounded-t-[100px] border-4 border-charcoal shadow-xl overflow-hidden ${doorColors[index % 4]} group-hover:-translate-y-2 transition-transform duration-300`}>
                    {/* Door details */}
                    <div className="absolute inset-2 border border-charcoal/30 rounded-t-[90px]"></div>
                    <div className="absolute top-1/2 right-4 w-3 h-3 bg-yellow-600 rounded-full border border-charcoal"></div>
                    {/* Status tag */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-cream text-charcoal text-xs font-bold px-3 py-1 rounded-full border border-charcoal shadow-sm rotate-[-5deg]">
                      Available
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/puppies" className="btn-primary">See all available puppies</Link>
          </div>
        </div>
      </section>

      {/* 🛣️ TWO WAYS TO GET A PUPPY */}
      <section className="section-padding bg-[#f5d691] relative">
        <div className="container text-center mb-16 relative">
           <h2 className="text-4xl md:text-6xl font-heading font-black text-charcoal mb-12">Two ways to get a puppy</h2>
           
           {/* Street Sign */}
           <div className="flex justify-center items-center gap-0 mb-16">
              <div className="bg-[#b57c46] text-white font-heading font-bold text-xl md:text-3xl px-6 py-3 border-4 border-charcoal shadow-lg transform -skew-x-12 relative z-10">Puppies in Dubai</div>
              <div className="w-6 h-32 bg-[#6b4c2a] border-y-4 border-charcoal absolute top-16 z-0"></div>
              <div className="bg-[#c49a6c] text-charcoal font-heading font-bold text-xl md:text-3xl px-6 py-3 border-4 border-charcoal shadow-lg transform skew-x-12 relative z-10">Imported for you</div>
           </div>

           <div className="grid md:grid-cols-2 gap-12 text-left relative z-10">
              {/* Left: Local */}
              <div className="bg-[#faeed6] p-8 rounded-3xl border-4 border-[#c49a6c] shadow-xl flex flex-col items-center text-center">
                 <div className="w-48 h-64 bg-charcoal rounded-t-full mb-6 relative overflow-hidden border-4 border-white shadow-inner">
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80" alt="Local puppy" className="w-full h-full object-cover" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold mb-2">In our showroom</h3>
                 <p className="text-charcoal-light">See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
              </div>

              {/* Right: Imported */}
              <div className="bg-[#faeed6] p-8 rounded-3xl border-4 border-[#c49a6c] shadow-xl flex flex-col items-center text-center">
                 <div className="w-full h-64 mb-6 relative flex justify-center items-center">
                    {/* Plane Illustration (using emoji for simplicity) */}
                    <div className="text-8xl animate-bounce">✈️</div>
                 </div>
                 <h3 className="text-2xl font-heading font-bold mb-2">From Korea to Dubai</h3>
                 <p className="text-charcoal-light">Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p>
              </div>
           </div>
        </div>
        {/* Scalloped Divider */}
        <div className="absolute bottom-0 w-full h-8 scallop-bottom z-0"></div>
      </section>

      {/* 📱 YOUR PUPPY JOURNEY (Phone Mockup) */}
      <section className="section-padding bg-cream">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">Your puppy journey</h2>
            <p className="text-lg text-charcoal-light mb-8">
              A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold">Choose your breed</h3>
                  <p className="text-charcoal-light">Select your preferred breed or tell us what you're looking for.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center font-bold text-xl shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold">Get photos & details</h3>
                  <p className="text-charcoal-light">Our team will share real photos and health details on WhatsApp.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center font-bold text-xl shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold">Secure & safe delivery</h3>
                  <p className="text-charcoal-light">We ensure your puppy reaches you safely and stress-free.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
             <div className="w-80 h-[600px] bg-charcoal rounded-[3rem] p-3 shadow-2xl relative border-4 border-gray-700">
                <div className="w-full h-full bg-[#faf5ec] rounded-[2.5rem] overflow-hidden flex flex-col relative">
                   {/* WhatsApp Header */}
                   <div className="bg-charcoal text-white p-4 flex items-center gap-3">
                     <div className="w-8 h-8 bg-accent rounded-full text-center flex items-center justify-center">🐶</div>
                     <div>
                       <p className="text-sm font-bold">TeddyPups U.A.E.</p>
                       <p className="text-xs text-gray-400">online</p>
                     </div>
                   </div>
                   {/* Chat Area */}
                   <div className="flex-1 p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover opacity-90">
                      <div className="bg-white p-3 rounded-xl rounded-tl-none shadow text-sm mb-4 w-4/5">
                        Hi TeddyPups! I'd love to know more about your puppies.
                      </div>
                      <div className="bg-[#d9fdd3] p-3 rounded-xl rounded-tr-none shadow text-sm ml-auto w-4/5 mb-4">
                        Select your preferred breed or tell us what you're looking for. We'll guide you!
                        <div className="flex flex-wrap gap-2 mt-2">
                           <span className="border border-green-500 text-green-700 px-2 py-1 rounded-md text-xs">Maltipoo</span>
                           <span className="border border-green-500 text-green-700 px-2 py-1 rounded-md text-xs">Pomeranian</span>
                           <span className="border border-green-500 text-green-700 px-2 py-1 rounded-md text-xs">Poodle</span>
                        </div>
                      </div>
                   </div>
                   {/* Chat Input */}
                   <div className="bg-gray-100 p-3 flex gap-2 items-center">
                     <div className="flex-1 bg-white h-10 rounded-full shadow-inner"></div>
                     <div className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center text-white">➤</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}