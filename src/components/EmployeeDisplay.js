import React from "react";

const EmployeeDisplay = (props) => {
  console.log("from EmployeeDisplay (props): ", props.list);
  return (
    <div className="container">
      <div className="row row-cols-md-3">
        {props.list.map((element, index) => (
          <div key={index} className="col mb-4">
            <div className="card h-100" style={{ width: "22rem" }}>
              <img
                src={element.picture.large}
                className="card-img-top"
                alt="randomly generated user"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {element.name.first + " " + element.name.last}
                </h5>
                <span className="card-text">Email: {element.email}</span>
                <p className="card-text">Phone: {element.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDisplay;
