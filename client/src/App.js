import insuranceProducts from "./lib/insuranceProducts";

import UserForm from "./components/UserForm";
import Header from "./components/Header";

import { useState } from "react";

function App() {
  const [insurance, setInsurance] = useState(insuranceProducts);

  return (
    <>
      <Header />
      <UserForm />
    </>
  );
}

export default App;
