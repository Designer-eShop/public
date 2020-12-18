import styled from "styled-components";

export const HeroSection = styled.div`
  @media (min-width: 1440px) {
    width: 1440px;
  }
  margin: 0 auto;
  height: 595px;
  background-image: url("${(props) => props.backgroundimg}");
  color: #ffffff;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center; 
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
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled.div`
  @media (max-width: 768px) {
    font-size: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  font-size: 120px;
  line-height: 100%;
`;

export const Slogan = styled.div`
  @media (max-width: 768px) {
    font-size: 24px;
  }
  font-size: 30px;
  line-height: 100%;
  margin-top: 16px;
`;

export const Buttons = styled.div`
  margin-top: 48px;
  display: flex;
  @media (max-width: 768px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

export const Diff = styled.div`
  width: 24px;
`;

export const Section = styled.div``;
