import styled from "styled-components";
import { useState } from "react";

import getDropDownName from "../services/dropDownName";

export default function DropDown({
  setFocused,
  handleClick,
  userData,
  value,
  errorText,
  dropDownName,
  formValidation,
  focused,
  menuPoints,
  setUserData,
  userToCalculate,
  setFormValidation,
  field,
}) {
  const [name, setName] = useState(
    userToCalculate
      ? getDropDownName(
          (value === "relationship" && userToCalculate.relationship) ||
            (value === "jobStatus" && userToCalculate.jobStatus)
        )
      : ""
  );
  const [selectedTagIndex, setSelectedTagIndex] = useState(-1);

  function dropChange(value, field, index) {
    setUserData({ ...userData, [field]: value });
    setSelectedTagIndex(index);
    const remainingValids = formValidation.filter((valid) => valid !== field);
    setFormValidation(remainingValids);
    const dropName = getDropDownName(value);
    setName(dropName);
  }

  function handleKeyDown(event, field) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (field === "relationship" && selectedTagIndex === 0) {
        dropChange("single", field, 0);
      }
      if (field === "relationship" && selectedTagIndex === 1) {
        dropChange("inRelationship", field, 1);
      }
      if (field === "relationship" && selectedTagIndex === 2) {
        dropChange("married", field, 2);
      }
      if (field === "relationship" && selectedTagIndex === 3) {
        dropChange("divorced", field, 3);
      }
      if (field === "relationship" && selectedTagIndex === 4) {
        dropChange("widowed", field, 4);
      }
      if (field === "relationship" && selectedTagIndex === 5) {
        setUserData({ ...userData, relationship: "" });
        setSelectedTagIndex(-1);
      }

      if (field === "jobStatus" && selectedTagIndex === 0) {
        dropChange("employed", field, 0);
      }
      if (field === "jobStatus" && selectedTagIndex === 1) {
        dropChange("selfEmployed", field, 1);
      }
      if (field === "jobStatus" && selectedTagIndex === 2) {
        dropChange("civilServants", field, 2);
      }
      if (field === "jobStatus" && selectedTagIndex === 3) {
        setUserData({ ...userData, jobStatus: "" });
        setSelectedTagIndex(-1);
      }
    }

    if (event.key === "ArrowLeft") {
      selectedTagIndex <= 0
        ? setSelectedTagIndex(menuPoints.length)
        : setSelectedTagIndex(selectedTagIndex - 1);
    }

    if (event.key === "ArrowRight") {
      selectedTagIndex === menuPoints.length
        ? setSelectedTagIndex(0)
        : setSelectedTagIndex(selectedTagIndex + 1);
    }

    if (event.key === "Tab") {
      setFocused("");
    }
  }

  return (
    <Container>
      <Clickfield
        tabIndex="0"
        onFocus={() => setFocused(value)}
        onKeyDown={(event) => handleKeyDown(event, value)}
        onClick={(event) => handleClick(event, value)}
      >
        <StyledSelect>
          <Label className={field && "active"} htmlFor={value}>
            {dropDownName}
          </Label>
          {formValidation.includes(value) && <ErrorText>{errorText}</ErrorText>}
          <P>{field && name}</P>
          <SelectSpan>{focused === value ? "◂" : "▾"}</SelectSpan>
        </StyledSelect>
      </Clickfield>
      <Menu className={focused === value && "active"}>
        {menuPoints.map(({ pointValue, pointName }, index) => {
          return (
            <MenuP
              className={
                (field === pointValue || selectedTagIndex === index) && "active"
              }
              onClick={() => dropChange(pointValue, value, index)}
            >
              {pointName}
            </MenuP>
          );
        })}
        <MenuP
          className={
            field === "" || selectedTagIndex === menuPoints.length
              ? "red-block"
              : "red-font"
          }
          onClick={() => setUserData({ ...userData, [value]: "" })}
        >
          zurücksetzen
        </MenuP>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  max-width: 191px;
  margin: 0.5rem 0 0 0.25rem;
  height: 3rem;
  display: inline-flex;
  justify-content: center;
  position: relative;
`;

const Clickfield = styled.div`
  width: 95%;
  margin-top: 0.25rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  outline: none;
`;

const StyledSelect = styled.div`
  width: 100%;
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
  right: 0.25rem;
  bottom: -0.25rem;
  font-size: 1.5rem;
  color: #676767;
  position: absolute;
`;

const Menu = styled.div`
  font-size: 0.8rem;
  display: none;
  width: 95%;
  z-index: 15;
  position: absolute;
  top: 1.75rem;
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
