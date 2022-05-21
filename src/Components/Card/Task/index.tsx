import React from 'react';

import { useCore } from '../../../Provider/Core';

import { TaskProps } from '../../../Provider/Core/type';

import * as S from './style';

const CardTask = ({ title, completed, id }: TaskProps) => {
  const { updateTaskUser } = useCore();
  return (
    <S.Container completed={completed}>
      {title}{' '}
      <S.ButtonEdit onClick={() => updateTaskUser(`${id}`)}>
        <S.IconEdit />
      </S.ButtonEdit>
    </S.Container>
  );
};

export default CardTask;
