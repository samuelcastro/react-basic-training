import React, { Component } from "react";

// importing our curried changeNameCurry from an external resource
import { changeNameCurry } from "./EventBindingHelper";

const EventBinding = class extends Component {
  state = {
    name: this.props.name
  };

  // Bind example
  changeNameBind({ target: { value } }) {
    this.setState({
      name: value
    });
  }

  // An example without .bind(this) using arrow functions
  changeNameArrow = ({ target: { value } }) => {
    this.setState({
      name: value
    });
  };

  render() {
    const { name } = this.state;

    return (
      <React.Fragment>
        <h2>Inline function: {name}</h2>

        <input
          type="text"
          value={name}
          onChange={({ target: { value } }) => this.setState({ name: value })}
        />

        <h2>Bind function: {name}</h2>

        <input
          type="text"
          value={name}
          onChange={this.changeNameBind.bind(this)}
        />

        <h2>Arrow function: {name}</h2>

        <input type="text" value={name} onChange={this.changeNameArrow} />

        <h2>Curry functions: {name}</h2>

        {/* This way we can keep changeNameCurry decoupled from our react file and improve our testability as well  */}
        <input type="text" value={name} onChange={changeNameCurry(this)} />
      </React.Fragment>
    );
  }
};

export default EventBinding;
