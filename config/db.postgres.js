// config/db.postgres.js
require('dotenv').config(); // Charge les variables du .env
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE, // 'bookly_sql' 
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Test simple pour vérifier la connexion au démarrage
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Erreur de connexion à PostgreSQL', err.stack);
  } else {
    console.log('✅ Connexion à PostgreSQL (bookly_sql) réussie.');
  }
});

module.exports = pool;