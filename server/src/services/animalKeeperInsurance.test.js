import animalKeeperInsurance from "./animalKeeperInsurance.js";

describe("animalkeeper insurance", () => {
  it("user with animalkeeper insurance / returns status 0", () => {
    const user = {
      age: 22,
      birthday: "01.01.1999",
      car: true,
      carAge: 3,
      carValue: 15000,
      children: "2",
      dangerousHobby: false,
      houseOwner: true,
      income: "55000",
      insurancesAlreadyHave: ["animalKeeper"],
      jobStatus: "employed",
      lastname: "Mustermann",
      motorcycle: false,
      motorcycleAge: null,
      motorcycleValue: null,
      name: "Max",
      netIncome: "34269",
      pet: false,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "animalKeeper",
        name: "Tierhalterhaftpflicht",
        status: 0,
        text: "",
      },
    ];
    const result = animalKeeperInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without animalkeeper insurance but animalkeeper/ returns status 3", () => {
    const user = {
      age: 22,
      birthday: "01.01.1999",
      car: true,
      carAge: 3,
      carValue: 15000,
      children: "2",
      dangerousHobby: false,
      houseOwner: false,
      income: "55000",
      insurancesAlreadyHave: [],
      jobStatus: "employed",
      lastname: "Mustermann",
      motorcycle: false,
      motorcycleAge: null,
      motorcycleValue: null,
      name: "Max",
      netIncome: "34269",
      pet: true,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "animalKeeper",
        name: "Tierhalterhaftpflicht",
        status: 0,
        text: "",
      },
    ];
    const result = animalKeeperInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
});
