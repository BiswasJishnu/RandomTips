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
    //refer to https://api.adviceslip.com/ to know more
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
      <div className="app">
        <div className="card">
          <h3 className="heading">{this.state.tips}</h3>
        </div>
      </div>
    )
  }
}

export default App;

