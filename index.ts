import cors from "cors";
import Fastify from "fastify";
import {main} from "./src/routes";
// require("dotenv").config();
// require("./src/server");

const express = require("express");
const app = express();
const port = 3333;

app.use(cors());
app.use(main);

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log("Server running on port 3333");
  });
