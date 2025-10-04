import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-gray-800 text-white p-3 flex justify-between items-center">
      <Link to="/" className="">🏠 Home</Link>
      <Link to="/checkout" className="">
        🛒 Cart {totalItems > 0 && <span>({totalItems})</span>}
      </Link>
    </nav>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </CartProvider>
  );
};

export default App;
