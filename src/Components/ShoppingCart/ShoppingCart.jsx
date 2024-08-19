import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

export default function ShoppingCart() {
  const location = useLocation();
  const itemsInCart = location.state?.itemsInCart;
  return (
    <>
      <NavBar itemsInCart={itemsInCart} />
    </>
  );
}
