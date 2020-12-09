import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.background};
  max-width: ${(props) => (props.maxWidth === "max" ? "100%" : "768px")};
  margin: 0 auto;
`;

export const Wrapper = styled.section`
  max-width: 768px;
  padding: 1em 2em;
  margin: 0 auto;
`;
