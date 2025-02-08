import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./Componentes/home/rout";
import Footer from "./Componentes/home/footer";
import Navbar from "./Componentes/navbar/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Estado para el buscador

  // Función para añadir productos al carrito
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

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Función para actualizar cantidades
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
      <Navbar 
        cartItems={cartItems} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} // ✅ Pasamos el control del buscador
      />
      
      <AppRoutes 
        addToCart={addToCart} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity}
        searchQuery={searchQuery} // ✅ Pasamos la query de búsqueda
      />
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;