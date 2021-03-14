import insuranceProducts from './lib/insuranceProducts'

import UserForm from './components/UserForm'

import {useState} from 'react'

function App() {

const [insurance, setInsurance] = useState(insuranceProducts)

  return (
    <>
      <UserForm />
    </>
  );
}

export default App;
