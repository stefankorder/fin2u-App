import Insurance from "../models/insurances.model.js";
import User from "../models/user.models.js";

export async function insurancePost(request, response) {
  const newInsurance = new Insurance({
    value: request.body.value,
    status: request.body.status,
    name: request.body.name,
  });

  const value = request.body.value;

  const insurance = await Insurance.findOne({ value });

  if (insurance !== null && insurance.value === newInsurance.value) {
    response.json(insurance);
  } else {
    const resault = await newInsurance.save();

    response.json(resault);
  }
}

export async function insuranceGet(request, response) {
  const IdToFind = request.params.userId;

  const insurances = await Insurance.find();

  const user = await User.findOne({ _id: IdToFind });

  const newInsurances = [];

  const personalLiabilityInsurance = insurances.find(
    (insurance) => insurance.value === "personalLiability"
  );
  if (!user.insurancesAlreadyHave.includes("personalLiability")) {
    personalLiabilityInsurance.status = 3;
  } else {
    personalLiabilityInsurance.status = 0;
  }
  newInsurances.push(personalLiabilityInsurance);

  const animalKeeperInsurance = insurances.find(
    (insurance) => insurance.value === "animalKeeper"
  );
  if (user.pet && !user.insurancesAlreadyHave.includes("animalKeeper")) {
    animalKeeperInsurance.status = 3;
  } else {
    animalKeeperInsurance.status = 0;
  }
  newInsurances.push(animalKeeperInsurance);

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
  newInsurances.push(householdItemsInsurance);

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
  newInsurances.push(residentialBuildingInsurance);

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
  newInsurances.push(accidentInsurance);

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
  newInsurances.push(legalProtectionInsurance);

  const partialCarInsurance = insurances.find(
    (insurance) => insurance.value === "partialCarInsurance"
  );
  if (user.car && !user.insurancesAlreadyHave.includes("partialCarInsurance")) {
    if (user.insurancesAlreadyHave.includes("vehicleFullyComprehensive")) {
      partialCarInsurance.status = 0;
    } else if (
      (user.carAge > 4 && user.carAge < 10) ||
      (user.carValue > 2999 && user.carAge < 10000)
    ) {
      partialCarInsurance.status = 2;
    } else if (user.carValue < 3000) {
      partialCarInsurance.status = 1;
    } else {
      partialCarInsurance.status = 0;
    }
  } else {
    partialCarInsurance.status = 0;
  }
  newInsurances.push(partialCarInsurance);

  const vehicleFullyComprehensiveInsurance = insurances.find(
    (insurance) => insurance.value === "vehicleFullyComprehensive"
  );
  if (
    user.car &&
    !user.insurancesAlreadyHave.includes("vehicleFullyComprehensive")
  ) {
    if (user.carAge < 5 || user.carValue > 9999) {
      vehicleFullyComprehensiveInsurance.status = 3;
    } else if (
      ((user.carAge > 4 && user.carAge < 10) ||
        (user.carValue > 2999 && user.carValue < 10000)) &&
      user.insurancesAlreadyHave.includes("partialCarInsurance")
    ) {
      vehicleFullyComprehensiveInsurance.status = 1;
    } else if (
      ((user.carAge > 4 && user.carAge < 10) ||
        (user.carValue > 2999 && user.carValue < 10000)) &&
      !user.insurancesAlreadyHave.includes("partialCarInsurance")
    ) {
      vehicleFullyComprehensiveInsurance.status = 2;
    } else {
      vehicleFullyComprehensiveInsurance.status = 1;
    }
  } else {
    vehicleFullyComprehensiveInsurance.status = 0;
  }
  newInsurances.push(vehicleFullyComprehensiveInsurance);

  const partiallyComprehensiveMotorcycleInsurance = insurances.find(
    (insurance) =>
      insurance.value === "partiallyComprehensiveMotorcycleInsurance"
  );
  if (
    user.motorcycle &&
    !user.insurancesAlreadyHave.includes(
      "partiallyComprehensiveMotorcycleInsurance"
    )
  ) {
    if (
      user.insurancesAlreadyHave.includes(
        "fullyComprehensiveMotorcycleInsurance"
      )
    ) {
      partiallyComprehensiveMotorcycleInsurance.status = 0;
    } else if (
      user.motorcycleAge < 5 ||
      (user.motorcycleValue > 2999 && user.motorcycleValue < 12000)
    ) {
      partiallyComprehensiveMotorcycleInsurance.status = 3;
    } else if (user.motorcycleValue < 3000) {
      partiallyComprehensiveMotorcycleInsurance.status = 1;
    } else {
      partiallyComprehensiveMotorcycleInsurance.status = 0;
    }
  } else {
    partiallyComprehensiveMotorcycleInsurance.status = 0;
  }
  newInsurances.push(partiallyComprehensiveMotorcycleInsurance);

  const fullyComprehensiveMotorcycleInsurance = insurances.find(
    (insurance) => insurance.value === "fullyComprehensiveMotorcycleInsurance"
  );
  if (
    user.motorcycle &&
    !user.insurancesAlreadyHave.includes(
      "fullyComprehensiveMotorcycleInsurance"
    )
  ) {
    if (user.motorcycleValue > 11999) {
      fullyComprehensiveMotorcycleInsurance.status = 3;
    } else {
      fullyComprehensiveMotorcycleInsurance.status = 1;
    }
  } else {
    fullyComprehensiveMotorcycleInsurance.status = 0;
  }
  newInsurances.push(fullyComprehensiveMotorcycleInsurance);

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
  newInsurances.push(incapacityInsurance);

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
  newInsurances.push(riskLifeInsurance);

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
  newInsurances.push(privateHealthInsurance);

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
  newInsurances.push(pensionInsurance);

  response.json(newInsurances);
}
