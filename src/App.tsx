import React from 'react';
import HomePage from './page/home';

import { UserProvider } from './provider/users';

const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <HomePage />
      </UserProvider>
    </>
  );
};

export default App;
