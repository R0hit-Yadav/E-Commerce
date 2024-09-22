import React, { createContext, useContext, useState, useEffect } from 'react';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
    console.log('Orders in context:', orders);
  }, [orders]);

  const addOrder = (order) => {
    setOrders(prevOrders => {
      const newOrders = [...prevOrders, order];
      console.log('Adding new order:', order);
      console.log('Updated orders:', newOrders);
      return newOrders;
    });
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);