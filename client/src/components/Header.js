import styled from "styled-components";

import { ReactComponent as Fin2u } from "../images/fin2uLogo.svg";

export default function Header() {
  return (
    <Container>
      <Fin2u />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  svg {
    width: 49.87px;
    height: 23.17px;
    margin: 0.5rem;
  }
`;
