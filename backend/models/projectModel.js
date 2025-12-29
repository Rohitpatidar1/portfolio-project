// const db = require("../db");

// const Project = {
//   getAll: () => {
//     return new Promise((resolve, reject) => {
//       db.query("SELECT * FROM projects", (err, results) => {
//         if (err) reject(err);
//         else resolve(results);
//       });
//     });
//   },

//   getById: (id) => {
//     return new Promise((resolve, reject) => {
//       db.query("SELECT * FROM projects WHERE id = ?", [id], (err, result) => {
//         if (err) reject(err);
//         else resolve(result[0]);
//       });
//     });
//   },

//   // ✅ Get project by slug
//   getBySlug: (slug) => {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "SELECT * FROM projects WHERE slug = ?",
//         [slug],
//         (err, result) => {
//           if (err) reject(err);
//           else resolve(result[0]);
//         }
//       );
//     });
//   },

//   create: (data) => {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "INSERT INTO projects (title, slug, description, image, technologies) VALUES (?, ?, ?, ?, ?)",
//         [
//           data.title,
//           data.slug,
//           data.description,
//           data.image,
//           data.technologies,
//         ],
//         (err, result) => {
//           if (err) reject(err);
//           else resolve(result);
//         }
//       );
//     });
//   },

//   update: (id, data) => {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "UPDATE projects SET title=?, slug=?, description=?, image=?, technologies=? WHERE id=?",
//         [
//           data.title,
//           data.slug,
//           data.description,
//           data.image,
//           data.technologies,
//           id,
//         ],
//         (err, result) => {
//           if (err) reject(err);
//           else resolve(result);
//         }
//       );
//     });
//   },

//   delete: (id) => {
//     return new Promise((resolve, reject) => {
//       db.query("DELETE FROM projects WHERE id=?", [id], (err, result) => {
//         if (err) reject(err);
//         else resolve(result);
//       });
//     });
//   },
// };

// module.exports = Project;

import pool from "../db.js";

const Project = {
  // 📜 Get all projects
  getAll: async () => {
    const result = await pool.query("SELECT * FROM projects");
    return result.rows;
  },

  // 🔍 Get project by ID
  getById: async (id) => {
    const result = await pool.query("SELECT * FROM projects WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  },

  // ✅ Get project by slug
  getBySlug: async (slug) => {
    const result = await pool.query("SELECT * FROM projects WHERE slug = $1", [
      slug,
    ]);
    return result.rows[0];
  },

  // ➕ Create project
  create: async (data) => {
    const result = await pool.query(
      `INSERT INTO projects 
       (title, slug, description, image, technologies) 
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [data.title, data.slug, data.description, data.image, data.technologies]
    );
    return result.rows[0];
  },

  // ✏️ Update project
  update: async (id, data) => {
    const result = await pool.query(
      `UPDATE projects 
       SET title=$1, slug=$2, description=$3, image=$4, technologies=$5 
       WHERE id=$6
       RETURNING *`,
      [
        data.title,
        data.slug,
        data.description,
        data.image,
        data.technologies,
        id,
      ]
    );
    return result.rows[0];
  },

  // ❌ Delete project
  delete: async (id) => {
    await pool.query("DELETE FROM projects WHERE id = $1", [id]);
    return { message: "Project deleted successfully" };
  },
};

export default Project;
