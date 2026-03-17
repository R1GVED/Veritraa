import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Veritraa | Premium Spices & Dry Fruits',
  description: 'Pure. True. Trusted. Premium Indian spices and dry fruits with lab-tested purity and regional authenticity.',
  keywords: 'spices, masala, turmeric, coriander, indian spices, organic spices, premium spices',
  authors: [{ name: 'Veritraa' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://veritraa.com',
    title: 'Veritraa | Premium Spices & Dry Fruits',
    description: 'Pure. True. Trusted. Premium Indian spices and dry fruits.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Veritraa Spices',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/veritra.png" />
      </head>
      <body className="bg-veritraa-warm-white text-veritraa-charcoal">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
