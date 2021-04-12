import pensionInsurance from "./pensionInsurance.js";

describe("pension insurance", () => {
  it("user with pension insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["pensionInsurance"],
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
        value: "pensionInsurance",
        name: "Rentenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = pensionInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without pension insurance and user age above 59 / returns status 0", () => {
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
        value: "pensionInsurance",
        name: "Rentenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = pensionInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user with pension insurance and user age between 55 and 59 / returns status 1", () => {
    const user = {
      age: 56,
      birthday: "01.01.1965",
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
        value: "pensionInsurance",
        name: "Rentenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = pensionInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
  it("user with pension insurance and user age between 54 and 30 / returns status 3", () => {
    const user = {
      age: 32,
      birthday: "21.06.1988",
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
        value: "pensionInsurance",
        name: "Rentenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = pensionInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
  it("user with pension insurance and user age under 30 years / returns status 2", () => {
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
        value: "pensionInsurance",
        name: "Rentenversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = pensionInsurance(user, insurances);
    expect(result.status).toBe(2);
  });
});
