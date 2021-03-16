import { useState, useEffect } from 'react'
import styled from 'styled-components'

import CarProps from './CarProps'
import PetProps from './PetProps'
import MotorcycleProps from './MotorcycleProps'

import initialUserData from '../lib/userData'

import { ReactComponent as submit } from '../images/submit.svg'
import { ReactComponent as reset } from '../images/reset.svg'

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
        <ContainerBox>
        <Form onSubmit={submitForm}>
        <H2>Bitte geben Sie Ihre Daten ein:</H2>
          <div>
      <HandleDiv>
    <StyledDiv />
    <Label className={userData.name.length ? 'active' : ''} htmlFor="name">NAME</Label>
          <TextInput
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          </HandleDiv>
          <HandleDiv>
          <StyledDiv></StyledDiv>
          <Label className={userData.lastname.length ? 'active' : ''} htmlFor="lastname">NACHNAME</Label>
          <TextInput
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

          <SelectDiv>
            <StyledLongerDiv></StyledLongerDiv>
          <Select
            name="relationship"
            value={userData.relationship}
            onChange={handleChange}
            required
          >
            <Option value="">BEZIEHUNGSSTATUS:</Option>
            <Option value="single">LEDIG</Option>
            <Option value="inRelationship">LEBENSGEMEINSCHAFT</Option>
            <Option value="married">VERHEIRATET / EINGETRAGENE LEBENSPARTNERSCHAFT</Option>
            <Option value="divorced">GESCHIEDEN</Option>
            <Option value="widowed">VERWITWET</Option>
          </Select>
          <SelectSpan>▾</SelectSpan>
         </SelectDiv>
            
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

            <SelectDiv>
            <StyledLongerDiv></StyledLongerDiv>
          <Select
            name="jobStatus"
            value={userData.jobStatus}
            onChange={handleChange}
            required
          >
            <Option value="">BERUFSSTATUS:</Option>
            <Option value="employed">ANGESTELLT</Option>
            <Option value="selfEmployed">SELBSTSTÄNDIG</Option>
            <Option value="civilServants">VERBEAMTET</Option>
          </Select>
          <SelectSpan>▾</SelectSpan>
         </SelectDiv>
        

            <HandleDiv>
          <StyledLongerDiv></StyledLongerDiv>
          <Label htmlFor="income">Bruttoeinkommen:</Label>
          <TextLongerInput
            placeholder="BRUTTOEINKOMMEN:"
            type="text"
            name="income"
            value={userData.income}
            onChange={handleChange}
          />
          </HandleDiv>

          <HandleDiv>
          <StyledLongerDiv></StyledLongerDiv>
          <Label htmlFor="netIncome">Nettoeinkommen:</Label>
          <TextLongerInput
            placeholder="NETTOEINKOMMEN:"
            type="text"
            name="netIncome"
            value={userData.netIncome}
            onChange={handleChange}
          />
          </HandleDiv>

          <CheckboxLabel className='firstLabel'>
            <Checkbox
              type="checkbox"
              name="houseOwner"
              checked={userData.houseOwner}
              onChange={handleChange}
            />
            SELBSTBEWOHNTES EIGENTUMSHAUS?
          </CheckboxLabel>

          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="valuables"
              checked={userData.valuables}
              onChange={handleChange}
            />
            WERTGEGENSTÄNDE VORHANDEN?
          </CheckboxLabel>

          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="car"
              checked={userData.car}
              onChange={handleChange}
            />
            AUTO VORHANDEN?
          </CheckboxLabel>
          
        <CarProps userData={userData} handleChange={handleChange} />

        <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="pet"
              checked={userData.pet}
              onChange={handleChange}
            />
            HAUSTIER VORHANDEN?
          </CheckboxLabel>

        <PetProps userData={userData} handleChange={handleChange} />

        <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="motorcycle"
              checked={userData.motorcycle}
              onChange={handleChange}
            />
            MOTORRAD VORHANDEN?
          </CheckboxLabel>

        <MotorcycleProps userData={userData} handleChange={handleChange} />

        <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="dangerousHobby"
              checked={userData.dangerousHobby}
              onChange={handleChange}
            />
            GEFÄHRLICHES HOBBY? (Z.B. TAUCHEN)
          </CheckboxLabel>

          <ButtonDiv>
        <ButtonSubmit type="submit" text="Add"><Submit />
          <ButtonSpan>
