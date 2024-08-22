import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import BasketProduct from "../Product/BasketProduct";
import { useState } from "react";
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

const TotalCost = styled.p`
  margin-left: auto;
`;

function calculateQuantityOfItems(productObjArr) {
  let numOfItems = 0;
  productObjArr.forEach((product) => {
    numOfItems += product.quantity;
  });

  return numOfItems;
}

export default function ShoppingCart() {
  const location = useLocation();
  const [itemsInCart, setItemsInCart] = useState(
    JSON.parse(JSON.stringify(location.state.itemsInCart))
  );

  const numItemsInCart = calculateQuantityOfItems(itemsInCart);
  let totalCost = 0;

  return (
    <>
      <NavBar itemsInCart={itemsInCart} numItemsInCart={numItemsInCart} />
      <BasketListWrapper>
        <BasketList>
          <h2 style={{ marginRight: "auto" }}>Basket</h2>
          {itemsInCart.map((productObj) => {
            totalCost += productObj.price * productObj.quantity;
            return (
              <BasketProduct
                key={productObj.key}
                productList={itemsInCart}
                productImg={productObj.image}
                productName={productObj.title}
                productPrice={productObj.price}
                productObj={productObj}
                setNewProductList={setItemsInCart}
              />
            );
          })}
          <TotalCost>
            <b>Subtotal:</b> ${totalCost}
          </TotalCost>
        </BasketList>
      </BasketListWrapper>
    </>
  );
}
