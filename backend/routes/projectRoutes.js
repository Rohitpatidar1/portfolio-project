// const express = require("express");
// const router = express.Router();
// const projectController = require("../controllers/projectController");

// // ✅ Get all projects
// router.get("/", projectController.getAllProjects);

// // ✅ Get project by slug (new route)
// router.get("/slug/:slug", projectController.getProjectBySlug);

// // ✅ Get project by id
// router.get("/:id", projectController.getProjectById);

// // ✅ Create project
// router.post("/", projectController.createProject);

// // ✅ Update project
// router.put("/:id", projectController.updateProject);

// // ✅ Delete project
// router.delete("/:id", projectController.deleteProject);

// module.exports = router;



// backend/routes/projectRoutes.js
import express from "express";
import {
  getAllProjects,
  getProjectById,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// ✅ Get all projects
router.get("/", getAllProjects);

// ✅ Get project by slug
router.get("/slug/:slug", getProjectBySlug);

// ✅ Get project by id
router.get("/:id", getProjectById);

// ✅ Create project
router.post("/", createProject);

// ✅ Update project
router.put("/:id", updateProject);

// ✅ Delete project
router.delete("/:id", deleteProject);

export default router;
