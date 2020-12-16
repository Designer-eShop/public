import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexBox = styled.div`
  width: 335px;
  height: 450px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlexBoxBottom = styled.div``;

export const TopDiv = styled.div`
  font-size: 16px;
  color: #383c43;
`;

export const CenterDiv = styled.div`
  font-size: 40px;
  color: #383c43;
`;

export const BottomDiv = styled.div`
  font-size: 90px;
  color: #383c43;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #383c43;
`;
