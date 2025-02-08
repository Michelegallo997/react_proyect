import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ProductDetails from "../products/ProductDetails";
import CartPage from "../Carrito/CartPage";
import CategoryProducts from "../products/CategoryProducts";  

const AppRoutes = ({ addToCart, cartItems, removeFromCart, updateQuantity }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
      <Route path="/categoria/:categoryName" element={<CategoryProducts addToCart={addToCart} />} />
      <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
    </Routes>
  );
};

export default AppRoutes;