Los gehts!</ButtonSpan></ButtonSubmit>
        <ButtonReset type="reset" text="Reset" onClick={() => setUserData(initialUserData)}><Reset /><ButtonSpan>
Neustarten</ButtonSpan></ButtonReset>
        </ButtonDiv>
        </Form>
        </ContainerBox>
      )}

const ContainerBox = styled.div`
display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: .5rem;
`

const H2 = styled.h2`
width: 100%;
font-size: .9rem;
margin: 1rem .4rem 1rem .4rem;
`

      const Form = styled.form`
      display: flex;
      flex-wrap: wrap;
      `

      const HandleDiv = styled.div`
      margin-top: .5rem;
      height: 3rem;
      display: inline-flex;
      align-items: center;
      border: 1px solid black;
      position: relative;
      `

      const SelectDiv = styled.div`
      margin: 1rem 1rem 0 0;
      height: 2rem;
      display: inline-flex;
      align-items: center;
      position: relative;
      width: 10rem;
      `

      const Select = styled.select`
      appearance: none;
      background-color: transparent;
      border: none;
      width: 100%;
      font-family: inherit;
      color: grey;
      outline: none;
      font-size: .7rem;
      cursor: pointer;
      z-index: 10;

      &::-ms-expand {
        display: none;
      }
      `

const SelectSpan = styled.span`
right: 0;
margin-bottom: .35rem;
font-size: 1.2rem;
color: grey;
position: absolute;
`

const Option = styled.option`
padding: .125rem .25rem;
background: #0989F7;
color: white;
font-size: .7rem;
`

const CheckboxLabel = styled.label`
margin: .25rem 0 0 0;
display: inline-block;
font-size: .7rem;
color: grey;

&.firstLabel {
  margin-top: 2rem;
}
`

      const Label = styled.label`
      margin-left: .75rem;
      font-size: .6rem;
      z-index: 10;
      position: absolute;
      transition: all .25s;
      

&.active {
  transform: translateY(1.1rem);
  left: -.45rem;
  scale: 0.8;
}

      `

      const TextInput = styled.input`
      background: transparent;
      width: 7rem;
      border: none;
      z-index: 10;
      `

const TextLongerInput = styled.input`
background: transparent;
width: 10rem;
border: none;
z-index: 10;
`

      const StyledDiv = styled.div`
      width: 7.125rem;
      height: .5rem;
      background: transparent;
      position: absolute;
      border: 1px solid #0989F7;
      border-top: none;
      margin-left: .45rem;
      margin-top: .5rem;
      z-index: 1;
      `

const StyledLongerDiv = styled.div`
width: 10.125rem;
height: .5rem;
background: transparent;
position: absolute;
border: 1px solid #0989F7;
border-top: none;
margin-left: .45rem;
margin-top: .5rem;
z-index: 1;
`

const Checkbox = styled.input`
margin: .25rem;
width: 1rem;
`

const ButtonDiv = styled.div`
margin-top: 2rem;
width: 100%;
`

const ButtonSubmit = styled.button`
display: inline-flex;
align-items: center;
margin: .25rem;
padding: .25rem .5rem;
color: white;
border: none;
background: #2E9003;
border-radius: 10px;
height: 1.5rem;
`

const ButtonReset = styled.button`
display: inline-flex;
align-items: center;
margin: .25rem;
padding: .25rem .5rem;
color: white;
border: none;
background: #BA0D50;
border-radius: 10px;
height: 1.5rem;
`

const ButtonSpan = styled.span`
margin-left: .25rem;
`

const Submit = styled(submit)`
width: 14.5px;
height: 14.5px;
`

const Reset = styled(reset)`
width: 17.31px;
height: 12.59px;
`