import React, { PureComponent } from "react";

let index = 0;

const MyPureComponent = class extends PureComponent {
  render() {
    index += 1;

    const { name } = this.props;

    return (
      <React.Fragment>
        <h1>this is a Pure Component - Render: {index}</h1>
        <h3>{name}</h3>
      </React.Fragment>
    );
  }
};

export default MyPureComponent;
