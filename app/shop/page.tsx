import ProductCard from '@/components/site/ProductCard';
import { shopCategories, shopProducts } from '@/src/data/mockData';

export default function ShopPage() {
  return (
    <div className="bg-surface pb-20 pt-24 text-on-background">
      <header className="mx-auto max-w-screen-2xl px-8 py-16 text-center">
        <h1 className="mb-4 font-headline text-5xl tracking-tight md:text-7xl">
          The Modern Apothecary
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-on-surface-variant opacity-80">
          Heritage Indian spices, meticulously sourced and ground to perfection for the
          contemporary kitchen. Fragrant, vibrant, and pure.
        </p>
      </header>

      <section className="mx-auto mb-12 max-w-screen-2xl px-8">
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
          {shopCategories.map((category, index) => (
            <button
              key={category}
              className={`whitespace-nowrap rounded-full px-6 py-2 font-label text-sm ${
                index === 0
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant transition-colors hover:bg-surface-container-highest'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shopProducts.map((product) => (
          <ProductCard key={product.name} product={product} variant="shop" />
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-screen-2xl px-8">
        <div className="flex flex-col justify-between gap-12 rounded-xl bg-surface-container-low p-12 md:flex-row md:items-center md:p-24">
          <div className="max-w-xl">
            <h2 className="mb-4 font-headline text-4xl tracking-tight">Join the Spice Circle</h2>
            <p className="mb-8 text-on-surface-variant opacity-80">
              Receive monthly recipes from our master blenders and early access to our
              limited-run export collections.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                className="flex-1 rounded-md border-none bg-surface-container-high px-6 py-3 focus:ring-2 focus:ring-primary/20"
                placeholder="Email address"
                type="email"
              />
              <button className="spice-gradient rounded-full px-8 py-3 font-label font-semibold text-on-primary transition-transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
          <div className="hidden h-72 w-72 overflow-hidden rounded-full md:block">
            <img
              alt="Colorful spice containers"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXcV_FQN2lUmshH7132dpXtvWJgYmrQ4AgnytqR_6nkCFJGX-N1qLC--SXt0dI6k0SOnEMBVyv9vE0RvmVEN1HPg5IS2XOFRf2xtiZSrxYaifvrx1tg1l_o4peDioKTxh2S4wCmmlrt-aTNU7UPYTpDLiLmSmpGTXLaESoloQbSfTlKJwKCMdxIRR0GD1ZdfCsHR51BHXMv-x7RVWbbBEkC6o_rJnTofCD9JoRjzK5YROts6xuP6lfXoCGMtOBd_GYQrRfP3pZmtY"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
