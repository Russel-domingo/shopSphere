import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((currentItems) => [
        ...currentItems,
        product
    ]);
}

  return (
    <div>
      <Navbar cartItems={cartItems.length}/>
      
      <Outlet context={{cartItems, addToCart}}/>
      
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