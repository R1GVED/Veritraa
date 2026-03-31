import { storeLocations } from '@/src/data/mockData';

export default function StoreLocatorPage() {
  return (
    <div className="bg-surface pt-24 text-on-background">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 block font-label text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Store Locator
              </span>
              <h1 className="mb-6 font-headline text-5xl md:text-7xl">
                Find Veritraa Near You
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                Visit our experience counters and retail partners to discover the aroma,
                texture, and heritage of our masala collections in person.
              </p>
            </div>

            <div className="rounded-2xl bg-surface-container-low p-8 shadow-soft">
              <div className="mb-6 flex items-center gap-3 rounded-full bg-surface px-5 py-4">
                <span className="material-symbols-outlined text-primary">search</span>
                <input
                  className="w-full border-none bg-transparent outline-none"
                  placeholder="Search by city or PIN code"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-surface p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant">
                    Cities
                  </p>
                  <p className="mt-2 font-headline text-3xl text-primary">3</p>
                </div>
                <div className="rounded-xl bg-surface p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant">
                    Partners
                  </p>
                  <p className="mt-2 font-headline text-3xl text-primary">12+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-8 py-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {storeLocations.map((location) => (
              <div key={location.name} className="rounded-2xl bg-surface p-8 shadow-sm">
                <span className="rounded-full bg-primary-fixed px-3 py-1 text-xs font-bold uppercase tracking-widest text-on-primary-fixed">
                  {location.city}
                </span>
                <h2 className="mt-5 font-headline text-2xl">{location.name}</h2>
                <p className="mt-4 leading-relaxed text-on-surface-variant">{location.address}</p>
                <div className="mt-6 space-y-2 text-sm text-on-surface-variant">
                  <p>{location.timings}</p>
                  <p>{location.contact}</p>
                </div>
                <button className="mt-8 rounded-full border border-primary px-6 py-3 font-bold text-primary transition-colors hover:bg-primary hover:text-white">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-screen-2xl rounded-3xl bg-primary p-12 text-on-primary md:p-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-headline text-4xl">Want Veritraa in Your Store?</h2>
              <p className="mt-4 max-w-xl text-on-primary/80">
                We are expanding our retail footprint through premium food halls, boutique
                grocers, and culinary concept stores.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a
                className="rounded-full bg-surface px-8 py-4 font-bold text-primary"
                href="/exports#enquiry"
              >
                Enquire for Partnership
              </a>
              <a
                className="rounded-full border border-white/40 px-8 py-4 font-bold text-white"
                href="/exports#brochure"
              >
                View Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
