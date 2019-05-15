import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalErrorBoundary from './components/GlobalErrorBoundary'
// always use ./ notation from current directory to resolve paths correctly
import HomePage from './containers/Home'
import Secrets from './containers/Secrets/Secrets'
// import initial data set from separate file for easier maintainability
// This component should not contain any data
import defaultSecrets from './data/default-secrets'

class App extends Component {
  render() {
    return (<GlobalErrorBoundary>
      <BrowserRouter>
        <div className={'main-container'}>
          <Switch>

            <Route exact path='/secrets' component={() => <Secrets secrets={defaultSecrets} user={{ name: { first_name: 'joe', second_name: 'bloggs' } }} />} />
            <Route exact path='/' component={() => <HomePage />} />
          </Switch>
        </div>
      </BrowserRouter>
    </GlobalErrorBoundary>
    )
  }
}

export default App
/*
MMove initial data set to separate file with export default
Use const keyword as this set is immutable and is replaced by data from API feed
*/