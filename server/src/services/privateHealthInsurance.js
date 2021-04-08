export default function privateHealthInsurance(user, insurances) {
  const privateHealthInsurance = insurances.find(
    (insurance) => insurance.value === "privateHealthInsurance"
  );
  if (!user.insurancesAlreadyHave.includes("privateHealthInsurance")) {
    if (user.age < 50 && user.jobStatus === "employed" && user.income > 64350) {
      privateHealthInsurance.status = 1;
    } else if (user.age < 50 && user.jobStatus === "selfEmployed") {
      privateHealthInsurance.status = 2;
    } else if (user.jobStatus === "civilServants") {
      privateHealthInsurance.status = 3;
    } else {
      privateHealthInsurance.status = 0;
    }
  } else {
    privateHealthInsurance.status = 0;
  }
  privateHealthInsurance.text = `
  
  
  
  `;
  return privateHealthInsurance;
}
