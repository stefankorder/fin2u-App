import styled from 'styled-components'

export default function CarProps({userData, handleChange, focused, setFocused}) {
    if (userData.car) {
        return (
            <SubMenuDiv>
<HandleDiv>
<StyledDiv>
          <Label className={focused === 'carAge' || userData.carAge.length ? 'active' : ''} htmlFor="carAge">FAHRZEUGALTER</Label>
          </StyledDiv>
          <TextInput
            className='carAge'
            type="text"
            name="carAge"
            value={userData.carAge}
            onChange={handleChange}
            onClick={() => setFocused('carAge')}
          />
          </HandleDiv>

          <HandleDiv>
          <StyledDiv>
          <Label className={focused === 'carValue' || userData.carValue.length ? 'active' : ''} htmlFor="carValue">FAHRZEUGWERT</Label>
          </StyledDiv>
          <TextInput
            className='carValue'
            type="text"
            name="carValue"
            value={userData.carValue}
            onChange={handleChange}
            onClick={() => setFocused('carValue')}
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