import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if(existingItem) {
        return prevCart.map((item) =>
          item.id === product.id? {...item, quantity: itemquantity + 1}
        : item
        );
      }
      return [...prevCart, {...product, quantity: 1 }];
    })
  }

  return (
    <>
      <Navbar cart={cart}/>
      <Outlet context={{addToCart, cart}}/>
    </>
  )
}

export default App
