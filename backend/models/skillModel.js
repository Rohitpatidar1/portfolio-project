// backend/models/skillModel.js
const db = require("../db");

// Skill Model
const Skill = {};

// Naya skill add karne ke liye
Skill.create = (data, callback) => {
  const sql =
    "INSERT INTO skills (category, skill_name, percentage) VALUES (?, ?, ?)";
  db.query(sql, [data.category, data.skill_name, data.percentage], callback);
};

// Sare skills dikhane ke liye
Skill.getAll = (callback) => {
  db.query("SELECT * FROM skills ORDER BY id DESC", callback);
};

// Ek skill dikhane ke liye
Skill.getById = (id, callback) => {
  db.query("SELECT * FROM skills WHERE id = ?", [id], callback);
};

// Skill delete karne ke liye
Skill.delete = (id, callback) => {
  db.query("DELETE FROM skills WHERE id = ?", [id], callback);
};

module.exports = Skill;
