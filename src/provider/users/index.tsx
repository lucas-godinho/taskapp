import React, { createContext, useEffect, useState, useCallback, useContext } from 'react';

import { api } from '../../service/api';

import { UserContextProps, UserProps } from './type';

export const UserContext = createContext({} as UserContextProps);

export type ReactProps = {
  children?: React.ReactElement;
};

export const UserProvider: React.FC<ReactProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [users, seyUsers] = useState<UserProps[]>();

  const getAllUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get('users/1/todos');
      seyUsers(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  return <UserContext.Provider value={{ users, loading }}></UserContext.Provider>;
};

export const useUser = () => {
  const users = useContext(UserContext);
  return users;
};
