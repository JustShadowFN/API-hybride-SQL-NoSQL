const pool = require('../config/db.postgres');

const getAll = async () => {
  const result = await pool.query('SELECT * FROM books ORDER BY id ASC');
  return result.rows;
};
const create = async (title, author, available) => {
  const result = await pool.query(
    'INSERT INTO books (title, author, available) VALUES ($1, $2, $3) RETURNING *',
    [title, author, available]
  );
  return result.rows[0];
};

module.exports = {
  getAll,
  create,
};  