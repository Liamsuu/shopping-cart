import Homepage from "./src/Components/Homepage/Homepage";
import ShoppingCart from "./src/Components/ShoppingCart/ShoppingCart";
import ErrorPage from "./src/Components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <ShoppingCart />,
  },
];

export default routes;
