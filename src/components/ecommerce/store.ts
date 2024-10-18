import { create } from "zustand";
import type { Product } from "./types";

type Store = {
  cart: Product[];
  cartMap: Record<Product["id"], number>;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
};

export const useProductStore = create<Store>((set) => ({
  cart: [],
  cartMap: {},

  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
      cartMap: {
        ...state.cartMap,
        [item.id]: (state.cartMap[item.id] ?? 0) + 1,
      },
    })),

  removeFromCart: (id) =>
    set((state) => {
      const newCart = [...state.cart];
      const newCartMap = { ...state.cartMap };

      const index = state.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        newCart.splice(index, 1);
      }

      newCartMap[id] = newCartMap[id] - 1;

      return {
        cart: newCart,
        cartMap: newCartMap,
      };
    }),
}));
