import React from "react";
import * as S from "./Form.style";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Form({ onSubmit, inputs }) {
  return (
    <S.Form onSubmit={onSubmit}>
      {inputs &&
        inputs.map((item) => (
          <Input
            key={item.id}
            inputChange={item.inputChange}
            type={item.type}
            placeholder={item.placeholder}
          />
        ))}
      <Button type="submit">Submit</Button>
    </S.Form>
  );
}

export default Form;
