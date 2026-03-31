'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { navLinks } from '@/src/data/mockData';

interface NavbarProps {}

export default function Navbar(_: Readonly<NavbarProps>) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-outline-variant/20 shadow-sm">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-on-background">
          Veritraa
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                className={`border-b-2 pb-1 font-body text-[15px] tracking-tight transition-all duration-300 ease-out ${
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-on-background opacity-80 hover:text-primary hover:opacity-100'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button
            aria-label="Search products"
            className="cursor-pointer text-on-background transition-colors hover:text-primary"
            type="button"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Shopping bag"
            className="relative cursor-pointer text-on-background transition-colors hover:text-primary"
            type="button"
          >
            <ShoppingBag size={18} />
            <span className="absolute -right-1.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
              2
            </span>
          </button>
          <button className="spice-gradient rounded-full px-6 py-2.5 text-sm font-semibold text-on-primary shadow-lg shadow-primary/10 transition-transform hover:scale-105">
            Login with Shopify
          </button>
        </div>

        <button
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
          className="text-on-background md:hidden"
          onClick={() => setMobileMenuOpen((value) => !value)}
          type="button"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-outline-variant/30 bg-background/95 px-5 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className={`font-body text-base ${
                  pathname === link.href ? 'text-primary' : 'text-on-background opacity-80'
                }`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <button
                aria-label="Search products"
                className="text-on-background"
                type="button"
              >
                <Search size={18} />
              </button>
              <button
                aria-label="Shopping bag"
                className="relative text-on-background"
                type="button"
              >
                <ShoppingBag size={18} />
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                  2
                </span>
              </button>
              <button className="spice-gradient rounded-full px-5 py-2 text-sm font-medium text-on-primary">
                Login with Shopify
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
