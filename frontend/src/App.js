import '@fortawesome/fontawesome-free/css/all.min.css';
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
import Phonepage from './components/Phone';
import CameraPage from './components/Camera';
import LaptopPage from './components/Laptop';
import GamingPage from './components/Gaming';
import HeadphonePage from './components/Headphone';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import { OrdersProvider } from './components/OrdersContext';


function App() {
  const [loggedIn, setLoggedIn] = useState(false); 
  return (
    <CartProvider>
      <OrdersProvider>
      <Router>
      <Navbar loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/payment" element={<PaymentPage />} /> 
          <Route path="/phone" element={<Phonepage />} /> 
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/laptop" element={<LaptopPage />} />
          <Route path="/gaming" element={<GamingPage />} />
          <Route path="/headphone" element={<HeadphonePage />} /> 
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn}></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <ToastContainer />
      </Router>
      </OrdersProvider>
    </CartProvider>
  );
}

export default App;
