'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BulkOrdersPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: 'restaurant',
    gstin: '',
    fullName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    productsInterested: [] as string[],
    monthlyRequirement: '<50kg',
    packSize: '',
    customPackaging: false,
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      productsInterested: prev.productsInterested.includes(product)
        ? prev.productsInterested.filter((p) => p !== product)
        : [...prev.productsInterested, product],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Bulk order request submitted! Our team will contact you within 24 business hours.');
    setFormData({
      businessName: '',
      businessType: 'restaurant',
      gstin: '',
      fullName: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      productsInterested: [],
      monthlyRequirement: '<50kg',
      packSize: '',
      customPackaging: false,
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative h-64 bg-gradient-to-br from-veritraa-green to-veritraa-charcoal text-white overflow-hidden pt-20">
        <div className="container-max relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Supply Quality to Your Business</h1>
          <p className="text-xl text-gray-200">
            Wholesale pricing, custom packaging, consistent quality for restaurants, retailers & food services.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-veritraa-cream">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wholesale Pricing',
                desc: 'Volume-based discounts for bulk orders starting from 50kg',
                icon: '💰',
              },
              {
                title: 'Custom Packaging',
                desc: 'Private labeling and custom pack sizes available',
                icon: '📦',
              },
              {
                title: 'Consistent Quality',
                desc: 'Same rigorous standards, batch after batch, always',
                icon: '✓',
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-veritraa-charcoal mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center text-veritraa-charcoal mb-12">
            How It Works
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: '1', title: 'Submit Request', desc: 'Fill out the form below with your business details' },
                { step: '2', title: 'Get Quote', desc: 'We will prepare a customized quote within 24 hours' },
                { step: '3', title: 'Approve', desc: 'Review terms and approve the bulk order' },
                { step: '4', title: 'Receive Order', desc: 'We ship directly to your location' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-veritraa-gold text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-veritraa-charcoal text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {i < 3 && <ArrowRight className="hidden md:block text-veritraa-gold" size={24} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders Form */}
      <section className="py-20 bg-veritraa-cream">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-veritraa-charcoal mb-2">Request Quote</h2>
          <p className="text-gray-600 mb-8">
            We'll respond within 24 business hours. All information is kept confidential.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-8">
            {/* Business Information */}
            <div>
              <h3 className="text-xl font-bold text-veritraa-charcoal mb-4">Business Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type *</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  >
                    <option value="restaurant">Restaurant</option>
                    <option value="retail">Retail Store</option>
                    <option value="food-service">Food Service</option>
                    <option value="distributor">Distributor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GSTIN (Optional)</label>
                  <input
                    type="text"
                    name="gstin"
                    value={formData.gstin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-veritraa-charcoal mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  />
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div>
              <h3 className="text-xl font-bold text-veritraa-charcoal mb-4">Order Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Products Interested In *</label>
                  <div className="space-y-2">
                    {['Premium Blends', 'Core Range', 'Custom Blends', 'Bulk Powders'].map((product) => (
                      <label key={product} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.productsInterested.includes(product)}
                          onChange={() => handleCheckboxChange(product)}
                          className="w-4 h-4 accent-veritraa-gold rounded"
                        />
                        <span className="text-gray-700">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Monthly Requirement *</label>
                  <select
                    name="monthlyRequirement"
                    value={formData.monthlyRequirement}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                  >
                    <option value="<50kg">&lt;50kg</option>
                    <option value="50-100kg">50-100kg</option>
                    <option value="100-500kg">100-500kg</option>
                    <option value="500kg+">500kg+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Pack Size (Optional)</label>
                  <input
                    type="text"
                    name="packSize"
                    value={formData.packSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                    placeholder="e.g., 5kg, 10kg, 25kg"
                  />
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.customPackaging}
                    onChange={(e) => setFormData((prev) => ({ ...prev, customPackaging: e.target.checked }))}
                    className="w-4 h-4 accent-veritraa-gold rounded"
                  />
                  <span className="text-gray-700">Custom Packaging / Private Labeling Required</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                placeholder="Any special requirements or questions..."
              />
            </div>

            <button type="submit" className="btn-primary w-full py-3">
              Submit Bulk Order Request
            </button>

            <p className="text-center text-sm text-gray-600">
              👉 We'll respond within 24 business hours. All information is confidential.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-veritraa-charcoal mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the minimum order quantity?',
                a: 'We typically start with 50kg minimum orders, but this depends on the product and packaging. Contact us for specific requirements.',
              },
              {
                q: 'Do you offer custom blending?',
                a: 'Yes! We can create custom spice blends tailored to your specific needs. Please mention this in your request.',
              },
              {
                q: 'What payment terms do you offer?',
                a: 'We offer flexible payment terms for bulk orders. Contact us to discuss net 30, net 60, or advance payment options.',
              },
              {
                q: 'Do you ship pan-India?',
                a: 'Yes, we ship across India. Delivery timelines depend on location and order size.',
              },
              {
                q: 'Can I get product samples?',
                a: 'Absolutely! We can provide samples for qualified bulk order inquiries. Request this in your form submission.',
              },
            ].map((item, i) => (
              <details key={i} className="border border-veritraa-light-gray rounded p-4 cursor-pointer">
                <summary className="font-bold text-veritraa-charcoal">{item.q}</summary>
                <p className="text-gray-600 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-veritraa-green text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Prefer to Talk?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Reach out to our bulk orders team directly
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="tel:+919876543210" className="btn-primary inline-flex items-center gap-2">
              📞 Call: +91-9876543210
            </a>
            <a href="mailto:bulk@veritraa.com" className="btn-primary inline-flex items-center gap-2">
              ✉️ Email: bulk@veritraa.com
            </a>
          </div>
          <p className="text-gray-200 mt-6 text-sm">⏰ Mon-Sat, 9 AM - 6 PM IST</p>
        </div>
      </section>
    </div>
  );
}
