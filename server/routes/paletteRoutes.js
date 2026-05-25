const express = require("express");
const Palette = require("../models/Palette");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const palette = await Palette.create(req.body);
    res.status(201).json(palette);
  } catch (error) {
    res.status(500).json({ message: "Palette could not be saved", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const palettes = await Palette.find().sort({ createdAt: -1 });
    res.json(palettes);
  } catch (error) {
    res.status(500).json({ message: "Palettes could not be fetched", error });
  }
});

module.exports = router;