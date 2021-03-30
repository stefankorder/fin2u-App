export default function incapacityInsurance(user, insurances) {
  const incapacityInsurance = insurances.find(
    (insurance) => insurance.value === "incapacity"
  );
  if (!user.insurancesAlreadyHave.includes("incapacity")) {
    if (user.age > 59) {
      incapacityInsurance.status = 1;
    } else if (user.age < 60 && user.age > 49) {
      incapacityInsurance.status = 2;
    } else {
      incapacityInsurance.status = 3;
    }
  } else {
    incapacityInsurance.status = 0;
  }
  return incapacityInsurance;
}
