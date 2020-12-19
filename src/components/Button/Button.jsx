import React from "react";
import * as S from "./Button.style";

function Button({ type, children, handleClick }) {
  return (
    <S.Button type={type} onClick={handleClick}>
      {children}
    </S.Button>
  );
}

export default Button;
