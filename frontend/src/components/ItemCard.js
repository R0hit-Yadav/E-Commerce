import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '../styles/ItemCard.css';

function ItemCard({ item }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;
