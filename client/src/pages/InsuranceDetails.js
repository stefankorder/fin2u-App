import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { ReactComponent as Back } from "../images/reset.svg";

export default function InsuranceDetails({ insurances, userToCalculate }) {
  const { id } = useParams();

  const insuranceToDetail = insurances.find(
    (insurance) => insurance._id === id
  );

  const insuranceText = insuranceToDetail.text.split(/<br>/);

  return (
    <Container>
      <TagHeadline>{insuranceToDetail.name}</TagHeadline>
      {insuranceText.map((text) => {
        return <Text>{text}</Text>;
      })}
      <ButtonBack to="/start">
        <Back />
        <ButtonSpan>Zurück</ButtonSpan>
      </ButtonBack>
    </Container>
  );
}

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding-bottom: 3.5rem;
  max-width: 1024px;
`;

const TagHeadline = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  background: #0989f7;
  color: white;
  font-size: 0.9rem;
  padding: 0.4rem 0.4rem 0.2rem;
  margin: 1rem auto 1.5rem 1rem;
  border-radius: 5px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;

const Text = styled.p`
  hyphens: auto;
  text-align: justify;
  text-align-last: left;
  font-size: 0.8rem;
  color: #52514f;
  margin: 0.25rem 1rem;
`;

const ButtonBack = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin: 1rem;
  padding: 0.25rem 0.45rem;
  color: white;
  border: none;
  background: #ba0d50;
  border-radius: 10px;
  height: 1.25rem;
  font-size: 0.6rem;
  outline: none;
  cursor: pointer;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

  svg {
    width: 17.31px;
    height: 12.59px;
  }

  &:focus {
    border: 3px solid #0989f7;
  }
`;

const ButtonSpan = styled.span`
  margin-left: 0.25rem;
`;
