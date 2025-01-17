import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import BlogPost from './component/BlogPost';
import { CartProvider } from './context/CartContex';
import Cart from './component/Cart';
import Onama from './component/Onama';
import Subvencije from './component/Subvencije';
import Proizvodi from './component/Proizvodi';
import Kalkulator from './component/Kalkulator';
import Footer from './component/footer';
function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/subvencije" element={<Subvencije />} />
        <Route path="/proizvodi" element={<Proizvodi />} />
        <Route path="/kalkulator" element={<Kalkulator />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </Router> </CartProvider>
  );
}

export default App;