import React, { useState, useContext } from "react";
import { Form, Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as S from "./Login.style";

function getToken(email, password, auth, history) {
  fetch(`http://localhost:8080/login`, {
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
      history.push("/");
      auth.setState("Bearer " + data.token);
    });
}

function Home() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <Section>
        <S.Container>
          <S.Title>Login</S.Title>
          <Form
            forgot
            register
            onSubmit={(e) => {
              e.preventDefault();
              getToken(email, password, auth, history);
            }}
            buttonName="Login"
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
                inputChange: (e) => setPassword(e.target.value),
                type: "password",
                placeholder: "Type your password",
                label: "Password",
              },
            ]}
          ></Form>
        </S.Container>
      </Section>
    </>
  );
}

export default Home;
