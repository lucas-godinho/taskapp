import React from 'react';

import ListUsers from '../../Components/List/Users';

import * as S from './style';

export const HomePage: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <ListUsers />
      </S.Content>
    </S.Container>
  );
};
