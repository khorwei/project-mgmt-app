const mongoose = require("mongoose");

// need to use async because mongoose return promises
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGU_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
