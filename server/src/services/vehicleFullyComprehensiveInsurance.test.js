import vehicleFullyComprehensiveInsurance from "./vehicleFullyComprehensiveInsurance.js";

describe("vehicle fully comprehensive insurance", () => {
  it("user with vehicle fully comprehensive insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["vehicleFullyComprehensive"],
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
        value: "vehicleFullyComprehensive",
        name: "Vollkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = vehicleFullyComprehensiveInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without vehicle fully comprehensive insurance and car age more than 9 years and car value less than 3.000 EUR  / returns status 1", () => {
    const user = {
      age: 22,
      birthday: "01.01.1999",
      car: true,
      carAge: 10,
      carValue: 900,
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
        value: "vehicleFullyComprehensive",
        name: "Vollkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = vehicleFullyComprehensiveInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
  it("user without vehicle fully comprehensive insurance and car age between 5 and 9 years or car value between 3.000 EUR and 9.999 EUR / returns status 2", () => {
    const user = {
      age: 22,
      birthday: "01.01.1999",
      car: true,
      carAge: 7,
      carValue: 6000,
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
        value: "vehicleFullyComprehensive",
        name: "Vollkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = vehicleFullyComprehensiveInsurance(user, insurances);
    expect(result.status).toBe(2);
  });
  it("user without vehicle fully comprehensive insurance and car age between 5 and 9 years or car value between 3.000 EUR and 9.999 EUR but partialCarInsurance / returns status 1", () => {
    const user = {
      age: 22,
      birthday: "01.01.1999",
      car: true,
      carAge: 6,
      carValue: 9000,
      children: "2",
      dangerousHobby: false,
      houseOwner: true,
      income: "55000",
      insurancesAlreadyHave: ["partialCarInsurance"],
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
        value: "vehicleFullyComprehensive",
        name: "Vollkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = vehicleFullyComprehensiveInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
  it("user without vehicle fully comprehensive insurance and car age less than 5 years or car value more than 9.999 EUR / returns status 3", () => {
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
        value: "vehicleFullyComprehensive",
        name: "Vollkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = vehicleFullyComprehensiveInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
});
