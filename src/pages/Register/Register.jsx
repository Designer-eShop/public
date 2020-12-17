import React, { useState, useContext } from "react";
import { Form, Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Register.style";

function getToken(username, password, auth) {
  fetch(`http://localhost:8080/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password,
    }),
  })
    .then((data) => data.json())
    .then((data) => auth.setState("Bearer " + data.token));
}

function Register() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordR, setPasswordR] = useState();

  return (
    <>
      <Section>
        <S.Container>
          <S.Title>Register</S.Title>
          <Form
            loginNot
            onSubmit={(e) => {
              e.preventDefault();
              if (password !== passwordR) {
                alert("Your password do not match");
              } else {
                getToken(email, password, auth);
              }
            }}
            buttonName="Register"
            inputs={[
              {
                id: 1,
                inputChange: (e) => setEmail(e.target.value),
                type: "email",
                placeholder: "Type your email address",
                label: "Email address",
              },
              {
                id: 2,
                inputChange: (e) => setPasswordR(e.target.value),
                type: "password",
                placeholder: "Type your password",
                label: "Password",
              },
              {
                id: 3,
                inputChange: (e) => setPassword(e.target.value),
                type: "password",
                placeholder: "Type your password again",
                label: "Repeat password",
              },
            ]}
          ></Form>
        </S.Container>
      </Section>
    </>
  );
}

export default Register;
