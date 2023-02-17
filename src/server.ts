import cors from "@fastify/cors";
import Fastify from "fastify";
import {main} from "./routes";

const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://" +
  process.env.MONGODB_USER +
  ":" +
  process.env.MONGODB_PASSWORD +
  "@habitstracker.vu0y9rb.mongodb.net/" +
  process.env.MONGODB_DATABASE +
  "?retryWrites=true&w=majority";
const app = Fastify();

app.register(cors);
app.register(main);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on port 3333");
  });

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db: any) => {
    console.log("Connected to Mongo", db.connection.host);
  })
  .catch((err: any) => {
    console.log(err);
  });
