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
    const [dropdowns, setDropdowns] = useState({
      relationship: false,
      jobStatus: false,
    })

      /* window.addEventListener("click", (event) => {
        const classe = event.target.className.split(' ')
        console.log(classe[2] === 'jobStatus')
        if (classe[2] !== 'relationship') {
          setDropdowns({ ...dropdowns, relationship: false })
        }
        if (classe[2] !== 'jobStatus') {
          setDropdowns({ ...dropdowns, jobStatus: false })
        }
      }); */

    const handleChange = (event) => {
        const field = event.target;
        let value = event.target.value;
    
        if (event.target.type === 'checkbox') {
          value = event.target.checked;
        }

        setUserData({ ...userData, [field.name]: value });
      };

      const dropChange = (value, field) => {
        setUserData({ ...userData, [field]: value })
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

    function DropDown(event) {
      let eventTarget = event.target.className.split(' ')
        if (eventTarget[2] === 'jobStatus') {
          setDropdowns({ ...dropdowns, [eventTarget[2]]: dropdowns.jobStatus ? false : true })
        }
        if (eventTarget[2] === 'relationship') {
          setDropdowns({ ...dropdowns, [eventTarget[2]]: dropdowns.relationship ? false : true })
        }
    }

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
          <DropdownFakeLabel className="relationship" htmlFor="relationship" onClick={DropDown} >
            <DropdownLabel className="relationship" >{userData.relationship ? userData.relationship : 'BEZIEHUNGSSTATUS:'}</DropdownLabel><DropdownSpan className="relationship" >{dropdowns.relationship ? '⇐' : '⇓'}</DropdownSpan>
            </DropdownFakeLabel>
            <MenuDiv className={dropdowns.relationship ? 'active' : ''}>
              <MenuP className="relationship" onClick={() => dropChange('single', 'relationship')}>ledig</MenuP>
              <MenuP className="relationship" onClick={() => dropChange('inRelationship', 'relationship')}>Lebensgemeinschaft</MenuP>
              <MenuP className="relationship" onClick={() => dropChange('married', 'relationship')}>verheiratet / eingetragene Lebenspartnerschaft</MenuP>
              <MenuP className="relationship" onClick={() => dropChange('divorced', 'relationship')}>geschieden</MenuP>
              <MenuP className="relationship" onClick={() => dropChange('widowed', 'relationship')}>verwitwet</MenuP>
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
          
          <DropdownDiv>
          <StyledLongerDiv></StyledLongerDiv>
          <DropdownFakeLabel className="jobStatus" htmlFor="jobStatus" onClick={DropDown} >
            <DropdownLabel className="jobStatus">{userData.jobStatus ? userData.jobStatus : 'BERUFSSTATUS:'}</DropdownLabel><DropdownSpan className="jobStatus">{dropdowns.jobStatus ? '⇐' : '⇓'}</DropdownSpan>
            </DropdownFakeLabel>
            <MenuDiv className={dropdowns.jobStatus ? 'active' : ''}>
              <MenuP className="jobStatus" onClick={() => dropChange('employed', 'jobStatus')}>angestellt</MenuP>
              <MenuP className="jobStatus" onClick={() => dropChange('selfEmployed', 'jobStatus')}>selbstständig</MenuP>
              <MenuP className="jobStatus" onClick={() => dropChange('civilServants', 'jobStatus')}>verbeamtet</MenuP>
            </MenuDiv>
            </DropdownDiv>

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

          <DropdownLabel>
            <Checkbox
              type="checkbox"
              name="houseOwner"
              checked={userData.houseOwner}
              onChange={handleChange}
            />
            SELBSTBEWOHNTES EIGENTUMSHAUS?
          </DropdownLabel>

          <DropdownLabel>
            <Checkbox
              type="checkbox"
              name="valuables"
              checked={userData.valuables}
              onChange={handleChange}
            />
            WERTGEGENSTÄNDE VORHANDEN?
          </DropdownLabel>

          <DropdownLabel>
            <Checkbox
              type="checkbox"
              name="car"
              checked={userData.car}
              onChange={handleChange}
            />
            AUTO VORHANDEN?
          </DropdownLabel>
          
        <CarProps userData={userData} handleChange={handleChange} />

        <DropdownLabel>
            <Checkbox
              type="checkbox"
              name="pet"
              checked={userData.pet}
              onChange={handleChange}
            />
            HAUSTIER VORHANDEN?
          </DropdownLabel>

        <PetProps userData={userData} handleChange={handleChange} />

        <DropdownLabel>
            <Checkbox
              type="checkbox"
              name="motorcycle"
              checked={userData.motorcycle}
              onChange={handleChange}
            />
            MOTORRAD VORHANDEN?
          </DropdownLabel>

        <MotorcycleProps userData={userData} handleChange={handleChange} />

        <DropdownLabel>
            <Checkbox
              type="checkbox"
              name="dangerousHobby"
              checked={userData.dangerousHobby}
              onChange={handleChange}
            />
            GEFÄHRLICHES HOBBY? (Z.B. TAUCHEN)
          </DropdownLabel>

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
      border: 1px solid #0989F7;
      border-top: none;
      margin-left: .45rem;
      margin-top: 1.1rem;
      z-index: 1;
      `

const StyledLongerDiv = styled.div`
width: 10.125rem;
height: .5rem;
position: absolute;
border: 1px solid #0989F7;
border-top: none;
margin-left: .45rem;
margin-top: 1.1rem;
z-index: 1;
`

const Checkbox = styled.input`
margin: .25rem;
width: 1rem;
`

const ButtonDiv = styled.div`
margin-top: 1rem;
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