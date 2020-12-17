import React from "react";
import { Button } from "../";
import * as S from "./Hero.style";
import { useHistory } from "react-router-dom";

function Hero({ buttons, title, slogan, bgimg }) {
  const history = useHistory();

  return (
    <S.HeroSection backgroundimg={bgimg}>
      <S.HeroWrapper>
        <S.HeroCentered>
          <S.Title>{title}</S.Title>
          <S.Slogan>{slogan}</S.Slogan>
          {buttons && (
            <S.Buttons>
              <Button handleClick={() => history.push("/forhim")}>
                Shop for man
              </Button>
              <S.Diff />
              <Button handleClick={() => history.push("/forher")}>
                Shop for woman
              </Button>
            </S.Buttons>
          )}
        </S.HeroCentered>
      </S.HeroWrapper>
    </S.HeroSection>
  );
}

export default Hero;
