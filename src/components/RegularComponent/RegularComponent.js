import React, { Component } from "react";

let index = 0;

const RegularComponent = class extends Component {
  shouldComponentUpdate({ name }) {
    return name !== this.props.name;
  }

  render() {
    index += 1;

    const { name } = this.props;

    return (
      <React.Fragment>
        <h1>this is a Regular Component - Render: {index}</h1>
        <h3>{name}</h3>
      </React.Fragment>
    );
  }
};

export default RegularComponent;
