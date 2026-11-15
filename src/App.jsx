import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <main className="bg-black text-white min-h-screen">
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold">
              Welcome to ShopSphere!
            </h1>

            <p className="text-2xl font-black">
              Your favorite Store!
            </p>
        </div>
      </main>
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