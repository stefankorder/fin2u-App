import styled from 'styled-components'

export default function MotorcycleProps({userData, handleChange, focused, handleClick}) {
    if (userData.motorcycle) {
        return (
            <SubMenuDiv>

<HandleDiv>
<StyledDiv>
    <Label className={focused === 'motorcycleAge' || userData.motorcycleAge ? 'active' : ''} htmlFor="motorcycleAge">MOTORRADALTER</Label>
    </StyledDiv>
          <TextInput
          className='motorcycleAge'
            type="text"
            name="motorcycleAge"
            value={userData.motorcycleAge}
            onChange={handleChange}
            onClick={(event) => handleClick(event, 'motorcycleAge')}
          />
          </HandleDiv>

          <HandleDiv>
          <StyledDiv>
    <Label className={focused === 'motorcycleValue' || userData.motorcycleValue ? 'active' : ''} htmlFor="motorcycleValue">MOTORRADWERT</Label>
    </StyledDiv>
          <TextInput
          className='motorcycleValue'
            type="text"
            name="motorcycleValue"
            value={userData.motorcycleValue}
            onChange={handleChange}
            onClick={(event) => handleClick(event, 'motorcycleValue')}
          />
          </HandleDiv>
            </SubMenuDiv>
        )
    } else {
        return ''
    }
}

const SubMenuDiv = styled.div`
width: 100%;
margin-left: .9rem;
margin-bottom: .5rem;
`

const HandleDiv = styled.div`
width: 47.5%;
max-width: 181.45px;
      height: 3rem;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      `

      const StyledDiv = styled.div`
      width: 90%;
      height: .5rem;
      background: transparent;
      position: relative;
      border: 1px solid #0989F7;
      border-top: none;
      margin-top: .5rem;
      z-index: 1;
      `

      const Label = styled.label`
      font-size: .8rem;
      color: #676767;
      z-index: 10;
      position: absolute;
      transition: all .25s;
      left: .25rem;
      bottom: .1rem;
      

&.active {
  left: 0;
  bottom: 0;
  transform: translateY(-1.3rem);
  font-size: .5rem;
  color: #0989F7;
}
      `

      const TextInput = styled.input`
position: absolute;
background: transparent;
width: 90%;
border: none;
z-index: 10;
font-size: .8rem;
color: #676767;
margin-left: .5rem;
bottom: 1.125rem;
`