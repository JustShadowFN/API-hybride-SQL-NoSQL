require('dotenv').config(); 
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI; 

const connectMongo = async () => {
  if (!MONGO_URI) {
    console.error('❌ Erreur: La variable MONGO_URI est manquante dans le .env');
    process.exit(1); 
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connexion à MongoDB (bookly_nosql) réussie.');
  } catch (err) {
    console.error('❌ Erreur de connexion à MongoDB', err.message);
    process.exit(1);
  }
};

module.exports = connectMongo;