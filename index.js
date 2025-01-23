const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const urlRoutes = require("./routes/url");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

// Middleware to parse JSON bodies
app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',path.resolve("./views"));

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


mongoose.connect("mongodb://localhost:27017/url-shortner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:8001");
});
