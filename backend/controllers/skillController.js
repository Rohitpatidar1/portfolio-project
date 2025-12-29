// // backend/controllers/skillController.js
// const Skill = require("../models/skillModel");

// // Naya skill add karne ke liye
// exports.createSkill = (req, res) => {
//   Skill.create(req.body, (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.status(201).json({ message: "Skill added successfully!" });
//   });
// };

// // Sare skills dikhane ke liye
// exports.getAllSkills = (req, res) => {
//   Skill.getAll((err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(results);
//   });
// };

// // Ek skill dikhane ke liye
// exports.getSkillById = (req, res) => {
//   Skill.getById(req.params.id, (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(result[0]);
//   });
// };

// // Skill delete karne ke liye
// exports.deleteSkill = (req, res) => {
//   Skill.delete(req.params.id, (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ message: "Skill deleted successfully!" });
//   });
// };




/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////




// backend/controllers/skillController.js
import Skill from "../models/skillModel.js";

// ➕ Naya skill add karne ke liye
export const createSkill = async (req, res) => {
  try {
    await Skill.create(req.body);
    res.status(201).json({ message: "Skill added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📜 Sare skills dikhane ke liye
export const getAllSkills = async (req, res) => {
  try {
    const results = await Skill.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Ek skill dikhane ke liye
export const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.getById(req.params.id);

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Skill delete karne ke liye
export const deleteSkill = async (req, res) => {
  try {
    await Skill.delete(req.params.id);
    res.json({ message: "Skill deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
