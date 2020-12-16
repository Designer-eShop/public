import React, { useState, useEffect } from "react";
import { Section, Card, Hero } from "../../components";
import * as S from "./Home.style";

function Home() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/clothes")
      .then((res) => res.json())
      .then((data) => setClothes(data));
  }, []);

  return (
    <>
      <Hero />
      <Section contentWidth>
        <S.FlexBlock>
          <S.StyledLink to="/forher">
            <S.FlexBox>
              <S.TopDiv>Check all outfits for woman &#62;</S.TopDiv>
              <S.FlexBoxBottom>
                <S.CenterDiv>Most Wanted</S.CenterDiv>
                <S.BottomDiv>For Her</S.BottomDiv>
              </S.FlexBoxBottom>
            </S.FlexBox>
          </S.StyledLink>
          <Card array={clothes.filter((g) => g.gender === 0)} />
        </S.FlexBlock>
      </Section>
      <Section contentWidth>
        <S.FlexBlock>
          <S.StyledLink to="/forhim">
            <S.FlexBox>
              <S.TopDiv>Check all outfits for man &#62;</S.TopDiv>
              <S.FlexBoxBottom>
                <S.CenterDiv>Most Wanted</S.CenterDiv>
                <S.BottomDiv>For HIM</S.BottomDiv>
              </S.FlexBoxBottom>
            </S.FlexBox>
          </S.StyledLink>
          <Card array={clothes.filter((g) => g.gender === 1)} />
        </S.FlexBlock>
      </Section>
    </>
  );
}

export default Home;
