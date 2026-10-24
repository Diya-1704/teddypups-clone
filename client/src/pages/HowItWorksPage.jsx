import { Link } from 'react-router-dom';

export default function HowItWorksPage() {
  return (
    <div className="bg-[#faf5ec] min-h-screen pb-24 relative overflow-hidden">
      {/* Doodles */}
      <div className="absolute top-40 right-10 text-4xl text-gray-300 opacity-50">✨</div>
      <div className="absolute top-96 left-10 text-4xl text-gray-300 opacity-50">🐾</div>

      <div className="container pt-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 inline-block wavy-underline">
            How it works
          </h1>
          <p className="text-lg text-charcoal-light mt-6 leading-relaxed">
            A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
          </p>
        </div>

        {/* Two Ways Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border-4 border-charcoal shadow-[6px_6px_0_#2b1d14] relative">
            <div className="absolute -top-4 -right-4 text-4xl">📍</div>
            <h3 className="text-3xl font-heading font-bold mb-4">Meet a puppy in person</h3>
            <p className="text-charcoal-light mb-6">
              Visit our Downtown Dubai showroom to spend time with our locally available puppies. See them, love them, and take them home the same day.
            </p>
            <Link to="/puppies" className="text-accent font-bold hover:underline">
              View local puppies →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border-4 border-charcoal shadow-[6px_6px_0_#2b1d14] relative">
            <div className="absolute -top-4 -right-4 text-4xl">✈️</div>
            <h3 className="text-3xl font-heading font-bold mb-4">Order upon request</h3>
            <p className="text-charcoal-light mb-6">
              Choose from our imported Korean teacup breeds. We handle the entire process from the breeder to your doorstep in Dubai.
            </p>
            <Link to="/puppies" className="text-accent font-bold hover:underline">
              See imported puppies →
            </Link>
          </div>
        </div>

        {/* Step-by-Step Timeline */}
        <div className="max-w-3xl mx-auto mb-20 relative">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Your journey with us</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-charcoal/20">
            
            {[
              { step: '1', title: 'Choose your breed', desc: 'Select your preferred breed or tell us what you are looking for. We will guide you based on availability.' },
              { step: '2', title: 'Get photos & details', desc: 'Our team shares real photos, health records, and all necessary details directly on WhatsApp.' },
              { step: '3', title: 'Reservation', desc: 'Secure your puppy with a deposit. We will arrange the delivery or import paperwork.' },
              { step: '4', title: 'Welcome home', desc: 'Pick up your puppy from our showroom or receive them at your doorstep, happy and healthy.' },
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-charcoal bg-accent text-white font-bold text-xl shadow-[2px_2px_0_#2b1d14] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {item.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border-2 border-charcoal shadow-sm">
                  <h4 className="text-xl font-bold font-heading mb-2">{item.title}</h4>
                  <p className="text-charcoal-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Promise */}
        <div className="tape-box p-8 md:p-12 max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-8">The Premium Puppy Promise</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {[
              { title: 'Vet-checked & healthy', desc: 'Every puppy comes vaccinated, dewormed, and with a verified health certificate.' },
              { title: 'Safe delivery', desc: 'Trusted breeders, safe travel, and premium care from start to finish.' },
              { title: 'Support 24/7', desc: 'Always here to help, from choosing your puppy to post-delivery support.' },
              { title: 'Trusted worldwide', desc: 'Puppies delivered to loving homes all around the world safely.' },
            ].map((promise, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="text-2xl text-accent mt-1">✔</div>
                <div>
                  <h4 className="font-bold font-heading text-lg">{promise.title}</h4>
                  <p className="text-charcoal-light text-sm">{promise.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://wa.me/971541676733" className="btn-whatsapp inline-block text-lg">
            Ask a question on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}