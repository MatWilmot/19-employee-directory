import React from "react";

const EmployeeDisplay = (props) => {
  return (
    <div className="col-md-9">
      <div className="row row-cols-lg-2 row-cols-md-1">
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
                <p className="card-text">Email: {element.email}</p>
                <p className="card-text">Phone: {element.phone}</p>
                <p className="card-text">
                  From: {element.location.city}, {element.location.state}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDisplay;
