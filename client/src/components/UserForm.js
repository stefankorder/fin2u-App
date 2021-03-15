import { useState, useEffect } from 'react'
import styled from 'styled-components'

import CarProps from './CarProps'
import PetProps from './PetProps'
import MotorcycleProps from './MotorcycleProps'

import initialUserData from '../lib/userData'

import setAge from '../services/setAge'
import setUserNetIncome from '../services/setNetIncome';

export default function UserForm({onSubmitForm}) {

    const [userData, setUserData] = useState(initialUserData)
    const [dropdowns, setDropdowns] = useState({
      relationship: false
    })

    const handleChange = (event) => {
        const field = event.target;
        let value = event.target.value;
    
        if (event.target.type === 'checkbox') {
          value = event.target.checked;
        }

        setUserData({ ...userData, [field.name]: value });
      };

      const dropChange = (value, field) => {
        setUserData({ ...userData, [field]: value });
        const menuPoints = document.querySelector('.' + field)
        menuPoints.classList.remove('active')
        setDropdowns({ ...dropdowns, [field]: false })
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

    function DropDown(className) {
      const menuPoints = document.querySelector('.' + className)
      menuPoints.classList.toggle('active')
      setDropdowns({ ...dropdowns, [className]: dropdowns.relationship ? false : true })
    }

    console.log(dropdowns, 1123)

      return (
        <ContainerBox>
        <Form onSubmit={submitForm}>
        <H2>Bitte geben Sie Ihre Daten ein:</H2>
          <div>
      <HandleDiv>
    <StyledDiv></StyledDiv>
          <Label htmlFor="name">NAME:</Label>
          <TextInput
            placeholder="NAME:"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          </HandleDiv>
          <HandleDiv>
          <StyledDiv></StyledDiv>
          <Label htmlFor="lastname">Vorname:</Label>
          <TextInput
            placeholder="NACHNAME:"
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
          />
          </HandleDiv>
          </div>

          <HandleDiv>
          <StyledLongerDiv></StyledLongerDiv>
          <Label htmlFor="birthday">Geburtstag:</Label>
          <TextLongerInput
            placeholder="GEBURTSTAG:"
            type="text"
            name="birthday"
            value={userData.birthday}
            onChange={handleChange}
          />
          </HandleDiv>

          <DropdownDiv>
          <StyledLongerDiv></StyledLongerDiv>
          <DropdownFakeLabel htmlFor="relationship" onClick={() => DropDown('relationship')} >
            <DropdownLabel>{userData.relationship ? userData.relationship : 'BEZIEHUNGSSTATUS:'}</DropdownLabel><DropdownSpan>{dropdowns.relationship ? '⇐' : '⇓'}</DropdownSpan>
            </DropdownFakeLabel>
            <MenuDiv className="relationship">
              <MenuP onClick={() => dropChange('single', 'relationship')}>ledig</MenuP>
              <MenuP onClick={() => dropChange('inRelationship', 'relationship')}>Lebensgemeinschaft</MenuP>
              <MenuP onClick={() => dropChange('married', 'relationship')}>verheiratet / eingetragene Lebenspartnerschaft</MenuP>
              <MenuP onClick={() => dropChange('divorced', 'relationship')}>geschieden</MenuP>
              <MenuP onClick={() => dropChange('widowed', 'relationship')}>verwitwet</MenuP>
            </MenuDiv>
            </DropdownDiv>
            
            <HandleDiv>
            <StyledLongerDiv></StyledLongerDiv>
            <Label htmlFor="children">Anzahl der Kinder:</Label>
          <TextLongerInput
          placeholder="ANZAHL DER KINDER:"
            type="text"
            name="children"
            value={userData.children}
            onChange={handleChange}
          />
          </HandleDiv>
          


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
            <label htmlFor="income">Bruttoeinkommen:
          <input
            type="text"
            name="income"
            value={userData.income}
            onChange={handleChange}
          />
          </label>
          <label htmlFor="netIncome">Nettoeinkommen:
          <input
            type="text"
            name="netIncome"
            value={userData.netIncome}
            onChange={handleChange}
          />
          </label>
          <label>Selbstbewohntes Eigentumshaus?
            <input
              type="checkbox"
              name="houseOwner"
              checked={userData.houseOwner}
              onChange={handleChange}
            />
          </label>
          <label>Wertgegenstände vorhanden?
            <input
              type="checkbox"
              name="valuables"
              checked={userData.valuables}
              onChange={handleChange}
            />
          </label>
          <label>Auto vorhanden?
            <input
              type="checkbox"
              name="car"
              checked={userData.car}
              onChange={handleChange}
            />
          </label>
        <CarProps userData={userData} handleChange={handleChange} />
        <label>Haustier vorhanden?
            <input
              type="checkbox"
              name="pet"
              checked={userData.pet}
              onChange={handleChange}
            />
          </label>
        <PetProps userData={userData} handleChange={handleChange} />
        <label>Motorrad vorhanden?
            <input
              type="checkbox"
              name="motorcycle"
              checked={userData.motorcycle}
              onChange={handleChange}
            />
          </label>
        <MotorcycleProps userData={userData} handleChange={handleChange} />
        <label>Gefährliches Hobby? (z. B. tauchen)
            <input
              type="checkbox"
              name="dangerousHobby"
              checked={userData.dangerousHobby}
              onChange={handleChange}
            />
          </label>
          <div>
        <button type="submit" text="Add">Los gehts!</button>
        <button type="reset" text="Reset" onClick={() => setUserData(initialUserData)} >Neustarten</button>
        </div>
        </Form>
        </ContainerBox>
      )}

const ContainerBox = styled.div`
display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: .5rem;
      border: 1px solid black;
`

const H2 = styled.h2`
font-size: .9rem;
margin: 1rem .4rem 1rem .4rem;
`

      const Form = styled.form`
      display: flex;
      flex-direction: column;
      `

      const HandleDiv = styled.div`
      margin-top: 1rem;
      height: 2rem;
      display: inline-flex;
      align-items: center;
      `

      const DropdownDiv = styled.div`
      margin-top: 1rem;
      height: 2rem;
      display: inline-flex;
      align-items: center;
      position: relative;
      `

      const DropdownFakeLabel = styled.label`
      margin-left: .5rem;
      width: 10rem;
      z-index: 10;
      padding: 0 .25rem;
      height: 2rem;
      `

      const DropdownLabel = styled.p`
      display: inline-block;
      font-size: .7rem;
      color: grey;
      `

      const DropdownSpan = styled.span`
      margin-top: .3rem;
      float: right;
      font-size: 1.2rem;
      z-index: 10;
      color: grey;
      `

      const MenuDiv = styled.div`
      margin-left: .5rem;
      font-size: .8rem;
      display: none;
      width: 10rem;
      z-index: 15;
      position: absolute;
      top: 2rem;
      border: 1px solid black;
      background: white;

      &.active {
        display: inline-block;
      }
      `

      const MenuP = styled.p`
      margin: 0;
      padding: .125rem .25rem;
      background: #0989F7;
      color: white;
      font-size: .7rem;
      `

      const Label = styled.label`
      margin-left: .25rem;
      font-size: .6rem;
      z-index: 10;
      display: none;
      `

      const TextInput = styled.input`
      width: 7rem;
      border: none;
      z-index: 10;
      `

const TextLongerInput = styled.input`
width: 10rem;
border: none;
z-index: 10;
`

      const StyledDiv = styled.div`
      width: 7.125rem;
      height: .5rem;
      position: absolute;
      border: 1px solid black;
      border-top: none;
      margin-left: .45rem;
      margin-top: 1.1rem;
      z-index: 1;
      `

const StyledLongerDiv = styled.div`
width: 10.125rem;
height: .5rem;
position: absolute;
border: 1px solid black;
border-top: none;
margin-left: .45rem;
margin-top: 1.1rem;
z-index: 1;
`