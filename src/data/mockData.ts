export type NavLink = {
  label: string;
  href: string;
};

export type CollectionItem = {
  title: string;
  description?: string;
  image: string;
  span: 'large' | 'small';
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: string;
  accent: 'secondary' | 'primary' | 'tertiary';
};

export type FeaturedProduct = {
  name: string;
  price: string;
  image: string;
  reviews: string;
  badge?: string;
  rating: 4.5 | 5;
};

export type ShopProduct = {
  name: string;
  description: string;
  price: string;
  image: string;
  sizes: string[];
  tag?: {
    icon: string;
    label: string;
  };
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
  featured?: boolean;
};

export type ExportRegion = {
  icon: string;
  title: string;
  description: string;
};

export type BulkOption = {
  label: string;
  title: string;
  description: string;
  featured?: boolean;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type StoreLocation = {
  city: string;
  name: string;
  address: string;
  timings: string;
  contact: string;
};

export const navLinks: ReadonlyArray<NavLink> = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Exports', href: '/exports' },
  { label: 'Store Locator', href: '/store-locator' },
];

export const homeCollections: ReadonlyArray<CollectionItem> = [
  {
    title: 'Spice Blends',
    description: 'Masterfully curated for authentic flavor.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVWi-mwqIcCVkHH_hMa3Be2ithZoExPKvrinXsLS8qMgNpqjaBqTX1_58sLv7uAGdBMOj5hsJo7MrWznzRl6rAwLHPvCfNcJZds9jfrGdqeFFsnntyanfaxk0n8tGYbT9khvv8BvwQVRDZgiV-qFqlukiLmA9HlVNpbM-KdsPEfoZyd_ggTwMoZVhDE-yO-l3r_Up99iNINYfVw_Xd-y9g_oUpqlviWIqFoJmrVhlI5IYbvduFfxkUDV_iRo_HQwJd1PfeMpDIdNU',
    span: 'large',
  },
  {
    title: 'Whole Spices',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzUYPD58FYawGf3fhJl8vCfVvkVegh6J5VLJ_CFvMuR_pJvUj8eXOM40sVE5pMb1SsYvlLA4CTNGN8T16O3NcQ8xx1Hoi2FEzUF_9YFvLDnQ3DNfTh4YeuD6rAj4ZR1VhudAKJUGrNyM421ZtsW674GFHdlNeIMFvCcBwes1BZ4oXnd6KZak__Zi0ZQsg-0Ds77OqlyJs0JM33wcTY29z19gHLIBVnGcvoXjiN_h7OcoLwdpqZAyMZwvxW32KukMkDW99QtJGjeNQ',
    span: 'small',
  },
  {
    title: 'Gift Boxes',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvkNoMPihXrnkXR6cZInvZGnmSouFUkygG2BuE5Qrq3vbC5LBTBUmTNJ6Fh8pr3yxj2QRdqFoF81eT9jSXyO5tW57Su6-WRmlrpi9ZJI1fdgKsOPP-hiqzSpAgiT_zeTVkFaIm3IWkzQILuiwevSvRlnmFnA4F3ryVgywZm1q6kV2X_h-N1UGsogdmGW_W4dS6_DmPqPnJaQvK3IKtLm3FDUWMgfvMPqO-nkYJ53IbUgt2mm6wKRAwB5VIB1Hx6wna4knK1VEP89o',
    span: 'small',
  },
];

export const homeBenefits: ReadonlyArray<BenefitItem> = [
  {
    title: 'Purity',
    description:
      "Zero fillers, zero artificial colors. Just the raw, potent essence of nature's finest harvests.",
    icon: 'verified',
    accent: 'secondary',
  },
  {
    title: 'Aroma',
    description:
      'Cold-processed grinding ensures that every volatile oil is preserved for a sensory explosion.',
    icon: 'air',
    accent: 'primary',
  },
  {
    title: 'Hand-picked',
    description:
      'Sourced directly from single-origin farms across the spice coast of India.',
    icon: 'eco',
    accent: 'tertiary',
  },
];

