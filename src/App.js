import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeDisplay from "./components/EmployeeDisplay";
import axios from "axios";
import DisplayContainer from "./components/DisplayContainer";
import SideBar from "./components/SideBar";

function App() {
  const [list, setList] = useState([]);
  const [modList, setModList] = useState([]);

  const getEmployees = () => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "https://randomuser.me/api/?results=10&nat=us",
      })
        .then((response) => {
          resolve(response.data.results);
        })
        .catch((error) => reject(error));
    });
  };

  useEffect(() => {
    getEmployees()
      .then((res) => {
        setList(res);
        setModList(res);
      })
      .catch((error) => console.log(error));
  }, []);

  // running this function (by sorting either first or last) gets you a console.log
  // of the *sorted* array
  const sort = (e) => {
    switch (e.target.value) {
      case "first":
        const sortedF = [...list].sort(function (a, b) {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        });
        console.log("sorted:", sortedF);
        setModList([...sortedF]);
        break;

      case "last":
        const sortedL = [...list].sort(function (a, b) {
          if (a.name.last < b.name.last) {
            return -1;
          }
          if (a.name.last > b.name.last) {
            return 1;
          }
          return 0;
        });
        console.log("sorted:", sortedL);
        setModList([...sortedL]);
        break;

      case "none":
        setModList([...list]);
        break;

      default:
        break;
    }
  };

  // running this function (by changing the "state" filter) shows the original array
  // this should never change the order in which the information is displayed
  const filter = (e) => {
    if (e.target.value !== "None") {
      const filtered = list.filter(
        (element) => element.location.state === e.target.value
      );
      setModList([...filtered]);
    } else {
      setModList([...list]);
    }
  };

  const search = (e) => {
    let searchResults = [];
    [...list].map((element) => {
      if (
        element.name.first.includes(e.target.value) ||
        element.name.last.includes(e.target.value) ||
        element.location.city.includes(e.target.value) ||
        element.location.state.includes(e.target.value) ||
        element.email.includes(e.target.value) ||
        element.phone.includes(e.target.value)
      ) {
        console.log("Matching Entry:", element);
        searchResults.push(element);
        console.log("Result Array", searchResults);
        setModList([...searchResults]);
      } else {
        console.log("No Results Found!");
        setModList([...searchResults]);
      }
    });
  };

  return (
    <div className="App">
      <Header />
      <DisplayContainer>
        <SideBar sort={sort} filter={filter} search={search} />
        <EmployeeDisplay list={modList} />
      </DisplayContainer>
    </div>
  );
}

export default App;
