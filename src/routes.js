import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import { Login } from './pages/Login';
import { DashboardPage } from './pages/Dashboard';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}
