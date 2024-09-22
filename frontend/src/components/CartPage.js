import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom'; 
import '../styles/CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate(); 

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleQuantityChange = (item, quantity) => {
    updateQuantity(item, quantity);
  };

  const handlePayment = () => {
    navigate('/payment'); 
  };

  const total = cartItems.reduce((acc, curr) => acc + parseFloat(curr.price) * curr.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-image-container">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                </div>
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <div className="quantity-container">
                    <button onClick={() => handleQuantityChange(item, item.quantity - 1)} className="decrease-button">
                      <i className="fa fa-minus-circle"></i>
                    </button>
                    <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))} className="quantity-input" />
                    <button onClick={() => handleQuantityChange(item, item.quantity + 1)} className="increase-button">
                      <i className="fa fa-plus-circle"></i>
                    </button>
                  </div>
                  <button onClick={() => handleRemove(item)} className="remove-button">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <p>Total: ${total}</p>
            <button onClick={handlePayment} className="payment-button">
              Proceed to Payment
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;

