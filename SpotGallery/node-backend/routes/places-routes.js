const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("");
  res.json({ message: "It Works!" });
});

module.exports = router;