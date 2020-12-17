import styled from "styled-components";
import { Link } from "react-router-dom";
import clothesLogo from "../../assets/clothes-logo.svg";
import cartLogo from "../../assets/cart.svg";

export const FlexImage = styled.div`
  width: 325px;
  height: 450px;
  margin: 10px 10px;
  background: url(${(props) => props.background});
  background-size: cover;
`;

export const ClothesLogo = styled.div`
  height: 20px;
  width: 20px;
  margin-bottom: 8px;
  background: url(${clothesLogo});
  background-repeat: no-repeat;
`;

export const CartLogo = styled.div`
  height: 20px;
  width: 20px;
  background: url(${cartLogo});
  background-repeat: no-repeat;
`;

export const Hover = styled.div`
  height: 100%;
`;

export const HoverEffect = styled.div`
  opacity: 0;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    color: white;
    opacity: 1;
    display: ${(props) => props.display};
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const HoverBottom = styled.div``;

export const HoverText = styled.div`
  font-size: 24px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #383c43;
`;
