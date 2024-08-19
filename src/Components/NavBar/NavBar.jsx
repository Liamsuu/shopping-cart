import styled from "styled-components";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const NavWrapper = styled.div`
  background-color: #f9fafb;
  height: 5rem;

  display: flex;
  gap: 5rem;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 3rem;
  padding-bottom: 0.5rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const NavLogo = styled.img`
  height: 50%;
`;

const NavSearchWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 50%;
  height: 60%;
  margin-right: auto;
`;

const NavSearchInput = styled.input`
  flex: 1;
`;

const CartIcon = styled.img`
  height: 2rem;
`;

const CartItemNumber = styled.p`
  position: relative;
  right: 5.2rem;
  bottom: 1rem;
  background-color: #8b5cf6;
  padding: 0.1rem 0.4rem;
  border-radius: 50%;
  color: #f9fafb;
  font-weight: bold;
`;

export default function NavBar(props) {
  return (
    <NavWrapper>
      <Link to="/">
        <NavLogo src="/logo.svg" alt="logo" />
      </Link>
      <NavSearchWrapper>
        <NavSearchInput />
        <button type="submit"></button>
      </NavSearchWrapper>
      <Link to="cart" state={{ itemsInCart: props.itemsInCart }}>
        {/* maybe change the colour later of the shopping cart */}
        <CartIcon src="/shopping_cart.svg" alt="cart" />
      </Link>
      <CartItemNumber>{props.itemsInCart}</CartItemNumber>
    </NavWrapper>
  );
}

NavBar.propTypes = {
  itemsInCart: PropTypes.number,
};
