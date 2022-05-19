import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // The theme name:
    name: 'Dark' | 'Light';

    // Primary:
    primary: string;

    // Text:
    textPrimary: string;
    textSecondary: string;

    // Border:
    borderLine: string;

    // Background:
    background: string;
  }
}
