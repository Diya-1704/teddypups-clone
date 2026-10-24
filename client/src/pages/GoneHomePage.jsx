import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPuppies } from '../services/api.js';

export default function GoneHomePage() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    fetchPuppies({ status: 'gone-home' }).then(setPuppies).catch(console.error);
  }, []);

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-heading font-bold mb-4">Gone Home</h1>
      <p className="text-charcoal-light mb-12">These puppies have already found their forever families!</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {puppies.map((pup) => (
          <div key={pup.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-dark">
            <img src={pup.image} alt={pup.name} className="w-full h-64 object-cover opacity-80" />
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold">{pup.name}</h3>
              <p className="text-sm text-charcoal-light">{pup.breed} · {pup.gender}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full uppercase">
                Gone Home
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <Link to="/puppies" className="btn-primary">View Available Puppies</Link>
      </div>
    </div>
  );
}