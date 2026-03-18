import Link from 'next/link';
import { CheckCircle2, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-veritraa-green to-veritraa-charcoal text-white overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-veritraa-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container-max relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Pure. True. Trusted. Built on a foundation of quality and authenticity.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container-max max-w-4xl mx-auto">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-2xl font-serif text-veritraa-green first-letter:text-5xl first-letter:font-bold">
              Veritraa was founded with a simple belief: the world deserves access to truly pure, authentic spices without compromise. In a market flooded with adulterated products and questionable sourcing practices, we decided to do things differently.
            </p>

            <p>
              We started by partnering directly with farmers across India—from the spice gardens of Kerala and Karnataka to the fields of Maharashtra and Rajasthan. These aren't just suppliers; they're our partners in maintaining a commitment to quality that goes beyond profit margins.
            </p>

            <p>
              Every batch we produce undergoes rigorous, third-party lab testing for purity, microbial content, heavy metals, and potential adulterants. We don't just meet FSSAI standards—we often exceed them. Our commitment to transparency means every customer can trace their spice back to its origin.
            </p>

            <blockquote className="border-l-4 border-veritraa-gold pl-6 py-4 text-xl italic text-veritraa-green">
              "Premium is not a statement—it is a standard reflected in every batch."
            </blockquote>

            <p>
              We believe in authentic Indian culinary heritage. Our premium blends are based on traditional recipes passed down through generations, crafted meticulously to bring the regional flavors of India into every home.
            </p>

            <p>
              Beyond just selling spices, we're building a community of conscious consumers who value quality, authenticity, and ethical sourcing. We're invested in supporting women-led supply chains and sustainable farming practices. Every choice we make reflects our commitment to purity—of product, process, and purpose.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="mt-12 p-8 bg-veritraa-cream rounded-lg border-l-4 border-veritraa-gold">
            <p className="text-center text-2xl font-serif text-veritraa-green italic">
              "Our mission is simple: provide access to pure, traceable, authentic spices that consumers can trust completely."
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-veritraa-cream">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center text-veritraa-charcoal mb-12">
            Vision & Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-veritraa-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-veritraa-charcoal mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted premium spice brand in India, recognized worldwide for our uncompromising commitment to purity, authenticity, and transparency. We envision a world where every consumer has access to genuinely pure spices without question.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-veritraa-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-veritraa-charcoal mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver lab-tested, regionally sourced, authentically crafted spices that elevate culinary experiences while maintaining radical transparency in every step—from farm to table. We're committed to supporting ethical, sustainable practices throughout our supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center text-veritraa-charcoal mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                title: 'Uncompromised Quality',
                description: 'Every batch lab-tested for purity and safety. Standards never waiver.',
                icon: '✓',
              },
              {
                title: 'Radical Transparency',
                description: 'Clear sourcing, honest labeling, traceable origins. You deserve to know.',
                icon: '🔍',
              },
              {
                title: 'Discipline in Details',
                description: 'Attention to every aspect—from sourcing to packaging to customer care.',
                icon: '⚙️',
              },
              {
                title: 'Respect for Origin',
                description: 'Honoring traditional recipes and supporting farmers who work the land.',
                icon: '🌾',
              },
              {
                title: 'Purposeful Growth',
                description: 'Building sustainable value—for customers, partners, and communities.',
                icon: '🚀',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg text-veritraa-charcoal mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Women-Led Supply Chain */}
      <section className="py-20 bg-veritraa-cream">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Women in farming"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-veritraa-gold font-semibold uppercase tracking-wider mb-2">Social Impact</p>
                <h2 className="text-4xl font-serif font-bold text-veritraa-charcoal mb-4">
                  Building Sustainable Communities
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                At Veritraa, we're committed to supporting women-led farming and processing initiatives across India. We partner with women farmers and processors, providing fair wages, training, and market access.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-veritraa-success flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-veritraa-charcoal">Women Empowerment</h4>
                    <p className="text-gray-600">Direct employment and skill development for women in agriculture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-veritraa-success flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-veritraa-charcoal">Fair Trade Practices</h4>
                    <p className="text-gray-600">Competitive pricing and long-term partnerships with farmers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-veritraa-success flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-veritraa-charcoal">Sustainable Farming</h4>
                    <p className="text-gray-600">Support for organic and eco-friendly farming methods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-veritraa-green text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Experience the Veritraa Difference</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of customers who trust Veritraa for pure, authentic spices.
          </p>
          <Link href="/shop" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
