import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { CartItem, Section, Button, Notification } from "../../components";
import { useHistory } from "react-router-dom";
import * as S from "./Cart.style";

// Function for deleting an item from cart
function deleteFunction(cart, e) {
  const index = cart.items.indexOf(Number(e.target.value));
  if (index > -1) {
    const deleteId = cart.items.splice(index, 1);
    const newArr = cart.items.filter((x) => x !== deleteId);
    cart.setItems(newArr);
  } else {
    console.log("Error deleting cart items");
  }
}

function Cart() {
  const [clothes, setClothes] = useState([]);
  const cart = useContext(CartContext);
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [error, setError] = useState({
    display: false,
    message: "",
    color: "",
  });

  // Select unique products by clothes id's
  const result = clothes.filter((e) => [...new Set(cart.items)].includes(e.id));

  // Price sum
  const totalPrice =
    result.map((x) => x.price).reduce((a, b) => a + b, 0) / 100;

  // Check if user is loged in
  const checkLogin = () => {
    if (auth.state) {
      history.push("/submit");
    } else {
      setError({
        display: true,
        message: "Please login or register to continue",
        color: "danger",
      });
    }
  };

  useEffect(() => {
    fetch("http://192.168.1.11:8080/clothes")
      .then((res) => res.json())
      .then((data) => setClothes(data))
      .catch((res) =>
        setError({ display: true, message: res.message, color: "danger" })
      );
  }, []);

  return (
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
      <S.Title>Shopping cart</S.Title>
      <S.Container>
        <CartItem
          deleteButton={(e) => {
            deleteFunction(cart, e);
          }}
          array={result}
        />
      </S.Container>
      <S.TotalContainer>
        <S.Total>TOTAL: {totalPrice} €</S.Total>
        <Button
          handleClick={() =>
            cart.items.length === 0
              ? setError({
                  display: true,
                  message: "Shopping cart is empty!",
                  color: "danger",
                })
              : checkLogin()
          }
        >
          Buy
        </Button>
      </S.TotalContainer>
    </Section>
  );
}

export default Cart;
