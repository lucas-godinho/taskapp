import React from 'react';

import * as S from './style';

interface ButtonProps {
  children: React.ReactNode | React.ReactNode[];
  isDark?: boolean;
  onClick?: () => void;
}

export const ButtonTheme: React.FC<ButtonProps> = ({ children, isDark, onClick }) => {
  return (
    <S.Container isDark={isDark} onClick={onClick}>
      {children}
      {isDark ? <S.IconLight /> : <S.IconDark />}
    </S.Container>
  );
};
