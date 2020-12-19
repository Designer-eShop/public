import styled from "styled-components";
import { ReactComponent as ClothesLogo } from "../../assets/clothes-logo.svg";

export const Container = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
    flex-direction: column;
    padding: 64px 0px;
  }
  @media (min-width: 1440px) {
    width: 1024px;
  }
  margin: 0px 148px;
  padding: 160px 0px 128px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  @media (max-width: 768px) {
    min-width: 290px;
    min-height: 420px;
  }
  @media (max-width: 768px) {
    max-width: 290px;
    max-height: 420px;
  }
  min-width: 440px;
  min-height: 600px;
`;

export const TextBox = styled.div`
  @media (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-flow: nowrap column;
    justify-content: left;
  }
  text-align: left;
  margin-left: 112px;
`;

export const Logo = styled(ClothesLogo)`
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    margin-top: 32px;
  }
  width: 64px;
  height: 64px;
  .clotheslogo {
    fill: #383c43;
  }
`;

export const Product = styled.div`
  color: ${(props) => props.theme.text.dark};
  font-size: 64px;
  line-height: 77px;
`;

export const Name = styled.div`
  color: ${(props) => props.theme.text.dark};
  font-size: 40px;
  line-height: 48px;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.text.dark};
  font-size: 16px;
  line-height: 150%;
  font-family: Roboto;
  &:first-child {
    margin-top: 16px;
  }
`;

export const Price = styled.div`
  @media (max-width: 768px) {
    margin: 32px 9px;
  }
  color: ${(props) => props.theme.text.dark};
  margin: 64px 0px 32px 0px;
  font-size: 40px;
  line-height: 48px;
`;
