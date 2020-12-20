import React, { useEffect, useState } from "react";
import * as S from "./ForHim.style";
import { Hero, Section, Card, Notification } from "../../components";
import HeroImage from "../../assets/man-hero-image.png";

function ForHim() {
  const [clothes, setClothes] = useState([]);
  const [error, setError] = useState({
    display: false,
    message: "",
    color: "",
  });

  useEffect(() => {
    fetch("http://192.168.1.11:8080/clothes")
      .then((res) => res.json())
      .then((data) => setClothes(data))
      .catch((res) =>
        setError({ display: true, message: res.message, color: "danger" })
      );
  }, []);
  return (
    <>
      <Hero bgimg={HeroImage} title="SHOP FOR MAN" slogan="SUDDENLY OBSESSED" />
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
          <Card array={clothes.filter((g) => g.gender === 1)} />
        </S.FlexBlock>
      </Section>
    </>
  );
}

export default ForHim;
