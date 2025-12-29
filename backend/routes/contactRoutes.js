// // backend/routes/contactRoutes.js
// const express = require("express");
// const router = express.Router();
// const contactController = require("../controllers/contactController");

// // Naya contact add karne ke liye
// router.post("/", contactController.createContact);

// // Sare contacts dikhane ke liye
// router.get("/", contactController.getAllContacts);

// // Ek contact dikhane ke liye (id se)
// router.get("/:id", contactController.getContactById);

// // Contact delete karne ke liye
// router.delete("/:id", contactController.deleteContact);

// module.exports = router;


// backend/routes/contactRoutes.js
import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Naya contact add karne ke liye
router.post("/", createContact);

// Sare contacts dikhane ke liye
router.get("/", getAllContacts);

// Ek contact dikhane ke liye (id se)
router.get("/:id", getContactById);

// Contact delete karne ke liye
router.delete("/:id", deleteContact);

export default router;
