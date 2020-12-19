import React, { useState, useContext } from "react";
import { Section, Form, Notification } from "../../components";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as S from "./SubmitOrder.style";

function updateUser(name, surname, phone, street, city, zip, auth, setError) {
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
      setError({ display: true, message: data.msg, color: "error" });
    })
    .catch((res) =>
      setError({ display: true, message: res.message, color: "error" })
    );
}

function submitCart(cart, auth, setError, history) {
  fetch(`http://localhost:8080/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth.state,
    },
    body: JSON.stringify({
      product_id: cart.items.toString(),
      status: 1,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.msg) {
        setError({ display: true, message: data.msg, color: "error" });
      } else {
        cart.setItems([]);
        history.push("/orders");
      }
    })
    .catch((res) =>
      setError({ display: true, message: res.message, color: "error" })
    );
}

function SubmitOrder() {
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
  const history = useHistory();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phone, setPhone] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [error, setError] = useState({
    display: false,
    message: "",
    color: "",
  });

  return (
    <Section>
      {error.display && (
        <Notification color={error.color} handleChange={() => setError(false)}>
          {error.message}
        </Notification>
      )}
      <S.Container>
        <S.Title>Submit order</S.Title>
        <S.SubTitle>Provide shipping information</S.SubTitle>
        <Form
          required
          onSubmit={(e) => {
            e.preventDefault();
            updateUser(name, surname, phone, street, city, zip, auth, setError);
            submitCart(cart, auth, setError, history);
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
