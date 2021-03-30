import Insurance from "../models/insurances.model.js";
import User from "../models/user.models.js";

import personalLiabilityInsurance from "../services/personalLiabilityInsurance.js";
import animalKeeperInsurance from "../services/animalKeeperInsurance.js";
import householdItemsInsurance from "../services/householdItemsInsurance.js";
import residentialBuildingInsurance from "../services/residentialBuildingInsurance.js";
import accidentInsurance from "../services/accidentInsurance.js";
import legalProtectionInsurance from "../services/legalProtectionInsurance.js";
import partialCarInsurance from "../services/partialCarInsurance.js";
import vehicleFullyComprehensiveInsurance from "../services/vehicleFullyComprehensiveInsurance.js";
import partiallyComprehensiveMotorcycleInsurance from "../services/partiallyComprehensiveMotorcycleInsurance.js";
import fullyComprehensiveMotorcycleInsurance from "../services/fullyComprehensiveMotorcycleInsurance.js";
import incapacityInsurance from "../services/incapacityInsurance.js";
import riskLifeInsurance from "../services/riskLifeInsurance.js";
import privateHealthInsurance from "../services/privateHealthInsurance.js";
import pensionInsurance from "../services/pensionInsurance.js";

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

  newInsurances.push(personalLiabilityInsurance(user, insurances));

  newInsurances.push(animalKeeperInsurance(user, insurances));

  newInsurances.push(householdItemsInsurance(user, insurances));

  newInsurances.push(residentialBuildingInsurance(user, insurances));

  newInsurances.push(accidentInsurance(user, insurances));

  newInsurances.push(legalProtectionInsurance(user, insurances));

  newInsurances.push(partialCarInsurance(user, insurances));

  newInsurances.push(vehicleFullyComprehensiveInsurance(user, insurances));

  newInsurances.push(
    partiallyComprehensiveMotorcycleInsurance(user, insurances)
  );

  newInsurances.push(fullyComprehensiveMotorcycleInsurance(user, insurances));

  newInsurances.push(incapacityInsurance(user, insurances));

  newInsurances.push(riskLifeInsurance(user, insurances));

  newInsurances.push(privateHealthInsurance(user, insurances));

  newInsurances.push(pensionInsurance(user, insurances));

  response.json(newInsurances);
}
