import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // The theme name:
    name: 'Dark' | 'Light';

    // Primary:
    primary: string;
    secondary: string;
    tertiary: string;

    // Text:
    textPrimary: string;
    textSecondary: string;

    // Border:
    borderLine: string;

    // Background:
    background: string;
    backgroundContras: string;
  }
}
