import React from 'react';
import ReactDom from 'react-dom/client';
import App from "./App.jsx";
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.jsx';
import { CartProvider } from './context/CartContext.jsx'; // ✅ import CartContext
import { SearchProvider } from './context/SearchContext.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SearchProvider>
   <CartProvider> 
    <AuthProvider>
     {/* ✅ Wrap App with CartProvider */}
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
     
    </AuthProvider>
    </CartProvider>
    </SearchProvider>
  </BrowserRouter>
);
