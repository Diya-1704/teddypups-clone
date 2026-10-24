const BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const fetchPuppies = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return fetch(`${BASE}/puppies?${query}`).then(res => res.json());
};

export const fetchPuppy = (slug) => fetch(`${BASE}/puppies/${slug}`).then(res => res.json());
export const fetchFaqs = () => fetch(`${BASE}/faqs`).then(res => res.json());
export const fetchTestimonials = () => fetch(`${BASE}/testimonials`).then(res => res.json());

export const sendEnquiry = (data) => fetch(`${BASE}/enquiries`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(async res => {
  if (!res.ok) throw new Error('Failed to send enquiry');
  return res.json();
});