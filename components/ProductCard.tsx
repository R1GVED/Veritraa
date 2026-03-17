'use client';

import { Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '@/lib/store';
import { Product } from '@/lib/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const items = useCart((state) => state.items);
  const addItem = useCart((state) => state.addItem);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const removeItem = useCart((state) => state.removeItem);

  // Find if this product variant is in cart
  const cartItem = items.find(
    (item) => item.productId === product.id && item.variantId === selectedVariant.id
  );
  const quantityInCart = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    try {
      if (!selectedVariant) {
        console.error('No variant selected');
        return;
      }
      
      addItem(product, selectedVariant, 1);
      console.log('✅ Item added to cart successfully');
    } catch (error) {
      console.error('❌ Error adding to cart:', error);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantityInCart < selectedVariant.stock) {
      updateQuantity(product.id, selectedVariant.id, quantityInCart + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantityInCart > 0) {
      updateQuantity(product.id, selectedVariant.id, quantityInCart - 1);
    }
  };

  const displayPrice = selectedVariant.salePrice || selectedVariant.price;
  const originalPrice = selectedVariant.price;

  return (
    <div className="product-card hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 right-3 space-y-1">
            {product.badges.map((badge) => (
              <div
                key={badge}
                className={`text-xs font-bold text-white px-2 py-1 rounded ${
                  badge === 'lab-tested'
                    ? 'bg-veritraa-success'
                    : badge === 'best-seller'
                    ? 'bg-veritraa-gold text-veritraa-charcoal'
                    : 'bg-veritraa-terracotta'
                }`}
              >
                {badge === 'lab-tested' && '🔬 Lab Tested'}
                {badge === 'best-seller' && '⭐ Bestseller'}
                {badge === 'new' && '✨ New'}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-veritraa-charcoal mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-veritraa-green">₹{displayPrice}</span>
          {selectedVariant.salePrice && (
            <span className="text-lg text-gray-500 line-through">₹{originalPrice}</span>
          )}
        </div>

        {/* Variant Selector */}
        <div className="mb-3">
          <div className="text-sm text-gray-600 mb-2">Weight: {selectedVariant.weight}</div>
          {product.variants.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`text-xs px-3 py-1 rounded border transition-colors ${
                    selectedVariant.id === variant.id
                      ? 'bg-veritraa-gold text-white border-veritraa-gold'
                      : 'border-gray-300 text-gray-600 hover:border-veritraa-gold'
                  }`}
                >
                  {variant.weight}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stock Status */}
        {selectedVariant.stock > 0 ? (
          <p className="text-sm text-veritraa-success mb-4">✓ In Stock</p>
        ) : (
          <p className="text-sm text-veritraa-error mb-4">Out of Stock</p>
        )}

        {/* Conditional: Show Add to Cart or Quantity Controls */}
        {quantityInCart === 0 ? (
          // Not in cart - Show Add to Cart button
          <button
            onClick={handleAddToCart}
            disabled={selectedVariant.stock === 0}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        ) : (
          // In cart - Show quantity controls
          <div className="flex items-center gap-1">
            <button
              onClick={handleDecreaseQuantity}
              disabled={quantityInCart === 0 || selectedVariant.stock === 0}
              className="px-2 py-2 border border-veritraa-green rounded text-gray-600 hover:text-veritraa-green hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="px-3 font-bold text-veritraa-green text-sm">{quantityInCart}</span>
            <button
              onClick={handleIncreaseQuantity}
              disabled={quantityInCart >= selectedVariant.stock || selectedVariant.stock === 0}
              className="px-2 py-2 border border-veritraa-green rounded text-gray-600 hover:text-veritraa-green hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Increase quantity"
            >
              <Plus size={14} />
            </button>
            <button
              onClick={() => removeItem(product.id, selectedVariant.id)}
              className="px-2 py-2 border border-veritraa-error rounded text-veritraa-error hover:bg-red-50 transition-colors text-xs font-semibold"
              title="Remove item"
            >
              REMOVE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
