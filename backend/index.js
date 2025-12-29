import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import techLibraryRoutes from "./routes/techLibraryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🔥 MIDDLEWARES (ORDER IMPORTANT)
app.use(cors({ origin: "*" }));
app.use(express.json()); // <-- THIS IS ENOUGH
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/techlibrary", techLibraryRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
