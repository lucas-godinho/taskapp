import React from 'react';

import { useUser } from '../../provider/users';

const HomePage: React.FC = () => {
  const { users, loading } = useUser();

  return <div>{loading && users?.map((item) => item.title)} teste</div>;
};

export default HomePage;
