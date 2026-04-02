'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Sparkles, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/site/ProductCard';
import SectionHeading from '@/components/site/SectionHeading';
import {
  homeBenefits,
  homeCollections,
  testimonials,
  shopProducts,
} from '@/src/data/mockData';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bestSellerNames = [
    'Shahi Garam Masala',
    'Kanda Lasun Chutney',
    'Kala Masala',
    'Shahi Biryani Masala',
    'Shahi Paneer Masala',
  ];

  const bestSellerProducts = shopProducts.filter((product) =>
    bestSellerNames.includes(product.name)
  );

  const slides = [
    {
      type: 'content',
      bg: '#efe7db',
      bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJXLz_Rv81HrLaEZ7hToz5TPF_Cd0jArqQ4S8g4FwE2a83wyzBkAqYFawGjjPKZqQWmNuMFk8_XxSOAmA6B7jQ2GYGdTnjxbxlBEr001l1QORKVGQ9BtN6u9gPoE0jiZbCI3okX7qbFe9grbUWLOBv8iQP_j6S807MZJ0X8KjQqMXGYb_Gu_-rPYMdT6j_g2uhTh3c_bkJNP7FQQMhoUS1JRz8uNUy2tk2ON2_L2N8erdMy1rUy9Mf1kDUP0lT4ox90UXg8pFcAAA',
    },
    {
      type: 'image',
      image: '/hero-kitchen.png',
    },
    {
      type: 'image',
      image: '/hero-extra-0.png',
    },
    {
      type: 'image',
      image: '/hero-extra-1.png',
    },
  ];

  const goToSlide = (index: number) => {
    if (index < 0) setCurrentSlide(slides.length - 1);
    else setCurrentSlide(index % slides.length);
  };

  return (
    <>
      <section className="relative flex min-h-[600px] w-full overflow-hidden bg-[#efe7db] md:min-h-[760px]">
        {/* Carousel Tracks - Implementing Sliding Motion */}
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-full shrink-0 flex-none min-h-[600px] md:min-h-[760px] flex items-end pt-20 md:items-center"
            >
              {/* Background Layer */}
              <div className="absolute inset-0 z-0 bg-[#efe7db]">
                <img
                  alt={`Hero slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  src={slide.type === 'content' ? (slide.bgImage as string) : (slide.image as string)}
                />
                {slide.type === 'content' && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent md:bg-gradient-to-r md:from-background md:via-background/80 md:to-background/20 lg:to-transparent" />
                    <div className="absolute inset-y-0 left-0 hidden w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_48%)] md:block" />
                  </>
                )}
              </div>

              {/* Foreground Content Layer */}
              {slide.type === 'content' && (
                <div className="relative z-10 mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-4 pb-6 pt-14 sm:px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
                  <div className="flex max-w-2xl flex-col gap-6 rounded-[2rem] border border-white/45 bg-white/68 p-6 shadow-[0_32px_90px_-40px_rgba(26,28,26,0.55)] backdrop-blur-xl sm:p-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0 transition-transform">
                    <div className="flex flex-wrap items-center gap-3 text-primary/80">
                      <span className="rounded-full border border-primary/20 bg-white/60 px-4 py-2 font-label text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur">
                        Est. 1947 - Heritage of Taste
                      </span>
                      <span className="hidden h-px w-14 bg-primary/30 sm:block" />
                      <span className="hidden items-center gap-2 text-xs font-medium sm:flex">
                        <Leaf size={14} />
                        Single-origin inspired blends
                      </span>
                    </div>

                    <div className="space-y-4 lg:space-y-6">
                      <h1 className="font-headline text-[2.4rem] leading-[0.95] text-on-background sm:text-[3.4rem] md:text-[4.3rem] lg:text-[5.2rem]">
                        The Soul of <br />
                        <span className="text-primary italic">Indian Spice</span>
                      </h1>
                      <p className="max-w-xl text-[15px] leading-relaxed text-on-surface-variant sm:text-lg">
                        Experience the visceral aroma of hand-picked, stone-ground masalas crafted
                        for the modern apothecary kitchen. Built to feel lush, refined, and full
                        of warmth across every screen.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                      <Link
                        className="spice-gradient inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-on-primary shadow-xl shadow-primary/20 transition-transform hover:scale-105"
                        href="/shop"
                      >
                        Shop The Collection
                        <ArrowRight size={18} />
                      </Link>
                      <Link
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-outline/80 bg-white/70 px-8 py-4 font-bold text-on-surface backdrop-blur transition-colors hover:bg-surface-container"
                        href="#brand-promise"
                      >
                        Our Process
                        <Sparkles size={16} />
                      </Link>
                    </div>

                    <div className="grid max-w-2xl grid-cols-3 gap-3 pt-2 sm:gap-4 sm:pt-4">
                      <div className="rounded-2xl border border-white/50 bg-white/65 p-4 backdrop-blur">
                        <p className="font-headline text-2xl text-primary sm:text-3xl">70+</p>
                        <p className="mt-1 text-[11px] leading-4 text-on-surface-variant sm:text-sm">
                          Years of spice craft
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/50 bg-white/65 p-4 backdrop-blur">
                        <p className="font-headline text-2xl text-primary sm:text-3xl">14</p>
                        <p className="mt-1 text-[11px] leading-4 text-on-surface-variant sm:text-sm">
                          Signature blends
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/50 bg-white/65 p-4 backdrop-blur">
                        <p className="font-headline text-2xl text-primary sm:text-3xl">100%</p>
                        <p className="mt-1 text-[11px] leading-4 text-on-surface-variant sm:text-sm">
                          Aroma-first sourcing
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-on-background shadow-md transition-all hover:bg-white md:left-8"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-on-background shadow-md transition-all hover:bg-white md:right-8"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 md:bottom-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all shadow-sm border border-white/20 ${
                index === currentSlide ? 'w-10 bg-primary' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 md:px-8 md:py-24" id="collections">
        <div className="mb-16">
          <h2 className="font-headline text-4xl text-on-background">Shop Our Signature Range</h2>
          <p className="mt-3 text-on-surface-variant">Handpicked masalas and spice blends curated for modern kitchens</p>
          <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shopProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.name} product={product} variant="preview" />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/shop"
            className="spice-gradient inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-on-primary shadow-xl shadow-primary/20 transition-transform hover:scale-105"
          >
            Explore Full Collection
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-surface-container-low px-4 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 xl:gap-12">
          {homeBenefits.map((benefit) => {
            const accentClass =
              benefit.accent === 'secondary'
                ? 'bg-secondary-container text-on-secondary-container'
                : benefit.accent === 'primary'
                  ? 'bg-primary-container text-on-primary-container'
                  : 'bg-tertiary-container text-on-tertiary-container';

            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center gap-3 rounded-3xl bg-white/65 px-5 py-7 text-center shadow-sm sm:px-6 sm:py-8"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-full shadow-sm ${accentClass}`}>
                  <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                </div>
                <h4 className="font-headline text-lg sm:text-xl">{benefit.title}</h4>
                <p className="max-w-xs text-sm leading-6 text-on-surface-variant">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f3f0ea] px-4 py-20 sm:px-6 md:px-8 md:py-24" id="brand-promise">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2 className="font-headline text-4xl uppercase tracking-wide text-[#8b1d1d] md:text-5xl">
            Our Story
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#2f241c]" />

          <div className="mx-auto mt-10 max-w-5xl border-x-4 border-[#c89b3c] px-6 py-4 sm:px-10">
            <p className="text-xl italic leading-relaxed text-[#33261f] md:text-3xl md:leading-[1.55]">
              &quot;At Veritraa, we believe the soul of Indian cooking lies in the purity of its
              spices. Every product in our catalogue is sourced directly from farmers,
              lab-tested for quality, and packed under hygienic conditions with no additives,
              no fillers, no compromise.&quot;
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border border-[#caa363] bg-[#f7f4ef] p-8 text-center shadow-sm">
              <span className="mb-4 block text-lg text-[#8b1d1d]">✦</span>
              <h3 className="mb-4 font-headline text-4xl uppercase tracking-wide text-[#8b1d1d] md:text-5xl">
                Vision
              </h3>
              <p className="text-xl leading-relaxed text-[#2f241c] md:text-2xl">
                To build a globally respected Indian brand rooted in authentic origins and
                defined by uncompromised purity.
              </p>
            </div>

            <div className="border border-[#caa363] bg-[#f7f4ef] p-8 text-center shadow-sm">
              <span className="mb-4 block text-lg text-[#8b1d1d]">✦</span>
              <h3 className="mb-4 font-headline text-4xl uppercase tracking-wide text-[#8b1d1d] md:text-5xl">
                Mission
              </h3>
              <p className="text-xl leading-relaxed text-[#2f241c] md:text-2xl">
                To source, craft, and deliver clean-label, traceable spices that meet modern
                quality standards while building women-led supply chains that create
                sustainable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24" id="best-sellers">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-headline text-4xl text-on-background">Our Best Sellers</h2>
              <p className="mt-2 text-on-surface-variant">
                Most-loved masalas from our signature collection.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Star size={16} className="text-primary" />
              Handpicked customer favorites
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {bestSellerProducts.map((product) => (
              <ProductCard key={product.name} product={product} variant="preview" />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              className="spice-gradient inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-on-primary transition-transform hover:scale-105"
              href="/shop"
            >
              View All Masalas
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-20 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-10 rounded-3xl border border-outline-variant/20 bg-surface-container-low p-8 md:grid-cols-[1.05fr_0.95fr] md:p-12">
          <div>
            <h2 className="mb-5 font-headline text-4xl text-on-background md:text-5xl">
              The Story of Our Company
            </h2>
            <p className="mb-8 text-base leading-relaxed text-on-surface-variant md:text-lg">
              Born from family spice traditions, Veritraa blends heritage techniques with
              modern quality control. Every batch is crafted to retain authentic aroma,
              flavor depth, and kitchen-ready freshness.
            </p>
            <Link
              className="spice-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-on-primary transition-transform hover:scale-105"
              href="/shop"
            >
              Explore Our Range
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              alt="Veritraa heritage"
              className="h-full w-full object-cover"
              src="/quality-section.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="material-symbols-outlined mb-4 text-4xl text-primary">
              format_quote
            </span>
            <h2 className="font-headline text-3xl">What Our Patrons Say</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className={`rounded-[1.5rem] border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm ${
                  testimonial.featured ? 'z-10 md:scale-[1.03]' : ''
                }`}
              >
                <p className="mb-6 text-sm italic leading-7 text-on-surface">{`"${testimonial.quote}"`}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container font-bold text-primary">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{testimonial.name}</p>
                    <p className="text-xs text-on-surface-variant">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
