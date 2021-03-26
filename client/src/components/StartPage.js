import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as fin2uf } from "../images/fin2uLogof.svg";
import { ReactComponent as fin2uin } from "../images/fin2uLogoin.svg";
import { ReactComponent as fin2u2 } from "../images/fin2uLogo2.svg";
import { ReactComponent as fin2uu } from "../images/fin2uLogou.svg";

export default function StartPage({ setStartPage }) {
  return (
    <Container>
      <LogoContainer>
        <LogoU />
        <Logo2 />
        <LogoIn />
        <LogoF />
      </LogoContainer>
      <NavLink to="/start">
        <Button onClick={() => setStartPage("go")}>Loslegen!</Button>
      </NavLink>
    </Container>
  );
}

const blur = keyframes`
0% {
    transform:  translateY(0)
}

60% {
    transform:  translateY(0)
}

65% {
    transform:  translateY(-.5rem) scale(1.05) rotate(0.02turn)
}

70% {
    transform:  translateY(0)
}

74% {
    transform:  translateY(-.25rem) scale(1.025) rotate(-0.01turn)
}

78% {
    transform:  translateY(0)
}

100% {
    transform:  translateY(0)
}
`;

const fadeInRight = keyframes`
0% {
  margin-right: -100%;
}

50% {
  margin-right: 2rem;
  opacity: 1;
}

100% {
  margin-right: 0;
  opacity: 1;
}
`;

const fadeInLeft = keyframes`
0% {
  margin-right: 100%;
    
}

100% {
  margin-right: 0;
  opacity: 1;
}
`;

const opacityIn = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const bounce = keyframes`
0% {
    transform:  translateY(0)
}

80% {
    transform:  translateY(0)
}

85% {
    transform:  translateY(1rem) rotate(0.02turn)
}

90% {
    transform:  translateY(0)
}

95% {
    transform:  translateY(1rem) rotate(-0.03turn)
}

100% {
    transform:  translateY(0)
}
`;

const fallDown = keyframes`
0% {
    transform: rotate(0turn)
}

33% {
    transform: rotate(-0.025turn)
}

66% {
    transform: rotate(0.0125turn)
}

82% {
    transform: rotate(-0.0065turn)
}

100% {
    transform: rotate(0turn)
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  font-size: 1.5rem;
  color: white;
  border: none;
  background: #0989f7;
  border-radius: 10px;
  animation: ${bounce} 5s ease-in infinite;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const LogoF = styled(fin2uf)`
  position: absolute;
  animation: ${fadeInLeft} 0.5s ease-in, ${fallDown} 0.5s linear 1.75s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 199.48px;
  height: 92.68px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;

const LogoIn = styled(fin2uin)`
  position: absolute;
  animation: ${fadeInLeft} 0.5s ease-in 0.5s, ${fallDown} 0.5s linear 1.75s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 199.48px;
  height: 92.68px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;

const Logo2 = styled(fin2u2)`
  position: absolute;
  animation: ${opacityIn} 1.5s ease-in 1s, ${fallDown} 0.5s linear 1.75s,
    ${blur} 5s ease-in infinite 2.25s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 199.48px;
  height: 92.68px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;

const LogoU = styled(fin2uu)`
  position: absolute;
  animation: ${fadeInRight} 0.5s linear 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 199.48px;
  height: 92.68px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;