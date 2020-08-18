import React from "react";

const DisplayContainer = (props) => {
  return (
    <div className="container">
      <div className="row">{props.children}</div>
    </div>
  );
};

export default DisplayContainer;
