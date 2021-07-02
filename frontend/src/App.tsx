import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyles />
  </>
)

export default App;