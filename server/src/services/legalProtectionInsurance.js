export default function legalProtectionInsurance(user, insurances) {
  const legalProtectionInsurance = insurances.find(
    (insurance) => insurance.value === "legalProtection"
  );
  if (!user.insurancesAlreadyHave.includes("legalProtection")) {
    if (user.jobStatus === "employed" || user.houseOwner) {
      legalProtectionInsurance.status = 3;
    } else {
      legalProtectionInsurance.status = 2;
    }
  } else {
    legalProtectionInsurance.status = 0;
  }
  return legalProtectionInsurance;
}
