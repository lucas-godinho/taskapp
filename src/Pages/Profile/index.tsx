import React from 'react';

import { CardUser } from '../../Components/Card/Users';

import * as S from './style';
import ListTask from '../../Components/List/Task';

const Profile = () => {
  return (
    <S.Container>
      <S.BoxProfile>
        <CardUser />
        <ListTask />
      </S.BoxProfile>
    </S.Container>
  );
};

export default Profile;
