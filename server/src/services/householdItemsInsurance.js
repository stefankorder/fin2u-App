export default function householdItemsInsurance(user, insurances) {
  const householdItemsInsurance = insurances.find(
    (insurance) => insurance.value === "householdItems"
  );
  if (!user.insurancesAlreadyHave.includes("householdItems")) {
    if (user.valuables) {
      householdItemsInsurance.status = 3;
    } else {
      householdItemsInsurance.status = 1;
    }
  } else {
    householdItemsInsurance.status = 0;
  }
  return householdItemsInsurance;
}
