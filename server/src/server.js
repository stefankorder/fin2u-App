import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import { userPost, userDelete } from "./controllers/user.controller.js";
import {
  insurancePost,
  insuranceGet,
} from "./controllers/insurance.controller.js";

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

server.post("/user", userPost);

server.delete("/user/:userId", userDelete);

server.post("/insurance", insurancePost);

server.get("/insurances/:userId", insuranceGet);

server.listen(4000, () => console.log("Server started"));
