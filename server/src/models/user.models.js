import mongoose from "mongoose";

const userSchema = {
  name: String,
  lastname: String,
  age: Number,
  birthday: String,
  relationship: String,
  children: Number,
  jobStatus: String,
  income: Number,
  netIncome: Number,
  houseOwner: Boolean,
  valuables: Boolean,
  car: Boolean,
  carAge: Number,
  carValue: Number,
  pet: Boolean,
  petSpecies: String,
  motorcycle: Boolean,
  motorcycleAge: Number,
  motorcycleValue: Number,
  dangerousHobby: Boolean,
  insurancesAlreadyHave: Array,
};
const User = mongoose.model("AppUser", userSchema);

export default User;
