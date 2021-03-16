import styled from 'styled-components'

export default function MotorcycleProps({userData, handleChange}) {
    if (userData.motorcycle) {
        return (
            <div>
<HandleDiv>
    <StyledDiv></StyledDiv>
          <Label htmlFor="motorcycleAge">Alter des Motorrads:</Label>
          <TextInput
            placeholder="ALTER:"
            type="text"
            name="motorcycleAge"
            value={userData.motorcycleAge}
            onChange={handleChange}
          />
          </HandleDiv>
          <HandleDiv>
    <StyledDiv></StyledDiv>
          <Label htmlFor="motorcycleValue">Wert des Motorrads:</Label>
          <TextInput
            placeholder="WERT:"
            type="text"
            name="motorcycleValue"
            value={userData.motorcycleValue}
            onChange={handleChange}
          />
          </HandleDiv>
            </div>
        )
    } else {
        return ''
    }
}

const HandleDiv = styled.div`
margin: 0 0 1rem 0;
      height: 2rem;
      display: inline-flex;
      align-items: center;
      `

const StyledDiv = styled.div`
width: 7.125rem;
height: .5rem;
position: absolute;
border: 1px solid #0989F7;
border-top: none;
margin-left: .45rem;
margin-top: 1.1rem;
z-index: 1;
`

const Label = styled.label`
      margin-left: .25rem;
      font-size: .6rem;
      z-index: 10;
      display: none;
      `

      const TextInput = styled.input`
      width: 7rem;
      border: none;
      z-index: 10;
      `