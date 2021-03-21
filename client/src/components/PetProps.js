import styled from "styled-components";

export default function PetProps({ userData, handleChange, formValidation }) {
  if (userData.pet) {
    return (
      <RadioDiv>
        <StyledLongerDiv>
          <Label>
            TIERART:
            <RadioLabel>
              <Radio
                type="radio"
                name="petSpecies"
                value="dog"
                checked={userData.petSpecies === "dog"}
                onChange={handleChange}
              />
              HUND
            </RadioLabel>
            <RadioLabel>
              <Radio
                type="radio"
                name="petSpecies"
                value="horse"
                checked={userData.petSpecies === "horse"}
                onChange={handleChange}
              />
              PFERD
            </RadioLabel>
          </Label>
          {formValidation.includes("petSpecies") ? (
            <ErrorText>Bitte eine Tierart wählen!</ErrorText>
          ) : (
            ""
          )}
        </StyledLongerDiv>
      </RadioDiv>
    );
  } else {
    return "";
  }
}

const RadioDiv = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 3rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const StyledLongerDiv = styled.div`
  width: 13rem;
  height: 0.5rem;
  background: transparent;
  position: relative;
  border: 1px solid #0989f7;
  border-top: none;
  margin-left: 1.5rem;
  z-index: 1;
`;

const Label = styled.label`
  position: absolute;
  left: 0.35rem;
  bottom: 0;
  display: inline-block;
  font-size: 0.8rem;
  color: #676767;
`;

const RadioLabel = styled.label`
  margin-left: 0.25rem;
  display: inline-block;
  font-size: 0.8rem;
  color: #676767;
`;

const Radio = styled.input`
  margin: 0.25rem;
  width: 1rem;
`;

const ErrorText = styled.span`
  position: absolute;
  font-size: 0.6rem;
  color: #ba0d50;
  bottom: -0.9rem;
  left: 0;
`;
