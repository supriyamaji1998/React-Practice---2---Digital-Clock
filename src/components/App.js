import React, { Component, useState } from "react";
import "../styles/App.css";

function getTime() {
  const current = new Date();
  return current.toLocaleTimeString().toUpperCase();
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: getTime(),
    };
  }
  componentDidMount() {
    this.clk = setInterval(() => {
      this.setState({ time: getTime() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clk);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}

export default App;
