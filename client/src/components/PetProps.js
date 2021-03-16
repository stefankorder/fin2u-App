import styled from 'styled-components'

export default function PetProps({userData, handleChange}) {
    if (userData.pet) {
        return (
<DropdownDiv>
<StyledLongerDiv />
<DropdownLabel>
              TIERART:
              <DropdownLabel>
                <Checkbox
                  type="radio"
                  name="petSpecies"
                  value="dog"
                  checked={userData.petSpecies === 'dog'}
                  onChange={handleChange}
                />
                HUND
              </DropdownLabel>
              <DropdownLabel>
              <Checkbox
                  type="radio"
                  name="petSpecies"
                  value="horse"
                  checked={userData.petSpecies === 'horse'}
                  onChange={handleChange}
                />
                PFERD
              </DropdownLabel>
              </DropdownLabel>
            </DropdownDiv>
        )
    } else {
        return ''
    }
}

const DropdownDiv = styled.div`
margin: 0 .5rem;
      height: 2rem;
      display: flex;
      align-items: center;
      position: relative;
      `

const StyledLongerDiv = styled.div`
width: 11.5rem;
height: .5rem;
position: absolute;
border: 1px solid #0989F7;
border-top: none;
margin-top: 1rem;
z-index: 1;
`

const DropdownLabel = styled.p`
margin-left: .25rem;
      display: inline-block;
      font-size: .7rem;
      color: grey;
      `

const Checkbox = styled.input`
margin: .25rem;
width: 1rem;
`