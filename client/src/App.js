import { useState, useEffect } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Start from "./pages/Start";

import insuranceProducts from "./lib/insuranceProducts";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [userToCalculate, setUserToCalculate] = useState("");

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

  //Diesen UseEffect noch anpassen!

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

  console.log(userToCalculate, 999);

  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/">
          <Start onSubmitForm={onSubmitForm} />
        </Route>
        <Route path="/about">
          <Start onSubmitForm={onSubmitForm} />
        </Route>
      </Switch>
      <NavBar />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  background: white;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 2px 11px 0 rgba(25, 50, 81, 0.2);
  margin-bottom: 3.5rem;
`;
