const qrcode = require('qrcode-terminal');
const tmp = require('tmp');
const fs = require('fs');
const { Client } = require('whatsapp-web.js');

const tmpAuthFile = tmp.fileSync();
let sessionData = {};

if (fs.existsSync(tmpAuthFile.name)) {
  const fileContent = fs.readFileSync(tmpAuthFile.name, 'utf8');
  if (fileContent) {
    try {
      sessionData = JSON.parse(fileContent);
    } catch (err) {
      console.error('Error al analizar el archivo JSON:', err);
    }
  }
}

const client = new Client({
  sessionData,
})

//Genera el código qr para conectarse a whatsapp-web
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

//Si la conexión es exitosa muestra el mensaje de conexión exitosa
client.on('ready', () => {
  console.log('Conexion exitosa nenes');
});

//Aquí sucede la magia, escucha los mensajes y aquí es donde se manipula lo que queremos que haga el bot
client.on('message', message => {
    console.log(message.body);
	if(message.body.toLowerCase() === 'necesito ayuda') {
		client.sendMessage(message.from, 'Escibre cara si necesitas ayuda o escrie jorge para consejos de vida o escribe bachir para ver a una persona similar a un dios.');
	}
}); 

client.on('message', message => {
    console.log(message.body);
	if(message.body.toLowerCase() === 'caranalga') {
		client.sendMessage(message.from, 'aqui esta tu ayuda, escribe jorge ahora anda necesitas un consejo');
	}
});

client.on('message', message => {
    console.log(message.body);
	if(message.body.toLowerCase() === 'bachir') {
		client.sendMessage(message.from, 'https://www.linkedin.com/in/bachir-nasser-83b1b3263/');
	}
});

client.on('message', message => {
    console.log(message.body);
	if(message.body.toLowerCase() === 'jorge') {
		client.sendMessage(message.from, 'tomaa fernet. ');
	}
});

process.on('SIGINT', () => {
    fs.writeFileSync(tmpAuthFile.name, JSON.stringify(client.options.sessionData), 'utf8');
    process.exit(0);
});





//client.initialize();