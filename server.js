// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectMongo = require('./config/db.mongo');
const pgPool = require('./config/db.postgres');

connectMongo();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/profiles', profileRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('API Bookly+ Hybride (SQL + NoSQL) fonctionne !');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});