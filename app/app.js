const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "UP",
    service: "SRE Platform",
    message: "Application is running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/error", (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Intentional test error"
  });
});

app.listen(PORT, () => {
  console.log(`SRE Platform running on port ${PORT}`);
});
