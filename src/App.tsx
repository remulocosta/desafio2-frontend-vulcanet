import React from 'react';

import Dashboard from './pages/Dashboard';
// import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    {/* <SignIn /> */}
    <Dashboard />
    <GlobalStyle />
  </>
);

export default App;
