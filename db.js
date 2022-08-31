import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "simpleApp",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to MONGODB`);
    })
    .catch((err) => {
      console.log(`DB connection error: ${err}`);
    });
};

export default conn;
