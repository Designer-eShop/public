import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MenuImage } from "../../assets/menu.svg";
import { ReactComponent as CartImage } from "../../assets/cart.svg";

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 24px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  /* flex-flow: row nowrap; */
  flex-flow: column nowrap;
  background-color: #a4a4a4;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(40%)" : "translateX(100%)")};
  top: 0;
  right: 0;
  width: 300px;
  transition: transform 0.3s ease-in-out;
`;

export const Li = styled.li`
  padding: 18px 10px;
  color: #fff;
`;

export const Hamburger = styled(MenuImage)``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

export const Cart = styled(CartImage)``;
