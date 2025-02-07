// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { uploadProductToFirebase } from './uploadProduct.js'; // <-- Nombre exacto
import './index.css';
import App from './App.jsx';



const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-3l6cvzoplntxvuku.us.auth0.com"
      clientId="iJyJB7oMWrSkdU5jGnRXDLlrFa1Lb3Kd"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);