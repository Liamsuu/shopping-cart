import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function NavBar() {
  return (
    <NavWrapper>
      <Link to="/">
        <NavLogo src="/public/logo.svg" alt="logo" />
      </Link>
      <NavSearchWrapper>
        <NavSearchInput />
        <button type="submit"></button>
      </NavSearchWrapper>
      <Link to="cart">
        {/* maybe change the colour later of the shopping cart */}
        <CartIcon src="/public/shopping_cart.svg" alt="cart" />
      </Link>
    </NavWrapper>
  );
}
