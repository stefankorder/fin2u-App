import mongoose from "mongoose";

const userSchema = {
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  children: {
    type: String,
    required: true,
  },
  jobStatus: {
    type: String,
    required: true,
  },
  income: {
    type: String,
    required: true,
  },
  netIncome: {
    type: String,
    required: true,
  },
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
