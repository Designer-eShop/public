import styled from "styled-components";

export const HeroSection = styled.div`
  @media (min-width: 1400px) {
    width: 1420px;
  }
  margin: 0 auto;
  height: 595px;
  background-image: url("${(props) => props.backgroundimg}");
  color: #ffffff;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
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
  display: flex;
`;

export const Diff = styled.div`
  width: 24px;
`;

export const Section = styled.div``;
