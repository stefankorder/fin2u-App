import privateHealthInsurance from "./privateHealthInsurance.js";

describe("private health insurance", () => {
  it("user with private health insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["privateHealthInsurance"],
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
        value: "privateHealthInsurance",
        name: "Private Krankenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = privateHealthInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without private health insurance / returns status 0", () => {
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
        value: "privateHealthInsurance",
        name: "Private Krankenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = privateHealthInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without private health insurance and jobstatus civil servants / returns status 3", () => {
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
      jobStatus: "civilServants",
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
        value: "privateHealthInsurance",
        name: "Private Krankenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = privateHealthInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
  it("user without private health insurance user age under 50 years and jobstatus self-employed / returns status 2", () => {
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
        value: "privateHealthInsurance",
        name: "Private Krankenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = privateHealthInsurance(user, insurances);
    expect(result.status).toBe(2);
  });
  it("user without private health insurance and user age under 50 years and jobstatus employed and income above 64350 / returns status 0", () => {
    const user = {
      age: 22,
      birthday: "01.01.1999",
      car: true,
      carAge: 3,
      carValue: 15000,
      children: "2",
      dangerousHobby: false,
      houseOwner: true,
      income: 64351,
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
        value: "privateHealthInsurance",
        name: "Private Krankenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = privateHealthInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
});
