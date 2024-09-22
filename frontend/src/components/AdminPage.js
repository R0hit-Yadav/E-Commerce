import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AdminPage.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPage() {
  const [category, setCategory] = useState('phones');
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('price', price);

    await axios.post(`http://localhost:8000/api/${category}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    toast.success('item added successfully!');
    setName('');
    setImage(null);
  };

  return (
    <div className="admin-page">
      <h1>Admin - Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="phone">Smartphones & Accessories</option>
          <option value="laptop">Laptops & Computers</option>
          <option value="camera">Cameras & Photography</option>
          <option value="headphone">Audio & Headphones</option>
          <option value="gaming">Gaming & Consoles</option> 
        </select>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AdminPage;



