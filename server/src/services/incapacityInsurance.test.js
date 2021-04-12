import incapacityInsurance from "./incapacityInsurance.js";

describe("incapacity insurance", () => {
  it("user with incapacity insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["incapacity"],
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
        value: "incapacity",
        name: "Berufsunfähigkeitsversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = incapacityInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user with incapacity insurance and userage lower than 50 / returns status 3", () => {
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
        value: "incapacity",
        name: "Berufsunfähigkeitsversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = incapacityInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
  it("user with incapacity insurance and user age between 50 and 59 / returns status 2", () => {
    const user = {
      age: 51,
      birthday: "01.01.1970",
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
        value: "incapacity",
        name: "Berufsunfähigkeitsversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = incapacityInsurance(user, insurances);
    expect(result.status).toBe(2);
  });
  it("user with incapacity insurance and older as 59 / returns status 1", () => {
    const user = {
      age: 61,
      birthday: "01.01.1960",
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
        value: "incapacity",
        name: "Berufsunfähigkeitsversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = incapacityInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
});
