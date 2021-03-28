import styled from "styled-components";
import { useState, useEffect } from "react";

import insuranceProducts from "../lib/insuranceProducts";

export default function UserInsurances({
  userData,
  setUserData,
  insurancesAlreadyCompleted,
  setInsurancesAlreadyCompleted,
  setSelected,
}) {
  const [insuranceValues, setInsuranceValues] = useState([]);

  function onDeleteInsurance(insurancetoDelete) {
    const insurancesToKeep = insurancesAlreadyCompleted.filter(
      (insurance) => insurance.value !== insurancetoDelete
    );
    setInsurancesAlreadyCompleted(insurancesToKeep);
  }

  function handleKeyDown(field, event, value, name) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (field === "insuranceOption") {
        setInsurancesAlreadyCompleted([
          ...insurancesAlreadyCompleted,
          { value, name },
        ]);
      }
      if (field === "insuranceTag") {
        onDeleteInsurance(value);
      }
    }
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
        WELCHE VERSICHERUNGEN HAST DU BEREITS?
      </Label>

      {insurancesAlreadyCompleted.length !== insuranceProducts.length ? (
        <Select tabIndex="-1" name="insurancesAlreadyCompleted">
          {insuranceProducts?.map(({ name, value }) => {
            if (insuranceValues.includes(value)) {
              return "";
            } else {
              return (
                <Option
                  tabIndex="0"
                  key={value}
                  onFocus={() => setSelected("")}
                  onKeyDown={(event) =>
                    handleKeyDown("insuranceOption", event, value, name)
                  }
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

      {insurancesAlreadyCompleted.length > 0 && (
        <TagContainer>
          {insurancesAlreadyCompleted?.map((insurance) => {
            return (
              <Tag
                tabIndex="0"
                onFocus={() => setSelected("")}
                onClick={() => onDeleteInsurance(insurance.value)}
                onKeyDown={(event) =>
                  handleKeyDown("insuranceTag", event, insurance.value)
                }
                key={insurance.value}
              >
                {insurance.name}
                <DeleteSpan>&times;</DeleteSpan>
              </Tag>
            );
          })}
          <StyledLongerDiv />
        </TagContainer>
      )}
    </>
  );
}

const Label = styled.label`
  font-size: 0.8rem;
  width: 100%;
  margin: 2.5rem 0.4rem 1.5rem 0.4rem;
  color: #52514f;
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
  outline: none;

  &:hover {
    background: #0989f7;
    color: white;
  }

  &:focus {
    background: #0989f7;
    color: white;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem 0.4rem 0 0.4rem;
  width: 100%;
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

const Tag = styled.span`
  background: #0989f7;
  color: white;
  font-size: 0.8rem;
  margin: 0.2rem;
  padding: 0.4rem 0.4rem 0.2rem;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

  &:focus {
    background: #ba0d50;
  }
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
  outline: none;
  cursor: pointer;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

  &:focus {
    background: #0989f7;
  }

  &:hover {
    background: #0989f7;
  }
`;
