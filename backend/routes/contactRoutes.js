// backend/routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Naya contact add karne ke liye
router.post("/", contactController.createContact);

// Sare contacts dikhane ke liye
router.get("/", contactController.getAllContacts);

// Ek contact dikhane ke liye (id se)
router.get("/:id", contactController.getContactById);

// Contact delete karne ke liye
router.delete("/:id", contactController.deleteContact);

module.exports = router;
