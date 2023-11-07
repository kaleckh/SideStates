"use client";
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => { 
  const [queue, setQueue] = useState([])
  return (
    <CartContext.Provider value={{queue, setQueue}}>
      {children}
    </CartContext.Provider>
  );
};
