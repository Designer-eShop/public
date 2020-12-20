import React, { useContext, useState } from "react";
import { Section, Button, Notification } from "../";
import * as S from "./Item.style";
import { CartContext } from "../../context/CartContext";

function Item({ array }) {
  const cart = useContext(CartContext);
  const [error, setError] = useState({
    display: false,
    message: "",
    color: "",
  });

  return (
    <Section>
      {error.display && (
        <S.NotificationBox>
          <Notification
            color={error.color}
            handleChange={setTimeout(() => setError(false), 3000)}
          >
            {error.message}
          </Notification>
        </S.NotificationBox>
      )}
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
              <Button
                handleClick={() => {
                  if (cart.items.includes(item.id)) {
                    setError({
                      display: true,
                      message:
                        "Collection includes only single item per product",
                      color: "danger",
                    });
                  } else {
                    cart.setItems(cart.items.concat([item.id]));
                    setError({
                      display: true,
                      message: "Succesfully added to cart",
                      color: "success",
                    });
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
