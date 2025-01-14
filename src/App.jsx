

import Example from "./Componentes/navbar/navbar";
import { BrowserRouter} from "react-router-dom";
import AppRoutes from "./Componentes/home/rout";



function App() {

  return (
    <>
    <BrowserRouter>
      <Example />
      <AppRoutes />
      </BrowserRouter>
      
      
    </>
    
  );
}

export default App;
