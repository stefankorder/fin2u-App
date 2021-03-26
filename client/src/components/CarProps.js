import styled from "styled-components";

export default function CarProps({
  userData,
  handleChange,
  focused,
  handleClick,
  formValidation,
}) {
  return (
    <SubMenu>
      <HandleDiv>
        <StyledDiv>
          <Label
            className={(focused === "carAge" || userData.carAge) && "active"}
            htmlFor="carAge"
          >
            FAHRZEUGALTER
          </Label>
          {formValidation.includes("carAge") && (
            <ErrorText>Bitte gebe das Alter an!</ErrorText>
          )}
        </StyledDiv>
        <TextInput
          className="carAge"
          type="text"
          name="carAge"
          value={userData.carAge}
          onChange={handleChange}
          onClick={(event) => handleClick(event, "carAge")}
        />
      </HandleDiv>

      <HandleDiv>
        <StyledDiv>
          <Label
            className={
              (focused === "carValue" || userData.carValue) && "active"
            }
            htmlFor="carValue"
          >
            FAHRZEUGWERT
          </Label>
          {formValidation.includes("carValue") && (
            <ErrorText>Bitte gültigen Wert eingeben!</ErrorText>
          )}
        </StyledDiv>
        <TextInput
          className="carValue"
          type="text"
          name="carValue"
          value={userData.carValue}
          onChange={handleChange}
          onClick={(event) => handleClick(event, "carValue")}
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

const ErrorText = styled.span`
  position: absolute;
  font-size: 0.6rem;
  color: #ba0d50;
  bottom: -0.9rem;
  left: 0;
`;
