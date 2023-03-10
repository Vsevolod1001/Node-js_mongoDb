const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/api/contacts");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  next({ status: 404, message: "Not found" });
});
app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
