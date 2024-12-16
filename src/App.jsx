import { list } from "postcss";
import products from "./data";
import CardProducts from "./assets/Componentes/card/CardProducts";
import Navbar from "./assets/Componentes/navbar/navbar";
import Title  from './assets/Componentes/header/Title.jsx'
import Counter from './assets/Componentes/header/Counter.jsx'

function App(){
return(
    <>
    <Navbar></Navbar>
    <Title size={32}>Zapatillas</Title>
    <Counter></Counter>
   
    </>
);
}
export default App;