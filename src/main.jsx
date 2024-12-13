import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './assets/Componentes/navbar/navbar.jsx'
import Title  from './assets/Componentes/header/Title.jsx'
import Counter from './assets/Componentes/header/Counter.jsx'
import products from './data.js'
import App from './App.jsx'

const root= createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Navbar/>
    <Title size={32}>Zapatos</Title>
    <Counter></Counter>
    <App></App>
  </StrictMode>,
)
