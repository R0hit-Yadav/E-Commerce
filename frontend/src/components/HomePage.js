import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import '../styles/HomePage.css';
import Carousel from './Carousel';

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/items/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="home-page">
      <Carousel/>
      <h1>Category</h1>
      <div className="category-grid">
        <div className="category-card">
          <img src="/static/images/iphone.jpg" alt="Category Name" />
          <h2>Smartphones & Accessories</h2>
          <button onClick={() => { window.location.href = '/category/1' }}>Go to Category</button>
        </div>
        <div className="category-card">
        <img src="/static/images/leptoppc.jpg" alt="Category Name" />          
        <h2>Laptops & Computers</h2><br></br>
          <button onClick={() => { window.location.href = '/category/2' }}>Go to Category</button>
        </div>
        <div className="category-card">
        <img src="/static/images/Camera.jpg" alt="Category Name" />          
        <h2>Cameras & Photography</h2>
          <button onClick={() => { window.location.href = '/category/3' }}>Go to Category</button>
        </div>
        <div className="category-card">
        <img src="/static/images/headphone.jpg" alt="Category Name" />          
        <h2>Audio & Headphones</h2><br></br>
          <button onClick={() => { window.location.href = '/category/4' }}>Go to Category</button>
        </div>
        <div className="category-card">
        <img src="/static/images/PS5.jpg" alt="Category Name" />          
        <h2>Gaming & Consoles</h2><br></br>
          <button onClick={() => { window.location.href = '/category/5' }}>Go to Category</button>
        </div>
        <div className="category-card">
        <img src="/static/images/all items.jpg" alt="Category Name" />          
        <h2>Search For More</h2><br></br>
          <button onClick={() => { window.location.href = '/category/5' }}>Go to Category</button>
        </div>
      </div>
      <br />
      <footer className="footer">
        <div className="footer-logo">
          <a href="/">E-Commerce</a>
        </div>
        
        <div className="footer-links"> 
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          
          <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
