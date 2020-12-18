import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem, Section, Button } from "../../components";
import { useHistory } from "react-router-dom";
import * as S from "./Cart.style";

function Cart() {
  const [clothes, setClothes] = useState([]);
  const cart = useContext(CartContext);
  const history = useHistory();

  const checkArray = () => {
    if (Array.isArray(cart.items)) {
      return cart.items;
    } else {
      return JSON.parse("[" + cart.items + "]");
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/clothes")
      .then((res) => res.json())
      .then((data) => setClothes(data));
  }, []);

  const result = clothes.filter((e) =>
    [...new Set(checkArray())].includes(e.id)
  );
  const totalPrice =
    result.map((x) => x.price).reduce((a, b) => a + b, 0) / 100;

  return (
    <Section>
      <S.Title>Shopping cart</S.Title>
      <S.Container>
        <CartItem array={result} />
      </S.Container>
      <S.TotalContainer>
        <S.Total>TOTAL: {totalPrice} €</S.Total>
        <Button handleClick={() => history.push("/submit")}>Buy</Button>
      </S.TotalContainer>
    </Section>
  );
}

export default Cart;
