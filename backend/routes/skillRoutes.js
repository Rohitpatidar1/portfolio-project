// // backend/routes/skillRoutes.js
// const express = require("express");
// const router = express.Router();
// const skillController = require("../controllers/skillController");

// // Naya skill add karne ke liye
// router.post("/", skillController.createSkill);

// // Sare skills dikhane ke liye
// router.get("/", skillController.getAllSkills);

// // Ek skill dikhane ke liye (id se)
// router.get("/:id", skillController.getSkillById);

// // Skill delete karne ke liye
// router.delete("/:id", skillController.deleteSkill);

// module.exports = router;




// backend/routes/skillRoutes.js
import express from "express";
import {
  createSkill,
  getAllSkills,
  getSkillById,
  deleteSkill,
} from "../controllers/skillController.js";

const router = express.Router();

// Naya skill add karne ke liye
router.post("/", createSkill);

// Sare skills dikhane ke liye
router.get("/", getAllSkills);

// Ek skill dikhane ke liye (id se)
router.get("/:id", getSkillById);

// Skill delete karne ke liye
router.delete("/:id", deleteSkill);

export default router;
