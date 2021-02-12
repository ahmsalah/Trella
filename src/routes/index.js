import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from 'pages/Dashboard/Dashboard';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
