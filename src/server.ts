const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://" +
  process.env.MONGODB_USER +
  ":" +
  process.env.MONGODB_PASSWORD +
  "@habitstracker.eyhbfkj.mongodb.net/" +
  process.env.MONGODB_DATABASE +
  "?retryWrites=true&w=majority";

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
