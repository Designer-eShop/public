import React from "react";
import * as S from "./CartItem.style";

function CartItem({ array }) {
  return (
    <>
      {array &&
        array.map((item) => (
          <S.Container key={item.id}>
            <S.Image background={item.image} />
          </S.Container>
        ))}
    </>
  );
}

export default CartItem;
