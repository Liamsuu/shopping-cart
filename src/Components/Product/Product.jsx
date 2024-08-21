import styled from "styled-components";
import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;

const ProductName = styled.p`
  flex: 1;
`;

const ProductPrice = styled.p`
  flex: 1;
`;

const AddToCartBtn = styled.button`
  width: 6rem;
  padding: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid black;
  &:hover {
    background-color: #9ca3af;
  }
`;

export default function Product(props) {
  props.productObject.key = uuidv4();
  return (
    <ProductWrapper>
      <ProductImage src={props.productImg} alt="product" />
      <ProductName>{props.productName}</ProductName>
      <ProductPrice>${props.productPrice}</ProductPrice>
      <AddToCartBtn
        onClick={() => {
          props.setProductsInBasket([
            ...props.productsInBasket,
            props.productObject,
          ]);
        }}
      >
        Add to cart
      </AddToCartBtn>
    </ProductWrapper>
  );
}

Product.propTypes = {
  productImg: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productsInBasket: PropTypes.array,
  productObject: PropTypes.object,
  setProductsInBasket: PropTypes.func,
};
