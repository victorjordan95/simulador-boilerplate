import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

// import { LoginPage } from './pages/Login';
import { LoginFormAntd } from './pages/LoginFormAntd';
import { DashboardPage } from './pages/Dashboard';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginFormAntd} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}
