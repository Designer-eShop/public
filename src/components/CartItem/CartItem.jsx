import React, { useEffect, useState } from "react";
import * as S from "./CartItem.style";

function CartItem({ array, deleteButton, btndisplay }) {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return width > 768 ? (
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
            <S.FlexContainerRight>
              <S.Price>{item.price / 100} €</S.Price>
              <S.ButtonDiv btndisplay={btndisplay}>
                <S.DeleteButton value={item.id} onClick={deleteButton} />
              </S.ButtonDiv>
            </S.FlexContainerRight>
          </S.Container>
        ))
      ) : (
        <S.Container>
          <S.Title>Shopping cart is empty</S.Title>
        </S.Container>
      )}
    </>
  ) : (
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
                <S.Price>{item.price / 100} €</S.Price>
                <S.ButtonDiv btndisplay={btndisplay}>
                  <S.DeleteButton value={item.id} onClick={deleteButton} />
                </S.ButtonDiv>
              </S.Info>
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
