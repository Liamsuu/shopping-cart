import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import BasketProduct from "../Product/BasketProduct";
import { useLocation } from "react-router-dom";

const BasketListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const BasketList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  width: 40%;
  padding: 0rem 1rem 2rem 1rem;
  border-radius: 5px;
`;

export default function ShoppingCart() {
  const location = useLocation();
  const itemsInCart = location.state.itemsInCart;
  const numItemsInCart = location.state.numItemsInCart;

  return (
    <>
      <NavBar itemsInCart={itemsInCart} numItemsInCart={numItemsInCart} />
      <BasketListWrapper>
        <BasketList>
          <h2 style={{ marginRight: "auto" }}>Basket</h2>

          {itemsInCart.map((productObj) => {
            return (
              <BasketProduct
                key={productObj.key}
                productImg={productObj.image}
                productName={productObj.title}
                productPrice={productObj.price}
              />
            );
          })}
        </BasketList>
      </BasketListWrapper>
    </>
  );
}
