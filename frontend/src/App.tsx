import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyles />
    </Router>
  )
}

export default App;
