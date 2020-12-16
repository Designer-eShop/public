import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CartImage } from "../../assets/cart.svg";
import { ReactComponent as LogoImage } from "../../assets/logo.svg";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: 1440px;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  box-sizing: border-box;
  background: ${(props) => props.navbgcolor};
`;

export const LogoDiv = styled.div`
  padding-right: 167px;
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
`;

export const MenuText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  padding: 0 14px;
`;

export const Logo = styled(LogoImage)`
  .logocolor {
    fill: ${(props) => props.fill};
  }
`;

export const Cart = styled(CartImage)`
  padding: 0 12px;
`;

export const CenterText = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 29px;
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
  &:hover {
    color: #a4a4a4;
  }
`;

export const StyledImage = styled(Link)`
  display: flex;
  align-items: center;
  .cart:hover {
    fill: #a4a4a4;
  }
  .cart {
    fill: ${(props) => props.fill};
  }
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
