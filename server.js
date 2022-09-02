import dotenv from "dotenv";
import express from "express";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";

dotenv.config();
//CONNECTION TO THE DB
conn();

const app = express();
// MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());

// EJS - TEMPLATE ENGINE
app.set("view engine", "ejs");

// ROUTES
app.use("/", pageRoute);
app.use("/photos", photoRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
