import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './auth';
import { Header } from './components/Header';

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <>
            <Header />
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
