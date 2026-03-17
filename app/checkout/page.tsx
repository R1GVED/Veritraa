'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/store';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCart((state) => state.items);
  const clearCart = useCart((state) => state.clearCart);
  const total = useCart((state) => state.getCartTotal());

  const shipping = total > 499 ? 0 : 40;
  const finalTotal = total + shipping;

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    paymentMethod: 'razorpay',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      alert(
        `Order placed successfully!\n\nOrder Total: ₹${finalTotal}\nPayment Method: ${formData.paymentMethod}`
      );
      clearCart();
      router.push('/');
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-veritraa-warm-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-veritraa-charcoal mb-4">Checkout</h1>
          <p className="text-gray-600 mb-4">Your cart is empty. Please add items to checkout.</p>
          <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-veritraa-warm-white pt-20">
      <div className="container-max py-12">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-veritraa-gold hover:text-veritraa-green transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Cart
        </button>

        <h1 className="text-5xl font-serif font-bold text-veritraa-charcoal mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold text-veritraa-charcoal mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
              </div>

              {/* Delivery Address */}
              <div>
                <h3 className="text-xl font-bold text-veritraa-charcoal mb-4">Delivery Address</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                      placeholder="9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                      placeholder="Apartment, house, etc."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                        placeholder="Pune"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                        placeholder="Maharashtra"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-veritraa-light-gray rounded focus:outline-none focus:border-veritraa-gold"
                      placeholder="411001"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div>
                <h3 className="text-xl font-bold text-veritraa-charcoal mb-4">Delivery Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-veritraa-light-gray rounded cursor-pointer hover:border-veritraa-gold">
                    <input
                      type="radio"
                      name="delivery"
                      value="standard"
                      defaultChecked
                      className="w-4 h-4 accent-veritraa-gold"
                    />
                    <span className="ml-3">
                      <span className="font-medium text-veritraa-charcoal">Standard (3-5 days)</span>
                      <span className="text-sm text-veritraa-success"> - FREE</span>
                    </span>
                  </label>
                  <label className="flex items-center p-3 border border-veritraa-light-gray rounded cursor-pointer hover:border-veritraa-gold">
                    <input type="radio" name="delivery" value="express" className="w-4 h-4 accent-veritraa-gold" />
                    <span className="ml-3">
                      <span className="font-medium text-veritraa-charcoal">Express (1-2 days)</span>
                      <span className="text-sm text-gray-600"> - ₹99</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-xl font-bold text-veritraa-charcoal mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-veritraa-light-gray rounded cursor-pointer hover:border-veritraa-gold">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="razorpay"
                      checked={formData.paymentMethod === 'razorpay'}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-veritraa-gold"
                    />
                    <span className="ml-3">
                      <span className="font-medium text-veritraa-charcoal">Razorpay</span>
                      <span className="text-sm text-gray-600"> (Cards, UPI, Wallets)</span>
                    </span>
                  </label>
                  <label className="flex items-center p-3 border border-veritraa-light-gray rounded cursor-pointer hover:border-veritraa-gold">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-veritraa-gold"
                    />
                    <span className="ml-3">
                      <span className="font-medium text-veritraa-charcoal">Cash on Delivery</span>
                      <span className="text-sm text-gray-600"> +₹30</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Terms */}
              <div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" required className="w-4 h-4 accent-veritraa-gold rounded" />
                  <span className="text-sm text-gray-700">
                    I agree to the Terms & Conditions and Return Policy
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>🔒 Secure Checkout | Razorpay | Your data is protected</p>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow sticky top-24">
              <h3 className="text-xl font-bold text-veritraa-charcoal mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-veritraa-light-gray max-h-64 overflow-y-auto">
                {items.map((item) => {
                  const price = item.variant.salePrice || item.variant.price;
                  return (
                    <div key={`${item.productId}-${item.variantId}`} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span className="font-medium">₹{price * item.quantity}</span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 mb-6 pb-6 border-b border-veritraa-light-gray">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-veritraa-success">FREE</span>
                  ) : (
                    <span>₹{shipping}</span>
                  )}
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-bold text-veritraa-charcoal">Total</span>
                <span className="font-bold text-2xl text-veritraa-green">₹{finalTotal}</span>
              </div>

              <div className="space-y-2 text-xs text-gray-600 bg-veritraa-light-gray p-3 rounded">
                <p>✓ 7-Day Returns</p>
                <p>✓ 100% Pure Guarantee</p>
                <p>✓ Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
