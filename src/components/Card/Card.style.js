import styled from "styled-components";
import { Link } from "react-router-dom";
import clothesLogo from "../../assets/clothes-logo.svg";

export const FlexImage = styled.div`
  @media (max-width: 768px) {
    margin: 10px 0px;
  }
  @media (max-width: 320px) {
    margin: 5px 0px;
    width: 280px;
    height: 405px;
  }
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

export const Hover = styled.div`
  height: 100%;
`;

export const HoverEffect = styled.div`
  @media (max-width: 768px) {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    color: ${(props) => props.theme.text.light};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  opacity: 0.5;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    opacity: 0;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
      color: ${(props) => props.theme.text.light};
      opacity: 1;
      display: ${(props) => props.display};
      flex-direction: column;
      justify-content: flex-end;
    }
  }
`;

export const HoverBottom = styled.div``;

export const HoverText = styled.div`
  font-size: 24px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
