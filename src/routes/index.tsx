import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
// import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    {/* <Route exact path="/" component={SignIn} /> */}
  </Switch>
);

export default Routes;
