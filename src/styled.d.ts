import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryGreen: string;
      darkText: string;
      lightBg: string;
      lightGreenAccent: string;
      white: string;
      grayText: string;
    };
    fonts: {
      primary: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  }
}
