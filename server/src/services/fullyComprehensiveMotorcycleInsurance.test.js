import fullyComprehensiveMotorcycleInsurance from "./fullyComprehensiveMotorcycleInsurance.js";

describe("fully comprehensive motorcycle Insurance", () => {
  it("user with fully comprehensive motorcycle Insurance / returns status 0", () => {
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
        value: "fullyComprehensiveMotorcycleInsurance",
        name: "Motorrad-Vollkasko",
        status: 0,
        text: "",
      },
    ];
    const result = fullyComprehensiveMotorcycleInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without fully comprehensive motorcycle Insurance and motorcycle value under 12.000 / returns status 1", () => {
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
      motorcycleValue: 10000,
      name: "Max",
      netIncome: "34269",
      pet: false,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "fullyComprehensiveMotorcycleInsurance",
        name: "Motorrad-Vollkasko",
        status: 0,
        text: "",
      },
    ];
    const result = fullyComprehensiveMotorcycleInsurance(user, insurances);
    expect(result.status).toBe(1);
  });
  it("user without fully comprehensive motorcycle Insurance and motorcycle value above 11.999 / returns status 3", () => {
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
      motorcycleValue: 14000,
      name: "Max",
      netIncome: "34269",
      pet: false,
      petSpecies: "",
      relationship: "inRelationship",
      valuables: false,
    };
    const insurances = [
      {
        value: "fullyComprehensiveMotorcycleInsurance",
        name: "Motorrad-Vollkasko",
        status: 0,
        text: "",
      },
    ];
    const result = fullyComprehensiveMotorcycleInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
});
