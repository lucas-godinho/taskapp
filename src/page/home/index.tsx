import React from 'react';

import { useUser } from '../../provider/users';

export const HomePage = () => {
  const { users, loading } = useUser();

  return <div>teste</div>;
};
