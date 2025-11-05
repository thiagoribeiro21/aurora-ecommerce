// CartContext: estado global do mini-carrinho com persistência em localStorage
// API pública:
// - addItem(item, qty?): adiciona ou incrementa quantidade se já existir
// - removeItem(id), setItemQty(id, qty), clearCart()
// - openCart()/closeCart(): controla o Drawer
// Derivados: totalItems e subtotal calculados via useMemo
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  qty: number;
};

type AddItemInput = Omit<CartItem, 'qty'>;

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (item: AddItemInput, qty?: number) => void;
  removeItem: (id: string) => void;
  setItemQty: (id: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = 'cart:v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Hidrata do localStorage uma única vez (primeiro render)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  // Persiste no localStorage sempre que items muda
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (item: AddItemInput, qty = 1) => {
    // Se o produto já existe, soma a quantidade; senão, cria a linha
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const setItemQty = (id: string, qty: number) => {
    // Garante qty mínima 1 e remove linhas zeradas
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const { totalItems, subtotal } = useMemo(() => {
    // Deriva contagem total e subtotal em R$ a partir dos items
    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);
    return { totalItems, subtotal };
  }, [items]);

  const value: CartContextValue = {
    items,
    totalItems,
    subtotal,
    isOpen,
    addItem,
    removeItem,
    setItemQty,
    clearCart,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
