import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CarProps from "./CarProps";
import PetProps from "./PetProps";
import MotorcycleProps from "./MotorcycleProps";

import initialUserData from "../lib/userData";
import insuranceProducts from "../lib/insuranceProducts";

import { ReactComponent as submit } from "../images/submit.svg";
import { ReactComponent as reset } from "../images/reset.svg";

import setAge from "../services/setAge";
import setUserNetIncome from "../services/setNetIncome";
import getDropDownName from "../services/dropDownName";
import UserInsurances from "./UserInsurances";

export default function UserForm({ onSubmitForm, userToCalculate }) {
  const [userData, setUserData] = useState(
    userToCalculate ? userToCalculate : initialUserData
  );
  const [focused, setFocused] = useState("");
  const [dropDownNameRelationship, setDropDownNameRelationship] = useState(
    userToCalculate ? getDropDownName(userToCalculate.relationship) : ""
  );
  const [dropDownNameWork, setDropDownNameWork] = useState(
    userToCalculate ? getDropDownName(userToCalculate.jobStatus) : ""
  );
  const [formValidation, setFormValidation] = useState([]);
  const [insurancesAlreadyCompleted, setInsurancesAlreadyCompleted] = useState(
    userToCalculate ? insurancesToDisplay() : []
  );

  const [selectedTagIndex, setSelectedTagIndex] = useState({
    relationship: -1,
    jobStatus: -1,
  });

  function insurancesToDisplay() {
    const insurancesDisplay = [];
    insuranceProducts.forEach(({ value, name }) => {
      if (userToCalculate.insurancesAlreadyHave.includes(value)) {
        insurancesDisplay.push({ name, value });
      }
    });
    return insurancesDisplay;
  }

  const handleKeyDown = (event, field) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (field === "relationship" && selectedTagIndex.relationship === 0) {
        dropChange("single", field);
      }
      if (field === "relationship" && selectedTagIndex.relationship === 1) {
        dropChange("inRelationship", field);
      }
      if (field === "relationship" && selectedTagIndex.relationship === 2) {
        dropChange("married", field);
      }
      if (field === "relationship" && selectedTagIndex.relationship === 3) {
        dropChange("divorced", field);
      }
      if (field === "relationship" && selectedTagIndex.relationship === 4) {
        dropChange("widowed", field);
      }
      if (field === "relationship" && selectedTagIndex.relationship === 5) {
        setUserData({ ...userData, relationship: "" });
      }

      if (field === "jobStatus" && selectedTagIndex.jobStatus === 0) {
        dropChange("employed", field);
      }
      if (field === "jobStatus" && selectedTagIndex.jobStatus === 1) {
        dropChange("selfEmployed", field);
      }
      if (field === "jobStatus" && selectedTagIndex.jobStatus === 2) {
        dropChange("civilServants", field);
      }
      if (field === "jobStatus" && selectedTagIndex.jobStatus === 3) {
        setUserData({ ...userData, jobStatus: "" });
      }

      setSelectedTagIndex({
        relationship: -1,
        jobStatus: -1,
      });

      if (event.target.name === "houseOwner") {
        setUserData({ ...userData, houseOwner: !userData.houseOwner });
      }
      if (event.target.name === "valuables") {
        setUserData({ ...userData, valuables: !userData.valuables });
      }
      if (event.target.name === "car") {
        setUserData({ ...userData, car: !userData.car });
      }
      if (event.target.name === "pet") {
        setUserData({ ...userData, pet: !userData.pet });
      }
      if (event.target.name === "motorcycle") {
        setUserData({ ...userData, motorcycle: !userData.motorcycle });
      }
      if (event.target.name === "dangerousHobby") {
        setUserData({ ...userData, dangerousHobby: !userData.dangerousHobby });
      }
      if (event.target.name === "petSpecies") {
        setUserData({ ...userData, petSpecies: event.target.value });
      }
    }

    if (event.key === "ArrowLeft") {
      if (field === "relationship") {
        selectedTagIndex.relationship <= 0
          ? setSelectedTagIndex({ ...selectedTagIndex, relationship: 5 })
          : setSelectedTagIndex({
              ...selectedTagIndex,
              relationship: selectedTagIndex.relationship - 1,
            });
      }
      if (field === "jobStatus") {
        selectedTagIndex.jobStatus <= 0
          ? setSelectedTagIndex({ ...selectedTagIndex, jobStatus: 3 })
          : setSelectedTagIndex({
              ...selectedTagIndex,
              jobStatus: selectedTagIndex.jobStatus - 1,
            });
      }
    }
    if (event.key === "ArrowRight") {
      if (field === "relationship") {
        selectedTagIndex.relationship === 5
          ? setSelectedTagIndex({ ...selectedTagIndex, relationship: 0 })
          : setSelectedTagIndex({
              ...selectedTagIndex,
              relationship: selectedTagIndex.relationship + 1,
            });
      }
      if (field === "jobStatus") {
        selectedTagIndex.jobStatus === 3
          ? setSelectedTagIndex({ ...selectedTagIndex, jobStatus: 0 })
          : setSelectedTagIndex({
              ...selectedTagIndex,
              jobStatus: selectedTagIndex.jobStatus + 1,
            });
      }
    }

    if (event.key === "Tab") {
      setSelectedTagIndex({
        relationship: -1,
        jobStatus: -1,
      });
      setFocused("");
    }
  };

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

  const dropChange = (value, field) => {
    setUserData({ ...userData, [field]: value });
    if (field === "relationship" && value) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "relationship"
      );
      setFormValidation(remainingValids);
      const dropName = getDropDownName(value);
      setDropDownNameRelationship(dropName);
    }

    if (field === "jobStatus" && value) {
      const remainingValids = formValidation.filter(
        (valid) => valid !== "jobStatus"
      );
      setFormValidation(remainingValids);
      const dropName = getDropDownName(value);
      setDropDownNameWork(dropName);
    }
  };

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

  useEffect(() => {
    if (formValidation.includes("go")) {
      onSubmitForm(userData);
      setFormValidation([]);
    }
  }, [formValidation]);

  useEffect(() => {
    if (
      focused ||
      selectedTagIndex.relationship > -1 ||
      selectedTagIndex.jobStatus > -1
    ) {
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("click", handleClick);
      };
    }
  }, [focused, selectedTagIndex]);

  function handleClick(event, value) {
    event.stopPropagation();

    setSelectedTagIndex({
      relationship: -1,
      jobStatus: -1,
    });

    if (value) {
      setFocused(value);
      return;
    } else {
      setFocused("");
      return;
    }
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

        <HandleDiv>
          <StyledDiv>
            <Label
              className={(focused === "name" || userData.name) && "active"}
              htmlFor="name"
            >
              VORNAME
            </Label>
            {formValidation.includes("name") && (
              <ErrorText>Bitte mind. 3 Buchstaben eingeben!</ErrorText>
            )}
          </StyledDiv>
          <TextInput
            className="name"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={(event) => handleClick(event, "name")}
            selected={focused === "name"}
          />
        </HandleDiv>
        <HandleDiv>
          <StyledDiv>
            <Label
              className={
                (focused === "lastname" || userData.lastname) && "active"
              }
              htmlFor="lastname"
            >
              NACHNAME
            </Label>
            {formValidation.includes("lastname") && (
              <ErrorText>Bitte mind. 3 Buchstaben eingeben!</ErrorText>
            )}
          </StyledDiv>
          <TextInput
            className="lastname"
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={(event) => handleClick(event, "lastname")}
            selected={focused === "lastname"}
          />
        </HandleDiv>

        <HandleLongerDiv>
          <StyledLongerDiv>
            <Label
              className={
                (focused === "birthday" || userData.birthday) && "active"
              }
              htmlFor="birthday"
            >
              GEBURTSDATUM
            </Label>
            {formValidation.includes("birthday") && (
              <ErrorText>
                Kein gültiges Geburtsdatum! (Du musst mind. 18 sein)
              </ErrorText>
            )}
          </StyledLongerDiv>
          <TextLongerInput
            placeholder={
              focused === "birthday" && !userData.birthday && "TT.MM.JJJJ"
            }
            className="birthday"
            type="text"
            name="birthday"
            value={userData.birthday}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={(event) => handleClick(event, "birthday")}
            selected={focused === "birthday"}
          />
        </HandleLongerDiv>

        <SelectDiv>
          <Clickfield
            tabIndex="0"
            onKeyDown={(event) => handleKeyDown(event, "relationship")}
            onClick={(event) => handleClick(event, "relationship")}
            selected={focused === "relationship"}
          >
            <StyledLongerDiv>
              <Label
                className={userData.relationship && "active"}
                htmlFor="relationship"
              >
                BEZIEHUNGSSTATUS
              </Label>
              {formValidation.includes("relationship") && (
                <ErrorText>Bitte wähle deinen Beziehungsstatus!</ErrorText>
              )}
              <P>{userData.relationship && dropDownNameRelationship}</P>
            </StyledLongerDiv>
          </Clickfield>
          <MenuDiv
            className={
              (focused === "relationship" ||
                selectedTagIndex.relationship > -1) &&
              "active"
            }
          >
            <MenuP
              className={
                (userData.relationship === "single" ||
                  selectedTagIndex.relationship === 0) &&
                "active"
              }
              onClick={() => dropChange("single", "relationship")}
            >
              ledig
            </MenuP>
            <MenuP
              className={
                (userData.relationship === "inRelationship" ||
                  selectedTagIndex.relationship === 1) &&
                "active"
              }
              onClick={() => dropChange("inRelationship", "relationship")}
            >
              Lebensgemeinschaft
            </MenuP>
            <MenuP
              className={
                (userData.relationship === "married" ||
                  selectedTagIndex.relationship === 2) &&
                "active"
              }
              onClick={() => dropChange("married", "relationship")}
            >
              verheiratet
            </MenuP>
            <MenuP
              className={
                (userData.relationship === "divorced" ||
                  selectedTagIndex.relationship === 3) &&
                "active"
              }
              onClick={() => dropChange("divorced", "relationship")}
            >
              geschieden
            </MenuP>
            <MenuP
              className={
                (userData.relationship === "widowed" ||
                  selectedTagIndex.relationship === 4) &&
                "active"
              }
              onClick={() => dropChange("widowed", "relationship")}
            >
              verwitwet
            </MenuP>
            <MenuP
              className={
                userData.relationship === "" ||
                selectedTagIndex.relationship === 5
                  ? "red-block"
                  : "red-font"
              }
              onClick={() => setUserData({ ...userData, relationship: "" })}
            >
              zurücksetzen
            </MenuP>
          </MenuDiv>
          <SelectSpan>{focused === "relationship" ? "◂" : "▾"}</SelectSpan>
        </SelectDiv>
        <HandleLongerDiv>
          <StyledLongerDiv>
            <Label
              className={
                (focused === "children" ||
                  userData.children ||
                  userData.children === 0) &&
                "active"
              }
              htmlFor="children"
            >
              ANZAHL DER KINDER
            </Label>
            {formValidation.includes("children") && (
              <ErrorText>Bitte gebe eine Zahl ein!</ErrorText>
            )}
          </StyledLongerDiv>
          <TextLongerInput
            className="children"
            type="text"
            name="children"
            value={userData.children}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={(event) => handleClick(event, "children")}
            selected={focused === "children"}
          />
        </HandleLongerDiv>

        <SelectDiv>
          <Clickfield
            selected={focused === "jobStatus"}
            tabIndex="0"
            onKeyDown={(event) => handleKeyDown(event, "jobStatus")}
            onClick={(event) => handleClick(event, "jobStatus")}
          >
            <StyledLongerDiv>
              <Label
                className={userData.jobStatus && "active"}
                htmlFor="jobStatus"
              >
                BERUFSSTATUS
              </Label>
              {formValidation.includes("jobStatus") && (
                <ErrorText>Bitte wähle deinen Berufsstatus!</ErrorText>
              )}
              <P>{userData.jobStatus && dropDownNameWork}</P>
            </StyledLongerDiv>
          </Clickfield>
          <MenuDiv
            className={
              (focused === "jobStatus" || selectedTagIndex.jobStatus > -1) &&
              "active"
            }
          >
            <MenuP
              className={
                (userData.jobStatus === "employed" ||
                  selectedTagIndex.jobStatus === 0) &&
                "active"
              }
              onClick={() => dropChange("employed", "jobStatus")}
            >
              angestellt
            </MenuP>
            <MenuP
              className={
                (userData.jobStatus === "selfEmployed" ||
                  selectedTagIndex.jobStatus === 1) &&
                "active"
              }
              onClick={() => dropChange("selfEmployed", "jobStatus")}
            >
              selbstständig
            </MenuP>
            <MenuP
              className={
                (userData.jobStatus === "civilServants" ||
                  selectedTagIndex.jobStatus === 2) &&
                "active"
              }
              onClick={() => dropChange("civilServants", "jobStatus")}
            >
              verbeamtet
            </MenuP>
            <MenuP
              className={
                userData.jobStatus === "" || selectedTagIndex.jobStatus === 3
                  ? "red-block"
                  : "red-font"
              }
              onClick={() => setUserData({ ...userData, jobStatus: "" })}
            >
              zurücksetzen
            </MenuP>
          </MenuDiv>

          <SelectSpan>{focused === "jobStatus" ? "◂" : "▾"}</SelectSpan>
        </SelectDiv>

        <HandleLongerDiv>
          <StyledLongerDiv>
            <Label
              className={(focused === "income" || userData.income) && "active"}
              htmlFor="income"
            >
              BRUTTOEINKOMMEN
            </Label>
            {formValidation.includes("income") && (
              <ErrorText>Bitte gebe dein Bruttoeinkommen an!</ErrorText>
            )}
          </StyledLongerDiv>
          <TextLongerInput
            className="income"
            type="text"
            name="income"
            value={userData.income}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={(event) => handleClick(event, "income")}
            selected={focused === "income"}
          />
        </HandleLongerDiv>

        <HandleLongerDiv>
          <StyledLongerDiv>
            <Label
              className={
                (focused === "netIncome" || userData.netIncome) && "active"
              }
              htmlFor="netIncome"
            >
              NETTOEINKOMMEN
            </Label>
            {formValidation.includes("netIncome") && (
              <ErrorText>Bitte gebe dein Nettoeinkommen an!</ErrorText>
            )}
          </StyledLongerDiv>
          <TextLongerInput
            className="netIncome"
            type="text"
            name="netIncome"
            value={userData.netIncome}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={(event) => handleClick(event, "netIncome")}
            selected={focused === "netIncome"}
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
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
              />
              AUTO VORHANDEN?
            </CheckboxLabel>

            {userData.car && (
              <CarProps
                userData={userData}
                handleChange={handleChange}
                handleClick={handleClick}
                focused={focused}
                formValidation={formValidation}
              />
            )}
          </div>
          <div>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="pet"
                checked={userData.pet}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              HAUSTIER VORHANDEN?
            </CheckboxLabel>

            {userData.pet && (
              <PetProps
                userData={userData}
                handleChange={handleChange}
                formValidation={formValidation}
                handleKeyDown={handleKeyDown}
              />
            )}
          </div>
          <div>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="motorcycle"
                checked={userData.motorcycle}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              MOTORRAD VORHANDEN?
            </CheckboxLabel>

            {userData.motorcycle && (
              <MotorcycleProps
                userData={userData}
                handleChange={handleChange}
                handleClick={handleClick}
                focused={focused}
                formValidation={formValidation}
              />
            )}
          </div>
          <div>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="dangerousHobby"
                checked={userData.dangerousHobby}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              GEFÄHRLICHES HOBBY? (Z.B. TAUCHEN)
            </CheckboxLabel>
          </div>
        </CheckboxContainer>

        <UserInsurances
          userData={userData}
          setUserData={setUserData}
          insurancesAlreadyCompleted={insurancesAlreadyCompleted}
          setInsurancesAlreadyCompleted={setInsurancesAlreadyCompleted}
        />

        <ButtonDiv>
          <ButtonSubmit type="submit" text="Add">
            <Submit />
            <ButtonSpan>Los gehts!</ButtonSpan>
          </ButtonSubmit>
          <ButtonReset type="reset" text="Reset" onClick={resetAllData}>
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
  padding-bottom: 3.5rem;
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

const Clickfield = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  outline: none;

  &:focus {
    border-left: 2px solid #0989f7
      ${(prop) => prop.selected && "border-left: 0"};
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
  bottom: 1.125rem;

  &:focus {
    border-bottom: 2px solid #0989f7
      ${(prop) => prop.selected && "border-bottom: 0"};
  }
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

const ErrorText = styled.span`
  position: absolute;
  font-size: 0.6rem;
  color: #ba0d50;
  bottom: -0.9rem;
  left: 0;
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
  color: #676767;
  position: absolute;
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
  width: 95%;
  border: none;
  z-index: 10;
  font-size: 0.8rem;
  color: #676767;
  bottom: 1.125rem;

  &:focus {
    border-bottom: 2px solid #0989f7
      ${(prop) => prop.selected && "border-bottom: 0"};
  }
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

  &:focus {
    outline: 1px solid #0989f7;
  }
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
    background: #0989f7;
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
    background: #0989f7;
  }
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
