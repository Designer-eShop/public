import React, { useState, useEffect } from "react";
import { Section, Card, Hero, Notification } from "../../components";
import * as S from "./Home.style";
import HeroImage from "../../assets/Hero-image.jpg";

function Home() {
  const [clothes, setClothes] = useState([]);
  const [error, setError] = useState({
    display: false,
    message: "",
    color: "",
  });

  useEffect(() => {
    fetch("https://designer-eshop.azurewebsites.net/clothes")
      .then((res) => res.json())
      .then((data) => {
        setClothes(data);
      })
      .catch((res) =>
        setError({ display: true, message: res.message, color: "danger" })
      );
    const timer = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero
        bgimg={HeroImage}
        buttons
        title="Suddenly obsessed"
        slogan="Urban clothing for you"
      />
      <Section>
        {error.display && (
          <S.NotificationBox>
            <Notification
              color={error.color}
              handleChange={() => setError(false)}
            >
              {error.message}
            </Notification>
          </S.NotificationBox>
        )}
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
          <Card array={clothes.filter((g) => g.gender === 0).slice(0, 3)} />
        </S.FlexBlock>
      </Section>
      <Section>
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
          <Card array={clothes.filter((g) => g.gender === 1).slice(0, 3)} />
        </S.FlexBlock>
      </Section>
    </>
  );
}

export default Home;
