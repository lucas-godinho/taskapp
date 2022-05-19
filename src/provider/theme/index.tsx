import * as React from 'react';
import * as Themes from '../../style/themes';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { setCookie, parseCookies } from 'nookies';

const ThemeContext = React.createContext({
  theme: Themes.Dark,
  isDark: true,
  toggleTheme: () => {},
});

export type ReactProps = {
  children?: React.ReactElement;
};

const ThemeProvider: React.FC<ReactProps> = (props) => {
  const [theme, setTheme] = React.useState<any>(Themes.Dark);

  const toggleTheme = () => {
    setTheme(theme === Themes.Dark ? Themes.Light : Themes.Dark);

    let myDomain: string = 'loalhost:3000';
    setCookie(null, '@TaskApp.Theme', theme === Themes.Dark ? 'light' : 'dark', {
      path: '/',
      domain: myDomain,
      maxAge: 60 * 60 * 24 * 365,
    });
  };

  React.useEffect(() => {
    const { '@TaskApp.Theme': cookieTheme } = parseCookies();

    if (!!cookieTheme) {
      setTheme(cookieTheme === 'dark' ? Themes.Dark : Themes.Light);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        isDark: theme === Themes.Dark,
        toggleTheme,
      }}
      {...props}
    >
      {/* @ts-ignore */}
      <StyledProvider theme={theme}>{props.children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useTheme };
