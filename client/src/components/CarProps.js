import styled from "styled-components";

export default function CarProps({
  userData,
  handleChange,
  focused,
  handleClick,
}) {
  if (userData.car) {
    return (
      <SubMenuDiv>
        <HandleDiv>
          <StyledDiv>
            <Label
              className={
                focused === "carAge" || userData.carAge ? "active" : ""
              }
              htmlFor="carAge"
            >
              FAHRZEUGALTER
            </Label>
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
                focused === "carValue" || userData.carValue ? "active" : ""
              }
              htmlFor="carValue"
            >
              FAHRZEUGWERT
            </Label>
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
      </SubMenuDiv>
    );
  } else {
    return "";
  }
}

const SubMenuDiv = styled.div`
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
