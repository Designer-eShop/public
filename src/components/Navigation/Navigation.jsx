import React, { useContext, useState, useEffect } from "react";
import * as S from "./Navigation.style";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { Section, Burger } from "../";

function Navigation({ location }) {
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  // const history = useHistory();
  // const [scrollbar, setScrollbar] = useState(false);

  // const [fill, setFill] = useState("");
  // useEffect(() => {
  //   if (history.location.pathname !== "/") {
  //     setFill("#383C43");
  //   } else {
  //     setFill("#ffffff");
  //   }
  // }, [history]);

  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollbar(true);
  //   } else {
  //     setScrollbar(false);
  //   }
  // };
  //  navbgcolor={scrollbar ? "#383C43" : "#383C43"}

  // window.addEventListener("scroll", changeBackground);

  return width > 768 ? (
    <Section fullWidth>
      <S.Content>
        <S.Header>
          <S.LogoDiv>
            <S.StyledLogo to="/">
              <S.Logo />
            </S.StyledLogo>
          </S.LogoDiv>
          <S.CenterDiv>
            <S.CenterText>
              <S.StyledLink to="/forhim">MAN</S.StyledLink>
            </S.CenterText>
            <S.CenterText>
              <S.StyledLink to="/forher">WOMAN</S.StyledLink>
            </S.CenterText>
          </S.CenterDiv>
          <S.MenuDiv>
            <S.StyledImage to="/cart">
              <S.ItemCount
                background={cart.items.length === 0 ? "#a4a4a4" : "#c33633"}
              >
                {cart.items.length}
              </S.ItemCount>
              <S.Cart />
            </S.StyledImage>
            {auth.state && auth.state !== "null" && (
              <S.MenuText>
                <S.StyledLink
                  onClick={() => {
                    localStorage.removeItem("token");
                    auth.setState("");
                  }}
                  to="/"
                >
                  Log Out
                </S.StyledLink>
              </S.MenuText>
            )}
            <S.MenuText>
              {!auth.state && <S.StyledLink to="/login">LOGIN</S.StyledLink>}
            </S.MenuText>
            <S.MenuText>
              {!auth.state && (
                <S.StyledLink to="/register">REGISTER</S.StyledLink>
              )}
            </S.MenuText>
          </S.MenuDiv>
        </S.Header>
      </S.Content>
    </Section>
  ) : (
    <S.Content>
      <S.Header>
        <S.StyledLogo to="/">
          <S.Logo />
        </S.StyledLogo>
        <Burger />
      </S.Header>
    </S.Content>
  );
}

export default Navigation;
