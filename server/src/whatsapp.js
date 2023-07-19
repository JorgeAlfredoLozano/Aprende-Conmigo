
// const qrcode = require('qrcode-terminal');

// //Crea una sesión con whatsapp-web y la guarda localmente para autenticarse solo una vez por QR
// const { Client, LocalAuth, } = require('whatsapp-web.js');
// const client = new Client({
//     authStrategy: new LocalAuth()
// });

// //Genera el código qr para conectarse a whatsapp-web
// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// //Si la conexión es exitosa muestra el mensaje de conexión exitosa
// client.on('ready', () => {
//     console.log('Conexion exitosa nenes');
// });


// //Aquí sucede la magia, escucha los mensajes y aquí es donde se manipula lo que queremos que haga el bot
// client.on('message', message => {
//     console.log(message.body);
// 	if(message.body === 'necesito ayuda') {
// 		client.sendMessage(message.from, 'Escibre caranalga si necesitas ayuda o escrie jorge para consejos de vida o escribe bachir para ver a una persona similar a un dios.');
// 	}
// }); 

// client.on('message', message => {
//     console.log(message.body);
// 	if(message.body === 'caranalga') {
// 		client.sendMessage(message.from, 'aqui esta tu ayuda puta .l., escribe jorge ahora anda necesitas un consejo');
// 	}
// });

// client.on('message', message => {
//     console.log(message.body);
// 	if(message.body === 'bachir') {
// 		client.sendMessage(message.from, 'https://www.linkedin.com/in/bachir-nasser-83b1b3263/');
// 	}
// });

// client.on('message', message => {
//     console.log(message.body);
// 	if(message.body === 'jorge') {
// 		client.sendMessage(message.from, 'tomaa fernet. ');
// 	}
// });





// client.initialize();