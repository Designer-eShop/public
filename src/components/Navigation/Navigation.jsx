import React, { useState } from "react";
import * as S from "./Navigation.style";
import { useHistory } from "react-router-dom";
import { Section } from "../";

function Navigation() {
  const history = useHistory();
  const [scrollbar, setScrollbar] = useState(false);

  const colorChange = () => {
    if (history.location.pathname !== "/") {
      return "#383C43";
    } else {
      return "#ffffff";
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollbar(true);
    } else {
      setScrollbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Section fullWidth>
      <S.Header navbgcolor={scrollbar ? "#383C43" : ""}>
        <S.LogoDiv>
          <S.StyledLogo to="/">
            <S.Logo fill={colorChange()} />
          </S.StyledLogo>
        </S.LogoDiv>
        <S.CenterDiv>
          <S.CenterText>
            <S.StyledLink color={colorChange()} to="/man">
              MAN
            </S.StyledLink>
          </S.CenterText>
          <S.CenterText>
            <S.StyledLink color={colorChange()} to="/woman">
              WOMAN
            </S.StyledLink>
          </S.CenterText>
        </S.CenterDiv>
        <S.MenuDiv>
          <S.StyledImage to="/cart" fill={colorChange()}>
            <S.Cart />
          </S.StyledImage>
          <S.MenuText>
            <S.StyledLink color={colorChange()} to="/login">
              LOGIN
            </S.StyledLink>
          </S.MenuText>
          <S.MenuText>
            <S.StyledLink color={colorChange()} to="/register">
              REGISTER
            </S.StyledLink>
          </S.MenuText>
        </S.MenuDiv>
      </S.Header>
    </Section>
  );
}

export default Navigation;
