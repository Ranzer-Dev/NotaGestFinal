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

app.use(cors());
app.use(express.json());

// Rota base para as funcionalidades de Autenticação
app.use('/api/auth', authRoutes);

// ADICIONE ISSO NO FINAL
module.exports = app;
