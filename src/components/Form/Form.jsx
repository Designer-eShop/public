import React from "react";
import * as S from "./Form.style";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Form({ onSubmit, inputs, buttonName, forgot, register, loginNot }) {
  return (
    <S.Form onSubmit={onSubmit}>
      {inputs &&
        inputs.map((item) => (
          <S.Label key={item.id}>
            {item.label}
            <Input
              inputChange={item.inputChange}
              type={item.type}
              placeholder={item.placeholder}
            />
          </S.Label>
        ))}
      {forgot && (
        <S.Forgot>
          <S.StyledLink to="#">Forgot password?</S.StyledLink>
        </S.Forgot>
      )}
      <Button type="submit">{buttonName}</Button>
      {register && (
        <S.Register>
          Don’t have an account yet?{" "}
          <S.StyledLink to="/register">Sign Up</S.StyledLink>
        </S.Register>
      )}
      {loginNot && (
        <S.LoginNot>
          Already have an account?{" "}
          <S.StyledLink to="/login">Log in</S.StyledLink>
        </S.LoginNot>
      )}
    </S.Form>
  );
}

export default Form;
