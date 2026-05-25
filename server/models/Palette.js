const mongoose = require("mongoose");

const paletteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    style: String,
    category: String,
    mood: String,
    temperature: String,
    intensity: String,
    colors: [String],
    gradients: [String],
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Palette", paletteSchema);