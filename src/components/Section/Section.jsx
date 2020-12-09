import React from "react";
import * as S from "./Section.style";

function Section({ children, fullWidth, background, maxWidth }) {
  return (
    <S.Section background={background} maxWidth={maxWidth}>
      {fullWidth ? children : <S.Wrapper>{children}</S.Wrapper>}
    </S.Section>
  );
}

export default Section;
