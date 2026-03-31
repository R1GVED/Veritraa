import Link from 'next/link';
import { ArrowRight, Leaf, Sparkles, Star } from 'lucide-react';
import ProductCard from '@/components/site/ProductCard';
import SectionHeading from '@/components/site/SectionHeading';
import {
  featuredProducts,
  homeBenefits,
  homeCollections,
  testimonials,
} from '@/src/data/mockData';

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#efe7db] pt-20 md:min-h-screen md:items-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Vibrant spices"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJXLz_Rv81HrLaEZ7hToz5TPF_Cd0jArqQ4S8g4FwE2a83wyzBkAqYFawGjjPKZqQWmNuMFk8_XxSOAmA6B7jQ2GYGdTnjxbxlBEr001l1QORKVGQ9BtN6u9gPoE0jiZbCI3okX7qbFe9grbUWLOBv8iQP_j6S807MZJ0X8KjQqMXGYb_Gu_-rPYMdT6j_g2uhTh3c_bkJNP7FQQMhoUS1JRz8uNUy2tk2ON2_L2N8erdMy1rUy9Mf1kDUP0lT4ox90UXg8pFcAAA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent md:bg-gradient-to-r md:from-background md:via-background/72 md:to-background/10 lg:to-transparent" />
          <div className="absolute inset-y-0 left-0 hidden w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_48%)] md:block" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-4 pb-6 pt-16 sm:px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="flex max-w-2xl flex-col gap-6 rounded-[2rem] border border-white/45 bg-white/68 p-6 shadow-[0_32px_90px_-40px_rgba(26,28,26,0.55)] backdrop-blur-xl sm:p-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
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
              <h1 className="font-headline text-[2.9rem] leading-[0.94] text-on-background sm:text-[4rem] md:text-[5rem] lg:text-[6.3rem]">
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
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 md:px-8 md:py-24" id="collections">
        <div className="mb-12">
          <SectionHeading title="Explore our collections" />
          <div className="mt-3 h-1 w-24 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12 md:h-[720px]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-surface-container-low shadow-soft md:col-span-8 md:min-h-0">
            <img
              alt={homeCollections[0].title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              src={homeCollections[0].image}
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
              <h3 className="font-headline text-4xl text-white">{homeCollections[0].title}</h3>
              <p className="mt-2 max-w-sm font-body text-white/80">{homeCollections[0].description}</p>
            </div>
          </div>

          <div className="grid gap-6 md:col-span-4 md:grid-rows-2">
            {homeCollections.slice(1).map((collection) => (
              <div
                key={collection.title}
                className="relative min-h-[220px] overflow-hidden rounded-[1.75rem] bg-surface-container-low shadow-soft md:min-h-0"
              >
                <img
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  src={collection.image}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/15 to-transparent p-6">
                  <h3 className="font-headline text-2xl text-white">{collection.title}</h3>
                </div>
              </div>
            ))}
          </div>
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

      <section className="mx-auto max-w-screen-xl px-4 py-20 text-center sm:px-6 md:px-8 md:py-24" id="brand-promise">
        <SectionHeading
          align="center"
          eyebrow="The Veritraa Guarantee"
          title="Crafting Heritage in Every Grain"
        />

        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-surface-container-highest p-5 shadow-soft sm:p-6 md:p-12">
          <div className="absolute right-6 top-0 h-32 w-32 rounded-full bg-primary/6 blur-xl" />
          <div className="relative z-10 grid grid-cols-1 items-center gap-6 text-left md:grid-cols-[1fr_0.9fr] md:gap-12">
            <div className="rounded-[1.5rem] bg-white/60 p-5 backdrop-blur sm:p-6 md:p-8">
              <p className="mb-6 text-base leading-relaxed text-on-surface italic sm:text-lg">
                &quot;We don&apos;t just sell spices; we curate memories of home. Every
                batch is tested for curcumin levels, moisture, and essential oil content
                before it ever touches your kitchen.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-outline-variant/30">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                </div>
                <span className="font-bold text-on-surface">The Veritraa Guarantee</span>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[360px] rotate-[3deg] overflow-hidden rounded-[1.5rem] shadow-2xl shadow-primary/15 sm:max-w-[420px]">
              <img
                alt="Quality control"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMhBGwwn-PF2yfbAOPAXb5GPkIfygxNCXc1wyidw_sjU0c5AqVFsLTHHuT1a9OBZ7ptD4HCopSwh5GlPpOSkjzpVroHLXJAL8N19TUGNfz04srnEMbCIcBkYrxw_uEtAgduVuf3Xa1h8FIC-UA2lc4A1PG0auHwEgSxsCnpx9UjbS94gLPDo7Ivgrn9LLvXlzokEBDLh45WZsBrB0gjaPua5maD103709FsfvwyT5921yFwdS2pXDqm6GqzmOLf-Pfunfhvuuj2ls"
              />
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
                The flavors our community loves most.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Star size={16} className="text-primary" />
              Best-loved by our community
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} product={product} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[560px]">
        <div className="absolute inset-0">
          <img
            alt="Company story"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdEgpzRzkXZs8kcqHs9DWmUq2De020o4lfmoZZGx5rWxjRP-twebCC6Xo_vHJL2l9sIZA814Nlt1N7UahoZ7OtGH-20MX2X0yo0NUwsHGZKT44auHQaRJEsJI1RXWwx_zNZ4xl3E4BLy3j_QtQI_EARZTkIfrBdKDusfznsuPrcirWj8N-1Zvw8ghyrK0Lff5wl0sLZ4iT3ToamAv9OyionUjYXuFNxxLkosYlsFtfcNw4eDyYxALMapAMGzD0KMnDCafBLvQTm-o"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-md px-4 text-center text-white sm:px-6 md:px-8">
          <h2 className="mb-6 font-headline text-4xl md:text-5xl">The Story of Our Company</h2>
          <p className="mb-8 text-base font-light leading-relaxed opacity-90 md:text-lg">
            Founded in the narrow alleys of Old Delhi by a family of apothecaries,
            Veritraa has spent seven decades perfecting the alchemy of spices. We
            believe that true taste lies in the integrity of the soil and the patience
            of the grind.
          </p>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-bold text-on-background transition-all hover:bg-primary hover:text-white"
            href="/shop"
          >
            Read Our Heritage
            <ArrowRight size={16} />
          </Link>
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
