'use strict';

import React, { Component } from 'react';
// ^ { Component } is some syntactic sugar for:
// const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={this.onInputChange} />
      </div>
    );
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }
}

export default SearchBar;
