import React, { useEffect, useContext, useState } from "react";
import { Section, CartItem } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Orders.style";

function Orders() {
  const auth = useContext(AuthContext);
  const [clothes, setClothes] = useState([]);
  const [cart, setCart] = useState([]);

  // Convert string of numbers into separate arrays
  const convertedToArray = cart.map((x) =>
    x.product_id.split(",").map((x) => parseInt(x, 10))
  );

  // Filter products from clothes array
  const products = convertedToArray.map((x) =>
    clothes.filter((e) => x.includes(e.id))
  );

  const checkStatus = (item) => {
    if (item.status === 1) {
      return "Order in progress";
    } else if (item.status === 2) {
      return "Payment received";
    } else if (item.status === 3) {
      return "Shipped";
    } else {
      return "Error. Contact support.";
    }
  };

  useEffect(() => {
    fetch("http://192.168.1.11:8080/orders", {
      headers: {
        Authorization: auth.state,
      },
    })
      .then((res) => res.json())
      .then((data) => setCart(data));

    fetch("http://192.168.1.11:8080/clothes")
      .then((res) => res.json())
      .then((data) => setClothes(data));
  }, [auth]);

  return (
    <Section>
      <S.Title>Your orders</S.Title>
      {cart &&
        cart.map((item, index) => (
          <S.Container key={index}>
            <S.Header>
              <S.DataBox>ID: #{item.id}</S.DataBox>
              <S.DataBox>{item.date_created.slice(0, 10)}</S.DataBox>
            </S.Header>
            <CartItem btndisplay="none" array={products[index]} />
            <S.TotalContainer>
              <S.Total>
                Total:{" "}
                {products[index]
                  .map((x) => x.price)
                  .reduce((a, b) => a + b, 0) / 100}{" "}
                €
              </S.Total>
              <S.Total>Status: {checkStatus(item)}</S.Total>
            </S.TotalContainer>
          </S.Container>
        ))}
    </Section>
  );
}

export default Orders;
