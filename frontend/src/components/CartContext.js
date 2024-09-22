import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem !== item));
  };

  const updateQuantity = (item, quantity) => {
    setCartItems(
      cartItems.map(cartItem => {
        if (cartItem === item) {
          return { ...cartItem, quantity };
        }
        return cartItem;
      })
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

