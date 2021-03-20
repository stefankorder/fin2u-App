/* 
status 0 = not needed
status 1 = needed
status 2 = important
status 3 = very important 
*/

const insuranceProducts = [
  {
    value: "personalLiability",
    name: "Privathaftpflichtversicherung",
    status: 0,
  },
  {
    value: "animalKeeper",
    name: "Tierhalterhaftpflicht",
    status: 0,
  },
  {
    value: "householdItems",
    name: "Hausratversicherung",
    status: 0,
  },
  {
    value: "residentialBuilding",
    name: "Wohngebäudeversicherung",
    status: 0,
  },
  {
    value: "accident",
    name: "Unfallversicherung",
    status: 0,
  },
  {
    value: "legalProtection",
    name: "Rechtsschutzversicherung",
    status: 0,
  },
  {
    value: "vehicle",
    name: "KFZ-Versicherung",
    status: 0,
  },
  {
    value: "incapacity",
    name: "Berufsunfähigkeitsversicherung",
    status: 0,
  },
  {
    value: "riskLife",
    name: "Risikolebensversicherung",
    status: 0,
  },
  {
    value: "privateHealthInsurance",
    name: "Private Krankenversicherung",
    status: 0,
  },
];

export default insuranceProducts;
