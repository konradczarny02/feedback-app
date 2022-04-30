import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import NewFeedback from 'pages/NewFeedback';
import Details from 'pages/Details';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-feedback" element={<NewFeedback />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
