// backend/routes/techLibraryRoutes.js
const express = require("express");
const router = express.Router();
const techLibraryController = require("../controllers/techLibraryController");

// ✅ Saare API routes
router.post("/", techLibraryController.createResource);
router.get("/", techLibraryController.getAllResources);
router.get("/:id", techLibraryController.getResourceById);
router.delete("/:id", techLibraryController.deleteResource);

module.exports = router;
