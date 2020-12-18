import React, { useContext } from "react";
import { Section, Button } from "../";
import * as S from "./Item.style";
import { CartContext } from "../../context/CartContext";

function Item({ array }) {
  const cart = useContext(CartContext);

  return (
    <Section>
      {array &&
        array.map((item) => (
          <S.Container key={item.id}>
            <S.Image src={item.image} />
            <S.TextBox>
              <S.Logo />
              <S.Product>{item.title.split(" ").slice(0, 1)}</S.Product>
              <S.Name>{item.title.split(" ").slice(1).join(" ")}</S.Name>
              <S.Description>{item.description}</S.Description>
              <S.Description>Size - {item.size}</S.Description>
              <S.Price>{item.price / 100} €</S.Price>
              <Button
                handleClick={() => {
                  if (cart.items.includes(item.id)) {
                    alert("Collection includes only single item per product");
                  } else {
                    cart.setItems(cart.items.concat([item.id]));
                  }
                }}
              >
                Add to cart
              </Button>
            </S.TextBox>
          </S.Container>
        ))}
    </Section>
  );
}

export default Item;
