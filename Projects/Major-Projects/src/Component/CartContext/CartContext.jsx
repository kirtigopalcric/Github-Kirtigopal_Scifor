import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  addOrder: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addOrder = (username, orderItems) => {
    const userOrders = JSON.parse(localStorage.getItem("userOrders")) || {};
    userOrders[username] = [...(userOrders[username] || []), orderItems];
    localStorage.setItem("userOrders", JSON.stringify(userOrders));
  };

  const contextValue = {
    cartItems,
    setCartItems,
    isLoggedIn,
    setIsLoggedIn,
    isAdmin,
    setIsAdmin,
    addOrder,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
