import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
function App() {

  const [cartItems, setCartItems] = useState(() => {
    const saveCart = localStorage.getItem("cartItems");

    // return saveCart ? JSON.parse(saveCart) : [];
    if (saveCart !== null) {
      return JSON.parse(saveCart);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((currentItems) => {
      const existingProduct = currentItems.find((item) => item.id === product.id);

      if (existingProduct) {
        return currentItems.map((item) => {
          return item.id === product.id ? {...item, quantity: item.quantity + 1} : item;
        });
      }

      return [...currentItems, {...product, quantity: 1}];
    });
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== productId);
    })
  }

  // todo: add a Product quantity
  function upDateQuantity(productId, amount) {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        return item.id === productId ? { ...item, quantity: item.quantity + amount} : item;
      });
    });
  }



  return (
    <div>
      <Navbar cartItems={cartItems.length}/>
      
      <Outlet context={{cartItems, addToCart, removeFromCart, upDateQuantity}}/>
      
    </div>
    // <div className="min-h-screen bg-black flex flex-col items-center justify-center">
    //   <h1 className="text-7xl font-bold text-white">
    //     Welcome to ShopSphere!
    //   </h1>

    //   <p className="text-2xl font-black text-white">
    //     Your favorite store!
    //   </p>
    // </div>
  );
}

export default App;