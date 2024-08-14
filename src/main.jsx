import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "cart",
    element: <ShoppingCart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
