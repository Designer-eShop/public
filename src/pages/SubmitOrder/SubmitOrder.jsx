import React, { useState, useContext } from "react";
import { Section, Form, Notification } from "../../components";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as S from "./SubmitOrder.style";

function submitCart(cart, auth, setError, history) {
  fetch(`http://192.168.1.11:8080/cart`, {
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
    .then(() => {
      cart.setItems([]);
      history.push("/orders");
    })
    .catch((res) =>
      setError({ display: true, message: res.message, color: "danger" })
    );
}

function updateUser(
  name,
  surname,
  phone,
  street,
  city,
  zip,
  auth,
  setError,
  cart,
  history
) {
  fetch(`http://192.168.1.11:8080/updateuser`, {
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
      if (data.msg === "Information entered incorrectly") {
        setError({ display: true, message: data.msg, color: "danger" });
      } else {
        submitCart(cart, auth, setError, history);
      }
    })
    .catch((res) => {
      setError({ display: true, message: res.message, color: "error" });
    });
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
        <S.NotificationBox>
          <Notification
            color={error.color}
            handleChange={setTimeout(() => setError(false), 3000)}
          >
            {error.message}
          </Notification>
        </S.NotificationBox>
      )}
      <S.Container>
        <S.Title>Submit order</S.Title>
        <S.SubTitle>Provide shipping information</S.SubTitle>
        <Form
          required
          onSubmit={(e) => {
            e.preventDefault();
            updateUser(
              name,
              surname,
              phone,
              street,
              city,
              zip,
              auth,
              setError,
              cart,
              history
            );
          }}
          buttonName="Submit"
          inputs={[
            {
              id: 1,
              inputChange: (e) => setName(e.target.value),
              type: "text",
              placeholder: "Type your first name",
              label: "First name",
              minlength: "2",
            },
            {
              id: 2,
              inputChange: (e) => setSurname(e.target.value),
              type: "text",
              placeholder: "Type your last name",
              label: "Last name",
              minlength: "2",
            },
            {
              id: 3,
              inputChange: (e) => setPhone(e.target.value),
              type: "number",
              placeholder: "Type your phone number",
              label: "Phone number",
              minlength: "8",
            },
            {
              id: 4,
              inputChange: (e) => setStreet(e.target.value),
              type: "text",
              placeholder: "Type your street",
              label: "Street",
              minlength: "4",
            },
            {
              id: 5,
              inputChange: (e) => setCity(e.target.value),
              type: "text",
              placeholder: "Type your city",
              label: "City",
              minlength: "3",
            },
            {
              id: 6,
              inputChange: (e) => setZip(e.target.value),
              type: "text",
              placeholder: "Type your zip code",
              label: "Zip code",
              minlength: "5",
            },
          ]}
        />
      </S.Container>
    </Section>
  );
}

export default SubmitOrder;
