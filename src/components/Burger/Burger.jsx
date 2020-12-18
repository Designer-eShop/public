import React, { useState, useContext } from "react";
import * as S from "./Burger.style";
import { AuthContext } from "../../context/AuthContext";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <S.Hamburger />
      </S.StyledBurger>
      <S.Ul open={open}>
        <S.StyledLink to="/cart">
          <S.Li>
            <S.Cart />
          </S.Li>
        </S.StyledLink>
        <S.StyledLink to="/forhim">
          <S.Li>MAN</S.Li>
        </S.StyledLink>
        <S.StyledLink to="/forher">
          <S.Li>WOMAN</S.Li>
        </S.StyledLink>
        {!auth.state && (
          <S.StyledLink to="/login">
            <S.Li>LOGIN</S.Li>
          </S.StyledLink>
        )}
        {!auth.state && (
          <S.StyledLink to="/register">
            <S.Li>REGISTER</S.Li>
          </S.StyledLink>
        )}
        {auth.state && auth.state !== "null" && (
          <S.StyledLink
            onClick={() => {
              localStorage.removeItem("token");
              auth.setState("");
            }}
            to="/"
          >
            <S.Li>Log Out</S.Li>
          </S.StyledLink>
        )}
      </S.Ul>
    </>
  );
};
export default Burger;
