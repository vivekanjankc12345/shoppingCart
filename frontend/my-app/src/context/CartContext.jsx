import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 const addToCart = (product) => {
  setCart((prev) => {
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
      toast.dismiss(`add-${product.id}`);
      toast.success(`Increased quantity of ${product.name}`, { id: `add-${product.id}` });
      return prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    }
    toast.dismiss(`add-${product.id}`);
    toast.success(`${product.name} added to cart`, { id: `add-${product.id}` });
    return [...prev, { ...product, qty: 1 }];
  });
};


  const updateQty = (id, qty) => {
    setCart((prev) => {
      if (qty < 1) {
        const removed = prev.find((item) => item.id === id);
        toast.error(`${removed?.name || "Item"} removed from cart`);
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) => (item.id === id ? { ...item, qty } : item));
    });
  };

  const removeFromCart = (id) => {
    const item = cart.find((p) => p.id === id);
    toast.error(`${item?.name || "Item"} removed`);
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeFromCart, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
