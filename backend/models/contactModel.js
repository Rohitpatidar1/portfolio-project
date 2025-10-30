const db = require("../db");

const Contact = {};

// ➕ Create a new contact
Contact.create = (data, callback) => {
  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [data.name, data.email, data.message], callback);
};

// 📜 Get all contacts (latest first)
Contact.getAll = (callback) => {
  db.query("SELECT * FROM contacts ORDER BY id DESC", callback);
};

// 🔍 Get contact by ID
Contact.getById = (id, callback) => {
  db.query("SELECT * FROM contacts WHERE id = ?", [id], callback); 
};

// ❌ Delete contact by ID
Contact.delete = (id, callback) => {
  db.query("DELETE FROM contacts WHERE id = ?", [id], callback); 
};

module.exports = Contact;
