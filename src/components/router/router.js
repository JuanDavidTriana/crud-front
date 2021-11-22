import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from '../auth/privateroute';

import login from '../login/login';
import empleados from '../empleados/index';
import Home from '../pages/home/home';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/']} component={Home} />
        <Route exact path={['/login']} component={login} />
        <PrivateRoute exact path="/empleados" component={empleados} />
        <Route
          path={'*'}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Pagina no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
