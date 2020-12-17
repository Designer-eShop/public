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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 144px;
  padding: 32px 20px 64px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const LogoDiv = styled.div`
  padding-right: 167px;
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
`;

export const MenuText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding: 0 14px;
`;

export const Logo = styled.img`
  margin-left: 40px;
`;

export const Inst = styled(Instagram)`
  padding: 0 12px;
`;

export const Fb = styled(Facebook)`
  padding: 0 12px;
`;

export const Twi = styled(Twitter)`
  padding: 0 12px;
`;

export const CenterText = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #a4a4a4;
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
  color: #ffffff;
`;
