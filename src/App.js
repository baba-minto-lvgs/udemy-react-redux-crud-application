import React, { Component } from 'react';

class App extends Component {
  render() {
      return (
          <>
              <label>label</label>
              <input type="text" onChange={() => {alert("test")}}/>
          </>
          );
  };
}

export default App;
