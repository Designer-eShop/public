import styled from "styled-components";

export const Box = styled.div`
  margin: 0 auto;
  padding: 1em 0;
  width: 50%;
  text-align: center;
`;

export const NotificationBox = styled.div`
  font-size: 24px;
  padding: 1em 0;
  padding-left: 1em;
  border-radius: 6px;
  color: ${(props) => props.theme.text.light};
  font-weight: bolder;
  background-color: ${(props) =>
    props.color === "error" ? props.theme.button.default : "green"};
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
