import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Back } from "../images/reset.svg";

export default function DisplayInsurances({
  insurances,
  setComponentToDisplay,
  userToCalculate,
}) {
  const [insurancesStatus0, setInsurancesStatus0] = useState(
    insurances.filter((insurance) => insurance.status === 0)
  );
  const [insurancesStatus1, setInsurancesStatus1] = useState(
    insurances.filter((insurance) => insurance.status === 1)
  );
  const [insurancesStatus2, setInsurancesStatus2] = useState(
    insurances.filter((insurance) => insurance.status === 2)
  );
  const [insurancesStatus3, setInsurancesStatus3] = useState(
    insurances.filter((insurance) => insurance.status === 3)
  );

  return (
    <ContainerBox>
      <H2>{userToCalculate.name}, hier ist dein Ergebnis:</H2>
      {insurancesStatus3.length > 0 && (
        <InsuranceContainer>
          <Label>BRAUCHST DU AUF JEDEN FALL!</Label>
          {insurancesStatus3.map(({ name, _id }) => {
            return <Tag to={"/start/" + _id}>{name}</Tag>;
          })}
          <StyledLongerDiv />
        </InsuranceContainer>
      )}
      {insurancesStatus2.length > 0 && (
        <InsuranceContainer>
          <Label>MIT SICHERHEIT SINNVOLL!</Label>
          {insurancesStatus2.map(({ name, _id }) => {
            return <Tag to={"/start/" + _id}>{name}</Tag>;
          })}
          <StyledLongerDiv />
        </InsuranceContainer>
      )}
      {insurancesStatus1.length > 0 && (
        <InsuranceContainer>
          <Label>KÖNNTE SINNVOLL SEIN!</Label>
          {insurancesStatus1.map(({ name, _id }) => {
            return <Tag to={"/start/" + _id}>{name}</Tag>;
          })}
          <StyledLongerDiv />
        </InsuranceContainer>
      )}
      {insurancesStatus0.length > 0 && (
        <InsuranceContainer>
          <Label>HAST DU BEREITS ODER BENÖTIGST DU NICHT!</Label>
          {insurancesStatus0.map(({ name, _id }) => {
            return <Tag to={"/start/" + _id}>{name}</Tag>;
          })}
          <StyledLongerDiv />
        </InsuranceContainer>
      )}

      <ButtonBack onClick={() => setComponentToDisplay("form")}>
        <Back />
        <ButtonSpan>Zurück</ButtonSpan>
      </ButtonBack>
    </ContainerBox>
  );
}

DisplayInsurances.propTypes = {
  insurances: PropTypes.array,
  setComponentToDisplay: PropTypes.func,
  userToCalculate: PropTypes.object,
};

const ContainerBox = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  padding-bottom: 3.5rem;
  max-width: 1024px;
`;

const InsuranceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 0.25rem;
`;

const StyledLongerDiv = styled.div`
  width: 100%;
  height: 0.5rem;
  background: transparent;
  position: absolute;
  border: 1px solid #0989f7;
  border-top: none;
  z-index: 1;
  bottom: 0;
`;

const H2 = styled.h2`
  font-size: 0.9rem;
  margin: 1rem 0.4rem 0 0.4rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  width: 100%;
  margin: 1.5rem 0.4rem 1rem 0.4rem;
  color: #52514f;
`;

const Tag = styled(Link)`
  display: inline-block;
  text-decoration: none;
  background: #0989f7;
  color: white;
  font-size: 0.8rem;
  margin: 0.2rem;
  padding: 0.4rem 0.4rem 0.2rem;
  border-radius: 5px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;

const ButtonBack = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  margin: 0.25rem;
  margin-top: 2rem;
  padding: 0.25rem 0.45rem;
  color: white;
  border: none;
  background: #ba0d50;
  border-radius: 10px;
  height: 1.25rem;
  font-size: 0.6rem;
  outline: none;
  cursor: pointer;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

  svg {
    width: 17.31px;
    height: 12.59px;
  }

  &:focus {
    border: 3px solid #0989f7;
  }
`;

const ButtonSpan = styled.span`
  margin-left: 0.25rem;
`;
