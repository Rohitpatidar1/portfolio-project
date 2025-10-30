// backend/routes/skillRoutes.js
const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

// Naya skill add karne ke liye
router.post("/", skillController.createSkill);

// Sare skills dikhane ke liye
router.get("/", skillController.getAllSkills);

// Ek skill dikhane ke liye (id se)
router.get("/:id", skillController.getSkillById);

// Skill delete karne ke liye
router.delete("/:id", skillController.deleteSkill);

module.exports = router;
