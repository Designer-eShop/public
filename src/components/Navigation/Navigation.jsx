import React, { useContext, useState, useEffect } from "react";
import * as S from "./Navigation.style";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { Section, Burger } from "../";

function Navigation({
  linkcolor,
  linkhover,
  position,
  cartfill,
  logofill,
  menufill,
  navbgcolor,
  navbgcolorfs,
}) {
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
  const [open, setOpen] = useState(false);

  // Check for window width for responsive view
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  // Check for scrollbar position to change navigation background
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setOpen(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return width > 768 ? (
    <Section fullWidth>
      <S.Content>
        <S.Header
          navbgcolor={navbgcolor}
          navwidth={width - 15 + "px"}
          position={position}
          navbgcolorfs={navbgcolorfs}
        >
          <S.LogoDiv>
            <S.StyledLogo to="/">
              <S.Logo logofill={logofill} />
            </S.StyledLogo>
          </S.LogoDiv>
          <S.CenterDiv>
            <S.CenterText>
              <S.StyledLink
                linkcolor={linkcolor}
                hovercolor={linkhover}
                to="/forhim"
              >
                MAN
              </S.StyledLink>
            </S.CenterText>
            <S.CenterText>
              <S.StyledLink
                linkcolor={linkcolor}
                hovercolor={linkhover}
                to="/forher"
              >
                WOMAN
              </S.StyledLink>
            </S.CenterText>
          </S.CenterDiv>
          <S.MenuDiv>
            <S.StyledImage to="/cart">
              <S.ItemCount
                background={cart.items.length === 0 ? "#a4a4a4" : "#c33633"}
              >
                {cart.items.length}
              </S.ItemCount>
              <S.Cart cartfill={cartfill} />
            </S.StyledImage>
            {auth.state && auth.state !== "null" && (
              <S.MenuText>
                <S.StyledLink
                  linkcolor={linkcolor}
                  hovercolor={linkhover}
                  onClick={() => {
                    localStorage.removeItem("token");
                    auth.setState("");
                  }}
                  to="/"
                >
                  Log Out
                </S.StyledLink>
                <S.StyledLink
                  linkcolor={linkcolor}
                  hovercolor={linkhover}
                  to="/orders"
                >
                  Orders
                </S.StyledLink>
              </S.MenuText>
            )}
            <S.MenuText>
              {!auth.state && (
                <S.StyledLink
                  linkcolor={linkcolor}
                  hovercolor={linkhover}
                  to="/login"
                >
                  LOGIN
                </S.StyledLink>
              )}
            </S.MenuText>
            <S.MenuText>
              {!auth.state && (
                <S.StyledLink
                  linkcolor={linkcolor}
                  hovercolor={linkhover}
                  to="/register"
                >
                  REGISTER
                </S.StyledLink>
              )}
            </S.MenuText>
          </S.MenuDiv>
        </S.Header>
      </S.Content>
    </Section>
  ) : (
    <S.Content>
      <S.Header position={position} navbgcolor={navbgcolor}>
        <S.StyledLogo to="/">
          <S.Logo logofill={logofill} />
        </S.StyledLogo>
        <Burger
          open={open}
          handleClick={() => setOpen(!open)}
          menufill={menufill}
        />
      </S.Header>
    </S.Content>
  );
}

export default Navigation;
