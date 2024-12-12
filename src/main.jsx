import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './assets/Componentes/navbar/navbar.jsx'
import Title  from './assets/Componentes/header/Title.jsx'

const root= createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Navbar/>
    <Title size={32}>Zapatos</Title>
  </StrictMode>,
)
