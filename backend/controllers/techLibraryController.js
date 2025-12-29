// // backend/controllers/techLibraryController.js
// const TechLibrary = require("../models/techLibraryModel");

// // ✅ Naya resource add karne ke liye
// exports.createResource = (req, res) => {
//   const data = req.body;
//   TechLibrary.create(data, (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.status(201).json({ message: "Resource added successfully!" });
//   });
// };

// // ✅ Saare resources get karne ke liye
// exports.getAllResources = (req, res) => {
//   TechLibrary.getAll((err, results) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(results);
//   });
// };

// // ✅ Ek resource by id
// exports.getResourceById = (req, res) => {
//   const id = req.params.id;
//   TechLibrary.getById(id, (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     if (result.length === 0)
//       return res.status(404).json({ message: "Resource not found" });
//     res.json(result[0]);
//   });
// };

// // ✅ Resource delete karne ke liye
// exports.deleteResource = (req, res) => {
//   const id = req.params.id;
//   TechLibrary.delete(id, (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ message: "Resource deleted successfully!" });
//   });
// };

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// backend/controllers/techLibraryController.js
import TechLibrary from "../models/techLibraryModel.js";

// ➕ Naya resource add karne ke liye
export const createResource = async (req, res) => {
  try {
    const data = req.body;
    await TechLibrary.create(data);
    res.status(201).json({ message: "Resource added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📜 Saare resources get karne ke liye
export const getAllResources = async (req, res) => {
  try {
    const results = await TechLibrary.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Ek resource by id
export const getResourceById = async (req, res) => {
  try {
    const id = req.params.id;
    const resource = await TechLibrary.getById(id);

    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    res.json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Resource delete karne ke liye
export const deleteResource = async (req, res) => {
  try {
    const id = req.params.id;
    await TechLibrary.delete(id);
    res.json({ message: "Resource deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
