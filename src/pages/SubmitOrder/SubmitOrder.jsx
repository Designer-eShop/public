import React, { useState, useContext } from "react";
import { Section, Form } from "../../components";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./SubmitOrder.style";

function updateUser(name, surname, phone, street, city, zip, auth) {
  fetch(`http://localhost:8080/updateuser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth.state,
    },
    body: JSON.stringify({
      name,
      surname,
      phone,
      street,
      city,
      zip,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    });
}

function submitCart(cart, auth) {
  fetch(`http://localhost:8080/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth.state,
    },
    body: JSON.stringify({
      product_id: cart.items,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      cart.setItems([]);
      console.log(data);
    });
}

function SubmitOrder() {
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phone, setPhone] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();

  return (
    <Section>
      <S.Container>
        <S.Title>Submit order</S.Title>
        <S.SubTitle>Provide shipping information</S.SubTitle>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateUser(name, surname, phone, street, city, zip, auth);
            submitCart(cart, auth);
          }}
          buttonName="Submit"
          inputs={[
            {
              id: 1,
              inputChange: (e) => setName(e.target.value),
              type: "text",
              placeholder: "Type your first name",
              label: "First name",
            },
            {
              id: 2,
              inputChange: (e) => setSurname(e.target.value),
              type: "text",
              placeholder: "Type your last name",
              label: "Last name",
            },
            {
              id: 3,
              inputChange: (e) => setPhone(e.target.value),
              type: "number",
              placeholder: "Type your phone number",
              label: "Phone number",
            },
            {
              id: 4,
              inputChange: (e) => setStreet(e.target.value),
              type: "text",
              placeholder: "Type your street",
              label: "Street",
            },
            {
              id: 5,
              inputChange: (e) => setCity(e.target.value),
              type: "text",
              placeholder: "Type your city",
              label: "City",
            },
            {
              id: 6,
              inputChange: (e) => setZip(e.target.value),
              type: "text",
              placeholder: "Type your zip code",
              label: "Zip code",
            },
          ]}
        />
      </S.Container>
    </Section>
  );
}

export default SubmitOrder;
