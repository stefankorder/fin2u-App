import legalProtectionInsurance from "./legalProtectionInsurance.js";

describe("legal protection insurance", () => {
  it("user with legal protection insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["legalProtection"],
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
        value: "legalProtection",
        name: "Rechtsschutzversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = legalProtectionInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without legal protection insurance / returns status 1", () => {
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
      jobStatus: "selfEmployed",
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
        value: "legalProtection",
        name: "Rechtsschutzversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = legalProtectionInsurance(user, insurances);
    expect(result.status).toBe(2);
  });
  it("user without legal protection insurance and houseowner or employed / returns status 3", () => {
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
      jobStatus: "selfEmployed",
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
        value: "legalProtection",
        name: "Rechtsschutzversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = legalProtectionInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
});
