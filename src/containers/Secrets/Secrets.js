import React from 'react'
// import API method call from separate file, ideally updating global state
// once refactored, but not essential for such a small app
import { getSecrets } from '../../data/api.js';

class Secrets extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stateSecrets: this.props.secrets || [],
      authenticated: false
    }
  }

  componentDidMount = async () => {
    this.setState({ stateSecrets: await getSecrets() })
  }

  render() {
    // destructure props for easier readability
    const { user } = this.props;
    // considr using template string (not essential here)
    const n = user.name.first_name + ' ' + user.name.second_name
    // destructure state properties too, but with let
    let { stateSecrets } = this.state;
    // Calculate once here
    let numStateSecrets = stateSecrets.length;
    /*
      No magic numbers !
      classified number should be  calculated from a filtered list 
      based on real data rather than hard coded, but sure which criteria to apply,
      i'll for when brewery_type is not micro, but woyld need to review how we determne this
    */
    let numClassifiedSecrets = stateSecrets.filter(secret => secret.brewery_type !== "micro").length;
    // class name is not dynamic, so just use quotes
    // Future refactoring, implement authentication / user login 
    // consider redirecting all unauthorised visitors to home / login screen in the router
    // ideally managed by global state.
    return (
      <div className="div-class-state-secrets">
        <p>User: {n}</p>
        <p>Only authenticated users should be viewing this page</p>
        <p>There is a total of {numStateSecrets} secrets. of these {numStateSecrets} secrets {numClassifiedSecrets} are classified. </p>
        {
          stateSecrets.map(secret => {
            return (
              <>
                <h1>{secret.name}</h1>
                <h4>{secret.updated_at}</h4>
              </>
            )
          })
        }
      </div>
    )
  }
}

export default Secrets
