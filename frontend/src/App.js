import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProfilePage from './components/ProfilePage';
import CartPage from './components/CartPage';
import AdminPage from './components/AdminPage';
import PaymentPage from './components/PaymentPage';
import { CartProvider } from './components/CartContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/payment" element={<PaymentPage />} /> 
        </Routes>
        <ToastContainer />
      </Router>
    </CartProvider>
  );
}

export default App;
