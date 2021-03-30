export default function partialCarInsurance(user, insurances) {
  const partialCarInsurance = insurances.find(
    (insurance) => insurance.value === "partialCarInsurance"
  );
  if (user.car && !user.insurancesAlreadyHave.includes("partialCarInsurance")) {
    if (user.insurancesAlreadyHave.includes("vehicleFullyComprehensive")) {
      partialCarInsurance.status = 0;
    } else if (
      (user.carAge > 4 && user.carAge < 10) ||
      (user.carValue > 2999 && user.carAge < 10000)
    ) {
      partialCarInsurance.status = 2;
    } else if (user.carValue < 3000) {
      partialCarInsurance.status = 1;
    } else {
      partialCarInsurance.status = 0;
    }
  } else {
    partialCarInsurance.status = 0;
  }
  return partialCarInsurance;
}
