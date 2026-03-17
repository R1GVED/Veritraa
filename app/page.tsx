import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Award, Package, Leaf, Zap } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-veritraa-green to-veritraa-charcoal text-white overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-veritraa-gold rounded-full mix-blend-multiply filter blur-3xl"
            style={{ animation: 'blob 7s infinite' }}
          ></div>
        </div>

        <div className="container-max relative z-10 h-full flex flex-col justify-center items-center text-center">
          <div className="space-y-6 animate-fade-in-up max-w-4xl">
            <div className="inline-block px-4 py-2 bg-veritraa-gold bg-opacity-20 border border-veritraa-gold rounded-full">
              <span className="text-veritraa-gold text-sm font-semibold">✓ Lab-Tested Purity</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-serif font-bold">
              Pure. True. <span className="text-veritraa-gold">Trusted.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Premium Indian spices rooted in authenticity. Uncompromised quality. Radical transparency. Every batch lab-tested, traceable, and crafted with discipline.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <Link href="/shop" className="btn-primary inline-flex items-center justify-center gap-2">
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center gap-2">
                Our Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-veritraa-cream py-12 border-b border-veritraa-light-gray">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-veritraa-gold text-4xl">✓</div>
              <p className="font-semibold text-veritraa-charcoal">100% Pure</p>
              <p className="text-sm text-veritraa-medium-gray">No Adulteration</p>
            </div>
            <div className="space-y-2">
              <div className="text-veritraa-gold text-4xl">🔬</div>
              <p className="font-semibold text-veritraa-charcoal">Lab-Tested</p>
              <p className="text-sm text-veritraa-medium-gray">Quality Assured</p>
            </div>
            <div className="space-y-2">
              <div className="text-veritraa-gold text-4xl">🌾</div>
              <p className="font-semibold text-veritraa-charcoal">Region-Specific</p>
              <p className="text-sm text-veritraa-medium-gray">Sourcing</p>
            </div>
            <div className="space-y-2">
              <div className="text-veritraa-gold text-4xl">🚚</div>
              <p className="font-semibold text-veritraa-charcoal">Free Shipping</p>
              <p className="text-sm text-veritraa-medium-gray">Above ₹499</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-veritraa-gold font-semibold uppercase tracking-wider mb-2">Premium Selection</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-veritraa-charcoal mb-4">
              Signature Blends
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most loved spice blends, crafted to perfection and trusted by thousands of customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary inline-flex items-center gap-2">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gradient-to-br from-veritraa-cream to-veritraa-warm-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=600&fit=crop"
                alt="Veritraa Brand Story"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-veritraa-gold font-semibold uppercase tracking-wider mb-2">
                  About Veritraa
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-veritraa-charcoal mb-4">
                  Built on Purity, Authenticity & Trust
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Veritraa was founded with a simple belief: the world deserves access to truly pure, authentic spices without compromise. We partner directly with farmers across India to source the finest spices at their peak freshness.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Every batch undergoes rigorous lab testing for purity, ensuring zero adulteration and maximum quality. We believe in radical transparency—from sourcing to processing to your kitchen.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-veritraa-success" size={24} />
                  <span className="text-gray-700">Lab-tested for purity and safety</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-veritraa-success" size={24} />
                  <span className="text-gray-700">Direct farmer partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-veritraa-success" size={24} />
                  <span className="text-gray-700">FSSAI certified and compliant</span>
                </div>
              </div>

              <Link href="/about" className="btn-primary inline-flex items-center gap-2 mt-4">
                Read Our Full Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise Grid */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-veritraa-charcoal mb-4">
              The Veritraa Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to the highest standards in every aspect of our business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="product-card p-8 hover:shadow-xl">
              <div className="w-16 h-16 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-veritraa-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-veritraa-charcoal mb-3">Uncompromised Quality</h3>
              <p className="text-gray-600">
                Every batch rigorously tested. No additives. No shortcuts. Only pure, authentic spices.
              </p>
            </div>

            {/* Transparency */}
            <div className="product-card p-8 hover:shadow-xl">
              <div className="w-16 h-16 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-veritraa-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-veritraa-charcoal mb-3">Radical Transparency</h3>
              <p className="text-gray-600">
                Clear sourcing. Honest labeling. Traceable origins. Know exactly where your spices come from.
              </p>
            </div>

            {/* Standards */}
            <div className="product-card p-8 hover:shadow-xl">
              <div className="w-16 h-16 bg-veritraa-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Package className="text-veritraa-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-veritraa-charcoal mb-3">Consistent Standards</h3>
              <p className="text-gray-600">
                Disciplined processes. Reliable results. Batch after batch, quality never wavers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-veritraa-cream">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-veritraa-charcoal mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Premium Blends */}
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow group h-64">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=400&fit=crop"
                alt="Premium Blends"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Premium Blends</h3>
                <p className="text-gray-200 mb-4">Traditional recipes, modern standards</p>
                <Link href="/shop?category=premium-blends" className="btn-primary inline-flex items-center gap-2">
                  Explore <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Core Range */}
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow group h-64">
              <img
                src="https://images.unsplash.com/photo-1585518419759-66ed1e0e7a26?w=800&h=400&fit=crop"
                alt="Core Range"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Core Range</h3>
                <p className="text-gray-200 mb-4">Everyday essentials, exceptional quality</p>
                <Link href="/shop?category=core-range" className="btn-primary inline-flex items-center gap-2">
                  Explore <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-20 bg-gradient-to-r from-veritraa-green to-veritraa-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-veritraa-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container-max relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Supply Quality to Your Business
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Wholesale pricing, custom packaging, consistent quality for restaurants, retailers, and food businesses.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/bulk-orders" className="btn-primary inline-flex items-center gap-2">
              Request Bulk Quote <ArrowRight size={20} />
            </Link>
            <a href="tel:+919876543210" className="text-white hover:text-veritraa-gold transition-colors font-semibold">
              📞 Call: +91-9876543210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
