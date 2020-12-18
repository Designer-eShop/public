import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Instagram } from "../../assets/social/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/social/ico.svg";
import { ReactComponent as Twitter } from "../../assets/social/icon.svg";

export const Content = styled.div`
  background: #383c43;
`;

export const Header = styled.div`
  @media (min-width: 1400px) {
    width: 1400px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 32px 0px 64px 0px;
    height: 251px;
  }
  padding: 0 47.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 144px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const LogoDiv = styled.div``;

export const CenterDiv = styled.div`
  display: flex;
`;

export const MenuDiv = styled.div`
  display: flex;
`;

export const MenuText = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 19px;
`;

export const Logo = styled.img``;

export const Inst = styled(Instagram)`
  margin-right: 12px;
`;

export const Fb = styled(Facebook)``;

export const Twi = styled(Twitter)`
  margin-right: 12px;
`;

export const CenterText = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 29px;
  padding: 0px 20px;
  @media (max-height: 768px) {
    padding: 0px 12px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text.light};
  &:hover {
    color: ${(props) => props.theme.text.hover};
  }
`;

export const StyledImage = styled(Link)`
  display: flex;
  align-items: center;
  .icons:hover {
    fill: #a4a4a4;
  }
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.text.light};
`;
