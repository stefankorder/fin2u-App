export default function accidentInsurance(user, insurances) {
  const accidentInsurance = insurances.find(
    (insurance) => insurance.value === "accident"
  );
  if (!user.insurancesAlreadyHave.includes("accident")) {
    if (user.dangerousHobby) {
      accidentInsurance.status = 3;
    } else {
      accidentInsurance.status = 1;
    }
  } else {
    accidentInsurance.status = 0;
  }
  return accidentInsurance;
}
