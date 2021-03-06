import styled from "styled-components";

export const InputBlock = styled.div``;

export const Title = styled.div`
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  padding-bottom: 64px;
  color: ${(props) => props.theme.text.dark};
`;

export const Container = styled.div`
  width: 290px;
  margin: 0 auto;
  padding: 128px 0px;
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
