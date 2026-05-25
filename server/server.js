const paletteRoutes = require("./routes/paletteRoutes");

const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use("/api/palettes", paletteRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Chromora API running",
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})