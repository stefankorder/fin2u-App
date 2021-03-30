import styled from "styled-components";

export default function InputField({
  focused,
  userData,
  value,
  formValidation,
  handleChange,
  setFocused,
  errorText,
  inputName,
}) {
  return (
    <Container>
      <Styled>
        <Label
          className={(focused === value || userData) && "active"}
          htmlFor={value}
        >
          {inputName}
        </Label>
        {formValidation.includes(value) && <ErrorText>{errorText}</ErrorText>}
      </Styled>
      <TextInput
        className={value}
        type="text"
        name={value}
        value={userData}
        onFocus={() => setFocused(value)}
        onChange={handleChange}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  max-width: 191px;
  margin-top: 0.5rem;
  height: 3rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Styled = styled.div`
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

const ErrorText = styled.span`
  position: absolute;
  font-size: 0.6rem;
  color: #ba0d50;
  bottom: -0.9rem;
  left: 0;
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
