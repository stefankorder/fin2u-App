import User from "../models/user.models.js";

export function userPost(request, response) {
  const newUser = new User({
    name: request.body.name,
    lastname: request.body.lastname,
    age: request.body.age,
    birthday: request.body.birthday,
    relationship: request.body.relationship,
    children: request.body.children,
    jobStatus: request.body.jobStatus,
    income: request.body.income,
    netIncome: request.body.netIncome,
    houseOwner: request.body.houseOwner,
    valuables: request.body.valuables,
    car: request.body.car,
    carAge: request.body.carAge,
    carValue: request.body.carValue,
    pet: request.body.pet,
    petSpecies: request.body.petSpecies,
    motorcycle: request.body.motorcycle,
    motorcycleAge: request.body.motorcycleAge,
    motorcycleValue: request.body.motorcycleValue,
    dangerousHobby: request.body.dangerousHobby,
    insurancesAlreadyHave: request.body.insurancesAlreadyHave,
  });

  newUser
    .save()
    .then((user) => response.json(user))
    .catch((error) => response.json(error.message));
}

export function userDelete(request, response) {
  const IdToDelete = request.params.userId;

  User.findOneAndDelete({ _id: IdToDelete })
    .then((user) => response.json(user))
    .catch((error) => response.json(error.message));
}
