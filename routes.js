const express = require("express");
const { processData } = require("./utils");

const router = express.Router();

// GET Endpoint
router.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// POST Endpoint
router.post("/bfhl", (req, res) => {
  const { data } = req.body;
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input" });
  }

  const response = processData(data);
  res.status(200).json(response);
});

module.exports = router;
