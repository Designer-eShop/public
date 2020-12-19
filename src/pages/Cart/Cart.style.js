import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    padding: 0px 15px;
    min-height: 100%;
  }
  padding: 135px 135px 0px 135px;
  min-height: 350px;
`;

export const TotalContainer = styled.div`
  @media (max-width: 768px) {
    padding: 0px 15px;
    margin-bottom: 64px;
  }
  padding: 32px 135px 135px 135px;
  text-align: right;
  color: ${(props) => props.theme.text.dark};
`;

export const Total = styled.div`
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    margin-top: 16px;
  }
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
    padding: 64px 15px 32px 15px;
  }
  padding: 135px 135px 0px 135px;
  color: ${(props) => props.theme.text.dark};
  font-size: 64px;
  line-height: 77px;
`;
