import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeDisplay from "./components/EmployeeDisplay";
import axios from "axios";
import DisplayContainer from "./components/DisplayContainer";
import SideBar from "./components/SideBar";

function App() {
  const [list, setList] = useState([]);

  const getEmployees = () => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "https://randomuser.me/api/?results=10&nat=us",
      })
        .then((response) => {
          resolve(setList(response.data.results));
          console.log("from axios:", response.data.results);
        })
        .catch((error) => reject(error));
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const sort = (e) => {
    console.log(e.target.value);
    const sorted = list.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
    console.log("sorted:", sorted);
    setList(sorted);
  };

  const filter = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <DisplayContainer>
        <SideBar sort={sort} filter={filter} />
        <EmployeeDisplay list={list} />
      </DisplayContainer>
    </div>
  );
}

export default App;
