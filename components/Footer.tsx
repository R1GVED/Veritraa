'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
    alert('Thank you for subscribing to Veritraa!');
  };

  return (
    <footer className="bg-veritraa-green text-white">
      {/* Newsletter Section */}
      <div className="bg-veritraa-cream text-veritraa-charcoal py-12">
        <div className="container-max text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Join the Veritraa Family</h3>
          <p className="text-gray-600 mb-6">Get exclusive recipes, quality insights, and special offers.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-lg border border-veritraa-light-gray"
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
          <p className="text-sm text-gray-500 mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Veritraa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white hover:text-veritraa-gold transition-colors">Our Story</Link></li>
              <li><Link href="/quality" className="text-white hover:text-veritraa-gold transition-colors">Quality Promise</Link></li>
              <li><Link href="/about#values" className="text-white hover:text-veritraa-gold transition-colors">Core Values</Link></li>
              <li><Link href="/bulk-orders" className="text-white hover:text-veritraa-gold transition-colors">Bulk Orders</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="text-white hover:text-veritraa-gold transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=premium-blends" className="text-white hover:text-veritraa-gold transition-colors">Premium Blends</Link></li>
              <li><Link href="/shop?category=core-range" className="text-white hover:text-veritraa-gold transition-colors">Core Range</Link></li>
              <li><Link href="/shop?category=dry-fruits" className="text-white hover:text-veritraa-gold transition-colors">Dry Fruits</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-white hover:text-veritraa-gold transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping-policy" className="text-white hover:text-veritraa-gold transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns-policy" className="text-white hover:text-veritraa-gold transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/faq" className="text-white hover:text-veritraa-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Pune, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919876543210" className="text-sm text-white hover:text-veritraa-gold transition-colors">+91-9876543210</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@veritraa.com" className="text-sm text-white hover:text-veritraa-gold transition-colors">hello@veritraa.com</a>
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white hover:text-veritraa-gold transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-white hover:text-veritraa-gold transition-colors"><Facebook size={18} /></a>
                <a href="#" className="text-white hover:text-veritraa-gold transition-colors"><MessageCircle size={18} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white text-opacity-80">
            <p>&copy; 2024 Veritraa. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-white hover:text-veritraa-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white hover:text-veritraa-gold transition-colors">Terms & Conditions</Link>
              <Link href="/sitemap" className="text-white hover:text-veritraa-gold transition-colors">Sitemap</Link>
            </div>
          </div>
          <p className="text-center text-xs text-white text-opacity-60 mt-4">
            Secured by SSL | Razorpay | UPI | Cards | COD
          </p>
        </div>
      </div>
    </footer>
  );
}
