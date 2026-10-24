import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPuppy, sendEnquiry } from '../services/api.js';

export default function PuppyDetailPage() {
  const { slug } = useParams();
  const [puppy, setPuppy] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    fetchPuppy(slug).then(setPuppy).catch(console.error);
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendEnquiry({ ...form, puppySlug: puppy.slug });
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (!puppy) return <div className="container py-20 text-center">Loading...</div>;

  return (
    <div className="container py-16">
      <Link to="/puppies" className="text-charcoal-light hover:text-charcoal mb-8 inline-block">← Back to puppies</Link>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <img src={puppy.images?.[0]} alt={puppy.name} className="w-full rounded-2xl object-cover h-96" />
        </div>
        <div>
          <h1 className="text-4xl font-heading font-bold mb-2">Meet {puppy.name}</h1>
          <p className="text-charcoal-light text-lg mb-4">{puppy.breed} · {puppy.gender} · {puppy.age}</p>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-dark mb-8">
            <h3 className="font-heading font-semibold mb-2">About {puppy.name}</h3>
            <p className="text-charcoal-light text-sm mb-4">{puppy.description}</p>
            <p className="text-sm"><strong>Health:</strong> {puppy.health_notes}</p>
          </div>
          <a
            href={`https://wa.me/971541676733?text=Hi, I'm interested in ${puppy.name}`}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp inline-block"
          >
            Enquire via WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-heading font-bold mb-6">Send an enquiry about {puppy.name}</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-cream-dark space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea required rows="4" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3" />
          </div>
          <button type="submit" className="btn-primary w-full" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit Enquiry'}
          </button>
          {status === 'success' && <p className="text-green-600 text-sm mt-2">Enquiry sent successfully!</p>}
          {status === 'error' && <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  );
}