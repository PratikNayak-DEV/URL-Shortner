const mongoose = require("mongoose");

async function connectMongoDB(URL) {
  try {
    // const uri = 'mongodb://127.0.0.1:27017/URL-SHORTNER';
    await mongoose.connect(URL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
}

module.exports = {
  connectMongoDB,
};
