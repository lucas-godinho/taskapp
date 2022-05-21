import React from 'react';

import { useCore } from '../../../Provider/Core';

import { TaskProps } from '../../../Provider/Core/type';

import * as S from './style';

const CardTask = ({ title, completed, id }: TaskProps) => {
  return <S.Container>{title}</S.Container>;
};

export default CardTask;
