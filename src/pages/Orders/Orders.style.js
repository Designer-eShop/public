import styled from "styled-components";

export const Title = styled.div`
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
    margin-left: 15px;
    margin-top: 40px;
  }
  margin-top: 64px;
  font-size: 64px;
  line-height: 77px;
  color: ${(props) => props.theme.text.dark};
  margin-left: 135px;
`;

export const Container = styled.div`
  @media (max-width: 768px) {
    padding: 24px 8px;
  }
  background: ${(props) => props.theme.background.light};
  margin: 18px 0px;
  padding: 64px 115px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const DataBox = styled.div`
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }
  font-size: 40px;
  line-height: 48px;
  color: ${(props) => props.theme.text.dark};
`;

export const TotalContainer = styled.div`
  @media (max-width: 768px) {
    padding: 0px 15px;
    margin-bottom: 64px;
  }
  text-align: right;
  color: ${(props) => props.theme.text.dark};
  border-top: 2px solid ${(props) => props.theme.border.dark};
`;

export const Total = styled.div`
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    margin-top: 16px;
  }
  font-size: 40px;
  line-height: 48px;
  margin: 32px 0px 16px 0px;
`;
