import type { FeaturedProduct, ShopProduct } from '@/src/data/mockData';

interface ProductCardProps {
  readonly product: FeaturedProduct | ShopProduct;
  readonly variant: 'featured' | 'shop';
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
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/15 bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-square w-full overflow-hidden bg-surface-container">
        <img
          alt={shopProduct.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={shopProduct.image}
        />
        {shopProduct.tag ? (
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-tertiary px-3 py-1 text-xs font-bold text-on-tertiary shadow">
            <span className="material-symbols-outlined text-sm leading-none">{shopProduct.tag.icon}</span>
            {shopProduct.tag.label}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <h3 className="mb-1 min-h-[64px] font-headline text-[1.65rem] leading-[1.05] text-on-background sm:min-h-[72px]">
            {shopProduct.name}
          </h3>
          <p className="min-h-[40px] text-sm text-on-surface-variant opacity-70">
            {shopProduct.description}
          </p>
        </div>
        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-2">
            {shopProduct.sizes.map((size, index) => (
              <button
                key={size}
                className={`rounded-lg border border-outline-variant/20 px-3 py-1 text-xs font-label transition-colors hover:bg-primary-fixed ${
                  index === 0 ? 'bg-primary-fixed text-on-primary-fixed shadow-sm' : 'bg-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-headline text-[2rem] leading-none text-on-background">
              {shopProduct.price}
            </span>
            <button className="spice-gradient rounded-full p-3 text-on-primary shadow-lg shadow-primary/15 transition-transform hover:scale-105">
              <span className="material-symbols-outlined block leading-none">add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
