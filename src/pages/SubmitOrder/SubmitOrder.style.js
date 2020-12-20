import styled from "styled-components";

export const Container = styled.div`
  max-width: 290px;
  margin: 0 auto;
  padding: 128px 0px;
`;

export const Title = styled.div`
  font-size: 64px;
  line-height: 77px;
  color: ${(props) => props.theme.text.dark};
  text-align: center;
`;

export const SubTitle = styled.div`
  font-size: 40px;
  line-height: 48px;
  color: ${(props) => props.theme.text.dark};
  padding: 32px;
  text-align: center;
`;

export const NotificationBox = styled.div`
  width: 50%;
  position: fixed;
  left: 25%;
  @media (max-width: 768px) {
    width: 80%;
    left: 10%;
  }
`;
