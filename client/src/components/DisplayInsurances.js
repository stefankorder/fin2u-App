import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as reset } from "../images/reset.svg";

export default function DisplayInsurances({
  insurances,
  setComponentToDisplay,
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
      {insurancesStatus0.length > 0 && (
        <InsuranceContainer>
          <H2>
            Diese Versicherungen haben Sie schon oder benötigen Sie nicht!
          </H2>
          {insurancesStatus0.map(({ name }) => {
            return <Tag>{name}</Tag>;
          })}
        </InsuranceContainer>
      )}
      {insurancesStatus1.length > 0 && (
        <InsuranceContainer>
          <H2>Diese Versicherungen könnten sinnvoll sein!</H2>
          {insurancesStatus1.map(({ name }) => {
            return <Tag>{name}</Tag>;
          })}
        </InsuranceContainer>
      )}
      {insurancesStatus2.length > 0 && (
        <InsuranceContainer>
          <H2>Diese Versicherungen sind mit sicherheit sinnvoll!</H2>
          {insurancesStatus2.map(({ name }) => {
            return <Tag>{name}</Tag>;
          })}
        </InsuranceContainer>
      )}
      {insurancesStatus3.length > 0 && (
        <InsuranceContainer>
          <H2>Diese Versicherungen sollten Sie dringend abschließen!</H2>
          {insurancesStatus3.map(({ name }) => {
            return <Tag>{name}</Tag>;
          })}
        </InsuranceContainer>
      )}
      <ButtonReset
        type="reset"
        text="Reset"
        onClick={() => setComponentToDisplay("form")}
      >
        <Reset />
        <ButtonSpan>Zurück</ButtonSpan>
      </ButtonReset>
    </ContainerBox>
  );
}

const ContainerBox = styled.div`
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const InsuranceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const H2 = styled.h2`
  width: 100%;
  font-size: 0.9rem;
  margin: 1rem 0.4rem 1rem 0.4rem;
`;

const Tag = styled.span`
  display: inline-block;
  background: #0989f7;
  color: white;
  font-size: 0.8rem;
  margin: 0.2rem;
  padding: 0.4rem 0.4rem 0.2rem;
  border-radius: 5px;
`;

const ButtonReset = styled.button`
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
`;

const ButtonSpan = styled.span`
  margin-left: 0.25rem;
`;

const Reset = styled(reset)`
  width: 17.31px;
  height: 12.59px;
`;
