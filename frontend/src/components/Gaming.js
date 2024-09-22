import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import '../styles/allitems.css';

function GamingPage() {
  const [gaming, setgaming] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/gaming/')
      .then(response => {
        setgaming(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="item-page">
    <h1>Gaming & Consoles</h1>
    <div className="item-grid">
      {gaming.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
  );
}

export default GamingPage;
