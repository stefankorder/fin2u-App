import styled from "styled-components";

export default function MotorcycleProps({
  userData,
  handleChange,
  focused,
  handleClick,
  formValidation,
  setFocused,
}) {
  return (
    <SubMenu>
      <HandleDiv>
        <StyledDiv>
          <Label
            className={
              (focused === "motorcycleAge" || userData.motorcycleAge) &&
              "active"
            }
            htmlFor="motorcycleAge"
          >
            MOTORRADALTER
          </Label>
          {formValidation.includes("motorcycleAge") && (
            <ErrorText>Bitte gebe das Alter an!</ErrorText>
          )}
        </StyledDiv>
        <TextInput
          className="motorcycleAge"
          type="text"
          name="motorcycleAge"
          value={userData.motorcycleAge}
          onFocus={() => setFocused("motorcycleAge")}
          onChange={handleChange}
          onClick={(event) => handleClick(event, "motorcycleAge")}
        />
      </HandleDiv>

      <HandleDiv>
        <StyledDiv>
          <Label
            className={
              (focused === "motorcycleValue" || userData.motorcycleValue) &&
              "active"
            }
            htmlFor="motorcycleValue"
          >
            MOTORRADWERT
          </Label>
          {formValidation.includes("motorcycleValue") && (
            <ErrorText>Bitte gültigen Wert eingeben!</ErrorText>
          )}
        </StyledDiv>
        <TextInput
          className="motorcycleValue"
          type="text"
          name="motorcycleValue"
          value={userData.motorcycleValue}
          onFocus={() => setFocused("motorcycleValue")}
          onChange={handleChange}
          onClick={(event) => handleClick(event, "motorcycleValue")}
        />
      </HandleDiv>
    </SubMenu>
  );
}

const SubMenu = styled.div`
  width: 100%;
  margin-left: 0.9rem;
  margin-bottom: 0.5rem;
`;

const HandleDiv = styled.div`
  width: 47.5%;
  max-width: 181.45px;
  height: 3rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledDiv = styled.div`
  width: 90%;
  height: 0.5rem;
  background: transparent;
  position: relative;
  border: 1px solid #0989f7;
  border-top: none;
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

const TextInput = styled.input`
  position: absolute;
  background: transparent;
  width: 90%;
  border: none;
  z-index: 10;
  font-size: 0.8rem;
  color: #676767;
  bottom: 1.125rem;
  padding: 0.25rem;
  padding-left: 0.4rem;
`;

const ErrorText = styled.span`
  position: absolute;
  font-size: 0.6rem;
  color: #ba0d50;
  bottom: -0.9rem;
  left: 0;
`;
