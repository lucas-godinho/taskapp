import React, { useMemo } from 'react';

import { useCore } from '../../../Provider/Core';
import { UserProps } from '../../../Provider/Core/type';

import { CardUsers } from '../../Card/Users';
import { Link } from 'react-router-dom';

import * as S from './style';

const ListUsers = () => {
  const { users } = useCore();

  const usersList = useMemo(() => {
    const user = users?.map(
      (user: UserProps) =>
        user && <CardUsers id={user?.id} name={user?.name} email={user?.email} />,
    );

    return user;
  }, [users]);

  return <S.Container>{usersList}</S.Container>;
};

export default ListUsers;
