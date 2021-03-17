import styled from 'styled-components'

export default function MotorcycleProps({userData, handleChange, focused, setFocused}) {
    if (userData.motorcycle) {
        return (
            <SubMenuDiv>

<HandleDiv>
<StyledDiv>
    <Label className={focused === 'motorcycleAge' || userData.motorcycleAge.length ? 'active' : ''} htmlFor="motorcycleAge">MOTORRADALTER</Label>
    </StyledDiv>
          <TextInput
          className='motorcycleAge'
            type="text"
            name="motorcycleAge"
            value={userData.motorcycleAge}
            onChange={handleChange}
            onClick={() => setFocused('motorcycleAge')}
          />
          </HandleDiv>

          <HandleDiv>
          <StyledDiv>
    <Label className={focused === 'motorcycleValue' || userData.motorcycleValue.length ? 'active' : ''} htmlFor="motorcycleValue">MOTORRADWERT</Label>
    </StyledDiv>
          <TextInput
          className='motorcycleValue'
            type="text"
            name="motorcycleValue"
            value={userData.motorcycleValue}
            onChange={handleChange}
            onClick={() => setFocused('motorcycleValue')}
          />
          </HandleDiv>
            </SubMenuDiv>
        )
    } else {
        return ''
    }
}

const SubMenuDiv = styled.div`
width: 100%
`

const HandleDiv = styled.div`
width: 50%;
max-width: 191px;
      margin-top: .5rem;
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
      font-size: .6rem;
      z-index: 10;
      position: absolute;
      transition: all .25s;
      left: .25rem;
      bottom: .1rem;
      

&.active {
  left: 0;
  bottom: 0;
  transform: translateY(-1.3rem);
  scale: 0.8;
}
      `

const TextInput = styled.input`
position: absolute;
background: transparent;
padding: .25rem;
width: 90%;
border: none;
z-index: 10;
`