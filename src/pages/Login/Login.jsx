import React, { useState, useContext } from "react";
import { Form, Section, Notification } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as S from "./Login.style";

function getToken(email, password, auth, history, setError) {
  fetch(`http://192.168.1.11:8080/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg !== "Email or password is incorrect") {
        history.push("/");
        auth.setState("Bearer " + data.token);
      } else {
        setError({ display: true, message: data.msg, color: "danger" });
      }
    })
    .catch((res) =>
      setError({ display: true, message: res.message, color: "danger" })
    );
}

function Login() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
          <S.Title>Login</S.Title>
          <Form
            forgot
            register
            onSubmit={(e) => {
              e.preventDefault();
              getToken(email, password, auth, history, setError);
            }}
            buttonName="Login"
            required
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
                inputChange: (e) => setPassword(e.target.value),
                type: "password",
                placeholder: "Type your password",
                label: "Password",
                minlength: "6",
              },
            ]}
          ></Form>
        </S.Container>
      </Section>
    </>
  );
}

export default Login;
