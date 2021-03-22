import styled from "styled-components";

import { ReactComponent as fin2u } from "../images/fin2uLogo.svg";

export default function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Logo = styled(fin2u)`
  width: 49.87px;
  height: 23.17px;
  margin: 0.5rem;
`;
