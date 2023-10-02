const { verificarJwt } = require('../config/db/jwt');

const autenticarUsuario = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === 'Bearer') {
    return res.status(401).json({ mensagem: 'Unauthorized' });
  }

  const bearer = authorization.split(' ');
  const token = bearer[1];

  try {
    const decoded = verificarJwt(token);

    if (!decoded) {
      return res.status(403).json({
        mensagem: 'o usuário não tem permissão de acessar o recurso solicitado',
      });
    }

    const { payload: id } = decoded;
    req.usuario_id = id;
    next();
  } catch (err) {
    return res.status(401).json({ mensagem: 'o usuário não está autenticado' });
  }
};

module.exports = autenticarUsuario;
