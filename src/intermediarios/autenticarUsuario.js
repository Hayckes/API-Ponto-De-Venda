const { verificarJwt } = require('../config/db/jwt');

const autenticarUsuario = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === 'Bearer') {
    return res.status(401).json({ mensagem: 'o usuário não está autenticado' });
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = verificarJwt(token);

    if (!decoded) {
      return res.status(403).json({
        mensagem: 'o usuário não tem permissão de acessar o recurso solicitado',
      });
    }
    const { id } = decoded;
    req.usuario_id = id;

    return next();
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = autenticarUsuario;
