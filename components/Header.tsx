'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/lib/store';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const cartCount = useCart((state) => state.getCartItemsCount());

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-veritraa-green">
          <img src="/veritra.png" alt="Veritraa" className="w-10 h-10" />
          <span>Veritraa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-veritraa-charcoal">
          <Link href="/" className="hover:text-veritraa-gold transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-veritraa-gold transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-veritraa-gold transition-colors">About</Link>
          <Link href="/quality" className="hover:text-veritraa-gold transition-colors">Quality</Link>
          <Link href="/bulk-orders" className="hover:text-veritraa-gold transition-colors">Bulk Orders</Link>
          <Link href="/contact" className="hover:text-veritraa-gold transition-colors">Contact</Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-veritraa-gold transition-colors hidden md:block">
            <Search size={20} />
          </button>
          <Link href="/cart" className="relative p-2 hover:text-veritraa-gold transition-colors">
            <ShoppingCart size={20} />
            {isHydrated && cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-veritraa-terracotta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-veritraa-warm-white border-t border-veritraa-light-gray">
          <div className="container-max py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/quality" onClick={() => setMobileMenuOpen(false)}>Quality</Link>
            <Link href="/bulk-orders" onClick={() => setMobileMenuOpen(false)}>Bulk Orders</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
