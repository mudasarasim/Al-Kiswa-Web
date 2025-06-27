const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // GET all contact messages
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM contact_messages ORDER BY id DESC`, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  });

  return router;
};
