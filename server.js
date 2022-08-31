import dotenv from "dotenv";
import express from "express";
import conn from "./db.js";

dotenv.config();
conn();
const app = express();
// STATIC FILES MIDDLEWARE
app.use(express.static("public"));
// EJS - TEMPLATE ENGINE
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).send("salam");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
