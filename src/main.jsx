import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import products from './data.js'
import CardProducts from "./assets/Componentes/card/CardProducts";
import App from './App.jsx'
import FlexContainer from './assets/Componentes/card/flexContainer.jsx';


const root= createRoot(document.getElementById('root'))
const listProducts= products.map((prod) => (<CardProducts key= { prod.id} title={prod.title} img={prod.img} description={prod.description} price={prod.price}/>))
root.render(
  
  <StrictMode>
    <App></App>
    <FlexContainer>{listProducts}</FlexContainer>
  </StrictMode>,
)
