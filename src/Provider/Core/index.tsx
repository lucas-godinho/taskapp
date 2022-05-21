import React, { useCallback, useEffect, useState } from 'react';
import * as Themes from '../../style/themes';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { setCookie, parseCookies } from 'nookies';
import { UserProps, CoreContextProps, TaskProps } from './type';
import { api } from '../../service/api';

const CoreContext = React.createContext({} as CoreContextProps);

export type ReactProps = {
  children?: React.ReactElement;
};

const CoreProvider: React.FC<ReactProps> = (props) => {
  const [theme, setTheme] = useState<any>(Themes.Dark);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
  const [loadingTasks, setLoadingTasks] = useState<boolean>(false);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [activeUser, setActiveUser] = useState<UserProps | null>(null);
  const [activeTask, setActiveTask] = useState<TaskProps | null>(null);

  const toggleTheme = () => {
    setTheme(theme === Themes.Dark ? Themes.Light : Themes.Dark);

    let myDomain: string = 'loalhost:3000';
    setCookie(null, '@TaskApp.Theme', theme === Themes.Dark ? 'light' : 'dark', {
      path: '/',
      domain: myDomain,
      maxAge: 60 * 60 * 24 * 365,
    });
  };

  const getAllUsers = useCallback(async () => {
    setLoadingUsers(true);
    try {
      const response = await api.get('users/');
      setUsers(response?.data);
      setLoadingUsers(false);
    } catch (error) {
      setLoadingUsers(false);
      throw error;
    }
  }, []);

  const getAllTasks = useCallback(async () => {
    setLoadingTasks(true);
    try {
      const response = await api.get('users/1/todos');
      setTasks(response?.data);

      setLoadingTasks(false);
    } catch (error) {
      setLoadingTasks(false);
      throw error;
    }
  }, []);

  const createTaskUserById = useCallback(
    async (data: TaskProps) => {
      try {
        const response = await api.post(`/user/${activeUser?.id}/todos`, {
          userId: activeUser?.id,
          title: data.title,
          completed: false,
        });
        setTasks([...tasks, response.data]);
      } catch (error) {
        throw error;
      }
    },
    [activeUser],
  );

  useEffect(() => {
    const { '@TaskApp.Theme': cookieTheme } = parseCookies();

    if (!!cookieTheme) {
      setTheme(cookieTheme === 'dark' ? Themes.Dark : Themes.Light);
    }

    getAllUsers();
    getAllTasks();
  }, [getAllUsers, getAllTasks]);

  return (
    <CoreContext.Provider
      value={{
        theme: theme,
        isDark: theme === Themes.Dark,
        toggleTheme,
        users,
        activeUser,
        setActiveUser,
        tasks,
        activeTask,
        setActiveTask,
        createTaskUserById,
      }}
      {...props}
    >
      <StyledProvider theme={theme}>{props.children}</StyledProvider>
    </CoreContext.Provider>
  );
};

const useCore = () => React.useContext(CoreContext);

export { CoreProvider, useCore };
