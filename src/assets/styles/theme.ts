interface colorsInterface {
  red: string;
  blue: string;
}

interface themeInterface {
  colors: colorsInterface;
}

export const theme: themeInterface = {
  colors: {
    red: 'red',
    blue: 'blue',
  },
};
