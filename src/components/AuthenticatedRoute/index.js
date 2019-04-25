/**
 * A hooks based example of authenticated routes, ONLY available in React ^16.8.0
 */
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Unauthorized from 'containers/Unauthorized/Unauthorized';
import { validateToken } from 'libs/api/Users';

function AuthenticatedRoute ({ component: Component, ...rest }) {
  const [authenticated, setAuth] = useState('invalid');
  useEffect(() => {
    validateToken().then(resp => setAuth(resp.status));
  });

  return (
    <Route
      {...rest}
      render={props => authenticated === 'valid'
        ? <Component {...props} />
        : <Unauthorized />
      }
    />
  );
}

export default AuthenticatedRoute;
