import partialCarInsurance from "./partialCarInsurance.js";

describe("partial car insurance", () => {
  it("user with partial car insurance / returns status 0", () => {
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
        value: "partialCarInsurance",
        name: "Teilkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = partialCarInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without partial car insurance and car value higher than 9.999 EUR / returns status 0", () => {
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
        value: "partialCarInsurance",
        name: "Teilkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = partialCarInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without partial car insurance and car value under 3.000 EUR / returns status 1", () => {
    const user = {
      age: 22,
      birthday: "01.01.1999",
      car: true,
      carAge: 3,
      carValue: 2000,
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
        value: "partialCarInsurance",
        name: "Teilkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = partialCarInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
  it("user without partial car insurance and car value between 3.000 und 9.999 EUR / returns status 2", () => {
    const user = {
      age: 22,
      birthday: "01.01.1999",
      car: true,
      carAge: 3,
      carValue: 4000,
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
        value: "partialCarInsurance",
        name: "Teilkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = partialCarInsurance(user, insurances);
    expect(result.status).toBe(2);
  });
  it("user without partial car insurance but vehicle fully comprehensive insurance / returns status 0", () => {
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
        value: "partialCarInsurance",
        name: "Teilkaskoversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = partialCarInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
});
