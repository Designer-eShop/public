import styled from "styled-components";

export const Button = styled.button`
  @media (max-width: 768px) {
  }
  color: ${(props) => props.theme.text.light};
  font-size: 24px;
  line-height: 122.2%;
  border: 0;
  padding: 8px 24px;
  background: ${(props) => props.theme.button.default};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.button.hover};
  }
`;
