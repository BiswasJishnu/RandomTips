import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    tips: ""
  }

  componentDidMount() {
    console.log('MOUNTED')
  }

  render() {
    return (
      <h1>Random Tips</h1>
    )
  }
}

export default App;

