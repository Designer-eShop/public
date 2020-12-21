import React, { useEffect, useState, useContext } from "react";
import { Item, Notification } from "../../components";
import * as S from "./Product.style";
import { CartContext } from "../../context/CartContext";

function Product({ match }) {
  const [data, setData] = useState();
  const cart = useContext(CartContext);
  const productId = match.params.id;
  const [error, setError] = useState({
    display: false,
    message: "",
    color: "",
  });

  useEffect(() => {
    fetch("https://designer-eshop.azurewebsites.net/clothes/" + productId)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((res) =>
        setError({ display: true, message: res.message, color: "danger" })
      );
    const timer = setTimeout(() => {
      setError(false);
    }, 3000);
    if (error.display === true) {
      return () => clearTimeout(timer);
    }
  }, [productId, error]);

  return (
    <>
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
      <Item
        array={data}
        handleClick={() => {
          if (cart.items.includes(productId)) {
            setError({
              display: true,
              message: "Collection includes only single item per product",
              color: "danger",
            });
          } else {
            cart.setItems(cart.items.concat([productId]));
            setError({
              display: true,
              message: "Succesfully added to cart",
              color: "success",
            });
          }
        }}
      />
    </>
  );
}

export default Product;
