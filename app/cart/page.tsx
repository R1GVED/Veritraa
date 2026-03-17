'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/store';
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';

export default function CartPage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const clearCart = useCart((state) => state.clearCart);
  const total = useCart((state) => state.getCartTotal());

  useEffect(() => {
    setIsHydrated(true);
    console.log('Cart items:', items);
    console.log('Total:', total);
  }, [items, total]);

  const shipping = total > 499 ? 0 : 40;
  const subtotal = total;
  const discount = 0;
  const finalTotal = subtotal + shipping - discount;

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-veritraa-warm-white pt-20">
        <div className="container-max py-12">
          <div className="text-center py-20">
            <div className="animate-pulse">Loading your cart...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-veritraa-warm-white pt-20">
      <div className="container-max py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-veritraa-charcoal">Shopping Cart</h1>
          {items.length > 0 && items.some(item => !item.product) && (
            <button
              onClick={() => {
                clearCart();
                window.location.reload();
              }}
              className="text-sm text-veritraa-error hover:text-veritraa-error bg-red-50 px-4 py-2 rounded"
            >
              Clear & Reset
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={64} className="mx-auto text-veritraa-light-gray mb-4" />
            <h2 className="text-3xl font-bold text-veritraa-charcoal mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
            <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
              Continue Shopping <ArrowRight size={20} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const displayPrice = item.variant.salePrice || item.variant.price;
                return (
                  <div key={`${item.productId}-${item.variantId}`} className="bg-white p-6 rounded-lg shadow flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-veritraa-charcoal mb-2">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">Weight: {item.variant.weight}</p>
                      <p className="text-veritraa-green font-bold">₹{displayPrice}</p>

                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-veritraa-light-gray rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variantId,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity === 1}
                            className="p-2 text-gray-600 hover:text-veritraa-green disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="px-4 py-2 font-semibold w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variantId,
                                item.quantity + 1
                              )
                            }
                            className="p-2 text-gray-600 hover:text-veritraa-green transition-colors"
                          >
                            <Plus size={18} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.productId, item.variantId)}
                          className="text-veritraa-error hover:text-veritraa-error hover:bg-red-50 p-2 rounded transition-colors ml-auto"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-veritraa-green font-bold text-lg">
                        ₹{displayPrice * item.quantity}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow sticky top-24">
                <h3 className="text-xl font-bold text-veritraa-charcoal mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-veritraa-light-gray">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    {shipping === 0 ? (
                      <span className="text-veritraa-success">FREE</span>
                    ) : (
                      <span>₹{shipping}</span>
                    )}
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-veritraa-success">
                      <span>Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-lg text-veritraa-charcoal">Total</span>
                  <span className="font-bold text-2xl text-veritraa-green">₹{finalTotal}</span>
                </div>

                {subtotal < 499 && (
                  <p className="text-sm text-veritraa-warning bg-yellow-50 p-3 rounded mb-6">
                    Add ₹{499 - subtotal} more for free shipping!
                  </p>
                )}

                <Link href="/checkout" className="btn-primary w-full block text-center mb-3">
                  Proceed to Checkout
                </Link>

                <Link
                  href="/shop"
                  className="btn-secondary w-full block text-center"
                >
                  Continue Shopping
                </Link>

                <div className="mt-6 pt-6 border-t border-veritraa-light-gray text-center text-sm text-gray-600">
                  <p>✓ Free Shipping Above ₹499</p>
                  <p>✓ COD Available</p>
                  <p>✓ Easy 7-Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
