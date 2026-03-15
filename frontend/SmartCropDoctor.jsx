import React, { useState } from "react";

function SmartCropDoctor() {
  const [soilType, setSoilType] = useState("");
  const [weather, setWeather] = useState("");
  const [result, setResult] = useState("");

  const recommendCrop = () => {
    if (soilType === "loamy" && weather === "rainy") {
      setResult("Recommended Crop: Rice 🌾");
    } else if (soilType === "sandy") {
      setResult("Recommended Crop: Groundnut 🌱");
    } else {
      setResult("Recommended Crop: Wheat 🌾");
    }
  };

  return (
    <div>
      <h2>Crop Recommendation</h2>

      <input
        placeholder="Enter Soil Type"
        onChange={(e) => setSoilType(e.target.value)}
      />

      <input
        placeholder="Enter Weather"
        onChange={(e) => setWeather(e.target.value)}
      />

      <button onClick={recommendCrop}>Get Recommendation</button>

      <p>{result}</p>
    </div>
  );
}

export default SmartCropDoctor;
