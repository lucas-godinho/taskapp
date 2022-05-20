import React from 'react';

import { useCore } from '../../provider/Core';

import { ButtonTheme } from '../Form/Button';

import * as S from './style';

const Header: React.FC = () => {
  const { toggleTheme, isDark, users } = useCore();

  return (
    <S.Container>
      <S.Logo>TaskApp</S.Logo>
      <ButtonTheme isDark={isDark} onClick={() => toggleTheme()}>
        {isDark ? 'Light' : 'Dark'}
      </ButtonTheme>
    </S.Container>
  );
};

export default Header;
