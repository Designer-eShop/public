import React, { useState } from "react";
import * as S from "./Card.style";

function Card({ array }) {
  const [show, setShow] = useState("none");
  return (
    <>
      {array &&
        array.map((item) => (
          <S.StyledLink to={`/clothes/${item.id}`} key={item.id}>
            <S.FlexImage background={item.image} alt={item.description}>
              <S.Hover
                onMouseEnter={(e) => setShow("flex")}
                onMouseLeave={() => setShow("none")}
              >
                <S.HoverEffect display={show}>
                  <S.HoverBottom>
                    <S.ClothesLogo />
                    <S.HoverText>
                      {item.title +
                        "..........................." +
                        item.price / 100 +
                        "€"}
                    </S.HoverText>
                  </S.HoverBottom>
                </S.HoverEffect>
              </S.Hover>
            </S.FlexImage>
          </S.StyledLink>
        ))}
    </>
  );
}

export default Card;
