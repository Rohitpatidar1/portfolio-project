// // backend/models/techLibraryModel.js
// const db = require("../db");

// // TechLibrary Model
// const TechLibrary = {};

// // Naya resource add karne ke liye
// TechLibrary.create = (data, callback) => {
//   const sql =
//     "INSERT INTO tech_library (category, title, video_url) VALUES (?, ?, ?)";
//   db.query(sql, [data.category, data.title, data.video_url], callback);
// };

// // Saare resources lene ke liye
// TechLibrary.getAll = (callback) => {
//   db.query("SELECT * FROM tech_library ORDER BY id DESC", callback);
// };

// // Ek resource lene ke liye (by id)
// TechLibrary.getById = (id, callback) => {
//   db.query("SELECT * FROM tech_library WHERE id = ?", [id], callback);
// };

// // Resource delete karne ke liye
// TechLibrary.delete = (id, callback) => {
//   db.query("DELETE FROM tech_library WHERE id = ?", [id], callback);
// };

// module.exports = TechLibrary;

//------------------------------------------------------
//------------------------------------------------------

// backend/models/techLibraryModel.js
import pool from "../db.js";

// TechLibrary Model
const TechLibrary = {};

// ➕ Naya resource add karne ke liye
TechLibrary.create = async (data) => {
  const result = await pool.query(
    "INSERT INTO tech_library (category, title, video_url) VALUES ($1, $2, $3) RETURNING *",
    [data.category, data.title, data.video_url]
  );
  return result.rows[0];
};

// 📜 Saare resources lene ke liye
TechLibrary.getAll = async () => {
  const result = await pool.query(
    "SELECT * FROM tech_library ORDER BY id DESC"
  );
  return result.rows;
};

// 🔍 Ek resource lene ke liye (by id)
TechLibrary.getById = async (id) => {
  const result = await pool.query("SELECT * FROM tech_library WHERE id = $1", [
    id,
  ]);
  return result.rows[0];
};

// ❌ Resource delete karne ke liye
TechLibrary.delete = async (id) => {
  await pool.query("DELETE FROM tech_library WHERE id = $1", [id]);
  return { message: "Resource deleted successfully" };
};

export default TechLibrary;
