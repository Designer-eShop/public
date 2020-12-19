import React from "react";
import * as S from "./Input.style";

function Input({ type, inputChange, placeholder, value, required }) {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={inputChange}
      value={value}
      required={required}
      maxLength="64"
      minLength="6"
    />
  );
}

export default Input;
