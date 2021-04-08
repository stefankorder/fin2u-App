import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import { userPost, userDelete } from "./controllers/user.controller.js";
import {
  insurancePost,
  insuranceGet,
} from "./controllers/insurance.controller.js";

dotenv.config();

const connectionString = process.env.DB_CONNECTION;

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

server.use(express.static(path.join(__dirname, "../../client/build")));

server.get("/*", function (request, response) {
  response.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log("Server started"));
