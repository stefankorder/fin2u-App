import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";

import Start from "./pages/Start";
import About from "./pages/About";
import InsuranceDetails from "./pages/InsuranceDetails";

import insuranceProducts from "./lib/insuranceProducts";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import StartPage from "./components/StartPage";

function App() {
  const [userToCalculate, setUserToCalculate] = useState("");
  const [insurances, setInsurances] = useState([]);
  const [componentToDisplay, setComponentToDisplay] = useState("form");

  useEffect(() => {
    insuranceProducts.forEach((insurance) => {
      fetch("/insurance", {
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
      fetch("/insurances/" + userToCalculate._id)
        .then((result) => result.json())
        .then((loadInsurances) => setInsurances(loadInsurances))
        .then(() => {
          setComponentToDisplay("solution");
        })
        .catch((error) => console.error(error.message));
    }
  }, [userToCalculate]);

  useEffect(() => {
    if (insurances.length > 0) {
      fetch("/user/" + userToCalculate._id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => console.error(error.message));
    }
  }, [insurances]);

  const location = useLocation();
  const history = useHistory();

  function onSubmitForm(userData) {
    fetch("/user", {
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

  return (
    <AppContainer className={location.pathname === "/" && "active"}>
      {location.pathname !== "/" && <Header />}
      <Switch>
        {history.action === "POP" && <Redirect to="/" />}
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/start">
          <Start
            onSubmitForm={onSubmitForm}
            insurances={insurances}
            userToCalculate={userToCalculate}
            componentToDisplay={componentToDisplay}
            setComponentToDisplay={setComponentToDisplay}
          />
        </Route>
        <Route exact path="/start/:id">
          <InsuranceDetails
            insurances={insurances}
            userToCalculate={userToCalculate}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>

      {location.pathname !== "/" && <NavBar />}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(25, 50, 81, 0.2);
  height: 97.25vh;
  overflow: auto;

  &.active {
    border-radius: 10px;
  }
`;
