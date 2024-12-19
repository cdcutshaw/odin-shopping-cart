import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import{ CartProvider } from "./context/CartContext.jsx"
import Shop from "./pages/Shop";
import Home from './pages/Home.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: "shop", element: <Shop/>},
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)
