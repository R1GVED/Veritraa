import Link from 'next/link';
import type { FeaturedProduct, ShopProduct } from '@/src/data/mockData';

interface ProductCardProps {
  readonly product: FeaturedProduct | ShopProduct;
  readonly variant: 'featured' | 'shop' | 'preview';
}

function renderStars(rating: FeaturedProduct['rating']) {
  if (rating === 4.5) {
    return (
      <>
        <span className="material-symbols-outlined text-sm text-tertiary">star</span>
        <span className="material-symbols-outlined text-sm text-tertiary">star</span>
        <span className="material-symbols-outlined text-sm text-tertiary">star</span>
        <span className="material-symbols-outlined text-sm text-tertiary">star</span>
        <span className="material-symbols-outlined text-sm text-tertiary">star_half</span>
      </>
    );
  }

  return (
    <>
      <span className="material-symbols-outlined text-sm text-tertiary">star</span>
      <span className="material-symbols-outlined text-sm text-tertiary">star</span>
      <span className="material-symbols-outlined text-sm text-tertiary">star</span>
      <span className="material-symbols-outlined text-sm text-tertiary">star</span>
      <span className="material-symbols-outlined text-sm text-tertiary">star</span>
    </>
  );
}

export default function ProductCard({
  product,
  variant,
}: Readonly<ProductCardProps>) {
  if (variant === 'preview') {
    const shopProduct = product as ShopProduct;

    return (
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/35 bg-surface-container-lowest shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container-low">
          <img
            alt={shopProduct.name}
            className="h-full w-full object-contain"
            src={shopProduct.image}
          />
          {shopProduct.tag ? (
            <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-tertiary px-3 py-1 text-xs font-bold text-on-tertiary shadow">
              <span className="material-symbols-outlined text-sm leading-none">{shopProduct.tag.icon}</span>
              {shopProduct.tag.label}
            </div>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="mb-3">
            <h3 className="mb-1 min-h-[48px] font-headline text-lg leading-[1.05] text-on-background sm:text-xl">
              {shopProduct.name}
            </h3>
            <p className="text-xs text-on-surface-variant opacity-70 sm:text-sm">
              {shopProduct.description}
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <span className="font-headline text-xl leading-none text-on-background sm:text-2xl">
                {shopProduct.price}
              </span>
              <Link
                href="/shop"
                className="spice-gradient rounded-full p-2 text-on-primary shadow-lg shadow-primary/15 transition-transform hover:scale-105 sm:p-3"
              >
                <span className="material-symbols-outlined block leading-none text-lg sm:text-xl">add_shopping_cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    const featuredProduct = product as FeaturedProduct;

    return (
      <div className="group w-full min-w-0">
        <div className="overflow-hidden rounded-2xl border border-outline-variant/15 bg-surface-container-lowest shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-primary/10">
          <div className="relative aspect-square">
            <img
              alt={featuredProduct.name}
              className="h-full w-full object-cover"
              src={featuredProduct.image}
            />
            {featuredProduct.badge ? (
              <span className="absolute left-4 top-4 rounded-full bg-tertiary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow">
                {featuredProduct.badge}
              </span>
            ) : null}
          </div>
          <div className="p-5 sm:p-6">
            <div className="mb-2 flex items-center gap-1">
              {renderStars(featuredProduct.rating)}
              <span className="ml-1 text-xs text-on-surface-variant">{featuredProduct.reviews}</span>
            </div>
            <h3 className="mb-1 font-headline text-lg">{featuredProduct.name}</h3>
            <p className="font-bold text-primary">{featuredProduct.price}</p>
            <button className="mt-4 w-full rounded-full border border-primary/60 py-3 font-bold text-primary transition-colors hover:bg-primary hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  const shopProduct = product as ShopProduct;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/35 bg-surface-container-lowest shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container-low">
        <img
          alt={shopProduct.name}
          className="h-full w-full object-contain"
          src={shopProduct.image}
        />
        {shopProduct.tag ? (
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-tertiary px-3 py-1 text-xs font-bold text-on-tertiary shadow">
            <span className="material-symbols-outlined text-sm leading-none">{shopProduct.tag.icon}</span>
            {shopProduct.tag.label}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3">
          <h3 className="mb-1 min-h-[52px] font-headline text-[1.35rem] leading-[1.06] text-on-background sm:min-h-[56px] sm:text-[1.45rem]">
            {shopProduct.name}
          </h3>
          <p className="min-h-[32px] text-xs text-on-surface-variant opacity-75 sm:text-sm">
            {shopProduct.description}
          </p>
        </div>
        <div className="mt-auto">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {shopProduct.sizes.map((size) => (
              <button
                key={size}
                className="rounded-lg border border-outline-variant/35 bg-surface px-2.5 py-1 text-[11px] font-label text-on-surface transition-colors hover:bg-surface-container-high"
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-headline text-[1.7rem] leading-none text-on-background sm:text-[1.85rem]">
              {shopProduct.price}
            </span>
            <button className="spice-gradient rounded-full p-2.5 text-on-primary shadow-lg shadow-primary/15 transition-transform hover:scale-105 sm:p-3">
              <span className="material-symbols-outlined block leading-none">add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
