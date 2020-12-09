import React from "react";
import * as S from "./Input.style";

function Input({ type, inputChange, placeholder, value }) {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={inputChange}
      value={value}
    />
  );
}

export default Input;
