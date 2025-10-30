const Project = require("../models/projectModel");

// GET /api/projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/projects/:id
exports.getProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.getById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/projects
exports.createProject = async (req, res) => {
  try {
    const data = req.body;
    const result = await Project.create(data);
    res.json({ message: "Project created successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/projects/:id
exports.updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await Project.update(id, data);
    res.json({ message: "Project updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const project = await Project.getBySlug(slug);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/projects/:id
exports.deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    await Project.delete(id);
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
