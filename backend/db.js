// // const mysql = require("mysql2");
// // require("dotenv").config();

// // const db = mysql.createConnection({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASS,
// //   database: process.env.DB_NAME
// // });

// // db.connect((err) => {
// //   if (err) console.log("❌ MySQL Connection Failed:", err.message);
// //   else console.log("✅ MySQL Connected Successfully");
// // });

// // module.exports = db; // <- directly export

// // src/db.js (Updated Version)
// const mysql = require("mysql2");
// require("dotenv").config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT, // <-- YEH NAYI LINE ADD KI GAYI HAI
// });

// db.connect((err) => {
//   if (err) console.log("❌ MySQL Connection Failed:", err.message);
//   else console.log("✅ MySQL Connected Successfully");
// });

// module.exports = db; // <- directly export

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// const mysql = require("mysql2");
// require("dotenv").config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.log("❌ MySQL Connection Failed:", err.message);
//   } else {
//     console.log("✅ MySQL Connected Successfully");
//     connection.release();
//   }
// });

// module.exports = pool;
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 5,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 10000,
});

// Prevent crash
pool.on("error", (err) => {
  console.error("⚠️ Unexpected PG Pool Error:", err.message);
});

// ✅ Safe connection message
(async () => {
  try {
    const client = await pool.connect();
    console.log("✅ PostgreSQL (Supabase) Pool Ready");
    client.release();
  } catch (err) {
    console.error("❌ PostgreSQL Connection Failed:", err.message);
  }
})();

export default pool;
