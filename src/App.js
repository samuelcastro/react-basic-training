import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import RegularComponent from "./components/RegularComponent";
import PureComponent from "./components/PureComponent";
import EventBinding from "./components/EventBinding";

class App extends Component {
  state = {
    name: "Samuel Castro"
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          <button onClick={() => this.setState({ name: "Carlos" })}>
            Change Name
          </button>
        </header>

        <div className="App-intro">
          <FunctionalComponent name={name} />

          <RegularComponent name={name} />

          <PureComponent name={name} />

          <hr />

          <EventBinding name={name} />
        </div>
      </div>
    );
  }
}

export default App;
