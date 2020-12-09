import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-bottom: 1px solid gray;
  box-shadow: 0 4px 2px -2px gray;
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
  &:hover {
    color: #eee;
    transition: 1s;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