export const featuredProducts: ReadonlyArray<FeaturedProduct> = [
  {
    name: 'Kashmiri Red Chili',
    price: 'Rs. 450.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsH07k9Jz8fLmy_RUYod_NYAdUAGd5mXq53bC6RnhH68xiukosYHj8zdOOYZZ5jBvGLlFPg2aw2-ZRZCAUo_wTUZTZUr3E-4aagUUowEF83LCvPX23045ASme-sqj0Mx-2rlqF8bAx1RQP2TOnS-kIVl7O5Z5Ku50ntp-aic2Io6xogYxlrw7NKij8jEuj3iqg1Qs3Yprbb9_jXEsF0cKz3Hf3i3OAxPTOFBhoQscz-bWs0A6rTYSLC1c_5VMOu43NYJn1YLmeShc',
    reviews: '(124 reviews)',
    badge: 'Bestseller',
    rating: 5,
  },
  {
    name: 'Lakadong Turmeric',
    price: 'Rs. 380.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2wNhtfRx-a4b_dUsgBo-r0XiGCAN4mV5NkZXx-UFBI0z9afkB2nqPCNg1EOoJVWP--bGKsQuHnRIAgWalUJhTVDyGidNbqEREzKv8HBIWepE2NWce75enIyJYvK3jlQOQBibsvKWKMJI1bIf2ZH8MQRz17VONlMBuQsuLsl2aaRKwqcu42VS8U2oI6ADc2dX8OkelN4QxXsumvo6tRIQCfuqQhRcJwUhulBc8EW9TPkrq3V-s-S3jrED8FYGELdXLEVW8Jqvkyj4',
    reviews: '(89 reviews)',
    rating: 5,
  },
  {
    name: "Grandfather's Garam Masala",
    price: 'Rs. 520.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSzEvW8Pws9wLZ1bJ4z8NWEgIA-H1S3oFhzDlKhUHu3GWjVDzAnzdY83SpnFrEibgPxZDpfri_S01A-HYzySjHwqeX7-6VzkRNonElUgbbWjsXArkUwshXX2FOwrbMIa9U9MXXNgPIuzIn2QY0cJ1LsIlImIy6vuCmDkZesWs5nObYw3Iqf5Fz4gEABKt7W_ij6oy-2lmJ1cabqZNrwdancK4HJGCD6yP64usQFyuUib3L6dpF1WF7GJcOR5Gwl909k5L1mVqVgmI',
    reviews: '(210 reviews)',
    rating: 4.5,
  },
  {
    name: 'Grade-A Saffron',
    price: 'Rs. 1,200.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAM4GAhoKOvsXxA6oHgvQoPgN3sgj5YrOGCrHjNeUktIIQ0ylwaocheG09KoNFUX-G68iv8bJrNuwPembYH7mTySAg_s9SxTm5bXujCqoUbEP5eNjVYpTGlrseF1z8ey6z9HMV-yaynEocVg27da0YlLlOn17xA7z0YR9oZoq4BSF5gpS-Uow_qekUk0vu9SHPEn_Qvr82P-AVSJsRpe6OzqSjg-JSM-Y2vdrqIOFq_HBJa36hhhvZHDBDpscqFsiLXU-NzYA8EDyk',
    reviews: '(56 reviews)',
    rating: 5,
  },
];

export const shopCategories: ReadonlyArray<string> = [
  'All Collections',
  'Traditional Masalas',
  'Kolhapuri Special',
  'Pure Powders',
  'Kitchen Essentials',
];

