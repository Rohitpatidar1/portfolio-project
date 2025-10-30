const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// ✅ Get all projects
router.get("/", projectController.getAllProjects);

// ✅ Get project by slug (new route)
router.get("/slug/:slug", projectController.getProjectBySlug);

// ✅ Get project by id
router.get("/:id", projectController.getProjectById);

// ✅ Create project
router.post("/", projectController.createProject);

// ✅ Update project
router.put("/:id", projectController.updateProject);

// ✅ Delete project
router.delete("/:id", projectController.deleteProject);

module.exports = router;
