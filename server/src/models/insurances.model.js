import mongoose from "mongoose";

const insurenceSchema = {
  value: String,
  name: String,
  status: Number,
};
const Insurance = mongoose.model("AppInsurances", insurenceSchema);

export default Insurance;
