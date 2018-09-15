import React from "react";

let index = 0;

const FunctionalComponent = ({ name }) => {
  index += 1;

  return (
    <React.Fragment>
      <h1>this is a Functional Component - Render: {index}</h1>
      <h3>{name}</h3>
    </React.Fragment>
  );
};

export default FunctionalComponent;
