import React, { useState, useContext } from "react";
import { Form, Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";

function getToken(username, password, auth) {
  fetch(`http://localhost:8080/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((data) => data.json())
    .then((data) => auth.setState("Bearer " + data.token));
}

function Home() {
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <Section background="#eee" maxWidth="max">
        <h1>Login</h1>
      </Section>
      <Section>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            getToken(username, password, auth);
          }}
          inputs={[
            {
              id: 1,
              inputChange: (e) => setUsername(e.target.value),
              type: "text",
              placeholder: "Username",
            },
            {
              id: 2,
              inputChange: (e) => setPassword(e.target.value),
              type: "password",
              placeholder: "Password",
            },
          ]}
        ></Form>
      </Section>
    </>
  );
}

export default Home;
