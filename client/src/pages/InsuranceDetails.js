import { useParams, Link } from "react-router-dom";

import InsuranceDetailsIncapacity from "../components/InsuranceDetailsIncapacity";

export default function InsuranceDetails({ insurances, userToCalculate }) {
  const { id } = useParams();

  const insuranceToDetail = insurances.find(
    (insurance) => insurance._id === id
  );

  return (
    <>
      {insuranceToDetail.value === "incapacity" && (
        <InsuranceDetailsIncapacity
          userToCalculate={userToCalculate}
          insuranceToDetail={insuranceToDetail}
        />
      )}

      <Link to="/start">ZURÜCK</Link>
    </>
  );
}
