import { useState, useEffect } from "react";
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

  function insurancesToDisplay() {
    const insurancesDisplay = [];
    insuranceProducts.forEach(({ value, name }) => {
      if (userToCalculate.insurancesAlreadyHave.includes(value)) {
        insurancesDisplay.push({ name, value });
      }
    });
    return insurancesDisplay;
  }

  const handleChange = (event) => {
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
  };

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
            onClick={(event) => handleClick(event, "name")}
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
            onClick={(event) => handleClick(event, "lastname")}
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
            onClick={(event) => handleClick(event, "birthday")}
          />
        </HandleLongerDiv>

        <SelectDiv>
          <Clickfield
            tabIndex="0"
            onClick={(event) => handleClick(event, "relationship")}
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
          <MenuDiv className={focused === "relationship" && "active"}>
            <MenuP
              className={userData.relationship === "single" && "active"}
              onClick={() => dropChange("single", "relationship")}
            >
              ledig
            </MenuP>
            <MenuP
              className={userData.relationship === "inRelationship" && "active"}
              onClick={() => dropChange("inRelationship", "relationship")}
            >
              Lebensgemeinschaft
            </MenuP>
            <MenuP
              className={userData.relationship === "married" && "active"}
              onClick={() => dropChange("married", "relationship")}
            >
              verheiratet
            </MenuP>
            <MenuP
              className={userData.relationship === "divorced" && "active"}
              onClick={() => dropChange("divorced", "relationship")}
            >
              geschieden
            </MenuP>
            <MenuP
              className={userData.relationship === "widowed" && "active"}
              onClick={() => dropChange("widowed", "relationship")}
            >
              verwitwet
            </MenuP>
            <MenuP
              className={
                userData.relationship === "" ? "red-block" : "red-font"
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
            onClick={(event) => handleClick(event, "children")}
          />
        </HandleLongerDiv>

        <SelectDiv>
          <Clickfield
            tabIndex="0"
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
          <MenuDiv className={focused === "jobStatus" && "active"}>
            <MenuP
              className={userData.jobStatus === "employed" && "active"}
              onClick={() => dropChange("employed", "jobStatus")}
            >
              angestellt
            </MenuP>
            <MenuP
              className={userData.jobStatus === "selfEmployed" && "active"}
              onClick={() => dropChange("selfEmployed", "jobStatus")}
            >
              selbstständig
            </MenuP>
            <MenuP
              className={userData.jobStatus === "civilServants" && "active"}
              onClick={() => dropChange("civilServants", "jobStatus")}
            >
              verbeamtet
            </MenuP>
            <MenuP
              className={userData.jobStatus === "" ? "red-block" : "red-font"}
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
            onClick={(event) => handleClick(event, "income")}
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
              />
              HAUSTIER VORHANDEN?
            </CheckboxLabel>

            {userData.pet && (
              <PetProps
                userData={userData}
                handleChange={handleChange}
                formValidation={formValidation}
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
  padding-bottom: 2rem;
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
  margin-top: 2.5rem;
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
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
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
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
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
