import React, { useEffect, useState } from "react";
import * as S from "./ForHer.style";
import { Hero, Section, Card } from "../../components";
import HeroImage from "../../assets/woman-hero-image.png";

function ForHer() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.11:8080/clothes")
      .then((res) => res.json())
      .then((data) => setClothes(data));
  }, []);
  return (
    <>
      <Hero
        bgimg={HeroImage}
        title="SHOP FOR WOMAN"
        slogan="SUDDENLY OBSESSED"
      />
      <Section>
        <S.FlexBlock>
          <Card array={clothes.filter((g) => g.gender === 0)} />
        </S.FlexBlock>
      </Section>
    </>
  );
}

export default ForHer;
