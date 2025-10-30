// backend/controllers/techLibraryController.js
const TechLibrary = require("../models/techLibraryModel");

// ✅ Naya resource add karne ke liye
exports.createResource = (req, res) => {
  const data = req.body;
  TechLibrary.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Resource added successfully!" });
  });
};

// ✅ Saare resources get karne ke liye
exports.getAllResources = (req, res) => {
  TechLibrary.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// ✅ Ek resource by id
exports.getResourceById = (req, res) => {
  const id = req.params.id;
  TechLibrary.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0)
      return res.status(404).json({ message: "Resource not found" });
    res.json(result[0]);
  });
};

// ✅ Resource delete karne ke liye
exports.deleteResource = (req, res) => {
  const id = req.params.id;
  TechLibrary.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Resource deleted successfully!" });
  });
};
