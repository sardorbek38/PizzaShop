import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);

  const addToCart = (pizza, size, qty) => {
    setCartItems((prev) => {
      const key = `${pizza.id}-${size}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [...prev, { key, pizza, size, qty }];
    });
    setShowCartPage(true);
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => prev.filter((i) => i.key !== key));
  };

  const updateQty = (key, qty) => {
    if (qty < 1) {
      removeFromCart(key);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty } : i)),
    );
  };

  const totalCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cartItems.reduce(
    (sum, i) => sum + i.pizza.price * i.qty,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        showCartPage,
        setShowCartPage,
        addToCart,
        removeFromCart,
        updateQty,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
