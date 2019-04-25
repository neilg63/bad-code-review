import React from 'react';
import { someFunc } from './controller';

class ExampleComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
      loading: false,
      results: []
    };
  }

  handleSearch = e => this.setState({ search: e.target.value })
  clearSearch = () => this.setState({ search: '' })

  handleSubmit = async e => {
    try {
      e.preventDefault();
      console.log('event fired....');
      someFunc(123);
    } catch (err) {
      console.error(err);
    }
  }

  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit} >
          <input type='text' name={'search'} onChange={this.handleSearch} value={this.state.search || ''} />
          <button onClick={this.clearSearch}>Clear Search</button>
        </form>
      </>
    );
  }
}

export default ExampleComponent;
