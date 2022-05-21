import React from 'react';

import { TaskProps } from '../../../Provider/Core/type';

import * as S from './style';

const CardTask = ({ title, completed }: TaskProps) => {
  return (
    <S.Container>
      {title}{' '}
      <S.ButtonEdit>
        <S.IconEdit />
      </S.ButtonEdit>
    </S.Container>
  );
};

export default CardTask;
