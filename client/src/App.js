import UserForm from "./components/UserForm";
import Header from "./components/Header";

import { useState } from "react";

function App() {
  const [userToCalculate, serUserToCalculate] = useState("");

  function onSubmitForm(userData) {
    serUserToCalculate(userData);
  }

  return (
    <>
      <Header />
      <UserForm onSubmitForm={onSubmitForm} userToCalculate={userToCalculate} />
    </>
  );
}

export default App;
