import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeDisplay from "./components/EmployeeDisplay";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  const getEmployees = () => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "https://randomuser.me/api/?results=20&nat=us",
      })
        .then((response) => {
          resolve(response.data.results);
        })
        .catch((error) => reject(error));
    });
  };

  useEffect(() => {
    getEmployees().then((employees) => {
      console.log("type: ", typeof employees);
      console.log("data: ", employees);

      employees.map((employee) => {
        let tempList = list;
        tempList.push(employee.name.first + " " + employee.name.last);
        setList(tempList);
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <EmployeeDisplay list={list} />
    </div>
  );
}

export default App;
