// Arquivo: Microsserviço/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoDb'); 

const authRoutes = require('./routes/authRoutes'); 

dotenv.config();

// Conexão ao banco de dados MongoDB (Cada microsserviço tem o seu DB)
connectDB();

const app = express();

const corsOptions = {
  origin: '*', // Permite todas as origens
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  optionsSuccessStatus: 200 // Responde 200 para requisições OPTIONS
};

app.use(cors(corsOptions));
app.options('/api/auth/*', cors(corsOptions));
app.use(express.json());

// Rota base para as funcionalidades de Autenticação
app.use('/api/auth', authRoutes);

// ADICIONE ISSO NO FINAL
module.exports = app;
