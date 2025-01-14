import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ProductDetails from "../products/ProductDetails";// Importar la página de detalles del producto

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
