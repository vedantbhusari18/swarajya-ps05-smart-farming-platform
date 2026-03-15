const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Farming Backend Running");
});

app.post("/crop-recommendation", (req, res) => {
  const { soil, weather } = req.body;

  if (soil === "loamy" && weather === "rainy") {
    res.json({ crop: "Rice" });
  } else {
    res.json({ crop: "Wheat" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
