import styled from 'styled-components'

import { ReactComponent as fin2u } from '../images/fin2u.svg'

export default function Header() {
    return (
        <ContainerDiv>
 <Logo />
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`

const Logo = styled(fin2u)`
width: 49.87px;
height: 23.17px;
`