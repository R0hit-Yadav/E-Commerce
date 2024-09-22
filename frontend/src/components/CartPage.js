import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom'; 
import '../styles/CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handlePayment = () => {
    navigate('/payment'); 
  };

  const total = cartItems.reduce((acc, curr) => acc + parseFloat(curr.price), 0).toFixed(2);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <p>Total: ${total}</p>
            <button onClick={handlePayment} className="payment-button">Proceed to Payment</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;

