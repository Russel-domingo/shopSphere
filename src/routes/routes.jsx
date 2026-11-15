import { createBrowserRouter } from "react-router";

import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;