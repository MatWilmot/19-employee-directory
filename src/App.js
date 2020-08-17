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

  return (
    <div className="App">
      <Header />
      <EmployeeDisplay list={list} />
    </div>
  );
}

export default App;
