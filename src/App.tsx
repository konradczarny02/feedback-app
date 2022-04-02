import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import NewFeedback from 'pages/NewFeedback';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-feedback" element={<NewFeedback />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
