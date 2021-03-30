export default function fullyComprehensiveMotorcycleInsurance(
  user,
  insurances
) {
  const fullyComprehensiveMotorcycleInsurance = insurances.find(
    (insurance) => insurance.value === "fullyComprehensiveMotorcycleInsurance"
  );
  if (
    user.motorcycle &&
    !user.insurancesAlreadyHave.includes(
      "fullyComprehensiveMotorcycleInsurance"
    )
  ) {
    if (user.motorcycleValue > 11999) {
      fullyComprehensiveMotorcycleInsurance.status = 3;
    } else {
      fullyComprehensiveMotorcycleInsurance.status = 1;
    }
  } else {
    fullyComprehensiveMotorcycleInsurance.status = 0;
  }
  return fullyComprehensiveMotorcycleInsurance;
}
