import React from "react";
import * as S from "./Section.style";

function Section({ children, fullWidth, background, maxWidth, contentWidth }) {
  return (
    <S.Section background={background} maxWidth={maxWidth}>
      {fullWidth ? (
        children
      ) : contentWidth ? (
        <S.SectionBlock>{children}</S.SectionBlock>
      ) : (
        <S.Wrapper>{children}</S.Wrapper>
      )}
    </S.Section>
  );
}

export default Section;
