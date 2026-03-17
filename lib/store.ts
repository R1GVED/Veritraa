import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductVariant } from './types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, variant: ProductVariant, quantity: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartSubtotal: () => number;
  getCartItemsCount: () => number;
}

const INITIAL_STATE: CartStore = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getCartSubtotal: () => 0,
  getCartItemsCount: () => 0,
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, variant, quantity) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.productId === product.id && item.variantId === variant.id
          );

          if (existingItem) {
            // Item exists, increase quantity
            const updatedItems = state.items.map((item) =>
              item.productId === product.id && item.variantId === variant.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
            return { items: updatedItems };
          }

          // New item, add to cart
          const newItem: CartItem = {
            productId: product.id,
            variantId: variant.id,
            quantity,
            product,
            variant,
          };
          return { items: [...state.items, newItem] };
        });
      },

      removeItem: (productId, variantId) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.productId === productId && item.variantId === variantId)
          ),
        }));
      },

      updateQuantity: (productId, variantId, quantity) => {
        set((state) => {
          // Remove item if quantity is 0 or less
          if (quantity <= 0) {
            return {
              items: state.items.filter(
                (item) => !(item.productId === productId && item.variantId === variantId)
              ),
            };
          }
          // Update quantity
          return {
            items: state.items.map((item) =>
              item.productId === productId && item.variantId === variantId
                ? { ...item, quantity }
                : item
            ),
          };
        });
      },

      clearCart: () => set({ items: [] }),

      getCartTotal: () => {
        const state = get();
        return state.items.reduce((total, item) => {
          const price = item.variant.salePrice || item.variant.price;
          return total + price * item.quantity;
        }, 0);
      },

      getCartSubtotal: () => {
        return get().getCartTotal();
      },

      getCartItemsCount: () => {
        const state = get();
        return state.items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'veritraa-cart',
    }
  )
);
