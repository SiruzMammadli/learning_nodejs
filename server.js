import dotenv from "dotenv";
import express from "express";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";

dotenv.config();
//CONNECTION TO THE DB
conn();

const app = express();
// STATIC FILES MIDDLEWARE
app.use(express.static("public"));
// EJS - TEMPLATE ENGINE
app.set("view engine", "ejs");

// ROUTES
app.use("/", pageRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
