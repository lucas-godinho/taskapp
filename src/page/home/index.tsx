import React from 'react';

import { useUser } from '../../provider/users';

const HomePage: React.FC = () => {
  const { users, loading } = useUser();

  console.log('users, loading', users, loading);

  return <div>{loading && users?.map((item) => item.title)} teste</div>;
};

export default HomePage;
