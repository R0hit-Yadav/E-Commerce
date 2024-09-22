import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import '../styles/allitems.css';

function Phonepage() {
  const [phone, setphone] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/phone/')
      .then(response => {
        setphone(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="item-page">
    <h1>Smartphones & Accessories</h1>
    <div className="item-grid">
      {phone.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
  );
}

export default Phonepage;
