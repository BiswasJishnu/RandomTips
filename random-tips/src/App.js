import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    tips: ""
  }

  componentDidMount() {
    this.fetchTips();
  }

  fetchTips = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice} = response.data.slip;

        this.setState({tips: advice});
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    return (
      <h1>{this.state.tips}</h1>
    )
  }
}

export default App;

