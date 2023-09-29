const express = require('express');
const rotas = require('./rotas');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(rotas);

app.get('/', (req, res) => {
  res.send('Desafio M05');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
