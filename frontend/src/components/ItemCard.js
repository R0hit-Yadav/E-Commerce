import React, { useState, useContext } from 'react';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ItemCard.css';

function ItemCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart()

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
    toast.success(`${item.name} added to cart with quantity ${quantity}!`);
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>₹{item.price}</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
        <button onClick={handleDecrease} className="btn btn-secondary" style={{ marginRight: '5px' }}>-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button onClick={handleIncrease} className="btn btn-secondary" style={{ marginLeft: '5px' }}>+</button>
      </div>
      <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
    </div>
  );
}

export default ItemCard;
