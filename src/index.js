import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return(
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
