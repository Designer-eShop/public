import React from "react";
import { Button, Section } from "../";
import * as S from "./Hero.style";

function Hero() {
  return (
    <Section fullWidth>
      <S.HeroSection>
        <S.HeroWrapper>
          <S.HeroCentered>
            <S.Title>Suddenly obsessed</S.Title>
            <S.Slogan>Urban clothing for you</S.Slogan>
            <S.Buttons>
              <Button handeClick={() => console.log("veikia")}>
                Shop for man
              </Button>
              <Button handeClick={() => console.log("veikia")}>
                Shop for woman
              </Button>
            </S.Buttons>
          </S.HeroCentered>
        </S.HeroWrapper>
      </S.HeroSection>
    </Section>
  );
}

export default Hero;
