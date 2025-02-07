

import Example from "./Componentes/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./Componentes/home/rout";
import Footer from "./Componentes/home/footer";
import CategoryProducts from "./Componentes/products/CategoryProducts";


function App() {

  return (
    <>
    <BrowserRouter>
      <Example />
      <AppRoutes />
       <Routes>
       <Route path="/categoria/:categoryName" element={<CategoryProducts />} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>

      
      
    </>
    
  );
}

export default App;
