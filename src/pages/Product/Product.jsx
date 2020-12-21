import React, { useEffect, useState } from "react";
import { Item } from "../../components";

function Product({ match }) {
  const [data, setData] = useState();
  const productId = match.params.id;

  useEffect(() => {
    fetch("http://http://3.211.46.142:8080clothes/" + productId)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [productId]);

  return <Item array={data} />;
}

export default Product;
