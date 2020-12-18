import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 61px 10px;
`;

export const FlexBox = styled.div`
  @media (max-width: 768px) {
    margin: 5px 0px;
    width: 290px;
    height: 242px;
  }
  width: 325px;
  height: 450px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlexBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopDiv = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.text.dark};
`;

export const CenterDiv = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.text.dark};
`;

export const BottomDiv = styled.div`
  font-size: 90px;
  color: ${(props) => props.theme.text.dark};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text.dark};
`;
