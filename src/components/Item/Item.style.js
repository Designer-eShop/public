import styled from "styled-components";
import { ReactComponent as ClothesLogo } from "../../assets/clothes-logo.svg";

export const Container = styled.div`
  margin: 0px 148px;
  padding: 160px 0px 128px 0px;
  width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 555px;
  height: 800px;
`;

export const TextBox = styled.div`
  text-align: left;
  margin-left: 138px;
`;

export const Logo = styled(ClothesLogo)`
  width: 64px;
  height: 64px;
  .clotheslogo {
    fill: #383c43;
  }
`;

export const Product = styled.div`
  color: #383c43;
  font-size: 120px;
  line-height: 144px;
`;

export const Name = styled.div`
  color: #383c43;
  font-size: 64px;
  line-height: 77px;
`;

export const Description = styled.div`
  color: #383c43;
  font-size: 16px;
  line-height: 150%;
  font-family: Roboto;
  &:first-child {
    margin-top: 16px;
  }
`;

export const Price = styled.div`
  color: #383c43;
  margin: 64px 0px 32px 0px;
  font-size: 64px;
  line-height: 77px;
`;
