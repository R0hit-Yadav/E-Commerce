import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AdminPage.css';

function AdminPage() {
  const [newItem, setNewItem] = useState({ name: '',image: null });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setNewItem({ ...newItem, image: e.target.files[0] });
    } else {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newItem.name);
    if (newItem.image) {
      formData.append('image', newItem.image);
    }

    axios.post('http://localhost:8000/api/cetagories/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setNewItem({ name: '', image: null });
      alert('Item added successfully!');
    })
    .catch(error => {
      console.error('There was an error adding the item!', error);
    });
  };

  return (
    <div className="admin-page">
      <h1>Admin - Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AdminPage;



