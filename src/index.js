const express = require('express');

const port = process.env.PORT || 3000;
const rotas = require('./rotas')
const app = express();

app.use(express.json());
app.use(rotas);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
