import { useState } from "react";
import styled from "styled-components";

import UserForm from "./components/UserForm";
import Header from "./components/Header";

function App() {
  const [userToCalculate, setUserToCalculate] = useState("");

  function onSubmitForm(userData) {
    setUserToCalculate(userData);
  }

  return (
    <AppContainer>
      <Header />
      <UserForm onSubmitForm={onSubmitForm} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 11px 0 rgba(25, 50, 81, 0.2);
`;
