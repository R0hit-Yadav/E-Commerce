import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import '../styles/allitems.css';

function CameraPage() {
  const [camera, setcamera] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/camera/')
      .then(response => {
        setcamera(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="item-page">
    <h1>Cameras & Photography</h1>
    <div className="item-grid">
      {camera.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
  );
}

export default CameraPage;
