import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './auth';
import { MainContainer } from './components/Layout/ComponentTypes';
import { Header } from './components/Header';

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <MainContainer>
            <Header />
            <Component {...props} />
          </MainContainer>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
