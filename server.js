const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/mensagens', (req, res) => {
  
  const objeto = [
    { id: 1,
      status: 'sucesso', 
      mensagem: 'Você está mais próximo de se juntar ao time!' 
    }
  ];
  
  res.json(objeto);
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
  console.log(`API disponível em http://localhost:${port}/mensagens`);
});