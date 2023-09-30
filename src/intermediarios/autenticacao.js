/* eslint-disable no-unused-vars */
const { verificarJwt } = require("../config/db/jwt");

function Autenticacao(req, res, next) {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    const token = bearer[1];

    try {
      const decoded = verificarJwt(token);

      if (decoded) {
        const { iat, exp, ...userWithoutIatExp } = decoded;

        req.user = userWithoutIatExp;
        next();
      } else {
        res.status(403);
        res.json({ mensagem: "Forbidden" });
        return;
      }
    } catch (err) {
      res.status(401);
      res.send("Unauthorized");
      return;
    }
  } else {
    res.status(401);
    res.json({ mensagem: "Unauthorized" });
    return;
  }
}

module.exports = {
  Autenticacao,
};
