import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import '../styles/allitems.css';

function HeadphonePage() {
  const [headphone, setheadphone] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/headphone/')
      .then(response => {
        setheadphone(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="item-page">
    <h1>Audio & Headphones</h1>
    <div className="item-grid">
      {headphone.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
  );
}

export default HeadphonePage;
