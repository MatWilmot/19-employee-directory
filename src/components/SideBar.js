import React from "react";

const SideBar = (props) => {
  return (
    <div className="col-sm-3">
      <h1>Options</h1>
      <br />
      <form>
        <h4>Sort:</h4>
        {/* <div className="form-check">
          <input name="fName-az" type="radio" className="form-check-input" />
          <label htmlFor="fName-az">First Name (A-Z)</label>
        </div>
        <div className="form-check">
          <input name="lName-az" type="radio" className="form-check-input" />
          <label htmlFor="lName-az">Last Name (A-Z)</label>
        </div> */}

        <fieldset className="form-group">
          <div className="row">
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="fName"
                  onChange={props.sort}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  First Name (A-Z)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="lName"
                  onChange={props.sort}
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Second Name (A-Z)
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <br />
        <h4>Filter:</h4>
        <div className="form-group">
          <label htmlFor="inputState">State</label>
          <select
            id="inputState"
            className="form-control"
            onChange={props.filter}
          >
            <option>Choose...</option>
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
          </select>
        </div>
        {/* <br />
        <h4>Search:</h4>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Type a first name"
          onChange={props.search}
        /> */}
      </form>
    </div>
  );
};

export default SideBar;
