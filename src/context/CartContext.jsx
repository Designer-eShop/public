import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(localStorage.getItem("cart") || []);

  localStorage.setItem("cart", items);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
