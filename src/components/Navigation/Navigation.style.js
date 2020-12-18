import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CartImage } from "../../assets/cart.svg";
import { ReactComponent as LogoImage } from "../../assets/logo.svg";
import { ReactComponent as MenuImage } from "../../assets/menu.svg";

export const Content = styled.div`
  background: #383c43;
`;

export const Header = styled.div`
  @media (min-width: 1400px) {
    width: 1400px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  box-sizing: border-box;
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
  margin-left: 40px;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const Hamburger = styled(MenuImage)``;

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
  color: #ffffff;
  &:hover {
    color: #a4a4a4;
  }
`;

export const StyledImage = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  .cart:hover {
    fill: #a4a4a4;
  }
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const ItemCount = styled.span`
  color: white;
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
