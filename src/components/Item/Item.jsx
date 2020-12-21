import React from "react";
import { Section, Button } from "../";
import * as S from "./Item.style";

function Item({ array, handleClick }) {
  return (
    <Section>
      {array &&
        array.map((item) => (
          <S.Container key={item.id}>
            <S.ImageBlock>
              <S.Image background={item.image} />
            </S.ImageBlock>
            <S.TextBox>
              <S.Logo />
              <S.Product>{item.title.split(" ").slice(0, 1)}</S.Product>
              <S.Name>{item.title.split(" ").slice(1).join(" ")}</S.Name>
              <S.Description>{item.description}</S.Description>
              <S.Description>Size - {item.size}</S.Description>
              <S.Price>{item.price / 100} €</S.Price>
              <Button handleClick={handleClick}>Add to cart</Button>
            </S.TextBox>
          </S.Container>
        ))}
    </Section>
  );
}

export default Item;
