import React from "react";
import * as S from "./Button.style";

function Button({ type, children, handeClick, color }) {
  return (
    <S.Button type={type} onClick={handeClick} color={color}>
      {children}
    </S.Button>
  );
}

export default Button;
