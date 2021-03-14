import { useState, useEffect } from 'react'

import CarProps from './CarProps'
import PetProps from './PetProps'
import MotorcycleProps from './MotorcycleProps'

import initialUserData from '../lib/userData'

import setAge from '../services/setAge'
import setUserNetIncome from '../services/setNetIncome';

export default function UserForm({onSubmitForm}) {

    const [userData, setUserData] = useState(initialUserData)

    const handleChange = (event) => {
        const field = event.target;
        let value = event.target.value;
    
        if (event.target.type === 'checkbox') {
          value = event.target.checked;
        }

        setUserData({ ...userData, [field.name]: value });
      };

    useEffect(() => {
        setAge(userData, setUserData)
    }, [userData.birthday])

    useEffect(() => {
        setUserNetIncome(userData, setUserData)
    }, [userData.income])

      function submitForm(event) {
        event.preventDefault();
        onSubmitForm(userData);
        setUserData(initialUserData);
    }

      return (
        <form onSubmit={submitForm}>
          <h2>Bitte geben Sie Ihre Daten ein:</h2>
    
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Vorname:</label>
          <input
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
          />
          <label htmlFor="birthday">Geburtstag:</label>
          <input
            type="text"
            name="birthday"
            value={userData.birthday}
            onChange={handleChange}
          />
          <label>
              Beziehungsstatus:
              <label>
                <input
                  type="radio"
                  name="relationship"
                  value="alone"
                  checked={userData.relationship === 'alone'}
                  onChange={handleChange}
                />
                alleine
              </label>
              <label>
              <input
                  type="radio"
                  name="relationship"
                  value="inRelationship"
                  checked={userData.relationship === 'inRelationship'}
                  onChange={handleChange}
                />
                in einer Beziehung
              </label>
            </label>
            <label>
              Berufsstatus:
              <select
                name="jobStatus"
                value={userData.jobStatus}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option value="employed">angestellt</option>
                <option value="selfEmployed">selbstständig</option>
                <option value="civilServants">verbeamtet</option>
              </select>
            </label>
            <label htmlFor="income">Bruttoeinkommen:</label>
          <input
            type="text"
            name="income"
            value={userData.income}
            onChange={handleChange}
          />
          <label htmlFor="netIncome">Nettoeinkommen:</label>
          <input
            type="text"
            name="netIncome"
            value={userData.netIncome}
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="houseOwner"
              checked={userData.houseOwner}
              onChange={handleChange}
            />
            Selbstbewohntes Eigentumshaus?
          </label>
          <label>
            <input
              type="checkbox"
              name="valuables"
              checked={userData.valuables}
              onChange={handleChange}
            />
            Wertgegenstände vorhanden?
          </label>
          <label>
            <input
              type="checkbox"
              name="car"
              checked={userData.car}
              onChange={handleChange}
            />
            Auto vorhanden?
          </label>
        <CarProps userData={userData} handleChange={handleChange} />
        <label>
            <input
              type="checkbox"
              name="pet"
              checked={userData.pet}
              onChange={handleChange}
            />
            Haustier vorhanden?
          </label>
        <PetProps userData={userData} handleChange={handleChange} />
        <label>
            <input
              type="checkbox"
              name="motorcycle"
              checked={userData.motorcycle}
              onChange={handleChange}
            />
            Motorrad vorhanden?
          </label>
        <MotorcycleProps userData={userData} handleChange={handleChange} />
        <label>
            <input
              type="checkbox"
              name="dangerousHobby"
              checked={userData.dangerousHobby}
              onChange={handleChange}
            />
            Gefährliches Hobby? (z. B. tauchen)
          </label>
        <button type="submit" text="Add">Los gehts!</button>
        <button type="reset" text="Reset" onClick={() => setUserData(initialUserData)} >Neustarten</button>
        </form>
      )}