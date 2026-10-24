import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-heading font-semibold mb-4">TeddyPups U.A.E.</h3>
          <p className="text-gray-400 text-sm">
            Premium teacup puppies in Dubai. Meet your new best friend in our Downtown Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/puppies" className="hover:text-white transition-colors">Available Puppies</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-400">Downtown Dubai, UAE</p>
          <a
            href="https://wa.me/971541676733"
            target="_blank"
            rel="noreferrer"
            className="text-whatsapp hover:underline text-sm mt-2 inline-block"
          >
            WhatsApp: +971 54 167 6733
          </a>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TeddyPups U.A.E. All rights reserved.
      </div>
    </footer>
  );
}