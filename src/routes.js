import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import { Login } from './pages/Login';
import { DashboardPage } from './pages/Dashboard';
import { RegisterPasswordPage } from './pages/RegisterPassword';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/resetPassword" exact component={RegisterPasswordPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/registerPassword" exact component={RegisterPasswordPage} />
      </Switch>
    </BrowserRouter>
  );
}
