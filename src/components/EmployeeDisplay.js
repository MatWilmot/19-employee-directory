import React from "react";

const EmployeeDisplay = (props) => {
  return (
    <div id="employee-list">
      {props.list.forEach((element, index) => (
        <h1>{element}</h1>
      ))}
    </div>
  );
};

export default EmployeeDisplay;
