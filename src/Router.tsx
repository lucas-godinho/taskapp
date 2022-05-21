import React from 'react';

import { Routes, Route } from 'react-router-dom';

import App from './App';
import { HomePage } from './Pages/home';
import Profile from './Pages/Profile';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};

export default Router;
