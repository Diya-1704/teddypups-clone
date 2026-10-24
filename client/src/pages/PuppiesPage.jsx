import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPuppies } from '../services/api.js';

export default function PuppiesPage() {
  const [availablePuppies, setAvailablePuppies] = useState([]);
  const [gonePuppies, setGonePuppies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [filters, setFilters] = useState({
    origin: '',
    breed: '',
    gender: ''
  });

  // Fetch Gone Home puppies once
  useEffect(() => {
    fetchPuppies({ status: 'gone-home' }).then(setGonePuppies).catch(console.error);
  }, []);

  // Fetch available puppies based on filters
  useEffect(() => {
    setLoading(true);
    const params = { status: 'available', ...filters };
    
    // Remove empty filters before sending to API
    Object.keys(params).forEach(key => params[key] === '' && delete params[key]);

    fetchPuppies(params)
      .then(data => {
        setAvailablePuppies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [filters]);

  const handleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? '' : value // Toggle filter on/off
    }));
  };

  const FilterButton = ({ category, value, label }) => {
    const isActive = filters[category] === value;
    return (
      <button
        onClick={() => handleFilter(category, value)}
        className={`px-4 py-1.5 rounded-full border-2 border-charcoal text-sm font-medium transition-colors ${
          isActive ? 'bg-charcoal text-white' : 'bg-white text-charcoal hover:bg-gray-100'
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="bg-[#faf5ec] min-h-screen pb-20 relative overflow-hidden">
      {/* Background Doodles */}
      <div className="absolute top-40 left-10 text-4xl text-gray-300 opacity-60">✨</div>
      <div className="absolute top-60 right-20 text-4xl text-gray-300 opacity-60">🐾</div>
      <div className="absolute top-[40%] left-[5%] text-3xl text-gray-300 opacity-50">💖</div>

      <div className="container pt-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-heading font-black mb-6 wavy-underline inline-block text-charcoal">
              Available puppies
            </h1>
            <p className="text-lg text-charcoal-light mt-4 leading-relaxed max-w-xl">
              Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.
            </p>
          </div>
          
          {/* Cartoon Dog Circle */}
          <div className="hidden md:flex flex-col items-center mt-8 md:mt-0">
            <div className="w-40 h-40 border-4 border-charcoal rounded-full flex items-center justify-center bg-[#faeed6] shadow-[4px_4px_0_#2b1d14]">
              <span className="text-7xl">🐶</span>
            </div>
            <span className="font-heading mt-3 text-charcoal-light font-medium">self-portrait</span>
          </div>
        </div>

        {/* Taped Filter Box */}
        <div className="tape-box p-6 mb-20 max-w-4xl shadow-md">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="w-24 font-heading text-lg italic text-charcoal-light shrink-0">where</span>
              <div className="flex flex-wrap gap-2">
                <FilterButton category="origin" value="" label="Everywhere" />
                <FilterButton category="origin" value="imported" label="Imported" />
                <FilterButton category="origin" value="local" label="Korean Teacup" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="w-24 font-heading text-lg italic text-charcoal-light shrink-0">breed</span>
              <div className="flex flex-wrap gap-2">
                <FilterButton category="breed" value="Maltipoo" label="Maltipoo" />
                <FilterButton category="breed" value="Pomeranian" label="Pomeranian" />
                <FilterButton category="breed" value="Toy Poodle" label="Poodle" />
                <FilterButton category="breed" value="Cavapoo" label="Cavapoo" />
                <FilterButton category="breed" value="Shih Tzu" label="Shih Tzu" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="w-24 font-heading text-lg italic text-charcoal-light shrink-0">boy or girl</span>
              <div className="flex flex-wrap gap-2">
                <FilterButton category="gender" value="Boy" label="Boys" />
                <FilterButton category="gender" value="Girl" label="Girls" />
              </div>
            </div>
          </div>
        </div>

        {/* Available Puppies Grid */}
        {loading ? (
          <div className="text-center py-20 font-heading text-2xl text-charcoal-light">Finding puppies...</div>
        ) : availablePuppies.length === 0 ? (
          <div className="text-center py-20 font-heading text-2xl text-charcoal-light">
            No puppies match these filters. Try clearing them!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {availablePuppies.map((pup, index) => (
              <Link to={`/puppies/${pup.slug}`} key={pup.id} className="flex flex-col items-center group relative">
                
                {/* Decorative Doodles */}
                {index % 2 === 0 && <span className="absolute -top-4 -left-2 text-2xl text-accent">✨</span>}
                {index % 3 === 0 && <span className="absolute top-10 -right-4 text-2xl text-charcoal-light">🐾</span>}
                {index % 4 === 0 && <span className="absolute -bottom-2 -right-2 text-2xl text-accent">💖</span>}

                {/* Image Blob */}
                <div className="relative w-64 h-64 mb-6">
                  {/* Available Tag */}
                  <div className="absolute -top-2 right-0 bg-white border-2 border-charcoal rounded-full px-4 py-1 text-sm font-bold z-20 rotate-6 shadow-sm">
                    Available
                  </div>
                  
                  <img 
                    src={pup.image} 
                    alt={pup.name} 
                    className="w-full h-full object-cover puppy-blob bg-gray-200"
                  />
                  
                  {/* Video Tag (Optional) */}
                  <div className="absolute bottom-2 left-2 bg-charcoal text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 z-20">
                    ▶ video
                  </div>
                </div>

                {/* Text Details */}
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-1">{pup.name}</h3>
                  <p className="text-sm font-medium text-charcoal-light capitalize">
                    {pup.breed} · {pup.gender.toLowerCase()} · {pup.age}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Gone Home Section (Bottom) */}
      <div className="mt-32 bg-[#f5d691] py-16 relative">
        {/* Wavy top border */}
        <div className="absolute top-0 left-0 w-full h-8 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40 Q20 0 40 40\' fill=\'%23faf5ec\'/%3E%3C/svg%3E')] bg-repeat-x -mt-1"></div>
        
        <div className="container grid md:grid-cols-4 gap-12 items-center">
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-4 leading-tight">
              Already<br/>gone home
            </h2>
            <p className="text-lg text-charcoal-light mb-8">
              These puppies have found their families.
            </p>
            <Link to="/gone-home" className="btn-primary inline-flex items-center gap-2">
              See the puppies who've gone home
            </Link>
          </div>
          
          <div className="md:col-span-3 flex overflow-x-auto gap-8 pb-8 snap-x">
            {gonePuppies.map((pup) => (
              <div key={pup.id} className="snap-center shrink-0 flex flex-col items-center">
                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4">
                  <img 
                    src={pup.image} 
                    alt={pup.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-charcoal bg-gray-200"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border-2 border-charcoal rounded-full px-4 py-1 text-xs font-bold whitespace-nowrap shadow-sm text-charcoal">
                    gone home 💖
                  </div>
                </div>
                <h4 className="font-heading font-bold text-xl mt-2">{pup.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}