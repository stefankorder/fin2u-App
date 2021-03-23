import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import User from "./models/user.models.js";
import Insurance from "./models/insurances.model.js";

const connectionString = "mongodb://localhost:27017/fin2u";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = express();

server.use(bodyParser.json());

server.use(cors());

server.get("/", (request, response) => {
  response.json({ status: "Server is up and running" });
});

//GET USER

/* server.get("/user", (request, response) => {
  User.find().then((user) => response.json(user));
}); */

//POST USER

server.post("/user", (request, response) => {
  const newUser = new User({
    name: request.body.name,
    lastname: request.body.lastname,
    age: request.body.age,
    birthday: request.body.birthday,
    relationship: request.body.relationship,
    children: request.body.children,
    jobStatus: request.body.jobStatus,
    income: request.body.income,
    netIncome: request.body.netIncome,
    houseOwner: request.body.houseOwner,
    valuables: request.body.valuables,
    car: request.body.car,
    carAge: request.body.carAge,
    carValue: request.body.carValue,
    pet: request.body.pet,
    petSpecies: request.body.petSpecies,
    motorcycle: request.body.motorcycle,
    motorcycleAge: request.body.motorcycleAge,
    motorcycleValue: request.body.motorcycleValue,
    dangerousHobby: request.body.dangerousHobby,
    insurancesAlreadyHave: request.body.insurancesAlreadyHave,
  });

  newUser
    .save()
    .then((user) => response.json(user))
    .catch((error) => response.json(error.message));
});

//DELETE USER

server.delete("/user/:userId", (request, response) => {
  const IdToDelete = request.params.userId;

  User.findOneAndDelete({ _id: IdToDelete })
    .then((user) => response.json(user))
    .catch((error) => response.json(error.message));
});

//POST INSURANCES

server.post("/insurance", async (request, response) => {
  const newInsurance = new Insurance({
    value: request.body.value,
    status: request.body.status,
  });

  const value = request.body.value;

  const insurance = await Insurance.findOne({ value });

  if (insurance !== null && insurance.value === newInsurance.value) {
    response.json("Die Versicherung gibt es bereits auf der Datenbank");
  } else {
    const resault = await newInsurance.save();

    response.json(resault);
  }
});

//GET INSURANCES

server.get("/insurances", async (request, response) => {
  const insurances = await Insurance.find();

  response.json(insurances);
});

server.listen(4000, () => console.log("Server started"));
