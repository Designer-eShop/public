import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Logo_rinkuskiai.png";

function Header() {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={logoImg} />
      </Link>
      <S.Actions>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/about">About</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
