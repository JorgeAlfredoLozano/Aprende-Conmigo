require('dotenv').config()  // Carga las variables de entorno desde el archivo .env
const { SENDGRID } = process.env

const sgMail = require("@sendgrid/mail");
const templateRegister = require('./templates/templateRegister')
const templateUserBuy = require('./templates/templateUserBuy')
const templateUserSale = require('./templates/templateUserSale')
const templateUserBann = require('./templates/templateUserBann')
const templatePublicationBann = require('./templates/templatePublicationBann')

const publicar = ''
const pagina = ''
const contactar = `https://wa.me/+523311023777?text=${encodeURIComponent('Necesito ayuda')}`

let msg1={}
let msg2={}
sgMail.setApiKey(SENDGRID);

const sendmail = async(type, email, datos, email2, userName, hora, nombre, title) => {
     console.log(type,title,nombre,'tyyyypeee')
  if (type==="register") {
      const saludo=templateRegister(datos,contactar,pagina,publicar)
        msg1 = {
            to: email,
            from: 'aprendeconmigohenry@gmail.com',
            subject: '¡Bienvenido a la aplicación!',
            preheader: 'Su usuario ha sido creado',
            html: saludo,
          };
  }
  if (type==="payment") {
      const buy=templateUserBuy(userName.toUpperCase(),datos.title,contactar)
      const sale=templateUserSale(userName.toUpperCase(),datos.User.name.toUpperCase(), datos.title, hora, contactar)
      msg1 = {
          to: email,
          from: 'aprendeconmigohenry@gmail.com',
          subject: '¡Pago realizado con exito!',
          preheader: 'Ha comprado el curso con éxito',
          html: buy,
        };
        msg2 = {
            to: email2,
            from: 'aprendeconmigohenry@gmail.com',
            subject: `¡Su curso de ${datos.Lessons[0].lesson_name} ha sido comprado!`,
            preheader: 'Se registro un pago de su curso',
            html: sale,
        };
  }
  if (type==="publiOff") {
    const publiOff=templatePublicationBann(nombre.toUpperCase(),contactar,title)
    msg1 = {
      to: email,
      from: 'aprendeconmigohenry@gmail.com',
      subject: '¡Tu publicacion ha sido bloqueada!',
      preheader: 'nawuebonaa',
      html: publiOff,
    };
  };
  if (type==="userOff") {
    const userOff=templatePublicationBann(nombre.toUpperCase(),contactar)
    msg1 = {
      to: email,
      from: 'aprendeconmigohenry@gmail.com',
      subject: '¡Tu usuario ha sido bloqueada!',
      preheader: 'tu cuenta ha sido bloqueada',
      html: userOff,
    };
  };

      try {
        if (type === "register") {
            await sgMail.send(msg1);
        } else if (type === "payment") {
            await sgMail.send(msg1);
            await sgMail.send(msg2);
        } else if (type==="publiOff"){
          await sgMail.send(msg1);
        } else if (type==="userOff"){
          await sgMail.send(msg1);
        }
        console.log('Correo electrónico enviado correctamente');
      } catch (error) {
        console.error('Error al enviar el correo electrónico', error);
      }
}

module.exports = sendmail;