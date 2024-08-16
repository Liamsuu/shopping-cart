import styled from "styled-components";
import { PropTypes } from "prop-types";

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

export default function Product(props) {
  return (
    <ProductWrapper>
      <ProductImage src={props.productImg} alt="product" />
      <ProductName>{props.productName}</ProductName>
      <ProductPrice>${props.productPrice}</ProductPrice>
      <button>Add to cart</button>
    </ProductWrapper>
  );
}

Product.propTypes = {
  productImg: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
};
