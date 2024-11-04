// index.js
const express = require("express");
const jobRoutes = require("./routes/jobRoutes");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
// Use job routes
app.use("/api", jobRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
