// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { uploadProductToFirebase } from './uploadProduct.js'; // <-- Nombre exacto
import './index.css';
import App from './App.jsx';



const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
   
      <App />

  </StrictMode>
);