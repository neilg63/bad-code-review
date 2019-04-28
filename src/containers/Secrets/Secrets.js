import React from 'react'

class Secrets extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stateSecrets: this.props.secrets || [],
      authenticated: false
    }
  }

  componentDidMount = async () => {
    this.setState({ stateSecrets: await getSecrets() })
  }

  render () {
    const n = this.props.user.name.first_name + ' ' + this.props.user.name.second_name
    return (
      <div className={'Div-class_StateSecrets'}>
        <p>User: {n}</p>
        <p>Only authenticated users should be viewing this page</p>
        <p>There is a total of {this.state.stateSecrets.length} secrets. of these {this.state.stateSecrets.length} secrets 4 are classified. </p>
        {
          this.state.stateSecrets.map(secret => {
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

async function getSecrets () {
  try {
    var results = await fetch('https://api.openbrewerydb.org/breweries')
    return results
  } catch (e) {
    return []
  }
}

export default Secrets
