import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CarProps from "./CarProps";
import PetProps from "./PetProps";
import MotorcycleProps from "./MotorcycleProps";

import InputField from "./InputField";
import LongerInputField from "./LongerInputField";
import DropDown from "./DropDown";
import Checkbox from "./Checkbox";

import initialUserData from "../lib/userData";
import insuranceProducts from "../lib/insuranceProducts";
import pointNamesRelationship from "../lib/pointNamesRelationship";
import pointNamesjobStatus from "../lib/pointNamesjobStatus";

import { ReactComponent as Submit } from "../images/submit.svg";
import { ReactComponent as Reset } from "../images/reset.svg";

import setAge from "../services/setAge";
import setUserNetIncome from "../services/setNetIncome";

import UserInsurances from "./UserInsurances";

export default function UserForm({ onSubmitForm, userToCalculate }) {
  const [userData, setUserData] = useState(
    userToCalculate ? userToCalculate : initialUserData
  );
  const [focused, setFocused] = useState("");
  const [formValidation, setFormValidation] = useState([]);
  const [insurancesAlreadyCompleted, setInsurancesAlreadyCompleted] = useState(
    userToCalculate ? insurancesToDisplay() : []
  );

  useEffect(() => {
    const UserAge = setAge(userData.birthday);
    setUserData({ ...userData, age: UserAge });
  }, [userData.birthday]);

  useEffect(() => {
    const userNetIncome = setUserNetIncome(userData.income, userData.jobStatus);
    if (userData.jobStatus === "employed") {
      setUserData({ ...userData, netIncome: userNetIncome });
    }
    if (!isNaN(userNetIncome)) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "netIncome"
      );
      setFormValidation(remainingValids);
    }
  }, [userData.income]);

  useEffect(() => {
    if (formValidation.includes("go")) {
      onSubmitForm(userData);
      setFormValidation([]);
    }
  }, [formValidation]);

  useEffect(() => {
    if (focused) {
      window.addEventListener("click", handleClick, false);

      return () => {
        window.removeEventListener("click", handleClick, false);
      };
    }
  }, [focused]);

  function handleClick(event, value) {
    event.stopPropagation();

    if (value) {
      setFocused(value);
      return;
    } else if (event.target.name) {
      setFocused(event.target.name);
      return;
    } else {
      setFocused("");
      return;
    }
  }

  function insurancesToDisplay() {
    const insurancesDisplay = [];
    insuranceProducts.forEach(({ value, name }) => {
      if (userToCalculate.insurancesAlreadyHave.includes(value)) {
        insurancesDisplay.push({ name, value });
      }
    });
    return insurancesDisplay;
  }

  function handleChange(event) {
    const field = event.target;
    let value = event.target.value;

    if (field.name === "name" && value.length >= 3) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "name"
      );
      setFormValidation(remainingValids);
    }

    if (field.name === "lastname" && value.length >= 3) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "lastname"
      );
      setFormValidation(remainingValids);
    }

    if (field.name === "birthday") {
      const UserAge = setAge(value);
      if (UserAge >= 18 && UserAge < 100) {
        const remainingValids = formValidation.filter(
          (valid) => valid !== "birthday"
        );
        setFormValidation(remainingValids);
      }
    }

    if (field.name === "children" && !isNaN(value) && value) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "children"
      );
      setFormValidation(remainingValids);
    }

    if (field.name === "income" && !isNaN(value) && value) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "income"
      );
      setFormValidation(remainingValids);
    }

    if (field.name === "netIncome" && !isNaN(value) && value) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "netIncome"
      );
      setFormValidation(remainingValids);
    }

    if (
      field.name === "carAge" &&
      !isNaN(value) &&
      value &&
      value < 100 &&
      value >= 0
    ) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "carAge"
      );
      setFormValidation(remainingValids);
    }

    if (field.name === "carValue" && !isNaN(value) && value) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "carValue"
      );
      setFormValidation(remainingValids);
    }

    if (field.name === "petSpecies" && value) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "petSpecies"
      );
      setFormValidation(remainingValids);
    }

    if (
      field.name === "motorcycleAge" &&
      !isNaN(value) &&
      value &&
      value < 100 &&
      value >= 0
    ) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "motorcycleAge"
      );
      setFormValidation(remainingValids);
    }

    if (field.name === "motorcycleValue" && !isNaN(value) && value) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "motorcycleValue"
      );
      setFormValidation(remainingValids);
    }

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    if (field.name === "car" && !value) {
      setUserData({
        ...userData,
        [field.name]: value,
        carAge: "",
        carValue: "",
      });
      return;
    }

    if (field.name === "motorcycle" && !value) {
      setUserData({
        ...userData,
        [field.name]: value,
        motorcycleAge: "",
        motorcycleValue: "",
      });
      return;
    }

    if (field.name === "pet" && !value) {
      setUserData({
        ...userData,
        [field.name]: value,
        petSpecies: "",
      });
      return;
    }

    setUserData({ ...userData, [field.name]: value });
  }

  function validateForm() {
    const validate = [];
    if (userData.name.length < 3) {
      validate.push("name");
    }
    if (userData.lastname.length < 3) {
      validate.push("lastname");
    }
    if (userData.age < 18 || userData.age > 99 || !userData.age) {
      validate.push("birthday");
    }
    if (!userData.relationship) {
      validate.push("relationship");
    }
    if (isNaN(userData.children) || userData.children === "") {
      validate.push("children");
    }
    if (!userData.jobStatus) {
      validate.push("jobStatus");
    }
    if (isNaN(userData.income) || !userData.income) {
      validate.push("income");
    }
    if (isNaN(userData.netIncome) || !userData.netIncome) {
      validate.push("netIncome");
    }
    if (userData.car) {
      if (
        isNaN(userData.carAge) ||
        userData.carAge > 99 ||
        userData.carAge < 0 ||
        !userData.carAge
      ) {
        validate.push("carAge");
      }
      if (isNaN(userData.carValue) || !userData.carValue) {
        validate.push("carValue");
      }
    }
    if (userData.pet && !userData.petSpecies) {
      validate.push("petSpecies");
    }
    if (userData.motorcycle) {
      if (
        isNaN(userData.motorcycleAge) ||
        userData.motorcycleAge > 99 ||
        userData.motorcycleAge < 0 ||
        !userData.motorcycleAge
      ) {
        validate.push("motorcycleAge");
      }
      if (isNaN(userData.motorcycleValue) || !userData.motorcycleValue) {
        validate.push("motorcycleValue");
      }
    }

    if (!validate.length) {
      validate.push("go");
    }
    setFormValidation(validate);
  }

  function submitForm(event) {
    event.preventDefault();
    validateForm();
  }

  function resetAllData() {
    setUserData(initialUserData);
    setInsurancesAlreadyCompleted([]);
    setFormValidation([]);
  }

  return (
    <ContainerBox>
      <Form onSubmit={submitForm}>
        <H2>Bitte gebe deine Daten ein:</H2>

        <InputField
          focused={focused}
          userData={userData.name}
          value="name"
          formValidation={formValidation}
          handleChange={handleChange}
          setFocused={setFocused}
          errorText="Bitte mind. 3 Buchstaben eingeben!"
          inputName="VORNAME"
        />

        <InputField
          focused={focused}
          userData={userData.lastname}
          value="lastname"
          formValidation={formValidation}
          handleChange={handleChange}
          setFocused={setFocused}
          errorText="Bitte mind. 3 Buchstaben eingeben!"
          inputName="NACHNAME"
        />

        <LongerInputField
          focused={focused}
          userData={userData.birthday}
          value="birthday"
          formValidation={formValidation}
          handleChange={handleChange}
          setFocused={setFocused}
          errorText="Kein gültiges Geburtsdatum! (Du musst mind. 18 sein)"
          inputName="GEBURTSDATUM"
        />

        <DropDown
          setFocused={setFocused}
          handleClick={handleClick}
          field={userData.relationship}
          userData={userData}
          value="relationship"
          errorText="Bitte wähle deinen Beziehungsstatus!"
          dropDownName="BEZIEHUNGSSTATUS"
          formValidation={formValidation}
          focused={focused}
          menuPoints={pointNamesRelationship}
          setUserData={setUserData}
          userToCalculate={userToCalculate}
          setFormValidation={setFormValidation}
        />

        <LongerInputField
          focused={focused}
          userData={userData.children}
          value="children"
          formValidation={formValidation}
          handleChange={handleChange}
          setFocused={setFocused}
          errorText="Bitte gebe eine Zahl ein!"
          inputName="ANZAHL DER KINDER"
        />

        <DropDown
          setFocused={setFocused}
          handleClick={handleClick}
          field={userData.jobStatus}
          userData={userData}
          value="jobStatus"
          errorText="Bitte wähle deinen Berufsstatus!"
          dropDownName="BERUFSSTATUS"
          formValidation={formValidation}
          focused={focused}
          menuPoints={pointNamesjobStatus}
          setUserData={setUserData}
          userToCalculate={userToCalculate}
          setFormValidation={setFormValidation}
        />

        <LongerInputField
          focused={focused}
          userData={userData.income}
          value="income"
          formValidation={formValidation}
          handleChange={handleChange}
          setFocused={setFocused}
          errorText="Bitte gebe dein Bruttoeinkommen an!"
          inputName="BRUTTOEINKOMMEN"
        />

        <LongerInputField
          focused={focused}
          userData={userData.netIncome}
          value="netIncome"
          formValidation={formValidation}
          handleChange={handleChange}
          setFocused={setFocused}
          errorText="Bitte gebe dein Nettoeinkommen an!"
          inputName="NETTOEINKOMMEN"
        />

        <CheckboxContainer>
          <Checkbox
            setFocused={setFocused}
            value="houseOwner"
            field={userData.houseOwner}
            userData={userData}
            focused={focused}
            handleChange={handleChange}
            checkboxName="IMMOBILIE VORHANDEN?"
            setUserData={setUserData}
          />

          <Checkbox
            setFocused={setFocused}
            value="valuables"
            field={userData.valuables}
            userData={userData}
            focused={focused}
            handleChange={handleChange}
            checkboxName="WERTGEGENSTÄNDE VORHANDEN?"
            setUserData={setUserData}
          />

          <Checkbox
            setFocused={setFocused}
            value="car"
            field={userData.car}
            userData={userData}
            focused={focused}
            handleChange={handleChange}
            checkboxName="AUTO VORHANDEN?"
            setUserData={setUserData}
          />

          {userData.car && (
            <CarProps
              userData={userData}
              handleChange={handleChange}
              handleClick={handleClick}
              focused={focused}
              formValidation={formValidation}
              setFocused={setFocused}
            />
          )}

          <Checkbox
            setFocused={setFocused}
            value="pet"
            field={userData.pet}
            userData={userData}
            focused={focused}
            handleChange={handleChange}
            checkboxName="HAUSTIER VORHANDEN?"
            setUserData={setUserData}
          />

          {userData.pet && (
            <PetProps
              userData={userData}
              handleChange={handleChange}
              formValidation={formValidation}
              setFocused={setFocused}
            />
          )}

          <Checkbox
            setFocused={setFocused}
            value="motorcycle"
            field={userData.motorcycle}
            userData={userData}
            focused={focused}
            handleChange={handleChange}
            checkboxName="MOTORRAD VORHANDEN?"
            setUserData={setUserData}
          />

          {userData.motorcycle && (
            <MotorcycleProps
              userData={userData}
              handleChange={handleChange}
              handleClick={handleClick}
              focused={focused}
              formValidation={formValidation}
              setFocused={setFocused}
            />
          )}

          <Checkbox
            setFocused={setFocused}
            value="dangerousHobby"
            field={userData.dangerousHobby}
            userData={userData}
            focused={focused}
            handleChange={handleChange}
            checkboxName="GEFÄHRLICHES HOBBY? (Z.B. TAUCHEN)"
            setUserData={setUserData}
          />
        </CheckboxContainer>

        <UserInsurances
          userData={userData}
          setUserData={setUserData}
          setFocused={setFocused}
          insurancesAlreadyCompleted={insurancesAlreadyCompleted}
          setInsurancesAlreadyCompleted={setInsurancesAlreadyCompleted}
        />

        <ButtonDiv>
          <ButtonSubmit onFocus={() => setFocused("")} type="submit">
            <Submit />
            <ButtonSpan>Los gehts!</ButtonSpan>
          </ButtonSubmit>
          <ButtonReset
            onFocus={() => setFocused("")}
            type="reset"
            onClick={resetAllData}
          >
            <Reset />
            <ButtonSpan>Neustarten</ButtonSpan>
          </ButtonReset>
        </ButtonDiv>
      </Form>
    </ContainerBox>
  );
}

UserForm.propTypes = {
  onSubmitForm: PropTypes.func,
  userToCalculate: PropTypes.object,
};

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  padding-bottom: 3.5rem;
  max-width: 1024px;
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

const CheckboxContainer = styled.div`
  width: 100%;
  margin: 0 0.5rem;
`;

const ButtonDiv = styled.div`
  margin: 2.5rem 0;
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
  outline: none;
  cursor: pointer;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

  &:focus {
    border: 3px solid #0989f7;
  }

  svg {
    width: 14.5px;
    height: 14.5px;
  }
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
  outline: none;
  cursor: pointer;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

  &:focus {
    border: 3px solid #0989f7;
  }

  svg {
    width: 17.31px;
    height: 12.59px;
  }
`;

const ButtonSpan = styled.span`
  margin-left: 0.25rem;
`;
