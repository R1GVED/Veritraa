import Link from 'next/link';
import { Globe, Share2 } from 'lucide-react';
import {
  footerHelpLinks,
  footerLinktreeLinks,
  footerQuickLinks,
} from '@/src/data/mockData';

interface SiteFooterProps {}

export default function SiteFooter(_: Readonly<SiteFooterProps>) {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-low px-6 py-16 md:px-8">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-4">
        <div>
          <span className="mb-4 block font-headline text-2xl text-primary">Veritraa</span>
          <p className="max-w-xs text-sm leading-relaxed text-on-surface opacity-70">
            Dedicated to preserving the culinary wisdom of ancient India for the modern world.
          </p>
        </div>

        <div>
          <h5 className="mb-6 font-label text-xs font-bold uppercase tracking-[0.18em] text-on-background">
            Mission Statement
          </h5>
          <p className="max-w-xs text-sm leading-7 text-on-surface opacity-70">
            Purity in every grain. Preserving the heritage of Indian spice crafts for a
            global palate.
          </p>
        </div>

        <div>
          <h5 className="mb-6 font-label text-xs font-bold uppercase tracking-[0.18em] text-on-background">
            Quick Links
          </h5>
          <ul className="flex flex-col gap-3">
            {footerQuickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="inline-block text-sm leading-relaxed text-on-surface opacity-70 transition-transform hover:translate-x-1 hover:opacity-100"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-6 font-label text-xs font-bold uppercase tracking-[0.18em] text-on-background">
            Contact
          </h5>
          <ul className="flex flex-col gap-3">
            {footerHelpLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="inline-block text-sm leading-relaxed text-on-surface opacity-70 transition-transform hover:translate-x-1 hover:opacity-100"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-3 flex flex-col gap-3">
            {footerLinktreeLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="inline-block text-sm leading-relaxed text-on-surface opacity-70 transition-transform hover:translate-x-1 hover:opacity-100"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-4 text-primary">
            <Globe size={16} />
            <Share2 size={16} />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-screen-2xl flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-8 text-sm text-on-surface opacity-70 md:flex-row">
        <p>(c) 2024 Veritraa. Crafted for the Modern Apothecary.</p>
        <div className="flex gap-6">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
