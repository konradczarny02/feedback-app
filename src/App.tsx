import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import NavigationProvider from 'providers/NavigationProvider';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationProvider>
        <Navigation />
        <Sidebar />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
