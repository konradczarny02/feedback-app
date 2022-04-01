type Color = string;
type FontSize = string;

interface colorsInterface {
  pink: Color;
  blue: Color;
  darkBlue: Color;
  lightBlue: Color;
  orange: Color;
  gray: Color;
  darkGray: Color;
  lightGray: Color;
  white: Color;
  darkerWhite: Color;
}

interface fontsInterface {
  h1: FontSize;
  h2: FontSize;
  h3: FontSize;
  h4: FontSize;
  paragraphBig: FontSize;
  paragraphRegular: FontSize;
  paragraphSmall: FontSize;
}

interface themeInterface {
  colors: colorsInterface;
  fonts: fontsInterface;
}

export const theme: themeInterface = {
  colors: {
    pink: '#AD1FEA',
    blue: '#4661E6',
    darkBlue: '#3A4374',
    lightBlue: '#62BCFA',
    orange: '#F49F85',
    gray: '#647196',
    lightGray: '#F2F4FF',
    darkGray: '#373F68',
    white: '#FFFFFF',
    darkerWhite: '#F7F8FD',
  },
  fonts: {
    h1: '24px',
    h2: '20px',
    h3: '18px',
    h4: '14px',
    paragraphBig: '16px',
    paragraphRegular: '15px',
    paragraphSmall: '13px',
  },
};
