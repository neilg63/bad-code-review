import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';
import Home from 'containers/Home';

class App extends Component {
  render () {
    return (
      <GlobalErrorBoundary>
        <BrowserRouter>
          <div className={'main-container'}>
            <Switch>
              <AuthenticatedRoute exact path='/' component={() => <Home />} />
              <Route exact path='/' component={() => <h1>regular route</h1>} />
              <Route component={() => <div>404</div>} />
            </Switch>
          </div>
        </BrowserRouter>
      </GlobalErrorBoundary>
    );
  }
}

export default App;
