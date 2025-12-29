// // backend/controllers/contactController.js
// const Contact = require("../models/contactModel");

// // Naya contact add karne ke liye
// exports.createContact = (req, res) => {
//   const data = req.body;

//   if (!data.name || !data.email || !data.message) {
//     return res.json({ message: "Please fill all fields" });
//   }

//   Contact.create(data, (err, result) => {
//     if (err) {
//       console.log(err);
//       return res.json({ message: "Error while saving contact" });
//     }
//     res.json({ message: "Contact saved successfully" });
//   });
// };

// // Sare contacts dikhane ke liye
// exports.getAllContacts = (req, res) => {
//   Contact.getAll((err, results) => {
//     if (err) return res.json({ message: "Error while fetching contacts" });
//     res.json(results);
//   });
// };

// // Ek contact dikhane ke liye
// exports.getContactById = (req, res) => {
//   const id = req.params.id;

//   Contact.getById(id, (err, result) => {
//     if (err) return res.json({ message: "Error while fetching contact" });
//     res.json(result[0]);
//   });
// };

// // Contact delete karne ke liye
// exports.deleteContact = (req, res) => {
//   const id = req.params.id;

//   Contact.delete(id, (err, result) => {
//     if (err) return res.json({ message: "Error while deleting contact" });
//     res.json({ message: "Contact deleted successfully" });
//   });
// };

//

// backend/controllers/contactController.js
import Contact from "../models/contactModel.js";

// ➕ Naya contact add karne ke liye
export const createContact = async (req, res) => {
  try {
    const data = req.body;

    if (!data.name || !data.email || !data.message) {
      return res.json({ message: "Please fill all fields" });
    }

    await Contact.create(data);
    res.json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error while saving contact" });
  }
};

// 📜 Sare contacts dikhane ke liye
export const getAllContacts = async (req, res) => {
  try {
    const results = await Contact.getAll();
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error while fetching contacts" });
  }
};

// 🔍 Ek contact dikhane ke liye
export const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Contact.getById(id);

    if (!result) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error while fetching contact" });
  }
};

// ❌ Contact delete karne ke liye
export const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.delete(id);
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error while deleting contact" });
  }
};
