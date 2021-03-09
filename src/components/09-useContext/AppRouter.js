import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { NavBar } from './NavBar';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { AboutScreen } from './AboutScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {/* exact, el path debe ser exacto, valida que /login no coincida con el solo / de HomeScreen */}
          <Route exact path='/' component={HomeScreen} />

          <Route exact path='/about' component={AboutScreen} />
          <Route exact path='/login' component={LoginScreen} />

          {/* si no encuentra alguna ruta lo redirecciona a home */}
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};
