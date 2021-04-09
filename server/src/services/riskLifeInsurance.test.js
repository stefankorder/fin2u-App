import riskLifeInsurance from "./riskLifeInsurance.js";

describe("risk life insurance", () => {
  it("user with risk life insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["riskLife"],
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
        value: "riskLife",
        name: "Risikolebensversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = riskLifeInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without risk life insurance / returns status 1", () => {
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
      pet: false,
      petSpecies: "",
      relationship: "widowed",
      valuables: false,
    };
    const insurances = [
      {
        value: "riskLife",
        name: "Risikolebensversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = riskLifeInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
  it("user without risk life insurance but married or in relationship / returns status 2", () => {
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
      pet: false,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "riskLife",
        name: "Risikolebensversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = riskLifeInsurance(user, insurances);
    expect(result.status).toBe(2);
  });
  it("user without risk life insurance but houseowner / returns status 0", () => {
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
        value: "riskLife",
        name: "Risikolebensversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = riskLifeInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
});
