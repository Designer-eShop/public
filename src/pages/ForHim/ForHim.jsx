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
    fetch("http://http://3.211.46.142:8080/clothes")
      .then((res) => res.json())
      .then((data) => setClothes(data))
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
