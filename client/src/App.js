import { useState, useEffect } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Start from "./pages/Start";
import About from "./pages/About";

import insuranceProducts from "./lib/insuranceProducts";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import StartPage from "./components/StartPage";

function App() {
  //const apiServerURL = process.env.REACT_APP_API_SERVER_URL;
  const [userToCalculate, setUserToCalculate] = useState("");
  const [insurances, setInsurances] = useState([]);
  const [componentToDisplay, setComponentToDisplay] = useState("form");
  const [startPage, setStartPage] = useState("start");

  function onSubmitForm(userData) {
    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((result) => result.json())
      .then((user) => setUserToCalculate(user))
      .catch((error) => console.error(error.message));
  }

  useEffect(() => {
    insuranceProducts.forEach((insurance) => {
      fetch("http://localhost:4000/insurance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(insurance),
      }).catch((error) => console.error(error.message));
    });
  }, []);

  useEffect(() => {
    if (userToCalculate) {
      fetch("http://localhost:4000/insurances/" + userToCalculate._id)
        .then((result) => result.json())
        .then((loadInsurances) => setInsurances(loadInsurances))
        .then(() => {
          setComponentToDisplay("value");
        })
        .catch((error) => console.error(error.message));
    }
  }, [userToCalculate]);

  useEffect(() => {
    if (insurances.length > 0) {
      fetch("http://localhost:4000/user/" + userToCalculate._id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => console.error(error.message));
    }
  }, [insurances]);

  return (
    <AppContainer className={startPage === "start" && "active"}>
      <Header />

      <Switch>
        <Route exact path="/">
          <StartPage setStartPage={setStartPage} />
        </Route>
        <Route path="/start">
          <Start
            onSubmitForm={onSubmitForm}
            insurances={insurances}
            userToCalculate={userToCalculate}
            componentToDisplay={componentToDisplay}
            setComponentToDisplay={setComponentToDisplay}
          />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <NavBar />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background: white;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(25, 50, 81, 0.2);
  height: 97.25vh;
  padding-bottom: 3.5rem;
  overflow: auto;

  //nachfolgends wird evtl. nicht benötigt

  &.active {
    border-radius: 10px;
  }
`;
