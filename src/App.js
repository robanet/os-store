import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import PublicRoute from 'routes/PublicRoute';
import Header from 'components/Header';

import Home from 'containers/Home';
import NotFound from 'containers/NotFound';
import CreateProduct from "./containers/CreateProduct";

const App = (props) => (
  <SnackbarProvider maxSnack={3}>
    <div className="app-container">
      <Header />
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={Home}
          props={props}
        />
        <PublicRoute
            exact
            path="/create-product"
            component={CreateProduct}
            props={props}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </SnackbarProvider>
);

export default withRouter(App);
