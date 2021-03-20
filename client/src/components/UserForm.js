import { useState, useEffect } from "react";
import styled from "styled-components";

import CarProps from "./CarProps";
import PetProps from "./PetProps";
import MotorcycleProps from "./MotorcycleProps";

import initialUserData from "../lib/userData";

import { ReactComponent as submit } from "../images/submit.svg";
import { ReactComponent as reset } from "../images/reset.svg";

import setAge from "../services/setAge";
import setUserNetIncome from "../services/setNetIncome";
import getDropDownName from "../services/dropDownName";
import UserInsurances from "./UserInsurances";

export default function UserForm({ onSubmitForm }) {
  const [userData, setUserData] = useState(initialUserData);
  const [focused, setFocused] = useState("");
  const [dropDownName, setDropDownName] = useState("");

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setUserData({ ...userData, [field.name]: value });
  };

  const dropChange = (value, field) => {
    setUserData({ ...userData, [field]: value });
    getDropDownName(value, setDropDownName);
  };

  useEffect(() => {
    setAge(userData, setUserData);
  }, [userData.birthday]);

  useEffect(() => {
    setUserNetIncome(userData, setUserData);
  }, [userData.income]);

  function submitForm(event) {
    event.preventDefault();
    onSubmitForm(userData);
    setUserData(initialUserData);
  }

  useEffect(() => {
    if (focused) {
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("click", handleClick);
      };
    }
  }, [focused]);

  function handleClick(event, value) {
    event.stopPropagation();

    if (value) {
      setFocused(value);
      return;
    } else {
      setFocused("");
      return;
    }
  }

  return (
    <ContainerBox>
      <Form onSubmit={submitForm}>
        <H2>Bitte geben Sie Ihre Daten ein:</H2>

        <HandleDiv>
          <StyledDiv>
            <Label
              className={focused === "name" || userData.name ? "active" : ""}
              htmlFor="name"
            >
              NAME
            </Label>
          </StyledDiv>
          <TextInput
            className="name"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            onClick={(event) => handleClick(event, "name")}
          />
        </HandleDiv>
        <HandleDiv>
          <StyledDiv>
            <Label
              className={
                focused === "lastname" || userData.lastname ? "active" : ""
              }
              htmlFor="lastname"
            >
              NACHNAME
            </Label>
          </StyledDiv>
          <TextInput
            className="lastname"
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            onClick={(event) => handleClick(event, "lastname")}
          />
        </HandleDiv>

        <HandleLongerDiv>
          <StyledLongerDiv>
            <Label
              className={
                focused === "birthday" || userData.birthday ? "active" : ""
              }
              htmlFor="birthday"
            >
              GEBURTSTAG
            </Label>
          </StyledLongerDiv>
          <TextLongerInput
            className="birthday"
            type="text"
            name="birthday"
            value={userData.birthday}
            onChange={handleChange}
            onClick={(event) => handleClick(event, "birthday")}
          />
        </HandleLongerDiv>

        <SelectDiv onClick={(event) => handleClick(event, "relationship")}>
          <StyledLongerDiv>
            <Label
              className={userData.relationship ? "active" : ""}
              htmlFor="relationship"
            >
              BEZIEHUNGSSTATUS
            </Label>
            <P>{userData.relationship ? dropDownName : ""}</P>
          </StyledLongerDiv>
          <MenuDiv className={focused === "relationship" ? "active" : ""}>
            <MenuP
              className={userData.relationship === "single" ? "active" : ""}
              onClick={() => dropChange("single", "relationship")}
            >
              LEDIG
            </MenuP>
            <MenuP
              className={
                userData.relationship === "inRelationship" ? "active" : ""
              }
              onClick={() => dropChange("inRelationship", "relationship")}
            >
              LEBENSGEMEINSCHAFT
            </MenuP>
            <MenuP
              className={userData.relationship === "married" ? "active" : ""}
              onClick={() => dropChange("married", "relationship")}
            >
              VERHEIRATET
            </MenuP>
            <MenuP
              className={userData.relationship === "divorced" ? "active" : ""}
              onClick={() => dropChange("divorced", "relationship")}
            >
              GESCHIEDEN
            </MenuP>
            <MenuP
              className={userData.relationship === "widowed" ? "active" : ""}
              onClick={() => dropChange("widowed", "relationship")}
            >
              VERWITWET
            </MenuP>
            <MenuP
              className={
                userData.relationship === "" ? "red-block" : "red-font"
              }
              onClick={() => setUserData({ ...userData, relationship: "" })}
            >
              ZURÜCKSETZEN
            </MenuP>
          </MenuDiv>
          <Select
            name="relationship"
            value={userData.relationship}
            onChange={handleChange}
            required
          >
            <Option value=""></Option>
            <Option value="single">LEDIG</Option>
            <Option value="inRelationship">LEBENSGEMEINSCHAFT</Option>
            <Option value="married">
              VERHEIRATET / EINGETRAGENE LEBENSPARTNERSCHAFT
            </Option>
            <Option value="divorced">GESCHIEDEN</Option>
            <Option value="widowed">VERWITWET</Option>
          </Select>
          <SelectSpan>{focused === "relationship" ? "◂" : "▾"}</SelectSpan>
        </SelectDiv>

        <HandleLongerDiv>
          <StyledLongerDiv>
            <Label
              className={
                focused === "children" || userData.children ? "active" : ""
              }
              htmlFor="children"
            >
              ANZAHL DER KINDER
            </Label>
          </StyledLongerDiv>
          <TextLongerInput
            className="children"
            type="text"
            name="children"
            value={userData.children}
            onChange={handleChange}
            onClick={(event) => handleClick(event, "children")}
          />
        </HandleLongerDiv>

        <SelectDiv onClick={(event) => handleClick(event, "jobStatus")}>
          <StyledLongerDiv>
            <Label
              className={userData.jobStatus ? "active" : ""}
              htmlFor="jobStatus"
            >
              BERUFSSTATUS
            </Label>
            <P>{userData.jobStatus ? dropDownName : ""}</P>
          </StyledLongerDiv>
          <MenuDiv className={focused === "jobStatus" ? "active" : ""}>
            <MenuP
              className={userData.jobStatus === "employed" ? "active" : ""}
              onClick={() => dropChange("employed", "jobStatus")}
            >
              ANGESTELLT
            </MenuP>
            <MenuP
              className={userData.jobStatus === "selfEmployed" ? "active" : ""}
              onClick={() => dropChange("selfEmployed", "jobStatus")}
            >
              SELBSTSTÄNDIG
            </MenuP>
            <MenuP
              className={userData.jobStatus === "civilServants" ? "active" : ""}
              onClick={() => dropChange("civilServants", "jobStatus")}
            >
              VERBEAMTET
            </MenuP>
            <MenuP
              className={userData.jobStatus === "" ? "red-block" : "red-font"}
              onClick={() => setUserData({ ...userData, jobStatus: "" })}
            >
              ZURÜCKSETZEN
            </MenuP>
          </MenuDiv>
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
          <SelectSpan>{focused === "jobStatus" ? "◂" : "▾"}</SelectSpan>
        </SelectDiv>

        <HandleLongerDiv>
          <StyledLongerDiv>
            <Label
              className={
                focused === "income" || userData.income ? "active" : ""
              }
              htmlFor="income"
            >
              BRUTTOEINKOMMEN
            </Label>
          </StyledLongerDiv>
          <TextLongerInput
            className="income"
            type="text"
            name="income"
            value={userData.income}
            onChange={handleChange}
            onClick={(event) => handleClick(event, "income")}
          />
        </HandleLongerDiv>

        <HandleLongerDiv>
          <StyledLongerDiv>
            <Label
              className={
                focused === "netIncome" || userData.netIncome ? "active" : ""
              }
              htmlFor="netIncome"
            >
              NETTOEINKOMMEN
            </Label>
          </StyledLongerDiv>
          <TextLongerInput
            className="netIncome"
            type="text"
            name="netIncome"
            value={userData.netIncome}
            onChange={handleChange}
            onClick={(event) => handleClick(event, "netIncome")}
          />
        </HandleLongerDiv>

        <CheckboxContainer>
          <div>
            <CheckboxLabel className="firstLabel">
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

            <CarProps
              userData={userData}
              handleChange={handleChange}
              handleClick={handleClick}
              focused={focused}
            />
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

            <MotorcycleProps
              userData={userData}
              handleChange={handleChange}
              handleClick={handleClick}
              focused={focused}
            />
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

        <UserInsurances userData={userData} setUserData={setUserData} />

        <ButtonDiv>
          <ButtonSubmit type="submit" text="Add">
            <Submit />
            <ButtonSpan>Los gehts!</ButtonSpan>
          </ButtonSubmit>
          <ButtonReset
            type="reset"
            text="Reset"
            onClick={() => setUserData(initialUserData)}
          >
            <Reset />
            <ButtonSpan>Neustarten</ButtonSpan>
          </ButtonReset>
        </ButtonDiv>
      </Form>
    </ContainerBox>
  );
}

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const H2 = styled.h2`
  width: 100%;
  font-size: 0.9rem;
  margin: 1rem 0.4rem 1rem 0.4rem;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const HandleLongerDiv = styled.div`
  width: 100%;
  max-width: 382px;
  margin-top: 0.5rem;
  height: 3rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HandleDiv = styled.div`
  width: 50%;
  max-width: 191px;
  margin-top: 0.5rem;
  height: 3rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SelectDiv = styled.div`
  width: 70%;
  max-width: 191px;
  margin: 0.5rem 0 0 0.25rem;
  height: 3rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Select = styled.select`
  display: none;
  position: absolute;
  appearance: none;
  background-color: transparent;
  border: none;
  width: 100%;
  font-family: inherit;
  font-size: 0.8rem;
  color: #676767;
  cursor: pointer;
  z-index: 10;
  left: 0.6rem;
  bottom: 1.125rem;

  &::-ms-expand {
    display: none;
  }
`;

