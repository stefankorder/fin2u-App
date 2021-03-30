export default function getDropDownName(value) {
  if (value === "single") {
    return "ledig";
  }

  if (value === "inRelationship") {
    return "Lebensgemeinschaft";
  }

  if (value === "married") {
    return "verheiratet";
  }

  if (value === "divorced") {
    return "geschieden";
  }

  if (value === "widowed") {
    return "verwitwet";
  }
  if (value === "employed") {
    return "angestellt";
  }
  if (value === "selfEmployed") {
    return "selbstständig";
  }
  if (value === "civilServants") {
    return "verbeamtet";
  }
}
