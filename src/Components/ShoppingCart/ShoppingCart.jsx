import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

export default function ShoppingCart() {
  const location = useLocation();
  const itemsInCart = location.state.itemsInCart;
  const numItemsInCart = location.state.numItemsInCart;

  return (
    <>
      <NavBar itemsInCart={itemsInCart} numItemsInCart={numItemsInCart} />
    </>
  );
}
