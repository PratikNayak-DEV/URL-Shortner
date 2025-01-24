// const mongoose = require("mongoose");

// async function connectMongoDB(url) {
//   return mongoose.connect(url);
// }

// module.exports = {
//   connectMongoDB,
// };

const mongoose = require("mongoose");
mongoose.set("strictQuery" ,  true)
async function connectMongoDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

module.exports = {
  connectMongoDB,
};
