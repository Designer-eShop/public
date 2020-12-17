import styled from "styled-components";

export const Container = styled.div``;

export const Image = styled.div`
  width: 95px;
  height: 150px;
  background: url("${(props) => props.background}");
`;
