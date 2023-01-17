const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const { PORT = 3000, BD_HOST } = process.env;

mongoose
  .connect(BD_HOST)
  .then(() => {
    console.log("bd connect");
    app.listen(PORT);
  })
  .then(() => {
    console.log(`server is on ${PORT} port`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
