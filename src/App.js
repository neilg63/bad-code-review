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
Move initial data set to separate file with export default
Use const keyword as this set is immutable and is replaced by data from API feed
*/
/* var defaultSecrets = [
  {
    'id': 2,
    'name': 'Avondale Brewing Co',
    'brewery_type': 'micro',
    'street': '201 41st St S',
    'city': 'Birmingham',
    'state': 'Alabama',
    'postal_code': '35222-1932',
    'country': 'United States',
    'longitude': '-86.774322',
    'latitude': '33.524521',
    'phone': '2057775456',
    'website_url': 'http://www.avondalebrewing.com',
    'updated_at': '2018-08-23T23:19:57.825Z',
    'tag_list': []
  },
  {
    'id': 4,
    'name': 'Band of Brothers Brewing Company',
    'brewery_type': 'micro',
    'street': '1605 23rd Ave',
    'city': 'Tuscaloosa',
    'state': 'Alabama',
    'postal_code': '35401-4653',
    'country': 'United States',
    'longitude': '-87.5621551272424',
    'latitude': '33.1984907123707',
    'phone': '2052665137',
    'website_url': 'http://www.bandofbrosbrewing.com',
    'updated_at': '2018-08-23T23:19:59.462Z',
    'tag_list': []
  },
]
 */