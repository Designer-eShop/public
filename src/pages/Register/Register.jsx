import React, { useState } from "react";
import { Form, Section, Notification } from "../../components";
import { useHistory } from "react-router-dom";
import * as S from "./Register.style";

function getToken(email, password, history, setError) {
  fetch(`http://192.168.1.11:8080/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      if (
        data.msg !== "The email already exists" &&
        data.msg !== "Password cannot be created"
      ) {
        history.push("/login");
      } else {
        setError({ display: true, message: data.msg, color: "error" });
      }
    })
    .catch((res) => {
      setError({ display: true, message: res.message, color: "error" });
    });
}

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordR, setPasswordR] = useState();
  const [error, setError] = useState({
    display: false,
    message: "",
    color: "",
  });

  return (
    <>
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
        <S.Container>
          <S.Title>Register</S.Title>
          <Form
            required
            loginNot
            onSubmit={(e) => {
              e.preventDefault();
              if (password !== passwordR) {
                setError({
                  display: true,
                  message: "Passwords do not match",
                  color: "error",
                });
              } else {
                getToken(email, password, history, setError);
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
                minlength: "6",
              },
              {
                id: 2,
                inputChange: (e) => setPasswordR(e.target.value),
                type: "password",
                placeholder: "Type your password",
                label: "Password",
                minlength: "6",
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
