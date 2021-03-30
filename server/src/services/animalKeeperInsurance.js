export default function animalKeeperInsurance(user, insurances) {
  const animalKeeperInsurance = insurances.find(
    (insurance) => insurance.value === "animalKeeper"
  );
  if (user.pet && !user.insurancesAlreadyHave.includes("animalKeeper")) {
    animalKeeperInsurance.status = 3;
  } else {
    animalKeeperInsurance.status = 0;
  }
  return animalKeeperInsurance;
}
