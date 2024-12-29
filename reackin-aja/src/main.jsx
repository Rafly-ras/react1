import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ScrollTopTop } from "./components/ScrollTopTop.jsx";
import 'animate.css';
import 'bootstrap';
import 'aos';

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollTopTop />
    <App />
    </BrowserRouter>
  </StrictMode>,
)