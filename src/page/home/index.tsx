import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './style';

export const HomePage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>teste</S.Content>
      <Footer />
    </S.Container>
  );
};
