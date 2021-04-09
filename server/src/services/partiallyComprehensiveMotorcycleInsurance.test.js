import partiallyComprehensiveMotorcycleInsurance from "./partiallyComprehensiveMotorcycleInsurance.js";

describe("partially comprehensive motorcycle insurance", () => {
  it("user with partially comprehensive motorcycle insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["partiallyComprehensiveMotorcycleInsurance"],
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
        value: "partiallyComprehensiveMotorcycleInsurance",
        name: "Mottorad-Teilkasko",
        status: 0,
        text: "",
      },
    ];
    const result = partiallyComprehensiveMotorcycleInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without partially comprehensive motorcycle insurance but motorcycle value above 11.999 EUR / returns status 0", () => {
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
      motorcycle: true,
      motorcycleAge: 3,
      motorcycleValue: 13000,
      name: "Max",
      netIncome: "34269",
      pet: false,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "partiallyComprehensiveMotorcycleInsurance",
        name: "Mottorad-Teilkasko",
        status: 0,
        text: "",
      },
    ];
    const result = partiallyComprehensiveMotorcycleInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without partially comprehensive motorcycle insurance and motorcycle value unter 3.000 EUR / returns status 1", () => {
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
      motorcycle: true,
      motorcycleAge: 3,
      motorcycleValue: 2000,
      name: "Max",
      netIncome: "34269",
      pet: false,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "partiallyComprehensiveMotorcycleInsurance",
        name: "Mottorad-Teilkasko",
        status: 0,
        text: "",
      },
    ];
    const result = partiallyComprehensiveMotorcycleInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
  it("user without partially comprehensive motorcycle insurance and motorcycle value between 3.000 and 11.999 EUR / returns status 3", () => {
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
      motorcycle: true,
      motorcycleAge: 3,
      motorcycleValue: 4000,
      name: "Max",
      netIncome: "34269",
      pet: false,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "partiallyComprehensiveMotorcycleInsurance",
        name: "Mottorad-Teilkasko",
        status: 0,
        text: "",
      },
    ];
    const result = partiallyComprehensiveMotorcycleInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
  it("user without partially comprehensive motorcycle insurance but fully comprehensive motorcycle insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["fullyComprehensiveMotorcycleInsurance"],
      jobStatus: "employed",
      lastname: "Mustermann",
      motorcycle: true,
      motorcycleAge: 3,
      motorcycleValue: 13000,
      name: "Max",
      netIncome: "34269",
      pet: false,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "partiallyComprehensiveMotorcycleInsurance",
        name: "Mottorad-Teilkasko",
        status: 0,
        text: "",
      },
    ];
    const result = partiallyComprehensiveMotorcycleInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
});
