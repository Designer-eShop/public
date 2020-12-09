import React, { useEffect, useContext, useState } from "react";
import { Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./About.style";

function About() {
  const [response, setResponse] = useState();
  const auth = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8080/hidden", {
      headers: {
        Authorization: auth.state,
      },
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.response));
  }, [auth]);

  return (
    <Section>
      {response ? <S.H2>{response}</S.H2> : <S.H2>Server error!</S.H2>}
    </Section>
  );
}

export default About;
