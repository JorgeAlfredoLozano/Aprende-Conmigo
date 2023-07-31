const {User,Login}= require('../../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendmail = require('../../utils/sendmail');
const {LOCAL_URL,FRONT_URL} = process.env
const signinController = async (email,password,name)=>{
    const user = await User.findOne({where:{email:email}});

        if(user){
            return 'Ya existe un usuario con este correo.. '
        } else{ 
            const hashedPassword = await bcrypt.hash(password, 10);
            const newLog = await Login.create({email:email, password:hashedPassword });
            const newUser = await User.create({name,email});
            // Generar token JWT
            const token = jwt.sign({ email: newUser.email, name: newUser.name }, 'secreto_del_token');
            const tokenUrl = `${LOCAL_URL}verificacion?token=${encodeURIComponent(token)}&email=${email}`;
            // Enviar el token por correo electrónico al usuario
            sendmail('token', email, '', '', '', '', '', '', tokenUrl)
            return newUser
        }
}
module.exports = signinController;