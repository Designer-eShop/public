import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
`;

export const Wrapper = styled.section`
  @media only screen and (max-width: 600px) {
    max-width: 320px;
  }
  @media only screen and (min-width: 600px) {
    max-width: 600px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1400px) {
    max-width: 1400px;
  }
  margin: 0 auto;
`;
