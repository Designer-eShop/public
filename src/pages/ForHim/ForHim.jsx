import React, { useEffect, useState } from "react";
import * as S from "./ForHim.style";
import { Hero, Section, Card } from "../../components";
import HeroImage from "../../assets/man-hero-image.png";

function ForHim() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/clothes")
      .then((res) => res.json())
      .then((data) => setClothes(data));
  }, []);
  return (
    <>
      <Hero bgimg={HeroImage} title="SHOP FOR MAN" slogan="SUDDENLY OBSESSED" />
      <Section>
        <S.FlexBlock>
          <Card array={clothes.filter((g) => g.gender === 1)} />
        </S.FlexBlock>
      </Section>
    </>
  );
}

export default ForHim;
