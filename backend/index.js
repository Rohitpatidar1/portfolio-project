const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const skillRoutes = require("./routes/skillRoutes");
const techLibraryRoutes = require("./routes/techLibraryRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(bodyParser.json());
app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/techlibrary", techLibraryRoutes);

app.listen(PORT, () => console.log("Server running on", PORT));
