import residentialBuildingInsurance from "./residentialBuildingInsurance.js";

describe("residential building insurance", () => {
  it("user with residential building insurance / returns status 0", () => {
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
      insurancesAlreadyHave: ["residentialBuilding"],
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
        value: "residentialBuilding",
        name: "Gebäudeversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = residentialBuildingInsurance(user, insurances);
    expect(result.status).toBe(0);
  });
  it("user without residential building insurance but houseowner / returns status 3", () => {
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
        value: "residentialBuilding",
        name: "Gebäudeversicherung",
        status: 0,
        text: "",
      },
    ];
    const result = residentialBuildingInsurance(user, insurances);
    expect(result.status).toBe(3);
  });
});
