// Importando o Express
const express = require("express");

// Inicializando a aplicação Express
const app = express();

// Definindo a porta
const PORT = 3000;

// Definindo a rota raíz "/"
app.get("/", (req, res) => {
  console.log(`GET / called`);
  res.send("UP"); // Retorna a mensagem "UP"
});

// Iniciando o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
