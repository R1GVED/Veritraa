'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Filter, SortAsc } from 'lucide-react';

export default function ShopPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      filtered = filtered.filter((p) => {
        const price = p.salePrice || p.price;
        if (priceRange === 'under-100') return price < 100;
        if (priceRange === '100-200') return price >= 100 && price <= 200;
        if (priceRange === '200-500') return price >= 200 && price <= 500;
        if (priceRange === 'above-500') return price > 500;
        return true;
      });
    }

    return filtered;
  }, [selectedCategory, priceRange]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const copy = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-low':
        return copy.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      case 'price-high':
        return copy.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      case 'rating':
        return copy.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return copy.reverse();
      default:
        return copy;
    }
  }, [filteredProducts, sortBy]);

  return (
    <div className="min-h-screen bg-veritraa-warm-white pt-20">
      <div className="container-max py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-veritraa-charcoal mb-2">Our Products</h1>
          <p className="text-xl text-veritraa-medium-gray">
            Breadcrumb: Home / Shop
          </p>
          <p className="text-gray-700 mt-4">
            Every product crafted with purity, tested for quality, and sealed for freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:block ${
              showFilters ? 'block' : 'hidden'
            } lg:col-span-1 space-y-6`}
          >
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden mb-4 text-gray-600"
            >
              ✕ Close Filters
            </button>

            {/* Category Filter */}
            <div>
              <h3 className="font-bold text-lg text-veritraa-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'All Products', count: products.length },
                  { id: 'premium-blends', label: 'Premium Blends', count: products.filter((p) => p.category === 'premium-blends').length },
                  { id: 'core-range', label: 'Core Range', count: products.filter((p) => p.category === 'core-range').length },
                  { id: 'dry-fruits', label: 'Dry Fruits', count: 0 },
                ].map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer hover:text-veritraa-gold transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="accent-veritraa-gold"
                    />
                    <span className="text-gray-700">
                      {cat.label} ({cat.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-bold text-lg text-veritraa-charcoal mb-4">Price Range</h3>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under-100', label: 'Under ₹100' },
                  { id: '100-200', label: '₹100 - ₹200' },
                  { id: '200-500', label: '₹200 - ₹500' },
                  { id: 'above-500', label: 'Above ₹500' },
                ].map((price) => (
                  <label key={price.id} className="flex items-center gap-2 cursor-pointer hover:text-veritraa-gold transition-colors">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === price.id}
                      onChange={() => setPriceRange(price.id)}
                      className="accent-veritraa-gold"
                    />
                    <span className="text-gray-700">{price.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Actions */}
            <div className="space-y-2 pt-4 border-t border-veritraa-light-gray">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="w-full btn-outline text-sm"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-veritraa-light-gray">
              <p className="text-gray-600">
                Showing <span className="font-bold">{sortedProducts.length}</span> products
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-veritraa-light-gray rounded hover:border-veritraa-gold transition-colors"
                >
                  <Filter size={18} />
                  Filters
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="btn-primary"
                >
                  Clear Filters & Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
