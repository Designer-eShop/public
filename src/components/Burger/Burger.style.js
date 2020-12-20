import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MenuImage } from "../../assets/menu.svg";
import { ReactComponent as CartImage } from "../../assets/cart.svg";

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
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
  flex-flow: column nowrap;
  background-color: ${(props) => props.theme.text.hover};
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  width: 300px;
  transition: transform 0.3s ease-in-out;
`;

export const Li = styled.li`
  padding: 18px 10px;
  color: ${(props) => props.theme.text.light};
`;

export const Hamburger = styled(MenuImage)`
  .menu {
    fill: ${(props) =>
      props.menufill === "secondary" ? "" : props.theme.text.dark};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text.light};
`;

export const Cart = styled(CartImage)``;
