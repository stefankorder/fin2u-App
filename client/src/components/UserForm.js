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
    const [focused, setFocused] = useState('')

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

 useEffect(() => {
  if (focused) {
    window.addEventListener('click', handleClick)
      
      return () => {
        window.removeEventListener('click', handleClick);
      }
   }
}, [focused])

function handleClick(event, value) {
  event.stopPropagation();
  
  if (value) {
    setFocused(value)
    return
  }
  else {
    setFocused('')
    return
  }
}

      return (
        <ContainerBox>
        <Form onSubmit={submitForm}>
        <H2>Bitte geben Sie Ihre Daten ein:</H2>

      <HandleDiv>
    <StyledDiv>
    <Label className={focused === 'name' || userData.name.length ? 'active' : ''} htmlFor="name">NAME</Label>
    </StyledDiv>
          <TextInput
          className='name'
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            onClick={(event) => handleClick(event, 'name')}
          />
          </HandleDiv>
          <HandleDiv>
          <StyledDiv>
          <Label className={focused === 'lastname' || userData.lastname.length ? 'active' : ''} htmlFor="lastname">NACHNAME</Label>
          </StyledDiv>
          <TextInput
          className='lastname'
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            onClick={(event) => handleClick(event, 'lastname')}
          />
          </HandleDiv>

          <HandleLongerDiv>
          <StyledLongerDiv>
          <Label className={focused === 'birthday' || userData.birthday.length ? 'active' : ''} htmlFor="birthday">GEBURTSTAG</Label>
          </StyledLongerDiv>
          <TextLongerInput
            className='birthday'
            type="text"
            name="birthday"
            value={userData.birthday}
            onChange={handleChange}
            onClick={(event) => handleClick(event, 'birthday')}
          />
          </HandleLongerDiv>

          <SelectDiv>
          <StyledLongerDiv>
            <Label className={userData.relationship.length ? 'active' : ''} htmlFor="relationship">BEZIEHUNGSSTATUS</Label>
            </StyledLongerDiv>
          <Select
            name="relationship"
            value={userData.relationship}
            onChange={handleChange}
            required
          >
            <Option value=""></Option>
            <Option value="single">LEDIG</Option>
            <Option value="inRelationship">LEBENSGEMEINSCHAFT</Option>
            <Option value="married">VERHEIRATET / EINGETRAGENE LEBENSPARTNERSCHAFT</Option>
            <Option value="divorced">GESCHIEDEN</Option>
            <Option value="widowed">VERWITWET</Option>
          </Select>
          <SelectSpan>▾</SelectSpan>
         </SelectDiv>
            

         <HandleLongerDiv>
         <StyledLongerDiv>
          <Label className={focused === 'children' || userData.children.length ? 'active' : ''} htmlFor="children">ANZAHL DER KINDER</Label>
          </StyledLongerDiv>
          <TextLongerInput
            className='children'
            type="text"
            name="children"
            value={userData.children}
            onChange={handleChange}
            onClick={(event) => handleClick(event, 'children')}
          />
          </HandleLongerDiv>

            <SelectDiv>
            <StyledLongerDiv>
            <Label className={userData.jobStatus.length ? 'active' : ''} htmlFor="jobStatus">BERUFSSTATUS</Label>
            </StyledLongerDiv>
          <Select
            name="jobStatus"
            value={userData.jobStatus}
            onChange={handleChange}
            required
          >
            <Option value=""></Option>
            <Option value="employed">ANGESTELLT</Option>
            <Option value="selfEmployed">SELBSTSTÄNDIG</Option>
            <Option value="civilServants">VERBEAMTET</Option>
          </Select>
          <SelectSpan>▾</SelectSpan>
         </SelectDiv>
        

         <HandleLongerDiv>
         <StyledLongerDiv>
          <Label className={focused === 'income' || userData.income.length ? 'active' : ''} htmlFor="income">BRUTTOEINKOMMEN</Label>
          </StyledLongerDiv>
          <TextLongerInput
            className='income'
            type="text"
            name="income"
            value={userData.income}
            onChange={handleChange}
            onClick={(event) => handleClick(event, 'income')}
          />
          </HandleLongerDiv>

          <HandleLongerDiv>
          <StyledLongerDiv>
          <Label className={focused === 'netIncome' || userData.netIncome.length ? 'active' : ''} htmlFor="netIncome">NETTOEINKOMMEN</Label>
          </StyledLongerDiv>
          <TextLongerInput
            className='netIncome'
            type="text"
            name="netIncome"
            value={userData.netIncome}
            onChange={handleChange}
            onClick={(event) => handleClick(event, 'netIncome')}
          />
          </HandleLongerDiv>

<CheckboxContainer>
<div>
          <CheckboxLabel className='firstLabel'>
            <Checkbox
              type="checkbox"
              name="houseOwner"
              checked={userData.houseOwner}
              onChange={handleChange}
            />
            SELBSTBEWOHNTES EIGENTUMSHAUS?
          </CheckboxLabel>

          </div>
<div>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="valuables"
              checked={userData.valuables}
              onChange={handleChange}
            />
            WERTGEGENSTÄNDE VORHANDEN?
          </CheckboxLabel>
          </div>
<div>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="car"
              checked={userData.car}
              onChange={handleChange}
            />
            AUTO VORHANDEN?
          </CheckboxLabel>
          
        <CarProps userData={userData} handleChange={handleChange} handleClick={handleClick} focused={focused} />
        </div>
        <div>
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
        </div>
        <div>
        <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="motorcycle"
              checked={userData.motorcycle}
              onChange={handleChange}
            />
            MOTORRAD VORHANDEN?
          </CheckboxLabel>

        <MotorcycleProps userData={userData} handleChange={handleChange} handleClick={handleClick} focused={focused} />
        </div>
        <div>
        <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="dangerousHobby"
              checked={userData.dangerousHobby}
              onChange={handleChange}
            />
            GEFÄHRLICHES HOBBY? (Z.B. TAUCHEN)
          </CheckboxLabel>
          </div>
          </CheckboxContainer>

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

const HandleLongerDiv = styled.div`
width: 100%;
max-width: 382px;
      margin-top: .5rem;
      height: 3rem;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      `

      const HandleDiv = styled.div`
width: 50%;
max-width: 191px;
      margin-top: .5rem;
      height: 3rem;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      `

const SelectDiv = styled.div`
width: 70%;
max-width: 191px;
margin: .5rem 0 0 .25rem;
height: 3rem;
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
`

const Select = styled.select`
position: absolute;
      appearance: none;
      background-color: transparent;
      border: none;
      width: 100%;
      font-family: inherit;
      font-size: .8rem;
color: #676767;
      cursor: pointer;
      z-index: 10;
      left: .6rem;
      bottom: 1.125rem;

      &::-ms-expand {
        display: none;
      }
      `

const TextInput = styled.input`
position: absolute;
background: transparent;
width: 90%;
border: none;
z-index: 10;
font-size: .8rem;
color: #676767;
margin-left: .5rem;
bottom: 1.125rem;
`

const StyledDiv = styled.div`
      width: 90%;
      height: .5rem;
      background: transparent;
      position: relative;
      border: 1px solid #0989F7;
      border-top: none;
      margin-top: .5rem;
      z-index: 1;
      `

const Label = styled.label`
      font-size: .8rem;
      color: #676767;
      z-index: 10;
      position: absolute;
      transition: all .25s;
      left: .25rem;
      bottom: .1rem;
      

&.active {
  left: 0;
  bottom: 0;
  transform: translateY(-1.3rem);
  font-size: .5rem;
  color: #0989F7;
}
      `

const SelectSpan = styled.span`
right: .5rem;
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
font-size: .8rem;
color: #676767;

&.firstLabel {
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
}
`

const TextLongerInput = styled.input`
position: absolute;
background: transparent;
margin-left: .5rem;
width: 95%;
border: none;
z-index: 10;
font-size: .8rem;
color: #676767;
bottom: 1.125rem;
`

const StyledLongerDiv = styled.div`
width: 95%;
height: .5rem;
background: transparent;
position: relative;
border: 1px solid #0989F7;
border-top: none;
margin-top: .5rem;
z-index: 1;
`

const CheckboxContainer = styled.div`
width: 100%;
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