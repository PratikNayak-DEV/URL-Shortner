const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/url");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/url", urlRoutes);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId
    },
    {
      $push: {
        visitHistory: [
            {
              timestamp: { type: Date.now, required: true },
            },
          ],          
      },
    },
    {
        new:true
    }
  );
  res.redirect(entry.redirectURL);
});

mongoose.connect("mongodb://localhost:27017/url-shortner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:8001");
});
