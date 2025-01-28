const mongoose = require("mongoose");

const urlShortner = new mongoose.Schema(
    {
      shortId: {
        type: String,
        required: true,
        unique: true,
      },
      redirectURL: {
        type: String,
        required: true,
      },
      visitHistory: [
        {
          timestamp: {
            type: Number, // Correctly defines a timestamp as a number
          }, 
        },
      ],
    },
    { timestamps: true }
);  
const URL = mongoose.model("URL" , urlShortner);

module.exports = URL;