export default function vehicleFullyComprehensiveInsurance(user, insurances) {
  const vehicleFullyComprehensiveInsurance = insurances.find(
    (insurance) => insurance.value === "vehicleFullyComprehensive"
  );
  if (
    user.car &&
    !user.insurancesAlreadyHave.includes("vehicleFullyComprehensive")
  ) {
    if (user.carAge < 5 || user.carValue > 9999) {
      vehicleFullyComprehensiveInsurance.status = 3;
    } else if (
      ((user.carAge > 4 && user.carAge < 10) ||
        (user.carValue > 2999 && user.carValue < 10000)) &&
      user.insurancesAlreadyHave.includes("partialCarInsurance")
    ) {
      vehicleFullyComprehensiveInsurance.status = 1;
    } else if (
      ((user.carAge > 4 && user.carAge < 10) ||
        (user.carValue > 2999 && user.carValue < 10000)) &&
      !user.insurancesAlreadyHave.includes("partialCarInsurance")
    ) {
      vehicleFullyComprehensiveInsurance.status = 2;
    } else {
      vehicleFullyComprehensiveInsurance.status = 1;
    }
  } else {
    vehicleFullyComprehensiveInsurance.status = 0;
  }
  return vehicleFullyComprehensiveInsurance;
}
