import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ProductDetails from "../products/ProductDetails";
import CartPage from "../Carrito/CartPage";
import CategoryProducts from "../products/CategoryProducts";  
import SearchResults from "../navbar/SearchResults";

const AppRoutes = ({ addToCart, cartItems, removeFromCart, updateQuantity, searchQuery }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
      <Route path="/categoria/:categoryName" element={<CategoryProducts addToCart={addToCart} />} />
      <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
      <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
    </Routes>
  );
};

export default AppRoutes;
