import PropTypes from "prop-types";
import styled from "styled-components";

export default function Checkbox({
  setFocused,
  value,
  userData,
  focused,
  handleChange,
  checkboxName,
  setUserData,
  field,
}) {
  function handleKeyDown(event, field) {
    if (event.key === "Enter") {
      event.preventDefault();

      if (field === "houseOwner") {
        setUserData({ ...userData, houseOwner: !userData.houseOwner });
      }
      if (field === "valuables") {
        setUserData({ ...userData, valuables: !userData.valuables });
      }
      if (field === "car") {
        setUserData({ ...userData, car: !userData.car });
      }
      if (field === "pet") {
        setUserData({ ...userData, pet: !userData.pet });
      }
      if (field === "motorcycle") {
        setUserData({ ...userData, motorcycle: !userData.motorcycle });
      }
      if (field === "dangerousHobby") {
        setUserData({ ...userData, dangerousHobby: !userData.dangerousHobby });
      }
      if (event.target.name === "petSpecies") {
        setUserData({ ...userData, petSpecies: event.target.value });
      }
    }
  }

  return (
    <div>
      <CheckboxLabel
        tabIndex="0"
        onFocus={() => setFocused(value)}
        selected={focused === value}
        checked={field}
        onKeyDown={(event) => handleKeyDown(event, value)}
      >
        <CheckB
          type="checkbox"
          name={value}
          checked={field}
          onChange={handleChange}
        />
        {checkboxName}
      </CheckboxLabel>
    </div>
  );
}

Checkbox.propTypes = {
  setFocused: PropTypes.func,
  value: PropTypes.string,
  userData: PropTypes.object,
  focused: PropTypes.string,
  handleChange: PropTypes.func,
  setUserData: PropTypes.func,
  field: PropTypes.string,
  checkboxName: PropTypes.string,
};

const CheckboxLabel = styled.label`
  margin: 0.25rem 0 0 0;
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  color: #676767;
  position: relative;
  outline: none;

  ::before {
    content: "";
    display: inline-block;
    margin-right: 0.25rem;

    height: 16px;
    width: 16px;

    border: 1px solid #0989f7;

    ${(prop) => prop.selected && "outline: #0989f7 solid 2px;"}
  }

  ::after {
    content: "" ${(prop) => !prop.checked && "content: none "};
    display: inline-block;
    position: absolute;
    height: 6px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    color: #0989f7;
    left: 4px;
    top: 4px;

    transform: rotate(-45deg);
  }
`;

const CheckB = styled.input`
  display: none;
`;
