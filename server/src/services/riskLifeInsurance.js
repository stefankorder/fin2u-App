export default function riskLifeInsurance(user, insurances) {
  const riskLifeInsurance = insurances.find(
    (insurance) => insurance.value === "riskLife"
  );
  if (!user.insurancesAlreadyHave.includes("riskLife")) {
    if (
      user.age < 60 &&
      (user.relationship === "married" ||
        user.relationship === "inRelationship")
    ) {
      riskLifeInsurance.status = 2;
    } else if (user.age < 60 && user.houseOwner) {
      riskLifeInsurance.status = 3;
    } else {
      riskLifeInsurance.status = 1;
    }
  } else {
    riskLifeInsurance.status = 0;
  }
  return riskLifeInsurance;
}
