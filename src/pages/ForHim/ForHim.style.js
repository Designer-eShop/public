import styled from "styled-components";

export const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 61px 10px;
  min-height: 350px;
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
