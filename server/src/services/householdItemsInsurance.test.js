import householdItemsInsurance from "./householdItemsInsurance.js";

describe("household items insurance", () => {
  it("user with household items insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["householdItems"],
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
        value: "householdItems",
        name: "Hausratversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = householdItemsInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without household items insurance / returns status 1", () => {
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
      insurancesAlreadyHave: [],
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
        value: "householdItems",
        name: "Hausratversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = householdItemsInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
  it("user without household items insurance and has valuables / returns status 3", () => {
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
      insurancesAlreadyHave: [],
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
      valuables: true,
    };
    const insurances = [
      {
        value: "householdItems",
        name: "Hausratversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = householdItemsInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
});
