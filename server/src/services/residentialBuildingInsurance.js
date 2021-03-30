export default function residentialBuildingInsurance(user, insurances) {
  const residentialBuildingInsurance = insurances.find(
    (insurance) => insurance.value === "residentialBuilding"
  );
  if (
    user.houseOwner &&
    !user.insurancesAlreadyHave.includes("residentialBuilding")
  ) {
    residentialBuildingInsurance.status = 3;
  } else {
    residentialBuildingInsurance.status = 0;
  }
  return residentialBuildingInsurance;
}
