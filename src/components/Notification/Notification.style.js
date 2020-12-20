import styled from "styled-components";

export const Box = styled.div`
  margin: 0 auto;
  text-align: center;
  font-family: Roboto;
  max-width: 100%;
`;

export const NotificationBox = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  padding: 16px 0px;
  color: black;
  font-size: 16px;
  line-height: 19px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.color === "success"
      ? props.theme.notification.success
      : props.theme.notification.danger};
`;

export const NotificationButton = styled.span`
  float: right;
  margin-right: 10px;
  color: ${(props) => props.theme.text.dark};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.text.hover};
  }
`;
