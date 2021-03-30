export default function partiallyComprehensiveMotorcycleInsurance(
  user,
  insurances
) {
  const partiallyComprehensiveMotorcycleInsurance = insurances.find(
    (insurance) =>
      insurance.value === "partiallyComprehensiveMotorcycleInsurance"
  );
  if (
    user.motorcycle &&
    !user.insurancesAlreadyHave.includes(
      "partiallyComprehensiveMotorcycleInsurance"
    )
  ) {
    if (
      user.insurancesAlreadyHave.includes(
        "fullyComprehensiveMotorcycleInsurance"
      )
    ) {
      partiallyComprehensiveMotorcycleInsurance.status = 0;
    } else if (
      user.motorcycleAge < 5 ||
      (user.motorcycleValue > 2999 && user.motorcycleValue < 12000)
    ) {
      partiallyComprehensiveMotorcycleInsurance.status = 3;
    } else if (user.motorcycleValue < 3000) {
      partiallyComprehensiveMotorcycleInsurance.status = 1;
    } else {
      partiallyComprehensiveMotorcycleInsurance.status = 0;
    }
  } else {
    partiallyComprehensiveMotorcycleInsurance.status = 0;
  }
  return partiallyComprehensiveMotorcycleInsurance;
}
