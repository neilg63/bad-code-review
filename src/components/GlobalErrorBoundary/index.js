import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch = async (error, info) => {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(info);
    const errorUuid = 123; // set a dynamic error id here and sync with server side
    this.setState({ hasError: true, errorUuid });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={'global-error-boundary'}>
          <h1>Something went wrong.</h1>
          <h2>Please quote the number below when contacting support:</h2>
          <h2 className={'global-error__uuid'}>{this.state.errorUuid || 'No valid support ID available'}</h2>
          <a href='/'>
            <button buttonClass={'generic'}>Back to application....</button>
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default Index;
