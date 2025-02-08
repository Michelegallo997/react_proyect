import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./Componentes/home/rout";
import Footer from "./Componentes/home/footer";
import CategoryProducts from "./Componentes/products/CategoryProducts";
import Navbar from "./Componentes/navbar/Navbar";  // ✅ IMPORTADO CORRECTAMENTE

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Función para añadir productos al carrito (incrementando cantidad si ya existe)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: Math.min((item.quantity || 1) + 1, product.stock) } 
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }]; 
      }
    });
  };

  // ✅ Función para eliminar un producto completamente del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // ✅ Función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (productId, newQuantity, stock) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: Math.max(1, Math.min(newQuantity, stock)) } 
          : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />
      <AppRoutes 
        addToCart={addToCart} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
      {/* ✅ Añadimos CategoryProducts aquí para asegurar que recibe addToCart */}
      <CategoryProducts addToCart={addToCart} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
