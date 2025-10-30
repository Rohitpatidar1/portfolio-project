const db = require("../db");

const Project = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM projects", (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM projects WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        else resolve(result[0]);
      });
    });
  },

  // ✅ Get project by slug
  getBySlug: (slug) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM projects WHERE slug = ?",
        [slug],
        (err, result) => {
          if (err) reject(err);
          else resolve(result[0]);
        }
      );
    });
  },

  create: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO projects (title, slug, description, image, technologies) VALUES (?, ?, ?, ?, ?)",
        [
          data.title,
          data.slug,
          data.description,
          data.image,
          data.technologies,
        ],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },

  update: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE projects SET title=?, slug=?, description=?, image=?, technologies=? WHERE id=?",
        [
          data.title,
          data.slug,
          data.description,
          data.image,
          data.technologies,
          id,
        ],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM projects WHERE id=?", [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },
};

module.exports = Project;