export const shopProducts: ReadonlyArray<ShopProduct> = [
  {
    name: 'Garam Masala',
    description: 'Aromatic blend for ultimate warmth.',
    price: 'Rs. 199',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkS_A93ZSDNFkJob6Fza629SNGD0-SoyRfLQhaA0os_Zs7SFT4u-lWl6TxqIz19bduwRIL5iQ_RcVqHhdklj_SHPOry0qH8jDGDeViXlmDsgtq375tT7FAXrafBEfyZPZjVhlo0WFNDtfMgyNofMC1bsWVA1v4Ped06A6znOakJCI-DXLyyK_9k-VucdPMMjTUpugAINuL4yQDF0jA04P_6UwBfELNYBcbs7NDsJCUUXkHKmgJM5OwLsLiHttslUr3x7bcyYAqa9Y',
    sizes: ['100g', '250g', '500g'],
    tag: { icon: 'local_fire_department', label: 'High Heat' },
  },
  {
    name: 'Kanda Lasun Chutney',
    description: 'Authentic Maharashtrian punch.',
    price: 'Rs. 149',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfnxyZB33ai2DD2-sqWwhtgzAunF3NvJP06V7NsbMeFjYIS_eao87XSp7E020DyLTx13jyVA84jnoTThYldU28HWsDvK59gp8ApKwEPG0PCMQ8YIUQeZUbKAsKgHOAryHstZIlGdbVw-yVUYsJWzykcol58RRpSAWDSNtXtLigc3iIzwPF0K-eW-cKHRQZV9D2np84GvgdklsMxeOgvxDE5TcAob4VreIcbI_F7RoaIrMBM5C77VEziQ9ZMMIRS792S8SZXeingcg',
    sizes: ['100g', '250g'],
  },
  {
    name: 'Malvani Fish Fry Masala',
    description: 'Coastal zest for every catch.',
    price: 'Rs. 169',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYn4neV_VrBcqziJlRrlb5U3Mrsvh79WqqMvzODevxyOdtnxdZmn3uYX5QPRzOJLnuK4oEBsqy3yxZ52dZsDqi-jEoLEBMflIewdlNQKVmAWajbttVWQKNR_C3ptUdcWJjTecVIEepQZaeJjotNaLA3vbhUYpNqk31ofe5wE4EszoVhcvzsqUKSdgcIJiZ5ayZXi-AaEAhqREumM6zcLxZ-aU0NGilKh3TRr8JY_aIzS4oPlVNfH3KUdd8OTr27a4nxpE0FNTtF_g',
    sizes: ['100g', '250g'],
  },
  {
    name: 'Kala Masala',
    description: 'Rich, dark, and smoky heritage.',
    price: 'Rs. 199',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNMP3yfuuCx02mbZcHpAvYQpYMj94NkP0A1BYR8wg1BrJTJpw77Ue2TNU0U4kkGUxnpTFL2utJE1d1TT7hpuweYeU1hu75ILM3lqvJvoi_oIEJq9LJ8JGNePcHTMc3kLWHcBzPJH3FGyjL7panQ4-9yNpu1_L4kpp2JUPXfWzpmPj5EYcYzIyzXaJktBbcVtx27y41L4CduusZie-DV9tP97IYfP5rxeDPfgi9K_Gj7mkI-o70oYdHWP2ZFQLjL1qPzqvUaGwDmmI',
    sizes: ['100g', '250g'],
  },
  {
    name: 'Turmeric Powder',
    description: 'High curcumin content gold.',
    price: 'Rs. 99',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTVVuXiKoMOl7W7X-iKfTD969iRzfveuVhBwlLTKlgQDbBwyljhU9LqI2bsppOHxINZJJQqjzo-CrEw0SYNptgl1YrfXO6HfY9obp4SEurtsg98j3yL7KGBRJTGViEjSlOAB7XNYZScL-FfIpOu7NcL5Ps2XPLcE2no4coTpwBdCTrJR-2h0L8sUCXZk3bijsHismhL_OGQI-hng9pUfeM6OEpcO8WLtPV9YiJ-bsnfLzE9y-WmwyUmCWdBv1tAhZvDgeT3tbF87A',
    sizes: ['100g', '250g', '500g'],
  },
  {
    name: 'Red Chilli Powder',
    description: 'Sun-dried, vibrant heat.',
    price: 'Rs. 129',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOMdmZEtHRfNnDUAd1Hm1Nck3Vm5ZOyczc7QCD870eIoIHhnVgkZ0KXL-38vrvaHNaEEq_IIgG6cB9PIExA7apCHKtQsYSCYwDhuia5cpjcsJYgpvWXZQoRxx4lWeab8lBTlt1qyKse-m7Z3mhRWCpJWOatrhWsrbbUR3X7RERnjSLrXJ0TCJpTx58Q_4eO6lf2augN_w8Ju2ExnvtQhlpDB11mD0XHzIeVPY3aozGD64XXSeNBz7okZ-l_c52Aa9VvdjGRbePeiw',
    sizes: ['100g', '250g', '500g'],
  },
  {
    name: 'Shahi Biryani Masala',
    description: 'Royal flavor for festive feasts.',
    price: 'Rs. 249',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuz4M4ULMBNZMnpCmVlp0uvtr0CIb-628UPGIO22K3i_pe3yFZ8OmeBnQGYxKnJHr1TyCS079HQ3oawcrScd-plbPSbcXBwyiVu3GhW1LK-ohB0_YyaZR6ZPsL73-3vLSaYLsv5G0lmlZGpyhYtbTC5OSI-3jtJZz8nhxnkfL0zt2feNjygG0joDqfdj7w1U4Ma3dHiLILtMMdN7YPO2-hJiZwLjRSyGXt4GaDMOzm23OTBlz6FraqFcvY6mk9cY7WaQrAFs0NGpE',
    sizes: ['100g', '250g'],
  },
  {
    name: 'Chaat Masala',
    description: 'Tangy, salty, and addictive.',
    price: 'Rs. 139',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAh6zv7N6UDJJjKZTVcmJudvd5-atIJ0A7sV8csV6KFCV6MrcJF1CyAre6YMpRkSWv37zMrzP6E1VINF8TBRt1CWWuC06_5M8dcineZzveUi6RaMD_79ZGoDaT9wlo1eZpu6w-C-3r4A-YxbxfFhkmNy4IJd9OzBME_IeuqWd3STzT3BSTjsW09S2PARCAm3L-ver0o6Tg36oD5k8fpX3pK6GrvjhSWuX0AHAprcT3jRQ_1zNSd5KrRu_F0m_xhshdIu0ThA_kmINE',
    sizes: ['100g', '250g', '500g'],
  },
];

