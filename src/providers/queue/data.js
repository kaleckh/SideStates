"use client";
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => { 
  let [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) ?? [])
    // setTonerOem((localStorage.getItem("tonerOem")))

  }, [])


  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};
