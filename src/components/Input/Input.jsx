import React from "react";
import * as S from "./Input.style";

function Input({ type, inputChange, placeholder, value, required, minlength }) {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={inputChange}
      value={value}
      required={required}
      minLength={minlength}
      maxLength="64"
    />
  );
}

export default Input;
