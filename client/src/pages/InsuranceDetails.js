import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { ReactComponent as Back } from "../images/reset.svg";

export default function InsuranceDetails({ insurances }) {
  const { id } = useParams();

  const insuranceToDetail = insurances.find(
    (insurance) => insurance._id === id
  );

  function parseFromString(string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(string, "text/html");
    return doc.body.innerHTML;
  }

  const text = parseFromString(insuranceToDetail.text);

  return (
    <Container>
      <TagHeadline>{insuranceToDetail.name}</TagHeadline>
      <TextContainer dangerouslySetInnerHTML={{ __html: text }} />
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

const TagHeadline = styled.h1`
  display: flex;
  text-align: center;
  justify-content: center;
  background: #0989f7;
  color: white;
  font-size: 0.9rem;
  padding: 0.4rem 0.4rem 0.2rem;
  margin: 2rem auto 0.5rem 1.6rem;
  border-radius: 5px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    display: flex;
    text-align: left;
    justify-content: center;
    background: #0989f7;
    color: white;
    font-size: 0.8rem;
    padding: 0.4rem 0.4rem 0.2rem;
    margin: 2rem auto 0.5rem 1.6rem;
    border-radius: 5px;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  }

  p {
    font-size: 0.8rem;
    color: #52514f;
    margin: 0.25rem 1rem 0.25rem 2rem;
    line-height: 1.3;
  }

  ul {
    font-size: 0.8rem;
    color: #52514f;
    margin: 0.25rem 1rem 0.25rem 2rem;
    line-height: 1.3;
  }

  img {
    width: 82.5%;
    margin: 1rem 0 1rem 2rem;
  }
`;

const ButtonBack = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin: 1rem 1.6rem;
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
