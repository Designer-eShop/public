import React from "react";
import * as S from "./CartItem.style";

function CartItem({ array }) {
  return (
    <>
      {array.length !== 0 ? (
        array.map((item) => (
          <S.Container key={item.id}>
            <S.FlexContainer>
              <S.Image src={item.image} />
              <S.Info>
                <S.Title>{item.title}</S.Title>
                <S.Size>
                  {item.size.length > 1 ? item.size.slice(0, 1) : item.size}
                </S.Size>
              </S.Info>
            </S.FlexContainer>
            <S.FlexContainer>
              <S.Price>{item.price / 100} €</S.Price>
            </S.FlexContainer>
          </S.Container>
        ))
      ) : (
        <S.Container>
          <S.Title>Shopping cart is empty</S.Title>
        </S.Container>
      )}
    </>
  );
}

export default CartItem;
