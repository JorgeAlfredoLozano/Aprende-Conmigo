require('dotenv').config()  // Carga las variables de entorno desde el archivo .env
const { SENDGRID } = process.env

const sgMail = require("@sendgrid/mail");
const template = require('./template')
let msg={}

sgMail.setApiKey(SENDGRID);

const sendmail = async(type,email) => {
    if (type="register") {
        msg = {
            to: email,
            from: 'aprendeconmigohenry@gmail.com',
            subject: '¡Bienvenido a la aplicación!',
            preheader: 'Su usuario ha sido creado',
            html: template,
          };
    }
    if (type="payment") {
      msg = {
          to: email,
          from: 'aprendeconmigohenry@gmail.com',
          subject: '¡Pago realizado con exito!',
          preheader: 'un pago ha sido realizado desde su cuenta',
          text: 'pago realizado',
        };
  }
      try {
        await sgMail.send(msg);
        console.log('Correo electrónico enviado correctamente');
      } catch (error) {
        console.error('Error al enviar el correo electrónico', error);
      }
}

module.exports = sendmail;