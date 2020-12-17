import React from "react";
import * as S from "./Button.style";

function Button({ type, children, handleClick, color }) {
  return (
    <S.Button type={type} onClick={handleClick} color={color}>
      {children}
    </S.Button>
  );
}

export default Button;
