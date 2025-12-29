// const db = require("../db");

// const Contact = {};

// // ➕ Create a new contact
// Contact.create = (data, callback) => {
//   const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
//   db.query(sql, [data.name, data.email, data.message], callback);
// };

// // 📜 Get all contacts (latest first)
// Contact.getAll = (callback) => {
//   db.query("SELECT * FROM contacts ORDER BY id DESC", callback);
// };

// // 🔍 Get contact by ID
// Contact.getById = (id, callback) => {
//   db.query("SELECT * FROM contacts WHERE id = ?", [id], callback);
// };

// // ❌ Delete contact by ID
// Contact.delete = (id, callback) => {
//   db.query("DELETE FROM contacts WHERE id = ?", [id], callback);
// };

// module.exports = Contact;

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

import pool from "../db.js";

const Contact = {};

// ➕ Create a new contact
Contact.create = async (data) => {
  const sql = "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)";
  await pool.query(sql, [data.name, data.email, data.message]);
  return { message: "Contact created successfully" };
};

// 📜 Get all contacts (latest first)
Contact.getAll = async () => {
  const result = await pool.query("SELECT * FROM contacts ORDER BY id DESC");
  return result.rows;
};

// 🔍 Get contact by ID
Contact.getById = async (id) => {
  const result = await pool.query("SELECT * FROM contacts WHERE id = $1", [id]);
  return result.rows[0];
};

// ❌ Delete contact by ID
Contact.delete = async (id) => {
  await pool.query("DELETE FROM contacts WHERE id = $1", [id]);
  return { message: "Contact deleted successfully" };
};

export default Contact;
