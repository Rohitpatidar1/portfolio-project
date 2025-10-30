// backend/controllers/skillController.js
const Skill = require("../models/skillModel");

// Naya skill add karne ke liye
exports.createSkill = (req, res) => {
  Skill.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Skill added successfully!" });
  });
};

// Sare skills dikhane ke liye
exports.getAllSkills = (req, res) => {
  Skill.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Ek skill dikhane ke liye
exports.getSkillById = (req, res) => {
  Skill.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

// Skill delete karne ke liye
exports.deleteSkill = (req, res) => {
  Skill.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Skill deleted successfully!" });
  });
};
