import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// ✅ Import favicon from assets
import logo from './assets/logo.png';

// ✅ Dynamically set favicon
const link = document.querySelector("link[rel~='icon']");
if (link) {
  link.href = logo;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
