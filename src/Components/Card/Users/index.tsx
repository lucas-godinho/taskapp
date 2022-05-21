import React from 'react';

import { useCore } from '../../../Provider/Core';

import { UserProps } from '../../../Provider/Core/type';
import * as S from './style';

export const CardUsers = (user: UserProps | any) => {
  const { setActiveUser } = useCore();
  return (
    <S.Container to={'profile'} onClick={() => setActiveUser(user)}>
      <S.Avatar img={user?.id} />
      <S.BoxCard>
        <S.TitleCard>{user?.name}</S.TitleCard>
        <S.SubTitleCard>{user?.email}</S.SubTitleCard>
      </S.BoxCard>
    </S.Container>
  );
};

export const CardUser = () => {
  const { activeUser } = useCore();
  return (
    <S.ContainerUser>
      <S.Avatar img={activeUser?.id} />
      <S.BoxCard>
        <S.TitleCard>{activeUser?.name}</S.TitleCard>
        <S.SubTitleCard>{activeUser?.email}</S.SubTitleCard>
      </S.BoxCard>
    </S.ContainerUser>
  );
};
