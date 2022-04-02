import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import NavigationProvider from 'providers/NavigationProvider';
import Background from 'components/atoms/Background/Background';
import SuggestionsList from 'components/organisms/SuggestionsList/SuggetsionsList';
import Sort from 'components/organisms/Sort/Sort';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationProvider>
        <Navigation />
        <Background />
        <Sidebar />
      </NavigationProvider>
      <Sort />
      <SuggestionsList />
    </ThemeProvider>
  );
};

export default App;