export const testimonials: ReadonlyArray<Testimonial> = [
  {
    quote:
      "The aroma when I opened the Garam Masala jar was like walking into my grandmother's kitchen. Exceptional quality.",
    name: 'Amrita Sharma',
    role: 'Food Blogger',
    initial: 'A',
  },
  {
    quote:
      "Finally found a brand that doesn't compromise on purity. Their Lakadong Turmeric is genuinely life-changing for my morning wellness ritual.",
    name: 'Rohan Mehta',
    role: 'Chef at Spicery',
    initial: 'R',
    featured: true,
  },
  {
    quote:
      "Beautiful packaging and even better contents. This was the perfect gift for my parents. They're loyal customers now!",
    name: 'Sarah Jenkins',
    role: 'Home Enthusiast',
    initial: 'S',
  },
];

export const exportRegions: ReadonlyArray<ExportRegion> = [
  {
    icon: 'public',
    title: 'North America',
    description:
      'Serving high-end culinary retailers and organic health stores across the United States and Canada with specialized FDA-compliant packaging.',
  },
  {
    icon: 'euro',
    title: 'Europe',
    description:
      'Distributed through London, Paris, and Berlin hubs. Adhering to strict EU organic certification standards for our boutique spice collections.',
  },
  {
    icon: 'account_balance',
    title: 'Middle East',
    description:
      'Supplying premium saffron and bespoke spice blends to luxury hospitality groups and gourmet distributors in Dubai and Riyadh.',
  },
];

export const bulkOptions: ReadonlyArray<BulkOption> = [
  {
    label: '5kg',
    title: 'Boutique Selection',
    description: 'Triple-layered vacuum sealed aluminum packs.',
    featured: true,
  },
  {
    label: '10kg',
    title: 'Culinary Reserve',
    description: 'Moisture-proof reinforced cartons.',
  },
  {
    label: '25kg',
    title: 'Industrial Wholesale',
    description: 'Heavy-duty food grade barrels with inner liners.',
  },
];

export const footerQuickLinks: ReadonlyArray<FooterLink> = [
  { label: 'Home', href: '/' },
  { label: 'Shop All', href: '/shop' },
  { label: 'Exports', href: '/exports' },
  { label: 'Store Locator', href: '/store-locator' },
];

export const footerHelpLinks: ReadonlyArray<FooterLink> = [
  { label: 'Shipping Policy', href: '#' },
  { label: 'Returns & Refunds', href: '#' },
  { label: 'Contact Us', href: '/exports#enquiry' },
  { label: 'FAQs', href: '#' },
];

export const footerLinktreeLinks: ReadonlyArray<FooterLink> = [
  { label: 'Instagram', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'Download Brochure', href: '/exports#brochure' },
  { label: 'Linktree', href: '#' },
];

export const storeLocations: ReadonlyArray<StoreLocation> = [
  {
    city: 'Mumbai',
    name: 'Veritraa Pantry at Kala Ghoda',
    address: '14 Ropewalk Lane, Kala Ghoda, Mumbai 400001',
    timings: 'Mon-Sat, 10:00 AM - 8:30 PM',
    contact: '+91 98765 12001',
  },
  {
    city: 'Pune',
    name: 'The Spice Atelier',
    address: '22 Prabhat Road, Deccan Gymkhana, Pune 411004',
    timings: 'Daily, 11:00 AM - 9:00 PM',
    contact: '+91 98765 12002',
  },
  {
    city: 'Bengaluru',
    name: 'Veritraa Experience Counter',
    address: '8 Lavelle Road, Ashok Nagar, Bengaluru 560001',
    timings: 'Mon-Sun, 11:00 AM - 8:00 PM',
    contact: '+91 98765 12003',
  },
];
