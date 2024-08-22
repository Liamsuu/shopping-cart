import styled from "styled-components";
import { PropTypes } from "prop-types";

const BasketProductWrapper = styled.div`
  display: flex;
  height: 15rem;
  width: 100%;
  padding: 2rem 0;
  gap: 1rem;
  /* maybe change border colour after  */
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const BasketProductImg = styled.img`
  width: 20%;
  object-fit: cover;
`;

const BasketProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const BasketPriceDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProductRemove = styled.button`
  width: fit-content;
  background: none;
  border: 0;
  cursor: pointer;
  margin-top: auto;
  margin-left: auto;
  /* later maybe style this so font colour is different */
  &:hover {
    text-decoration: underline;
  }
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin-left: auto;
`;

export default function BasketProduct(props) {
  return (
    <BasketProductWrapper>
      <BasketProductImg src={props.productImg} />
      <BasketProductDetailContainer>
        <h3>{props.productName}</h3>
        <p>Quantity: {props.productObj.quantity}</p>
        <ProductRemove
          onClick={() => {
            // find index of product object in list with same id
            const index = props.productList.findIndex((object) => {
              return object.id === props.productObj.id;
            });
            // copy array, remove item from copied array
            let newArr = JSON.parse(JSON.stringify(props.productList));
            newArr.splice(index, 1);
            // reset the state with new copied list without product that was removed
            props.setNewProductList(newArr);
          }}
        >
          Remove
        </ProductRemove>
      </BasketProductDetailContainer>
      <BasketPriceDetailContainer>
        <ProductPrice>
          ${props.productPrice * props.productObj.quantity}
        </ProductPrice>
      </BasketPriceDetailContainer>
    </BasketProductWrapper>
  );
}

BasketProduct.propTypes = {
  productImg: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productList: PropTypes.array,
  productObj: PropTypes.object,
  setNewProductList: PropTypes.func,
};
