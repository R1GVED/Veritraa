export type Product = {
  id: string;
  name: string;
  category: 'premium-blends' | 'core-range' | 'dry-fruits';
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  image: string;
  images: string[];
  variants: ProductVariant[];
  rating: number;
  reviews: number;
  inStock: boolean;
  badges?: ('lab-tested' | 'best-seller' | 'new')[];
  highlights?: string[];
  ingredients?: string[];
  storage?: string;
  usage?: string;
};

export type ProductVariant = {
  id: string;
  weight: string;
  price: number;
  salePrice?: number;
  stock: number;
  sku: string;
};

export type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  variant: ProductVariant;
};

export type Order = {
  id: string;
  orderNumber: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: 'razorpay' | 'cod';
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
};

export type Address = {
  id?: string;
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  isDefault?: boolean;
};

export type User = {
  id: string;
  email: string;
  name: string;
  phone?: string;
  addresses: Address[];
  wishlist: string[];
  orders: Order[];
  createdAt: Date;
};
