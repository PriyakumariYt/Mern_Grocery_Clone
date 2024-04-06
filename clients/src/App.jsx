import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useAuth } from './ContextApi/TokenApi';
// import { AuthProvider } from './ContextApi/TokenApi';
import { Logout } from './pages/Logout';
import Deal from './pages/Deal';
import Product from './pages/Product';
import { Outlet } from "react-router-dom";
import Cart from './pages/Cart';
import Payment from './pages/Payment';



function App() {
const {cart,removeFromCart,incrementQuantity,decrementQuantity,clearCart} = useAuth()
 return (
    <>
    <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/deal" element={<Deal />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/cart" element={<Cart 
          cart={cart}
          removeFromCart={removeFromCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          clearCart={clearCart}

          />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
         </Router>
<Outlet/>
  <Footer/>
    </>
  );
}

export default App;


