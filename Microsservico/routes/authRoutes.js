const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth/authController'); 

// --- Rotas de Autenticação (PÚBLICAS) ---

// POST /register: Cria uma nova conta de usuário.
router.post('/register', authController.registerUser);

// ================ NOVO TESTE DE DIAGNÓSTICO ================
// Vamos testar a rota POST /login SEM chamar o controller.
// Se isso funcionar, o problema está DENTRO do authController.loginUser.

router.post('/login', (req, res) => {
  res.status(200).json({ 
    message: "TESTE BEM SUCEDIDO: A rota POST /login foi alcançada!" 
  });
});

// Comentamos a rota original por enquanto:
// router.post('/login', authController.loginUser);
// =========================================================

module.exports = router;