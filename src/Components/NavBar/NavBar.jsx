import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  background-color: #e0e7ff; // change after
  height: 5rem;

  display: flex;
  gap: 5rem;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 3rem;
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

export default function NavBar() {
  return (
    <NavWrapper>
      <NavLogo src="/public/logo.svg" />
      <NavSearchWrapper>
        <NavSearchInput />
        <button type="submit"></button>
      </NavSearchWrapper>
      <Link to="cart">
        <img src="" alt="cart" />
      </Link>
    </NavWrapper>
  );
}
