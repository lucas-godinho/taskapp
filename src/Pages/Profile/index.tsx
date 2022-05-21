import React from 'react';

import { useCore } from '../../Provider/Core';
import { CardUser } from '../../Components/Card/Users';

import * as S from './style';
import ListTask from '../../Components/List/Task';

const Profile = () => {
  const { activeUser, tasks } = useCore();
  return (
    <S.Container>
      <S.BoxProfile>
        <S.Action>
          <S.ButtonAction>
            <S.IconDiffAdded />
          </S.ButtonAction>
        </S.Action>
        <CardUser />
        <ListTask />
      </S.BoxProfile>
    </S.Container>
  );
};

export default Profile;