const TextInput = styled.input`
  position: absolute;
  background: transparent;
  width: 90%;
  border: none;
  z-index: 10;
  font-size: 0.8rem;
  color: #676767;
  margin-left: 0.5rem;
  bottom: 1.125rem;
`;

const StyledDiv = styled.div`
  width: 90%;
  height: 0.5rem;
  background: transparent;
  position: relative;
  border: 1px solid #0989f7;
  border-top: none;
  margin-top: 0.5rem;
  z-index: 1;
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: #676767;
  z-index: 10;
  position: absolute;
  transition: all 0.25s;
  left: 0.25rem;
  bottom: 0.1rem;

  &.active {
    left: 0;
    bottom: 0;
    transform: translateY(-1.3rem);
    font-size: 0.5rem;
    color: #0989f7;
  }
`;

const P = styled.p`
  font-size: 0.8rem;
  color: #676767;
  z-index: 10;
  position: absolute;
  transition: all 0.25s;
  left: 0.25rem;
  bottom: -0.7rem;
`;

const SelectSpan = styled.span`
  right: 0.7rem;
  bottom: 0.8rem;
  font-size: 1.5rem;
  color: grey;
  position: absolute;
`;

const Option = styled.option`
  padding: 0.125rem 0.25rem;
  background: #0989f7;
  color: white;
  font-size: 0.7rem;
`;

