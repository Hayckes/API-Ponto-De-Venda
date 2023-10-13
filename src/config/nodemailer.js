const nodemailer = require('nodemailer')
const {
  SERVE_EMAIL_HOST,
  SERVE_EMAIL_PORT,
  SERVE_EMAIL_USER,
  SERVE_EMAIL_PASS } = process.env

const transportador = nodemailer.createTransport({
  host: SERVE_EMAIL_HOST,
  port: SERVE_EMAIL_PORT,
  secure: true,
  auth: {
    user: SERVE_EMAIL_USER,
    pass: SERVE_EMAIL_PASS
  }
});


module.exports = transportador
