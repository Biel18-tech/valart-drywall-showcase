import { create } from "zustand";

export interface CartItem {
  name: string;
  brand: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  toggleCart: () => void;
  setOpen: (open: boolean) => void;
  totalItems: () => number;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.name === item.name);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  removeItem: (name) =>
    set((state) => ({ items: state.items.filter((i) => i.name !== name) })),
  updateQuantity: (name, quantity) =>
    set((state) => ({
      items: quantity <= 0
        ? state.items.filter((i) => i.name !== name)
        : state.items.map((i) => (i.name === name ? { ...i, quantity } : i)),
    })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (open) => set({ isOpen: open }),
  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));
