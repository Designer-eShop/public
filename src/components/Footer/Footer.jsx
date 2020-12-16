import React from "react";
import * as S from "./Footer.style";
import { Section } from "../";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <Section fullWidth>
      <S.Header>
        <S.LogoDiv>
          <S.StyledLogo to="/">
            <S.Logo src={logo} />
          </S.StyledLogo>
        </S.LogoDiv>
        <S.CenterDiv>
          <S.CenterText>
            <S.StyledLink to="/">FAQ</S.StyledLink>
          </S.CenterText>
          <S.CenterText>
            <S.StyledLink to="/">Contact</S.StyledLink>
          </S.CenterText>
          <S.CenterText>
            <S.StyledLink to="/">about us</S.StyledLink>
          </S.CenterText>
        </S.CenterDiv>
        <S.MenuDiv>
          <S.StyledImage to="/">
            <S.Inst />
          </S.StyledImage>
          <S.StyledImage to="/">
            <S.Twi />
          </S.StyledImage>
          <S.StyledImage to="/">
            <S.Fb />
          </S.StyledImage>
        </S.MenuDiv>
      </S.Header>
    </Section>
  );
}

export default Footer;
