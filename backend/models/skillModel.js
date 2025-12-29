// // backend/models/skillModel.js
// const db = require("../db");

// // Skill Model
// const Skill = {};

// // Naya skill add karne ke liye
// Skill.create = (data, callback) => {
//   const sql =
//     "INSERT INTO skills (category, skill_name, percentage) VALUES (?, ?, ?)";
//   db.query(sql, [data.category, data.skill_name, data.percentage], callback);
// };

// // Sare skills dikhane ke liye
// Skill.getAll = (callback) => {
//   db.query("SELECT * FROM skills ORDER BY id DESC", callback);
// };

// // Ek skill dikhane ke liye
// Skill.getById = (id, callback) => {
//   db.query("SELECT * FROM skills WHERE id = ?", [id], callback);
// };

// // Skill delete karne ke liye
// Skill.delete = (id, callback) => {
//   db.query("DELETE FROM skills WHERE id = ?", [id], callback);
// };

// module.exports = Skill;

///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
import pool from "../db.js";

// Skill Model
const Skill = {};

// ➕ Naya skill add karne ke liye
Skill.create = async (data) => {
  const result = await pool.query(
    "INSERT INTO skills (category, skill_name, percentage) VALUES ($1, $2, $3) RETURNING *",
    [data.category, data.skill_name, data.percentage]
  );
  return result.rows[0];
};

// 📜 Sare skills dikhane ke liye
Skill.getAll = async () => {
  const result = await pool.query("SELECT * FROM skills ORDER BY id DESC");
  return result.rows;
};

// 🔍 Ek skill dikhane ke liye
Skill.getById = async (id) => {
  const result = await pool.query("SELECT * FROM skills WHERE id = $1", [id]);
  return result.rows[0];
};

// ❌ Skill delete karne ke liye
Skill.delete = async (id) => {
  await pool.query("DELETE FROM skills WHERE id = $1", [id]);
  return { message: "Skill deleted successfully" };
};

export default Skill;
