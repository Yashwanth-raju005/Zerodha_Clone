const mongoose = require("mongoose");

const DataBaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MongoDB Connected Successfully");
    })
    .catch(() => {
      console.log("MongoDB Connection Error");
    });
};

module.exports = DataBaseConnection;
