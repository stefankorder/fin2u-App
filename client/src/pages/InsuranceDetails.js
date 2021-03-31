import { useParams, Link } from "react-router-dom";

export default function InsuranceDetails({ insurances, userToCalculate }) {
  const { id } = useParams();

  const insuranceToDetail = insurances.find(
    (insurance) => insurance._id === id
  );

  return (
    <>
      <h1>{insuranceToDetail.name} </h1>
      <p>{insuranceToDetail.text}</p>

      <Link to="/start">ZURÜCK</Link>
    </>
  );
}
