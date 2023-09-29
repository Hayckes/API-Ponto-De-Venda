const { criptograrSenha } = require('./src/utils/criptografarCompararSenha');

const senha = async () => {
  const s = await criptograrSenha('1234');
  return s;
};

senha()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
