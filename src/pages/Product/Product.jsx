import React, { useEffect, useState } from "react";
import { Item, Notification } from "../../components";
import * as S from "./Product.style";

function Product({ match }) {
  const [data, setData] = useState();
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
      <Item array={data} />
    </>
  );
}

export default Product;
