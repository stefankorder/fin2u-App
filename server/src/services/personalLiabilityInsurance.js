export default function personalLiabilityInsurance(user, insurances) {
  const personalLiabilityInsurance = insurances.find(
    (insurance) => insurance.value === "personalLiability"
  );
  if (!user.insurancesAlreadyHave.includes("personalLiability")) {
    personalLiabilityInsurance.status = 3;
  } else {
    personalLiabilityInsurance.status = 0;
  }
  return personalLiabilityInsurance;
}
