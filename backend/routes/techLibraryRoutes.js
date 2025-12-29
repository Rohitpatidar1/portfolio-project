// // backend/routes/techLibraryRoutes.js
// const express = require("express");
// const router = express.Router();
// const techLibraryController = require("../controllers/techLibraryController");

// // ✅ Saare API routes
// router.post("/", techLibraryController.createResource);
// router.get("/", techLibraryController.getAllResources);
// router.get("/:id", techLibraryController.getResourceById);
// router.delete("/:id", techLibraryController.deleteResource);

// module.exports = router;

///////////////////////////
//////////////////////////
// backend/routes/techLibraryRoutes.js
import express from "express";
import {
  createResource,
  getAllResources,
  getResourceById,
  deleteResource,
} from "../controllers/techLibraryController.js";

const router = express.Router();

// ✅ Saare API routes
router.post("/", createResource);
router.get("/", getAllResources);
router.get("/:id", getResourceById);
router.delete("/:id", deleteResource);

export default router;
