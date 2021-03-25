export default function getDropDownName(value) {
  if (value === "single") {
    return "LEDIG";
  }

  if (value === "inRelationship") {
    return "LEBENSGEMEINSCHAFT";
  }

  if (value === "married") {
    return "VERHEIRATET";
  }

  if (value === "divorced") {
    return "GESCHIEDEN";
  }

  if (value === "widowed") {
    return "VERWITWET";
  }
  if (value === "employed") {
    return "ANGESTELLT";
  }
  if (value === "selfEmployed") {
    return "SELBSTSTÄNDIG";
  }
  if (value === "civilServants") {
    return "VERBEAMTET";
  }
}
