const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth/authController'); 

// --- Rotas de Autenticação (PÚBLICAS) ---

// POST /register: Cria uma nova conta de usuário.
router.post('/register', authController.registerUser);

// ================ TESTE DE DIAGNÓSTICO ================
// Vamos adicionar temporariamente um handler GET para ver se é isso que o frontend está enviando
router.get('/login', (req, res) => {
  // Se o frontend bater aqui, ele enviou um GET
  res.status(418).json({ 
    error: "ERRO DE DIAGNÓSTICO: Você enviou um GET, mas o login espera um POST." 
  });
});
// ====================================================

// POST /login: Autentica o usuário e retorna o JWT.
router.post('/login', authController.loginUser);

module.exports = router;