const CheckboxLabel = styled.label`
  margin: 0.25rem 0 0 0;
  display: inline-block;
  font-size: 0.8rem;
  color: #676767;

  &.firstLabel {
    @media (max-width: 1024px) {
      margin-top: 2rem;
    }
  }
`;

const TextLongerInput = styled.input`
  position: absolute;
  background: transparent;
  margin-left: 0.5rem;
  width: 95%;
  border: none;
  z-index: 10;
  font-size: 0.8rem;
  color: #676767;
  bottom: 1.125rem;
`;

const StyledLongerDiv = styled.div`
  width: 95%;
  height: 0.5rem;
  background: transparent;
  position: relative;
  border: 1px solid #0989f7;
  border-top: none;
  margin-top: 0.5rem;
  z-index: 1;
`;

const CheckboxContainer = styled.div`
  width: 100%;
`;

const Checkbox = styled.input`
  margin: 0.25rem;
  width: 1rem;
`;

const ButtonDiv = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonSubmit = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  color: white;
  border: none;
  background: #2e9003;
  border-radius: 10px;
  height: 1.5rem;
`;

const ButtonReset = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  color: white;
  border: none;
  background: #ba0d50;
  border-radius: 10px;
  height: 1.5rem;
`;

const ButtonSpan = styled.span`
  margin-left: 0.25rem;
`;

const Submit = styled(submit)`
  width: 14.5px;
  height: 14.5px;
`;

const Reset = styled(reset)`
  width: 17.31px;
  height: 12.59px;
`;

const MenuDiv = styled.div`
  font-size: 0.8rem;
  display: none;
  width: 95%;
  z-index: 15;
  position: absolute;
  top: 2rem;
  background: white;
  &.active {
    display: inline-block;
  }
`;

const MenuP = styled.p`
  margin: 0;
  height: 1.5rem;
  border: 0.5px solid #0989f7;
  border-top: none;
  padding: 0.3rem 0.4rem 0.2rem;
  color: #0989f7;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    background: #0989f7;
    color: white;
  }

  &.active {
    background: #0989f7;
    color: white;
  }

  &.red-font {
    color: #ba0d50;
    border: 0.5px solid #ba0d50;
    border-top: none;
  }

  &.red-block {
    background: #ba0d50;
    color: white;
    border: 0.5px solid #ba0d50;
    border-top: none;
  }
`;
