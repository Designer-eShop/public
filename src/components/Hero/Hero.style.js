import styled from "styled-components";
import HeroImage from "../../assets/Hero-image.jpg";

export const HeroSection = styled.div`
  height: 595px;
  background-image: url("${HeroImage}");
  color: #ffffff;
  margin-bottom: 64px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroCentered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 208px 0px 128px 0px;
`;

export const Title = styled.div`
  font-size: 120px;
  line-height: 100%;
`;

export const Slogan = styled.div`
  font-size: 30px;
  line-height: 100%;
  margin-top: 16px;
`;

export const Buttons = styled.div`
  margin-top: 48px;
`;
