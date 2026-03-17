'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Copy, Check } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative h-64 bg-gradient-to-br from-veritraa-green to-veritraa-charcoal text-white overflow-hidden pt-20">
        <div className="container-max relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-veritraa-cream">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-veritraa-gold" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-veritraa-charcoal">Address</h3>
                </div>
                <p className="text-gray-700">
                  Veritraa <br />
                  Pune, Maharashtra 411001 <br />
                  India
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="text-veritraa-gold" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-veritraa-charcoal">Phone</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a href="tel:+919876543210" className="text-veritraa-green hover:text-veritraa-gold font-semibold">
                      +91-9876543210
                    </a>
                    <button
                      onClick={() => copyToClipboard('+919876543210')}
                      className="p-1 hover:bg-veritraa-light-gray rounded transition-colors"
                    >
                      {copied ? <Check size={18} className="text-veritraa-success" /> : <Copy size={18} />}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">Mon-Sat, 9 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Mail className="text-veritraa-gold" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-veritraa-charcoal">Email</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a href="mailto:hello@veritraa.com" className="text-veritraa-green hover:text-veritraa-gold font-semibold">
                      hello@veritraa.com
                    </a>
                    <button
                      onClick={() => copyToClipboard('hello@veritraa.com')}
                      className="p-1 hover:bg-veritraa-light-gray rounded transition-colors"
                    >
                      {copied ? <Check size={18} className="text-veritraa-success" /> : <Copy size={18} />}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">We respond within 24 hours</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="text-veritraa-gold" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-veritraa-charcoal">WhatsApp</h3>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  className="inline-block px-4 py-2 bg-veritraa-success text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-veritraa-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-2xl hover:text-veritraa-gold transition-colors">📸</a>
                  <a href="#" className="text-2xl hover:text-veritraa-gold transition-colors">👍</a>
                  <a href="#" className="text-2xl hover:text-veritraa-gold transition-colors">🐦</a>
                  <a href="#" className="text-2xl hover:text-veritraa-gold transition-colors">▶️</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-veritraa-charcoal mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                      placeholder="9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="order-support">Order Support</option>
                      <option value="bulk-orders">Bulk Orders</option>
                      <option value="quality">Quality Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold resize-none"
                      placeholder="Please tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-lg"
                  >
                    Send Message
                  </button>

                  {submitted && (
                    <div className="p-4 bg-veritraa-success bg-opacity-20 border border-veritraa-success text-veritraa-success rounded">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                  We typically respond within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center text-veritraa-charcoal mb-12">
            Quick Answers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Shipping Policy', href: '#' },
              { title: 'Return & Refund', href: '#' },
              { title: 'Track Order', href: '#' },
              { title: 'Bulk Orders', href: '/bulk-orders' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="p-6 bg-veritraa-cream rounded-lg hover:bg-veritraa-light-gray transition-colors text-center"
              >
                <p className="font-bold text-veritraa-charcoal hover:text-veritraa-gold transition-colors">
                  {link.title} →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
