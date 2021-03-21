import styled from "styled-components";
import { useState, useEffect } from "react";
import insuranceProducts from "../lib/insuranceProducts";

export default function UserInsurances({
  userData,
  setUserData,
  insurancesAlreadyCompleted,
  setInsurancesAlreadyCompleted,
}) {
  const [insuranceValues, setInsuranceValues] = useState([]);

  function onDeleteInsurance(insurancetoDelete) {
    const insurancesToKeep = insurancesAlreadyCompleted.filter(
      (insurance) => insurance.value !== insurancetoDelete
    );
    setInsurancesAlreadyCompleted(insurancesToKeep);
  }

  useEffect(() => {
    setInsuranceValues(
      insurancesAlreadyCompleted.map((insurance) => insurance.value)
    );
    setUserData({
      ...userData,
      insurancesAlreadyHave: insurancesAlreadyCompleted.map(
        (insurance) => insurance.value
      ),
    });
  }, [insurancesAlreadyCompleted]);

  return (
    <>
      <Label htmlFor="insurancesAlreadyCompleted">
        WELCHE VERSICHERUNGEN HABEN SIE BEREITS?
      </Label>

      {insurancesAlreadyCompleted.length ? (
        <TagContainer>
          {insurancesAlreadyCompleted?.map((insurance) => {
            return (
              <Tag key={insurance.value}>
                {insurance.name}
                <DeleteSpan onClick={() => onDeleteInsurance(insurance.value)}>
                  &times;
                </DeleteSpan>
              </Tag>
            );
          })}
        </TagContainer>
      ) : (
        ""
      )}

      {insurancesAlreadyCompleted.length !== 10 ? (
        <Select name="insurancesAlreadyCompleted">
          {insuranceProducts?.map(({ name, value }) => {
            if (insuranceValues.includes(value)) {
              return "";
            } else {
              return (
                <Option
                  key={value}
                  onClick={() =>
                    setInsurancesAlreadyCompleted([
                      ...insurancesAlreadyCompleted,
                      { value, name },
                    ])
                  }
                >
                  {name}
                </Option>
              );
            }
          })}
        </Select>
      ) : (
        <Button onClick={() => setInsurancesAlreadyCompleted([])}>
          Zurücksetzen
        </Button>
      )}
    </>
  );
}

const Label = styled.label`
  font-size: 0.8rem;
  width: 100%;
  margin: 2.5rem 0.4rem 0.5rem 0.4rem;
`;

const Select = styled.div`
  border: 1px solid #0989f7;
  width: 100%;
  max-width: 382px;
  font-size: 0.8rem;
  line-height: 1.1;
  height: auto;
  max-height: 6rem;
  overflow: auto;
`;

const Option = styled.p`
  border-bottom: 1px solid #0989f7;
  color: #0989f7;
  padding: 0.2rem 0.4rem 0.2rem;
  margin: 0;
  cursor: pointer;

  &:hover {
    background: #0989f7;
    color: white;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0.4rem 1rem 0.4rem;
  width: 100%;
`;

const Tag = styled.span`
  background: #0989f7;
  color: white;
  font-size: 0.8rem;
  margin: 0.2rem;
  padding: 0.4rem 0.4rem 0.2rem;
  border-radius: 5px;
`;

const DeleteSpan = styled.span`
  margin-left: 0.25rem;
  cursor: pointer;
`;

const Button = styled.button`
  background: #ba0d50;
  color: white;
  border: none;
  font-size: 0.8rem;
  margin: 0 auto;
  padding: 0.2rem 0.4rem 0.2rem;
  border-radius: 5px;
  cursor: pointer;
`;
