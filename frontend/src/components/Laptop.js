import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import '../styles/allitems.css';

function LaptopPage() {
  const [leptop, setleptop] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/laptop/')
      .then(response => {
        setleptop(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="item-page">
    <h1>Laptops & Computers</h1>
    <div className="item-grid">
      {leptop.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
  );
}

export default LaptopPage;
