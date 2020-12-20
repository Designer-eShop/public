import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CartImage } from "../../assets/cart.svg";
import { ReactComponent as LogoImage } from "../../assets/logo.svg";
import { ReactComponent as MenuImage } from "../../assets/menu.svg";

export const Content = styled.div``;

export const Header = styled.div`
  position: ${(props) => props.position};
  @media (min-width: 768px) {
    width: ${(props) => props.navwidth};
  }
  @media (max-width: 768px) {
    background: ${(props) =>
      props.navbgcolor === "ok" ? props.theme.background.dark : ""};
    background-position: fixed;
    height: 80px;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
  }
  @media (max-width: 1440px) {
    background: ${(props) =>
      props.navbgcolor === "ok" ? props.theme.background.dark : ""};
    background-position: fixed;
    height: 80px;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
  }
  @media (min-width: 1450px) {
    background: ${(props) =>
      props.navbgcolorfs === "ok" ? props.theme.background.dark : ""};
  }
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 47.5px;
  box-sizing: border-box;
`;

export const LogoDiv = styled.div``;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MenuText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
`;

export const Logo = styled(LogoImage)`
  @media (max-width: 768px) {
    margin-left: 10px;
  }
  .logocolor {
    fill: ${(props) =>
      props.logofill === "secondary" ? "" : props.theme.text.dark};
  }
`;

export const Hamburger = styled(MenuImage)``;

export const Cart = styled(CartImage)`
  padding: 0 12px;
  .cart {
    fill: ${(props) =>
      props.cartfill === "secondary" ? "" : props.theme.text.dark};
  }
`;

export const CenterText = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 29px;
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  margin-left: 14px;
  text-decoration: none;
  color: ${(props) =>
    props.linkcolor === "secondary"
      ? props.theme.text.light
      : props.theme.text.dark};
  &:hover {
    color: ${(props) => props.theme.text.hover};
  }
`;

export const StyledImage = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  .cart:hover {
    fill: ${(props) => props.theme.text.hover};
  }
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const ItemCount = styled.span`
  color: ${(props) => props.theme.text.light};
  position: absolute;
  top: -50%;
  right: 0;
  background: ${(props) => props.background};
  width: 20px;
  height: 20px;
  border: 1px solid #383c43;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  border-radius: 50%;
`;
