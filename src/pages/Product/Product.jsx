import React, { useEffect, useState } from "react";
import { Item } from "../../components";

function Product({ match }) {
  const [data, setData] = useState();
  const productId = match.params.id;

  useEffect(() => {
    fetch("http://192.168.1.11:8080/clothes/" + productId)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [productId]);

  return <Item array={data} />;
}

export default Product;
