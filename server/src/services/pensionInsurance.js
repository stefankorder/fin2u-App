export default function pensionInsurance(user, insurances) {
  const pensionInsurance = insurances.find(
    (insurance) => insurance.value === "pensionInsurance"
  );
  if (!user.insurancesAlreadyHave.includes("pensionInsurance")) {
    if (user.age < 30) {
      pensionInsurance.status = 2;
    } else if (user.age < 55 && user.age > 29) {
      pensionInsurance.status = 3;
    } else if (user.age < 60 && user.age > 54) {
      pensionInsurance.status = 1;
    } else {
      pensionInsurance.status = 0;
    }
  } else {
    pensionInsurance.status = 0;
  }
  return pensionInsurance;
}
