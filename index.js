const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const urlRoutes = require("./routes/url.js");
const URL = require("./models/url.js");
const {connectMongoDB} = require("./connect.js");
const { log } = require("console");
const app = express();
const PORT = 8001;

// Middleware to parse JSON bodies
app.use(express.json());


// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRoutes);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(), // Pass the actual timestamp
        },
      },
    },
    {
      new: true, // Ensures the updated document is returned
    }
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirectURL);
});

connectMongoDB(" mongodb://127.0.0.1:27017/URL-SHORTNER").then(
  console.log("Mongodb Connected")
);


app.listen(PORT, () => {
  console.log("Server running on http://localhost:8001");
});
